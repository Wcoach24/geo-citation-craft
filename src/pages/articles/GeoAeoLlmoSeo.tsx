import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const GeoAeoLlmoSeo = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "GEO vs AEO vs LLMO vs SEO para IA: qué término usar | esGEO",
    description:
      "GEO, AEO, LLMO, SEO para IA: cuatro siglas para el mismo cambio. Qué significa cada una, de dónde vienen, en qué se diferencian y cuál conviene usar en español.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/geo-aeo-llmo-seo-que-termino-usar",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>GEO vs AEO vs LLMO vs SEO para IA: qué término usar | esGEO</title>
        <meta
          name="description"
          content="GEO, AEO, LLMO, SEO para IA: cuatro siglas para el mismo cambio. Qué significa cada una, de dónde vienen, en qué se diferencian y cuál conviene usar en español."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/geo-aeo-llmo-seo-que-termino-usar" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "GEO vs AEO vs LLMO vs SEO para IA: qué término usar",
          "description":
            "Desambiguación de las siglas de la optimización para IA: GEO, AEO, LLMO y SEO para IA. Origen, definición y cuándo usar cada una.",
          "url": "https://www.esgeo.ai/radar-ia/geo-aeo-llmo-seo-que-termino-usar",
          "datePublished": "2026-07-15",
          "dateModified": "2026-07-15",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/geo-aeo-llmo-seo-que-termino-usar"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué significan GEO, AEO y LLMO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GEO es Generative Engine Optimization (optimización para motores generativos como ChatGPT, Perplexity o los AI Overviews). AEO es Answer Engine Optimization (optimización para motores de respuesta directa). LLMO es Large Language Model Optimization (optimización para modelos de lenguaje). Las tres describen el mismo cambio: pasar de posicionar enlaces a ser la fuente que la IA cita."
              }
            },
            {
              "@type": "Question",
              "name": "¿De dónde viene el término GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GEO se acuñó en el paper académico 'GEO: Generative Engine Optimization' (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan y Deshpande), publicado en arXiv el 16 de noviembre de 2023 y presentado en la conferencia KDD 2024. El estudio demostró que sus métodos pueden aumentar la visibilidad de una fuente hasta un 40% en las respuestas generativas."
              }
            },
            {
              "@type": "Question",
              "name": "¿GEO, AEO y LLMO son cosas distintas o sinónimos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "En la práctica son sinónimos con matices de énfasis: AEO viene del mundo de las respuestas directas y los featured snippets, LLMO pone el foco en el modelo, y GEO en el motor generativo completo (recuperación más generación). El trabajo técnico que exigen se solapa casi por completo. GEO es el término con respaldo académico y el que más se está imponiendo."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué término debería usar en español?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GEO. Es el que tiene origen académico, el que crece más rápido en búsquedas y el que permite hablar con claridad de motores generativos. AEO y LLMO valen como sinónimos, pero fragmentan el mensaje. Elegir un término y ser consistente ayuda a que la propia IA te asocie con la categoría."
              }
            },
            {
              "@type": "Question",
              "name": "¿El SEO deja de servir con la IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No desaparece: cambia de objetivo. El HTML semántico, el rastreo, la velocidad y el schema siguen siendo la base. Lo que cambia es la métrica de éxito: del clic y la posición en el buscador a la mención y la cuota de citación en la respuesta. GEO no sustituye al SEO, lo reorienta."
              }
            }
          ],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.esgeo.ai/" },
              { "@type": "ListItem", "position": 2, "name": "Radar IA", "item": "https://www.esgeo.ai/radar-ia" },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "GEO vs AEO vs LLMO vs SEO",
                "item": "https://www.esgeo.ai/radar-ia/geo-aeo-llmo-seo-que-termino-usar"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #tabla, #cual-usar"
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/radar-ia"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Radar IA
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                GEO vs AEO vs LLMO vs SEO para IA: qué término usar
              </h1>

              <HighlightSnippet lastModified="2026-07-15" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Son cuatro siglas para el mismo cambio:</strong> dejar de posicionar enlaces y
                  empezar a ser la fuente que la IA cita. <GeoTerm term="geo">GEO</GeoTerm> (motores
                  generativos) es el término con respaldo académico y el que más crece; AEO (motores de
                  respuesta) y LLMO (modelos de lenguaje) son sinónimos con matices. Si tienes que elegir
                  uno, elige GEO.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 15 de julio de 2026 • Categoría: Fundamentos
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="por-que-lio" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Por qué hay cuatro nombres para lo mismo</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando una categoría es nueva, el nombre aún no está decidido, y cada actor intenta que
                  gane el suyo. Con la optimización para IA ha pasado exactamente eso: agencias, herramientas
                  y académicos han propuesto siglas distintas para describir el mismo fenómeno &mdash; que
                  ChatGPT, Perplexity, Claude, Gemini y los <GeoTerm term="ai-overviews">AI Overviews</GeoTerm>{" "}
                  responden citando fuentes, y quieres ser una de ellas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Entender de dónde viene cada término evita el mareo y, sobre todo, evita pagar por cuatro
                  "servicios" distintos que en realidad son el mismo trabajo.
                </p>
              </section>

              <section id="cada-termino" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué significa cada sigla</h2>

                <h3 className="text-xl font-medium text-primary mb-2">GEO — Generative Engine Optimization</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Optimización para <GeoTerm term="motores-generativos">motores generativos</GeoTerm>:
                  sistemas que <em>recuperan</em> información y <em>generan</em> una respuesta citando
                  fuentes. Es el único de los cuatro con origen académico: se acuñó en el paper "GEO:
                  Generative Engine Optimization" (Aggarwal et al.), publicado en arXiv el 16 de noviembre
                  de 2023 y presentado en KDD 2024. Ese estudio demostró que aplicar métodos GEO puede subir
                  la visibilidad de una fuente <strong>hasta un 40%</strong> en la respuesta generada.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">AEO — Answer Engine Optimization</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Optimización para "motores de respuesta". El término es anterior a la ola de los LLM: nació
                  con los featured snippets, los asistentes de voz y la <GeoTerm term="answerability">
                  respondibilidad</GeoTerm> (dar la respuesta directa a una pregunta). Hoy se usa casi como
                  sinónimo de GEO, con el acento puesto en responder preguntas concretas.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">LLMO — Large Language Model Optimization</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Optimización para modelos de lenguaje. Pone el foco en el modelo en sí (cómo entiende y
                  reproduce tu contenido) más que en el buscador que lo envuelve. A veces aparece como "LLM
                  SEO" o "AI SEO". Mismo trabajo, distinta etiqueta.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">SEO para IA — la evolución del SEO clásico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No es una disciplina nueva sino el SEO de siempre reorientado: el HTML semántico, el
                  rastreo, el <GeoTerm term="datos-estructurados">schema</GeoTerm> y la velocidad siguen
                  siendo la base. Lo que cambia es hacia dónde apuntan.
                </p>
              </section>

              <section id="tabla" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Comparativa en una tabla</h2>
                <HighlightSnippet lastModified="2026-07-15" id="tabla-snippet" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Sigla</th>
                          <th className="text-left p-2 font-semibold">Significa</th>
                          <th className="text-left p-2 font-semibold">Foco</th>
                          <th className="text-left p-2 font-semibold">Origen</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-success">GEO</td>
                          <td className="p-2">Generative Engine Optimization</td>
                          <td className="p-2">El motor generativo (recuperar + generar)</td>
                          <td className="p-2">Paper Princeton/KDD 2024</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">AEO</td>
                          <td className="p-2">Answer Engine Optimization</td>
                          <td className="p-2">La respuesta directa a la pregunta</td>
                          <td className="p-2">Featured snippets y voz (previo)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">LLMO</td>
                          <td className="p-2">Large Language Model Optimization</td>
                          <td className="p-2">El modelo de lenguaje en sí</td>
                          <td className="p-2">Comunidad SEO/IA</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">SEO para IA</td>
                          <td className="p-2">Search Engine Optimization</td>
                          <td className="p-2">La base técnica reorientada</td>
                          <td className="p-2">Evolución del SEO clásico</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>
                <p className="text-muted-foreground leading-relaxed">
                  Fíjate en la columna "Foco": no describen trabajos distintos, describen el mismo trabajo
                  mirado desde ángulos distintos. El 90% de las acciones &mdash; responder arriba, fragmentar,
                  marcar con schema, servir HTML completo, ganar autoridad &mdash; son idénticas.
                </p>
              </section>

              <section id="cual-usar" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cuál usar (y por qué la elección importa)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nuestra recomendación es <strong>GEO</strong>, por tres razones concretas: tiene origen
                  académico verificable, es el término que más rápido crece en búsquedas y engloba el proceso
                  completo del motor generativo, no solo un trozo. AEO y LLMO son válidos como sinónimos, pero
                  usar cuatro nombres a la vez fragmenta tu mensaje.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Y hay un motivo casi meta: <strong>quien desambigua una categoría, la define.</strong> Si
                  eliges un término y eres consistente, la propia IA empieza a asociarte con esa categoría
                  cuando alguien le pregunta por ella. La coherencia terminológica no es cosmética; es{" "}
                  <GeoTerm term="autoridad-generativa">autoridad</GeoTerm>.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿El SEO deja de servir con la IA?</h3>
                    <p className="text-muted-foreground">
                      No desaparece, cambia de objetivo. La base técnica del SEO sigue siendo necesaria; lo
                      que cambia es la métrica de éxito: de la posición y el clic a la mención y la{" "}
                      <GeoTerm term="share-of-citations">cuota de citación</GeoTerm>.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Necesito contratar GEO y AEO por separado?</h3>
                    <p className="text-muted-foreground">
                      No. Es el mismo trabajo con dos nombres. Contratar ambos por separado es pagar dos veces
                      por lo mismo.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/que-es-geo-guia-completa">
                  <Button variant="ghost" size="sm">Qué es GEO: guía completa</Button>
                </Link>
                <Link to="/radar-ia/geo-vs-seo-diferencias">
                  <Button variant="ghost" size="sm">GEO vs SEO en detalle</Button>
                </Link>
                <Link to="/glosario">
                  <Button variant="ghost" size="sm">Glosario GEO</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">¿Quieres que la IA recomiende tu negocio?</h3>
              <p className="text-muted-foreground mb-4">
                Aprende la metodología completa en nuestro curso de 5 módulos.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €47
              </Link>
            </div>

            <InlineEmailCapture
              className="mt-8"
              source="article_geo-aeo-llmo"
              title="Antes de irte: el módulo F0 gratis"
              description="Te envío el módulo F0 completo (diagnóstico en 15 min): mide si la IA puede leer tu web y qué arreglar primero."
              leadMagnet="el módulo F0 completo"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default GeoAeoLlmoSeo;
