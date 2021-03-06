CREATE TABLE public.session_history (
    id INTEGER NOT NULL,
    sid TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    expiry TIMESTAMP WITH TIME ZONE,
    created_by_user_id INTEGER,
    updated_by_user_id INTEGER,
    deleted_by_user_id INTEGER,
    sys_period TSTZRANGE NOT NULL,
    EXCLUDE USING gist (id WITH =, sys_period WITH &&)
);

CREATE TABLE public.session (
    id INTEGER NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    expiry TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY (id),
    UNIQUE(sid),
    FOREIGN KEY (user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (created_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (updated_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (deleted_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT
) INHERITS (public.session_history);

-- triggers run in alphabetical order, numbers in their name ensure proper execution order
CREATE TRIGGER trigger_001_supress_redundant_updates
BEFORE UPDATE ON public.session
FOR EACH ROW EXECUTE FUNCTION suppress_redundant_updates_trigger();

-- special case: do not trigger versioning when updating expiry column
-- this column is regularly updated automatically, we don't want new versions being created each time
-- instead, add all other columns to trigger
CREATE TRIGGER trigger_002_versioning
BEFORE INSERT OR UPDATE OF
    id, sid, user_id, created_by_user_id, updated_by_user_id, deleted_by_user_id, sys_period 
OR DELETE ON public.session
FOR EACH ROW EXECUTE FUNCTION versioning('sys_period', 'public.session_history', true);

COMMENT ON TABLE  public.session                                   IS 'Session';
COMMENT ON COLUMN public.session.id                                IS 'Primary Key';
COMMENT ON COLUMN public.session.sid                               IS 'Session Id. Client-safe session identifier string. Unique.';
COMMENT ON COLUMN public.session.user_id                           IS 'User id. Foreign key';
COMMENT ON COLUMN public.session.expiry                            IS 'When the session expires. Null on deleted sessions';

COMMENT ON COLUMN public.session.created_by_user_id                IS 'id of user who created this record';
COMMENT ON COLUMN public.session.updated_by_user_id                IS 'id of user who updated this record';
COMMENT ON COLUMN public.session.deleted_by_user_id                IS 'id of user who deleted this record';
COMMENT ON COLUMN public.session.sys_period                        IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';


COMMENT ON TABLE  public.session_history                           IS 'Session History';
COMMENT ON COLUMN public.session_history.id                        IS 'Primary Key';
COMMENT ON COLUMN public.session_history.sid                       IS 'Session Id. Client-safe session identifier string. Unique.';
COMMENT ON COLUMN public.session_history.user_id                   IS 'User id. Foreign key';
COMMENT ON COLUMN public.session_history.expiry                    IS 'When the session expires. Null on deleted sessions';

COMMENT ON COLUMN public.session_history.created_by_user_id        IS 'id of user who created this record';
COMMENT ON COLUMN public.session_history.updated_by_user_id        IS 'id of user who updated this record';
COMMENT ON COLUMN public.session_history.deleted_by_user_id        IS 'id of user who deleted this record';
COMMENT ON COLUMN public.session_history.sys_period                IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';

