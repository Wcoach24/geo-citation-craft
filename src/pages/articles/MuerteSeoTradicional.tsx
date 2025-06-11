
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";

const MuerteSeoTradicional = () => {
  return (
    <>
      <Helmet>
        <title>La muerte del SEO tal y como lo conocíamos | Radar IA - esGEO</title>
        <meta name="description" content="Por qué los motores de búsqueda están siendo reemplazados por motores de lenguaje y el SEO tradicional pierde relevancia." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/muerte-seo-tradicional" />
        
        <meta name="citation_title" content="La muerte del SEO tal y como lo conocíamos" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2025-01-12" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="SEO, muerte SEO, GEO, motores generativos, IA, búsqueda, futuro" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage", "FAQPage"],
            "headline": "La muerte del SEO tal y como lo conocíamos",
            "description": "Por qué los motores de búsqueda están siendo reemplazados por motores de lenguaje",
            "url": "https://esgeo.ai/radar-ia/muerte-seo-tradicional",
            "datePublished": "2025-01-12",
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
            "image": "https://esgeo.ai/images/radar-ia/muerte-seo-tradicional.png",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.ai/radar-ia/muerte-seo-tradicional"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Por qué el SEO tradicional está muriendo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El SEO tradicional pierde relevancia porque los usuarios ya no buscan en Google: preguntan directamente a ChatGPT, Perplexity y otros LLMs. Estos modelos responden sin mostrar enlaces, haciendo que el ranking de Google sea irrelevante."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo evalúan contenido los modelos de lenguaje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los LLMs no evalúan contenido por autoridad de dominio o backlinks como Google. Evalúan por claridad, estructura semántica y relevancia contextual. Una página nueva con contenido bien estructurado puede ser citada antes que un artículo con miles de backlinks."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué es GEO y cómo reemplaza al SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GEO (Generative Engine Optimization) no compite por posiciones en SERP, sino por ser la fuente que un modelo cita cuando responde. Las nuevas métricas son citabilidad, comprensión y autoridad generativa."
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
                  "name": "La muerte del SEO tal y como lo conocíamos",
                  "item": "https://esgeo.ai/radar-ia/muerte-seo-tradicional"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#muerte-seo-definition, #motores-lenguaje, #geo-respuesta"
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
                La muerte del SEO tal y como lo conocíamos
              </h1>
              
              <HighlightSnippet id="muerte-seo-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>El SEO tradicional deja de ser relevante</strong> cuando la IA responde sin enlaces y filtra la web por sentido, no por enlaces.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 12 de enero de 2025 • Actualizado el 15 de diciembre de 2024 • Categoría: Tendencias
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Los usuarios ya no buscan en Google: preguntan a <GeoTerm term="chatgpt">ChatGPT</GeoTerm>. 
                  Esta transición fundamental está redefiniendo cómo el contenido obtiene visibilidad, 
                  convirtiendo al SEO tradicional en una estrategia obsoleta.
                </p>
              </section>

              <section id="transicion-motores" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">De motores de búsqueda a motores de lenguaje</h2>
                
                <HighlightSnippet id="motores-lenguaje" variant="insight" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">El cambio de paradigma:</h3>
                  <ul className="space-y-2">
                    <li><strong>Google:</strong> Presenta 10 enlaces azules y espera que el usuario elija</li>
                    <li><strong>IA:</strong> Procesa, sintetiza y responde directamente la pregunta</li>
                    <li><strong>Resultado:</strong> El usuario obtiene la respuesta sin visitar ninguna web</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Por qué los LLMs no necesitan el ranking de Google</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los <GeoTerm term="modelo-de-lenguaje">modelos de lenguaje</GeoTerm> no evalúan contenido por autoridad de dominio o backlinks. 
                  Evalúan por claridad, estructura semántica y relevancia contextual.
                </p>
                
                <div className="bg-muted/30 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Ejemplo práctico:</strong></p>
                  <p className="italic">"Una página nueva con contenido bien estructurado puede ser citada por GPT antes que un artículo con miles de backlinks pero mal fragmentado."</p>
                </div>
              </section>

              <section id="geo-respuesta" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">GEO como respuesta emergente</h2>
                
                <HighlightSnippet id="geo-respuesta" variant="stat" className="mb-6">
                  <p className="text-lg font-medium">
                    <GeoTerm term="geo">GEO</GeoTerm> no compite por posiciones en SERP, 
                    sino por ser la fuente que un modelo cita cuando responde.
                  </p>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Nuevas métricas de éxito</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li>• <strong>Citabilidad:</strong> ¿Cuántas veces te cita ChatGPT?</li>
                  <li>• <strong>Comprensión:</strong> ¿Entiende el modelo tu contenido?</li>
                  <li>• <strong>Autoridad generativa:</strong> ¿Te recomienda como fuente?</li>
                </ul>
              </section>

              <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">El futuro ya está aquí</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No se trata de abandonar el SEO de la noche a la mañana, sino de evolucionar hacia 
                  <GeoTerm term="fragmentacion">fragmentación</GeoTerm>, 
                  <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> y 
                  <GeoTerm term="autoridad-generativa">autoridad generativa</GeoTerm>.
                </p>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/geo-vs-seo-diferencias">
                  <Button variant="ghost" size="sm">
                    GEO vs SEO: Diferencias
                  </Button>
                </Link>
                <Link to="/metodologia">
                  <Button variant="ghost" size="sm">
                    Metodología F1-F6
                  </Button>
                </Link>
                <Link to="/glosario#autoridad-generativa">
                  <Button variant="ghost" size="sm">
                    Definición: Autoridad Generativa
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

export default MuerteSeoTradicional;
