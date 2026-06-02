# GEO Citation Tracker — Weekly Summaries

Este directorio almacena los resúmenes semanales del Citation Tracker (agente #5).

**Formato:** `summary-YYYY-WW.json` (ej: `summary-2026-W23.json`)

**Schema esperado:**

```json
{
  "week": "2026-W23",
  "generated_at": "2026-06-05T07:00:00Z",
  "soc_global_pct": 42.5,
  "soc_by_llm": { "openai": 35.0, "anthropic": 50.0, "perplexity": 45.0, "google": 40.0 },
  "queries_probed": 30,
  "total_runs": 120,
  "top_queries_winning": [],
  "top_queries_losing": []
}
```

**Lectura:** el endpoint `/api/admin/metrics` lee estos archivos desde GitHub raw URL para mostrar la gráfica de SoC histórica en el dashboard `/admin`.

El Citation Tracker hace `git push` de su summary semanal aquí cada viernes.
