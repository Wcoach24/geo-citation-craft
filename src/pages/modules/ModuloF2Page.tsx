
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Search, ArrowRight, ArrowLeft, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF2Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F2: Contexto Semántico y Formato Óptimo | Curso GEO - esGEO</title>
        <meta name="description" content="Aprende a alinear tu contenido con el lenguaje, estructura y profundidad contextual que los LLMs utilizan para generar respuestas. Sintetiza ideas bien expresadas." />
        <link rel="canonical" href="https://esgeo.es/curso/f2" />
        
        <meta name="citation_title" content="Módulo F2: Contexto Semántico y Formato Óptimo" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f2-objetivo, #f2-principios, #f2-checklist, .snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F2: Contexto Semántico y Formato Óptimo",
            "headline": "Módulo F2: Contexto Semántico y Formato Óptimo",
            "description": "Aprende a alinear el contenido con el lenguaje, estructura y profundidad contextual que utilizan los LLMs para generar respuestas. El objetivo no es solo que la IA te lea, sino que te entienda, te valore como fuente relevante y te cite como referencia autorizada en sus respuestas.",
            "url": "https://esgeo.es/curso/f2",
            "datePublished": "2025-06-11",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.es"
            },
            "image": "https://esgeo.es/images/modulo-f2.png",
            "teaches": [
              "Intención conversacional y uso de preguntas como encabezados",
              "Claridad semántica y definición precisa de conceptos",
              "Formato fragmentable (scannability y extracción)",
              "Enriquecimiento con ejemplos, comparaciones y beneficios",
              "Pruebas y ajustes de contenido con LLMs"
            ],
            "timeRequired": "PT3H",
            "educationalLevel": "Beginner",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "70"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f2"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://esgeo.es/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Curso GEO",
                  "item": "https://esgeo.es/curso"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Módulo F2: Contexto Semántico y Formato Óptimo",
                  "item": "https://esgeo.es/curso/f2"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#f2-objetivo, #f2-principios, #f2-checklist"
            },
            "courseCode": "GEO-F2",
            "inLanguage": "es-ES",
            "duration": "PT3H",
            "isPartOf": {
              "@type": "Course",
              "name": "Curso GEO Completo",
              "url": "https://esgeo.es/curso"
            }
          })}
        </script>
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
                <BreadcrumbLink asChild>
                  <Link to="/curso">Curso GEO</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Módulo F2</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header del Módulo */}
          <header className="mb-12 text-center" id="f2-header">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Search className="h-4 w-4" />
              MÓDULO F2
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Contexto Semántico y Formato Óptimo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              "Los modelos generativos no posicionan keywords: sintetizan ideas bien expresadas." 
            </p>
            <ShareSectionButton sectionId="f2-header" title="Módulo F2" className="mx-auto" />
          </header>

          {/* Objetivo del Módulo */}
          <section id="f2-objetivo" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Objetivo del Módulo</h2>
              <ShareSectionButton sectionId="f2-objetivo" title="objetivo del módulo" />
            </div>
            <HighlightSnippet variant="definition" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                Este módulo te enseña a alinear tu contenido con el lenguaje, estructura y profundidad contextual que utilizan los <GeoTerm term="llm">LLMs</GeoTerm> para generar respuestas. El objetivo no es solo que la <GeoTerm term="ia">IA</GeoTerm> te lea, sino que te entienda, te valore como fuente relevante y te cite como referencia autorizada en sus respuestas.
              </p>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Los usuarios ya no buscan en Google con frases cortas; formulan preguntas completas y conversacionales. Los LLMs responden con párrafos conversacionales, no con listas de resultados como el SEO tradicional. Esto implica una transformación en cómo se concibe el contenido para la web.
            </p>
          </section>

          {/* Principios Clave */}
          <section id="f2-principios" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Principios Clave del Módulo</h2>
              <ShareSectionButton sectionId="f2-principios" title="principios clave" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Intención Conversacional</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Usar preguntas reales como encabezados (ej., "¿Cuál es el CRM más fácil de usar...?")</li>
                    <li>• Incluir <GeoTerm term="faq-conversacional">preguntas frecuentes</GeoTerm> en el cuerpo del texto</li>
                    <li>• Adoptar un tono explicativo, claro, humano y directo</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Claridad Semántica</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Desarrollar el significado de cada concepto con precisión</li>
                    <li>• Evitar ambigüedad, jerga innecesaria o vaguedades</li>
                    <li>• Acompañar afirmaciones con ejemplos o definiciones concretas</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Formato Fragmentable</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Estructurar con títulos jerárquicos (H1-H3) claros</li>
                    <li>• Usar listas, tablas y comparativas</li>
                    <li>• Resumir ideas complejas en frases breves y atómicas</li>
                    <li>• Utilizar casillas para destacar información clave</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Enriquecimiento de Contenido</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Comparar conceptos cuando sea útil (ej. BERT vs. GPT)</li>
                    <li>• Usar ejemplos que el modelo pueda replicar o parafrasear</li>
                    <li>• Añadir listas de beneficios, ventajas o implicaciones</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pruebas y Ajustes */}
          <section id="f2-pruebas-ajustes" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Pruebas y Ajustes Iterativos</h2>
              <ShareSectionButton sectionId="f2-pruebas-ajustes" title="pruebas y ajustes" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para validar la efectividad de tu contenido semántico, es fundamental realizar pruebas directas con LLMs y analizar sus respuestas para ajustar y mejorar.
            </p>
            <HighlightSnippet variant="stat" className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompts de Prueba Recomendados:</h3>
              <ul className="space-y-2 text-base" data-speakable="true">
                <li>"Resume esta URL: [tu-pagina-web]"</li>
                <li>"¿Qué artículos explican claramente qué es [tu tema principal]?"</li>
                <li>"¿Qué dice Perplexity sobre el concepto de [tu concepto clave]?"</li>
                <li>"Compara las diferentes aproximaciones a [tu tema] según [tu marca] y [competidor principal]"</li>
              </ul>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Después de cada prueba, evalúa si tu sitio aparece citado, si tu contenido es parafraseado o citado literalmente, si la IA entiende bien tus conceptos, y qué competidores aparecen junto a ti. Utiliza esta información para refinar tu contenido, reforzando las secciones bien citadas y clarificando las malinterpretadas.
            </p>
          </section>

          {/* Checklist de Implementación */}
          <section id="f2-checklist" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Checklist de Implementación del Módulo F2</h2>
              <ShareSectionButton sectionId="f2-checklist" title="checklist de implementación" />
            </div>
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed" data-speakable="true">
                <li>Títulos y subtítulos reformulados como preguntas naturales</li>
                <li>Sección de FAQ con preguntas reales y respuestas completas</li>
                <li>Definiciones claras de todos los conceptos técnicos o específicos</li>
                <li>Estructura jerárquica con H1, H2, H3 correctamente implementada</li>
                <li>Listas, tablas y elementos visuales para facilitar la extracción</li>
                <li>Ejemplos concretos y aplicables para cada concepto importante</li>
                <li>Comparaciones claras con alternativas o conceptos relacionados</li>
                <li>Beneficios específicos y cuantificables cuando sea posible</li>
                <li>Lenguaje conversacional y explicativo en todo el contenido</li>
                <li>Pruebas realizadas con <GeoTerm term="llm">LLMs</GeoTerm> para validar comprensión</li>
              </ul>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Al implementar correctamente este módulo, tu contenido estará adaptado al lenguaje de LLMs, no al SEO tradicional, con un enfoque conversacional y explicativo, lo que aumentará la probabilidad de ser referenciado como fuente útil.
            </p>
          </section>

          {/* Prompt para LLMs */}
          <section id="f2-prompt" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Prompt para Implementación con LLMs</h2>
              <ShareSectionButton sectionId="f2-prompt" title="prompt para implementación" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utiliza el siguiente prompt con ChatGPT, Claude u otro LLM para ayudarte a optimizar el contexto semántico y formato de tu contenido:
            </p>
            <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm font-mono">
{`Actúa como un experto en GEO (Generative Engine Optimization) especializado en optimizar el formato y contexto semántico de contenidos web para LLMs.

Tengo el siguiente contenido que quiero optimizar para que sea mejor comprendido y citado por modelos como ChatGPT, Claude o Perplexity:

[PEGA TU CONTENIDO ACTUAL]

Por favor:
1. Reformula los títulos y subtítulos como preguntas conversacionales naturales.
2. Mejora la claridad semántica definiendo todos los conceptos técnicos.
3. Reestructura el contenido en bloques semánticos bien definidos.
4. Añade ejemplos concretos y comparaciones para cada concepto importante.
5. Transforma el lenguaje a un tono más conversacional y explicativo.
6. Sugiere elementos visuales (listas, tablas, casillas) para mejorar la extracción.

Necesito que el contenido mantenga toda la información original pero optimizada para ser mejor comprendida por LLMs.`}
              </code>
            </HighlightSnippet>
          </section>

          {/* Navegación de Módulos */}
          <div className="mt-16 flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/curso/f1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Módulo Anterior: F1 Accesibilidad Generativa
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f3">
                Siguiente Módulo: F3 Redacción Citeable
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contenido Relacionado */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Herramientas Útiles</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">
                  Perplexity.ai
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://answerthepublic.com/" target="_blank" rel="noopener noreferrer">
                  AnswerThePublic
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://alsoasked.com/" target="_blank" rel="noopener noreferrer">
                  AlsoAsked
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/curso/f3">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Continuar con F3
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuloF2Page;
