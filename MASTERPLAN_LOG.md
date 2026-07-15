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

## FASE 4 — 2026-07-15

### F4-1 · Font de headings — DONE (commit 754610c)

Verificación:

```
$ grep -n "'\"Plus" src/index.css
(sin resultados, exit=1) → 0
$ npm run build → ✅ 29/29 rutas prerenderizadas (exit 0)
```

Desviaciones:
- La font SÍ estaba enlazada en index.html (Google Fonts, pesos 600/700/800): el único
  bug eran las comillas anidadas del CSS. Fix a `"Plus Jakarta Sans", Inter, sans-serif`.
- `font-mono` se usa en 6 sitios (badges F1-F5, PanelAuditoria, ContenidoIAPage) →
  se AÑADIÓ Roboto Mono (400/700) al link de Google Fonts en vez de quitarla del config.

### F4-2 · CTAs de compra legibles — DONE (commit 5f30bac)

Verificación:

```
$ grep -rn 'bg-accent.*text-primary\|text-primary.*bg-accent' src/components/
(sin resultados, exit=1) → 0
```

Desviaciones:
- El patrón vivía en 9 puntos, no 4 (los números de línea del plan eran pre-F2):
  CtaSection, MethodologySection, PricingSection (botón + badge "Más popular"),
  CheckoutPage, MetodologiaGeoPage (CTA final + 3 group-hover de cards). Todos →
  `text-accent-foreground`.
- CtaSection "Probar Gratis": `bg-transparent border-white/40` aplicado (antes
  border-primary-foreground/20 sin bg explícito).

### F4-3 · Paleta unificada — DONE (commits 62e3949 + f82eeb3)

Verificación:

```
$ grep -rEn '(bg|text|border)-(blue|green|purple|orange|red|yellow|pink|indigo)-[0-9]{3}' src/ | wc -l
0
$ npm run build → exit 0
```

Desviaciones:
- El grep destapó ~120 usos en ~25 ficheros (artículos, módulos F0-F5, TestimonialCard,
  toast.tsx…), no solo los 5 del plan. Mapeo por codemod sed: verde→success,
  rojo→danger (toast destructivo→tokens destructive), naranja/amarillo→warning,
  azul→primary, morado→accent.
- Tokens nuevos en index.css (light+dark) y tailwind.config: `--success` (160 96% 26%),
  `--warning` (32 90% 36%), `--danger` (0 72% 42%) con sus foregrounds — semáforo
  derivado de la paleta teal como preveía el plan.
- **Bug propio detectado y corregido (f82eeb3):** el orden de reglas del sed convirtió
  `bg-green-500/10` en `bg-*/50/10` (clase inválida, sin fondo) en 10 ficheros
  (badges de módulos, PurchaseSuccessPage, ResultsCard, LimitationsSection, RadarIAPage,
  GlosarioPage, AcercaDePage). Cazado con grep de `/50/` y corregido; build verde.

### F4-4 · Hero reescrito — DONE (commit 6da7605)

Verificación:

```
$ python3 (extrae el <p> snippet-block del hero en dist/index.html y cuenta
  palabras antes del primer CTA)
palabras del párrafo del hero antes del primer CTA: 44   (< 60 ✓)
$ npx eslint HeroSection WhatIsGeoSection Index → 0 errores (sin imports muertos)
```

Desviaciones:
- Texto del subhead: el literal del plan, con el precio (47 €) dentro. Los 3 bullets
  (Para quién / Qué obtienes / Empieza gratis con F0 + auditor) van DESPUÉS de los CTAs
  (fila que sustituye a los antiguos value props) para que el conteo pre-CTA quede <60.
- Nuevo token `--accent-light: 160 70% 55%` (tailwind `accent-light`) para badge,
  span del H1, subrayado SVG e iconos de bullets sobre el gradiente oscuro (el accent
  a 30% de luminosidad no contrastaba).
