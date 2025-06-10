
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, Target, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF4Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F4: Optimización Técnica Avanzada | esGEO</title>
        <meta name="description" content="Implementación de elementos técnicos para máxima accesibilidad por IA: Schema markup, metadatos citables y estructura HTML semántica." />
        <link rel="canonical" href="https://esgeo.es/metodologia/f4" />
        
        <meta name="citation_title" content="Módulo F4: Optimización Técnica Avanzada" />
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
                <BreadcrumbPage>Módulo F4</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-orange-500 text-white">
                <Target className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F4
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Optimización Técnica Avanzada
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Implementación de elementos técnicos para máxima accesibilidad por IA
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-optimizacion-tecnica" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Optimización Técnica para IA</h2>
              <ShareSectionButton sectionId="concepto-optimizacion-tecnica" title="optimización técnica" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>La optimización técnica GEO implementa marcado semántico, metadatos específicos y estructura HTML que facilitan la comprensión automática del contenido por modelos de IA.</strong> 
              Incluye Schema.org, metadatos de citación y elementos HTML semánticos.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="schema-markup" id="schema-markup" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. Schema markup esencial</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los datos estructurados Schema.org ayudan a los modelos de IA a entender el contexto y tipo de contenido.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Schema prioritarios para GEO:</h4>
                      <ul className="space-y-2">
                        <li><strong>Article:</strong> Para contenido editorial</li>
                        <li><strong>FAQPage:</strong> Para preguntas frecuentes</li>
                        <li><strong>HowTo:</strong> Para guías paso a paso</li>
                        <li><strong>DefinedTerm:</strong> Para glosarios</li>
                        <li><strong>Course:</strong> Para contenido educativo</li>
                        <li><strong>SpeakableSpecification:</strong> Para fragmentos citables</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Ejemplo de implementación:</h4>
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guía de GEO",
  "author": "esGEO",
  "datePublished": "2024-01-01",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".snippet-block"]
  }
}`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="metadatos-citables" id="metadatos-citables" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">2. Metadatos citables</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los metadatos específicos para citación ayudan a los modelos a identificar fuentes confiables.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">Meta tags esenciales:</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li><code>citation_title</code> - Título del contenido</li>
                        <li><code>citation_author</code> - Autor o organización</li>
                        <li><code>citation_publication_date</code> - Fecha de publicación</li>
                        <li><code>citation_journal_title</code> - Nombre de la publicación</li>
                        <li><code>speakable-selector</code> - Selectores para fragmentos citables</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Implementación práctica:</h4>
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`<meta name="citation_title" content="Guía GEO" />
<meta name="citation_author" content="esGEO" />
<meta name="citation_publication_date" content="2024" />
<meta name="speakable-selector" content=".snippet-block" />`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="estructura-html" id="estructura-html" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">3. Estructura HTML semántica</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    El HTML semántico proporciona contexto estructural que los modelos pueden interprear automáticamente.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Elementos semánticos clave:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><code>&lt;article&gt;</code> - Contenido independiente</li>
                        <li><code>&lt;section&gt;</code> - Secciones temáticas</li>
                        <li><code>&lt;header&gt;</code> - Encabezado de sección</li>
                        <li><code>&lt;main&gt;</code> - Contenido principal</li>
                        <li><code>&lt;aside&gt;</code> - Contenido relacionado</li>
                        <li><code>&lt;nav&gt;</code> - Navegación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Atributos importantes:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><code>id</code> - Identificadores únicos</li>
                        <li><code>data-speakable</code> - Fragmentos citables</li>
                        <li><code>role</code> - Roles semánticos</li>
                        <li><code>aria-*</code> - Accesibilidad</li>
                        <li><code>itemscope/itemprop</code> - Microdatos</li>
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
              <Link to="/metodologia/f3">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F3: Redacción Citeable
              </Link>
            </Button>
            <Button asChild>
              <Link to="/metodologia/f5">
                Módulo F5: Medición y Análisis
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F4: Optimización Técnica Avanzada",
              "description": "Módulo de GEO que enseña implementación técnica para máxima accesibilidad por IA",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": window.location.origin
              },
              "courseCode": "GEO-F4",
              "educationalLevel": "Intermediate",
              "inLanguage": "es-ES",
              "teaches": [
                "Schema markup",
                "Metadatos citables",
                "Estructura HTML semántica",
                "Optimización técnica"
              ],
              "duration": "PT3H",
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

export default ModuloF4Page;
