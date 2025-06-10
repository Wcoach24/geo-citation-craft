
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF1Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F1: Fundamentos GEO | Generative Engine Optimization | esGEO</title>
        <meta name="description" content="Aprende los fundamentos de GEO: qué es la optimización para IA generativa, diferencias con SEO tradicional y principios básicos para ser citado por modelos de lenguaje." />
        <link rel="canonical" href="https://esgeo.es/curso/f1" />
        
        <meta name="citation_title" content="Módulo F1: Fundamentos de Generative Engine Optimization" />
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
                <BreadcrumbPage>Módulo F1</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16" id="modulo-f1">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-blue-500 text-white">
                <FileText className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F1
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Fundamentos de Accesibilidad Generativa
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprende los principios básicos para que tu contenido sea entendido por IA generativa
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-fundamentos-geo" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Qué son los Fundamentos GEO?</h2>
              <ShareSectionButton sectionId="concepto-fundamentos-geo" title="fundamentos GEO" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Los fundamentos GEO establecen las bases para crear contenido que los modelos de IA pueden comprender, procesar y citar eficazmente.</strong> 
              A diferencia del SEO tradicional que se enfoca en algoritmos de búsqueda, GEO se centra en la comprensión semántica y la citabilidad por modelos de lenguaje.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="que-es-geo" id="que-es-geo" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. ¿Qué es GEO?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    <strong>Generative Engine Optimization (GEO)</strong> es la disciplina que optimiza contenido para ser comprendido, 
                    procesado y citado por modelos de inteligencia artificial generativa como ChatGPT, Claude o Perplexity.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Enfoque en comprensión semántica</li>
                    <li>Optimización para citación, no para ranking</li>
                    <li>Estructura pensada para procesamiento automático</li>
                    <li>Contenido fragmentado y contextualizado</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="diferencias-seo" id="diferencias-seo" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">2. Diferencias fundamentales con SEO</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">SEO Tradicional</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Optimiza para motores de búsqueda</li>
                        <li>• Busca ranking en SERPs</li>
                        <li>• Enfoque en keywords y backlinks</li>
                        <li>• Audiencia: usuarios navegando</li>
                        <li>• Métrica: posición en resultados</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent mb-3">GEO</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Optimiza para modelos de IA</li>
                        <li>• Busca ser citado en respuestas</li>
                        <li>• Enfoque en estructura y semántica</li>
                        <li>• Audiencia: algoritmos de IA</li>
                        <li>• Métrica: frecuencia de citación</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="principios-basicos" id="principios-basicos" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">3. Principios básicos de citabilidad</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Claridad Semántica</h4>
                      <p>Tu contenido debe ser inequívoco y estar bien estructurado jerárquicamente.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Fragmentación Inteligente</h4>
                      <p>Divide el contenido en bloques autónomos que puedan ser citados independientemente.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Autoridad Contextual</h4>
                      <p>Establece credibilidad y contexto para que la IA confíe en tu información.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/curso">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Curso
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f2">
                Módulo F2: Estructura Semántica
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F1: Fundamentos de Accesibilidad Generativa",
              "description": "Módulo introductorio de GEO que enseña los fundamentos de optimización para IA generativa",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F1",
              "educationalLevel": "Beginner",
              "inLanguage": "es-ES",
              "teaches": [
                "Fundamentos de GEO",
                "Diferencias entre SEO y GEO",
                "Principios de citabilidad",
                "Accesibilidad generativa"
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

export default ModuloF1Page;