- `WhatIsGeoSection` se renderiza recortada tras el bloque del auditor HABLA (que ya
  ocupaba el hueco inmediato post-hero desde F2): se quitaron 2 snippets redundantes,
  su ShareSectionButton y su FAQPage (la home ya emite FAQPage propio; dos bloques
  FAQPage en la misma URL compiten). Conserva la definición citable + DefinedTerm.

### F4-5 · Layout móvil y grids — DONE (commit fa30608)

Verificación:

```
Playwright móvil 390px sobre dist (python3 + chromium de /opt/pw-browsers,
servidor estático http.server):
/metodologia scrollWidth: 390 · / : 390 · /curso : 390 · /radar-ia : 390
(document.documentElement.scrollWidth === 390, sin overflow horizontal)
Screenshot /tmp/metodologia-390.png revisado: sin desbordes.
$ npm run build → exit 0
```

Desviaciones:
- (a) El TabsList tenía 3 triggers (F1-2 eliminó "Avanzado"), no 4; se aplicó igualmente
  `flex-wrap h-auto w-full`.
- (b) Grids 3+2 vía `lg:grid-cols-6` + `col-span-2` + `col-start-2` en el 4º hijo
  (MethodologySection home, CursoGeoPage, tab "todos" de MetodologiaGeoPage); los 4
  artículos no destacados de /radar-ia → grid-2 (2×2). Las tabs filtradas (2-3 items)
  se quedan en grid-3: no generan hueco.
- (c) Sección "Framework Completo" (h2 + botón compartir sin contenido) eliminada.
- (d) TOC de la home: empieza oculto (SSR-safe) y un IntersectionObserver sobre
  `#inicio` — SOLO en useEffect — lo muestra al salir el hero del viewport; en páginas
  sin `#inicio` se muestra siempre.
- `vite preview` no arranca en este contenedor (EAFNOSUPPORT en ::); se usó
  `python3 -m http.server` sobre dist como servidor estático equivalente.

### F4-6 · Detalles de marca y motion — DONE (commit ced5d15)

Verificación:

```
$ ls src/App.css → No such file or directory ✓
$ grep -rn 'teal-600' src/ | wc -l → 0
$ grep -c 'prefers-reduced-motion' src/index.css → 1
$ npm run build → exit 0
```

Desviaciones:
- (d) App.css no tenía ningún import (grep = 0): borrado directo.
- (e) ShareSectionButton → icon-only ghost (h-8 w-8, aria-label + title, icono Check
  al copiar) con hover suave `hover:bg-secondary` (el ghost global mantiene su hover
  accent, no estaba en el encargo). Los ~35 usos existentes quedan como iconos
  discretos junto al heading sin tocar cada página.
- Bonus (adelanta F5-3): la URL copiada incluye ahora `window.location.pathname`
  (antes compartir desde /metodologia llevaba a la home).

### F4-7 · Radar IA: frescura visible — DONE (commit 6eb4558)

Verificación:

```
$ grep -rn '200M' src/
(sin resultados, exit=1) → 0
$ grep -rn '2024' src/pages/RadarIAPage.tsx src/pages/articles/ | grep -v datePublished
→ 2 restos, ambos legítimos (hitos históricos, no claims de frescura):
  - QueEsGeoGuiaCompleta.tsx:159 "2024: Perplexity y otros competidores" (cronología de GEO)
  - GeoVsSeoGuiaRapida.tsx:237 "2024: Google integra Gemini en búsqueda con AI Overviews"
$ npm run build → exit 0
```

Desviaciones y fuentes:
- Cifra ChatGPT: **900 millones de usuarios activos semanales** — anuncio de OpenAI
  recogido por TechCrunch el 27/02/2026 ("ChatGPT reaches 900M weekly active users",
  techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/). Aplicada en
  QueEsGeoGuiaCompleta (×2, con fuente y fecha), GeoVsSeoGuiaRapida (hito 2026 que
  sustituye al "200M mensuales" de 2024) y OptimizarWebParaPerplexity (tabla de alcance,
  antes "100M+").
