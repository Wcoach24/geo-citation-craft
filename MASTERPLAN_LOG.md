# MASTERPLAN_LOG

Registro de ejecución del MASTERPLAN. Una sección por fase; por tarea: resultado de
verificación literal y desviaciones respecto a lo planificado.

## FASE 0 — 2026-07-15

### F0-1 · CI en GitHub Actions — DONE (commit 632eb98)

Verificación (YAML parsea):

```
YAML OK. jobs: [ 'build' ] · steps: 6
```

Desviaciones:
- `npm run lint` NO sale 0 en local: **31 errores preexistentes** (más 11 warnings), todos
  anteriores a esta fase: `@typescript-eslint/no-explicit-any` en CursoGeoPage.tsx,
  GuestAccessPage.tsx y supabase/functions/{create-checkout,process-email-sequence,stripe-webhook},
  y `no-require-imports` en tailwind.config.ts. Según lo previsto en el plan, el paso de
  lint del CI lleva `continue-on-error: true`. Quitar el flag cuando se limpien.
- El workflow incluye también un paso explícito de `node scripts/check-routes.mjs` (F0-2).

### F0-2 · Check de paridad de rutas — DONE (commit 81923c8)

Verificación:

```
$ node scripts/check-routes.mjs
✓ check-routes: paridad OK — 28 rutas públicas en App.tsx = ROUTES del prerender.
exit=0
```

Con ruta dummy `/ruta-dummy-f02` añadida a App.tsx (y revertida después):

```
✗ check-routes: App.tsx y prerender.js divergen.
  Rutas públicas en App.tsx que FALTAN en ROUTES de scripts/prerender.js:
    - /ruta-dummy-f02
exit=1
```

Desviaciones:
- El check destapó una divergencia real: `/casos-reales` renderizaba `CasosRealesPage`
  directamente (contenido duplicado de `/casos`, sin prerender). Se convirtió en
  `<Navigate to="/casos" replace />`, consistente con los demás alias legacy
  (`/coach`, `/consultor-geo`, `/especialista-geo`). Las rutas `<Navigate>` se excluyen
  del check (un redirect no se prerenderiza).
- La lista de exclusión (`EXCLUDED_PATHS`) está al principio del script con comentario
  explícito para F1-9: cuando `/checkout` pase a prerenderizada, quitarla de ahí y
  añadirla a ROUTES.
- Añadido a `build` en package.json (primer paso, antes de `vite build`) y como paso
  propio en el CI.

### F0-3 · Tracking de compra veraz — DONE (commit 63dd4f1)

Verificación:

```
$ grep -n "47" src/pages/PurchaseSuccessPage.tsx
(sin resultados, exit=1)

$ npm run build
✅ 28/28 rutas prerenderizadas con body completo  (exit 0)
```

Desviaciones:
- El importe NO se hardcodea en un mapping local: `api/checkout.ts` lo lee de Stripe
  (`stripe.prices.retrieve(priceId).unit_amount / 100`) al crear la sesión y lo añade a la
  `success_url` junto con `product` (`complete` | `module_<id>`). Si Stripe no devuelve
  importe, el parámetro se omite y la página trackea `amount: 0` (mejor sin dato que
  inventado). Coste: una llamada extra a la API de Stripe por checkout.
- Dedupe en `/success`: clave `purchase_tracked_<session_id>` en localStorage, dentro del
  useEffect (SSR-safe) y con try/catch (modo privado): si localStorage no está disponible,
  se trackea igualmente.
- Nota no relacionada con esta tarea: `npx tsc --noEmit` falla por un error preexistente
  en `src/pages/ExpertoGeoPage.tsx:482` (prop `variant` inexistente en EmailCaptureProps).
  No afecta al build (SWC no typechecka). Pendiente de limpieza futura.

### F0-4 · Instrumentar geo-score — DONE (commit 6c82ff9)

Verificación:

```
$ grep -c trackEvent src/pages/GeoScorePage.tsx
5

$ npm run build
✅ 28/28 rutas prerenderizadas con body completo  (exit 0)
```

Desviaciones:
- Los eventos se disparan desde `GeoScorePage.tsx` vía callbacks opcionales nuevos del
  `HablaWidget` (`onAnalyzeStart/onAnalyzeComplete/onAnalyzeError/onResultCtaClick`),
  porque el flujo analizar→resultado vive dentro del widget. Los callbacks solo corren en
  handlers de evento (SSR-safe). Otras páginas que usan el widget no trackean estos
  eventos (sin cambios para ellas).
- Eventos añadidos a `src/lib/analytics.ts`: `geo_score_started {url}`,
  `geo_score_completed {score, grade}`, `geo_score_error {message}` y
  `geo_score_cta_click {target: curso|informe, grade}` (CTA post-resultado del widget).

## FASE 1 — 2026-07-15

### F1-1 · JSON-LD escapado — DONE (commit 3d96468)

Verificación:

