-- Force removal of UNIQUE constraint and add proper indexes
ALTER TABLE public.guest_access DROP CONSTRAINT IF EXISTS guest_access_access_token_key;

-- Add index for better performance on token lookups (non-unique)
CREATE INDEX IF NOT EXISTS idx_guest_access_token ON public.guest_access(access_token);

-- Add index for email lookups
CREATE INDEX IF NOT EXISTS idx_guest_access_email ON public.guest_access(email);