
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";

const GeoVsSeoGuiaRapida = () => {
  return (
    <>
      <Helmet>
        <title>GEO no es SEO: guía rápida para entender la diferencia | Radar IA - esGEO</title>
        <meta name="description" content="Tabla comparativa y estrategia de pivote hacia la optimización generativa. SEO intenta gustar a Google, GEO intenta ser comprendido por modelos de lenguaje." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/geo-vs-seo-diferencias" />
        
        <meta name="citation_title" content="GEO no es SEO: guía rápida para entender la diferencia" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2025-01-03" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="GEO vs SEO, diferencias, comparativa, optimización, IA, generativa, pivote, estrategia" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage", "FAQPage"],
            "headline": "GEO no es SEO: guía rápida para entender la diferencia",
            "description": "Tabla comparativa y estrategia de pivote hacia la optimización generativa",
            "url": "https://esgeo.ai/radar-ia/geo-vs-seo-diferencias",
            "datePublished": "2025-01-03",
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
            "image": "https://esgeo.ai/images/radar-ia/geo-vs-seo-diferencias.png",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.ai/radar-ia/geo-vs-seo-diferencias"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre SEO y GEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO intenta gustar a Google para obtener rankings en resultados de búsqueda. GEO intenta ser comprendido por modelos de lenguaje y citado por IA cuando responden preguntas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Debo abandonar el SEO completamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No inmediatamente. La estrategia óptima es una transición gradual hacia GEO mientras mantienes el SEO básico para el tráfico actual de Google."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuáles son las métricas clave en GEO vs SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO mide posición en SERP y CTR. GEO mide frecuencia de citación por IA, comprensión del contenido y autoridad generativa."
                }
              },
              {
                "@type": "Question",
                "name": "¿GEO funciona para todos los nichos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GEO es especialmente efectivo para contenido educativo, técnico o de expertise. E-commerce y contenido muy local aún dependen más del SEO tradicional."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la estrategia de transición recomendada?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1) Mantén SEO básico, 2) Implementa GEO gradualmente en contenido nuevo, 3) Mide citabilidad preguntando a ChatGPT, 4) Refactoriza contenido top hacia formato más citable, 5) Invierte en datos estructurados."
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
                  "name": "GEO no es SEO",
                  "item": "https://esgeo.ai/radar-ia/geo-vs-seo-diferencias"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#geo-vs-seo-definition, #tabla-comparativa, #estrategia-pivote"
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
                GEO no es SEO: guía rápida para entender la diferencia
              </h1>
              
              <HighlightSnippet id="geo-vs-seo-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>SEO intenta gustar a Google.</strong> <GeoTerm term="geo">GEO</GeoTerm> intenta ser comprendido por modelos de lenguaje y citado por IA.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 3 de enero de 2025 • Categoría: Fundamentos
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Durante 25 años, el SEO ha dominado la estrategia de contenido digital. 
                  Pero cuando <GeoTerm term="chatgpt">ChatGPT</GeoTerm> responde sin mostrar enlaces, 
                  las reglas del juego cambian completamente.
                </p>
              </section>

              <section id="tabla-comparativa" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Tabla comparativa clara (SEO vs GEO)</h2>
                
                <HighlightSnippet id="tabla-comparativa" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Aspecto</th>
                          <th className="text-left p-2 font-semibold text-red-700">SEO Tradicional</th>
                          <th className="text-left p-2 font-semibold text-green-700">GEO</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="p-2 font-medium">Objetivo</td>
                          <td className="p-2 text-red-700">Aparecer en posición 1-3 de Google</td>
                          <td className="p-2 text-green-700">Ser citado por IA como fuente</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Audiencia</td>
                          <td className="p-2 text-red-700">Algoritmo de Google</td>
                          <td className="p-2 text-green-700">Modelos de lenguaje (GPT, Claude, etc.)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Métrica clave</td>
                          <td className="p-2 text-red-700">Posición en SERP + CTR</td>
                          <td className="p-2 text-green-700">Frecuencia de citación por IA</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Estructura</td>
                          <td className="p-2 text-red-700">Keywords + enlaces internos</td>
                          <td className="p-2 text-green-700">Fragmentación + datos estructurados</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Contenido</td>
                          <td className="p-2 text-red-700">Optimizado para clics</td>
                          <td className="p-2 text-green-700">Optimizado para comprensión</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>
              </section>

              <section id="filosofia-diferencias" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Filosofía, técnicas y objetivos de cada uno</h2>
                
                <h3 className="text-xl font-medium text-primary mb-3">Filosofía SEO: Complacer al algoritmo</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                  <li>• <strong>Densidad de keywords:</strong> Repetir términos específicos X veces</li>
                  <li>• <strong>Link building:</strong> Obtener enlaces de sitios con alta autoridad</li>
                  <li>• <strong>Optimización técnica:</strong> Velocidad, mobile-first, Core Web Vitals</li>
                  <li>• <strong>Competencia por keywords:</strong> Superar a otros sitios en rankings</li>
                </ul>

                <h3 className="text-xl font-medium text-primary mb-3">Filosofía GEO: Ser la mejor respuesta</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                  <li>• <strong><GeoTerm term="fragmentacion">Fragmentación</GeoTerm>:</strong> Dividir contenido en bloques citables</li>
                  <li>• <strong><GeoTerm term="autoridad-generativa">Autoridad generativa</GeoTerm>:</strong> Ser reconocido como fuente experta</li>
                  <li>• <strong>Claridad semántica:</strong> Expresar conceptos de forma inequívoca</li>
                  <li>• <strong>Colaboración, no competencia:</strong> Ser citado junto a otras fuentes</li>
                </ul>
              </section>

              <section id="estrategia-pivote" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Conclusión estratégica: por qué pivotar ya</h2>
                
                <HighlightSnippet id="estrategia-pivote" variant="stat" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">La transición está ocurriendo ahora:</h3>
                  <ul className="space-y-2">
                    <li><strong>2024:</strong> ChatGPT alcanza 200M usuarios activos mensuales</li>
                    <li><strong>2024:</strong> Google integra Gemini en búsqueda con AI Overviews</li>
                    <li><strong>2025:</strong> Perplexity, Claude y otros ganan tracción empresarial</li>
                    <li><strong>Proyección:</strong> 50% de consultas sin clic a sitios web en 2026</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Estrategia de transición recomendada</h3>
                <ol className="space-y-2 list-decimal list-inside text-muted-foreground leading-relaxed mb-4">
                  <li><strong>Mantén SEO básico</strong> para el tráfico actual de Google</li>
                  <li><strong>Implementa <GeoTerm term="geo">GEO</GeoTerm> gradualmente</strong> en contenido nuevo</li>
                  <li><strong>Mide citabilidad</strong> haciendo preguntas a ChatGPT sobre tu nicho</li>
                  <li><strong>Refactoriza contenido top</strong> hacia formato más <GeoTerm term="citabilidad">citable</GeoTerm></li>
                  <li><strong>Invierte en <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm></strong> y fragmentación</li>
                </ol>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Debo abandonar el SEO completamente?</h3>
                    <p className="text-muted-foreground">
                      No inmediatamente. La estrategia óptima es una transición gradual hacia <GeoTerm term="geo">GEO</GeoTerm> 
                      mientras mantienes el SEO básico para el tráfico actual de Google.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿GEO funciona para todos los nichos?</h3>
                    <p className="text-muted-foreground">
                      GEO es especialmente efectivo para contenido educativo, técnico o de expertise. 
                      E-commerce y contenido muy local aún dependen más del SEO tradicional.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/metodologia">
                  <Button variant="ghost" size="sm">
                    Metodología F1-F6 completa
                  </Button>
                </Link>
                <Link to="/radar-ia/muerte-seo-tradicional">
                  <Button variant="ghost" size="sm">
                    La muerte del SEO
                  </Button>
                </Link>
                <Link to="/casos">
                  <Button variant="ghost" size="sm">
                    Ver casos de transición
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

export default GeoVsSeoGuiaRapida;