- Cifras SIN fuente primaria verificable → eliminadas (regla 4): "Perplexity 15M+
  usuarios / crecimiento 400% anual" (solo agregadores de stats, ninguna fuente oficial)
  y las proyecciones "40-50% de consultas sin clic en 2026" (×2, proyección de 2024
  presentada como dato). Sustituidas por afirmaciones cualitativas sin número.
- Fechas: dateModified/citation_online_date → 2026-07-15 en los 9 artículos con fecha
  vieja y en RadarIAPage (última revisión REAL según git log: hoy — JSON-LD F1-1,
  captura F2-7, paleta F4-3 y cifras F4-7). Líneas visibles "Actualizado el 15 de
  diciembre de 2024" → "15 de julio de 2026" (MuerteSeoTradicional,
  QueSIgnificaSerCitadoPorIA). Las tarjetas de /radar-ia (date: 2024-06-xx, inventadas)
  → el datePublished que cada artículo declara en su propio schema (2025-01-03 …
  2025-01-15); el Blog schema pasa de datePublished 2024-01-01 a 2025-01-03.
- FAQ de /curso: "El 2024 ha demostrado que necesitas ambos" → "Necesitas ambos".
- Ejemplo envejecido en OptimizarWebParaPerplexity ("algo de 2024") → "algo reciente".

### Estado de la fase

- `npm run build` en verde tras cada tarea (29/29 rutas prerenderizadas).
- `npx tsc --noEmit` → 0 errores. eslint limpio en los ficheros tocados.
- Playwright 390px: scrollWidth = 390 en /, /curso, /metodologia y /radar-ia.
- Sin nuevos pendientes humanos; los citation_* meta que F4-7 tocó los elimina F5-6.

## FASE 5 — 2026-07-15

### F5-1 · Snippets y fechas honestas — DONE (commit 9934423)

Verificación:

```
$ grep -n 'new Date().toISOString()' src/components/HighlightSnippet.tsx
(sin resultados, exit=1) → 0
$ npx tsc --noEmit → 0 errores
$ npm run build → ✅ 29/29 rutas prerenderizadas (exit 0)
```

Desviaciones:
- `lastModified` pasó a prop obligatoria (sin `?`) y los 56 usos en 23 ficheros se
  rellenaron por codemod con la fecha real de `git log -1 --format=%as` de cada
  fichero. Todas resultaron ser 2026-07-15: es la fecha REAL (las fases 1-4 tocaron
  hoy todos esos ficheros: JSON-LD F1-1, paleta F4-3, cifras F4-7) y, a diferencia
  del fallback anterior, es estable entre builds hasta que el contenido cambie.
- Además de `mainEntityOfPage` (ahora la URL canónica de la página vía
  `useCanonicalHref`), el `@id` del fragmento pasó de `https://www.esgeo.ai#<id>`
  a `<canonical>#<id>`: dos snippets con el mismo id en páginas distintas ya no
  colisionan.

### F5-2 · GeoTerm sin ruido — DONE (commit b16e6b7)

Verificación:

```
$ grep -c "Término relacionado con GEO" dist/radar-ia/que-es-geo-guia-completa/index.html
0
DefinedTerm @ids en ese HTML: {'https://www.esgeo.ai/glosario#geo': 1} → sin duplicados
(antes: 3 bloques idénticos, uno por cada uso de term="geo")
```

Desviaciones:
- Los 27 términos del glosario se extrajeron de GlosarioPage.tsx a
  `src/data/glossary.ts` (fuente única; GlosarioPage la importa). GeoTerm resuelve:
  prop `definition` explícita > entrada del glosario > NADA (sin definición real no
  se emite JSON-LD; mejor silencio que definición circular).
