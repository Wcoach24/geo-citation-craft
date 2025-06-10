
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Home, ChevronRight, Zap, ArrowLeft, BookOpen, Code, Lightbulb, TrendingUp, BarChart, MessageCircle, ExternalLink, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import GeoTerm from "@/components/GeoTerm";

const ModuloF6Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F6: Estándares Técnicos y Visibilidad Semántica | esGEO</title>
        <meta name="description" content="Guía práctica para implementar estándares técnicos que aumenten la visibilidad de tu sitio en los modelos de lenguaje generativo (LLMs), enfocándose en Schema.org, JSON-LD y relaciones estructuradas." />
        <link rel="canonical" href="https://esgeo.es/curso/f6" />
        
        <meta name="citation_title" content="Módulo F6: Estándares Técnicos y Visibilidad Semántica" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
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
                  <Link to="/curso">Curso</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Módulo F6</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16" id="modulo-f6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-indigo-500 text-white">
                <Zap className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F6
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Estándares Técnicos y Visibilidad Semántica
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Implementa estándares técnicos que aumenten la visibilidad en LLMs
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-visibilidad-semantica" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Visibilidad Semántica GEO</h2>
              <ShareSectionButton sectionId="concepto-visibilidad-semantica" title="visibilidad semántica" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>La visibilidad semántica es la capacidad de los LLMs para comprender, procesar y citar tu contenido con precisión mediante estándares técnicos como Schema.org, JSON-LD y estructuras semánticas.</strong> 
              Convierte cada bloque web en un fragmento inteligible, enlazable y citable.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="datos-estructurados" id="datos-estructurados" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. Datos estructurados esenciales para LLMs</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Implementar <GeoTerm term="schema-org">Schema.org</GeoTerm> permite que los <GeoTerm term="llm">LLMs</GeoTerm> reconozcan la intención y el contexto del contenido.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Tipo de contenido</th>
                          <th className="text-left p-3 font-semibold">Marcado recomendado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Artículo informativo</td>
                          <td className="p-3">Article + mainEntityOfPage</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Guía paso a paso</td>
                          <td className="p-3">HowTo</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Preguntas y respuestas</td>
                          <td className="p-3">FAQPage</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Glosario</td>
                          <td className="p-3">DefinedTerm, WebPage</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Página principal</td>
                          <td className="p-3">WebSite, Organization</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="schema-jsonld" id="schema-jsonld" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary flex items-center gap-2">
                    <Code className="h-5 w-5" />2. Uso de Schema.org y JSON-LD
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Implementa <GeoTerm term="json-ld">JSON-LD</GeoTerm> en cada página como un bloque dentro del head para que los LLMs entiendan el contexto.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Ejemplo básico de JSON-LD para un Artículo:</h4>
                    <pre className="text-xs overflow-x-auto bg-gray-100 p-3 rounded border">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": "https://esgeo.es/metodologia",
  "headline": "Metodología GEO",
  "author": { "@type": "Organization", "name": "esGEO" },
  "publisher": {
    "@type": "Organization",
    "name": "esGEO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://esgeo.es/logo.png"
    }
  },
  "datePublished": "2025-06-13",
  "description": "Una descripción concisa del artículo para LLMs."
}`}
                    </pre>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-blue-700 text-sm">
                      <strong>Recomendación clave:</strong> Revisa que todas las URLs sean canónicas y que el campo mainEntityOfPage sea único para cada página.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="microformatos" id="microformatos" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />3. Microformatos y etiquetas semánticas
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Aprovecha las etiquetas HTML semánticas que aumentan la comprensión de los LLMs al reflejar mejor la estructura del contenido.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">Etiquetas estructurales:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;</li>
                        <li>• &lt;header&gt;, &lt;footer&gt;</li>
                        <li>• &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt; para definiciones</li>
                        <li>• &lt;time datetime="YYYY-MM-DD"&gt;</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <h4 className="font-semibold text-yellow-800 mb-2">Atributos ARIA:</h4>
                      <ul className="text-yellow-700 space-y-1 text-sm">
                        <li>• role="doc-glossary"</li>
                        <li>• aria-label="fragmento citable"</li>
                        <li>• role="navigation"</li>
                        <li>• aria-describedby</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="relaciones-semanticas" id="relaciones-semanticas" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">4. Relaciones semánticas entre páginas</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Una estructura interna clara ayuda a los LLMs a comprender la profundidad temática y la relación entre contenidos.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Sistema de relaciones:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Breadcrumbs estructurados:</strong> BreadcrumbList para mostrar jerarquía</li>
                        <li>• <strong>Enlaces "ver también":</strong> Conecta contenidos relacionados</li>
                        <li>• <strong>Anclas internas:</strong> IDs únicos por bloque (id="citabilidad")</li>
                        <li>• <strong>Categorías visibles:</strong> data-topic="GEO-citabilidad"</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="speakable-content" id="speakable-content" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />5. Speakable content y citabilidad vocal
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los LLMs con capacidades de voz priorizan contenidos que cumplen con SpeakableSpecification.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Ejemplo de Speakable Specification:</h4>
                    <pre className="text-xs overflow-x-auto bg-gray-100 p-3 rounded border">
{`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": "#objetivo, .snippet-block, [data-speakable='true']"
  }
}`}
                    </pre>
                  </div>
                  <p className="text-sm">
                    Define como speakable el título principal (h1), las definiciones clave y las afirmaciones importantes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sistema-testeo" id="sistema-testeo" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />6. Sistema de testeo y visibilidad GEO
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Testea y audita la visibilidad de tu contenido en los LLMs para asegurar el impacto de tus esfuerzos técnicos.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Herramientas de validación:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Rich Results Test (Google)</li>
                        <li>• Schema Markup Validator</li>
                        <li>• llmstxt.org para archivos llm.txt</li>
                        <li>• Coach GEO (herramienta interna)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">Auditoría regular:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Validación de sintaxis Schema.org</li>
                        <li>• Verificación de speakable content</li>
                        <li>• Test de fragmentación de contenido</li>
                        <li>• Monitoreo de citaciones en LLMs</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dashboard-visibilidad" id="dashboard-visibilidad" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary flex items-center gap-2">
                    <BarChart className="h-5 w-5" />7. Dashboard de visibilidad GEO
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Desarrolla un dashboard para monitorizar y auditar la citabilidad de tu contenido en LLMs.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b bg-muted/30">
                          <th className="text-left p-2 font-semibold">Página</th>
                          <th className="text-left p-2 font-semibold">Schema</th>
                          <th className="text-left p-2 font-semibold">Citabilidad</th>
                          <th className="text-left p-2 font-semibold">Fragmentación</th>
                          <th className="text-left p-2 font-semibold">LLM Citation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium">/que-es-geo</td>
                          <td className="p-2">Article</td>
                          <td className="p-2">✅ Alta</td>
                          <td className="p-2">✅ Correcta</td>
                          <td className="p-2">Perplexity</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">/modulo-f1</td>
                          <td className="p-2">HowTo</td>
                          <td className="p-2">⚠ Media</td>
                          <td className="p-2">❌ Incompleta</td>
                          <td className="p-2">No citado</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">/radar-ia/articulo1</td>
                          <td className="p-2">FAQPage</td>
                          <td className="p-2">✅ Alta</td>
                          <td className="p-2">✅ Correcta</td>
                          <td className="p-2">Claude</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Implementation Checklist */}
          <section id="checklist-implementacion" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Checklist de Implementación</h2>
              <ShareSectionButton sectionId="checklist-implementacion" title="checklist completo" />
            </div>
            
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2" data-speakable="true">
                <li>Schema.org implementado para tipos principales (Article, HowTo, FAQPage, DefinedTerm)</li>
                <li>JSON-LD como formato para datos estructurados</li>
                <li>Etiquetas HTML semánticas aplicadas (&lt;article&gt;, &lt;section&gt;, &lt;time&gt;)</li>
                <li>Atributos role y aria-label para accesibilidad semántica</li>
                <li>Breadcrumbs estructurados implementados</li>
                <li>Enlaces internos contextuales y anclas con IDs únicos</li>
                <li>SpeakableSpecification definida para fragmentos clave</li>
                <li>Tests de validación Schema.org realizados</li>
                <li>Archivo llm.txt considerado para guiar LLMs</li>
                <li>Dashboard de visibilidad GEO desarrollado</li>
                <li>Proceso de auditoría regular implementado</li>
              </ul>
            </HighlightSnippet>
          </section>

          {/* LLM Implementation Prompt */}
          <section id="prompt-implementacion" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Prompt para Implementación</h2>
              <ShareSectionButton sectionId="prompt-implementacion" title="prompt para LLMs" />
            </div>
            
            <HighlightSnippet variant="stat" className="mb-6">
              <pre className="text-sm whitespace-pre-wrap">
{`Actúa como un experto en GEO (Generative Engine Optimization) especializado en estándares técnicos y visibilidad semántica para LLMs.

