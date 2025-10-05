-- Remove UNIQUE constraint on access_token to allow multiple modules with same token
ALTER TABLE public.guest_access DROP CONSTRAINT IF EXISTS guest_access_access_token_key;