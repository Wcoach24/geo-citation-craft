# MASTERPLAN esgeo.ai — Auditoría 15/07/2026 → Ejecución autónoma

> **Para el agente ejecutor (Opus):** este documento es tu plan de trabajo completo.
> Ejecuta las fases EN ORDEN. Cada tarea tiene ficheros exactos y una verificación
> por máquina. No marques una tarea como hecha sin ejecutar su verificación.
> Las tareas `[HUMANO]` NO son tuyas: déjalas listadas en el informe final.

## Diagnóstico resumen (notas de auditoría)

| Dimensión | Nota | Problema raíz |
|---|---|---|
| Diseño/presentación | 6/10 | Acabado: font de headings rota, CTAs de compra ilegibles, subpáginas fuera de paleta |
| Copy | 6,5/10 | El sitio vende "todo verificable" y se contradice a sí mismo en lo verificable |
| Comercial/producto | 4,5/10 | One-shot de 47 € con el nurture desconectado y cero escalera de valor |
| GEO/autoridad | 4,5/10 | ~50% del JSON-LD servido es inválido; autor anónimo; cero menciones externas |
| Transversal | — | Sin CI, tracking de revenue corrupto, secuencia email muerta |

**Tesis del plan:** esgeo.ai tiene una base técnica (SSR, robots, llms.txt) y una voz
(anti-hype, 35→92) mejores que la media del nicho, pero pierde la venta por
incoherencias internas y pierde la autoridad por schema roto + anonimato. El orden
de ejecución maximiza €/esfuerzo: red de seguridad → integridad → conversión →
email → diseño → GEO técnico → contenido.

---

## REGLAS DE ORO (leer antes de tocar nada)

1. **El build SSR es frágil.** `npm run build` = `vite build && vite build --ssr && node scripts/prerender.js`. Landmines conocidos que lo rompen con "window is not defined":
   - `localStorage`/`window` en fase de render (solo en `useEffect`). Guards existentes: `src/hooks/useVisitorState.ts:45`, `src/integrations/supabase/client.ts:13` — **no los borres**; `client.ts` está marcado "automatically generated" por Lovable y puede regenerarse sin el guard.
   - `window.location.href` en JSON-LD en render → usar `useCanonicalHref()` de `src/lib/canonical.ts`.
   - Radix `AccordionContent` sin `forceMount` → el HTML servido pierde las respuestas de FAQs.
2. **`dist/index.html` es plantilla Y salida de `/`.** Nunca ejecutes `prerender.js` dos veces sobre el mismo dist. El catch-all de `vercel.json` apunta a `/spa.html`, no a `/`.
3. **Toda ruta nueva debe añadirse a `ROUTES` en `scripts/prerender.js`** o se servirá como SPA vacío a los crawlers (hasta que F0-2 automatice el check).
4. **Después de CADA tarea que toque `src/` o `scripts/`:** `npm run build` debe salir 0. Es tu gate mínimo.
5. **Cliente sin hydrate a propósito** (`createRoot`, no `hydrateRoot`): la home personaliza por localStorage. No lo "arregles".
6. **Commits:** conventional commits en español, uno por tarea, con el ID de tarea (ej. `fix(design): D-1 font headings — MASTERPLAN`). Push a `main`.
7. **No inventes datos.** Donde el plan pida cifras/capturas que no existen (testimonios, capturas de citas, datos de la BD de auditorías), marca `[HUMANO]` y sigue.
8. **Presupuesto de reintento:** si una tarea falla su verificación 3 veces, documenta el fallo en `MASTERPLAN_LOG.md`, revierte los cambios de esa tarea y continúa con la siguiente.

Al terminar cada fase: `npm run build` + commit + anota en `MASTERPLAN_LOG.md` (crea el fichero: tarea, resultado de verificación, desviaciones).

---

## FASE 0 — Red de seguridad (hazla primero: protege todo lo demás)

**F0-1. CI en GitHub Actions.**
Crear `.github/workflows/ci.yml`: en cada push/PR a main → `npm ci && npm run lint && npm run build`.
✅ Verифicación: fichero existe y el YAML es válido (`node -e` con un parser o push y comprobar que el Action corre).

