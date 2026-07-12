# State

## Current Phase
FASE 0 (La web habla) — en ejecución. Sesión 2026-07-12.
Alcance de esta sesión: F0 + F1 + F2.

## Completed
- 2026-03-20: Fase "Fix the Funnel" ejecutada y verificada (26/26 reqs). Ver VERIFICATION.md.
- 2026-07-12: diagnóstico HABLA → www.esgeo.ai = 35/100 (MUDA), gate A FALLIDO.
- 2026-07-12: roadmap reescrito con el Plan Definitivo (F0–F5).

## Decisions Log
- 2026-03-20: solo curso completo €47, sin módulos sueltos.
- 2026-03-20: CTA directo a Stripe sin /checkout intermedia.
- 2026-03-20: tokens E-learning (Teal #0D9488 + Orange #EA580C), Plus Jakarta Sans + Inter.
- 2026-07-12 (D1): prerender = entry-server + renderToString, sin Chromium.
- 2026-07-12 (D2): cliente sigue con createRoot (no hydrateRoot) — la personalización por
  localStorage haría mismatch garantizado.
- 2026-07-12 (D3): guards de browser en useVisitorState y supabase/client.
- 2026-07-12 (D5): rama + PR + preview; merge solo con DoD verde.
- 2026-07-12 (D6): www.esgeo.ai canónico. No tocar la redirección apex→www.
- 2026-07-12 (D7): .geo.txt degradado a experimento; llms.txt es el fichero real.

## Known Issues
- Supabase tabla email_leads: estado desconocido (capture puede fallar en silencio).
- Resend API key: estado desconocido.
- `src/integrations/supabase/client.ts` está marcado como autogenerado por Lovable: si Lovable
  lo regenera, se pierde el guard de localStorage y el build SSR rompe.
- El PAT de geo-citation-craft se pegó en un chat → comprometido. Revocar tras esta sesión.