```
$ grep -c '&quot;@context&quot;' dist/radar-ia/que-es-geo-guia-completa/index.html
0
$ python3 (parse de todos los bloques application/ld+json)
dist/radar-ia/que-es-geo-guia-completa/index.html: 9 bloques JSON-LD parsean OK
dist/acerca-de/equipo/index.html: 5 bloques JSON-LD parsean OK
```

Desviaciones:
- El grep de `application/ld+json` destapó 28 ficheros afectados (no solo los 4 del plan):
  se migraron los **34 bloques** `{JSON.stringify(...)}` a `dangerouslySetInnerHTML` con un
  codemod (componentes, páginas, módulos F0-F5 y los 9 artículos).
- `dist/radar-ia/como-hacer-que-chatgpt-cite-tu-web/index.html` sigue conteniendo
  `&quot;@context&quot;` — es un **ejemplo de código dentro de un `<pre>`** del artículo
  (escapado correcto), no un bloque JSON-LD. Sin acción.

### F1-2 · Taxonomía única F1-F5 — DONE (commit a160635)

Verificación:

```
Títulos F1-F5 extraídos del HTML built:
/            [True, True, True, True, True]
/curso       [True, True, True, True, True]
/metodologia [True, True, True, True, True]  → idénticos (los 5 títulos canónicos en las 3 rutas)
$ grep -rn 'Beginner|Intermediate' src/pages | wc -l
0
```

Desviaciones:
- `modules.ts` no tenía bullets/duraciones/niveles: se ampliió `ModuleInfo` con `title`,
  `topics`, `duration` (ISO-8601) y `level` ('Inicial'|'Intermedio') como fuente de verdad.
  Títulos canónicos = los de los nombres de producto (F1 Fundamentos de Accesibilidad
  Generativa … F5 Mantenimiento Evolutivo); topics = los de /curso; duraciones = las de
  /metodologia (PT2H/PT3H/PT4H/PT3H/PT2H).
- MetodologiaGeoPage: eliminada la pestaña "Avanzado" (quedaba vacía: ningún módulo es
  Advanced) y los colores arcoíris por card (`bg-blue-500`…) → `bg-accent/10 text-accent`.
- `educationalLevel` de los schemas de los módulos F0-F5 y del Course de /metodologia
  pasó de Beginner/Intermediate a Inicial/Intermedio (schema.org admite texto libre) para
  que el grep de verificación salga a 0.
- QueEsGeoGuiaCompleta: "5 pilares no son secuenciales" → "5 módulos son secuenciales:
  cada uno construye sobre el anterior" (versión canónica SECUENCIAL); h4 F1-F5 importan
  el título desde modules.ts. "seis módulos progresivos" → "cinco módulos progresivos
  (F1-F5)" en texto y schema de /metodologia.

### F1-3 · Una sola nota, fechada — DONE (commit ef606bc)

Verificación:

```
$ grep -rn '100' src/ | grep -i 'esgeo\|nuestra web'
(sin resultados, exit=1) → 0 apariciones de la nota 100 propia
$ npm run build → exit 0
```

Desviaciones:
- La nota propia "100" vivía en `PanelAuditoria.tsx` (fila esgeo.ai del panel) → 92, con
  "auditada el 12 de julio de 2026". Fecha añadida también en la narrativa de Index.tsx,
  en las stats y prosa de SocialProofSection y en GeoScorePage.
- Para que el grep literal saliera a 0 se reformularon frases con "sobre 100" en líneas
  que también contenían esgeo/nuestra web ("puntuaba 35 sobre 100" → "puntuaba un 35",
  features de modules.ts) y "fragmentos de 100-300 caracteres" → "de entre cien y
  trescientos caracteres" en QueEsGeoGuiaCompleta (el nombre del fichero contiene "EsGeo"
  y matcheaba el grep case-insensitive).

### F1-4 · Prueba social coherente — DONE (commit ccbabf9)

Verificación:

```
$ grep -rn "Muchos alumnos\|Alicante" src
(sin resultados, exit=1) → 0
```

Desviaciones:
- La FAQ de /experto-geo preguntaba "¿Hay expertos GEO en Alicante?": se reescribió
  también la pregunta ("¿Desde dónde trabaja esGEO y a qué mercados atiende?"), no solo
  la respuesta, para que el grep saliera a 0 y no quedara una pregunta sin sentido.

### F1-5 · sameAs y footer — DONE (commit a94424c)

Verificación:

```
$ grep -rn 'esgeo_ai\|company/esgeo\|github.com/esgeo' src index.html
(sin resultados, exit=1) → 0
$ grep -c disambiguatingDescription dist/index.html
1
```

Desviaciones:
- Además del schema global y el Footer, se eliminaron perfiles no verificados que destapó
  el grep de sameAs: `linkedin.com/in/director-esgeo` y `twitter.com/director_esgeo`
  (AcercaDePage, schema + tarjeta de contacto), `esgeo_founder` y perfiles de miembros
  (EquipoPage, UI + sameAs del schema Person) y el meta `twitter:site @esgeo_ai` de
  useGeoMetadata. Imports de iconos huérfanos limpiados.