**F0-2. Check de paridad de rutas.**
Script `scripts/check-routes.mjs`: extrae los `path="..."` públicos de `src/App.tsx` (excluye `*`, `/dashboard`, `/auth`, `/success`, `/guest-access`, `/unsubscribe`, `/checkout`), compáralos con `ROUTES` de `scripts/prerender.js` y sal con código ≠0 si divergen. Añádelo al script `build` (antes de vite) y al CI.
✅ `node scripts/check-routes.mjs` sale 0; si añades una ruta dummy a App.tsx sale 1 (pruébalo y revierte).

**F0-3. Tracking de compra veraz.**
`src/pages/PurchaseSuccessPage.tsx:19`: hoy `purchaseComplete('complete', 47)` hardcodeado y re-disparable en cada recarga. Dedupe por `session_id` en localStorage (dentro de useEffect) y pasar `product_type`/importe real (el webhook `api/stripe-webhook.ts` tiene metadata; añade `product` y `amount` a la success_url en `api/checkout.ts` como query params y léelos).
✅ `npm run build` OK + grep confirma que ya no existe el literal `47` hardcodeado en ese fichero.

**F0-4. Instrumentar geo-score.**
`src/pages/GeoScorePage.tsx` no tiene ni un evento. Añadir (patrón de `src/lib/analytics` ya usado en otras páginas): `geo_score_started`, `geo_score_completed {score, grade}`, `geo_score_error`, y evento en el CTA post-resultado.
✅ `grep -c trackEvent src/pages/GeoScorePage.tsx` ≥ 3 y build OK.

---

## FASE 1 — Integridad: schema roto + coherencia interna (el sitio deja de contradecirse)

**F1-1. [CRÍTICO] Reparar JSON-LD escapado en todo el sitio.**
`renderToPipeableStream` escapa los `{JSON.stringify(...)}` escritos como text children → el HTML live sirve `{&quot;@context&quot;...}` (inválido). Afecta: `src/components/GeoTerm.tsx` (~l.69-84), `src/components/HighlightSnippet.tsx` (~l.55-78), `src/components/TableOfContents.tsx` (~l.99-115), scripts inline de `src/pages/EquipoPage.tsx`. Cambiar a `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(...)}} />`.
✅ Tras build: `grep -c '&quot;@context&quot;' dist/radar-ia/que-es-geo-guia-completa/index.html` = 0, y `python3` parsea TODOS los bloques `application/ld+json` de ese HTML y de `dist/acerca-de/equipo/index.html` sin error.

**F1-2. [CRÍTICO] Taxonomía única F1-F5.**
El framework tiene 3 identidades según la página (curso vs /metodologia vs radar). Fuente de verdad: `src/data/modules.ts` (ya existe). Refactor: `src/pages/MetodologiaGeoPage.tsx:48-93` (hardcodea su propia lista, con `bg-blue-500` etc. y `difficulty: "Beginner"` en inglés) y el artículo `QueEsGeoGuiaCompleta` deben importar títulos/bullets/duraciones de `modules.ts`. Arreglar también "seis módulos progresivos" → cinco, y "no son secuenciales" (radar) vs "en orden" (home): la versión canónica es **secuencial**.
✅ Script ad-hoc: extraer los títulos F1-F5 del HTML built de `/`, `/curso`, `/metodologia` y comparar — idénticos. Grep `Beginner|Intermediate` en `src/pages` = 0.

**F1-3. Una sola nota, fechada.**
Home dice "92" en dos sitios y "100" en la tabla de benchmarks. Unificar a **92, con fecha** ("auditado el 12 de julio de 2026") en hero/stats/tabla (buscar en `src/pages/Index.tsx`, `src/components/CasosDestacadosSection.tsx` o donde viva la tabla).
✅ `grep -rn '100' src/ | grep -i 'esgeo\|nuestra web'` = 0 apariciones de la nota 100 propia; build OK.

**F1-4. Resolver la contradicción de prueba social.**
Home: "No tenemos testimonios" vs /curso FAQ: "Muchos alumnos están convirtiendo…" vs /experto-geo: "clientes en Alicante, Madrid…". Reescribir: FAQ de curso → "El curso está pensado tanto para in-house como para consultores: los entregables son licenciables comercialmente y puedes usarlos con clientes sin restricción." /experto-geo → "esGEO opera en remoto desde España para cualquier mercado hispanohablante."
✅ `grep -rn "Muchos alumnos\|Alicante" src/` = 0.

