
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";

const EstructuraWebParaLenguaje = () => {
  return (
    <>
      <Helmet>
        <title>Estructura tu web para el lenguaje, no para los algoritmos | Radar IA - esGEO</title>
        <meta name="description" content="Principios de diseño que los LLMs comprenden mejor: fragmentación, bloques lógicos y semántica clara." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage"],
            "headline": "Estructura tu web para el lenguaje, no para los algoritmos",
            "description": "Principios de diseño que los LLMs comprenden mejor",
            "datePublished": "2025-01-10",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Estructura tu web para el lenguaje",
                  "item": "/radar-ia/estructura-web-para-lenguaje"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#estructura-lenguaje-definition, #principios-llm, #caso-comparativo"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/radar-ia" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Radar IA
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                Estructura tu web para el lenguaje, no para los algoritmos
              </h1>
              
              <HighlightSnippet id="estructura-lenguaje-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Los modelos generativos entienden mejor</strong> las páginas bien fragmentadas, con bloques lógicos, semántica clara y datos estructurados.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 10 de enero de 2025 • Categoría: Técnicas GEO
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Los algoritmos de Google buscan señales de ranking. Los <GeoTerm term="modelo-de-lenguaje">modelos de lenguaje</GeoTerm> buscan 
                  significado, contexto y estructura lógica. Esta diferencia fundamental requiere un enfoque completamente nuevo al diseño web.
                </p>
              </section>

              <section id="principios-diseno-llm" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Principios de diseño para LLMs</h2>
                
                <HighlightSnippet id="principios-llm" variant="insight" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Los 4 pilares de la comprensión LLM:</h3>
                  <ul className="space-y-2">
                    <li><strong>Fragmentación:</strong> Bloques temáticos independientes con IDs únicos</li>
                    <li><strong>Jerarquía semántica:</strong> H1, H2, H3 que reflejen la lógica del contenido</li>
                    <li><strong>Metadatos explícitos:</strong> Schema.org que describa el propósito de cada sección</li>
                    <li><strong>Contenido autocontenido:</strong> Cada bloque debe ser comprensible por sí solo</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Diferencias entre rastreo SEO y comprensión LLM</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Enfoque SEO tradicional</h4>
                    <ul className="text-sm space-y-1 text-red-700">
                      <li>• Keywords distribuidas artificialmente</li>
                      <li>• Contenido largo sin estructura clara</li>
                      <li>• Enlaces internos por PageRank</li>
                      <li>• Títulos optimizados para clics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Enfoque GEO</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Conceptos explicados naturalmente</li>
                      <li>• Bloques temáticos bien definidos</li>
                      <li>• Enlaces contextuales relevantes</li>
                      <li>• Títulos descriptivos y claros</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="caso-comparativo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Caso comparado: Web GEO vs SEO</h2>
                
                <HighlightSnippet id="caso-comparativo" variant="stat" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Ejemplo práctico:</h3>
                  <p><strong>Pregunta a ChatGPT:</strong> "¿Cómo funciona el marketing de contenidos?"</p>
                  <p className="mt-2"><strong>Web SEO:</strong> No citada (contenido disperso, keywords forzadas)</p>
                  <p><strong>Web GEO:</strong> Citada como fuente (definición clara, estructura lógica)</p>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Implementación práctica</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Una página optimizada para <GeoTerm term="geo">GEO</GeoTerm> incluye:
                </p>
                
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                  <li>• <strong>Snippet destacado:</strong> Respuesta directa en los primeros 100 caracteres</li>
                  <li>• <strong>Secciones con IDs:</strong> Cada H2 enlazable individualmente</li>
                  <li>• <strong>Datos estructurados:</strong> FAQPage, HowTo, Article según corresponda</li>
                  <li>• <strong>Enlaces contextuales:</strong> A términos del <Link to="/glosario" className="text-primary underline">glosario</Link> y conceptos relacionados</li>
                </ul>
              </section>

              <section id="implementacion-practica" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo empezar hoy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Audita tu contenido actual bajo la lente de la <GeoTerm term="citabilidad">citabilidad</GeoTerm>:
                </p>
                
                <ol className="space-y-2 list-decimal list-inside text-muted-foreground leading-relaxed">
                  <li>¿Puede un modelo extraer la respuesta principal en 2 frases?</li>
                  <li>¿Están los conceptos explicados de forma autocontenida?</li>
                  <li>¿Cada sección tiene un propósito claro y un ID único?</li>
                  <li>¿Los metadatos describen correctamente el contenido?</li>
                </ol>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/metodologia#f1">
                  <Button variant="ghost" size="sm">
                    Módulo F1: Fragmentación
                  </Button>
                </Link>
                <Link to="/metodologia#f2">
                  <Button variant="ghost" size="sm">
                    Módulo F2: Jerarquía semántica
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

export default EstructuraWebParaLenguaje;
