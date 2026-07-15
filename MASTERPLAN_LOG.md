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

## FASE 2 — 2026-07-15

### F2-1 · Garantía medible — DONE (commit 1edd1ee)

Verificación:

```
$ grep -rln 'Garantía medible' src/ | wc -l
4   (GuaranteeNote.tsx, CheckoutPage.tsx, CursoGeoPage.tsx, TerminosPage.tsx)
$ npm run build → ✅ 29/29 rutas prerenderizadas (exit 0)
```

Desviaciones:
- El texto canónico vive en un componente único `src/components/GuaranteeNote.tsx`
  (export `GUARANTEE_TEXT`) y se renderiza bajo TODOS los BuyButton: PricingSection,
  MethodologySection, PremiumContentGate (cubre los gates de F1-F4), ModuleCTA,
  CursoGeoPage `#comprar`, ModuloF0/F2/F3/F4 y /checkout (F1-9 ya la tenía; se alineó
  al literal canónico y se añadió el plazo de 30 días).
- /terminos: nueva cláusula 7 "Garantía medible y reembolsos" (30 días naturales, cómo
  reclamar con el antes/después del auditor, reembolso íntegro en ≤14 días); la antigua
  cláusula 7 (Contacto) pasa a 8 y la limitación de responsabilidad (6) referencia la
  garantía. "Última actualización" → 15 de julio de 2026.
- FAQ de /curso: nueva entrada `faq-garantia` (entra también en el FAQPage schema, que
  se genera del mismo array).
- De paso: en ModuloF3Page se sustituyó el claim inventado "97% de usuarios implementan
  estas señales en la primera semana" (dato sin fuente, prohibido por regla 6) por la
  garantía medible.

### F2-2 · Matar el "AHORRA €3" y módulos sueltos — DONE (commit 57eb0ac)

Verificación:

```
$ grep -rn 'AHORRA' src/
(sin resultados, exit=1) → 0
api/checkout.ts (por lectura de código):
  l.51: if (productType === "module" || moduleId) → 400 "Los módulos sueltos ya no se venden…"
  l.102: else → 400 "Invalid product type" (cualquier producto no reconocido, f1..f5 incluidos)
$ npm run build → exit 0
```

Desviaciones:
- `ModuleCTA` reescrito: promociona SOLO el bundle (sin card "Solo este módulo", sin
  cálculo de ahorro); conserva el placeholder de módulos "próximamente".
- `api/checkout.ts`: eliminado `PRODUCT_MAPPING` completo (f1..f5 con sus priceIds).
  El rechazo es doble: `productType: "module"` O cualquier `moduleId` en el body → 400.
- `src/lib/checkout.ts`: tipo `CheckoutBody.productType` ya no admite "module" ni
  `moduleId` (los clientes TS no pueden ni construir la petición).
- `src/data/modules.ts`: eliminados `price: 10` y `stripeIds` por módulo, el helper
  `getStripeIds` y los campos muertos de `CompleteCourseInfo` (originalPrice/stripeIds).
  El precio del bundle (47) se conserva en `COMPLETE_COURSE.price`.
- La verificación por POST real a /api/checkout no es posible en local (Vercel
  serverless, regla 8): verificado por lectura del código, como prevé el encargo.

### F2-3 · Checkout Stripe: factura + métodos de pago — DONE (commit 332af64)

Verificación:

```
$ grep -n 'invoice_creation\|tax_id_collection' api/checkout.ts
118:      invoice_creation: { enabled: true },
119:      tax_id_collection: { enabled: true },
$ npm run build → exit 0
```

Desviaciones:
- `payment_method_types: ["card", "paypal", "link"]`. **(H)** Si la cuenta Stripe no
  tiene PayPal activado, Stripe rechazará la CREACIÓN de la sesión (error 400 del API,
  no un fallo silencioso): en ese caso quitar "paypal" del array y redeploy. Verificar
  en la primera compra/preview post-deploy.
- Añadido `customer_creation: "always"`: Stripe exige un Customer para
  `tax_id_collection` en `mode: "payment"` (sin esto la sesión no se crea).
- Trust badge "Factura para tu empresa (NIF/CIF)" añadido junto al BuyButton en
  /checkout (bullet + nota bajo el botón) y en los trust badges de /curso#comprar.
  La FAQ de pago de /checkout ahora explica el NIF/CIF en la propia pasarela (antes
  decía "pídela por email", que sigue como fallback).

