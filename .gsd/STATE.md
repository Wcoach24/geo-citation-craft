# State

## Current Phase
Phase 1: Fix the Funnel — ✅ COMPLETED

## Completed
- Project analysis and architecture review
- GSC + Clarity data analysis
- Design doc approved (2026-03-20)
- GSD Document Stack generated
- Phase 1 executed: 3 waves, 8 tasks, all verified 26/26 requirements
- Gap closure: 2 fixes applied, build clean

## Next Up
- Commit changes to git + create PR
- Phase 2: SEO Técnico + Prerendering

## Decisions Log
- 2026-03-20: Eliminar módulos individuales, solo curso completo €47
- 2026-03-20: No migrar a SSR, solo prerendering con vite-plugin-prerender
- 2026-03-20: Design tokens tipo #43 E-learning (Teal + Orange + Claymorphism)
- 2026-03-20: CTA directo a Stripe sin /checkout intermedia
- 2026-03-20: Personalización client-side con localStorage (privacy-first)
- 2026-03-20: Plus Jakarta Sans (headings) + Inter (body)
- 2026-03-20: Inline checkout en /curso, /checkout redirect
- 2026-03-20: Social proof con datos reales, no testimonios fabricados
- 2026-03-20: Email capture guarda en localStorage + intenta Supabase

## Known Issues
- Supabase tabla email_leads no existe aún (capture falla silenciosamente)
- Resend API key status desconocido
- Vercel project marcado live: false
- www.esgeo.ai y esgeo.ai duplicación en GSC (pendiente Phase 2)