**F1-5. sameAs y footer: dejar de regalar la entidad a otra empresa.**
El schema global (index.html) declara `linkedin.com/company/esgeo` (es ESGeo Sustainability Intelligence, empresa italiana) y `twitter.com/esgeo_ai` (no localizable). `src/components/Footer.tsx:30-36` enlaza esos + `github.com/esgeo` (ajeno). **Eliminar** todos los sameAs/social links no verificados; añadir `disambiguatingDescription` a la Organization ("Plataforma española de Generative Engine Optimization; sin relación con ESGeo Sustainability Intelligence"). Cuando existan handles reales se re-añadirán (`[HUMANO]` H-2).
✅ `grep -rn 'esgeo_ai\|company/esgeo\|github.com/esgeo' src/ index.html` = 0.

**F1-6. Soft-404 y llms-full.txt.**
Todo devuelve 200, incluido `/pagina-inexistente` y `/llms-full.txt` (sirve HTML). En `vercel.json`: catch-all → 404 real para no-rutas (la página NotFound existe). Generar `public/llms-full.txt` real: en `scripts/prerender.js`, tras prerenderizar, extraer el texto plano de las 28 rutas y concatenarlo con separadores de ruta.
✅ `curl -s -o /dev/null -w "%{http_code}" https://www.esgeo.ai/xyz-no-existe` = 404 (post-deploy; en local: el fichero `dist/llms-full.txt` existe, >20KB, texto plano).

**F1-7. og:image + metas sociales en todas las rutas.**
`og-image.png` no existe (la URL sirve HTML) y /curso, /metodologia, /glosario y los 9 artículos radar-ia tienen 0 etiquetas og:/twitter:. Generar una og-image 1200×630 (puede ser HTML→screenshot con el propio Chromium del CI, estilo: gradiente teal de marca + "esGEO — Haz que la IA recomiende tu negocio") → `public/og-image.png`. Aplicar `useGeoMetadata.tsx` (ya existe) a todas las páginas prerenderizadas. Home: `og:type` de `article` → `website`.
✅ `file public/og-image.png` = PNG 1200x630; tras build, `grep -c 'og:title' dist/curso/index.html` ≥ 1 (ídem metodologia, glosario, 1 artículo).

**F1-8. Redirect permanente y host canónico.**
esgeo.ai → www devuelve 307. En `vercel.json` configurar redirect 308. El `Offer.url` del Course schema usa `https://esgeo.ai/checkout` → cambiar a `https://www.esgeo.ai/curso#comprar`.
✅ `grep -rn 'esgeo.ai/checkout' src/ index.html` = 0; vercel.json contiene el redirect con `"permanent": true`.

**F1-9. /checkout real.**
Hoy es `navigate('/curso#comprar')` y sirve 5,7KB sin title (el "pecado" que el producto predica). Construir página real de pre-pago: título, "Curso GEO completo — 47 €, pago único · 5 PDFs (142 páginas) al instante en tu email · Factura disponible · Pago vía Stripe, no guardamos tu tarjeta · hola@esgeo.ai" + BuyButton + garantía (F2-1). Añadir a ROUTES.
✅ `dist/checkout/index.html` contiene `<title>` y >3000 chars de contenido; build OK.

---

## FASE 2 — Conversión: la oferta deja de fugar dinero

**F2-1. Garantía medible por nota del auditor.**
No existe "garantía/reembolso" en todo el sitio. Añadir bajo cada BuyButton y en `#comprar` y /checkout: *"Garantía medible: aplica F1 y F2 sobre tu web. Si tu nota en el auditor no sube al menos 20 puntos, escríbenos con el antes y el después y te devolvemos los 47 €."* Añadir la garantía a la FAQ de /curso y a /terminos (cláusula de 30 días).
✅ `grep -rln 'Garantía medible' src/ | wc -l` ≥ 3; build OK.

