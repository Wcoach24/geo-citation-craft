# State

## Current Phase
FASES 0, 1 y 2 — ✅ COMPLETADAS Y VERIFICADAS EN PRODUCCIÓN (2026-07-12).
www.esgeo.ai: 35/MUDA → 92/BILINGÜE. Siguiente: FASE 3 (funnel) y FASE 4 (curso v2).

## Completed
- 2026-03-20: Fase "Fix the Funnel" ejecutada y verificada (26/26 reqs). Ver VERIFICATION.md.
- 2026-07-12: diagnóstico HABLA → www.esgeo.ai = 35/100 (MUDA), gate A FALLIDO.
- 2026-07-12: roadmap reescrito con el Plan Definitivo (F0–F5).
- 2026-07-12: F0 ejecutada — prerender SSR real (renderToPipeableStream). 28 rutas con body
  completo. Home: 237 → 8650 chars.
- 2026-07-12: F1 ejecutada — robots.txt con bots IA, llms.txt real, canonicals www.
- 2026-07-12: F2 ejecutada — HablaWidget en home, /curso y /geo-score (que deja de ser un quiz).
- 2026-07-12: merge a main, deploy a producción, verificado. Ver VERIFICATION.md.

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

## Next Up
- FASE 2 pendiente manual: apuntar habla.esgeo.ai al proyecto Vercel `machineready`
  (dominio en Vercel + CNAME en GoDaddy). Luego VITE_HABLA_API=https://habla.esgeo.ai.
- FASE 3: funnel (pricing único, matar /checkout, secuencia Resend).
- FASE 4: curso v2 — el caso de estudio ya no es inventado: es 35 → 92, con curl y fecha.
- Revisar el checker de answerability de HABLA: da falso negativo en la home (L=78).
