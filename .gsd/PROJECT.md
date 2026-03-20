# esGEO — Curso GEO Improvement Plan

## Vision
esGEO es el primer curso en español de Generative Engine Optimization. Tiene tracción orgánica (450+ sesiones/mes, posición 9.4 en Google) pero convierte al 0.22%. El objetivo es 10x revenue optimizando el funnel, escalando contenido y mejorando el producto.

## Goals
1. **Conversión 0.22% → 2-3%** — Simplificar pricing, rediseñar /curso, eliminar fricción en checkout
2. **Revenue €10/mes → €800/mes** — Ticket medio de €10 → €47, email nurturing, personalización
3. **Tráfico 450 → 900+ sesiones/mes** — Long-tail content, prerendering, herramienta gratuita GEO Score
4. **Ticket medio €47 → €97** — Vídeos, templates, subida de precio escalonada

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui (Radix)
- **Backend**: Supabase (Auth + PostgreSQL + Storage + Edge Functions)
- **Payments**: Stripe Checkout (mode: payment)
- **Deployment**: Vercel (SPA con rewrite)
- **Email**: Resend (pendiente configurar)
- **Analytics**: Microsoft Clarity + Google Search Console
- **Domain**: esgeo.ai

## Constraints
- SPA React — no migrar a Next.js/Astro ahora, solo prerendering
- Supabase es instancia separada (no la del MCP conectado)
- No hay tests existentes — no los añadimos ahora
- Stripe IDs ya creados para todos los productos incluyendo F6
- Presupuesto: €0 en ads, solo orgánico

## Out of Scope
- Migración a SSR/SSG completa (solo prerendering)
- Tests unitarios/e2e
- Comunidad Discord/Slack (solo cuando 50+ alumnos)
- Video-lecciones (Fase C, mes 2+)
- Nuevo contenido de módulos (los PDFs existentes se mantienen)