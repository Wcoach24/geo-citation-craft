import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import PremiumContentGate from "@/components/PremiumContentGate";
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              Los modelos generativos acceden al contenido tanto durante su entrenamiento como en tiempo real a través de sistemas como RAG. 
              Si tu web no es accesible o no está estructurada correctamente, serás invisible para los usuarios que buscan información a través de estos sistemas.
            </p>
            
            <PremiumContentGate 
              moduleNumber="F1"
              moduleName="Fundamentos: Accesibilidad Generativa"
              previewSections={[
                "Objetivo del módulo",
                "Visión general de los componentes clave"
              ]}
              fullContentSections={8}
              className="mt-8"
            />
          </section>

          {/* Preview de Contenido Premium */}
          <div className="mb-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Vista Previa del Contenido Premium</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <h4 className="font-medium">✅ Incluido en F1:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Checklist completo de implementación</li>
                  <li>• Configuración detallada de robots.txt</li>
                  <li>• Plantillas de datos estructurados</li>
                  <li>• Prompt listo para usar con LLMs</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🎯 Resultados esperados:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Contenido accesible para LLMs</li>
                  <li>• Base técnica sólida para GEO</li>
                  <li>• Preparación para módulos F2-F6</li>
                  <li>• Implementación en 2-3 horas</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/checkout?type=module&module=f1">
                  Acceder al Módulo F1 - €10
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navegación de Módulos */}
          <div className="flex justify-between items-center mb-16">
            <Button variant="outline" asChild>
              <Link to="/curso/f0">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a F0
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/checkout?type=complete">
                Ver Curso Completo F1-F6
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModuloF1Page;
