
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

CREATE INDEX IF NOT EXISTS idx_leads_drip ON public.leads (emails_sent, unsubscribed, created_at)
  WHERE emails_sent < 5 AND unsubscribed = false;

CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access on leads"
  ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert for lead capture"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
