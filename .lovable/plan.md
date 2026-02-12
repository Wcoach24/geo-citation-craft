
# Plan de Mejora Absoluta - Auditoria Completa esGEO

## Resumen Ejecutivo

Tras auditar todos los ficheros proporcionados y el estado actual del proyecto, he identificado **23 problemas** organizados en 3 niveles de prioridad. Este plan aborda desde vulnerabilidades de seguridad residuales hasta inconsistencias de datos, duplicacion de Schema.org, funciones sin implementar, y dependencias innecesarias.

---

## FASE 1: CRITICO (Seguridad y Datos Rotos)

### 1.1 - download-premium-content accede directamente a guest_access (bypassa RLS)

**Problema:** `download-premium-content/index.ts` usa service_role_key para hacer SELECT directo a `guest_access` (linea 52-57), bypassando la RLS y la funcion `get_guest_access_by_token`. Ademas, `verify_jwt = false` en config.toml significa que CUALQUIERA puede llamar esta funcion con un moduleId y accessToken inventado hasta hacer fuerza bruta.

**Solucion:** Reescribir `download-premium-content` para usar `supabase.rpc('get_guest_access_by_token')` y validar que el `product_type` del guest permite acceso al modulo solicitado.

### 1.2 - generate-guest-access sin autenticacion (verify_jwt = false)

**Problema:** Cualquiera puede llamar `generate-guest-access` con un email y purchaseId arbitrarios para generar tokens de acceso sin verificacion. Deberia ser invocable SOLO desde el webhook (server-to-server).

**Solucion:** Cambiar `verify_jwt = true` o validar internamente que la llamada proviene del webhook via un secret compartido. Lo mismo aplica a `upload-premium-content` y `send-purchase-email`.

### 1.3 - send-purchase-email NO envia emails

**Problema:** La funcion `send-purchase-email` es un stub: tiene todo el codigo de envio comentado con `// TODO: Integrate with Resend`. El webhook la llama pero no envia nada. Los compradores guest **nunca reciben su enlace de acceso**.

**Solucion:** Implementar el envio real via Resend o similar, o al menos documentar claramente que es un stub y deshabilitar la promesa al usuario de "recibiras un email".

### 1.4 - Email inconsistente en send-purchase-email

**Problema:** `send-purchase-email` todavia referencia `soporte@geomastery.es` y "GEO Mastery" (lineas 43-45) en lugar de `hola@esgeo.ai` y "esGEO".

**Solucion:** Usar `SUPPORT_EMAIL` importado desde modules.ts (requiere adaptacion para Deno).

### 1.5 - Stripe API version ficticia

**Problema:** Tanto `create-checkout` como `stripe-webhook` usan `apiVersion: "2025-08-27.basil"` que es una version inexistente. Esto puede causar comportamiento impredecible.

**Solucion:** Eliminar la linea `apiVersion` para usar la version por defecto del SDK, o fijar una version real conocida.

---

## FASE 2: IMPORTANTE (Inconsistencias de Datos y Duplicacion)

### 2.1 - CursoGeoPage NO usa modules.ts

**Problema:** `CursoGeoPage.tsx` tiene sus propios datos de modulos hardcodeados (lineas 46-112) con nombres y descripciones **diferentes** a `modules.ts`:
- modules.ts: "Contexto Semantico" para F2
- CursoGeoPage: "Estructura semantica para LLMs" para F2
- modules.ts: "Validacion Conversacional" para F4
- CursoGeoPage: "Optimizacion tecnica avanzada" para F4

**Solucion:** Refactorizar CursoGeoPage para importar datos desde `modules.ts`, extendiendo el tipo `ModuleInfo` con campos adicionales como `topics`, `duration`, `difficulty`, `icon`, `color`.

### 2.2 - CursoGeoPage muestra precio €0 en Schema.org

**Problema:** Linea 447 del Schema.org en CursoGeoPage dice `"price": "0"`. El curso no es gratis, cuesta €50. Esto contradice el Schema.org de index.html que dice €50.

**Solucion:** Corregir a `"price": "50"`.

### 2.3 - Fake AggregateRating en Schema.org

**Problema:** `CursoGeoPage` declara `"ratingValue": "4.9", "reviewCount": "127"` (lineas 439-442). No hay sistema de reviews implementado. Esto es **datos estructurados falsos** que Google puede penalizar.

**Solucion:** Eliminar `aggregateRating` hasta tener reviews reales.

### 2.4 - Footer duplica Schema.org Organization

**Problema:** `Footer.tsx` renderiza un bloque JSON-LD de Organization (lineas 117-141) que ya existe en el `@graph` consolidado de `index.html`. Duplicacion que confunde a crawlers.

**Solucion:** Eliminar el JSON-LD del Footer.

### 2.5 - Index.tsx duplica Schema.org con doble bloque

**Problema:** `Index.tsx` renderiza dos bloques JSON-LD separados (lineas 65-104): uno de `useGeoMetadata` y otro WebPage manual. Ambos definen datos parcialmente superpuestos.

**Solucion:** Consolidar en un solo bloque o eliminar el duplicado ya que index.html tiene el `@graph` completo.

### 2.6 - CursoGeoPage tiene 5 bloques JSON-LD separados

**Problema:** CursoGeoPage renderiza 5 scripts JSON-LD independientes (Course, HowTo, FAQ, Breadcrumb, Speakable). Deberian consolidarse en un `@graph`.

**Solucion:** Unificar en un solo `@graph` como ya se hizo en index.html.

### 2.7 - Enlace "Casos reales" duplicado en CursoGeoPage

