

# AUDITORIA TECNICA Y ESTRATEGICA - esGEO

---

## A) DIAGNOSTICO TECNICO

### 1. ARQUITECTURA TECNICA

**Coherencia: PARCIAL**
- SPA React sin SSR/SSG vendiendo un producto que depende del SEO/GEO. La ironia es brutal: una plataforma que ensena optimizacion para crawlers esta construida con una tecnologia que los crawlers no pueden leer sin prerendering. Se menciona Puppeteer en conversaciones pero no hay evidencia de implementacion real.

**Dependencias innecesarias:**
- `next-themes` instalado pero no se usa (no hay dark mode implementado).
- `react-day-picker`, `calendar`, `date-fns` instalados sin uso evidente en el producto.
- `react-resizable-panels`, `input-otp`, `cmdk` sin uso visible.
- `recharts` importado pero sin dashboards de datos reales.
- Mas de 40 componentes UI de Radix instalados cuando se usan menos de 15.

**Sobreingenieria:**
- 418 lineas de JSON-LD en `index.html` con datos duplicados (Organization se define 2 veces, Course se define 3 veces con datos inconsistentes).
- Sistema de archivos `.geo.txt` elaborado cuando no hay evidencia de que ningun LLM los consuma preferentemente.
- `hidden-content` div con texto oculto para crawlers es una tecnica de riesgo que Google puede penalizar como cloaking.

**Fragilidad estructural:**
- IDs de precio Stripe hardcodeados en 2 lugares (CheckoutPage.tsx linea 19-27 y create-checkout/index.ts linea 18-26). Si cambia un precio, hay que actualizar ambos manualmente.
- Sin tests. Cero. Ni unitarios, ni de integracion, ni e2e.
- Sin manejo de errores global (no hay ErrorBoundary).

**Que se rompe primero:**
- El flujo de pago. Tiene doble procesamiento: webhook + process-payment-success llamado desde el cliente. Race condition garantizada.

### 2. MODELO DE DATOS

**Normalizacion: DEFICIENTE**
- `product_type` y `module_id` son strings libres sin enums ni constraints. Nada impide insertar `product_type: "xyz"` o `module_id: "f99"`.
- `status` en purchases es texto libre. Sin enum. Sin constraint.
- `access_type` en user_access es texto libre.

**Duplicidades:**
- Informacion de modulos hardcodeada en al menos 5 lugares: CheckoutPage, DashboardPage, CursoGeoPage, PurchaseSuccessPage, GuestAccessPage. Cada uno con nombres DIFERENTES para los mismos modulos.
  - CheckoutPage: "Fundamentos de Accesibilidad Generativa"  
  - CursoGeoPage: "Fundamentos de accesibilidad generativa"
  - GuestAccessPage: "F1 - Fundamentos de GEO"
  - PurchaseSuccessPage: "Fundamentos de Accesibilidad Generativa"

**Inconsistencias graves:**
- DashboardPage muestra precio "€497" para curso completo y "Desde €147" por modulo. CheckoutPage dice €50 completo y €10 por modulo. PricingSection dice €50 y €10. Tres versiones de precios en el mismo sitio.

**Escalabilidad:**
- `user_access` no tiene unique constraint visible en el schema (el webhook hace upsert con `onConflict: 'user_id,module_id'` pero no esta claro que exista el constraint en DB).
- Sin indice explicito en `guest_access.access_token` - las queries por token seran lentas a escala.

### 3. SEGURIDAD

**VULNERABILIDAD CRITICA CONFIRMADA:**
- `guest_access` tiene RLS policy `USING (true)` para SELECT. Cualquier persona con la anon key puede leer TODOS los tokens de acceso, emails y datos de compra de todos los guests. Esto es una **brecha de datos personales** activa.

**Vectores de ataque:**
- `download-premium-content` tiene `verify_jwt = false`. Cualquiera puede llamarlo con un token robado (facil de obtener por la vulnerabilidad anterior).
- `GuestAccessPage.tsx` linea 66-67: llama a `generate-download-url` con `skipAccessCheck: true`. Bypass explicito de verificacion de acceso.
- `create-checkout` tiene `verify_jwt = false` y CORS `*`. Permite crear sesiones de Stripe sin autenticacion.
- Stripe API version `2025-08-27.basil` - version futura/ficticia que podria causar incompatibilidades.
- Email de soporte inconsistente: "soporte@cursogeo.com" en PurchaseSuccessPage, "soporte@geomastery.es" en GuestAccessPage, "hola@esgeo.ai" en Schema.org. Ningun dominio verificado.
- Leaked password protection deshabilitada en auth.

---

## B) DIAGNOSTICO UX

### Friccion innecesaria:
- No hay enlace a login/dashboard en el Header. El usuario que compro no sabe como acceder a su contenido.
- El Header solo muestra 3 links de navegacion (Curso, Metodologia, Glosario). Faltan: Radar IA, Casos Reales, Checkout, Dashboard, Auth. El 60% del sitio es inaccesible desde la navegacion principal.
- El flujo de compra abre Stripe en una **nueva pestana** (`window.open`). El usuario pierde contexto. Luego debe volver a la pestana original manualmente.

### Confusion en propuesta de valor:
- En la misma pagina, F0 es "Gratis", modulos son "€10", curso completo "€50". Pero el Dashboard dice "€497" y "Desde €147". El usuario no sabe el precio real.
- Modulo F6 aparece como "Proximamente" en checkout pero tiene pagina completa, precio en Stripe, y link en navegacion. Puedes pagar por algo que no existe.

