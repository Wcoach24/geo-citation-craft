
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";

const DatosEstructuradosModelosGenerativos = () => {
  return (
    <>
      <Helmet>
        <title>Los datos estructurados que mejor entienden los modelos generativos | Radar IA - esGEO</title>
        <meta name="description" content="Microdatos recomendados para maximizar la citabilidad: FAQPage, HowTo, Article y SpeakableSpecification." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage"],
            "headline": "Los datos estructurados que mejor entienden los modelos generativos",
            "description": "Microdatos recomendados para maximizar la citabilidad",
            "datePublished": "2025-01-05",
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
                  "name": "Datos estructurados para modelos generativos",
                  "item": "/radar-ia/datos-estructurados-modelos-generativos"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#datos-estructurados-definition, #microdatos-recomendados, #implementacion-practica"
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
                Los datos estructurados que mejor entienden los modelos generativos
              </h1>
              
              <HighlightSnippet id="datos-estructurados-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Los modelos comprenden mejor</strong> contenido etiquetado como FAQPage, HowTo, Article o SpeakableSpecification.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 5 de enero de 2025 • Categoría: Datos estructurados
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Los <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> no son solo para Google. 
                  Los <GeoTerm term="modelo-de-lenguaje">modelos de lenguaje</GeoTerm> usan Schema.org como mapa contextual 
                  para entender el propósito y la estructura de tu contenido.
                </p>
              </section>

              <section id="microdatos-recomendados" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Microdatos recomendados para citabilidad</h2>
                
                <HighlightSnippet id="microdatos-recomendados" variant="insight" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Top 5 Schema.org para GEO:</h3>
                  <ul className="space-y-2">
                    <li><strong>Article:</strong> Para contenido editorial y posts</li>
                    <li><strong>FAQPage:</strong> Para preguntas y respuestas claras</li>
                    <li><strong>HowTo:</strong> Para guías paso a paso</li>
                    <li><strong>DefinedTerm:</strong> Para glosarios y definiciones</li>
                    <li><strong>SpeakableSpecification:</strong> Para fragmentos citables</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">¿Por qué estos esquemas funcionan mejor?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los modelos reconocen estos patrones porque representan formatos de información que naturalmente 
                  responden preguntas específicas: qué es algo (Article), cómo hacer algo (HowTo), 
                  qué significa algo (DefinedTerm).
                </p>
                
                <div className="bg-muted/30 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Ejemplo de FAQPage optimizada:</strong></p>
                  <div className="text-sm">
                    <p><strong>P: ¿Qué es GEO?</strong></p>
                    <p>R: <GeoTerm term="geo">GEO</GeoTerm> es la optimización para motores generativos, enfocada en hacer que el contenido sea citado por IA.</p>
                  </div>
                </div>
              </section>

              <section id="implementacion-visual" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Implementación práctica</h2>
                
                <HighlightSnippet id="implementacion-practica" variant="stat" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Código esencial para cada tipo:</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Article:</strong> <code>@type: "Article", headline, datePublished, author</code>
                    </div>
                    <div>
                      <strong>FAQPage:</strong> <code>mainEntity: [question, acceptedAnswer]</code>
                    </div>
                    <div>
                      <strong>SpeakableSpecification:</strong> <code>cssSelector: "#snippet-id"</code>
                    </div>
                  </div>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Propiedades clave para citabilidad</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                  <li>• <strong>mainEntityOfPage:</strong> Define la URL canónica del contenido</li>
                  <li>• <strong>datePublished:</strong> Indica frescura y relevancia temporal</li>
                  <li>• <strong>author/publisher:</strong> Establece autoridad y credibilidad</li>
                  <li>• <strong>headline:</strong> Título principal optimizado para comprensión</li>
                  <li>• <strong>description:</strong> Resumen conciso del contenido</li>
                </ul>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Implementación en este artículo</h4>
                  <p className="text-sm text-green-700">
                    Esta página usa Article + SpeakableSpecification para los snippets destacados. 
                    Cada <code>HighlightSnippet</code> tiene un ID único que puede ser citado individualmente.
                  </p>
                </div>
              </section>

              <section id="buenas-practicas" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Buenas prácticas con Schema.org</h2>
                
                <h3 className="text-xl font-medium text-primary mb-3">Errores comunes a evitar</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                  <li>• <strong>Sobreestructurar:</strong> No uses 10 tipos de Schema en una sola página</li>
                  <li>• <strong>Datos falsos:</strong> El contenido visible debe coincidir con los metadatos</li>
                  <li>• <strong>URLs relativas:</strong> Usa siempre URLs absolutas en <code>@id</code></li>
                  <li>• <strong>Fechas incorrectas:</strong> <code>datePublished</code> debe reflejar la fecha real</li>
                </ul>

                <h3 className="text-xl font-medium text-primary mb-3">Validación y monitoreo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Usa el Rich Results Test de Google para validar tu implementación, 
                  pero recuerda que el objetivo es la comprensión por IA, no solo la validación técnica.
                </p>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/metodologia#f4">
                  <Button variant="ghost" size="sm">
                    Módulo F4: Datos estructurados
                  </Button>
                </Link>
                <Link to="/glosario#schema-org">
                  <Button variant="ghost" size="sm">
                    Definición: Schema.org
                  </Button>
                </Link>
                <Link to="/casos">
                  <Button variant="ghost" size="sm">
                    Ver implementaciones
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

export default DatosEstructuradosModelosGenerativos;