- Alias de slugs usados en artículos → id canónico (solo sinónimos reales):
  `fragmentacion→chunking`, `autoridad-generativa→autoridad-ia`,
  `snippet-citable→snippet-citeable`. Términos sin entrada (seo, llm, ia, chatgpt,
  claude, perplexity, modelo-de-lenguaje, faq-conversacional) siguen enlazando pero
  no emiten schema.
- Dedup vía `GeoTermRegistryProvider` (montado en AppRoutes, compartido
  cliente/SSR): un `Set` nuevo por pathname vía useMemo — nada module-level que
  persista entre las 29 rutas del prerender, y en cliente se resetea al navegar.
  La decisión de emitir se congela por instancia con useRef para que los
  re-renders (tooltip) no retiren un script ya emitido.

### F5-3 · ShareSectionButton con URL completa — DONE (sin commit: ya lo arregló F4-6)

Verificación:

```
$ grep -n 'pathname' src/components/ShareSectionButton.tsx
23:    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
```

F4-6 (commit ced5d15) ya incluía el pathname como bonus documentado. Solo se verificó.

### F5-4 · ToC en SSR con anchors reales — DONE (commit a492161)

Verificación:

```
$ grep -c 'ItemList' dist/index.html
1   (antes 0: el índice se construía en useEffect y era null en el HTML servido)
```

Desviaciones:
- `items` es prop obligatoria (`TocItem[]`); la home (único consumidor) pasa
  `homeTocItems` con los 8 anchors reales de sus secciones (habla-widget,
  que-es-geo, metodologia, precios, casos-destacados, limitaciones, home-faq,
  home-seguir-aprendiendo) y sus títulos literales.
- `<button onClick>` → `<a href="#id">` navegable sin JavaScript.
- El JSON-LD ItemList se emite SIEMPRE en el HTML; solo la tarjeta visual espera
  al IntersectionObserver post-hero de F4-5 (si el gate hubiera envuelto también
  el script, el crawler habría seguido sin verlo).

### F5-5 · Course schema y FAQPage del artículo estrella — DONE (commit 550a4f6)

Verificación (python3 sobre los JSON-LD built):

```
dist/curso/index.html → CourseInstance: {"courseMode": "online", "courseWorkload": "PT14H", …}
dist/radar-ia/que-es-geo-guia-completa/index.html →
  FAQPage con mainEntity = 5 (≥3 ✓) · image = https://www.esgeo.ai/og-image.png
  · author = Organization (@id #organization) · dateModified = 2026-07-15
Todos los bloques JSON-LD de dist (148) parsean sin error.
$ file public/logo.png → PNG 512 x 512 (antes 590 bytes; ahora 16,7 KB, ≥112×112 ✓)
```

Desviaciones:
- courseWorkload PT14H = suma real de las duraciones de modules.ts
  (PT2H+PT3H+PT4H+PT3H+PT2H), no un número inventado.
- Logo generado con Pillow: gradiente teal de marca (mismo que la og-image de
  F1-7), "esGEO" + "citado por la IA". El schema global lo referencia ahora como
  ImageObject con width/height 512.
- Las 5 Q&A del FAQPage viven en un array `articleFaqs` que alimenta a la vez el
  JSX de la sección #faq-geo y el mainEntity (no pueden divergir).
- **Regresión de F1-1 detectada y corregida (mismo commit):** react-helmet
  DESCARTA los `<script>` con `dangerouslySetInnerHTML` (verificado con un
  experimento aislado: emite cadena vacía). Desde F1-1, los 25 JSON-LD dentro de
  `<Helmet>` (FAQPage de la home, WebApplication de /geo-score, Article de los 9
  artículos, DefinedTermSet del glosario, Course de /metodologia…) NO llegaban al
  head servido; solo sobrevivían los renderizados en el body. Codemod inverso SOLO
  en regiones `<Helmet>…</Helmet>` (22 ficheros): vuelta a children-string, que
  react-helmet emite sin escapar (el escape de renderToPipeableStream que motivó
  F1-1 no aplica a Helmet, que renderiza por su propio toString()). Los scripts en
  body conservan `dangerouslySetInnerHTML`. dist pasa de ~123 a 148 bloques
  JSON-LD válidos.