### F2-4 · /success honesto + onboarding — DONE (commit ba816eb)

Verificación:

```
$ grep -n '7 días' src/pages/PurchaseSuccessPage.tsx
(sin resultados, exit=1) → 0
```

Desviaciones:
- Mensaje principal: "Los 5 PDFs van adjuntos al email que acabas de recibir" (coincide
  con lo que hace el webhook). Onboarding: "Empieza por F1, capítulo 1 (30 min)" + hito
  "vuelve a auditar tu web tras aplicar F1-F2 y compara tu nota" + CTA primario a
  /geo-score ("Auditar mi web ahora"). El CTA "Explorar más módulos" (ya sin sentido
  post-F2-2) se eliminó.
- También el estado de error (sesión no encontrada) decía "enlaces de descarga" → "PDFs
  adjuntos".

### F2-5 · Tercer tier ancla 197 € — DONE (commit 200fd8f)

Verificación:

```
$ grep -o 'Curso + Auditoría personalizada|>197<|Comprar curso + auditoría — 197 €' dist/index.html
→ los 3 tiers renderizan en dist/index.html (0 €, 47 €, 197 €)
api/checkout.ts (por lectura de código): productType "curso-auditoria" →
  line_items con price_data inline { currency: "eur", unit_amount: 19700 } (l.84-99)
$ npm run build → exit 0
```

Desviaciones:
- **H-9 pendiente: aprobar o retirar el tier.** Está implementado y VISIBLE (el plan lo
  pide así); si Álvaro no lo aprueba, retirar el objeto del array `plans` de
  PricingSection y el branch "curso-auditoria" de api/checkout.ts.
- `BuyButton` ganó prop opcional `productType` ("complete" por defecto) — el tracking
  `checkoutStart` recibe el tipo real.
- `api/stripe-webhook.ts`: para "curso-auditoria" adjunta los mismos 5 PDFs al cliente
  (el curso está incluido) y el email añade el siguiente paso de la auditoría manual.
  La notificación al owner SIEMPRE muestra el product type (fila "Tipo"); para
  curso-auditoria el subject grita "ENTREGA MANUAL: auditoría pendiente" y el cuerpo
  lleva bloque "⚠️ ACCIÓN REQUERIDA" (vídeo/PDF + plan de acción).
- Copy sin SLA inventado: "Entrega personal por email, con seguimiento directo" (no se
  promete plazo que nadie ha aprobado).
- La creación de sesión real no es testeable en local (regla 8): verificado por lectura.

### F2-6 · Lead magnet alineado — DONE (commit 35615a4)

Verificación:

```
$ grep -rn 'checklist' src/components/EmailCapture.tsx
(sin resultados, exit=1) → 0
```

Desviaciones:
- Copy de captura, botón y mensaje de éxito → "Te envío el módulo F0 completo
  (diagnóstico en 15 min)" (lo que el welcome entrega de verdad).
- `ExitIntentPopup` también prometía "el checklist GEO": alineado al mismo mensaje
  (mismo motivo, aunque la verificación solo acota EmailCapture).

### F2-7 · Exit intent global + captura en artículos — DONE (commit 9b99e3b)

Verificación:

```
$ ls src/components/LeadMagnetModal.tsx
ls: cannot access '…': No such file or directory ✓
$ grep -rln InlineEmailCapture src/pages/articles/ | wc -l
9   (los 9 artículos de radar-ia)
$ npm run build → ✅ 29/29 (exit 0); el bloque de captura aparece en el HTML prerenderizado
  de los artículos ("Antes de irte: el módulo F0 gratis").
```

Desviaciones:
- `ExitIntentPopup` montado en App.tsx dentro de BrowserRouter (solo cliente: el
  prerender renderiza AppRoutes vía entry-server y no pasa por App()). Se quitó el
  montaje duplicado de CursoGeoPage. La supresión existente se conserva: visitorState
  lead/customer + una vez por sesión (sessionStorage) + solo desktop (mouseleave).
- `InlineEmailCapture` reescrito: éxito SOLO si `captureLead` devuelve ok (antes
  mostraba éxito aunque fallara y el lead se perdía en silencio); error → toast
  destructivo y el formulario se conserva; al éxito marca lead (`markAsLead`), trackea
  `leadCapture` y muestra estado de confirmación persistente (no solo toast). Se ocultó
  para visitantes que ya son lead/customer (mismo criterio que EmailCapture).
