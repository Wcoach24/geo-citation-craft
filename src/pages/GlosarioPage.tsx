
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, BookOpen, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const GlosarioPage = () => {
  // F1-7: metas sociales (og:/twitter:) — se renderiza ANTES del <Helmet> propio
  // para que los valores especificos de la pagina ganen en los tags duplicados.
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Glosario GEO | Términos y Definiciones | esGEO",
    description: "Glosario completo de términos de Generative Engine Optimization (GEO). Definiciones autoritativas para optimización de contenido para IA generativa.",
    canonicalUrl: "https://www.esgeo.ai/glosario",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glosarioTerms = [
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

  return (
    <div className="min-h-screen bg-background">
      {socialHelmet}
      <Helmet>
        <title>Glosario GEO | Términos y Definiciones | esGEO</title>
        <meta name="description" content="Glosario completo de términos de Generative Engine Optimization (GEO). Definiciones autoritativas para optimización de contenido para IA generativa." />
        <link rel="canonical" href="https://www.esgeo.ai/glosario" />
        
        <meta name="citation_title" content="Glosario de Generative Engine Optimization (GEO)" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="GEO, Generative Engine Optimization, glosario, definiciones, IA, LLMs" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true'], .definition-card" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["DefinedTermSet", "WebPage"],
            "name": "Glosario de Generative Engine Optimization (GEO)",
            "description": "Conjunto completo de definiciones autoritativas sobre GEO y optimización para modelos de lenguaje generativo",
            "url": "https://www.esgeo.ai/glosario",
            "datePublished": "2024-06-10",
            "dateModified": "2024-06-10",
            "author": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://www.esgeo.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://www.esgeo.ai"
            },
            "inLanguage": "es-ES",
            "hasDefinedTerm": glosarioTerms.map(term => ({
              "@type": "DefinedTerm",
              "@id": `https://www.esgeo.ai/glosario#${term.id}`,
              "name": term.term,
              "description": term.definition,
              "termCode": term.id,
              "inDefinedTermSet": "https://www.esgeo.ai/glosario"
            })),
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.esgeo.ai/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Glosario GEO",
                  "item": "https://www.esgeo.ai/glosario"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ".snippet-block, [data-speakable='true'], .definition-card"
            }
          }) }} />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Inicio
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Glosario GEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <header className="mb-12 text-center" id="glosario-header">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              GLOSARIO GEO
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Términos y Definiciones
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Definiciones autoritativas para dominar la optimización para IA generativa
            </p>
            <ShareSectionButton sectionId="glosario-header" title="Glosario GEO" />
          </header>

          {/* Introducción */}
          <HighlightSnippet id="glosario-intro" variant="definition" className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Qué es este Glosario?</h2>
              <ShareSectionButton sectionId="glosario-intro" title="introducción al glosario" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Este glosario recopila las definiciones más importantes de Generative Engine Optimization (GEO)</strong>, 
              proporcionando un recurso de referencia fundamental para comprender cómo optimizar contenido para ser citado por 
              modelos de lenguaje como ChatGPT, Perplexity, Claude y Gemini.
            </p>
          </HighlightSnippet>

          {/* Términos por Categoría */}
          <section id="terminos-fundamentales" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Términos Fundamentales</h2>
              <ShareSectionButton sectionId="terminos-fundamentales" title="términos fundamentales" />
            </div>
            <div className="space-y-6">
              {glosarioTerms.filter(term => term.category === "Fundamental").map((term) => (
                <Card key={term.id} id={term.id} className="definition-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-speakable="true">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                      {term.definition}
                    </p>
                    <ShareSectionButton sectionId={term.id} title={term.term} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="terminos-tecnicos" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Términos Técnicos</h2>
              <ShareSectionButton sectionId="terminos-tecnicos" title="términos técnicos" />
            </div>
            <div className="space-y-6">
              {glosarioTerms.filter(term => term.category === "Técnico").map((term) => (
                <Card key={term.id} id={term.id} className="definition-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-speakable="true">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                      {term.definition}
                    </p>
                    <ShareSectionButton sectionId={term.id} title={term.term} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="terminos-estrategicos" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Términos Estratégicos</h2>
              <ShareSectionButton sectionId="terminos-estrategicos" title="términos estratégicos" />
            </div>
            <div className="space-y-6">
              {glosarioTerms.filter(term => term.category === "Estratégico" || term.category === "Redacción").map((term) => (
                <Card key={term.id} id={term.id} className="definition-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-speakable="true">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                      {term.definition}
                    </p>
                    <ShareSectionButton sectionId={term.id} title={term.term} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contenido Relacionado */}
          <section className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Continúa Aprendiendo</h3>
            <p className="text-muted-foreground mb-6">
              Aplica estos conceptos en nuestro curso completo de GEO
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/curso">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Curso Completo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/metodologia">
                  <Search className="h-4 w-4 mr-2" />
                  Metodología GEO
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GlosarioPage;
