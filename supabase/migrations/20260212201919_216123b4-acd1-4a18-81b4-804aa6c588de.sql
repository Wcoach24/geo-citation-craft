
-- Fix CRITICAL vulnerability: guest_access RLS allows public read of all data
-- Drop the insecure policy
DROP POLICY IF EXISTS "Public can view with valid token" ON public.guest_access;

-- Create secure policy that requires matching access_token via RPC function
-- Since RLS can't read request headers, we use a security definer function
-- The client must pass the token as a query parameter

-- Create a function to validate guest access by token
CREATE OR REPLACE FUNCTION public.get_guest_access_by_token(p_token text)
RETURNS SETOF public.guest_access
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.guest_access
  WHERE access_token = p_token
    AND expires_at > now();
$$;

-- Create an index on access_token for performance
CREATE INDEX IF NOT EXISTS idx_guest_access_token ON public.guest_access(access_token);

-- Create a restrictive RLS policy - no direct SELECT allowed via anon
-- All access goes through the security definer function above
CREATE POLICY "No direct access to guest_access"
ON public.guest_access
FOR SELECT
USING (false);
