
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, Zap, ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF6Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F6: Estrategia Avanzada y Escalabilidad | esGEO</title>
        <meta name="description" content="Tácticas avanzadas para dominar en ecosistemas de IA generativa: link building para IA, contenido viral citeable y escalabilidad técnica." />
        <link rel="canonical" href="https://esgeo.es/metodologia/f6" />
        
        <meta name="citation_title" content="Módulo F6: Estrategia Avanzada y Escalabilidad" />
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
                  <Link to="/metodologia">Metodología</Link>
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-indigo-500 text-white">
                <Zap className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F6
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Estrategia Avanzada y Escalabilidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tácticas avanzadas para dominar en ecosistemas de IA generativa
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-estrategia-avanzada" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Estrategia Avanzada GEO</h2>
              <ShareSectionButton sectionId="concepto-estrategia-avanzada" title="estrategia avanzada" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>La estrategia avanzada GEO combina técnicas de escalabilidad, distribución de contenido y construcción de autoridad específicamente diseñadas para ecosistemas de IA generativa.</strong> 
              Incluye link building para IA, contenido viral citeable y sistemas automatizados de optimización.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="link-building-ia" id="link-building-ia" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. Link building para IA</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    El link building GEO se enfoca en obtener referencias y enlaces desde fuentes que los modelos de IA valoran.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Fuentes prioritarias para IA:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Wikipedia y Wikimedia:</strong> Fuente principal de entrenamiento</li>
                        <li>• <strong>Sitios educativos (.edu):</strong> Alta credibilidad académica</li>
                        <li>• <strong>Publicaciones científicas:</strong> Autoridad técnica</li>
                        <li>• <strong>Medios reconocidos:</strong> Validación editorial</li>
                        <li>• <strong>Documentación oficial:</strong> Fuentes primarias</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Estrategias específicas:</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Contribuciones a Wikipedia sobre tu área de expertise</li>
                        <li>• Colaboraciones con instituciones académicas</li>
                        <li>• Contenido citable para periodistas y bloggers</li>
                        <li>• Participación en foros técnicos especializados</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contenido-viral" id="contenido-viral" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">2. Contenido viral citeable</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Crear contenido que se disemine ampliamente y sea frecuentemente citado por modelos de IA.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Características del contenido viral:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Utilidad inmediata:</strong> Resuelve problemas comunes</li>
                        <li>• <strong>Formato fragmentable:</strong> Fácil de citar parcialmente</li>
                        <li>• <strong>Actualidad relevante:</strong> Temas del momento</li>
                        <li>• <strong>Autoridad reconocida:</strong> Expertise demostrable</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Tipos de contenido efectivos:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Definiciones autoritativas:</strong> Glosarios especializados</li>
                        <li>• <strong>Guías paso a paso:</strong> HowTo detallados</li>
                        <li>• <strong>Datos y estadísticas:</strong> Investigación original</li>
                        <li>• <strong>Comparativas:</strong> Análisis objetivos</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="escalabilidad-tecnica" id="escalabilidad-tecnica" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">3. Escalabilidad técnica</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Sistemas y procesos para escalar la optimización GEO a gran volumen de contenido.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">Automatización de procesos:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Generación automática de datos estructurados</li>
                        <li>• Templates para contenido citeable</li>
                        <li>• Sistemas de fragmentación automática</li>
                        <li>• Monitoreo automatizado de citaciones</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <h4 className="font-semibold text-yellow-800 mb-2">Arquitectura de contenido:</h4>
                      <ul className="text-yellow-700 space-y-1 text-sm">
                        <li>• Hub de contenido con estructura semántica</li>
                        <li>• Red de contenido interconectado</li>
                        <li>• Versionado y actualización sistemática</li>
                        <li>• Distribución multi-canal optimizada</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Herramientas y tecnologías:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• CMS con capacidades GEO nativas</li>
                        <li>• APIs para datos estructurados</li>
                        <li>• Sistemas de análisis de citabilidad</li>
                        <li>• Plataformas de distribución de contenido</li>
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
              <Link to="/metodologia/f5">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F5: Medición y Análisis
              </Link>
            </Button>
            <Button asChild>
              <Link to="/metodologia">
                <BookOpen className="h-4 w-4 mr-2" />
                Volver a Metodología
              </Link>
            </Button>
          </div>

          {/* Completion Message */}
          <div className="mt-16 text-center p-8 bg-accent/10 rounded-lg border-2 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">¡Felicidades!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Has completado todos los módulos de la metodología GEO F1-F6. 
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

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F6: Estrategia Avanzada y Escalabilidad",
              "description": "Módulo avanzado de GEO que enseña tácticas para dominar en ecosistemas de IA generativa",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": window.location.origin
              },
              "courseCode": "GEO-F6",
              "educationalLevel": "Advanced",
              "inLanguage": "es-ES",
              "teaches": [
                "Link building para IA",
                "Contenido viral citeable",
                "Escalabilidad técnica",
                "Estrategias avanzadas"
              ],
              "duration": "PT5H",
              "isPartOf": {
                "@type": "Course",
                "name": "Metodología GEO Completa",
                "url": `${window.location.origin}/metodologia`
              }
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default ModuloF6Page;