**F2-2. Matar el "AHORRA €3" y decidir módulos sueltos.**
5×10 € vs 47 € hace ridículo el bundle (`src/components/ModuleCTA.tsx:62,94`; F1 vende suelto en `ModuloF1Page.tsx:187`, F3 dice que ya no se venden). Decisión ejecutable: **eliminar la venta por módulos** del front (ModuleCTA pasa a promocionar solo el bundle) y del backend (`api/checkout.ts:15-22` deja de aceptar `f1..f5`; conservar el precio del bundle).
✅ `grep -rn 'AHORRA' src/` = 0; POST a `/api/checkout` con `{"product":"f1"}` (en preview) responde 400.

**F2-3. Checkout Stripe: factura + métodos de pago.**
`api/checkout.ts:71` solo `["card"]`, sin factura ni NIF. Añadir `invoice_creation: {enabled: true}`, `tax_id_collection: {enabled: true}`, `payment_method_types: ["card", "paypal", "link"]` (si el flag de PayPal falla en la cuenta, dejar card+link y anotarlo). Añadir trust badge "Factura para tu empresa (NIF/CIF)" junto al BuyButton.
✅ `grep -n 'invoice_creation\|tax_id_collection' api/checkout.ts` presente; build OK.

**F2-4. /success honesto + onboarding.**
`PurchaseSuccessPage.tsx:83-96` promete "enlaces válidos 7 días" pero el webhook adjunta los PDFs al email. Reescribir: "Los 5 PDFs van adjuntos al email que acabas de recibir. Empieza por F1, capítulo 1 (30 min). Tu primer hito: vuelve a auditar tu web tras aplicar F1-F2 y compara tu nota." + CTA al auditor.
✅ `grep -n '7 días' src/pages/PurchaseSuccessPage.tsx` = 0.

**F2-5. Tercer tier ancla: "Curso + Auditoría personalizada" — 197 €.**
`PricingSection.tsx:56` tiene grid de 3 con 2 planes (hueco visual que delata el tier que falta). Añadir tier: curso completo + auditoría HABLA comentada en vídeo/PDF de tu dominio + plan de acción priorizado. Entrega manual (aviso al owner por email, mismo patrón que la notificación de venta del webhook). Crear el price en el código como `product: "curso-auditoria"` en `api/checkout.ts` usando `price_data` inline (importe 19700, EUR) para no depender de crear un Price en el dashboard de Stripe.
✅ Los 3 tiers renderizan en `dist/index.html` (grep "197"); POST `/api/checkout` con `curso-auditoria` crea sesión en modo preview (o test documentado en LOG).

**F2-6. Lead magnet alineado.**
`EmailCapture.tsx:56` promete "checklist GEO", el welcome entrega F0. Cambiar el copy de captura y del mensaje de éxito a "Te envío el módulo F0 completo (diagnóstico en 15 min)".
✅ `grep -rn 'checklist' src/components/EmailCapture.tsx` = 0.

**F2-7. Exit intent global + captura en artículos.**
`ExitIntentPopup` solo está en /curso y solo desktop. Montarlo en el layout global (App.tsx o layout wrapper) con la supresión por visitorState existente. Cablear `InlineEmailCapture` (hoy muerto y con éxito falso: `InlineEmailCapture.tsx:44-57` muestra éxito aunque falle — arreglar el manejo de error) al final de los 9 artículos de radar-ia. Borrar `LeadMagnetModal.tsx` (simula captura con setTimeout, no llama a nada).
✅ `ls src/components/LeadMagnetModal.tsx` no existe; grep `InlineEmailCapture` en `src/pages/articles/` ≥ 1 uso; build OK.

**F2-8. CTAs con verbo+beneficio.**
"Elige tu Plan GEO" → "Empieza gratis. Paga una vez si te convence." · "Ver módulo"/"Explorar módulo" → "Leer F0 gratis" / "Qué aprenderás en F2 →" · Mover `cta-pulse` del CTA gratuito al de pago en `HeroSection.tsx:51,57`.
✅ `grep -rn 'Elige tu Plan' src/` = 0; en HeroSection el `cta-pulse` está en el botón de 47 €.

---

## FASE 3 — Email: resucitar el motor (código ya escrito, solo desconectado)

