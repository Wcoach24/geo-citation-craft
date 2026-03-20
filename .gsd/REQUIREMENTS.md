# Requirements

## Pricing (PRICE)
- **PRICE-01**: Eliminar opción de módulo individual del checkout | Priority: must-have
- **PRICE-02**: Único producto: Curso GEO Completo a €47 | Priority: must-have
- **PRICE-03**: Price anchoring: mostrar €197 tachado → €47 precio lanzamiento | Priority: must-have
- **PRICE-04**: Garantía 14 días visible en checkout y /curso | Priority: must-have

## Landing /curso (LAND)
- **LAND-01**: Nuevo hero con headline "Haz que ChatGPT cite tu marca" + CTA naranja | Priority: must-have
- **LAND-02**: Trust bar: "Referenciado por Gemini, Perplexity y Claude" | Priority: must-have
- **LAND-03**: Sección PAS: Problema → Agitación → Solución | Priority: must-have
- **LAND-04**: Feature blocks Claymorphism para módulos F1-F5 | Priority: must-have
- **LAND-05**: Sección Before/After (BAB framework) | Priority: should-have
- **LAND-06**: Social proof section (testimonios si hay + dato Gemini) | Priority: must-have
- **LAND-07**: FAQ section con Schema.org FAQ markup | Priority: must-have
- **LAND-08**: CTA final + garantía + badges seguridad | Priority: must-have
- **LAND-09**: Sticky CTA en navbar | Priority: should-have

## Checkout Flow (CHKT)
- **CHKT-01**: CTA en /curso llama directamente a create-checkout → Stripe | Priority: must-have
- **CHKT-02**: Eliminar /checkout como página intermedia (o simplificar a inline) | Priority: must-have
- **CHKT-03**: Actualizar create-checkout edge function para curso completo default | Priority: must-have

## Design System (DSGN)
- **DSGN-01**: Design tokens tipo #43 E-learning: Teal #0D9488 + Orange #EA580C | Priority: must-have
- **DSGN-02**: Tipografía Plus Jakarta Sans (headings) + Inter (body) | Priority: must-have
- **DSGN-03**: Claymorphism shadows en cards | Priority: must-have
- **DSGN-04**: Iconos Lucide React, CERO emoji como iconos | Priority: must-have
- **DSGN-05**: Mobile-first responsive (375/768/1024/1440) | Priority: must-have
- **DSGN-06**: Dead clicks fix — auditar y eliminar falsos clickeables | Priority: must-have

## Hyper-Personalización (PERS)
- **PERS-01**: Detección de estado visitante (new/returning/lead/customer) via localStorage | Priority: must-have
- **PERS-02**: Hero personalizado por estado de visitante | Priority: must-have
- **PERS-03**: Personalización por referrer (Google vs Gemini vs directo) | Priority: should-have
- **PERS-04**: CTA contextual por estado (first-visit vs returning) | Priority: should-have

## Email Capture (EMAIL)
- **EMAIL-01**: Inline email capture en /curso con lead magnet (F0 + checklist) | Priority: must-have
- **EMAIL-02**: Exit intent popup en /curso | Priority: should-have
- **EMAIL-03**: Footer CTA email en todas las páginas | Priority: should-have
- **EMAIL-04**: Formulario 1 campo (solo email) con copy optimizado | Priority: must-have

## Tracking (TRACK)
- **TRACK-01**: Eventos custom Clarity en CTAs principales | Priority: must-have
- **TRACK-02**: Embudo Clarity: /curso → CTA click → Stripe → /success | Priority: should-have

## SEO Técnico (SEO)
- **SEO-01**: Prerendering de ~15 rutas públicas con vite-plugin-prerender | Priority: must-have
- **SEO-02**: Actualizar sitemap.xml con lastmod correcto | Priority: must-have
- **SEO-03**: Fix canonical duplicación www vs non-www | Priority: must-have
- **SEO-04**: FAQ Schema markup en /curso | Priority: must-have
- **SEO-05**: Internal linking desde artículos radar → /curso | Priority: should-have

## Content (CONT)
- **CONT-01**: 8-10 artículos long-tail en /radar-ia/ | Priority: should-have
- **CONT-02**: GEO Score Checker herramienta gratuita | Priority: nice-to-have