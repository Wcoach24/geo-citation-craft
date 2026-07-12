# Verification — FASES 0, 1 y 2 · 2026-07-12

Verificado contra **producción** (https://www.esgeo.ai) tras el merge de `fase-0-1-2-web-habla`
(commit 739832b). Evidencia literal, no afirmaciones.

## Veredicto del auditor (HABLA)

`curl "https://machineready.vercel.app/api/analyze?url=www.esgeo.ai"`

| | Antes (12/07 mañana) | Después |
|---|---|---|
| **Total** | **35 — MUDA** | **92 — BILINGÜE** |
| gate A | ❌ FALLIDO | ✅ PASA |
| H · Higiene | 85 | 100 |
| A · Accesible | 15 | 100 |
| B · Bloques | 45 | 100 |
| L · Lenguaje | 21 | 78 |
| X · eXtras | 0 | 75 |
| texto en HTML inicial | 237 chars | 8705 chars |
| shell vacío | true | false |
| h1 / headings | 0 / 0 | 1 / 29 |
| llms.txt | false | true |
| bots IA en robots | 0 | 6 |

El objetivo de la FASE 5 del plan (≥80) queda cubierto ya en la 0-2.

## FASE 0 — DoD

`curl -s -A GPTBot https://www.esgeo.ai<ruta>` → caracteres de texto (sin tags ni scripts):

| Ruta | Chars | h1 | Umbral 3000 |
|---|---|---|---|
| / | 8650 | 1 | ✅ |
| /curso | 8633 | 1 | ✅ |
| /metodologia | 5436 | 1 | ✅ |
| /glosario | 5564 | 1 | ✅ |
| /radar-ia/que-es-geo-guia-completa | 10164 | 1 | ✅ |
| /radar-ia/como-hacer-que-chatgpt-cite-tu-web | 9790 | 1 | ✅ |
| /radar-ia/optimizar-web-para-perplexity | 11025 | 1 | ✅ |

28/28 rutas públicas prerenderizadas con body completo. `checks.shell: false`, `gateA: true`.

**Regresión (SPA intacto)**: `/dashboard`, `/checkout` y una ruta inexistente → HTTP 200.
Widget probado en navegador sobre el preview: `holded.com` → 86/BILINGÜE. Cero errores de consola.

## FASE 1 — DoD

- `/llms.txt` → HTTP 200, `text/plain; charset=utf-8`, contenido real (no shell HTML).
- `/llm.txt` → HTTP 308 → `/llms.txt`.
- `robots.txt` → 9 líneas de bots de IA declarados; HABLA detecta 6 (GPTBot, ClaudeBot,
  PerplexityBot, OAI-SearchBot, Google-Extended, CCBot).
- Canonicals: 0 ocurrencias de `https://esgeo.es` o `https://esgeo.ai` en src/ y public/.

## FASE 2 — DoD

- `grep 'habla-widget'` → 1 en `/`, 1 en `/curso`, 1 en `/geo-score`.
- `curl https://machineready.vercel.app/api/analyze?url=holded.com` → JSON, total 86.
- **Pendiente (manual)**: `habla.esgeo.ai` → proyecto Vercel `machineready`. Requiere añadir el
  dominio en el dashboard de Vercel y el CNAME en GoDaddy. El widget funciona ya contra
  `machineready.vercel.app`; en cuanto el subdominio exista, basta con poner
  `VITE_HABLA_API=https://habla.esgeo.ai` en Vercel — sin tocar código.

## Gaps conocidos

- **L = 78, no 100.** HABLA sigue emitiendo "tu primer bloque no responde qué/para quién/cuánto"
  pese al bloque nuevo. Su heurística mira el primer bloque de texto del body, y ahí está el
  header de navegación. Vale la pena mirar el checker de HABLA antes de tocar más la home:
  puede que el falso negativo esté en el auditor, no en la web.
- **X = 75.** Faltan señales de citación externas. Es trabajo de FASE 5, no de código.
- `/radar-ia/geo-vs-seo-diferencias` (2828 chars) y `/radar-ia` (1842) están por debajo de 3000.
  No son rutas del DoD, pero son contenido fino. Candidatas a la FASE 4.
- `src/integrations/supabase/client.ts` lleva la marca "automatically generated" de Lovable. Si
  Lovable lo regenera, se pierde el guard de `localStorage` y **el build SSR se cae**.
