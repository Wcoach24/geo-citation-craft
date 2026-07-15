-- MASTERPLAN F3-2 — purchases escribible por el webhook vivo (api/stripe-webhook.ts)
-- y consultable por el cron /api/email-sequence para el email de testimonio (+7 días).
--
-- La tabla original (20250929142900) se diseñó para el flujo con auth de Lovable:
-- user_id + stripe_product_id/stripe_price_id NOT NULL y product_type limitado a
-- ('module','complete'). El flujo vivo es guest-only por email y añade el tier
-- 'curso-auditoria' (F2-5). Cambios (todos aditivos/relajantes, idempotentes):

-- 1. Email del cliente directamente en purchases (el flujo vivo no escribe
--    guest_access; el selector de testimonios lee de aquí).
ALTER TABLE public.purchases ADD COLUMN IF NOT EXISTS customer_email TEXT;

-- 2. Flag del email de testimonio (+7 días), lo marca el cron al enviar.
ALTER TABLE public.purchases ADD COLUMN IF NOT EXISTS testimonial_requested BOOLEAN NOT NULL DEFAULT false;

-- 3. Idempotencia frente a reintentos del webhook de Stripe.
ALTER TABLE public.purchases ADD COLUMN IF NOT EXISTS stripe_session_id TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS uq_purchases_stripe_session_id
  ON public.purchases (stripe_session_id) WHERE stripe_session_id IS NOT NULL;

-- 4. El webhook no conoce product/price IDs (F2-5 usa price_data inline).
ALTER TABLE public.purchases ALTER COLUMN stripe_product_id DROP NOT NULL;
ALTER TABLE public.purchases ALTER COLUMN stripe_price_id DROP NOT NULL;

-- 5. product_type: admitir 'curso-auditoria' (tier F2-5). Se recrean ambos checks
--    (el inline original y el añadido en 20260212210144).
ALTER TABLE public.purchases DROP CONSTRAINT IF EXISTS purchases_product_type_check;
ALTER TABLE public.purchases DROP CONSTRAINT IF EXISTS chk_purchases_product_type;
ALTER TABLE public.purchases ADD CONSTRAINT chk_purchases_product_type
  CHECK (product_type IN ('module', 'complete', 'curso-auditoria'));

-- 6. Índice para el selector diario de testimonios.
CREATE INDEX IF NOT EXISTS idx_purchases_testimonial
  ON public.purchases (created_at)
  WHERE status = 'completed' AND testimonial_requested = false;