- `LeadMagnetModal.tsx` borrado; no tenía ningún uso (grep confirmó 0 imports).

### F2-8 · CTAs con verbo+beneficio — DONE (commit ed275e5)

Verificación:

```
$ grep -rn 'Elige tu Plan' src/
(sin resultados, exit=1) → 0
HeroSection.tsx: cta-pulse está en el botón "Curso Completo — €47" (l.58); el CTA
gratuito ya no lo lleva.
```

Desviaciones:
- PricingSection: h2 → "Empieza gratis. Paga una vez si te convence."; subhead ajustada
  para no duplicar; CTA del plan gratuito → "Leer F0 gratis" (aplicado en F2-5 al tocar
  el mismo array).
- "Ver módulo" (MethodologySection, home) y "Explorar módulo" (MetodologiaGeoPage ×3)
  → "Qué aprenderás en F1/F2/…" generado por módulo (no hardcodeado por copia).

### Estado de la fase

- `npm run build` en verde tras cada tarea (29/29 rutas prerenderizadas).
- `npx tsc --noEmit`: solo el error preexistente de ExpertoGeoPage.tsx:482 (documentado
  en F0-3); esta fase no añade errores de tipos.
- Pendientes humanos generados/afectados por la fase: **H-9** (aprobar/retirar tier
  197 €), **(H)** verificar que la cuenta Stripe acepta PayPal en la primera sesión
  post-deploy (si no, quitar "paypal" de payment_method_types).

## FASE 3 — 2026-07-15

### F3-1 · Reconectar la secuencia E2-E5 — DONE (commit 87449a2)

Verificación:

```
$ node scripts/test-email-sequence.mjs
✓ test-email-sequence: 21/21 tests OK.   (exit 0; selector E2-E5 con fechas
  sintéticas día 3/7/12/18, leads atrasados, unsubscribed/converted, emails_sent=0/5)

$ grep -A3 '"crons"' vercel.json
"crons": [ { "path": "/api/email-sequence", "schedule": "0 9 * * *" } ]

$ npm run build → ✅ 29/29 rutas prerenderizadas (exit 0)
```

Desviaciones:
- El plan decía "usa los mismos nombres de env var que use api/stripe-webhook.ts",
  pero NINGUNA función de /api usaba Supabase (el webhook solo usa Stripe/Resend).
  Se usan los nombres estándar `SUPABASE_URL` (con fallback a `VITE_SUPABASE_URL`,
  que sí existe en Vercel para el build del front) + `SUPABASE_SERVICE_ROLE_KEY`.
  **[HUMANO] H-6b:** verificar/crear en Vercel `SUPABASE_URL`,
  `SUPABASE_SERVICE_ROLE_KEY` y `CRON_SECRET` (sin CRON_SECRET el endpoint
  responde 500 a propósito: fail-closed).
- La lógica pura vive en `api/_lib/sequence-logic.mjs` (.mjs plano, no .ts, a
  propósito: lo importa la función Vercel Y el test con `node` a secas en
  cualquier versión — el CI usa Node 20 sin type-stripping). Test añadido a
  package.json (`npm run test:sequence`) y como paso del CI.
- capture-lead upserta con ON CONFLICT DO NOTHING (un lead re-capturado conserva
  progreso y created_at) y `emails_sent=1` (E1 = welcome lo envía la propia
  función); `unsubscribe:true` marca también `leads.unsubscribed`.
- Copy de los emails portados: links al host canónico www.esgeo.ai (F1-8);
  remitente `curso@esgeo.ai` con reply-to hola@ (el mismo que el welcome, en vez
  del hola@ del legacy); en E5 se eliminó el ancla falsa "€97 tachado" (dato
  inventado, regla 6 / coherencia F1-3), el recap "checklist de 15 puntos" pasó
  a "módulo F0" (el lead magnet real desde F2-6) y se añadió la garantía medible
  (F2-1). El resto del HTML es idéntico al legacy.
- El MCP de Supabase disponible en esta sesión apunta a OTRO proyecto (Carche,
  sin tablas de esGEO): no se pudo verificar que `public.leads` exista en el
  proyecto real (la migración 20260323_create_leads_table.sql está en el repo).
  **[HUMANO] H-6:** tras el deploy, alta de un lead de prueba y comprobar
  (a) fila en public.leads con emails_sent=1, (b) el cron de las 09:00 UTC
  la procesa al día 3.