**Problema:** Lineas 382-401 muestran dos botones que llevan al mismo lugar (`/casos`) con textos diferentes ("Ver casos reales" y "Casos reales").

**Solucion:** Eliminar el duplicado.

---

## FASE 3: MEJORAS ESTRUCTURALES

### 3.1 - Eliminar dependencias no usadas restantes

**Problema:** Aun quedan instaladas:
- `react-day-picker` y `date-fns` (calendar.tsx aun existe en el proyecto)
- `recharts` (sin dashboards de datos)
- `embla-carousel-react` (verificar si se usa)

**Solucion:** Eliminar `calendar.tsx`, verificar uso de carousel y recharts, limpiar package.json.

### 3.2 - upload-premium-content es una vulnerabilidad administrativa

**Problema:** `upload-premium-content` con `verify_jwt = false` permite a cualquiera sobreescribir los PDFs premium (usa `upsert: true`). Cualquier atacante puede reemplazar los PDFs con contenido malicioso.

**Solucion:** Cambiar a `verify_jwt = true` y validar que el usuario es admin, o eliminar la funcion si los PDFs ya estan subidos.

### 3.3 - Lazy loading para paginas

**Problema:** App.tsx importa todas las paginas de forma sincrona (30+ imports). Esto carga todo el bundle en la primera visita.

**Solucion:** Usar `React.lazy()` + `Suspense` para todas las rutas excepto Index.

### 3.4 - Leaked password protection

**Problema:** El linter confirma que sigue deshabilitada.

**Solucion:** Habilitar desde la configuracion del backend.

### 3.5 - ModuleF2Page.tsx duplicado

**Problema:** Existen dos archivos para F2: `ModuleF2Page.tsx` y `ModuloF2Page.tsx`. Solo se usa `ModuloF2Page`.

**Solucion:** Eliminar `ModuleF2Page.tsx`.

### 3.6 - Speakable selector referencia clase eliminada

**Problema:** `index.html` linea 74 tiene `speakable-selector` que incluye `.hidden-content` - clase del div eliminado anteriormente.

**Solucion:** Quitar `.hidden-content` del selector.

### 3.7 - llm.txt usa directivas no estandar

**Problema:** `llm.txt` usa `Crawl-priorities` y `No-index-for-llms` que no son directivas reconocidas por ningun estandar. El archivo parece un robots.txt mal formateado.

**Solucion:** Reestructurar como texto plano informativo siguiendo el formato emergente de llm.txt (llmstxt.org), sin directivas inventadas.

### 3.8 - PDFs premium en /public accesibles directamente

**Problema:** Los archivos en `public/premium-content/` son accesibles directamente via URL sin autenticacion (ej: `/premium-content/f1/guia-completa-modulo-f1.pdf`). Todo el sistema de pago se puede bypasear.

**Solucion:** Eliminar los PDFs de `/public/` ya que estan en Supabase Storage (bucket `premium-content`). Los archivos en `/public` son solo para el upload initial.

### 3.9 - home.geo.txt referencia "Coach GEO" no existente

**Problema:** `home.geo.txt` linea de recursos incluye `Coach GEO (asistente IA): https://esgeo.ai/coach` pero `/coach` redirige a `/metodologia`. No existe Coach GEO.

**Solucion:** Eliminar la referencia o actualizarla.

---

## FASE 4: SEGURIDAD EDGE FUNCTIONS (config.toml)

### 4.1 - Revisar verify_jwt en todas las funciones

Estado actual y recomendado:

| Funcion | Actual | Recomendado | Razon |
|---|---|---|---|
| create-checkout | false | false | Guests necesitan crear checkouts |
| stripe-webhook | false | false | Stripe no envia JWT |
| generate-download-url | true | true | OK |
| download-premium-content | false | **true** o validacion interna | Expuesto sin JWT |
| generate-guest-access | false | **true** o validacion interna | Solo webhook debe llamarlo |
| upload-premium-content | false | **true** | Admin-only |
| send-purchase-email | false | **true** o validacion interna | Solo webhook debe llamarlo |

---

## Orden de Implementacion

```text
PASO 1 (seguridad critica):
  - Corregir download-premium-content (usar RPC, validar acceso)
  - Eliminar PDFs de /public/premium-content/
  - Asegurar upload-premium-content

PASO 2 (datos rotos):
  - Actualizar CursoGeoPage para usar modules.ts
  - Corregir Schema.org (precio €0, rating falso, duplicados)
  - Eliminar JSON-LD duplicado de Footer.tsx
  - Corregir send-purchase-email (branding + stub)

PASO 3 (limpieza):
  - Eliminar ModuleF2Page.tsx duplicado
  - Eliminar boton duplicado CursoGeoPage
  - Limpiar speakable selector
  - Reestructurar llm.txt
  - Actualizar home.geo.txt

PASO 4 (rendimiento):
  - Lazy loading en App.tsx
  - Eliminar dependencias no usadas
  - Eliminar calendar.tsx

PASO 5 (configuracion):
  - Habilitar leaked password protection
  - Actualizar verify_jwt en config.toml
```

---

## Resumen de Impacto

- **8 vulnerabilidades de seguridad** corregidas (PDFs publicos, edge functions expuestas, token bypass)
- **6 inconsistencias de datos** unificadas (nombres, precios, Schema.org)
- **5 duplicaciones** eliminadas (Schema.org, archivos, botones)
- **4 mejoras de rendimiento** (lazy loading, dependencias, bundle)

Total estimado: ~2-3 sesiones de implementacion.
