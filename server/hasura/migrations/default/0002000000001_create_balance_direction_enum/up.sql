CREATE TYPE public.balance_direction AS ENUM ('debit', 'credit');

COMMENT ON TYPE public.balance_direction IS 'Balance direction enum. Valid values are "debit" and "credit"';