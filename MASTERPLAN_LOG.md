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
