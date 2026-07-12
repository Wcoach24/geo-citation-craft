# Requirements — Plan Definitivo esGEO (jul 2026)

## FASE 0 — La web habla
- SSR-01: existe `src/entry-server.tsx` que exporta `render(url)` → `{ html, head }`.
- SSR-02: `npm run build` produce `dist/<ruta>/index.html` para las 29 rutas de ROUTE_TO_FILE.
- SSR-03: cada HTML generado contiene el `<body>` renderizado (no solo `<div id="root"></div>`).
- SSR-04: ≥3000 caracteres de texto (tags eliminados) en /, /curso, /metodologia, /glosario y
  3 artículos de /radar-ia.
- SSR-05: ≥1 `<h1>` en el HTML servido de /curso y de la home.
- SSR-06: rutas transaccionales (auth, dashboard, checkout, success, guest-access, unsubscribe)
  NO se prerenderizan y siguen funcionando como SPA.
- ANSW-01: el primer `<p>` de la home responde qué/para quién/cuánto con cifras fechadas.
- ANSW-02: idem en /curso.

## FASE 1 — Higiene máquina
- HYG-01: robots.txt con reglas explícitas (Allow) para GPTBot, OAI-SearchBot, ChatGPT-User,
  ClaudeBot, PerplexityBot, Perplexity-User, Google-Extended, CCBot.
- HYG-02: `public/llms.txt` según spec (identidad + enlaces curados). Servido como text/plain.
- HYG-03: `llm.txt` → 301 a `/llms.txt`.
- HYG-04: canonicals `https://www.esgeo.ai/...` coherentes en todas las páginas prerenderizadas.
- HYG-05: sitemap.xml con lastmod real y sin URLs muertas.

## FASE 2 — HABLA en el dominio
- HAB-01: `habla.esgeo.ai` resuelve al proyecto Vercel `machineready`.
- HAB-02: landing HABLA con costura de marca esGEO (enlace cruzado, footer).
- HAB-03: widget `habla-widget` en home y /curso: input URL → score + 2 quick wins + CTA curso.
- HAB-04: cross-referencia en llms.txt y sitemap de ambos sitios.
