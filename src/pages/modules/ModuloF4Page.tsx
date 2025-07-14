
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import PremiumContentGate from "@/components/PremiumContentGate";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Target, ArrowRight, ArrowLeft, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF4Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F4: Validación Conversacional | Curso GEO - esGEO</title>
        <meta name="description" content="Aprende a verificar si los motores de generación de contenido (LLMs) están utilizando, citando o parafraseando tu contenido en sus respuestas y cómo actuar en consecuencia." />
        <link rel="canonical" href="https://esgeo.es/curso/f4" />
        
        <meta name="citation_title" content="Módulo F4: Validación Conversacional" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f4-objetivo, #f4-tecnicas-validacion, #f4-acciones-post-validacion, #f4-checklist, .snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F4: Validación Conversacional",
            "headline": "Módulo F4: Validación Conversacional",
            "description": "Verifica si los motores de generación de contenido (ChatGPT, Perplexity, Claude, Bard...) están utilizando, citando o parafraseando tu contenido en sus respuestas. Si no apareces en los resultados, este módulo te ayudará a detectar por qué y a implementar acciones correctivas específicas.",
            "url": "https://esgeo.es/curso/f4",
            "datePublished": "2025-06-12",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.es"
            },
            "image": "https://esgeo.es/images/modulo-f4.png",
            "teaches": [
              "Técnicas de validación con LLMs con navegación (Perplexity.ai, ChatGPT, Claude)",
              "Estructura de prompts de validación (temáticos, de marca, específicos, comparativos)",
              "Análisis de respuestas de LLMs (citas explícitas, parafraseo, estilo)",
              "Validación indirecta (reconocimiento de autoría, enfoque)",
              "Implementación de un sistema de seguimiento de validaciones",
              "Acciones de iteración post-validación (refuerzo, mejora de autoridad, revisión de fundamentos, cambio de enfoque)"
            ],
            "timeRequired": "PT3H",
            "educationalLevel": "Intermediate",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "55"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f4"
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
                  "name": "Módulo F4: Validación Conversacional",
                  "item": "https://esgeo.es/curso/f4"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#f4-objetivo, #f4-tecnicas-validacion, #f4-acciones-post-validacion, #f4-checklist"
            },
            "courseCode": "GEO-F4",
            "inLanguage": "es-ES",
            "duration": "PT3H",
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
                <BreadcrumbPage>Módulo F4</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header del Módulo */}
          <header className="mb-12 text-center" id="f4-header">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 border border-orange-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4" />
              MÓDULO F4
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Validación Conversacional
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              "GEO no es un SEO técnico, es un diálogo. El test final es: ¿te cita la IA cuando alguien pregunta?"
            </p>
            <ShareSectionButton sectionId="f4-header" title="Módulo F4" className="mx-auto" />
          </header>

          {/* Objetivo del Módulo */}
          <section id="f4-objetivo" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Objetivo del Módulo</h2>
              <ShareSectionButton sectionId="f4-objetivo" title="objetivo del módulo" />
            </div>
            <HighlightSnippet variant="definition" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                Verificar si los <GeoTerm term="motores-generativos">motores de generación de contenido</GeoTerm> (<GeoTerm term="chatgpt">ChatGPT</GeoTerm>, <GeoTerm term="perplexity">Perplexity</GeoTerm>, <GeoTerm term="claude">Claude</GeoTerm>, Bard...) están utilizando, citando o parafraseando tu contenido en sus respuestas. Si no apareces en los resultados, este módulo te ayudará a detectar por qué y a implementar acciones correctivas específicas.
              </p>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              El posicionamiento en <GeoTerm term="motores-generativos">motores generativos</GeoTerm> es fundamentalmente diferente al <GeoTerm term="seo">SEO</GeoTerm> tradicional. En SEO tradicional, el éxito se mide por tu posición en una lista de resultados visible. En <GeoTerm term="geo">GEO</GeoTerm>, el éxito se mide por tu inclusión (explícita o implícita) en una síntesis de fuentes seleccionadas y reformuladas. La única forma de saber si estás "posicionado" en GEO es preguntándole directamente a los modelos.
            </p>
          </section>

          {/* Premium Content Gate - F4 */}
          <PremiumContentGate
            moduleNumber="Módulo F4"
            moduleName="Validación Conversacional"
            previewSections={["Objetivo del Módulo"]}
            fullContentSections={6}
            className="mb-12"
          />

          {/* Navigation */}
          <div className="flex justify-between items-center mb-16">
            <Button variant="outline" asChild>
              <Link to="/curso/f3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Módulo Anterior: F3
              </Link>
            </Button>
            <Button asChild>
              <Link to="/checkout">
                Desbloquear F4 Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contenido Relacionado - Preview */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Vista Previa del Contenido Premium</h3>
            <div className="text-center space-y-2 text-muted-foreground">
              <p>✓ Metodología completa de targeting generativo</p>
              <p>✓ Herramientas de análisis de consultas</p>
              <p>✓ Estrategias de optimización de contenido</p>
              <p>✓ Casos prácticos de implementación</p>
              <Button variant="outline" size="sm" asChild className="mt-4">
                <Link to="/checkout">Acceder al Contenido Completo</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModuloF4Page;
