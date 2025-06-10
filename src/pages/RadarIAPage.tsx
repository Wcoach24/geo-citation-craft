
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";

const RadarIAPage = () => {
  const articles = [
    {
      id: "que-significa-ser-citado-por-ia",
      title: "¿Qué significa ser citado por una IA?",
      subtitle: "Entendiendo la citabilidad en modelos de lenguaje generativo",
      snippet: "Ser citado por una IA implica que tu contenido ha sido integrado en su memoria contextual o recuperado en tiempo real como fuente de autoridad.",
      category: "Fundamentos",
      date: "2025-01-15",
      href: "/radar-ia/que-significa-ser-citado-por-ia"
    },
    {
      id: "muerte-seo-tradicional",
      title: "La muerte del SEO tal y como lo conocíamos",
      subtitle: "Por qué los motores de búsqueda están siendo reemplazados por motores de lenguaje",
      snippet: "El SEO tradicional deja de ser relevante cuando la IA responde sin enlaces y filtra la web por sentido, no por enlaces.",
      category: "Tendencias",
      date: "2025-01-12",
      href: "/radar-ia/muerte-seo-tradicional"
    },
    {
      id: "estructura-web-para-lenguaje",
      title: "Estructura tu web para el lenguaje, no para los algoritmos",
      subtitle: "Principios de diseño que los LLMs comprenden mejor",
      snippet: "Los modelos generativos entienden mejor las páginas bien fragmentadas, con bloques lógicos, semántica clara y datos estructurados.",
      category: "Técnicas GEO",
      date: "2025-01-10",
      href: "/radar-ia/estructura-web-para-lenguaje"
    },
    {
      id: "formato-wikipedia-ia",
      title: "¿Por qué los modelos prefieren textos con formato Wikipedia?",
      subtitle: "El estilo enciclopédico como modelo ideal para la citabilidad",
      snippet: "Las IA priorizan textos que imitan el estilo de Wikipedia: breves, neutrales, bien titulados y estructurados.",
      category: "Casos",
      date: "2025-01-08",
      href: "/radar-ia/formato-wikipedia-ia"
    },
    {
      id: "datos-estructurados-modelos-generativos",
      title: "Los datos estructurados que mejor entienden los modelos generativos",
      subtitle: "Microdatos recomendados para maximizar la citabilidad",
      snippet: "Los modelos comprenden mejor contenido etiquetado como FAQPage, HowTo, Article o SpeakableSpecification.",
      category: "Datos estructurados",
      date: "2025-01-05",
      href: "/radar-ia/datos-estructurados-modelos-generativos"
    },
    {
      id: "geo-vs-seo-diferencias",
      title: "GEO no es SEO: guía rápida para entender la diferencia",
      subtitle: "Tabla comparativa y estrategia de pivote hacia la optimización generativa",
      snippet: "SEO intenta gustar a Google. GEO intenta ser comprendido por modelos de lenguaje y citado por IA.",
      category: "Fundamentos",
      date: "2025-01-03",
      href: "/radar-ia/geo-vs-seo-diferencias"
    }
  ];

  const categories = ["Todos", "Fundamentos", "Tendencias", "Técnicas GEO", "Casos", "Datos estructurados"];

  return (
    <>
      <Helmet>
        <title>Radar IA - esGEO | Observatorio de IA y Optimización Generativa</title>
        <meta name="description" content="Observamos los movimientos del mundo IA para ayudarte a anticipar el futuro del contenido y la optimización generativa." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Radar IA",
            "description": "Observamos los movimientos del mundo IA para ayudarte a anticipar el futuro del contenido",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Radar IA",
                  "item": "/radar-ia"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Radar IA
            </h1>
            
            <HighlightSnippet id="radar-ia-definition" variant="definition" className="mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Observamos los movimientos del mundo IA para ayudarte a anticipar el futuro del contenido.
              </p>
            </HighlightSnippet>

            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "Todos" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent/20 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">
                    {article.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm">
                    {article.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <HighlightSnippet 
                    id={`snippet-${article.id}`} 
                    variant="insight" 
                    className="mb-4 text-sm"
                  >
                    <p><strong>Snippet:</strong> {article.snippet}</p>
                  </HighlightSnippet>

                  <Link to={article.href}>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-primary transition-colors">
                      Leer artículo completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Related Content */}
          <div className="max-w-4xl mx-auto mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Contenido relacionado</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/metodologia">
                <Button variant="ghost" size="sm">
                  Metodología F1-F6
                </Button>
              </Link>
              <Link to="/glosario">
                <Button variant="ghost" size="sm">
                  Glosario GEO
                </Button>
              </Link>
              <Link to="/casos">
                <Button variant="ghost" size="sm">
                  Casos Reales
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RadarIAPage;
