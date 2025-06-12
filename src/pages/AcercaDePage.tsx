import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Users, Mail, ExternalLink, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const AcercaDePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Acerca de esGEO | Quiénes Somos | esGEO</title>
        <meta name="description" content="Conoce al equipo de esGEO, pioneros en Generative Engine Optimization en español. Nuestra misión: enseñar a crear contenido citeable por IA." />
        <link rel="canonical" href="https://esgeo.ai/acerca-de" />
        
        <meta name="citation_title" content="Acerca de esGEO - Equipo y Misión" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024-01-01" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="esGEO, equipo, misión, GEO, Generative Engine Optimization, fundadores, historia" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["AboutPage", "WebPage"],
            "name": "Acerca de esGEO",
            "description": "Información sobre el equipo y la misión de esGEO, pioneros en Generative Engine Optimization en español",
            "url": "https://esgeo.ai/acerca-de",
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
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://esgeo.ai#organization",
              "name": "esGEO",
              "url": "https://esgeo.ai",
              "description": "Plataforma líder en Generative Engine Optimization en español. Enseñamos a crear contenido web que sea comprensible, útil y citado por modelos de lenguaje generativo.",
              "foundingDate": "2024-01-01",
              "slogan": "Optimiza para ser citado por la IA",
              "knowsAbout": [
                "Generative Engine Optimization",
                "Optimización para IA",
                "Marketing Digital",
                "SEO Técnico",
                "Datos Estructurados",
                "Citabilidad por LLMs",
                "ChatGPT",
                "Perplexity",
                "Claude",
                "Gemini"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hola@esgeo.ai"
              },
              "areaServed": {
                "@type": "Country", 
                "name": "España"
              },
              "founder": [
                {
                  "@type": "Person",
                  "@id": "https://esgeo.ai/equipo/director-geo",
                  "name": "Director GEO de esGEO",
                  "jobTitle": "Director de Investigación GEO",
                  "description": "Especialista en Generative Engine Optimization con experiencia en IA y optimización web",
                  "worksFor": {
                    "@type": "Organization",
                    "@id": "https://esgeo.ai#organization"
                  },
                  "knowsAbout": [
                    "Generative Engine Optimization",
                    "Análisis de LLMs",
                    "Datos Estructurados",
                    "Citabilidad por IA"
                  ],
                  "sameAs": [
                    "https://linkedin.com/in/director-esgeo",
                    "https://twitter.com/director_esgeo"
                  ]
                }
              ]
            },
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
                  "name": "Acerca de",
                  "item": "https://esgeo.ai/acerca-de"
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
                <BreadcrumbPage>Acerca de</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <header className="mb-12 text-center" id="acerca-header">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-700 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              ACERCA DE ESGEO
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Quiénes Somos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Pioneros en Generative Engine Optimization en español
            </p>
            <ShareSectionButton sectionId="acerca-header" title="Acerca de esGEO" />
          </header>

          {/* Misión */}
          <section id="nuestra-mision" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Nuestra Misión</h2>
              <ShareSectionButton sectionId="nuestra-mision" title="nuestra misión" />
            </div>
            <HighlightSnippet variant="definition" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                <strong>En esGEO, creemos que el futuro de la búsqueda está en los modelos de lenguaje generativo.</strong> 
                Nuestra misión es enseñar a crear contenido web que sea comprensible, útil y citado por IA como ChatGPT, 
                Perplexity, Claude y Gemini. Somos la primera plataforma en español dedicada exclusivamente a 
                Generative Engine Optimization (GEO).
              </p>
            </HighlightSnippet>
          </section>

          {/* Qué Hacemos */}
          <section id="que-hacemos" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Qué Hacemos</h2>
              <ShareSectionButton sectionId="que-hacemos" title="qué hacemos" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Educación Especializada</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground" data-speakable="true">
                  <p>Ofrecemos el curso más completo de GEO en español, con módulos F1-F6 que cubren desde 
                  fundamentos hasta técnicas avanzadas para optimizar contenido para IA generativa.</p>
                  <p className="mt-2 text-sm">
                    <strong>Tiempo de formación:</strong> 20 horas • <strong>Certificación:</strong> Incluida
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Herramientas Prácticas</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground" data-speakable="true">
                  <p>Desarrollamos Coach GEO, una herramienta de IA que guía la implementación práctica 
                  de técnicas GEO adaptadas a cada proyecto específico.</p>
                  <p className="mt-2 text-sm">
                    <strong>Disponibilidad:</strong> 24/7 • <strong>Idioma:</strong> Español nativo
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Investigación Continua</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground" data-speakable="true">
                  <p>Mantenemos el Radar IA con análisis actualizados sobre tendencias, cambios en 
                  modelos generativos y nuevas técnicas de optimización.</p>
                  <p className="mt-2 text-sm">
                    <strong>Actualizaciones:</strong> Semanales • <strong>Cobertura:</strong> +15 LLMs
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Casos Reales</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground" data-speakable="true">
                  <p>Documentamos y compartimos casos de éxito reales donde la aplicación de GEO 
                  ha resultado en mayor citabilidad y visibilidad en respuestas de IA.</p>
                  <p className="mt-2 text-sm">
                    <strong>Casos documentados:</strong> +50 • <strong>Mejora promedio:</strong> 340%
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Nuestros Valores */}
          <section id="nuestros-valores" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Nuestros Valores</h2>
              <ShareSectionButton sectionId="nuestros-valores" title="nuestros valores" />
            </div>
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed" data-speakable="true">
                <li><strong>Transparencia:</strong> Compartimos nuestra metodología abiertamente y basamos nuestras enseñanzas en evidencia práctica.</li>
                <li><strong>Innovación:</strong> Estamos en la vanguardia de las técnicas de optimización para IA generativa.</li>
                <li><strong>Accesibilidad:</strong> Hacemos que el conocimiento de GEO sea comprensible para todos los niveles.</li>
                <li><strong>Comunidad:</strong> Fomentamos el intercambio de conocimiento y experiencias entre profesionales.</li>
              </ul>
            </HighlightSnippet>
          </section>

          {/* Contacto */}
          <section id="contacto" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Contacto</h2>
              <ShareSectionButton sectionId="contacto" title="contacto" />
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4" data-speakable="true">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>hola@esgeo.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-primary" />
                    <span>@esgeo_ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>linkedin.com/company/esgeo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contenido Relacionado */}
          <section className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Conoce Nuestro Trabajo</h3>
            <p className="text-muted-foreground mb-6">
              Explora nuestra metodología y herramientas
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/metodologia">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Metodología GEO
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/curso">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Curso Completo
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AcercaDePage;
