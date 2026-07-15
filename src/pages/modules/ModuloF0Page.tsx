import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import GeoAssessmentTest from "@/components/GeoAssessmentTest";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, FileText, ArrowRight, AlertTriangle, Target, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import BuyButton from "@/components/BuyButton";
import Footer from "@/components/Footer";

const ModuloF0Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F0: ¿Necesitas GEO? Diagnóstico Gratuito | Curso GEO - esGEO</title>
        <meta name="description" content="Descubre si tu sitio web necesita optimización para motores generativos. Diagnóstico gratuito e introducción al framework GEO." />
        <link rel="canonical" href="https://www.esgeo.ai/curso/f0" />
        
        <meta name="citation_title" content="Módulo F0: Diagnóstico GEO Gratuito" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f0-diagnostico, #f0-framework, #f0-problemas" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F0: ¿Necesitas GEO? Diagnóstico Gratuito",
            "headline": "Diagnóstico GEO: ¿Tu Sitio Web Está Preparado para la IA?",
            "description": "Evalúa si tu sitio web está optimizado para motores generativos de IA. Diagnóstico gratuito y completo del estado de tu presencia digital ante los LLMs.",
            "url": "https://www.esgeo.ai/curso/f0",
            "datePublished": "2024-06-10",
            "dateModified": "2024-06-10",
            "author": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://www.esgeo.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://www.esgeo.ai"
            },
            "image": "https://www.esgeo.ai/images/modulo-f0.png",
            "teaches": [
              "Identificación de problemas de visibilidad en IA",
              "Evaluación del estado actual ante LLMs",
              "Comprensión del framework GEO",
              "Priorización de optimizaciones necesarias"
            ],
            "timeRequired": "PT30M",
            "educationalLevel": "Inicial",
            "isAccessibleForFree": true,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.esgeo.ai/curso/f0"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.esgeo.ai/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Curso GEO",
                  "item": "https://www.esgeo.ai/curso"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Módulo F0: Diagnóstico",
                  "item": "https://www.esgeo.ai/curso/f0"
                }
              ]
            }
          }) }} />
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
                <BreadcrumbPage>Módulo F0</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header del Módulo */}
          <header className="mb-12 text-center" id="modulo-f0">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="h-4 w-4" />
              MÓDULO F0 - GRATIS
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              ¿Necesitas GEO? Diagnóstico Gratuito
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              "Descubre si tu sitio web es invisible para la IA."
            </p>
            <Badge variant="secondary" className="mb-6">
              <Star className="mr-2 h-4 w-4" />
              Acceso completo y gratuito
            </Badge>
            <ShareSectionButton sectionId="modulo-f0" title="Módulo F0" />
          </header>

          {/* Test Interactivo GEO */}
          <GeoAssessmentTest />

          {/* Diagnóstico Rápido */}
          <section id="f0-diagnostico" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Diagnóstico Rápido: ¿Tu Web Es Visible para la IA?</h2>
              <ShareSectionButton sectionId="f0-diagnostico" title="diagnóstico F0" />
            </div>
            <HighlightSnippet variant="insight" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                La mayoría de sitios web están optimizados para <GeoTerm term="seo">SEO tradicional</GeoTerm>, pero son completamente invisibles para 
                <GeoTerm term="motores-generativos">modelos generativos de IA</GeoTerm> como ChatGPT, Claude o Perplexity. 
                Esto significa que pierden millones de consultas diarias.
              </p>
            </HighlightSnippet>

            <HighlightSnippet variant="stat" className="mb-6">
              <p className="text-lg leading-relaxed text-center" data-speakable="true">
                <strong>Resultado esperado:</strong> Incremento del 300-500% en menciones y citas por IA en los primeros 90 días.
              </p>
            </HighlightSnippet>
          </section>

          {/* Tu Siguiente Paso */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">Tu Siguiente Paso: Comienza la Implementación</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Ahora que sabes por qué necesitas GEO, es momento de implementar la solución. 
              El Módulo F1 te dará la base técnica fundamental que todo sitio necesita.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Implementación Individual
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Lee F1 gratis y aplica lo que puedas por tu cuenta. Sin pagar nada.</p>
                  <Button asChild className="w-full">
                    <Link to="/curso/f1">
                      Empezar con F1: Accesibilidad
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Framework Completo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Los 5 módulos (F1 a F5) en PDF. 47 € de pago único.</p>
                  <BuyButton source="modulo-f0" className="btn-cta w-full text-sm">
                    Comprar el curso — 47 €
                  </BuyButton>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navegación */}
          <div className="flex justify-between items-center mb-16">
            <Button variant="outline" asChild>
              <Link to="/curso">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Volver al Curso
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f1">
                Comenzar con F1
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

export default ModuloF0Page;