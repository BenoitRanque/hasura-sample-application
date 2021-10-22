CREATE TABLE public.account_currency_history (
    account_id INTEGER NOT NULL,
    currency_id CHARACTER(3) NOT NULL,

    created_by_user_id INTEGER,
    updated_by_user_id INTEGER,
    deleted_by_user_id INTEGER,
    sys_period TSTZRANGE NOT NULL,
    EXCLUDE USING gist (account_id WITH =, currency_id WITH =, sys_period WITH &&)
);

CREATE TABLE public.account_currency (
    PRIMARY KEY (account_id, currency_id),
    FOREIGN KEY (account_id) REFERENCES public.account (id) ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (currency_id) REFERENCES public.currency (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (created_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (updated_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (deleted_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT
) INHERITS (public.account_currency_history);

-- triggers run in alphabetical order, numbers in their name ensure proper execution order
CREATE TRIGGER trigger_001_supress_redundant_updates
BEFORE UPDATE ON public.account_currency
FOR EACH ROW EXECUTE FUNCTION suppress_redundant_updates_trigger();

CREATE TRIGGER trigger_002_versioning
BEFORE INSERT OR UPDATE OR DELETE ON public.account_currency
FOR EACH ROW EXECUTE FUNCTION versioning('sys_period', 'public.account_currency_history', true);

COMMENT ON TABLE  public.account_currency                                   IS 'Account and Currency relationship';
COMMENT ON COLUMN public.account_currency.account_id                        IS 'Account id. Primary key, Foreign Key';
COMMENT ON COLUMN public.account_currency.currency_id                       IS 'Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key';

COMMENT ON COLUMN public.account_currency.created_by_user_id                IS 'id of user who created this record';
COMMENT ON COLUMN public.account_currency.updated_by_user_id                IS 'id of user who updated this record';
COMMENT ON COLUMN public.account_currency.deleted_by_user_id                IS 'id of user who deleted this record';
COMMENT ON COLUMN public.account_currency.sys_period                        IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';


COMMENT ON TABLE  public.account_currency_history                           IS 'Account and Currency relationship History';
COMMENT ON COLUMN public.account_currency_history.account_id                IS 'Account id. Primary key, Foreign Key';
COMMENT ON COLUMN public.account_currency_history.currency_id               IS 'Currency ISO 4217 code, 3 characters long. Primary key, Foreign Key';

COMMENT ON COLUMN public.account_currency_history.created_by_user_id        IS 'id of user who created this record';
COMMENT ON COLUMN public.account_currency_history.updated_by_user_id        IS 'id of user who updated this record';
COMMENT ON COLUMN public.account_currency_history.deleted_by_user_id        IS 'id of user who deleted this record';
COMMENT ON COLUMN public.account_currency_history.sys_period                IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';

