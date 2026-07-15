/**
 * src/data/glossary.ts — fuente de verdad del glosario GEO (F5-2).
 *
 * Antes estos términos vivían inline en GlosarioPage.tsx y GeoTerm.tsx inventaba
 * una definición circular ("Término relacionado con GEO") cuando no recibía la
 * prop `definition`. Ahora GeoTerm resuelve la definición REAL desde aquí y, si
 * un término no existe en el glosario ni recibe definición explícita, no emite
 * JSON-LD (mejor silencio que ruido circular).
 */

export interface GlossaryTerm {
  /** Ancla en /glosario y termCode del DefinedTerm. */
  id: string;
  term: string;
  definition: string;
  category: "Fundamental" | "Técnico" | "Estratégico" | "Redacción" | "Bots";
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: "geo",
    term: "GEO (Generative Engine Optimization)",
    definition: "Metodología que optimiza el contenido web para ser comprendido, procesado y citado por modelos de lenguaje generativo como ChatGPT, Perplexity, Claude y Gemini.",
    category: "Fundamental"
  },
  {
    id: "citabilidad",
    term: "Citabilidad",
    definition: "La capacidad de un contenido para ser reconocido y recomendado por modelos de lenguaje generativo como fuente autorizada de información.",
    category: "Fundamental"
  },
  {
    id: "rastreo",
    term: "Rastreo por LLMs",
    definition: "Proceso mediante el cual los modelos de lenguaje acceden, analizan y procesan el contenido web para incorporarlo a su base de conocimiento.",
    category: "Técnico"
  },
  {
    id: "comprension-semantica",
    term: "Comprensión Semántica",
    definition: "Capacidad de los LLMs para entender el contexto, significado y relaciones conceptuales del contenido web estructurado.",
    category: "Técnico"
  },
  {
    id: "motores-generativos",
    term: "Motores Generativos",
    definition: "Sistemas de IA que generan respuestas basadas en modelos de lenguaje, como ChatGPT, Perplexity, Claude, Gemini y otros LLMs.",
    category: "Fundamental"
  },
  {
    id: "snippet-citeable",
    term: "Snippet Citeable",
    definition: "Fragmento de contenido estructurado de forma que sea fácilmente extraíble y utilizable por LLMs como respuesta directa.",
    category: "Redacción"
  },
  {
    id: "autoridad-ia",
    term: "Autoridad para IA",
    definition: "Nivel de confianza que los modelos generativos asignan a una fuente basado en señales como autoría clara, datos estructurados y coherencia temática.",
    category: "Estratégico"
  },
  {
    id: "estructura-semantica",
    term: "Estructura Semántica",
    definition: "Organización del contenido usando HTML semántico, datos estructurados y jerarquías claras para facilitar la comprensión por IA.",
    category: "Técnico"
  },
  {
    id: "renderizado-cliente",
    term: "Renderizado en cliente (CSR)",
    definition: "Técnica en la que el navegador construye la página ejecutando JavaScript. Es el patrón por defecto de React, Vue o Angular sin SSR. Importa porque los rastreadores de IA no ejecutan JavaScript: si el HTML que sirve tu servidor solo contiene un contenedor vacío, para ellos la página está en blanco, por muy completa que se vea en el navegador.",
    category: "Técnico"
  },
  {
    id: "ssr-prerender",
    term: "SSR / Prerenderizado",
    definition: "Generar el HTML de la página en el servidor (o durante el build) para que llegue ya con el contenido dentro. Es el requisito de entrada de cualquier estrategia GEO sobre una web hecha con JavaScript: sin HTML, no hay texto que citar.",
    category: "Técnico"
  },
  {
    id: "gptbot",
    term: "GPTBot",
    definition: "Rastreador de OpenAI que recopila contenido web público para el entrenamiento de sus modelos. Se controla desde robots.txt con el user-agent GPTBot. Bloquearlo no afecta a que ChatGPT te cite en búsqueda: de eso se encarga OAI-SearchBot.",
    category: "Bots"
  },
  {
    id: "oai-searchbot",
    term: "OAI-SearchBot",
    definition: "Rastreador de OpenAI que alimenta el índice de búsqueda de ChatGPT. Es el que determina si tu web puede aparecer como fuente citada en una respuesta con búsqueda activada. Distinto de GPTBot (entrenamiento) y de ChatGPT-User (visita puntual).",
    category: "Bots"
  },
  {
    id: "chatgpt-user",
    term: "ChatGPT-User",
    definition: "User-agent con el que ChatGPT descarga una URL concreta a petición de un usuario en tiempo real. No rastrea el sitio entero: visita la página pedida. Si lo bloqueas, un usuario no puede pedirle a ChatGPT que lea tu página.",
    category: "Bots"
  },
  {
    id: "claudebot",
    term: "ClaudeBot",
    definition: "Rastreador de Anthropic para Claude. Se declara en robots.txt con el user-agent ClaudeBot.",
    category: "Bots"
  },
  {
    id: "perplexitybot",
    term: "PerplexityBot",
    definition: "Rastreador de Perplexity, que indexa páginas para poder citarlas en sus respuestas. Perplexity-User es su equivalente para visitas puntuales lanzadas por un usuario.",
    category: "Bots"
  },
  {
    id: "google-extended",
    term: "Google-Extended",
    definition: "Token de robots.txt con el que un sitio decide si Google puede usar su contenido para mejorar Gemini y las APIs generativas de Vertex AI. No es un rastreador independiente y no afecta al posicionamiento en la Búsqueda de Google.",
    category: "Bots"
  },
  {
    id: "ccbot",
    term: "CCBot",
    definition: "Rastreador de Common Crawl, el corpus abierto que ha alimentado el preentrenamiento de buena parte de los modelos de lenguaje. Bloquearlo te saca de un dataset usado por muchos actores, no solo por uno.",
    category: "Bots"
  },
  {
    id: "llms-txt",
    term: "llms.txt",
    definition: "Fichero markdown propuesto en 2024 para colocar en la raíz del dominio con una descripción del sitio y enlaces curados, pensado para orientar a los modelos de lenguaje. Es una propuesta de la comunidad, no un estándar: ningún gran proveedor ha confirmado públicamente que lo consuma. Cuesta diez minutos y no hace daño; no esperes magia.",
    category: "Técnico"
  },
  {
    id: "robots-txt",
    term: "robots.txt",
    definition: "Fichero en la raíz del dominio que declara qué rastreadores pueden acceder a qué rutas. Es voluntario, pero los bots de las grandes plataformas de IA lo respetan y lo documentan. En GEO se usa al revés que en SEO defensivo: el objetivo es dar permiso explícito, no restringir.",
    category: "Técnico"
  },
  {
    id: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition: "Arquitectura en la que el modelo, antes de responder, recupera fragmentos de documentos externos y los usa como contexto. Es el mecanismo detrás de las respuestas con fuentes: la cita que buscas se decide en la fase de recuperación, no en la de generación.",
    category: "Técnico"
  },
  {
    id: "chunking",
    term: "Chunking (fragmentación)",
    definition: "División de un documento en fragmentos que el sistema de recuperación indexa por separado. Explica por qué un bloque autocontenido —que responde entero a una pregunta sin depender del párrafo anterior— se cita mucho más que un texto que exige leerlo todo.",
    category: "Redacción"
  },
  {
    id: "embedding",
    term: "Embedding",
    definition: "Representación numérica de un texto que captura su significado. Dos textos con embeddings próximos se consideran semánticamente parecidos. Es lo que permite que te recuperen por una pregunta que no contiene tus palabras exactas.",
    category: "Técnico"
  },
  {
    id: "ai-overviews",
    term: "AI Overviews",
    definition: "Resúmenes generados por IA que Google muestra encima de los resultados clásicos, con enlaces a las fuentes usadas. Aparecer en ellos depende de estar indexado en la Búsqueda y de tener bloques extraíbles, no de un canal aparte.",
    category: "Estratégico"
  },
  {
    id: "datos-estructurados",
    term: "Datos estructurados (schema.org)",
    definition: "Marcado JSON-LD que declara de forma explícita qué es cada cosa de la página: artículo, curso, FAQ, organización, autor. Le ahorra al modelo tener que inferirlo y reduce el riesgo de que te describa mal.",
    category: "Técnico"
  },
  {
    id: "answerability",
    term: "Answerability",
    definition: "Grado en que un contenido responde de forma directa y autocontenida a la pregunta que lo motiva. Un primer párrafo que dice qué es, para quién y cuánto cuesta es citable; una introducción de marca que tarda tres párrafos en llegar al grano, no.",
    category: "Redacción"
  },
  {
    id: "share-of-citations",
    term: "Share of Citations (SoC)",
    definition: "Porcentaje de respuestas de IA sobre un tema en las que aparece tu marca como fuente, frente al total de fuentes citadas. Es la métrica de cuota de mercado del GEO: sustituye a la posición media del SEO clásico.",
    category: "Estratégico"
  },
  {
    id: "alucinacion",
    term: "Alucinación",
    definition: "Afirmación que el modelo presenta como cierta sin respaldo en sus fuentes. En GEO importa por un motivo práctico: si tu web no es legible por máquinas, el modelo hablará de ti igualmente, pero improvisando.",
    category: "Fundamental"
  }
];

/**
 * Alias de slugs usados en artículos → id canónico del glosario.
 * Solo se mapean sinónimos reales del mismo concepto (regla 4: no inventar).
 */
const SLUG_ALIASES: Record<string, string> = {
  "fragmentacion": "chunking",
  "autoridad-generativa": "autoridad-ia",
  "snippet-citable": "snippet-citeable",
};

/** Normaliza un término o slug a slug de ancla. */
export function toGlossarySlug(termOrSlug: string): string {
  return termOrSlug.toLowerCase().trim().replace(/\s+/g, "-");
}

/** Devuelve la entrada real del glosario para un término/slug, o undefined. */
export function getGlossaryEntry(termOrSlug: string): GlossaryTerm | undefined {
  const slug = toGlossarySlug(termOrSlug);
  const id = SLUG_ALIASES[slug] ?? slug;
  return GLOSSARY_TERMS.find((t) => t.id === id);
}
