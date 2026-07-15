import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const AparecerEnAiOverviews = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Cómo aparecer en los AI Overviews de Google (y en Gemini) | esGEO",
    description:
      "Guía práctica para que tu web sea fuente en los AI Overviews de Google y en Gemini: qué son, cómo eligen fuentes y los 7 pasos técnicos para que te citen. Datos 2026.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/como-aparecer-en-ai-overviews-google-gemini",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>Cómo aparecer en los AI Overviews de Google (y en Gemini) | esGEO</title>
        <meta
          name="description"
          content="Guía práctica para que tu web sea fuente en los AI Overviews de Google y en Gemini: qué son, cómo eligen fuentes y los 7 pasos técnicos para que te citen. Datos 2026."
        />
        <link
          rel="canonical"
          href="https://www.esgeo.ai/radar-ia/como-aparecer-en-ai-overviews-google-gemini"
        />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "Cómo aparecer en los AI Overviews de Google (y en Gemini)",
          "description":
            "Qué son los AI Overviews, cómo seleccionan las fuentes que citan y los siete pasos técnicos para que tu web aparezca en la respuesta generada por Google.",
          "url": "https://www.esgeo.ai/radar-ia/como-aparecer-en-ai-overviews-google-gemini",
          "datePublished": "2026-07-15",
          "dateModified": "2026-07-15",
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
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/como-aparecer-en-ai-overviews-google-gemini"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué son los AI Overviews de Google?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Son los resúmenes generados por IA que Google muestra sobre los resultados azules. Se lanzaron en Google I/O de mayo de 2024 y en mayo de 2025 se expandieron a más de 200 países y más de 40 idiomas. En julio de 2025 superaban los 2.000 millones de usuarios mensuales y en Estados Unidos los mueve una versión personalizada de Gemini 2.5."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cómo elige Google qué fuentes cita en un AI Overview?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El AI Overview redacta la respuesta y enlaza las páginas de las que ha extraído la información. Prioriza contenido rastreable, con una respuesta directa y estructurada al principio, datos verificables y autoridad reconocida en el tema. No es una posición ganada con keywords: es ser la mejor fuente citable para esa pregunta concreta."
              }
            },
            {
              "@type": "Question",
              "name": "¿Bloquear a Google-Extended me saca de los AI Overviews?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Google-Extended controla el uso de tu contenido para entrenar Gemini, no la aparición en AI Overviews, que dependen del índice de Búsqueda. Si bloqueas el rastreo de Búsqueda con robots.txt sí desapareces. La recomendación práctica es permitir el rastreo de Búsqueda y decidir por separado sobre el entrenamiento."
              }
            },
            {
              "@type": "Question",
              "name": "¿Aparecer en un AI Overview trae tráfico si el usuario no hace clic?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El clic baja, pero la cita te da visibilidad de marca ante 2.000 millones de usuarios mensuales y te posiciona como la fuente autorizada. La métrica cambia: de clics a menciones. Además, la cita enlazada capta al usuario que sí quiere profundizar, que suele ser el de mayor intención."
              }
            },
            {
              "@type": "Question",
              "name": "¿AI Overviews y AI Mode son lo mismo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Los AI Overviews son el resumen que aparece sobre los resultados normales. AI Mode es una experiencia conversacional completa dentro de Búsqueda que, según Google, alcanzó 100 millones de usuarios en Estados Unidos e India en 2025. Optimizar para ser fuente citable sirve para los dos."
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
                "name": "Cómo aparecer en los AI Overviews",
                "item": "https://www.esgeo.ai/radar-ia/como-aparecer-en-ai-overviews-google-gemini"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #como-elige, #siete-pasos"
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
                Cómo aparecer en los AI Overviews de Google (y en Gemini)
              </h1>

              <HighlightSnippet lastModified="2026-07-15" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  Para aparecer en un{" "}
                  <GeoTerm term="ai-overviews">AI Overview</GeoTerm> no compites por una posición: compites
                  por ser <strong>la fuente que la IA decide citar</strong>. Se consigue con una respuesta
                  directa al principio, estructura que una máquina pueda extraer, datos verificables y
                  rastreo permitido. No hay atajo de keywords.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 15 de julio de 2026 • Categoría: Técnico
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="que-son" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué son los AI Overviews (y por qué te afectan ya)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los AI Overviews son los resúmenes generados por IA que Google coloca <em>encima</em> de
                  los resultados de siempre. Google los presentó en su conferencia I/O de mayo de 2024 y,
                  un año después, el 20 de mayo de 2025, anunció su expansión a más de 200 países y
                  territorios y más de 40 idiomas &mdash; el español entre ellos. En Estados Unidos, la
                  respuesta la genera una versión personalizada de Gemini 2.5.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La escala es la parte que cambia tu estrategia: en julio de 2025 los AI Overviews
                  superaban los <strong>2.000 millones de usuarios mensuales</strong>. Ya no es un
                  experimento en una esquina de la pantalla; es la primera cosa que ve buena parte del
                  planeta cuando busca. Para muchas consultas informativas, el usuario lee el resumen y no
                  baja a los diez enlaces azules. Si tu web no está entre las fuentes citadas de ese
                  resumen, para ese usuario no existes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Esto es exactamente el terreno del{" "}
                  <GeoTerm term="geo">GEO</GeoTerm> (Generative Engine Optimization): dejar de optimizar
                  para el clic y empezar a optimizar para la <GeoTerm term="citabilidad">cita</GeoTerm>.
                </p>
              </section>

              <section id="como-elige" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo elige Google qué fuentes cita</h2>

                <HighlightSnippet lastModified="2026-07-15" id="como-elige-snippet" variant="insight" className="mb-6">
                  <p className="text-lg leading-relaxed" data-speakable="true">
                    Un AI Overview funciona como un sistema de{" "}
                    <GeoTerm term="rag">recuperación aumentada (RAG)</GeoTerm>: primero recupera páginas
                    relevantes del índice de Búsqueda, luego redacta una respuesta a partir de ellas y las
                    enlaza como fuente. La página que gana no es la más "optimizada" para keywords, sino la
                    que ofrece <strong>el fragmento más citable</strong> para esa pregunta.
                  </p>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  De esa mecánica se deducen las señales que de verdad importan:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                  <li>
                    • <strong>Rastreabilidad.</strong> Si el contenido llega por JavaScript y no está en el
                    HTML servido, muchas veces no se recupera. La{" "}
                    <GeoTerm term="ssr-prerender">renderización en servidor</GeoTerm> deja de ser un lujo.
                  </li>
                  <li>
                    • <strong>Respuesta directa arriba.</strong> El modelo extrae mejor cuando la respuesta
                    aparece en las primeras líneas, no enterrada tras seis párrafos de introducción.
                  </li>
                  <li>
                    • <strong><GeoTerm term="estructura-semantica">Estructura semántica</GeoTerm>.</strong>{" "}
                    Encabezados coherentes, listas, tablas y{" "}
                    <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> que le digan a la
                    máquina qué es cada cosa.
                  </li>
                  <li>
                    • <strong>Datos verificables.</strong> Cifras con fuente y fecha se citan más que
                    afirmaciones vagas: son más seguras de reproducir para el modelo.
                  </li>
                  <li>
                    • <strong><GeoTerm term="autoridad-generativa">Autoridad</GeoTerm> en el tema.</strong>{" "}
                    Coherencia temática del dominio y reputación off-site siguen pesando.
                  </li>
                </ul>
              </section>

              <section id="siete-pasos" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Los 7 pasos para que te citen</h2>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground leading-relaxed mb-4">
                  <li>
                    <strong>Responde en las primeras 40 palabras.</strong> Cada página debe abrir con una
                    respuesta autónoma a la pregunta que resuelve. Ese es el bloque que la IA copiará.
                  </li>
                  <li>
                    <strong>Un H1 que sea la pregunta real.</strong> Titula como la gente pregunta a la IA,
                    no como se rellena un campo de keyword.
                  </li>
                  <li>
                    <strong>Fragmenta el contenido.</strong> Bloques cortos y autoconclusivos (
                    <GeoTerm term="chunking">chunking</GeoTerm>). Un modelo cita fragmentos, no artículos
                    enteros.
                  </li>
                  <li>
                    <strong>Marca todo con schema.</strong> <code>Article</code>, <code>FAQPage</code>,{" "}
                    <code>HowTo</code> y <code>BreadcrumbList</code> le dan a la máquina el mapa de tu página.
                  </li>
                  <li>
                    <strong>Sirve el HTML completo.</strong> Comprueba que tu respuesta está en el
                    código fuente sin ejecutar JavaScript. Si no, no cuentes con que se recupere.
                  </li>
                  <li>
                    <strong>Permite el rastreo correcto.</strong> No bloquees en robots.txt el rastreo de
                    Búsqueda. Decide aparte sobre{" "}
                    <GeoTerm term="google-extended">Google-Extended</GeoTerm> (entrenamiento de Gemini),
                    que es una cuestión distinta.
                  </li>
                  <li>
                    <strong>Actualiza y fecha.</strong> Muestra la fecha de última actualización. La
                    frescura visible aumenta la probabilidad de cita en temas que cambian.
                  </li>
                </ol>
              </section>

              <section id="overviews-vs-mode" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">AI Overviews, AI Mode y Gemini: no los confundas</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conviene separar tres cosas que la gente mezcla. El <strong>AI Overview</strong> es el
                  resumen sobre los resultados. <strong>AI Mode</strong> es una experiencia conversacional
                  completa dentro de Búsqueda que, según Google, llegó a 100 millones de usuarios en
                  Estados Unidos e India en 2025. Y <strong>Gemini</strong> es la app y el modelo que, entre
                  otras cosas, alimenta ambas experiencias.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La buena noticia para tu trabajo: la palanca es la misma en los tres. Ser una fuente
                  clara, estructurada y citable te hace elegible para el Overview, para la respuesta de AI
                  Mode y para lo que Gemini recupera cuando navega. Optimizas una vez, apareces en varios
                  sitios.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Bloquear Google-Extended me saca de los AI Overviews?</h3>
                    <p className="text-muted-foreground">
                      No. <GeoTerm term="google-extended">Google-Extended</GeoTerm> gobierna el uso de tu
                      contenido para entrenar Gemini, no la aparición en AI Overviews, que dependen del
                      índice de Búsqueda. Lo que te saca de los Overviews es bloquear el rastreo de Búsqueda
                      en robots.txt.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">Si el usuario no hace clic, ¿para qué quiero salir?</h3>
                    <p className="text-muted-foreground">
                      Por la mención. Aparecer como fuente ante 2.000 millones de usuarios mensuales
                      construye <GeoTerm term="autoridad-generativa">autoridad</GeoTerm> y capta al usuario
                      de mayor intención, el que sí quiere profundizar. La métrica pasa de clics a{" "}
                      <GeoTerm term="share-of-citations">cuota de citación</GeoTerm>.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/como-hacer-que-chatgpt-cite-tu-web">
                  <Button variant="ghost" size="sm">Cómo hacer que ChatGPT te cite</Button>
                </Link>
                <Link to="/radar-ia/optimizar-web-para-perplexity">
                  <Button variant="ghost" size="sm">Optimizar para Perplexity</Button>
                </Link>
                <Link to="/metodologia">
                  <Button variant="ghost" size="sm">Metodología F1-F5</Button>
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
              source="article_ai-overviews"
              title="Antes de irte: el módulo F0 gratis"
              description="Te envío el módulo F0 completo (diagnóstico en 15 min): mide si Google y la IA pueden leer tu web y qué arreglar primero."
              leadMagnet="el módulo F0 completo"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default AparecerEnAiOverviews;
