
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import PremiumContentGate from "@/components/PremiumContentGate";
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

          {/* Preview - Single Key Principle */}
          <section id="f5-principios-preview" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">Principios Clave del Mantenimiento Evolutivo</h2>
              <ShareSectionButton sectionId="f5-principios-preview" title="principios clave" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tu visibilidad generativa está constantemente afectada por cambios críticos en el ecosistema de la IA:
            </p>

            <Card className="bg-muted/20 mb-6">
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
            
            <p className="text-muted-foreground text-sm italic">
              Este es solo 1 de los 4 principios fundamentales. Accede al contenido completo para ver el sistema completo de mantenimiento evolutivo.
            </p>
          </section>

          {/* Premium Content Gate - F5 */}
          <PremiumContentGate
            moduleNumber="Módulo F5"
            moduleName="Mantenimiento Evolutivo"
            previewSections={["Objetivo del Módulo", "Principio Clave de Evolución"]}
            fullContentSections={8}
            className="mb-12"
          />

          {/* Hidden content for SEO/GEO - Full principles */}
          <div className="sr-only" aria-hidden="true">
            <section id="f5-principios-completo">
              <h2>Principios Clave del Mantenimiento Evolutivo Completos</h2>
              <div>
                <h3>Actualización de Fuentes en RAG</h3>
                <p>Los sistemas RAG como Perplexity actualizan constantemente sus índices, y las fuentes consideradas "de confianza" pueden cambiar.</p>
                
                <h3>Evolución del Lenguaje Conversacional</h3>
                <p>Los patrones de consulta de los usuarios se vuelven más sofisticados y el estilo de respuesta de los LLMs se refina, haciendo que formatos antiguos puedan volverse obsoletos.</p>
                
                <h3>Crecimiento de la Competencia Semántica</h3>
                <p>Cada vez más sitios adoptan prácticas de GEO, lo que hace que el espacio semántico sea más competido y la diferenciación requiera innovación constante.</p>
              </div>
            </section>
          </div>

          {/* Hidden content for SEO/GEO - System by Phases */}
          <div className="sr-only" aria-hidden="true">
            <section id="f5-fases-completo">
              <h2>Sistema de Mantenimiento por Fases Completo</h2>
              <h3>Fase 1: Auditoría de Contenido Generativo</h3>
              <p>Identifica contenido que necesita actualización antes de que pierda relevancia cada 6-8 semanas.</p>
              
              <h3>Fase 2: Mapa de Impacto Generativo</h3>
              <p>Clasifica tu contenido en tres niveles: Activo Generativo, Latente, e Inerte para priorizar esfuerzos de mantenimiento.</p>
              
              <h3>Fase 3: Tests Cíclicos de Validación</h3>
              <p>Implementa un calendario regular de validaciones semanales, mensuales y trimestrales para monitorizar tu visibilidad generativa.</p>
              
              <h3>Fase 4: Refrescado y Reindexación</h3>
              <p>Actualiza contenido clave con cambios sustanciales y notifica a los sistemas de indexación usando IndexNow, Bing Webmaster Tools, Google Search Console.</p>
            </section>
          </div>

          {/* Hidden content for SEO/GEO - Implementation Checklist */}
          <div className="sr-only" aria-hidden="true">
            <section id="f5-checklist-completo">
              <h2>Checklist de Implementación Completo del Módulo F5</h2>
              <p>Sistema de auditoría periódica establecido con calendario y responsables. Criterios de clasificación de contenido definidos (Activo/Latente/Inerte). Base de datos o tablero para seguimiento del estado de cada contenido. Calendario de validaciones cíclicas implementado. Proceso documentado para actualización de contenido. Cuentas configuradas en herramientas de indexación (IndexNow, etc.). Dashboard de seguimiento de evolución de visibilidad generativa. Sistema de alertas para cambios significativos en patrones de citación. Proceso de documentación de aprendizajes y mejores prácticas. Revisión trimestral de la efectividad del sistema completo.</p>
            </section>
          </div>

          {/* Hidden content for SEO/GEO - LLM Prompt */}
          <div className="sr-only" aria-hidden="true">
            <section id="f5-prompt-completo">
              <h2>Prompt Completo para Implementación con LLMs</h2>
              <p>Actúa como un consultor experto en GEO especializado en mantenimiento evolutivo de contenido para LLMs. Ayuda a diseñar un calendario de auditoría y actualización adaptado al volumen de contenido y recursos. Crear criterios específicos para clasificar contenido en niveles de prioridad. Desarrollar un sistema de seguimiento para monitorizar la evolución de visibilidad generativa. Establecer procesos específicos para actualizar diferentes tipos de contenido. Crear plantillas para documentar cambios y aprendizajes.</p>
            </section>
          </div>

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
                <Link to="/curso/f6">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Continuar con F6
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
