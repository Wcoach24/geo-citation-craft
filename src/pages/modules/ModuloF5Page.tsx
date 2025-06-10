
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, BarChart, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF5Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F5: Medición y Análisis GEO | esGEO</title>
        <meta name="description" content="Métricas específicas para evaluar el rendimiento en citaciones por IA: KPIs de citabilidad, herramientas de monitoreo y análisis de rendimiento." />
        <link rel="canonical" href="https://esgeo.es/curso/f5" />
        
        <meta name="citation_title" content="Módulo F5: Medición y Análisis GEO" />
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
                <BreadcrumbPage>Módulo F5</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16" id="modulo-f5">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-red-500 text-white">
                <BarChart className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F5
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Medición y Análisis GEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Métricas específicas para evaluar el rendimiento en citaciones por IA
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-medicion-geo" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Medición GEO</h2>
              <ShareSectionButton sectionId="concepto-medicion-geo" title="medición GEO" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>La medición GEO evalúa la frecuencia y calidad de las citaciones de tu contenido por modelos de IA, utilizando métricas específicas de citabilidad y herramientas de monitoreo especializadas.</strong> 
              Se enfoca en rastrear menciones, referencias y uso del contenido en respuestas generadas por IA.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="kpis-citabilidad" id="kpis-citabilidad" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. KPIs de citabilidad</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los KPIs GEO miden el éxito en términos de citación y referenciación por modelos de IA.
                  </p>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Métricas Primarias</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Frecuencia de citación:</strong> Número de veces citado</li>
                          <li>• <strong>Calidad de citación:</strong> Contexto y precisión</li>
                          <li>• <strong>Diversidad de fuentes:</strong> Diferentes modelos de IA</li>
                          <li>• <strong>Persistencia:</strong> Consistencia temporal</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Métricas Secundarias</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Fragmentos utilizados:</strong> Qué partes se citan</li>
                          <li>• <strong>Contexto de uso:</strong> En qué situaciones</li>
                          <li>• <strong>Atribución correcta:</strong> Mención de la fuente</li>
                          <li>• <strong>Evolución temporal:</strong> Tendencias de citación</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="herramientas-monitoreo" id="herramientas-monitoreo" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">2. Herramientas de monitoreo</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Herramientas actuales y emergentes para monitorear citaciones por IA.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Herramientas Disponibles</h4>
                      <ul className="text-blue-700 space-y-2 text-sm">
                        <li>• <strong>Búsquedas manuales:</strong> Tests directos en ChatGPT, Claude, etc.</li>
                        <li>• <strong>Google Alerts:</strong> Para menciones tradicionales</li>
                        <li>• <strong>Mention.com:</strong> Monitoreo de menciones web</li>
                        <li>• <strong>Perplexity tracking:</strong> Búsquedas específicas</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <h4 className="font-semibold text-yellow-800 mb-2">Herramientas en Desarrollo</h4>
                      <ul className="text-yellow-700 space-y-2 text-sm">
                        <li>• <strong>APIs de modelos:</strong> Acceso programático</li>
                        <li>• <strong>Herramientas GEO nativas:</strong> Específicas para citación</li>
                        <li>• <strong>Dashboard de citabilidad:</strong> Métricas centralizadas</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="analisis-rendimiento" id="analisis-rendimiento" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">3. Análisis de rendimiento</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Metodologías para analizar y optimizar el rendimiento GEO basado en datos.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">Proceso de análisis:</h4>
                      <ol className="text-green-700 space-y-1 text-sm list-decimal list-inside">
                        <li>Establecimiento de baseline de citaciones</li>
                        <li>Implementación de mejoras GEO</li>
                        <li>Medición de cambios en citabilidad</li>
                        <li>Análisis de correlaciones</li>
                        <li>Iteración y optimización</li>
                      </ol>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Factores a analizar:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Contenido más citado:</strong> Identificar patrones</li>
                        <li>• <strong>Estructura efectiva:</strong> Formatos que funcionan</li>
                        <li>• <strong>Temas preferidos:</strong> Áreas de mayor citación</li>
                        <li>• <strong>Timing:</strong> Cuándo se actualiza el conocimiento</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/curso/f4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F4: Optimización Técnica
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f6">
                Módulo F6: Estrategia Avanzada
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F5: Medición y Análisis GEO",
              "description": "Módulo de GEO que enseña métricas específicas para evaluar el rendimiento en citaciones por IA",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F5",
              "educationalLevel": "Intermediate",
              "inLanguage": "es-ES",
              "teaches": [
                "KPIs de citabilidad",
                "Herramientas de monitoreo",
                "Análisis de rendimiento",
                "Métricas GEO"
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