**F3-1. [CRÍTICO] Reconectar la secuencia E2-E5.**
`supabase/functions/process-email-sequence/index.ts` (431 líneas, E5 = email de venta) lee `public.leads`, pero `api/capture-lead.ts:105-118` solo escribe en la Resend Audience → nadie recibe E2-E5. Solución de mínimo riesgo: (a) `api/capture-lead.ts` inserta TAMBIÉN en `public.leads` (upsert por email, vía supabase-js con service role — las env vars ya existen en Vercel para el webhook); (b) portar la lógica de process-email-sequence a `api/email-sequence.ts` (Vercel) reutilizando los HTML de los emails; (c) programar en `vercel.json` → `"crons": [{"path": "/api/email-sequence", "schedule": "0 9 * * *"}]`.
✅ Build OK; `vercel.json` contiene el cron; test unitario simple del selector de leads (día 3/7/12/18) con fechas sintéticas sale 0. Post-deploy `[HUMANO]` H-6: verificar con un lead de prueba.

**F3-2. Email de testimonio a compradores (+7 días).**
El HTML ya existe en process-email-sequence (nunca dispara: lee `purchases` que el webhook vivo no escribe). Al portar F3-1, hacer que `api/stripe-webhook.ts` inserte la compra en `public.purchases` y que el cron envíe la petición de testimonio a +7 días.
✅ Grep: `stripe-webhook.ts` contiene insert a `purchases`; selector de compradores testeado con fecha sintética.

**F3-3. Borrar el backend fantasma.**
`supabase/functions/{create-checkout,stripe-webhook,capture-lead,send-purchase-email}` son legacy (create-checkout mezcla hasta prices de otra cuenta Stripe, CORS a lovable.app). Borrar los directorios del repo. `[HUMANO]` H-7: ejecutar `supabase functions delete` de las 4 (requiere acceso al proyecto Supabase).
✅ `ls supabase/functions/` no contiene esas 4; build OK.

**F3-4. Rutas muertas fuera del bundle.**
`/dashboard`, `/auth`, `/guest-access` leen `user_access` que nada escribe (post-compra es email-only). Eliminar las rutas de App.tsx, las páginas y `AuthContext` si nada más lo usa. OJO: si F3-2 reactiva `purchases`, el dashboard podría reactivarse en el futuro — borra igualmente, está en git.
✅ Grep `path="/dashboard"` en App.tsx = 0; build OK; bundle principal reduce tamaño (anotar antes/después en LOG).

---

## FASE 4 — Diseño: acabado premium

**F4-1. [1 línea] Font de headings.**
`src/index.css:110-113`: `font-family: '"Plus Jakarta Sans"', sans-serif;` — las comillas anidadas hacen que NUNCA cargue (todos los h1-h6 van en sans genérica). Fix: `font-family: "Plus Jakarta Sans", Inter, sans-serif;`. Añadir también carga de Roboto Mono o quitarla de tailwind.config.
✅ Build OK y `grep -n "'\"Plus" src/index.css` = 0.

**F4-2. [4 líneas] CTAs de compra legibles.**
`text-primary` sobre `bg-accent` = contraste 1.6:1 en los botones que venden: `CtaSection.tsx:21`, `MethodologySection.tsx:88`, `PricingSection.tsx:96,67`. Cambiar a `text-accent-foreground`. Y `CtaSection.tsx:27` ("Probar Gratis" blanco sobre blanco, variant outline): añadir `bg-transparent border-white/40`.
✅ `grep -rn 'bg-accent.*text-primary\|text-primary.*bg-accent' src/components/` = 0.

**F4-3. Paleta unificada en subpáginas.**
Prohibir colores Tailwind crudos: `MetodologiaGeoPage.tsx:53-89` (`bg-blue-500`, `bg-green-500`, `bg-purple-500`, `bg-orange-500`, `bg-red-500` — resuelto en parte por F1-2), `RadarIAPage.tsx:294-309`, `HighlightSnippet.tsx:23-25`, `CaseStudyCard.tsx:76-79`, `ResultsCard.tsx:33-61`, `LimitationsSection.tsx:22-63`. Mapear a tokens (`primary`, `accent`, `muted`, `secondary`; si hace falta un semáforo, crear `--success/--warning/--danger` en index.css derivados de la paleta teal).
✅ `grep -rEn '(bg|text|border)-(blue|green|purple|orange|red|yellow|pink|indigo)-[0-9]{3}' src/ | wc -l` = 0.