Tengo una página web con [DESCRIBE TIPO DE CONTENIDO]. Quiero implementar datos estructurados y mejorar su estructura técnica para aumentar su comprensión y citabilidad por LLMs.

Por favor:
1. Sugiere el tipo de Schema.org más adecuado y proporciona código JSON-LD
2. Indica qué etiquetas HTML semánticas y atributos ARIA usar
3. Explica cómo mejorar las relaciones semánticas internas
4. Proporciona ejemplo de SpeakableSpecification
5. Lista herramientas de testeo para verificar implementación

Necesito código específico y pasos detallados para mejorar la visibilidad técnica.`}
              </pre>
            </HighlightSnippet>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/curso/f5">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F5: Medición y Análisis
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso">
                <BookOpen className="h-4 w-4 mr-2" />
                Volver al Curso
              </Link>
            </Button>
          </div>

          {/* Completion Message */}
          <div className="mt-16 text-center p-8 bg-accent/10 rounded-lg border-2 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">¡Felicidades!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Has completado todos los módulos del curso GEO F1-F6. 
              Ahora tienes las herramientas para optimizar tu contenido para IA generativa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link to="/coach">
                  Practicar con Coach GEO
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/casos">
                  Ver casos reales
                </Link>
              </Button>
            </div>
          </div>

          {/* Recommended Tools */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Herramientas Recomendadas</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">
                  Validador Schema.org
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://developers.google.com/search/docs/structured-data/search-gallery" target="_blank" rel="noopener noreferrer">
                  Google Structured Data
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.llmstxt.org/" target="_blank" rel="noopener noreferrer">
                  llmstxt.org
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/glosario">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Glosario GEO
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/coach">
                  <Bot className="mr-2 h-4 w-4" />
                  Coach GEO
                </Link>
              </Button>
            </div>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F6: Estándares Técnicos y Visibilidad Semántica",
              "description": "Guía práctica para implementar estándares técnicos que aumenten la visibilidad en LLMs",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F6",
              "educationalLevel": "Advanced",
              "inLanguage": "es-ES",
              "teaches": [
                "Datos estructurados para LLMs",
                "Schema.org y JSON-LD",
                "Microformatos y etiquetas semánticas",
                "Relaciones semánticas",
                "Speakable content",
                "Sistema de testeo GEO",
                "Dashboard de visibilidad"
              ],
              "duration": "PT5H",
              "isPartOf": {
                "@type": "Course",
                "name": "Curso GEO Completo",
                "url": "https://esgeo.es/curso"
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ".snippet-block, [data-speakable='true']"
              }
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default ModuloF6Page;
