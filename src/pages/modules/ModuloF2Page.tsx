
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, Search, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF2Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F2: Estructura Semántica para LLMs | esGEO</title>
        <meta name="description" content="Aprende a organizar y estructurar contenido para máxima comprensión por IA: jerarquía de contenido, datos estructurados y fragmentación semántica." />
        <link rel="canonical" href="https://esgeo.es/curso/f2" />
        
        <meta name="citation_title" content="Módulo F2: Estructura Semántica para LLMs" />
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
                <BreadcrumbPage>Módulo F2</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16" id="modulo-f2">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-green-500 text-white">
                <Search className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F2
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Estructura Semántica para LLMs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprende a organizar y estructurar contenido para máxima comprensión por IA
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-estructura-semantica" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Estructura Semántica Efectiva</h2>
              <ShareSectionButton sectionId="concepto-estructura-semantica" title="estructura semántica" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Una estructura semántica eficaz organiza el contenido en bloques lógicos, jerarquías claras y relaciones explícitas que los modelos de lenguaje pueden procesar y comprender automáticamente.</strong> 
              Esto incluye jerarquía de encabezados, fragmentación inteligente y datos estructurados.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="jerarquia-contenido" id="jerarquia-contenido" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. Jerarquía de contenido para IA</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los modelos de IA entienden mejor el contenido cuando está organizado en una jerarquía clara y lógica.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">H1: Tema principal</h4>
                      <p>Una sola idea central por página, clara y específica</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">H2: Subtemas principales</h4>
                      <p>Divisiones lógicas del tema principal</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">H3: Detalles específicos</h4>
                      <p>Elementos concretos dentro de cada subtema</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="datos-estructurados" id="datos-estructurados" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">2. Datos estructurados esenciales</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>Los datos estructurados ayudan a los modelos a entender el contexto y tipo de contenido.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Article:</strong> Para contenido editorial y artículos
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>FAQPage:</strong> Para preguntas y respuestas
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>HowTo:</strong> Para guías paso a paso
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>SpeakableSpecification:</strong> Para fragmentos citables
                      </div>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fragmentacion-semantica" id="fragmentacion-semantica" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">3. Fragmentación semántica inteligente</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Divide tu contenido en fragmentos que puedan funcionar de manera independiente cuando sean citados.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">✅ Fragmento bien estructurado</h4>
                      <p className="text-sm text-green-700">
                        "El SEO tradicional busca posicionamiento en buscadores, mientras que GEO optimiza para citación por IA."
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                      <h4 className="font-semibold text-red-800 mb-2">❌ Fragmento mal estructurado</h4>
                      <p className="text-sm text-red-700">
                        "Como mencionamos antes, esto es diferente de lo otro que explicamos..."
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/curso/f1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F1: Fundamentos
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f3">
                Módulo F3: Redacción Citeable
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F2: Estructura Semántica para LLMs",
              "description": "Módulo de GEO que enseña a organizar y estructurar contenido para máxima comprensión por IA",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F2",
              "educationalLevel": "Beginner",
              "inLanguage": "es-ES",
              "teaches": [
                "Jerarquía de contenido",
                "Datos estructurados",
                "Fragmentación semántica",
                "Estructura para LLMs"
              ],
              "duration": "PT3H",
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

export default ModuloF2Page;
