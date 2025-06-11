
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";

const QueSIgnificaSerCitadoPorIA = () => {
  return (
    <>
      <Helmet>
        <title>¿Qué significa ser citado por una IA? | Radar IA - esGEO</title>
        <meta name="description" content="Entendiendo la citabilidad en modelos de lenguaje generativo y cómo optimizar tu contenido para ser citado por IA." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/que-significa-ser-citado-por-ia" />
        
        <meta name="citation_title" content="¿Qué significa ser citado por una IA?" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2025-01-15" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="citabilidad, IA, citación, modelos de lenguaje, ChatGPT, Perplexity, Claude, GEO" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage", "FAQPage"],
            "headline": "¿Qué significa ser citado por una IA?",
            "description": "Entendiendo la citabilidad en modelos de lenguaje generativo",
            "url": "https://esgeo.ai/radar-ia/que-significa-ser-citado-por-ia",
            "datePublished": "2025-01-15",
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
            "image": "https://esgeo.ai/images/radar-ia/que-significa-ser-citado-por-ia.png",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.ai/radar-ia/que-significa-ser-citado-por-ia"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué significa ser citado por una IA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ser citado por una IA implica que tu contenido ha sido integrado en su memoria contextual o recuperado en tiempo real como fuente de autoridad. La IA menciona o reproduce tu información cuando responde preguntas relacionadas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuáles son los tipos de citación por IA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Existen tres tipos: Citación directa (el modelo menciona explícitamente tu contenido), Citación implícita (reproduce tu información sin mencionar la fuente), y Recomendación (sugiere tu contenido como recurso adicional)."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo puedo verificar si una IA me cita?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para verificar citación: 1) Realiza preguntas específicas sobre tu expertise en diferentes modelos, 2) Busca menciones de tu marca o fragmentos únicos, 3) Documenta respuestas y analiza patrones, 4) Ajusta tu contenido basándote en resultados."
                }
              },
              {
                "@type": "Question",
                "name": "¿En qué se diferencia ser citado por IA del SEO tradicional?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mientras que el SEO busca atraer clics a tu sitio, GEO busca ser la respuesta definitiva que un modelo citará. El objetivo es la comprensión y citación, no el tráfico web."
                }
              }
            ],
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "¿Qué significa ser citado por una IA?",
                  "item": "https://esgeo.ai/radar-ia/que-significa-ser-citado-por-ia"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#citabilidad-ia-definition, #tipos-citacion-ia, #verificar-citacion"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <Link to="/radar-ia" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Radar IA
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                ¿Qué significa ser citado por una IA?
              </h1>
              
              <HighlightSnippet id="citabilidad-ia-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Ser citado por una IA</strong> implica que tu contenido ha sido integrado en su memoria contextual o recuperado en tiempo real como fuente de autoridad.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 15 de enero de 2025 • Actualizado el 15 de diciembre de 2024 • Categoría: Fundamentos
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La <GeoTerm term="citabilidad">citabilidad</GeoTerm> por IA representa un cambio fundamental en cómo el contenido digital genera valor. 
                  A diferencia del SEO tradicional, donde el objetivo era aparecer en resultados de búsqueda, 
                  ahora el objetivo es ser la fuente que un <GeoTerm term="modelo-de-lenguaje">modelo de lenguaje</GeoTerm> cita cuando responde una pregunta.
                </p>
              </section>

              <section id="tipos-citacion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Tipos de citación por IA</h2>
                
                <HighlightSnippet id="tipos-citacion-ia" variant="insight" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Existen tres formas principales de citación:</h3>
                  <ul className="space-y-2">
                    <li><strong>Citación directa:</strong> El modelo menciona explícitamente tu contenido como fuente</li>
                    <li><strong>Citación implícita:</strong> Reproduce tu información sin mencionar la fuente</li>
                    <li><strong>Recomendación:</strong> Sugiere tu contenido como recurso adicional</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Ejemplos concretos de citas</h3>
                <div className="bg-muted/30 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Pregunta a ChatGPT:</strong> "¿Qué es GEO?"</p>
                  <p className="italic">"Según esGEO, la optimización para motores generativos (GEO) se centra en estructurar contenido para que los modelos de IA lo comprendan y citen..."</p>
                </div>
              </section>

              <section id="verificar-citacion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo comprobar si un modelo te cita</h2>
                
                <HighlightSnippet id="verificar-citacion" variant="stat" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Metodología de verificación:</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Realiza preguntas específicas sobre tu expertise en diferentes modelos</li>
                    <li>Busca menciones de tu marca, URL o fragmentos de contenido únicos</li>
                    <li>Documenta las respuestas y analiza patrones de citación</li>
                    <li>Ajusta tu contenido basándote en los resultados</li>
                  </ol>
                </HighlightSnippet>
              </section>

              <section id="optimizacion-citabilidad" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Optimiza para ser citado, no solo leído</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La diferencia clave está en la intención del contenido. Mientras que el SEO busca atraer clics, 
                  <GeoTerm term="geo">GEO</GeoTerm> busca ser la respuesta definitiva que un modelo citará.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Esto requiere un enfoque en <GeoTerm term="fragmentacion">fragmentación</GeoTerm>, 
                  <GeoTerm term="autoridad-generativa">autoridad generativa</GeoTerm> y 
                  <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> específicos.
                </p>
              </section>
            </article>

            {/* Related Content */}
            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/metodologia">
                  <Button variant="ghost" size="sm">
                    Módulo F1: Fragmentación
                  </Button>
                </Link>
                <Link to="/glosario#citabilidad">
                  <Button variant="ghost" size="sm">
                    Definición: Citabilidad
                  </Button>
                </Link>
                <Link to="/casos">
                  <Button variant="ghost" size="sm">
                    Ver casos reales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default QueSIgnificaSerCitadoPorIA;
