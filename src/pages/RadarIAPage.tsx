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
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const RadarIAPage = () => {
  // F1-7: metas sociales (og:/twitter:) — se renderiza ANTES del <Helmet> propio
  // para que los valores especificos de la pagina ganen en los tags duplicados.
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "GEO e IA Generativa: Guías, Análisis y Tendencias 2026 | esGEO Radar",
    description: "Todo sobre GEO (Generative Engine Optimization) e IA generativa: qué es GEO, GEO vs SEO, cómo ser citado por ChatGPT y Perplexity. Artículos y guías actualizadas.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: "que-significa-ser-citado-por-ia",
      title: "¿Qué significa ser citado por IA?",
      description: "Análisis profundo sobre la importancia de la citabilidad en el ecosistema de IA generativa",
      date: "2025-01-15",
      category: "Fundamentos",
      readTime: "5 min",
      featured: true
    },
    {
      id: "muerte-seo-tradicional",
      title: "La muerte del SEO tradicional",
      description: "Por qué las estrategias SEO clásicas no funcionan con modelos generativos",
      date: "2025-01-12",
      category: "Tendencias",
      readTime: "7 min",
      featured: true
    },
    {
      id: "estructura-web-para-lenguaje",
      title: "Estructura web para comprensión de lenguaje",
      description: "Cómo organizar el contenido para maximizar la comprensión por LLMs",
      date: "2025-01-10",
      category: "Técnico",
      readTime: "6 min",
      featured: false
    },
    {
      id: "formato-wikipedia-ia",
      title: "El formato Wikipedia y la IA",
      description: "Por qué Wikipedia es el formato ideal para contenido citeable por IA",
      date: "2025-01-08",
      category: "Estrategia",
      readTime: "4 min",
      featured: false
    },
    {
      id: "datos-estructurados-modelos-generativos",
      title: "Datos estructurados para modelos generativos",
      description: "Implementación avanzada de Schema.org para optimización GEO",
      date: "2025-01-05",
      category: "Técnico",
      readTime: "8 min",
      featured: false
    },
    {
      id: "geo-vs-seo-diferencias",
      title: "GEO vs SEO: Guía rápida de diferencias",
      description: "Comparativa práctica entre metodologías tradicionales y generativas",
      date: "2025-01-03",
      category: "Fundamentos",
      readTime: "3 min",
      featured: false
    },
    {
      id: "que-es-geo-guia-completa",
      title: "Qué es GEO: guía completa",
      description: "Todo sobre Generative Engine Optimization: definición, origen y cómo aplicarlo",
      date: "2026-03-20",
      category: "Fundamentos",
      readTime: "12 min",
      featured: true
    },
    {
      id: "como-hacer-que-chatgpt-cite-tu-web",
      title: "Cómo hacer que ChatGPT cite tu web",
      description: "Pasos concretos para convertirte en fuente citable por ChatGPT",
      date: "2026-03-20",
      category: "Técnico",
      readTime: "8 min",
      featured: false
    },
    {
      id: "optimizar-web-para-perplexity",
      title: "Cómo optimizar tu web para Perplexity",
      description: "Qué prioriza Perplexity al citar fuentes y cómo aprovecharlo",
      date: "2026-03-20",
      category: "Técnico",
      readTime: "8 min",
      featured: false
    },
    {
      id: "como-aparecer-en-ai-overviews-google-gemini",
      title: "Cómo aparecer en los AI Overviews de Google (y en Gemini)",
      description: "Qué son, cómo eligen fuentes y los 7 pasos para que te citen. Datos 2026",
      date: "2026-07-15",
      category: "Técnico",
      readTime: "9 min",
      featured: true
    },
    {
      id: "que-es-llms-txt",
      title: "Qué es llms.txt y cómo crearlo paso a paso",
      description: "Definición, estructura y plantilla descargable. Con lectura honesta de su adopción real",
      date: "2026-07-15",
      category: "Técnico",
      readTime: "8 min",
      featured: false
    },
    {
      id: "geo-aeo-llmo-seo-que-termino-usar",
      title: "GEO vs AEO vs LLMO vs SEO para IA: qué término usar",
      description: "Cuatro siglas para el mismo cambio: qué significa cada una y cuál conviene usar",
      date: "2026-07-15",
      category: "Fundamentos",
      readTime: "7 min",
      featured: false
    },
    {
      id: "paper-geo-princeton-estudio",
      title: "El estudio que fundó el GEO: qué demostró el paper de Princeton",
      description: "El paper de Princeton (arXiv 2023, KDD 2024) acuñó el GEO y midió hasta un 40% más de visibilidad con citas, datos y fuentes",
      date: "2026-07-20",
      category: "Fundamentos",
      readTime: "8 min",
      featured: true
    },
    {
      id: "checklist-geo-25-puntos",
      title: "Checklist GEO de 25 puntos para auditar tu web (2026)",
      description: "Checklist accionable agrupada por las 5 dimensiones del framework HABLA, con el porqué y cómo verificar cada punto",
      date: "2026-07-20",
      category: "Técnico",
      readTime: "11 min",
      featured: true
    },
    {
      id: "geo-en-wordpress",
      title: "GEO en WordPress: cómo hacer que la IA cite tu web",
      description: "Schema con Yoast o Rank Math, HTML semántico, primer párrafo respondible, llms.txt y robots.txt para bots de IA",
      date: "2026-07-20",
      category: "Técnico",
      readTime: "9 min",
      featured: false
    },
    {
      id: "optimizar-web-para-claude",
      title: "Cómo optimizar tu web para que Claude te cite",
      description: "Claude puede consultar la web y su rastreador se identifica como ClaudeBot: qué valora al citar y cómo preparar tu web",
      date: "2026-07-20",
      category: "Técnico",
      readTime: "9 min",
      featured: false
    },
    {
      id: "geo-local-negocios",
      title: "GEO local: cómo hacer que la IA recomiende tu negocio en tu ciudad",
      description: "Aplica GEO a negocios locales para que ChatGPT, Perplexity, Gemini y AI Overviews te recomienden en tu zona",
      date: "2026-07-20",
      category: "Estrategia",
      readTime: "8 min",
      featured: false
    },
    {
      id: "geo-para-ecommerce",
      title: "GEO para ecommerce: que la IA recomiende tus productos",
      description: "Schema Product, fichas con texto real, comparativas y FAQ para que la IA cite tus productos",
      date: "2026-07-20",
      category: "Estrategia",
      readTime: "8 min",
      featured: false
    },
    {
      id: "herramientas-geo-2026",
      title: "Herramientas GEO en 2026: qué tipo de herramienta hace qué",
      description: "No hay una herramienta que lo haga todo: categorías de herramienta GEO y qué problema resuelve cada una",
      date: "2026-07-20",
      category: "Recursos",
      readTime: "9 min",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {socialHelmet}
      <Helmet>
        <title>GEO e IA Generativa: Guías, Análisis y Tendencias 2026 | esGEO Radar</title>
        <meta name="description" content="Todo sobre GEO (Generative Engine Optimization) e IA generativa: qué es GEO, GEO vs SEO, cómo ser citado por ChatGPT y Perplexity. Artículos y guías actualizadas." />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia" />
        
        
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Blog", "WebPage"],
            "name": "Radar IA - Análisis de Tendencias en GEO",
            "description": "Análisis actualizado sobre tendencias en IA generativa, cambios en LLMs y nuevas técnicas de Generative Engine Optimization",
            "url": "https://www.esgeo.ai/radar-ia",
            "datePublished": "2025-01-03",
            "dateModified": "2026-07-15",
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
            "inLanguage": "es-ES",
            "blogPost": articles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.description,
              "url": `https://www.esgeo.ai/radar-ia/${article.id}`,
              "datePublished": article.date,
              "dateModified": "2026-07-15",
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
              "image": `https://www.esgeo.ai/images/radar-ia/${article.id}.png`
            })),
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
                  "name": "Radar IA",
                  "item": "https://www.esgeo.ai/radar-ia"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ".snippet-block, [data-speakable='true']"
            }
          })}</script>
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
            <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
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
          <HighlightSnippet lastModified="2026-07-15" id="radar-intro" variant="definition" className="mb-12">
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
            {/* 4 artículos no destacados: grid-2 (2×2, sin hueco) */}
            <div className="grid md:grid-cols-2 gap-6">
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
                <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fundamentos</h3>
                <p className="text-sm text-muted-foreground">Conceptos básicos de GEO</p>
              </Card>
              <Card className="text-center p-6">
                <TrendingUp className="h-8 w-8 text-success mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Tendencias</h3>
                <p className="text-sm text-muted-foreground">Cambios en el ecosistema</p>
              </Card>
              <Card className="text-center p-6">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Técnico</h3>
                <p className="text-sm text-muted-foreground">Implementación práctica</p>
              </Card>
              <Card className="text-center p-6">
                <Radar className="h-8 w-8 text-warning mx-auto mb-3" />
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