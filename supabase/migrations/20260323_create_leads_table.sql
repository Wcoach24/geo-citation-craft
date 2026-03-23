-- Leads table for email capture and drip sequence tracking
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'inline',
  emails_sent INTEGER DEFAULT 0,
  last_email_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  unsubscribed BOOLEAN DEFAULT false,
  converted BOOLEAN DEFAULT false
);

-- Index for the drip sequence processor
CREATE INDEX IF NOT EXISTS idx_leads_drip ON public.leads (emails_sent, unsubscribed, created_at)
  WHERE emails_sent < 5 AND unsubscribed = false;

-- Index for email uniqueness checks
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);

-- RLS: only service role can access
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