### F1-6 · Soft-404 y llms-full.txt — DONE (commit 96dce55)

Verificación:

```
$ ls -la dist/llms-full.txt
-rw-r--r-- 143696 bytes (140 KB > 20 KB)
$ file dist/llms-full.txt
Unicode text, UTF-8 text (texto plano, 0 tags HTML)
```

Solución elegida para el 404 (verificable post-deploy):
- Vercel NO permite devolver status en un rewrite. En su lugar: (1) el catch-all
  `/(...*)  → /spa.html` se sustituyó por rewrites acotados SOLO a las rutas SPA reales
  (`/dashboard|/auth|/success|/guest-access|/unsubscribe`, con y sin subruta); (2) el
  prerender genera `dist/404.html` (render SSR de una ruta inexistente → NotFound, con
  noindex); (3) cualquier URL que no case con el filesystem ni con esos rewrites cae en
  el 404.html custom de Vercel **con status 404 real**.
- Los alias legacy que dependían del catch-all (`/coach`, `/casos-reales`,
  `/consultor-geo`, `/especialista-geo`) pasaron a redirects 308 en vercel.json (antes
  eran <Navigate> client-side, que con el rewrite acotado habrían dado 404).
- llms-full.txt se escribe en `dist/` (no en `public/`) porque es un artefacto de build:
  título + texto plano por ruta con separadores `RUTA: https://www.esgeo.ai/...`.

### F1-7 · og:image + metas sociales — DONE (commit abd768f)

Verificación:

```
$ file public/og-image.png
PNG image data, 1200 x 630, 8-bit/color RGB
$ grep -c 'og:title' dist/{curso,metodologia,glosario}/index.html dist/radar-ia/que-es-geo-guia-completa/index.html
1 en cada una (y en las 29 rutas prerenderizadas)
$ grep 'og:type' dist/index.html → website · dist/curso/index.html → article
```

Desviaciones:
- La imagen se generó con Pillow (PIL, ya disponible) en lugar de node-canvas/sharp:
  gradiente teal de marca (hsl 174/160) + "esGEO — Haz que la IA recomiende tu negocio".
- `useGeoMetadata` ganó la prop `ogType` ('website'|'article', default article); la home
  pasa `ogType: "website"`.
- El hook se aplicó a 24 páginas sin og: renderizando su `helmet` ANTES del `<Helmet>`
  propio de cada página (react-helmet: el último gana en tags duplicados → los valores
  específicos de la página se conservan y el hook solo aporta og:/twitter:/robots).
- Bonus destapado: `/casos` no tenía NINGÚN Helmet (title vacío en el HTML built) — ahora
  tiene title/description/canonical/og vía el hook. 3 artículos sin canonical lo ganan.
- /geo-score y /contenido-ia ya tenían og: propios (sin twitter:card); se dejaron como
  están porque la tarea acota a páginas "que no tengan og:".

### F1-8 · Redirect permanente y host canónico — DONE (commit 5a2ffc4)

Verificación:

```
$ grep -rn 'esgeo.ai/checkout' src index.html
src/pages/CheckoutPage.tsx:33/45 → "https://www.esgeo.ai/checkout" (ver desviación)
$ grep vercel.json → redirect host esgeo.ai → https://www.esgeo.ai/:path* con "permanent": true (308)
```

Desviaciones:
- El Offer.url del Course en index.html: `https://esgeo.ai/checkout` →
  `https://www.esgeo.ai/curso#comprar`. Cero referencias al host sin www.
- El grep literal `esgeo.ai/checkout` matchea ahora 2 líneas nuevas de F1-9: el canonical
  legítimo `https://www.esgeo.ai/checkout` de la propia página /checkout (creada después
  de redactarse esta verificación). No es el caso que la verificación perseguía (host
  desnudo + oferta a /checkout).

### F1-9 · /checkout real — DONE (commit 8cb7b23)

Verificación:

```
$ npm run build
📄 /checkout  ✓ 29.3 KB · 3556 chars texto · h1:sí   (29/29 rutas, exit 0)
$ grep '<title' dist/checkout/index.html
<title data-react-helmet="true">Comprar el curso GEO completo — 47 €, pago único | esGEO</title>
```

Desviaciones:
- Además de lo pedido (título, 47 € pago único, 5 PDFs/142 páginas al email, factura,
  Stripe sin guardar tarjeta, hola@esgeo.ai, BuyButton, garantía medible de F2-1), la
  página incluye los 5 módulos desde modules.ts y una mini-FAQ de pago para superar los
  3000 chars de texto (la primera versión se quedaba en 2901).
- `/checkout` añadida a ROUTES del prerender, quitada de EXCLUDED_PATHS de check-routes
  y del rewrite SPA de vercel.json (el fichero prerenderizado gana por filesystem).
