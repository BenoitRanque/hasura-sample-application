
CREATE TABLE public.currency_history (
    id CHARACTER(3) NOT NULL,
    name TEXT NOT NULL,
    symbol TEXT,
    fractional_units SMALLINT NOT NULL DEFAULT 100 CHECK (fractional_units > 0),
    decimal_separator CHARACTER(1) DEFAULT '.',
    group_delimiter CHARACTER(1) DEFAULT ',',

    created_by_user_id INTEGER,
    updated_by_user_id INTEGER,
    deleted_by_user_id INTEGER,
    sys_period TSTZRANGE NOT NULL,
    EXCLUDE USING gist (id WITH =, sys_period WITH &&)
);

CREATE TABLE public.currency (
    PRIMARY KEY (id),
    CHECK (fractional_units > 0),
    FOREIGN KEY (created_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (updated_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (deleted_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT
) INHERITS (public.currency_history);

-- triggers run in alphabetical order, numbers in their name ensure proper execution order
CREATE TRIGGER trigger_001_supress_redundant_updates
BEFORE UPDATE ON public.currency
FOR EACH ROW EXECUTE FUNCTION suppress_redundant_updates_trigger();

CREATE TRIGGER trigger_002_versioning
BEFORE INSERT OR UPDATE OR DELETE ON public.currency
FOR EACH ROW EXECUTE FUNCTION versioning('sys_period', 'public.currency_history', true);

COMMENT ON TABLE  public.currency                                   IS 'Currency';
COMMENT ON COLUMN public.currency.id                                IS 'Currency ISO 4217 code, 3 characters long. Primary key';
COMMENT ON COLUMN public.currency.name                              IS 'Full currency name';
COMMENT ON COLUMN public.currency.symbol                            IS 'Currency symbol, prefixed when displayed. Eg: $ for US Dollar';
COMMENT ON COLUMN public.currency.fractional_units                  IS 'Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1';
COMMENT ON COLUMN public.currency.decimal_separator                 IS 'Separator used to separate fractional units from full units. Default: "."';
COMMENT ON COLUMN public.currency.group_delimiter                   IS 'Group delimiter, used to display large sums. Also knows as thousands separator. Default: ","';

COMMENT ON COLUMN public.currency.created_by_user_id                IS 'id of user who created this record';
COMMENT ON COLUMN public.currency.updated_by_user_id                IS 'id of user who updated this record';
COMMENT ON COLUMN public.currency.deleted_by_user_id                IS 'id of user who deleted this record';
COMMENT ON COLUMN public.currency.sys_period                        IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';


COMMENT ON TABLE  public.currency_history                           IS 'Currency History';
COMMENT ON COLUMN public.currency_history.id                        IS 'Currency ISO 4217 code, 3 characters long. Primary key';
COMMENT ON COLUMN public.currency_history.name                      IS 'Full currency name';
COMMENT ON COLUMN public.currency_history.symbol                    IS 'Currency symbol, prefixed when displayed. Eg: $ for US Dollar';
COMMENT ON COLUMN public.currency_history.fractional_units          IS 'Number of fractional units per currency unit. Typically 100 (cents per unit). If currency has no fractional unit, the value should be 1';
COMMENT ON COLUMN public.currency_history.decimal_separator         IS 'Separator used to separate fractional units from full units. Default: "."';
COMMENT ON COLUMN public.currency_history.group_delimiter           IS 'Group delimiter, used to display large sums. Also knows as thousands separator. Default: ","';

COMMENT ON COLUMN public.currency_history.created_by_user_id        IS 'id of user who created this record';
COMMENT ON COLUMN public.currency_history.updated_by_user_id        IS 'id of user who updated this record';
COMMENT ON COLUMN public.currency_history.deleted_by_user_id        IS 'id of user who deleted this record';
COMMENT ON COLUMN public.currency_history.sys_period                IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';

