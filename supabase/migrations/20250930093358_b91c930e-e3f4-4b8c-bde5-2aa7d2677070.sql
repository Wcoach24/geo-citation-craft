-- Create guest_access table for non-authenticated purchases
CREATE TABLE public.guest_access (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  access_token TEXT NOT NULL UNIQUE,
  purchase_id UUID REFERENCES public.purchases(id),
  product_type TEXT NOT NULL,
  module_id TEXT,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for fast token lookups
CREATE INDEX idx_guest_access_token ON public.guest_access(access_token);
CREATE INDEX idx_guest_access_email ON public.guest_access(email);

-- Enable RLS
ALTER TABLE public.guest_access ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone with a valid token can view their access
CREATE POLICY "Public can view with valid token" 
ON public.guest_access 
FOR SELECT 
USING (true);