### Puntos de abandono:
- Checkout sin email de guest. Si no estas logueado y no proporcionas email, Stripe lo pide, pero no hay flujo claro de vuelta al contenido.
- Dashboard requiere login pero no hay link visible a /auth ni /dashboard.
- PurchaseSuccessPage depende de `session_id` en URL. Si el usuario cierra la pestana de Stripe antes del redirect, pierde acceso a sus descargas inmediatas.

---

## C) DIAGNOSTICO ESTRATEGICO

### Producto:
- El concepto de GEO es real y tiene traccion, pero esGEO vende un framework (F1-F6) que es contenido estatico en PDFs. No hay diferenciacion tecnologica. Es un infoproducto empaquetado como plataforma.

### Hipotesis no validadas:
1. Que los archivos `.geo.txt` son realmente leidos/priorizados por LLMs (no hay evidencia publica).
2. Que el contenido oculto en `hidden-content` div no sera penalizado por Google.
3. Que el mercado hispanohablante pagara por contenido GEO cuando el concepto aun no esta establecido.
4. Que 5 PDFs de 15-25 paginas a €10 cada uno constituyen un producto viable.

### Modelo de monetizacion:
- Precio maximo de €50 por todo el curso. Con costes de Stripe (~3.4%), hosting, y tiempo de creacion, el margen es minimo.
- No hay recurrencia (pago unico). No hay upsell real. No hay comunidad. No hay coaching 1:1.
- El modulo F0 es gratuito y es un test de 5 preguntas sin valor de conversion real.

### Defendibilidad:
- Cero barreras de entrada. Cualquiera puede crear contenido similar en dias.
- No hay datos propietarios, algoritmo unico, ni comunidad activa.
- Los archivos `.geo.txt` y la metodologia F1-F6 son facilmente replicables.

---

## D) TOP 5 FALLOS CRITICOS

1. **BRECHA DE SEGURIDAD: guest_access con RLS `true`** - Todos los tokens, emails y datos de acceso guest son publicamente legibles. Cualquiera puede robar acceso a contenido pagado y obtener emails de clientes. GDPR violation.

2. **PRECIOS INCONSISTENTES** - Dashboard muestra €497/€147, Checkout muestra €50/€10, PricingSection muestra €50/€10. Destruye confianza del comprador y puede constituir publicidad enganosa.

3. **DOBLE PROCESAMIENTO DE PAGO** - El webhook de Stripe Y la pagina de success procesan el pago. Race conditions, duplicacion de registros, accesos duplicados. El webhook es el unico path confiable; `process-payment-success` desde el cliente es redundante e inseguro.

4. **DATOS DE MODULOS HARDCODEADOS EN 5+ ARCHIVOS** - Nombres, descripciones y precios de modulos copiados manualmente en multiples archivos sin fuente unica de verdad. Ya estan desincronizados (nombres diferentes, precios diferentes).

5. **CONTENIDO OCULTO PARA CRAWLERS (CLOAKING)** - El div `hidden-content` con `position: absolute; left: -10000px` es la definicion textual de cloaking segun Google. Riesgo de penalizacion manual.

---

## E) 3 RIESGOS EXISTENCIALES

1. **La brecha de seguridad en guest_access genera una denuncia GDPR o robo masivo de contenido.** Emails expuestos + tokens de descarga publicos = cualquiera puede descargar todo el contenido premium sin pagar. Si esto llega a un foro, el producto muere en horas.

2. **El mercado no paga por GEO como concepto independiente.** GEO es un subconjunto de SEO tecnico. La mayoria de agencias SEO ya cubren datos estructurados y contenido semantico. El nicho "optimizacion para ser citado por IA" puede no tener suficiente demanda para un producto independiente a €50.

3. **Penalizacion por Google por cloaking mata el trafico organico.** El `hidden-content` div es detectable en una revision manual. Si Google lo penaliza, el sitio pierde visibilidad en busqueda tradicional, que es ironicamente el principal canal de descubrimiento para un producto de SEO/GEO.

---

## F) PLAN DE MITIGACION PRIORIZADO

### URGENTE (esta semana)

1. **Corregir RLS de guest_access** - Cambiar policy de `USING (true)` a validacion por token. Esto es critico e inmediato.
2. **Eliminar process-payment-success** - Solo el webhook debe procesar pagos. La pagina de success debe consultar estado, no procesar.
3. **Unificar precios** - Corregir DashboardPage para mostrar €50/€10 consistentes. Crear constantes centralizadas.

### IMPORTANTE (proximas 2 semanas)

4. **Crear archivo centralizado de modulos** - Un unico `src/data/modules.ts` con nombres, descripciones, precios. Importar en todos los componentes.
5. **Eliminar hidden-content div** - Reemplazar con contenido visible real o `<noscript>` tags como alternativa menos riesgosa.
6. **Anadir ErrorBoundary global** y paginas de error apropiadas.
7. **Limpiar dependencias no usadas** - Eliminar next-themes, react-day-picker, cmdk, react-resizable-panels, input-otp.
8. **Habilitar leaked password protection** en auth.

### ESTRATEGICO (proximo mes)

9. **Implementar prerendering real** - Sin SSR/SSG, todo el esfuerzo SEO/GEO en React es parcialmente inutil.
10. **Validar modelo de negocio** - Considerar suscripcion, comunidad, o servicios de consultoria como revenue streams adicionales.
11. **Anadir tests minimos** - Al menos para el flujo de pago completo.
12. **Deduplicar Schema.org** - Consolidar los 6 bloques JSON-LD en index.html, eliminar duplicados de Organization y Course.

