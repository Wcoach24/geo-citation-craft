
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Home, ChevronRight, Zap, ArrowLeft, BookOpen, ExternalLink, Bot, Code } from "lucide-react";
import { Link } from "react-router-dom";

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
        
        <meta name="citation_title" content="Módulo F6: Estándares Técnicos y Visibilidad Semántica en LLMs" />
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
              Guía práctica para implementar estándares técnicos que aumenten la visibilidad en LLMs
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-visibilidad-semantica" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Visibilidad Semántica</h2>
              <ShareSectionButton sectionId="concepto-visibilidad-semantica" title="visibilidad semántica" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Los <GeoTerm term="llm">LLMs</GeoTerm> no rastrean como un bot tradicional; entienden como un lector humano.</strong> 
              Sin embargo, los elementos técnicos correctos potencian la <GeoTerm term="citabilidad">citabilidad</GeoTerm> si están correctamente estructurados. 
              El objetivo de <GeoTerm term="geo">GEO</GeoTerm> es convertir cada bloque web en un fragmento inteligible, enlazable y citable.
            </p>
          </HighlightSnippet>

          {/* Introduction */}
          <section id="introduccion-ecosistema" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Introducción al Ecosistema Técnico GEO</h2>
              <ShareSectionButton sectionId="introduccion-ecosistema" title="ecosistema técnico" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Los <GeoTerm term="llm">modelos de lenguaje</GeoTerm> no rastrean como un bot tradicional; entienden como un lector humano. 
              Sin embargo, los elementos técnicos correctos potencian la <GeoTerm term="citabilidad">citabilidad</GeoTerm> si están correctamente estructurados.
            </p>

            <HighlightSnippet variant="insight" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                <strong>Objetivo <GeoTerm term="geo">GEO</GeoTerm>:</strong> Convertir cada bloque web en un fragmento inteligible, enlazable y citable.
              </p>
            </HighlightSnippet>
          </section>

          {/* Structured Data */}
          <section id="datos-estructurados" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Datos Estructurados Esenciales para LLMs</h2>
              <ShareSectionButton sectionId="datos-estructurados" title="datos estructurados" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Implementar <GeoTerm term="schema-org">Schema.org</GeoTerm> y estructuras como <GeoTerm term="faqpage">FAQPage</GeoTerm>, 
              <GeoTerm term="article">Article</GeoTerm>, <GeoTerm term="howto">HowTo</GeoTerm> o <GeoTerm term="breadcrumbList">BreadcrumbList</GeoTerm> 
              permite que los <GeoTerm term="llm">LLMs</GeoTerm> reconozcan la intención y el contexto del contenido.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left p-3 font-semibold border-r border-border">Tipo de contenido</th>
                    <th className="text-left p-3 font-semibold">Marcado recomendado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium border-r border-border">Artículo informativo</td>
                    <td className="p-3">Article + mainEntityOfPage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium border-r border-border">Guía paso a paso</td>
                    <td className="p-3">HowTo</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium border-r border-border">Preguntas y respuestas</td>
                    <td className="p-3">FAQPage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium border-r border-border">Glosario</td>
                    <td className="p-3">DefinedTerm, WebPage</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-border">Página principal</td>
                    <td className="p-3">WebSite, Organization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Technical Implementation */}
          <section id="implementacion-tecnica" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Implementación Técnica</h2>
              <ShareSectionButton sectionId="implementacion-tecnica" title="implementación técnica" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-blue-50/50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Code className="h-5 w-5" />
                    Schema.org y JSON-LD
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-700">
                  <ul className="space-y-2 text-sm">
                    <li>• Implementación de tipos específicos según contenido</li>
                    <li>• Uso de JSON-LD para máxima compatibilidad</li>
                    <li>• Inclusión de propiedades relacionales</li>
                    <li>• Validación con herramientas especializadas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50/50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Zap className="h-5 w-5" />
                    Microformatos y Etiquetas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-700">
                  <ul className="space-y-2 text-sm">
                    <li>• Etiquetas semánticas HTML5</li>
                    <li>• Microformatos para datos específicos</li>
                    <li>• Atributos aria para accesibilidad</li>
                    <li>• Meta tags especializados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-50/50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <BookOpen className="h-5 w-5" />
                    Relaciones Semánticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-purple-700">
                  <ul className="space-y-2 text-sm">
                    <li>• Enlaces internos contextuales</li>
                    <li>• Estructura jerárquica clara</li>
                    <li>• Breadcrumbs semánticos</li>
                    <li>• Agrupación temática de contenidos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-orange-50/50 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <Bot className="h-5 w-5" />
                    Speakable Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-700">
                  <ul className="space-y-2 text-sm">
                    <li>• Marcado speakable para IA de voz</li>
                    <li>• Fragmentos optimizados para citas</li>
                    <li>• Contenido estructurado para síntesis</li>
                    <li>• Optimización para respuestas directas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Content Notice */}
          <section className="mb-16">
            <Card className="bg-yellow-50/50 border-yellow-300">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground italic mb-2">
                  El contenido técnico detallado de este módulo (ejemplos de código, 
                  implementaciones específicas, sistema de testeo y dashboard de visibilidad) 
                  está disponible en el curso completo.
                </p>
                <p className="text-muted-foreground text-sm">
                  Para acceder a toda la información técnica práctica, consulta el material completo del módulo.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Checklist */}
          <section id="checklist-implementacion" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Checklist de Implementación</h2>
              <ShareSectionButton sectionId="checklist-implementacion" title="checklist" />
            </div>

            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed" data-speakable="true">
                <li>Implementación de <GeoTerm term="schema-org">Schema.org</GeoTerm> para tipos de contenido principales</li>
                <li>Uso de <GeoTerm term="json-ld">JSON-LD</GeoTerm> para incrustar datos estructurados</li>
                <li>Definición de microformatos y etiquetas semánticas relevantes</li>
                <li>Establecimiento de relaciones semánticas entre páginas</li>
                <li>Implementación de speakable content para citabilidad vocal</li>
                <li>Sistema de testeo y validación configurado</li>
                <li>Dashboard de visibilidad para auditar citabilidad</li>
                <li>Validación con herramientas especializadas</li>
              </ul>
            </HighlightSnippet>

            <p className="text-muted-foreground leading-relaxed">
              Al implementar correctamente los estándares técnicos y la visibilidad semántica, aumentarás 
              significativamente la capacidad de los <GeoTerm term="llm">LLMs</GeoTerm> para comprender, 
              procesar y citar tu contenido con mayor precisión.
            </p>
          </section>

          {/* LLM Prompt */}
          <section id="prompt-implementacion" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Prompt para Implementación con LLMs</h2>
              <ShareSectionButton sectionId="prompt-implementacion" title="prompt de implementación" />
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes utilizar este prompt para ayudarte a implementar los estándares técnicos esenciales:
            </p>

            <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm font-mono">
{`Actúa como un experto en GEO (Generative Engine Optimization) especializado en estándares técnicos y visibilidad semántica para LLMs.

Tengo una página web con [DESCRIBE TIPO DE CONTENIDO, EJ. ARTÍCULO INFORMATIVO SOBRE UN TEMA]. Quiero implementar datos estructurados para mejorar su comprensión por LLMs.

Por favor:
1. Sugiere el tipo de Schema.org más adecuado para mi contenido.
2. Proporciona un ejemplo de código JSON-LD básico para este tipo de contenido.
3. Explica cómo puedo verificar la implementación y qué propiedades son clave.
4. Recomienda etiquetas semánticas adicionales para maximizar la citabilidad.

Necesito código específico y pasos detallados para la implementación técnica.`}
              </code>
            </HighlightSnippet>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/curso/f5">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F5: Mantenimiento Evolutivo
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso">
                <BookOpen className="h-4 w-4 mr-2" />
                Finalizar Curso GEO
              </Link>
            </Button>
          </div>

          {/* Tools and Resources */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Herramientas Recomendadas</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">
                  Validador de Schema.org
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://developers.google.com/search/docs/structured-data/search-gallery" target="_blank" rel="noopener noreferrer">
                  Galería de Datos Estructurados
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">
                  Test de Resultados Enriquecidos
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/coach">
                  Usar Coach GEO para F6
                </Link>
              </Button>
            </div>
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
                "Introducción al ecosistema técnico GEO",
                "Datos estructurados esenciales para LLMs",
                "Uso de Schema.org y JSON-LD",
                "Microformatos y etiquetas semánticas útiles",
                "Relaciones semánticas entre páginas",
                "Speakable content y citabilidad vocal",
                "Sistema de testeo y visibilidad GEO",
                "Dashboard de visibilidad para auditar citabilidad"
              ],
              "duration": "PT5H",
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

export default ModuloF6Page;
