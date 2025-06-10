
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, BarChart, ArrowRight, ArrowLeft, Bot, ExternalLink, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF5Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F5: Mantenimiento Evolutivo | Curso GEO - esGEO</title>
        <meta name="description" content="Diseña un sistema recurrente de revisión, actualización y expansión de contenido adaptado a la evolución constante de los LLMs. Mantén tu visibilidad generativa." />
        <link rel="canonical" href="https://esgeo.es/curso/f5" />
        
        <meta name="citation_title" content="Módulo F5: Mantenimiento Evolutivo" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F5: Mantenimiento Evolutivo",
            "headline": "Módulo F5: Mantenimiento Evolutivo",
            "description": "Diseña un sistema recurrente de revisión, actualización y expansión del contenido, adaptado al ritmo de evolución de los LLMs y de sus métodos de búsqueda y generación. Evita la obsolescencia de tus activos digitales y mejora su valor generativo con el tiempo.",
            "url": "https://esgeo.es/curso/f5",
            "datePublished": "2024-06-12",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.es"
            },
            "image": "https://esgeo.es/images/modulo-f5.png",
            "teaches": [
              "Principios clave del mantenimiento evolutivo para GEO",
              "Ciclo de actualización GEO vs. SEO tradicional",
              "Auditoría de contenido generativo para detectar obsolescencia",
              "Clasificación de contenido por impacto generativo (Activo, Latente, Inerte)",
              "Tests cíclicos de validación (rápida, estándar, exhaustiva)",
              "Estrategias de refrescado y reindexación de contenido"
            ],
            "timeRequired": "PT2H",
            "educationalLevel": "Intermediate",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "50"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f5"
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
                  "name": "Módulo F5: Mantenimiento Evolutivo",
                  "item": "https://esgeo.es/curso/f5"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#f5-objetivo, #f5-principios, #f5-fases, #f5-checklist"
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
                  <Link to="/curso">Curso</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Módulo F5</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16" id="f5-header">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-red-500 text-white">
                <BarChart className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F5
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Mantenimiento Evolutivo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              "En el nuevo paradigma, no se posiciona quien publica más, sino quien evoluciona mejor."
            </p>
            <ShareSectionButton sectionId="f5-header" title="Módulo F5" />
          </div>

          {/* Objective */}
          <HighlightSnippet id="f5-objetivo" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Objetivo del Módulo</h2>
              <ShareSectionButton sectionId="f5-objetivo" title="objetivo del módulo" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Diseña un sistema recurrente de revisión, actualización y expansión del contenido, adaptado al ritmo de evolución de los <GeoTerm term="llm">LLMs</GeoTerm> y de sus métodos de búsqueda y generación.</strong> 
              Este módulo te ayudará a evitar la obsolescencia de tus activos digitales y mejorar su valor generativo con el tiempo, asegurando que tu contenido siga siendo relevante y citado a medida que los modelos de <GeoTerm term="ia">IA</GeoTerm> evolucionan.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              El mantenimiento de contenido para <GeoTerm term="geo">GEO</GeoTerm> sigue una lógica fundamentalmente diferente al <GeoTerm term="seo">SEO</GeoTerm> tradicional. Mientras el SEO se actualiza principalmente para mantener el ranking, el GEO se actualiza para seguir siendo relevante, comprensible y citado.
            </p>
          </HighlightSnippet>

          {/* Key Principles */}
          <section id="f5-principios" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Principios Clave del Mantenimiento Evolutivo</h2>
              <ShareSectionButton sectionId="f5-principios" title="principios clave" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tu visibilidad generativa está constantemente afectada por cambios críticos en el ecosistema de la IA:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Evolución de los Modelos</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Los modelos principales se actualizan cada pocos meses, lo que puede traer cambios en cómo interpretan y valoran el contenido.</p>
                  <p className="font-semibold">Ejemplo:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Un modelo actualizado puede dar más peso a la estructura semántica que a las señales de autoridad tradicionales.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Actualización de Fuentes en RAG</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Los sistemas <GeoTerm term="rag">RAG</GeoTerm> como <GeoTerm term="perplexity">Perplexity</GeoTerm> actualizan constantemente sus índices, y las fuentes consideradas "de confianza" pueden cambiar.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Evolución del Lenguaje Conversacional</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Los patrones de consulta de los usuarios se vuelven más sofisticados y el estilo de respuesta de los <GeoTerm term="llm">LLMs</GeoTerm> se refina, haciendo que formatos antiguos puedan volverse obsoletos.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Crecimiento de la Competencia Semántica</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Cada vez más sitios adoptan prácticas de <GeoTerm term="geo">GEO</GeoTerm>, lo que hace que el espacio semántico sea más competido y la diferenciación requiera innovación constante.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* System by Phases */}
          <section id="f5-fases" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Sistema de Mantenimiento por Fases</h2>
              <ShareSectionButton sectionId="f5-fases" title="sistema por fases" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para mantener y mejorar tu visibilidad generativa a lo largo del tiempo, implementa este sistema de cuatro fases:
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="fase-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">Fase 1: Auditoría de Contenido Generativo (cada 6-8 semanas)</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>Identifica contenido que necesita actualización antes de que pierda relevancia.</p>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">Checklist de auditoría:</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Actualidad de la información y validez de ejemplos</li>
                      <li>• Alineación con preguntas actuales y frescura de datos</li>
                      <li>• Estilo conversacional actualizado y formato que facilite la extracción</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-blue-600">
                      Usa <GeoTerm term="chatgpt">GPT-4</GeoTerm> o <GeoTerm term="claude">Claude</GeoTerm> para comparar versiones y detectar obsolescencias semánticas.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fase-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">Fase 2: Mapa de Impacto Generativo</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>Clasifica tu contenido en tres niveles para priorizar esfuerzos de mantenimiento:</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <strong className="text-green-800">Activo Generativo:</strong> 
                      <span className="text-green-700"> Contenido citado y que funciona bien (revisión 4-6 semanas).</span>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <strong className="text-yellow-800">Latente:</strong> 
                      <span className="text-yellow-700"> Buen contenido con potencial pero sin visibilidad (revisión 8-12 semanas).</span>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <strong className="text-red-800">Inerte:</strong> 
                      <span className="text-red-700"> Contenido obsoleto o de baja calidad (evaluación trimestral).</span>
                    </div>
                  </div>
                  <p className="text-sm italic">Recopila datos de validaciones, analítica web y engagement para clasificar.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fase-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">Fase 3: Tests Cíclicos de Validación (cada 4-6 semanas)</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>Implementa un calendario regular de validaciones para monitorizar tu visibilidad generativa.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-muted/30 rounded">
                      <h5 className="font-semibold text-primary mb-1">Semanal</h5>
                      <p className="text-sm">Validación rápida (3-5 prompts en 1-2 LLMs)</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded">
                      <h5 className="font-semibold text-primary mb-1">Mensual</h5>
                      <p className="text-sm">Validación estándar (10-15 prompts en 3+ LLMs)</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded">
                      <h5 className="font-semibold text-primary mb-1">Trimestral</h5>
                      <p className="text-sm">Validación exhaustiva (20+ prompts en todos los LLMs relevantes)</p>
                    </div>
                  </div>
                  <p className="text-sm italic">Analiza qué motores te citan, qué preguntas posicionan tu contenido y dónde hay huecos semánticos.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fase-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">Fase 4: Refrescado y Reindexación</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>Una vez identificado el contenido a actualizar, impleméntalo y notifica a los sistemas de <GeoTerm term="indexacion">indexación</GeoTerm>.</p>
                  <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                    <h4 className="font-semibold text-purple-800 mb-2">Estrategia de actualización:</h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Actualiza contenido clave con cambios sustanciales (títulos, introducción, ejemplos, datos)</li>
                      <li>• Optimiza para los últimos patrones de <GeoTerm term="llm">LLMs</GeoTerm> (formato, estilo conversacional, estructura semántica)</li>
                      <li>• Notifica a los sistemas de indexación: IndexNow, Bing Webmaster Tools, Google Search Console, Perplexity Feedback</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Implementation Checklist */}
          <section id="f5-checklist" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Checklist de Implementación</h2>
              <ShareSectionButton sectionId="f5-checklist" title="checklist de implementación" />
            </div>
            
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed" data-speakable="true">
                <li>Sistema de auditoría periódica establecido con calendario y responsables</li>
                <li>Criterios de clasificación de contenido definidos (Activo/Latente/Inerte)</li>
                <li>Base de datos o tablero para seguimiento del estado de cada contenido</li>
                <li>Calendario de validaciones cíclicas implementado</li>
                <li>Proceso documentado para actualización de contenido</li>
                <li>Cuentas configuradas en herramientas de indexación (IndexNow, etc.)</li>
                <li>Dashboard de seguimiento de evolución de visibilidad generativa</li>
                <li>Sistema de alertas para cambios significativos en patrones de citación</li>
                <li>Proceso de documentación de aprendizajes y mejores prácticas</li>
                <li>Revisión trimestral de la efectividad del sistema completo</li>
              </ul>
            </HighlightSnippet>

            <p className="text-muted-foreground leading-relaxed">
              Al implementar correctamente este módulo, tu web se transformará en una fuente adaptativa y persistente que mantiene su relevancia a lo largo del tiempo, con un sistema vivo y automatizado para revisar y mejorar tu <GeoTerm term="autoridad-generativa">autoridad generativa</GeoTerm> de forma continua.
            </p>
          </section>

          {/* LLM Prompt */}
          <section id="f5-prompt" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Prompt para Implementación con LLMs</h2>
              <ShareSectionButton sectionId="f5-prompt" title="prompt de implementación" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes utilizar este prompt para ayudarte a diseñar tu sistema de mantenimiento evolutivo:
            </p>

            <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm font-mono">
{`Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en mantenimiento evolutivo de contenido para LLMs.

Mi sitio web/marca es [Describe tu sitio/marca y nicho]. Tengo aproximadamente [número] de páginas/artículos de contenido.

Quiero crear un sistema para mantener y mejorar mi visibilidad en LLMs como ChatGPT, Claude y Perplexity a lo largo del tiempo.

Por favor, ayúdame a:
1. Diseñar un calendario de auditoría y actualización adaptado a mi volumen de contenido y recursos.
2. Crear criterios específicos para clasificar mi contenido en niveles de prioridad (Activo/Latente/Inerte).
3. Desarrollar un sistema de seguimiento para monitorizar la evolución de mi visibilidad generativa.
4. Establecer procesos específicos para actualizar diferentes tipos de contenido.
5. Crear plantillas para documentar cambios y aprendizajes.

Necesito un sistema práctico y sostenible que pueda implementar con mis recursos actuales y mantener a largo plazo.`}
              </code>
            </HighlightSnippet>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-16">
            <Button variant="outline" asChild>
              <Link to="/curso/f4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F4: Validación Conversacional
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f6">
                Módulo F6: Estrategia Avanzada
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Related Tools */}
          <div className="p-6 bg-muted/30 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-primary mb-4">Herramientas Recomendadas</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
                  Notion / Airtable
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">
                  DiffGPT (ChatGPT)
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer">
                  Screaming Frog
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                  Google Search Console
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/coach">
                  <Bot className="mr-2 h-4 w-4" />
                  Usar Coach GEO para F5
                </Link>
              </Button>
            </div>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F5: Mantenimiento Evolutivo",
              "description": "Módulo de GEO que enseña a diseñar sistemas de mantenimiento evolutivo de contenido para LLMs",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F5",
              "educationalLevel": "Intermediate",
              "inLanguage": "es-ES",
              "teaches": [
                "Principios del mantenimiento evolutivo",
                "Auditoría de contenido generativo",
                "Clasificación de impacto generativo",
                "Tests cíclicos de validación",
                "Estrategias de refrescado"
              ],
              "duration": "PT2H",
              "isPartOf": {
                "@type": "Course",
                "name": "Curso GEO Completo",
                "url": "https://esgeo.es/curso"
              }
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default ModuloF5Page;
