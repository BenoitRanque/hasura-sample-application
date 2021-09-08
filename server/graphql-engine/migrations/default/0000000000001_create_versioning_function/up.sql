-- temporal table versioning function 
-- from https://github.com/nearform/temporal_tables/
CREATE OR REPLACE FUNCTION versioning()
RETURNS TRIGGER AS $$
DECLARE
    sys_period text;
    history_table text;
    manipulate jsonb;
    commonColumns text[];
    time_stamp_to_use timestamptz := current_timestamp;
    range_lower timestamptz;
    transaction_info txid_snapshot;
    existing_range tstzrange;
BEGIN
    
    -- session tracking
    CASE TG_OP
        WHEN 'INSERT' THEN
            NEW.created_by_user_id = (current_setting('hasura.user', true)::json->>'x-hasura-user-id')::INTEGER;
        WHEN 'UPDATE' THEN
            -- handle case where this trigger fires twice due to a ON CONFLICT DO UPDATE clause
            -- else the original value for created_by_user_id could be lost
            IF NEW.created_by_user_id <> OLD.created_by_user_id THEN
                NEW.created_by_user_id = OLD.created_by_user_id;
            END IF;
            NEW.updated_by_user_id = (current_setting('hasura.user', true)::json->>'x-hasura-user-id')::INTEGER;
        WHEN 'DELETE' THEN
            OLD.deleted_by_user_id = (current_setting('hasura.user', true)::json->>'x-hasura-user-id')::INTEGER;
    END CASE;

    -- session table specific behavior
    -- this is only necesary if OLD is modified during delete operations
    -- such changes won't travel across triggers so they must all happen here
    IF TG_TABLE_NAME = 'session' THEN
        -- sessions inserted  without setting a created_by_user_id value
        -- are assumed to be created by the user themselves
        -- this happens when the "hasura.user" transaction setting is not set
        -- which may happen during insert
        IF TG_OP = 'INSERT' THEN
            IF NEW.created_by_user_id IS NULL THEN
                NEW.created_by_user_id = NEW.user_id;
            END IF;
        END IF;
        -- sessions deleted without setting a deleted_by_user_id value
        -- are assumed to be deleted by the user themselves
        -- this happens when the "hasura.user" transaction setting is not set
        -- which is the case when executing the session cleanup task
        -- and may be the case when executing the logout action.
        IF TG_OP = 'DELETE' THEN
            IF OLD.deleted_by_user_id IS NULL THEN
                OLD.deleted_by_user_id = OLD.user_id;
            END IF;
            OLD.expiry = NULL;
        END IF;
    END IF;

    -- version 0.4.0

    sys_period := TG_ARGV[0];
    history_table := TG_ARGV[1];

    IF TG_OP = 'UPDATE' OR TG_OP = 'DELETE' THEN
        -- Ignore rows already modified in this transaction
        transaction_info := txid_current_snapshot();
        IF OLD.xmin::text >= (txid_snapshot_xmin(transaction_info) % (2^32)::bigint)::text
        AND OLD.xmin::text <= (txid_snapshot_xmax(transaction_info) % (2^32)::bigint)::text THEN
            IF TG_OP = 'DELETE' THEN
                RETURN OLD;
            END IF;

            RETURN NEW;
        END IF;

        EXECUTE format('SELECT $1.%I', sys_period) USING OLD INTO existing_range;

        IF TG_ARGV[2] = 'true' THEN
            -- mitigate update conflicts
            range_lower := lower(existing_range);
            IF range_lower >= time_stamp_to_use THEN
                time_stamp_to_use := range_lower + interval '1 microseconds';
            END IF;
        END IF;

        WITH history AS
            (SELECT attname
            FROM   pg_attribute
            WHERE  attrelid = history_table::regclass
            AND    attnum > 0
            AND    NOT attisdropped),
            main AS
            (SELECT attname
            FROM   pg_attribute
            WHERE  attrelid = TG_RELID
            AND    attnum > 0
            AND    NOT attisdropped)
        SELECT array_agg(quote_ident(history.attname)) INTO commonColumns
            FROM history
            INNER JOIN main
            ON history.attname = main.attname
            AND history.attname != sys_period;

        EXECUTE ('INSERT INTO ' ||
            history_table ||
            '(' ||
            array_to_string(commonColumns , ',') ||
            ',' ||
            quote_ident(sys_period) ||
            ') VALUES ($1.' ||
            array_to_string(commonColumns, ',$1.') ||
            ',tstzrange($2, $3, ''[)''))')
        USING OLD, range_lower, time_stamp_to_use;
    END IF;

    IF TG_OP = 'UPDATE' OR TG_OP = 'INSERT' THEN
        manipulate := jsonb_set('{}'::jsonb, ('{' || sys_period || '}')::text[], to_jsonb(tstzrange(time_stamp_to_use, null, '[)')));

        RETURN jsonb_populate_record(NEW, manipulate);
    END IF;

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION versioning IS 'Versioning trigger function will copy historical data to history table.';