**F4-4. Hero reescrito.**
`HeroSection.tsx:37`: párrafo de ~90 palabras con el precio en la frase 2. Nuevo subhead (mantener H1 "Haz que la IA Recomiende Tu Negocio"): *"Cuando alguien pregunta a ChatGPT por lo que tú vendes, cita a tres webs. Hoy ninguna es la tuya — y probablemente ni siquiera puede leerte. esGEO te enseña a arreglarlo con el método F1-F5: 5 módulos en PDF, 47 € de pago único, sin suscripción."* + 3 bullets (Para quién / Qué obtienes / Empieza gratis con F0 + auditor). Badge y acentos sobre gradiente: usar variante clara `hsl(160 70% 55%)` para legibilidad. Renderizar `WhatIsGeoSection` (importada y no usada en Index.tsx) tras el hero, recortada, o borrar el import.
✅ El párrafo del hero en `dist/index.html` tiene <60 palabras antes del primer CTA; import sin uso = 0 (lint).

**F4-5. Layout móvil y grids.**
(a) Overflow /metodologia: `TabsList` 4 triggers sin wrap (`MetodologiaGeoPage.tsx:199-204`) → `flex-wrap h-auto w-full`. (b) Grids con huecos: 5 módulos en grid-3 y 4 artículos en grid-3 → layouts 3+2 o grid-2 según caso. (c) Sección "Framework Completo" vacía en /metodologia: eliminar. (d) TOC flotando sobre el hero de la home: ocultar hasta scroll > hero (IntersectionObserver en `TableOfContents.tsx`).
✅ Screenshot Playwright móvil 390px de /metodologia: `fullPage.width` = 390 exacto; build OK.

**F4-6. Detalles de marca y motion.**
(a) `Header.tsx:21,24`: `bg-teal-600/text-teal-600` → tokens `primary`. (b) Hover del variant outline global (`ui/button.tsx:16`) rellena de verde intenso → `hover:bg-secondary hover:text-foreground`. (c) `cta-pulse` y `fade-up` sin reduced-motion → envolver en `@media (prefers-reduced-motion: no-preference)` en index.css. (d) Borrar `src/App.css` (boilerplate Vite muerto). (e) ShareSectionButton: reducir a 1 por página o icon-only ghost junto al heading (hay 55; en /radar-ia 5 por pantalla).
✅ `ls src/App.css` no existe; `grep -rn 'teal-600' src/` = 0; `grep -c 'prefers-reduced-motion' src/index.css` ≥ 1.

**F4-7. Radar IA: frescura visible.**
Fechas 2024 bajo un claim "Actualizado en julio de 2026" + "Datos clave" congelados ("ChatGPT 200M usuarios"). Actualizar fechas de artículos a su última revisión REAL (git log de cada fichero) y cifras con fuente y fecha (ChatGPT ~700M usuarios semanales, OpenAI 2025) o eliminar los números. Quitar "El 2024 ha demostrado…" de la FAQ de /curso.
✅ `grep -rn '200M' src/` = 0; `grep -rn '2024' src/pages/RadarIAPage.tsx src/pages/articles/ | grep -v datePublished` revisado (solo restos legítimos).

---

## FASE 5 — GEO on-site: predicar con el ejemplo

**F5-1. Snippets y fechas honestas.**
`HighlightSnippet.tsx:28`: `new Date().toISOString()` como fallback de dateModified → cada build "actualiza" todo (anti-patrón F5 del propio curso). Hacer `lastModified` prop obligatoria (error de build si falta vía TS) y `mainEntityOfPage` con la URL real de la página (useCanonicalHref), no la home.
✅ `grep -n 'new Date().toISOString()' src/components/HighlightSnippet.tsx` = 0; tsc sin errores.

**F5-2. GeoTerm sin ruido.**
`GeoTerm.tsx:75`: sin `definition` emite "Término relacionado con GEO" (definición circular) y @id duplicados por página. Importar la definición real del dato del glosario (`src/data/`), y deduplicar: solo el primer uso de un término en la página emite JSON-LD.
✅ En `dist/radar-ia/que-es-geo-guia-completa/index.html`: 0 apariciones de "Término relacionado con GEO" y cada `@id` de DefinedTerm aparece 1 vez.

