import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const HerramientasGeo2026 = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Herramientas GEO en 2026: qué tipo de herramienta hace qué | esGEO",
    description:
      "No hay una herramienta GEO que lo haga todo. Hay categorías, y cada una resuelve un problema distinto: auditar, monitorizar citas, generar schema, validar llms.txt y más.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/herramientas-geo-2026",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>Herramientas GEO en 2026: qué tipo de herramienta hace qué | esGEO</title>
        <meta
          name="description"
          content="No hay una herramienta GEO que lo haga todo. Hay categorías, y cada una resuelve un problema distinto: auditar, monitorizar citas, generar schema, validar llms.txt y más."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/herramientas-geo-2026" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "Herramientas GEO en 2026: qué tipo de herramienta hace qué",
          "description":
            "Guía por categorías de las herramientas de optimización para IA en 2026: auditores de legibilidad máquina, monitores de citación, generadores de schema, validadores de llms.txt, herramientas de answerability y plataformas SEO con módulos de IA.",
          "url": "https://www.esgeo.ai/radar-ia/herramientas-geo-2026",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/herramientas-geo-2026"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Cuál es la mejor herramienta de GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No existe una única mejor herramienta, porque no hay un solo problema. GEO se divide en varias tareas distintas (auditar la legibilidad máquina, monitorizar si te citan, generar datos estructurados, validar llms.txt, trabajar la respondibilidad del contenido) y cada una tiene su propia categoría de herramienta. La pregunta útil no es cuál es la número uno, sino qué problema tienes ahora mismo y qué categoría lo resuelve."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué hace un auditor de legibilidad máquina o GEO scoring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Descarga el HTML que tu servidor entrega realmente y comprueba si un modelo de lenguaje puede leerlo: si el contenido está en el HTML inicial o depende de JavaScript, si hay datos estructurados, si la información responde preguntas de forma directa. Devuelve una puntuación y una lista de fallos. esGEO tiene su propio auditor en /geo-score como ejemplo de esta categoría."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cómo sé si ChatGPT o Perplexity me mencionan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Con un monitor de citación o share of voice en IA. Estas herramientas lanzan preguntas de forma periódica a los asistentes generativos y registran cuándo apareces tú, cuándo aparece la competencia y con qué frase se te cita. Al elegir uno, comprueba qué motores cubre de verdad y cada cuánto refresca los datos, porque las respuestas generativas varían con el tiempo."
              }
            },
            {
              "@type": "Question",
              "name": "¿Necesito una herramienta para generar datos estructurados y llms.txt?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ayudan, pero no son imprescindibles. Un generador de JSON-LD acelera marcar tus páginas y, sobre todo, un validador te evita publicar schema roto. Para llms.txt, un generador te da un primer borrador y un validador comprueba la sintaxis. Lo importante es que el resultado refleje tu contenido real: una herramienta que rellena campos que no se corresponden con la página hace más daño que bien."
              }
            },
            {
              "@type": "Question",
              "name": "¿Sirve una plataforma SEO clásica para GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "En parte. Las suites de SEO tradicionales están añadiendo módulos de IA (seguimiento de menciones en asistentes, informes de AI Overviews) y aprovechan datos que ya tienes. La advertencia es no confundir un módulo añadido con una herramienta especializada: revisa qué mide de verdad ese módulo antes de fiarte de sus números."
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
                "name": "Herramientas GEO en 2026",
                "item": "https://www.esgeo.ai/radar-ia/herramientas-geo-2026"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #categorias, #como-elegir"
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
                Herramientas GEO en 2026: qué tipo de herramienta hace qué
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>No busques "la mejor herramienta de GEO": no existe.</strong> El{" "}
                  <GeoTerm term="geo">GEO</GeoTerm> no es un problema, son varios, y cada uno tiene su
                  categoría de herramienta. Este artículo las ordena por el problema que resuelven &mdash;
                  auditar, monitorizar citas, generar schema, validar{" "}
                  <GeoTerm term="llms-txt">llms.txt</GeoTerm>, trabajar la{" "}
                  <GeoTerm term="answerability">respondibilidad</GeoTerm> &mdash; para que elijas tú, no
                  para coronar a ninguna.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Recursos
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="sin-ganador" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Por qué esto no es un ranking
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La pregunta que más nos llega es "¿cuál es la herramienta GEO número uno?". Es una
                  pregunta trampa, porque asume que hay una sola tarea. No la hay. Saber si un modelo puede
                  leer tu web, saber si ChatGPT te menciona y saber si tu schema está bien escrito son tres
                  problemas distintos que ninguna herramienta resuelve igual de bien a la vez.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Por eso aquí no hay podio. Hay seis categorías. Para cada una explicamos qué hace, en qué
                  fijarte al elegir y una advertencia concreta. La decisión de cuál te conviene depende de
                  qué problema tengas delante hoy, y eso solo lo sabes tú.
                </p>
              </section>

              <section id="categorias" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Las seis categorías de herramienta
                </h2>

                <h3 className="text-xl font-medium text-primary mb-2">
                  1. Auditores de legibilidad máquina / GEO scoring
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué hacen:</strong> descargan el HTML que tu servidor entrega de verdad y
                  comprueban si una IA puede leerlo. Miran si el contenido está en el HTML inicial o depende
                  de que se ejecute JavaScript, si hay{" "}
                  <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm>, si el texto responde
                  preguntas de forma directa, y devuelven una puntuación con una lista de fallos priorizada.
                  El auditor propio de esGEO, en <Link to="/geo-score" className="text-accent underline">/geo-score</Link>,
                  es un ejemplo de esta categoría.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué mirar al elegir:</strong> que analice el HTML <em>servido</em> y no lo que ves
                  en el navegador tras renderizar; que distinga contenido dependiente de JavaScript; y que la
                  lista de fallos sea accionable, no una nota abstracta.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Advertencia:</strong> una puntuación alta no garantiza que te citen. Mide{" "}
                  <GeoTerm term="citabilidad">citabilidad</GeoTerm> técnica, que es condición necesaria pero
                  no suficiente. Es el punto de partida, no la meta.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">
                  2. Monitores de citación / share of voice en IA
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué hacen:</strong> lanzan preguntas de forma periódica a ChatGPT, Perplexity,
                  Gemini y otros asistentes, y registran cuándo apareces tú, cuándo aparece la competencia y
                  con qué frase se te menciona. Son la forma de medir tu{" "}
                  <GeoTerm term="share-of-citations">cuota de citación</GeoTerm> a lo largo del tiempo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué mirar al elegir:</strong> qué motores cubre de verdad (no basta con que lo
                  anuncie), cada cuánto refresca los datos y si te deja definir tus propias preguntas, porque
                  las genéricas rara vez coinciden con cómo te busca tu cliente.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Advertencia:</strong> las respuestas generativas no son deterministas: la misma
                  pregunta puede dar resultados distintos según el día. Fíate de tendencias sostenidas, no de
                  una captura suelta.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">
                  3. Generadores y validadores de datos estructurados / JSON-LD
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué hacen:</strong> te ayudan a crear el marcado{" "}
                  <GeoTerm term="datos-estructurados">schema.org</GeoTerm> (Article, FAQ, Product,
                  Organization) y, sobre todo, a validarlo antes de publicarlo, para que no se rompa la
                  sintaxis ni falten campos obligatorios.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué mirar al elegir:</strong> que valide contra el estándar actual y que avise de
                  errores y advertencias por separado. Un buen validador te dice no solo si es válido, sino
                  si es coherente con lo que hay en la página.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Advertencia:</strong> el schema debe describir tu contenido real. Rellenar campos
                  que no se corresponden con la página &mdash; valoraciones que no existen, precios inventados
                  &mdash; es marcado engañoso y puede volverse en tu contra.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">
                  4. Generadores y validadores de llms.txt
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué hacen:</strong> te dan un borrador del fichero{" "}
                  <GeoTerm term="llms-txt">llms.txt</GeoTerm> &mdash; el índice en texto plano que resume tu
                  sitio para los modelos &mdash; y comprueban que la sintaxis sea correcta y los enlaces
                  apunten a algo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué mirar al elegir:</strong> que respete el formato del estándar y que te deje
                  editar el resultado, porque el valor del fichero está en qué páginas eliges destacar, no en
                  volcarlas todas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Advertencia:</strong> llms.txt es una propuesta joven y su adopción por parte de
                  los motores aún es desigual. Tenerlo bien hecho no hace daño, pero no esperes de él un
                  efecto que todavía nadie puede garantizar.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">
                  5. Herramientas de contenido y answerability
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué hacen:</strong> analizan cómo está escrito tu contenido desde el punto de vista
                  de la <GeoTerm term="answerability">respondibilidad</GeoTerm>: si respondes la pregunta
                  arriba, si fragmentas la información en trozos citables, si usas titulares en forma de
                  pregunta. Algunas sugieren reescrituras.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué mirar al elegir:</strong> que trabajen la estructura de la respuesta y no solo
                  la densidad de palabras clave, y que sus sugerencias sean legibles para una persona, no un
                  texto inflado para el algoritmo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Advertencia:</strong> optimizar en exceso para{" "}
                  <GeoTerm term="motores-generativos">motores generativos</GeoTerm> produce textos robóticos
                  que ni la IA ni la persona quieren citar. La respondibilidad es orden y claridad, no
                  relleno.
                </p>

                <h3 className="text-xl font-medium text-primary mb-2">
                  6. Plataformas SEO clásicas con módulos de IA
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué hacen:</strong> las suites de SEO tradicionales están incorporando módulos para
                  seguir menciones en asistentes y para informar sobre los{" "}
                  <GeoTerm term="ai-overviews">AI Overviews</GeoTerm>. Su ventaja es que reutilizan los datos
                  que ya tienes de tu SEO.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Qué mirar al elegir:</strong> qué mide de verdad el módulo de IA y con qué
                  frecuencia, no solo que exista la pestaña. A veces el módulo es un extra reciente sobre un
                  producto pensado para otra cosa.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Advertencia:</strong> no confundas un módulo añadido con una herramienta
                  especializada. Puede bastarte, pero conviene contrastar sus números con una fuente
                  específica antes de tomar decisiones con ellos.
                </p>
              </section>

              <section id="transparencia" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Nota de transparencia</h2>
                <HighlightSnippet lastModified="2026-07-20" id="transparencia-snippet" variant="insight" className="mb-4">
                  <p className="leading-relaxed">
                    esGEO tiene su propio auditor; lo mencionamos como ejemplo de su categoría, no como
                    recomendación de que sea el mejor. La intención de este artículo es que entiendas el mapa
                    de herramientas y elijas con criterio, no empujarte hacia una en concreto.
                  </p>
                </HighlightSnippet>
                <p className="text-muted-foreground leading-relaxed">
                  Por el mismo motivo no damos precios ni listamos marcas concretas: el mercado se mueve rápido
                  y preferimos describir bien cada categoría y sus criterios de elección antes que citar
                  nombres que podrían estar desactualizados. Cuando busques una herramienta, aplica los "qué
                  mirar al elegir" de arriba a los candidatos reales que encuentres.
                </p>
              </section>

              <section id="como-elegir" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Cómo elegir sin marearte
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El orden importa más que la marca. La secuencia sensata es la misma para casi cualquier
                  proyecto:
                </p>
                <ol className="list-decimal pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
                  <li>
                    <strong>Primero mide.</strong> Empieza por un auditor de legibilidad máquina. Si la IA no
                    puede leer tu web, ninguna otra herramienta cambia nada. Es el diagnóstico.
                  </li>
                  <li>
                    <strong>Luego arregla.</strong> Con la lista de fallos en la mano, usa los generadores y
                    validadores de schema y de llms.txt, y las herramientas de{" "}
                    <GeoTerm term="answerability">answerability</GeoTerm>, para corregir lo que salió mal.
                  </li>
                  <li>
                    <strong>Después monitoriza.</strong> Cuando ya seas legible y respondas bien, pon un
                    monitor de citación para ver si el trabajo se traduce en menciones y en{" "}
                    <GeoTerm term="share-of-citations">cuota de citación</GeoTerm>.
                  </li>
                </ol>
                <p className="text-muted-foreground leading-relaxed">
                  Monitorizar antes de arreglar es medir un problema que ya sabes que tienes. Arreglar antes
                  de medir es dar palos de ciego. Medir, arreglar, monitorizar: en ese orden gastas menos y
                  aprendes más. Y una sola herramienta rara vez cubre las tres fases, así que no te obsesiones
                  con encontrar la que lo haga todo.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Puedo hacer GEO sin ninguna herramienta de pago?
                    </h3>
                    <p className="text-muted-foreground">
                      Para empezar, sí. Un auditor gratuito de legibilidad, el validador de schema oficial y
                      revisar a mano si te citan en un par de asistentes te llevan lejos. Las herramientas de
                      pago ganan sentido cuando necesitas escala, histórico y seguimiento continuo.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Una herramienta que promete "salir el primero en ChatGPT" es fiable?
                    </h3>
                    <p className="text-muted-foreground">
                      Desconfía. Nadie controla el ranking interno de un modelo generativo, y ninguna
                      herramienta puede garantizar una posición. Lo honesto es prometer diagnóstico, mejora y
                      medición, no un puesto concreto en una respuesta.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/geo-score">
                  <Button variant="ghost" size="sm">Audita tu web con GEO Score</Button>
                </Link>
                <Link to="/radar-ia/checklist-geo-25-puntos">
                  <Button variant="ghost" size="sm">Checklist GEO de 25 puntos</Button>
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
              source="article_herramientas-geo"
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

export default HerramientasGeo2026;
