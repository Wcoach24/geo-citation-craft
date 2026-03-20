# Context — Phase 1: Fix the Funnel

## Locked Decisions
These decisions are FINAL. Do not revisit during planning or execution.

### Checkout Flow
**Decision**: Inline checkout en /curso. Eliminar /checkout como página de destino (redirect a /curso).
**Rationale**: El 82% abandona en la transición /curso → /checkout. Todo en 1 página = 0 navegación extra.
**Alternatives Rejected**: Página /checkout separada (demasiada fricción), CTA directo sin resumen (pierde confirmación visual)
**Implementation**: Sección al final de /curso con resumen + botón → Stripe. /checkout route hace redirect a /curso.

### Social Proof
**Decision**: No hay testimonios reales aún. Usar datos verificables como social proof alternativo.
**Rationale**: Los 7 compradores no han dado feedback formal.
**Implementation**:
- "Referenciado por Gemini, Claude y Perplexity" (dato real de Clarity)
- "X+ profesionales SEO ya estudian GEO" (usar número real de compradores + leads)
- Logos de herramientas IA que citan la web (no logos de empresas cliente)
- NO fabricar testimonios ni números falsos

### Email Infrastructure
**Decision**: Verificar estado de Resend antes de implementar email capture. Si no está configurado, el formulario captura emails en Supabase y se configura Resend después.
**Rationale**: No sabemos si RESEND_API_KEY está activa. El capture de emails en DB es independiente del envío.
**Implementation**:
1. Email capture form → guarda en tabla `email_leads` en Supabase
2. Si Resend funciona → envía welcome email inmediato
3. Si no → emails se acumulan en DB, se envían cuando Resend esté listo

### Pricing Display
**Decision**: €197 como precio "valor real" tachado → €47 precio de lanzamiento.
**Rationale**: Price anchoring. €197 es un precio creíble para un curso profesional de 5 módulos.
**Implementation**: No mostrar "antes €60" (precio viejo). Mostrar "Valor: €197 → Lanzamiento: €47".

### Módulos Individuales Legacy
**Decision**: Mantener la lógica de módulos individuales en el backend pero eliminar del frontend.
**Rationale**: Los 7 compradores existentes de módulos individuales deben seguir teniendo acceso. Solo ocultamos la opción de compra.
**Implementation**: No borrar código de Stripe ni user_access. Solo eliminar UI de selección individual en checkout/curso.

### Persistencia de Personalización
**Decision**: localStorage con key `esgeo_visitor` para estado del visitante.
**Rationale**: Privacy-first, sin cookies de terceros, sin backend calls.
**Implementation**:
```json
{
  "state": "returning",
  "firstVisit": "2026-03-15",
  "visitCount": 3,
  "referrer": "google",
  "hasEmail": false
}
```

## Implementation Notes
- Font loading: Google Fonts con `display=swap` para Plus Jakarta Sans + Inter
- CTA color: Orange #EA580C con hover glow `box-shadow: 0 6px 20px rgba(234,88,12,0.6)`
- Claymorphism: `box-shadow: 8px 8px 16px rgba(13,148,136,0.1), -4px -4px 12px rgba(255,255,255,0.8)`
- Las URLs existentes NO cambian — /checkout redirect a /curso, /curso/f1..f6 se mantienen
- No tocar edge functions de Supabase excepto si necesitamos nueva tabla email_leads
- Clarity events via `window.clarity('event', 'name', {data})` — ya está el SDK cargado