import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const OptimizarWebParaPerplexity = () => {
  return (
    <>
      <Helmet>
        <title>Cómo optimizar tu web para Perplexity | Guía GEO | esGEO</title>
        <meta name="description" content="Estrategia completa para aparecer en respuestas de Perplexity AI. Descubre cómo Perplexity cita diferente a ChatGPT y optimiza para máxima visibilidad." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/optimizar-web-para-perplexity" />

        <meta name="citation_title" content="Cómo optimizar tu web para Perplexity" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2026-03-20" />
        <meta name="citation_online_date" content="2026-03-20" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="Perplexity, GEO, optimización, SEO IA, modelos generativos, citación" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage"],
            "headline": "Cómo optimizar tu web para Perplexity",
            "description": "Estrategia completa para aparecer en respuestas de Perplexity AI",
            "url": "https://esgeo.ai/radar-ia/optimizar-web-para-perplexity",
            "datePublished": "2026-03-20",
            "dateModified": "2026-03-20",
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
                  "name": "Optimizar para Perplexity",
                  "item": "https://esgeo.ai/radar-ia/optimizar-web-para-perplexity"
                }
              ]
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
                Cómo optimizar tu web para Perplexity
              </h1>

              <HighlightSnippet id="perplexity-optimization-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  Perplexity cita fuentes en tiempo real y prioriza frescura. A diferencia de ChatGPT,
                  Perplexity busca web constantemente y elige fuentes que responden preguntas con precisión.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de marzo de 2026 • Categoría: Optimización IA
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción: ¿Por qué Perplexity es diferente?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity es el modelo de IA más citable. Mientras que ChatGPT busca en su entrenamiento (datos congelados de 2023),
                  Perplexity busca la web en tiempo real y cita lo que encuentra. Para Perplexity, recency (frescura) es rey.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si optimizas para Perplexity, logras algo que SEO no puede: ser la fuente citada en las respuestas de IA
                  en las próximas horas después de publicar. No esperas 3 meses como en Google.
                </p>
              </section>

              <section id="como-funciona-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo indexa Perplexity tu contenido</h2>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h3 className="text-lg font-semibold mb-2">1. Real-time Web Search</h3>
                    <p className="text-muted-foreground">
                      Perplexity rastreaba tu sitio constantemente. Cualquier contenido nuevo se indexa en horas, no días.
                      Esto abre la oportunidad de apariciones inmediatas si optimizas correctamente.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h3 className="text-lg font-semibold mb-2">2. Priorización de Frescura</h3>
                    <p className="text-muted-foreground">
                      Perplexity favorece contenido reciente. Si tu artículo tiene fecha de publicación de hoy,
                      tiene más probabilidades de ser citado que uno de hace 6 meses sobre el mismo tema.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h3 className="text-lg font-semibold mb-2">3. Reconocimiento de Estructura</h3>
                    <p className="text-muted-foreground">
                      Perplexity escanea Schema.org y estructura HTML. Si tu contenido está bien fragmentado y tiene datos
                      estructurados claros, Perplexity lo extrae y cita con mayor facilidad.
                    </p>
                  </div>
                </div>
              </section>

              <section id="estrategia-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Estrategia completa: 7 pasos para dominar Perplexity</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 1: Identifica keywords que Perplexity busca (Semana 1)</h3>
                    <p className="text-muted-foreground mb-2">
                      No son las keywords de Google. Perplexity busca preguntas complejas, comparativas y preguntas que requieren síntesis.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• "¿Cuáles son las diferencias entre X e Y?"</li>
                      <li>• "¿Cómo funciona [proceso complejo]?"</li>
                      <li>• "¿Qué es lo último en [tema emergente]?"</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 2: Crea contenido fragmentado hoy mismo (Semana 1-2)</h3>
                    <p className="text-muted-foreground">
                      Para cada pregunta, crea un artículo con definiciones claras al inicio (200-300 caracteres),
                      luego expande con fragmentos de 100-300 caracteres cada uno.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 3: Implementa datos estructurados actualizados (Semana 2)</h3>
                    <p className="text-muted-foreground">
                      Añade Schema.org Article con fecha de publicación de HOY (no de hace 6 meses).
                      Perplexity ve la fecha y sabe que es contenido fresco.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 4: Publica en tu blog y RSS feed (Semana 2)</h3>
                    <p className="text-muted-foreground">
                      Asegúrate de tener RSS feed activo. Perplexity sigue feeds y los rastrea en tiempo real.
                      Un artículo nuevo en tu feed aparece en Perplexity en horas.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 5: Testea en Perplexity Pro (Semana 3)</h3>
                    <p className="text-muted-foreground">
                      Haz la pregunta en Perplexity Pro (la versión que busca en web en tiempo real).
                      ¿Apareces? ¿En qué posición? Documenta.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 6: Monitorea y refina continuamente (Semana 4+)</h3>
                    <p className="text-muted-foreground">
                      No es "set and forget". Perplexity muta cada 1-2 semanas. Mantén análisis activo de qué preguntas generan citación.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h3 className="text-lg font-medium text-primary mb-2">Paso 7: Optimiza para recency sistemáticamente (Permanente)</h3>
                    <p className="text-muted-foreground">
                      Cada 4 semanas, actualiza tus artículos más citados. Añade nuevas estadísticas, nuevas referencias.
                      Perplexity favorece contenido que evolucion.
                    </p>
                  </div>
                </div>
              </section>

              <section id="checklist-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Checklist de optimización para Perplexity (Hoy)</h2>

                <HighlightSnippet variant="insight" className="mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Tu blog tiene RSS feed activo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Al menos 1 artículo publicado HOY con fecha de hoy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Ese artículo contiene definiciones claras al inicio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Está fragmentado con H2/H3 descriptivos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Tiene Schema.org Article con datePublished actual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Has testeado la pregunta en Perplexity Pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">☐</span>
                      <span>Documentaste si apareció o no</span>
                    </li>
                  </ul>
                </HighlightSnippet>
              </section>

              <section id="casos-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Errores que te impiden ser citado por Perplexity</h2>

                <div className="space-y-3">
                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Contenido viejo sin actualizar fecha</p>
                    <p className="text-sm text-muted-foreground">
                      Si tu artículo dice "Publicado hace 2 años", Perplexity lo deprioritiza aunque sea exacto.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Sin RSS feed</p>
                    <p className="text-sm text-muted-foreground">
                      Perplexity necesita poder subscribirse a tus actualizaciones. Sin feed, espera rastreo pasivo (más lento).
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Párrafos densos sin fragmentación</p>
                    <p className="text-sm text-muted-foreground">
                      Perplexity necesita bloques extractables. Si todo es un muro de texto, no puede citar.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Sin Schema.org</p>
                    <p className="text-sm text-muted-foreground">
                      Perplexity lee Schema.org para entender tipo de contenido. Sin él, es más difícil que entienda tu página.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Sitio bloqueado en robots.txt</p>
                    <p className="text-sm text-muted-foreground">
                      Algunos sitios bloquean Perplexity en robots.txt. Asegúrate de permitirlo si quieres ser citado.
                    </p>
                  </div>
                </div>
              </section>

              <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Conclusión: Tu siguiente paso con Perplexity</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity es la herramienta de GEO con mejor ROI. Apariciones en 1-2 semanas versus 3-6 meses en Google.
                  Recency es tu ventaja. Usa la frescura como arma.
                </p>

                <HighlightSnippet variant="stat" className="mb-6">
                  <p className="font-semibold text-lg mb-2">Acción inmediata (esta semana):</p>
                  <p className="text-muted-foreground">
                    Publica 1 artículo nuevo sobre un topic de tu nicho. Fragmenta. Estructura. Añade Schema.org con fecha de hoy.
                    En 48 horas, busca en Perplexity Pro. Verás el impacto.
                  </p>
                </HighlightSnippet>
              </section>
            </article>

            <EmailCapture />

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">Domina GEO completamente</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro curso cubre optimización para todos los modelos: ChatGPT, Perplexity, Gemini, Claude.
                Desde fragmentación hasta autoridad generativa.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €97
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OptimizarWebParaPerplexity;