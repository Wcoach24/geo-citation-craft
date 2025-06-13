import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, FileText, ArrowRight, ArrowLeft, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const ModuloF1Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F1: Fundamentos de Accesibilidad Generativa | Curso GEO - esGEO</title>
        <meta name="description" content="Asegura que tu contenido web es rastreable, comprendido e indexado por LLMs. El primer paso crítico para ser citado por IA." />
        <link rel="canonical" href="https://esgeo.es/curso/f1" />
        
        <meta name="citation_title" content="Módulo F1: Fundamentos de Accesibilidad Generativa" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f1-objetivo, #f1-componentes, #f1-checklist, #f1-prompt" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F1: Fundamentos de Accesibilidad Generativa",
            "headline": "Módulo F1: Fundamentos de Accesibilidad Generativa",
            "description": "Asegurar que el contenido web está preparado técnica y estructuralmente para ser rastreado, comprendido e indexado por motores de generación de texto. Es el primer filtro y el más crítico en GEO.",
            "url": "https://esgeo.es/curso/f1",
            "datePublished": "2024-06-10",
            "dateModified": "2024-06-10",
            "author": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.es"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.es"
            },
            "image": "https://esgeo.es/images/modulo-f1.png",
            "teaches": [
              "Configuración de robots.txt para bots de IA",
              "HTML semántico para comprensión de LLMs",
              "Implementación de datos estructurados (Schema.org)",
              "Optimización de metadatos para frescura y relevancia",
              "Establecimiento de autoría y autoridad de contenido"
            ],
            "timeRequired": "PT2H",
            "educationalLevel": "Beginner",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "85"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f1"
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
                  "name": "Módulo F1: Accesibilidad Generativa",
                  "item": "https://esgeo.es/curso/f1"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#f1-objetivo, #f1-componentes, #f1-checklist, #f1-prompt"
            },
            "isPartOf": {
              "@type": "Course",
              "name": "Curso GEO Completo",
              "url": "https://esgeo.es/curso"
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
                  <Link to="/curso">Curso GEO</Link>
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

          {/* Header del Módulo */}
          <header className="mb-12 text-center" id="modulo-f1">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="h-4 w-4" />
              MÓDULO F1
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Fundamentos: Accesibilidad Generativa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              "Si un LLM no puede leerte, no puede recomendarte."
            </p>
            <ShareSectionButton sectionId="modulo-f1" title="Módulo F1" />
          </header>

          {/* Objetivo del Módulo */}
          <section id="f1-objetivo" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Objetivo del Módulo</h2>
              <ShareSectionButton sectionId="f1-objetivo" title="objetivo F1" />
            </div>
            <HighlightSnippet variant="definition" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                Este módulo asegura que el contenido web está preparado técnica y estructuralmente para ser
                <GeoTerm term="rastreo"> rastreado</GeoTerm>, <GeoTerm term="comprension-semantica">comprendido</GeoTerm> e indexado por <GeoTerm term="motores-generativos">motores de generación de texto</GeoTerm>.
                Es el primer filtro y el más crítico en <GeoTerm term="geo">GEO</GeoTerm>.
              </p>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Los modelos generativos acceden al contenido tanto durante su entrenamiento como en tiempo real a través de sistemas como RAG. 
              Si tu web no es accesible o no está estructurada correctamente, serás invisible para los usuarios que buscan información a través de estos sistemas.
            </p>
          </section>

          {/* Componentes Clave */}
          <section id="f1-componentes" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Componentes Clave</h2>
              <ShareSectionButton sectionId="f1-componentes" title="componentes F1" />
            </div>
            <div className="grid md:grid-cols-2 gap-6" data-speakable="true">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Indexabilidad y Acceso Técnico</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Configuración óptima de `robots.txt` para bots de IA</li>
                    <li>• Registro en Bing Webmaster Tools y configuración de IndexNow</li>
                    <li>• Resultado: Tu contenido es rastreable y considerado como fuente potencial</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Estructura para Comprensión Semántica</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Uso correcto de HTML semántico y jerarquía de encabezados</li>
                    <li>• Implementación de datos estructurados (Schema.org) relevantes (FAQPage, HowTo, Article)</li>
                    <li>• Resultado: Contenido claro y clasificable por LLMs</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Metadatos Claros y Actualizados</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Fechas de publicación y última revisión visibles y estandarizadas</li>
                    <li>• Meta títulos y descripciones optimizados</li>
                    <li>• Resultado: Señales claras de frescura y confiabilidad</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Autoría y Autoridad Básica</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Firma visible de autor y página "Sobre nosotros" completa</li>
                    <li>• Información de contacto real y perfiles sociales activos</li>
                    <li>• Resultado: La IA asocia tu sitio con una fuente confiable</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Checklist de Implementación */}
          <section id="f1-checklist" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Checklist de Implementación del Módulo F1</h2>
              <ShareSectionButton sectionId="f1-checklist" title="checklist F1" />
            </div>
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed" data-speakable="true">
                <li>Archivo `robots.txt` configurado para permitir bots de IA relevantes</li>
                <li>HTML semántico implementado en todas las páginas importantes</li>
                <li>Schema.org añadido para el tipo de contenido principal</li>
                <li>Fechas de publicación y actualización visibles</li>
                <li>Información de autor completa y enlazada</li>
                <li>Página "Sobre nosotros" detallada y profesional</li>
                <li>Información de contacto visible y funcional</li>
                <li>Sitio registrado en Bing Webmaster Tools</li>
                <li>Sistema IndexNow configurado para notificaciones</li>
                <li>Validación técnica completada sin errores</li>
              </ul>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Al completar este módulo, tu contenido pasará de ser simplemente "visible en buscadores" a ser comprensible y usable por modelos generativos, 
              el primer paso fundamental para aparecer en sus respuestas.
            </p>
          </section>

          {/* Prompt para LLMs */}
          <section id="f1-prompt" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Prompt para Implementación con LLMs</h2>
              <ShareSectionButton sectionId="f1-prompt" title="prompt F1" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes utilizar este prompt con ChatGPT, Claude u otro LLM para ayudarte a implementar los aspectos técnicos de este módulo:
            </p>
            <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm font-mono" data-speakable="true">
{`Actúa como un consultor experto en GEO (Generative Engine Optimization). Necesito implementar las bases técnicas para que mi sitio web sea accesible para modelos de IA generativa.

Mi sitio web es: [DESCRIBE TU SITIO, TEMÁTICA Y PLATAFORMA]

Por favor, ayúdame a:
1. Crear un archivo robots.txt optimizado para permitir el acceso a bots de IA relevantes
2. Generar el código JSON-LD de schema.org apropiado para mi tipo de contenido principal
3. Revisar y mejorar la estructura HTML semántica de mis páginas
4. Implementar correctamente los metadatos y la información de autor

Necesito código específico y pasos detallados que pueda implementar directamente.`}
              </code>
            </HighlightSnippet>
          </section>

          {/* Navegación de Módulos */}
          <div className="flex justify-between items-center mb-16">
            <Button variant="outline" asChild>
              <Link to="/curso">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Curso
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f2">
                Siguiente Módulo: F2
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contenido Relacionado */}
          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Recursos Complementarios</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer">
                  Verificador de robots.txt (Google)
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">
                  Validador de Schema.org
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.indexnow.org/" target="_blank" rel="noopener noreferrer">
                  Guía de IndexNow
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/coach">
                  <Bot className="mr-2 h-4 w-4" />
                  Usar Coach GEO para F1
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModuloF1Page;
