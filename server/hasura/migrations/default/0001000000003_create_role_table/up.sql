CREATE TABLE public.role_history (
    id TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,

    created_by_user_id INTEGER,
    updated_by_user_id INTEGER,
    deleted_by_user_id INTEGER,
    sys_period TSTZRANGE NOT NULL,
    EXCLUDE USING gist (id WITH =, sys_period WITH &&)
);

CREATE TABLE public.role (
    PRIMARY KEY (id),
    FOREIGN KEY (created_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (updated_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (deleted_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT
) INHERITS (public.role_history);

-- triggers run in alphabetical order, numbers in their name ensure proper execution order
CREATE TRIGGER trigger_001_supress_redundant_updates
BEFORE UPDATE ON public.role
FOR EACH ROW EXECUTE FUNCTION suppress_redundant_updates_trigger();

CREATE TRIGGER trigger_002_versioning
BEFORE INSERT OR UPDATE OR DELETE ON public.role
FOR EACH ROW EXECUTE FUNCTION versioning('sys_period', 'public.role_history', true);

COMMENT ON TABLE  public.role                                   IS 'Role';
COMMENT ON COLUMN public.role.id                                IS 'Internal name, Primary key';
COMMENT ON COLUMN public.role.name                              IS 'User friendly role name';
COMMENT ON COLUMN public.role.description                       IS 'User friendly description of the role';

COMMENT ON COLUMN public.role.created_by_user_id                IS 'id of user who created this record';
COMMENT ON COLUMN public.role.updated_by_user_id                IS 'id of user who updated this record';
COMMENT ON COLUMN public.role.deleted_by_user_id                IS 'id of user who deleted this record';
COMMENT ON COLUMN public.role.sys_period                        IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';


COMMENT ON TABLE  public.role_history                           IS 'Role History';
COMMENT ON COLUMN public.role_history.id                        IS 'Internal name, Primary key';
COMMENT ON COLUMN public.role_history.name                      IS 'User friendly role name';
COMMENT ON COLUMN public.role_history.description               IS 'User friendly description of the role';

COMMENT ON COLUMN public.role_history.created_by_user_id        IS 'id of user who created this record';
COMMENT ON COLUMN public.role_history.updated_by_user_id        IS 'id of user who updated this record';
COMMENT ON COLUMN public.role_history.deleted_by_user_id        IS 'id of user who deleted this record';
COMMENT ON COLUMN public.role_history.sys_period                IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';