**F5-3. ShareSectionButton con URL completa.**
`ShareSectionButton.tsx:18`: `${origin}#${sectionId}` omite el pathname (compartir desde /metodologia lleva a la home). Fix: `${origin}${pathname}#${sectionId}`.
✅ Grep confirma pathname en el template literal.

**F5-4. ToC en SSR con anchors reales.**
`TableOfContents.tsx` construye el índice en useEffect → null en el HTML servido (su ItemList nunca llega al crawler) y usa `<button onClick>`. Refactor: recibir items como prop estática (por página) y renderizar `<a href="#id">`.
✅ `grep -c 'ItemList' dist/index.html` ≥ 1 (hoy 0 por el useEffect).

**F5-5. Course schema y FAQPage del artículo estrella.**
(a) Grafo global: `hasCourseInstance` sin `courseWorkload` → añadir (`PT14H`). Logo 590B → generar logo real ≥112×112 y referenciarlo. (b) `QueEsGeoGuiaCompleta.tsx:29`: `FAQPage` declarado sin `mainEntity` → añadir las Q&A reales del artículo; añadir `image` y `author` (Organization hasta que exista Person real; ver H-1); actualizar `dateModified` al día del cambio real.
✅ Validación con python3 de los JSON-LD de `dist/curso/index.html` y del artículo: FAQPage con mainEntity ≥3 items, CourseInstance con courseWorkload.

**F5-6. Higiene de metas.**
Quitar `citation_*` (solo aplica a papers académicos), `speakable-selector` y `ai-content-files` como meta names inventados, `meta keywords`. Si se quiere speakable: `SpeakableSpecification` en JSON-LD.
✅ `grep -rn 'citation_\|speakable-selector' src/ index.html` = 0.

**F5-7. RSS.**
Generar `dist/feed.xml` en `scripts/prerender.js` con los 9+ artículos de radar-ia (título, link, description, pubDate reales). Enlazarlo con `<link rel="alternate" type="application/rss+xml">` en index.html.
✅ `dist/feed.xml` existe y `python3 -c "import xml.etree.ElementTree as ET; ET.parse('dist/feed.xml')"` sale 0.

**F5-8. Geo-score compartible.**
`GeoScorePage.tsx`: aceptar `?url=dominio` para pre-lanzar el análisis, botón "Compartir mi nota" (navigator.share + copy fallback) con URL parametrizada. El informe completo de HABLA hoy manda a `machineready.vercel.app` (dominio ajeno, sin captura): cambiar el CTA de `HablaWidget.tsx:189` para capturar email ANTES de abrir el informe (gate con EmailCapture) — el informe puede seguir siendo externo hasta H-4.
✅ Build OK; grep `navigator.share` en GeoScorePage ≥1; el widget solo abre el informe tras submit de email (verificar flujo en el código).

---

## FASE 6 — Contenido: los 10 huecos (1 artículo por tarea, en este orden)

Formato para CADA artículo nuevo: página React en `src/pages/articles/`, ruta en App.tsx + `ROUTES` de prerender.js + sitemap; H1 pregunta, respuesta directa en las primeras 40 palabras (HighlightSnippet con lastModified), FAQPage schema válido, GeoTerm enlazando al glosario, autor Organization (Person cuando exista H-1), InlineEmailCapture al final, CTA al curso. Mínimo 1.500 palabras útiles, datos con fuente y fecha. Verificación por artículo: ruta en dist con >3000 chars, JSON-LD parsea, `check-routes` pasa.

1. F6-1 "Cómo aparecer en los AI Overviews de Google (y en Gemini)" — el hueco más buscado.
2. F6-2 "Qué es llms.txt y cómo crearlo paso a paso" + plantilla descargable.
3. F6-3 "GEO vs AEO vs LLMO vs SEO para IA: qué término usar" — quien desambigua, define la categoría.
4. F6-4 "Cómo optimizar WordPress para que ChatGPT te cite" — 40% de la web hispana.
5. F6-5 "El estudio de Princeton sobre GEO, explicado en español" (arXiv 2311.09735) — imán de enlaces.
6. F6-6 "Checklist de auditoría GEO: 25 puntos" — máxima citabilidad RAG, formato lista.
7. F6-7 "GEO local: que la IA recomiende tu negocio en tu ciudad".
8. F6-8 "GEO para ecommerce: salir en las recomendaciones de producto de ChatGPT".
9. F6-9 "Cómo optimizar para Claude" — completa la serie ChatGPT/Perplexity existente.
10. F6-10 "Herramientas GEO 2026: cómo medir si la IA te cita" — escaparate de HABLA.

