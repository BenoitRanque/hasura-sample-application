SET LOCAL "hasura.user" = '{ "x-hasura-user-id": 0 }';

INSERT INTO public.user (id, username, password, display_name)
VALUES (0, 'admin', 'admin', 'Administrador');

INSERT INTO public.role (id, name, description) VALUES
    ('admin', 'Administrador', 'Administrador maximo con todos los privilegios');

INSERT INTO public.user_role (user_id, role_id) VALUES
    (0, 'admin');