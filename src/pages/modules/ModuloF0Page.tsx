import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, FileText, ArrowRight, AlertTriangle, Target, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const ModuloF0Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F0: ¿Necesitas GEO? Diagnóstico Gratuito | Curso GEO - esGEO</title>
        <meta name="description" content="Descubre si tu sitio web necesita optimización para motores generativos. Diagnóstico gratuito y introducción al framework GEO." />
        <link rel="canonical" href="https://esgeo.es/curso/f0" />
        
        <meta name="citation_title" content="Módulo F0: Diagnóstico GEO Gratuito" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f0-diagnostico, #f0-framework, #f0-problemas" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F0: ¿Necesitas GEO? Diagnóstico Gratuito",
            "headline": "Diagnóstico GEO: ¿Tu Sitio Web Está Preparado para la IA?",
            "description": "Evalúa si tu sitio web está optimizado para motores generativos de IA. Diagnóstico gratuito y completo del estado de tu presencia digital ante los LLMs.",
            "url": "https://esgeo.es/curso/f0",
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
            "image": "https://esgeo.es/images/modulo-f0.png",
            "teaches": [
              "Identificación de problemas de visibilidad en IA",
              "Evaluación del estado actual ante LLMs",
              "Comprensión del framework GEO",
              "Priorización de optimizaciones necesarias"
            ],
            "timeRequired": "PT30M",
            "educationalLevel": "Beginner",
            "isAccessibleForFree": true,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f0"
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
                  "name": "Módulo F0: Diagnóstico",
                  "item": "https://esgeo.es/curso/f0"
                }
              ]
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
            
            <Card className="bg-destructive/5 border-destructive/20 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Señales de que necesitas GEO urgentemente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold text-lg">•</span>
                    Tu marca nunca aparece cuando preguntas a ChatGPT sobre tu sector
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold text-lg">•</span>
                    Tienes tráfico web, pero no sabes si la IA te está citando
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold text-lg">•</span>
                    Tus competidores aparecen en respuestas de IA y tú no
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold text-lg">•</span>
                    No tienes datos estructurados ni metadatos actualizados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold text-lg">•</span>
                    Tu sitio no está registrado en Bing Webmaster Tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <p className="text-muted-foreground leading-relaxed">
              Si has identificado 2 o más señales, tu sitio web necesita optimización GEO inmediatamente. 
              Cada día que pasa sin optimizar es tráfico, autoridad y ventas perdidas.
            </p>
          </section>

          {/* El Problema Real */}
          <section id="f0-problemas" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">El Problema Real: La IA No Te Ve</h2>
              <ShareSectionButton sectionId="f0-problemas" title="problemas F0" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-destructive/5 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">❌ Sitio Web Tradicional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>• Optimizado solo para Google</p>
                  <p>• Sin datos estructurados específicos para IA</p>
                  <p>• Contenido no autocontenido</p>
                  <p>• Autoridad no verificable por LLMs</p>
                  <p>• Invisible en respuestas generativas</p>
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-700">✅ Sitio Optimizado para GEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>• Accesible para todos los motores generativos</p>
                  <p>• Contenido estructurado y citable</p>
                  <p>• Autoridad verificable y confiable</p>
                  <p>• Aparece consistentemente en respuestas IA</p>
                  <p>• Tráfico cualificado desde conversaciones IA</p>
                </CardContent>
              </Card>
            </div>

            <HighlightSnippet variant="insight" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                <strong>La diferencia clave:</strong> Los sitios optimizados para GEO no solo aparecen en buscadores, 
                sino que se convierten en la fuente de referencia cuando los usuarios preguntan a la IA sobre su sector.
              </p>
            </HighlightSnippet>
          </section>

          {/* Introducción al Framework GEO */}
          <section id="f0-framework" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">El Framework GEO: Tu Solución Completa</h2>
              <ShareSectionButton sectionId="f0-framework" title="framework F0" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hemos desarrollado el primer framework sistemático para optimizar sitios web para motores generativos. 
              Son 6 módulos progresivos que transformarán tu presencia digital:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">F1 • Accesibilidad Generativa</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Base técnica para que los LLMs puedan acceder y comprender tu contenido
                </CardContent>
              </Card>

              <Card className="bg-purple-500/5 border-purple-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">F2 • Contexto Semántico</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Estructura tu contenido para ser autocontenido y fácilmente citable
                </CardContent>
              </Card>

              <Card className="bg-orange-500/5 border-orange-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">F3 • Autoridad Generativa</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Construye señales de confiabilidad que los LLMs puedan verificar
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">F4 • Validación Conversacional</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Testa y valida tu contenido directamente con modelos de IA
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">F5 • Mantenimiento Generativo</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Sistemas automáticos para mantener tu optimización GEO
                </CardContent>
              </Card>

              <Card className="bg-cyan-500/5 border-cyan-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">F6 • Optimización Técnica</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Configuraciones avanzadas para máximo rendimiento en LLMs
                </CardContent>
              </Card>
            </div>

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
                  <p className="text-sm text-muted-foreground">Empieza con F1 (€10) y avanza módulo a módulo según tus resultados</p>
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
                  <p className="text-sm text-muted-foreground">Acceso completo a F1-F6 con descuento (€50 vs €60)</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/checkout?type=complete">
                      Ver Curso Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
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