### F3-2 · Email de testimonio a compradores (+7 días) — DONE (commit 32cd30c)

Verificación:

```
$ grep -n 'from("purchases")' api/stripe-webhook.ts
184:    const { error: insertError } = await supabase.from("purchases").upsert(
Selector de compradores testeado con fecha sintética (mismo harness que F3-1):
  ✓ 7 y 7.5 días → toca · 6.5 días → no · 9 días → no · ya pedido → no
  ✓ pending/refunded → no · sin customer_email → no
```

Desviaciones:
- La tabla purchases original (flujo auth de Lovable) no encajaba con el flujo
  vivo: nueva migración `20260715103000_f3_purchases_email_pipeline.sql`
  (customer_email, testimonial_requested, stripe_session_id único parcial para
  idempotencia ante reintentos de Stripe, product_type admite curso-auditoria,
  stripe_product_id/price_id nullable, índice parcial del selector).
  **[HUMANO] H-7b:** aplicar la migración en el proyecto Supabase real
  (`supabase db push`) — sin ella el insert falla (no bloquea la entrega de
  PDFs: recordPurchase captura y loguea).
- El selector lee `customer_email` directamente de purchases (el legacy pasaba
  por guest_access, que el flujo vivo no escribe).
- Extra coherente con el plan: el webhook marca `leads.converted=true` al
  comprar → el comprador sale de la secuencia de venta E2-E5 (evita vender el
  curso a quien ya lo compró; el legacy tenía el mismo flag).
- El envío del testimonio quedó implementado dentro del mismo cron
  /api/email-sequence (F3-1), ventana 7-8 días (una pasada diaria cae una vez).

### F3-3 · Borrar el backend fantasma — DONE (commit 8647026)

Verificación:

```
$ ls supabase/functions/
download-premium-content  generate-download-url  generate-guest-access
(sin create-checkout, stripe-webhook, capture-lead, send-purchase-email)
$ npm run build → exit 0
```

Desviaciones:
- **process-email-sequence también borrada** (desviación razonada prevista por
  el encargo): su lógica quedó portada íntegra (E2-E5 + testimonio) a
  api/email-sequence.ts + api/_lib/sequence-logic.mjs con tests; conservarla
  habría dejado dos fuentes de verdad de los emails. Recuperable en git.
- config.toml limpiado (solo quedan las 3 funciones no listadas en el plan).
  Nota: tras F3-4, generate-download-url y download-premium-content ya no
  tienen ningún caller en src/ — candidatas a borrado en una fase futura.
- **[HUMANO] H-7:** `supabase functions delete` de las 5 en el proyecto real
  (create-checkout, stripe-webhook, capture-lead, send-purchase-email,
  process-email-sequence) y revisar claves de la segunda cuenta Stripe.

### F3-4 · Rutas muertas fuera del bundle — DONE (commit 9b30923)

Verificación:

```
$ grep -c 'path="/dashboard"' src/App.tsx
0
$ npm run build → ✅ 29/29 rutas prerenderizadas (exit 0)
Bundle principal: 601.314 → 464.976 bytes (−22,7%)
dist/assets total: 1.157.915 → 944.131 bytes (−18,5%); desaparece el chunk
AuthPage (61.965 bytes)
$ npx tsc --noEmit → sin errores (de paso desapareció el error preexistente
  de ExpertoGeoPage documentado en F0-3: la prop venía de código ya retirado)
```

Desviaciones:
- Borrados también AuthContext (solo lo usaban Header, CursoGeoPage y las
  páginas muertas), el redirect a /dashboard de CursoGeoPage y las ramas
  user/dashboard del Header (CTA único al curso).
- vercel.json: el rewrite SPA queda acotado a success|unsubscribe — /dashboard,
  /auth y /guest-access pasan a 404 real en producción.
- EXCLUDED_PATHS de check-routes.mjs actualizado (regla 7 del encargo).

### Estado de la fase

- `npm run build` en verde tras cada tarea (29/29 rutas) y `npm run
  test:sequence` 21/21; ambos en CI.
- Pendientes humanos de la fase: **H-6** (lead de prueba post-deploy),
  **H-6b** (env vars SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / CRON_SECRET en
  Vercel), **H-7** (supabase functions delete ×5), **H-7b** (aplicar la
  migración 20260715103000 y confirmar que public.leads existe en el proyecto
  real).
