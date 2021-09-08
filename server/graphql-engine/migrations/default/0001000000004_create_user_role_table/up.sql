CREATE TABLE public.user_role_history (
    user_id INTEGER NOT NULL,
    role_id TEXT NOT NULL,

    created_by_user_id INTEGER,
    updated_by_user_id INTEGER,
    deleted_by_user_id INTEGER,
    sys_period TSTZRANGE NOT NULL,
    EXCLUDE USING gist (user_id WITH =, role_id WITH =, sys_period WITH &&)
);

CREATE TABLE public.user_role (
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES public.role (id) ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (created_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (updated_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY (deleted_by_user_id) REFERENCES public.user (id) ON UPDATE RESTRICT ON DELETE RESTRICT
) INHERITS (public.user_role_history);

-- triggers run in alphabetical order, numbers in their name ensure proper execution order
CREATE TRIGGER trigger_001_supress_redundant_updates
BEFORE UPDATE ON public.user_role
FOR EACH ROW EXECUTE FUNCTION suppress_redundant_updates_trigger();

CREATE TRIGGER trigger_002_versioning
BEFORE INSERT OR UPDATE OR DELETE ON public.user_role
FOR EACH ROW EXECUTE FUNCTION versioning('sys_period', 'public.user_role_history', true);

COMMENT ON TABLE  public.user_role                                   IS 'User and Role relationship';
COMMENT ON COLUMN public.user_role.user_id                           IS 'User id, Primary key';
COMMENT ON COLUMN public.user_role.role_id                           IS 'Role id, Primary key';

COMMENT ON COLUMN public.user_role.created_by_user_id                IS 'id of user who created this record';
COMMENT ON COLUMN public.user_role.updated_by_user_id                IS 'id of user who updated this record';
COMMENT ON COLUMN public.user_role.deleted_by_user_id                IS 'id of user who deleted this record';
COMMENT ON COLUMN public.user_role.sys_period                        IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';


COMMENT ON TABLE  public.user_role_history                           IS 'User and Role relationship History';
COMMENT ON COLUMN public.user_role_history.user_id                   IS 'User id, Primary key';
COMMENT ON COLUMN public.user_role_history.role_id                   IS 'Role id, Primary key';

COMMENT ON COLUMN public.user_role_history.created_by_user_id        IS 'id of user who created this record';
COMMENT ON COLUMN public.user_role_history.updated_by_user_id        IS 'id of user who updated this record';
COMMENT ON COLUMN public.user_role_history.deleted_by_user_id        IS 'id of user who deleted this record';
COMMENT ON COLUMN public.user_role_history.sys_period                IS 'Effective system period for this record. Use in conjunction with primary key to retrieve past versions from history table';

