
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, BookOpen, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import { GLOSSARY_TERMS } from "@/data/glossary";

const GlosarioPage = () => {
  // F1-7: metas sociales (og:/twitter:) — se renderiza ANTES del <Helmet> propio
  // para que los valores especificos de la pagina ganen en los tags duplicados.
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Glosario GEO | Términos y Definiciones | esGEO",
    description: "Glosario completo de términos de Generative Engine Optimization (GEO). Definiciones autoritativas para optimización de contenido para IA generativa.",
    canonicalUrl: "https://www.esgeo.ai/glosario",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // F5-2: los términos viven en src/data/glossary.ts (los comparte GeoTerm).
  const glosarioTerms = GLOSSARY_TERMS;

  return (
    <div className="min-h-screen bg-background">
      {socialHelmet}
      <Helmet>
        <title>Glosario GEO | Términos y Definiciones | esGEO</title>
        <meta name="description" content="Glosario completo de términos de Generative Engine Optimization (GEO). Definiciones autoritativas para optimización de contenido para IA generativa." />
        <link rel="canonical" href="https://www.esgeo.ai/glosario" />
        
        <meta name="citation_title" content="Glosario de Generative Engine Optimization (GEO)" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="GEO, Generative Engine Optimization, glosario, definiciones, IA, LLMs" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true'], .definition-card" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["DefinedTermSet", "WebPage"],
            "name": "Glosario de Generative Engine Optimization (GEO)",
            "description": "Conjunto completo de definiciones autoritativas sobre GEO y optimización para modelos de lenguaje generativo",
            "url": "https://www.esgeo.ai/glosario",
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
            "inLanguage": "es-ES",
            "hasDefinedTerm": glosarioTerms.map(term => ({
              "@type": "DefinedTerm",
              "@id": `https://www.esgeo.ai/glosario#${term.id}`,
              "name": term.term,
              "description": term.definition,
              "termCode": term.id,
              "inDefinedTermSet": "https://www.esgeo.ai/glosario"
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
                  "name": "Glosario GEO",
                  "item": "https://www.esgeo.ai/glosario"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ".snippet-block, [data-speakable='true'], .definition-card"
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
                <BreadcrumbPage>Glosario GEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <header className="mb-12 text-center" id="glosario-header">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              GLOSARIO GEO
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Términos y Definiciones
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Definiciones autoritativas para dominar la optimización para IA generativa
            </p>
            <ShareSectionButton sectionId="glosario-header" title="Glosario GEO" />
          </header>

          {/* Introducción */}
          <HighlightSnippet lastModified="2026-07-15" id="glosario-intro" variant="definition" className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Qué es este Glosario?</h2>
              <ShareSectionButton sectionId="glosario-intro" title="introducción al glosario" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Este glosario recopila las definiciones más importantes de Generative Engine Optimization (GEO)</strong>, 
              proporcionando un recurso de referencia fundamental para comprender cómo optimizar contenido para ser citado por 
              modelos de lenguaje como ChatGPT, Perplexity, Claude y Gemini.
            </p>
          </HighlightSnippet>

          {/* Términos por Categoría */}
          <section id="terminos-fundamentales" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Términos Fundamentales</h2>
              <ShareSectionButton sectionId="terminos-fundamentales" title="términos fundamentales" />
            </div>
            <div className="space-y-6">
              {glosarioTerms.filter(term => term.category === "Fundamental").map((term) => (
                <Card key={term.id} id={term.id} className="definition-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-speakable="true">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                      {term.definition}
                    </p>
                    <ShareSectionButton sectionId={term.id} title={term.term} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="terminos-tecnicos" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Términos Técnicos</h2>
              <ShareSectionButton sectionId="terminos-tecnicos" title="términos técnicos" />
            </div>
            <div className="space-y-6">
              {glosarioTerms.filter(term => term.category === "Técnico").map((term) => (
                <Card key={term.id} id={term.id} className="definition-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-speakable="true">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                      {term.definition}
                    </p>
                    <ShareSectionButton sectionId={term.id} title={term.term} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="terminos-estrategicos" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Términos Estratégicos</h2>
              <ShareSectionButton sectionId="terminos-estrategicos" title="términos estratégicos" />
            </div>
            <div className="space-y-6">
              {glosarioTerms.filter(term => term.category === "Estratégico" || term.category === "Redacción").map((term) => (
                <Card key={term.id} id={term.id} className="definition-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-speakable="true">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                      {term.definition}
                    </p>
                    <ShareSectionButton sectionId={term.id} title={term.term} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contenido Relacionado */}
          <section className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Continúa Aprendiendo</h3>
            <p className="text-muted-foreground mb-6">
              Aplica estos conceptos en nuestro curso completo de GEO
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/curso">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Curso Completo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/metodologia">
                  <Search className="h-4 w-4 mr-2" />
                  Metodología GEO
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GlosarioPage;
