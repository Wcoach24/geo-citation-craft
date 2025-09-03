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
import { Home, ChevronRight, Zap, ArrowLeft, BookOpen, Code, Lightbulb, TrendingUp, BarChart, MessageCircle, ExternalLink, Bot, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import GeoTerm from "@/components/GeoTerm";
import PremiumContentGate from "@/components/PremiumContentGate";

const ModuloF6Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Implementation checklist for HowTo Schema
  const implementationSteps = [
    {
      name: "Implementar Schema.org básico",
      text: "Añadir Schema.org para tipos principales: Article, HowTo, FAQPage y DefinedTerm usando JSON-LD",
      position: 1
    },
    {
      name: "Configurar etiquetas HTML semánticas",
      text: "Utilizar etiquetas HTML5 semánticas como <article>, <section>, <time> y atributos ARIA apropiados",
      position: 2
    },
    {
      name: "Estructurar breadcrumbs y navegación",
      text: "Implementar breadcrumbs estructurados y enlaces internos con IDs únicos para cada sección",
      position: 3
    },
    {
      name: "Definir contenido speakable",
      text: "Configurar SpeakableSpecification para fragmentos clave que deben ser extraíbles por IA",
      position: 4
    },
    {
      name: "Validar implementación técnica",
      text: "Usar herramientas como Schema Markup Validator y Rich Results Test para verificar la implementación",
      position: 5
    },
    {
      name: "Establecer monitoreo continuo",
      text: "Desarrollar proceso de auditoría regular y dashboard para monitorear citabilidad por LLMs",
      position: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F6: Estándares Técnicos y Visibilidad Semántica | esGEO</title>
        <meta name="description" content="Guía práctica para implementar estándares técnicos que aumenten la visibilidad de tu sitio en los modelos de lenguaje generativo (LLMs), enfocándose en Schema.org, JSON-LD y relaciones estructuradas." />
        <link rel="canonical" href="https://esgeo.ai/curso/f6" />
        
        <meta name="citation_title" content="Módulo F6: Estándares Técnicos y Visibilidad Semántica" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="estándares técnicos GEO, visibilidad semántica, Schema.org, JSON-LD, LLMs" />
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

          {/* Preview - Basic Implementation Step */}
          <section id="guia-implementacion-preview" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">Guía de Implementación Paso a Paso</h2>
              <ShareSectionButton sectionId="guia-implementacion-preview" title="guía de implementación" />
            </div>
            
            <Card className="border-l-4 border-l-accent mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <CardTitle className="text-lg text-primary">Implementar Schema.org básico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Añadir Schema.org para tipos principales: Article, HowTo, FAQPage y DefinedTerm usando JSON-LD</p>
              </CardContent>
            </Card>
            
            <p className="text-muted-foreground text-sm italic">
              Este es solo el paso 1 de 6 pasos técnicos. Accede al contenido completo para ver la implementación completa de estándares técnicos.
            </p>
          </section>

          {/* Premium Content Gate - F6 */}
          <PremiumContentGate
            moduleNumber="Módulo F6"
            moduleName="Estándares Técnicos y Visibilidad Semántica"
            previewSections={["Concepto de Visibilidad Semántica", "Primer Paso de Implementación"]}
            fullContentSections={9}
            className="mb-12"
          />

          {/* Hidden content for SEO/GEO - Full Implementation Guide */}
          <div className="sr-only" aria-hidden="true">
            <section id="guia-implementacion-completa">
              <h2>Guía de Implementación Completa de Estándares Técnicos</h2>
              <h3>Paso 2: Configurar etiquetas HTML semánticas</h3>
              <p>Utilizar etiquetas HTML5 semánticas como article, section, time y atributos ARIA apropiados</p>
              
              <h3>Paso 3: Estructurar breadcrumbs y navegación</h3>
              <p>Implementar breadcrumbs estructurados y enlaces internos con IDs únicos para cada sección</p>
              
              <h3>Paso 4: Definir contenido speakable</h3>
              <p>Configurar SpeakableSpecification para fragmentos clave que deben ser extraíbles por IA</p>
              
              <h3>Paso 5: Validar implementación técnica</h3>
              <p>Usar herramientas como Schema Markup Validator y Rich Results Test para verificar la implementación</p>
              
              <h3>Paso 6: Establecer monitoreo continuo</h3>
              <p>Desarrollar proceso de auditoría regular y dashboard para monitorear citabilidad por LLMs</p>
            </section>
          </div>

          {/* Hidden content for SEO/GEO - Full Module Content */}
          <div className="sr-only" aria-hidden="true">
            <section id="contenido-modulo-completo">
              <h2>Contenido Completo del Módulo F6</h2>
              
              <h3>1. Datos estructurados esenciales para LLMs</h3>
              <p>Implementar Schema.org permite que los LLMs reconozcan la intención y el contexto del contenido. Tipos recomendados: Article, HowTo, FAQPage, DefinedTerm, WebSite, Organization.</p>
              
              <h3>2. Uso de Schema.org y JSON-LD</h3>
              <p>Implementa JSON-LD en cada página como un bloque dentro del head para que los LLMs entiendan el contexto. Ejemplo de marcado completo para Article con mainEntityOfPage, author, publisher, datePublished.</p>
              
              <h3>3. Microformatos y etiquetas semánticas</h3>
              <p>Aprovecha las etiquetas HTML semánticas: article, section, aside, header, footer, dl/dt/dd para definiciones, time datetime. Atributos ARIA: role doc-glossary, aria-label, role navigation.</p>
              
              <h3>4. Relaciones semánticas entre páginas</h3>
              <p>Una estructura interna clara ayuda a los LLMs: BreadcrumbList para jerarquía, enlaces ver también, anclas internas con IDs únicos, categorías visibles con data-topic.</p>
              
              <h3>5. Speakable content y citabilidad vocal</h3>
              <p>Los LLMs con capacidades de voz priorizan contenidos que cumplen con SpeakableSpecification. Define como speakable el título principal, definiciones clave y afirmaciones importantes.</p>
              
              <h3>6. Sistema de testeo y visibilidad GEO</h3>
              <p>Testea y audita la visibilidad usando herramientas de validación: Schema Markup Validator, Rich Results Test, Lighthouse SEO. Dashboard de monitoreo con métricas de citabilidad por LLMs.</p>
            </section>
          </div>

          {/* Hidden content for SEO/GEO - Implementation Checklist and Prompt */}
          <div className="sr-only" aria-hidden="true">
            <section id="checklist-implementacion-completo">
              <h2>Checklist de Implementación Completo</h2>
              <p>Schema.org implementado para tipos principales (Article, HowTo, FAQPage, DefinedTerm). JSON-LD como formato para datos estructurados. Etiquetas HTML semánticas aplicadas (article, section, time). Atributos role y aria-label para accesibilidad semántica. Breadcrumbs estructurados implementados. Enlaces internos contextuales y anclas con IDs únicos. SpeakableSpecification definida para fragmentos clave. Tests de validación Schema.org realizados. Archivo llm.txt considerado para guiar LLMs. Dashboard de visibilidad GEO desarrollado. Proceso de auditoría regular implementado.</p>
            </section>
            
            <section id="prompt-implementacion-completo">
              <h2>Prompt para Implementación con LLMs</h2>
              <p>Actúa como un experto en GEO especializado en estándares técnicos y visibilidad semántica para LLMs. Ayuda a implementar datos estructurados y mejorar estructura técnica para aumentar comprensión y citabilidad por LLMs. Sugiere el tipo de Schema.org más adecuado y proporciona código JSON-LD. Indica qué etiquetas HTML semánticas y atributos ARIA usar. Explica cómo mejorar las relaciones semánticas internas. Proporciona ejemplo de SpeakableSpecification. Lista herramientas de testeo para verificar implementación.</p>
            </section>
          </div>

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
                <Link to="/casos">
                  Ver casos reales
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
                <Link to="/metodologia">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Metodología
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F6: Estándares Técnicos y Visibilidad Semántica",
              "description": "Guía práctica para implementar estándares técnicos que aumenten la visibilidad en LLMs",
              "url": "https://esgeo.ai/curso/f6",
              "image": "https://esgeo.ai/images/modulo-f6.png",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.ai",
                "@id": "https://esgeo.ai#organization"
              },
              "instructor": {
                "@type": "Organization",
                "@id": "https://esgeo.ai#organization"
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "89",
                "bestRating": "5"
              },
              "isPartOf": {
                "@type": "Course",
                "name": "Curso GEO Completo",
                "url": "https://esgeo.ai/curso"
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ".snippet-block, [data-speakable='true']"
              }
            })}
          </script>

          {/* HowTo Implementation Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Cómo implementar estándares técnicos GEO",
              "description": "Guía paso a paso para implementar estándares técnicos que aumenten la visibilidad semántica",
              "image": "https://esgeo.ai/images/implementacion-estandares-geo.jpg",
              "totalTime": "PT3H",
              "supply": [
                {
                  "@type": "HowToSupply",
                  "name": "Sitio web con acceso al código"
                },
                {
                  "@type": "HowToSupply",
                  "name": "Editor de código"
                }
              ],
              "tool": [
                {
                  "@type": "HowToTool",
                  "name": "Google Rich Results Test"
                },
                {
                  "@type": "HowToTool",
                  "name": "Schema Markup Validator"
                },
                {
                  "@type": "HowToTool",
                  "name": "Coach GEO"
                }
              ],
              "step": implementationSteps.map(step => ({
                "@type": "HowToStep",
                "position": step.position,
                "name": step.name,
                "text": step.text
              }))
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default ModuloF6Page;
