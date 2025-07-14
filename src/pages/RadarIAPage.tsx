
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Radar, Calendar, ArrowRight, TrendingUp, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const RadarIAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: "que-significa-ser-citado-por-ia",
      title: "¿Qué significa ser citado por IA?",
      description: "Análisis profundo sobre la importancia de la citabilidad en el ecosistema de IA generativa",
      date: "2024-06-10",
      category: "Fundamentos",
      readTime: "5 min",
      featured: true
    },
    {
      id: "muerte-seo-tradicional",
      title: "La muerte del SEO tradicional",
      description: "Por qué las estrategias SEO clásicas no funcionan con modelos generativos",
      date: "2024-06-09",
      category: "Tendencias",
      readTime: "7 min",
      featured: true
    },
    {
      id: "estructura-web-para-lenguaje",
      title: "Estructura web para comprensión de lenguaje",
      description: "Cómo organizar el contenido para maximizar la comprensión por LLMs",
      date: "2024-06-08",
      category: "Técnico",
      readTime: "6 min",
      featured: false
    },
    {
      id: "formato-wikipedia-ia",
      title: "El formato Wikipedia y la IA",
      description: "Por qué Wikipedia es el formato ideal para contenido citeable por IA",
      date: "2024-06-07",
      category: "Estrategia",
      readTime: "4 min",
      featured: false
    },
    {
      id: "datos-estructurados-modelos-generativos",
      title: "Datos estructurados para modelos generativos",
      description: "Implementación avanzada de Schema.org para optimización GEO",
      date: "2024-06-06",
      category: "Técnico",
      readTime: "8 min",
      featured: false
    },
    {
      id: "geo-vs-seo-diferencias",
      title: "GEO vs SEO: Guía rápida de diferencias",
      description: "Comparativa práctica entre metodologías tradicionales y generativas",
      date: "2024-06-05",
      category: "Fundamentos",
      readTime: "3 min",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Radar IA | Tendencias y Análisis GEO | esGEO</title>
        <meta name="description" content="Análisis actualizado sobre tendencias en IA generativa, cambios en LLMs y nuevas técnicas de Generative Engine Optimization (GEO)." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia" />
        
        <meta name="citation_title" content="Radar IA - Análisis de Tendencias en GEO" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024-01-01" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="Radar IA, tendencias, GEO, LLMs, inteligencia artificial, análisis, ChatGPT, Perplexity, Claude" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Blog", "WebPage"],
            "name": "Radar IA - Análisis de Tendencias en GEO",
            "description": "Análisis actualizado sobre tendencias en IA generativa, cambios en LLMs y nuevas técnicas de Generative Engine Optimization",
            "url": "https://esgeo.ai/radar-ia",
            "datePublished": "2024-01-01",
            "dateModified": "2024-12-15",
            "author": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.ai"
            },
            "inLanguage": "es-ES",
            "blogPost": articles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.description,
              "url": `https://esgeo.ai/radar-ia/${article.id}`,
              "datePublished": article.date,
              "dateModified": "2024-12-15",
              "author": {
                "@type": "Organization",
                "name": "esGEO"
              },
              "publisher": {
                "@type": "Organization",
                "name": "esGEO"
              },
              "articleSection": article.category,
              "wordCount": parseInt(article.readTime) * 200,
              "image": `https://esgeo.ai/images/radar-ia/${article.id}.png`
            })),
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://esgeo.ai/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Radar IA",
                  "item": "https://esgeo.ai/radar-ia"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ".snippet-block, [data-speakable='true']"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          
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
                <BreadcrumbPage>Radar IA</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <header className="mb-12 text-center" id="radar-header">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Radar className="h-4 w-4" />
              RADAR IA
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Tendencias y Análisis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Análisis actualizado sobre el ecosistema de IA generativa y técnicas GEO
            </p>
            <ShareSectionButton sectionId="radar-header" title="Radar IA" />
          </header>

          {/* Introducción */}
          <HighlightSnippet id="radar-intro" variant="definition" className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Qué es el Radar IA?</h2>
              <ShareSectionButton sectionId="radar-intro" title="introducción al radar" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>El Radar IA es nuestro centro de análisis continuo sobre el ecosistema de IA generativa.</strong> 
              Aquí documentamos cambios en modelos como ChatGPT, Perplexity, Claude y Gemini, analizamos nuevas 
              técnicas de optimización y compartimos insights sobre el futuro de la búsqueda y la citabilidad.
            </p>
          </HighlightSnippet>

          {/* Artículos Destacados */}
          <section id="articulos-destacados" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Artículos Destacados</h2>
              <ShareSectionButton sectionId="articulos-destacados" title="artículos destacados" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {articles.filter(article => article.featured).map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('es-ES')}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime} lectura</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/radar-ia/${article.id}`}>
                          Leer artículo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Todos los Artículos */}
          <section id="todos-articulos" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Todos los Artículos</h2>
              <ShareSectionButton sectionId="todos-articulos" title="todos los artículos" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter(article => !article.featured).map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString('es-ES')}
                      </span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/radar-ia/${article.id}`}>
                          Leer
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Categorías */}
          <section id="categorias" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Explora por Categorías</h2>
              <ShareSectionButton sectionId="categorias" title="categorías" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center p-6">
                <Brain className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fundamentos</h3>
                <p className="text-sm text-muted-foreground">Conceptos básicos de GEO</p>
              </Card>
              <Card className="text-center p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Tendencias</h3>
                <p className="text-sm text-muted-foreground">Cambios en el ecosistema</p>
              </Card>
              <Card className="text-center p-6">
                <Zap className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Técnico</h3>
                <p className="text-sm text-muted-foreground">Implementación práctica</p>
              </Card>
              <Card className="text-center p-6">
                <Radar className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Estrategia</h3>
                <p className="text-sm text-muted-foreground">Planificación y tácticas</p>
              </Card>
            </div>
          </section>

          {/* Contenido Relacionado */}
          <section className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Aplica lo que Aprendes</h3>
            <p className="text-muted-foreground mb-6">
              Usa estos insights en tu estrategia GEO
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/curso">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Curso Completo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/metodologia">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Ver Metodología
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RadarIAPage;