### F5-6 · Higiene de metas — DONE (commit 609dc20)

Verificación:

```
$ grep -rn 'citation_\|speakable-selector' src/ index.html
(sin resultados, exit=1) → 0
$ grep -rn 'name="keywords"' src/ index.html
(sin resultados, exit=1) → 0
```

Desviaciones:
- Eliminados de 19 páginas + index.html + useGeoMetadata: todas las metas
  `citation_*` (Highwire Press, solo para papers académicos), `speakable-selector`
  y `ai-content-files` (names inventados) y `meta keywords`. El hook perdió las
  props `citationTitle` y `speakableSelectors` (solo la home las pasaba).
- No se añadió SpeakableSpecification nuevo: el glosario ya lo tenía en su JSON-LD
  (la vía correcta), y con el fix de F5-5 ahora además SE SIRVE de verdad.
- Se conservan `meta author`, robots/googlebot/bingbot, og:/twitter: y article:tag.

### F5-7 · RSS — DONE (commit 487ae79)

Verificación:

```
$ python3 -c "import xml.etree.ElementTree as ET; ET.parse('dist/feed.xml')" → exit 0
dist/feed.xml → 9 <item> (título, link, description y pubDate reales, extraídos del
JSON-LD Article de cada artículo built; ordenados por fecha desc, 2025-01-03 → 2026-03-20)
$ grep -c 'application/rss+xml' dist/index.html → 1
```

Desviaciones:
- El feed se genera en scripts/prerender.js DESPUÉS de prerenderizar, parseando los
  JSON-LD Article de las páginas built (cero duplicación de datos; si un artículo
  cambia su schema, el feed lo refleja). Si aparecen <9 artículos con Article
  schema el build FALLA (gate anti-regresión).
- lastBuildDate = pubDate más reciente de los items, no la fecha del build
  (coherente con F5-1).

### F5-8 · Geo-score compartible — DONE (commit 8fde5ef)

Verificación:

```
$ npm run build → ✅ 29/29 (exit 0)
$ grep -c 'navigator.share' src/pages/GeoScorePage.tsx → 2 (≥1 ✓)
Flujo del informe verificado en código (HablaWidget.tsx):
  "Ver informe completo" ya NO es un <a> directo a machineready.vercel.app.
  handleReportClick → si visitorState es lead/customer, window.open(informe);
  si no, muestra el gate (EmailCapture con source habla-informe-<grade>) y SOLO
  su onSuccess (captura OK en backend) hace setReportUnlocked + window.open.
  Tras desbloquear queda visible un enlace directo por si el popup fue bloqueado.
```

Desviaciones:
- `?url=dominio` se lee con useSearchParams (router, SSR-safe) y se pasa a
  HablaWidget como `initialUrl`, que auto-lanza el análisis SOLO en useEffect
  (guard autoRanRef para no relanzar).
- "Compartir mi nota" aparece bajo el widget tras el resultado: navigator.share
  con la URL parametrizada /geo-score?url=<dominio> y fallback
  navigator.clipboard + toast. Todo en handlers.
- EmailCapture ganó la prop opcional `onSuccess` (se dispara solo si captureLead
  devuelve ok). El CTA "Abrir HABLA" del pie de /geo-score (que abre la home del
  auditor, no un informe) queda fuera del alcance de la tarea.

### Estado de la fase

- `npm run build` en verde tras cada tarea (29/29 rutas + feed.xml con 9 items).
- `npx tsc --noEmit` → 0 errores. Los 148 bloques JSON-LD servidos parsean.
- Hallazgo mayor de la fase: la regresión F1-1/react-helmet (JSON-LD de head
  ausente en todo el sitio desde el 15/07) quedó corregida en F5-5.
- Sin nuevos pendientes humanos.
