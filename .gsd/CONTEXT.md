# Context — FASE 0 + 1 + 2 (sesión 2026-07-12)

## Locked Decisions

### D1 — Prerender: entry-server + renderToString (NO Chromium)
**Decisión**: `src/entry-server.tsx` con `StaticRouter` + `ReactDOMServer.renderToString` +
`Helmet.renderStatic()`. Build en dos pasos: `vite build` (cliente) + `vite build --ssr`
(bundle de servidor) + `node scripts/prerender.js` que importa el bundle SSR y escribe
`dist/<ruta>/index.html` con `<head>` (Helmet) y `<body>` (HTML completo).
**Rationale**: la v2 con Playwright murió porque el build de Vercel no tiene libnspr4.so y no
permite apt-get. renderToString no necesita browser. El DoD exige texto real en el HTML inicial,
cosa que el regex de la v3.2 no puede dar.
**Alternatives Rejected**: Playwright en GitHub Actions (añade CI, HTML generado versionado,
build más lento); migrar a Next.js/Astro (fuera de scope, rompería URLs).

### D2 — Cliente: `createRoot`, NO `hydrateRoot`
**Decisión**: `src/main.tsx` sigue usando `createRoot`. El HTML prerenderizado es para las
máquinas; el navegador humano descarta ese DOM y monta el SPA normal.
**Rationale**: la home personaliza por `useVisitorState` (localStorage) → un `hydrateRoot`
produciría mismatch garantizado en cada visita. Cero beneficio, mucho ruido y riesgo de
pantallas rotas. Los crawlers IA no ejecutan JS: solo les importa el HTML servido.
**Alternatives Rejected**: hydrateRoot (mismatch por personalización + Suspense de rutas lazy).
**Mitigación del flash**: inyectar `<link rel="modulepreload">` del chunk de cada ruta usando
el ssr-manifest de Vite, para que el Suspense de React.lazy resuelva casi instantáneo.

### D3 — Guards de browser en render
**Decisión**: dos ficheros se tocan sí o sí:
- `src/hooks/useVisitorState.ts`: el inicializador de `useState` llama a `localStorage` en fase
  de render → guard `typeof window === 'undefined'` devolviendo estado por defecto ('new').
- `src/integrations/supabase/client.ts`: `storage: localStorage` en scope de módulo →
  `storage: typeof window !== 'undefined' ? window.localStorage : undefined`.
**Rationale**: son los dos únicos accesos a browser fuera de `useEffect`. El resto (window.*,
document.*) vive en efectos, que renderToString no ejecuta.
**Nota**: `client.ts` dice "automatically generated, do not edit" (Lovable). Se edita igualmente;
si Lovable lo regenera, hay que re-aplicar el guard.

### D4 — Rutas transaccionales fuera del prerender
`/auth`, `/dashboard`, `/checkout`, `/success`, `/guest-access`, `/unsubscribe`, `/admin`
siguen siendo SPA puro. No se prerenderizan.

### D5 — Entrega: rama + PR + preview de Vercel
Cada fase = una rama (`fase-0-web-habla`, etc.) → PR → verificar DoD con curl contra la URL de
preview → merge a main (auto-deploy prod) → re-verificar contra www.esgeo.ai.
**Rationale**: si el SSR rompe rutas, producción no se entera.

### D6 — www.esgeo.ai es el canónico
No se toca la redirección apex→www (hotfix 7279a22 revirtió un intento previo). Todos los
canonicals, sitemap y llms.txt usan `https://www.esgeo.ai`.

### D7 — `.geo.txt` degradado a experimento
No se borran (no romper URLs), pero salen del discurso de "estándar". `llms.txt` (con s) es el
fichero real según spec; `llm.txt` queda como redirect 301.

## Implementation Notes
- `ROUTE_TO_FILE` en prerender.js ya lista 29 rutas: se reutiliza como fuente de verdad.
- Vercel sirve el filesystem ANTES que el rewrite de `vercel.json` → los `dist/<ruta>/index.html`
  ganan al catch-all. Verificado empíricamente: hoy /curso ya sirve el shell prerenderizado.
- `react-helmet` (no helmet-async) → en SSR usar `Helmet.renderStatic()` tras renderToString.