---

## FASE 7 — [HUMANO] Requiere a Álvaro (el agente NO las ejecuta; las lista al final)

- **H-1. Identidad del fundador.** Nombre real, bio con credenciales y foto en /acerca-de/equipo; Person schema + sameAs a LinkedIn/GitHub personales; author Person en artículos. Sin esto, F3 (autoridad) no compone. *(El agente puede dejar preparado el componente con placeholders `TODO_FOUNDER`.)*
- **H-2. Handles sociales reales.** Crear/reclamar X, LinkedIn, GitHub de esGEO → re-añadir sameAs y footer (revierte F1-5 con datos reales). Valorar apellido de marca ("esGEO Academy") por la colisión con ESGeo Sustainability Intelligence; entrada en Wikidata.
- **H-3. Capturas de citas reales.** 2-3 capturas prompt+fecha+modelo de esGEO citado (ChatGPT/Perplexity) para /casos y home — el estándar que /experto-geo exige a otros. Mientras no existan, el agente sustituye los checks "Modelos que nos citan ✓✓✓✓✓" por el caso 35→92 con curls verificables (puede hacerlo en F1-4b si hay tiempo).
- **H-4. habla.esgeo.ai caído** (verificado vía proxy; confirmar desde otra red). Restaurar DNS/deploy o retirar referencias de llms.txt. Decidir si el informe completo se sirve en esgeo.ai/informe (repo machineready).
- **H-5. GDPR: Clarity sin consentimiento** (`index.html:26-32`) con audiencia española. Decidir: banner de consentimiento o modo cookieless + actualizar /privacidad.
- **H-6. Verificar la secuencia de email en producción** con un lead de prueba tras F3-1 (env vars de Supabase/Resend en Vercel).
- **H-7. `supabase functions delete`** de las 4 edge functions legacy (F3-3) y revisar si hay claves de una segunda cuenta Stripe.
- **H-8. Autoridad off-site (repetir mensualmente):** LinkedIn del fundador publicando semanalmente; lanzamiento de HABLA (Product Hunt, foros SEO hispanos); guest posts en IEBS/UNIR/blogs SEO ES; publicar dato original ("auditamos 100 webs españolas: X% ilegibles para IA") con la BD de HABLA.
- **H-9. Aprobar el tier 197 €** (F2-5) y su proceso de entrega manual antes de publicarlo — el agente lo deja implementado pero puede dejarlo tras un feature flag si no hay confirmación.

---

## Orden de ejecución y criterio de parada

```
F0 (red de seguridad)  →  F1 (integridad)  →  F2 (conversión)  →  F3 (email)
→  F4 (diseño)  →  F5 (GEO on-site)  →  F6 (contenido, 1 a 1)
```

- Cada fase termina con: `npm run build` en verde + verificaciones de la fase ejecutadas + entrada en `MASTERPLAN_LOG.md` + push.
- **Parada dura:** si el build queda roto y no se recupera revirtiendo la última tarea, `git reset --hard` al último commit verde, documentar y parar la fase.
- **Definición de DONE global:** F0-F5 completas con todas las verificaciones en verde + ≥3 artículos de F6 publicados + lista H-1..H-9 entregada a Álvaro con su estado.

## Métricas de éxito (medir a 30 días vía Clarity/Vercel Analytics + Resend)

1. Conversión visita→lead ≥ 3% (hoy sin baseline fiable — F0-4 la crea).
2. Secuencia E2-E5 enviándose (opens de E5 > 0 en Resend).
3. 100% de JSON-LD servido válido (script de validación sobre las 28+ rutas en CI).
4. Búsqueda "qué es GEO" en español: esgeo.ai citado por ≥1 modelo (verificar mensualmente con los prompts de H-3).
5. Ticket medio > 47 € (mix con tier 197 €).
