-- this extension is used to create EXCLUDE constrainsts on histoy tables. example:
-- EXCLUDE USING gist (id WITH =, sys_period WITH &&)
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- this extension is used for password hashing, and possibly uuid generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;