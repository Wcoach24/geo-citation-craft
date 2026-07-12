# Roadmap — Plan Definitivo esGEO (12 julio 2026)

> Reemplaza el roadmap de marzo 2026. La antigua "Phase 1: Fix the Funnel" está COMPLETADA
> (ver STATE.md). La antigua "Phase 2: SEO Técnico + Prerendering" se reformula como FASE 0.

## Estrategia en una frase
Convertir el propio dominio en el caso de estudio: esgeo.ai pasa de 35/MUDA a ≥80/BILINGÜE
usando su propio método, con HABLA integrado en el dominio, y el curso reescrito alrededor
de esa evidencia real y verificable.

## FASE 0: La web habla (BLOQUEANTE)
**Requirements**: SSR-01..06, ANSW-01..02
**Success Criteria (machine)**:
- `curl -s -A GPTBot https://<host>/curso | strip-tags | wc -c` ≥ 3000 en /, /curso, /metodologia, /glosario + 3 artículos de /radar-ia
- `curl -s https://<host>/curso | grep -c '<h1'` ≥ 1
- `analyze?url=www.esgeo.ai` → `gateA: true`, `checks.shell: false`
**Dependencies**: None

## FASE 1: Higiene máquina
**Requirements**: HYG-01..05
**Success Criteria (machine)**:
- `curl https://<host>/llms.txt` → content-type text/plain, no shell HTML
- `grep -c GPTBot public/robots.txt` ≥ 1
- `analyze` → `checks.llms_txt: true`, `robots_ai_bots` no vacío
**Dependencies**: FASE 0

## FASE 2: HABLA entra en el dominio
**Requirements**: HAB-01..04
**Success Criteria (machine)**:
- `curl -s https://habla.esgeo.ai/api/analyze?url=holded.com` → JSON con total
- home y /curso contienen el widget (grep del id `habla-widget`)
- /geo-score sirve el widget nuevo o redirige
**Dependencies**: FASE 1

## FASE 3: Funnel de conversión
**Requirements**: FUN-01..05 (heredados del plan de marzo, siguen vigentes)
**Dependencies**: FASE 2

## FASE 4: Curso v2
**Requirements**: CUR-01..09
**Dependencies**: FASE 0 (el caso de estudio necesita el antes/después real). Paralelizable con F3.

## FASE 5: Verificación y medición
**Requirements**: VER-01..03
**Success Criteria (machine)**: `analyze?url=www.esgeo.ai` → `total ≥ 80`
**Dependencies**: F3 + F4
