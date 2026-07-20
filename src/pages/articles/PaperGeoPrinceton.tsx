import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

// Q&A reales del articulo: una sola fuente para el JSX y el mainEntity del FAQPage.
const articleFaqs = [
  {
    question: "¿Quién acuñó el término GEO?",
    answer:
      "El término Generative Engine Optimization (GEO) se acuñó en el paper académico 'GEO: Generative Engine Optimization', firmado por Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan y Ameet Deshpande, con Princeton University como afiliación principal. Se publicó en arXiv el 16 de noviembre de 2023 y se presentó en la conferencia KDD 2024.",
  },
  {
    question: "¿Qué demostró el estudio de Princeton sobre GEO?",
    answer:
      "El estudio demostró que aplicar métodos GEO (añadir citas, estadísticas, citas de fuentes y lenguaje con autoridad) puede aumentar la visibilidad de una fuente en la respuesta generada hasta un 40%. Para medirlo, los autores construyeron GEO-bench, un banco de pruebas con unas 10.000 consultas de dominios diversos.",
  },
  {
    question: "¿Qué es un motor generativo según el paper?",
    answer:
      "Un motor generativo es un sistema que recupera información de varias fuentes y genera una respuesta redactada que cita esas fuentes, en lugar de devolver una lista de enlaces. ChatGPT con búsqueda, Perplexity o los AI Overviews de Google son ejemplos. Optimizar para ellos es lo que el paper bautizó como GEO.",
  },
  {
    question: "¿El keyword stuffing del SEO clásico funciona en GEO?",
    answer:
      "No. Uno de los hallazgos matizados del estudio es que las tácticas efectivas dependen del dominio, y que añadir estadísticas, citas y fuentes fue de lo más efectivo, mientras que el 'keyword stuffing' clásico del SEO no ayudaba e incluso podía perjudicar la visibilidad en la respuesta generada.",
  },
  {
    question: "¿Por qué importa hoy el paper para una web española?",
    answer:
      "Porque dio marco académico y medible a algo que las agencias hacían a ojo. De su método se lleva a la práctica algo concreto: respaldar el contenido con datos, citas y fuentes verificables mejora las probabilidades de ser citado por la IA, mientras que rellenar de palabras clave no. Es una guía de prioridades, no una lista de trucos.",
  },
];

const PaperGeoPrinceton = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "El paper de Princeton que fundó el GEO: qué demostró | esGEO",
    description:
      "El estudio 'GEO: Generative Engine Optimization' (Princeton, arXiv 2023, KDD 2024) acuñó el término y demostró que citas, datos y fuentes suben la visibilidad hasta un 40%.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/paper-geo-princeton-estudio",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>El paper de Princeton que fundó el GEO: qué demostró | esGEO</title>
        <meta
          name="description"
          content="El estudio 'GEO: Generative Engine Optimization' (Princeton, arXiv 2023, KDD 2024) acuñó el término y demostró que citas, datos y fuentes suben la visibilidad hasta un 40%."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/paper-geo-princeton-estudio" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "El estudio que fundó el GEO: qué demostró el paper de Princeton",
          "description":
            "Divulgación del paper académico 'GEO: Generative Engine Optimization' de Princeton: qué es un motor generativo, qué demostró GEO-bench y qué se lleva hoy a la práctica.",
          "url": "https://www.esgeo.ai/radar-ia/paper-geo-princeton-estudio",
          "image": "https://www.esgeo.ai/og-image.png",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": {
            "@type": "Organization",
            "@id": "https://www.esgeo.ai#organization",
            "name": "esGEO",
            "url": "https://www.esgeo.ai"
          },
          "publisher": {
            "@type": "Organization",
            "name": "esGEO",
            "url": "https://www.esgeo.ai"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/paper-geo-princeton-estudio"
          },
          "mainEntity": articleFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.esgeo.ai/" },
              { "@type": "ListItem", "position": 2, "name": "Radar IA", "item": "https://www.esgeo.ai/radar-ia" },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "El paper de Princeton que fundó el GEO",
                "item": "https://www.esgeo.ai/radar-ia/paper-geo-princeton-estudio"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #que-demostro, #que-te-llevas"
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
                El estudio que fundó el GEO: qué demostró el paper de Princeton
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>El término <GeoTerm term="geo">GEO</GeoTerm> nació en un paper académico.</strong> El
                  estudio "GEO: Generative Engine Optimization", de un equipo con Princeton University como
                  afiliación principal, se publicó en arXiv el 16 de noviembre de 2023 y se presentó en la
                  conferencia KDD 2024. Su hallazgo central: aplicar métodos GEO &mdash; citas, estadísticas,
                  citas de fuentes y lenguaje con autoridad &mdash; puede aumentar la visibilidad de una fuente en
                  la respuesta generada <strong>hasta un 40%</strong>.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Fundamentos
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="de-donde-sale" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">De dónde sale la palabra "GEO"</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando una sigla se pone de moda, es fácil pensar que la inventó una agencia con buen
                  marketing. Con GEO no fue así. La palabra tiene una partida de nacimiento concreta y
                  verificable: un artículo científico. Antes de ese paper, quien trabajaba para aparecer en
                  ChatGPT o Perplexity lo hacía a ojo, guiándose por intuición y prueba y error. El estudio de
                  Princeton puso nombre, método y números a ese trabajo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Entender el origen importa por una razón práctica: separa lo que está demostrado de lo que es
                  folclore de LinkedIn. Cuando alguien te venda "trucos GEO", conviene saber qué dice de verdad
                  la investigación que fundó la disciplina.
                </p>
              </section>

              <section id="motor-generativo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Qué es un "motor generativo"?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El paper parte de un concepto clave: el{" "}
                  <GeoTerm term="motores-generativos">motor generativo</GeoTerm>. No es un buscador clásico que
                  devuelve diez enlaces azules. Es un sistema que hace dos cosas seguidas: primero{" "}
                  <em>recupera</em> información de varias fuentes y luego <em>genera</em> una respuesta redactada
                  que cita esas fuentes dentro del texto. La combinación de recuperar y generar es lo que en la
                  técnica se conoce como <GeoTerm term="rag">RAG</GeoTerm>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ChatGPT con búsqueda, Perplexity o los <GeoTerm term="ai-overviews">AI Overviews</GeoTerm> de
                  Google son ejemplos de motores generativos. El usuario no recibe una lista para elegir; recibe
                  una respuesta ya montada. Y ahí está el cambio de juego: si tu web no aparece dentro de esa
                  respuesta, para ese usuario no existe. Optimizar para que te recupere y te cite es,
                  exactamente, lo que el paper bautizó como GEO.
                </p>
                <HighlightSnippet lastModified="2026-07-20" id="motor-insight" variant="insight" className="mb-6">
                  <p className="text-muted-foreground">
                    <strong>La idea en una frase:</strong> en un buscador compites por una posición en una lista;
                    en un motor generativo compites por ser una de las fuentes que la IA decide citar mientras
                    redacta su respuesta.
                  </p>
                </HighlightSnippet>
              </section>

              <section id="que-demostro" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué demostró el estudio</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para no quedarse en teoría, los autores construyeron un banco de pruebas llamado{" "}
                  <strong>GEO-bench</strong>: alrededor de 10.000 consultas de dominios muy diversos. Con él
                  probaron, de forma sistemática, qué cambios en el contenido hacían que una fuente ganara o
                  perdiera visibilidad dentro de la respuesta generada.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El resultado central es el dato que hoy se repite en todas partes: los métodos GEO pueden
                  aumentar la visibilidad de una fuente <strong>hasta un 40%</strong>. Entre esos métodos, los
                  que más movían la aguja eran añadir citas, incorporar estadísticas, citar fuentes concretas y
                  usar un lenguaje con autoridad. No es maquillaje: es respaldar lo que dices con evidencia.
                </p>

                <HighlightSnippet lastModified="2026-07-20" id="que-demostro-stat" variant="stat" className="mb-6">
                  <h4 className="font-semibold mb-3">Los tres números que hay que recordar</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>~10.000</strong> consultas de dominios diversos en GEO-bench, el banco de pruebas del estudio.</li>
                    <li><strong>Hasta un 40%</strong> de aumento de visibilidad de una fuente aplicando métodos GEO.</li>
                    <li><strong>16 de noviembre de 2023:</strong> fecha de publicación en arXiv (identificador arXiv:2311.09735).</li>
                  </ul>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed">
                  Ese 40% no es una promesa universal ni un "sube un 40% seguro". Es el techo que observaron en
                  sus pruebas: hay margen real de mejora si se trabaja bien el contenido. Y el trabajo bien hecho,
                  según el paper, tiene poco de esotérico y mucho de rigor.
                </p>
              </section>

              <section id="matiz" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">El matiz que casi nadie cuenta</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El titular del 40% viaja solo por internet, pero el estudio tiene un matiz que conviene no
                  perder: <strong>las tácticas efectivas dependen del dominio</strong>. Lo que funciona en un
                  tema puede no funcionar igual en otro. No hay una receta única que valga para todo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aun así, hay un patrón robusto: añadir estadísticas, citas y fuentes fue de lo más efectivo de
                  forma consistente. Y hay un anti-patrón igual de claro: el <em>keyword stuffing</em> clásico
                  del SEO &mdash; rellenar el texto de palabras clave repetidas &mdash; no ayudaba, e incluso podía
                  perjudicar la visibilidad en la respuesta generada.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Esa es, quizá, la lección más incómoda para quien viene del SEO tradicional: la técnica que
                  durante años se usó para "posicionar" puede jugar en tu contra con un motor generativo. La{" "}
                  <GeoTerm term="citabilidad">citabilidad</GeoTerm> no premia la repetición; premia la
                  sustancia.
                </p>
              </section>

              <section id="por-que-importa" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Por qué el paper importa</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El valor del estudio no está solo en el 40%. Está en que dio <strong>marco académico</strong> a
                  una práctica que hasta entonces era artesanal. Convirtió "esto parece que funciona" en "esto
                  se ha medido con un banco de 10.000 consultas". Eso cambia la conversación: permite priorizar
                  con criterio en vez de perseguir la última moda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  También ordenó el vocabulario. Al fijar el término, dio a agencias, herramientas y formadores
                  un lenguaje común. Hoy, cuando se habla de <GeoTerm term="autoridad-ia">autoridad ante la
                  IA</GeoTerm> o de <GeoTerm term="share-of-citations">cuota de citación</GeoTerm>, se está
                  construyendo sobre los cimientos que puso este trabajo.
                </p>
              </section>

              <section id="que-te-llevas" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué te llevas hoy a la práctica</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Traducido a una web española que quiere ser citada por la IA, del estudio salen prioridades
                  concretas y accionables:
                </p>
                <ul className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                  <li>
                    <strong>1. Respalda con datos, no con adjetivos.</strong> Cada afirmación importante gana si
                    va acompañada de una cifra, una fuente o una cita verificable. Es lo que más subió la
                    visibilidad en las pruebas.
                  </li>
                  <li>
                    <strong>2. Cita tus fuentes explícitamente.</strong> Enlazar y nombrar de dónde sale un dato
                    no solo da credibilidad al lector: es una señal que los motores generativos valoran.
                  </li>
                  <li>
                    <strong>3. Deja de rellenar de palabras clave.</strong> El keyword stuffing no ayuda con la
                    IA y puede restar. Escribe para responder bien, no para repetir un término.
                  </li>
                  <li>
                    <strong>4. Adapta al tema.</strong> Como las tácticas dependen del dominio, prueba en tu
                    sector qué formato de respuesta te hace aparecer y refina a partir de ahí.
                  </li>
                  <li>
                    <strong>5. Estructura para que te recuperen.</strong> Un contenido bien fragmentado
                    (<GeoTerm term="chunking">chunking</GeoTerm>) y con{" "}
                    <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> facilita que el motor
                    localice y cite el trozo exacto que responde a la pregunta.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Ninguna de estas ideas es un truco. Son las conclusiones prácticas de un trabajo que midió qué
                  mejora la <GeoTerm term="answerability">respondibilidad</GeoTerm> de una fuente ante un motor
                  generativo. El paper no te promete aparecer; te dice dónde poner el esfuerzo para tener más
                  probabilidades.
                </p>
              </section>

              <section id="fuente" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Fuente</h2>
                <HighlightSnippet lastModified="2026-07-20" id="fuente-snippet" variant="insight" className="mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Aggarwal, P., Murahari, V., Rajpurohit, T., Kalyan, A., Narasimhan, K. y Deshpande,
                    A.</strong> "GEO: Generative Engine Optimization". Princeton University (con IIT Delhi,
                    Georgia Tech y Allen Institute for AI). Publicado en arXiv el 16 de noviembre de 2023,
                    identificador <strong>arXiv:2311.09735</strong>. Presentado en la conferencia{" "}
                    <strong>KDD 2024</strong> (ACM SIGKDD). Introdujo el término "Generative Engine Optimization
                    (GEO)" y el banco de pruebas GEO-bench (~10.000 consultas).
                  </p>
                </HighlightSnippet>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  {articleFaqs.map((faq) => (
                    <div key={faq.question} className="border-l-4 border-accent pl-4">
                      <h3 className="text-lg font-medium text-primary mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/que-es-geo-guia-completa">
                  <Button variant="ghost" size="sm">Qué es GEO: guía completa</Button>
                </Link>
                <Link to="/radar-ia/geo-aeo-llmo-seo-que-termino-usar">
                  <Button variant="ghost" size="sm">GEO vs AEO vs LLMO: qué término usar</Button>
                </Link>
                <Link to="/glosario">
                  <Button variant="ghost" size="sm">Glosario GEO</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">¿Quieres que la IA recomiende tu negocio?</h3>
              <p className="text-muted-foreground mb-4">
                Aprende la metodología completa en nuestro curso de 5 módulos, del diagnóstico a la citación.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €47
              </Link>
            </div>

            <InlineEmailCapture
              className="mt-8"
              source="article_paper-geo"
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

export default PaperGeoPrinceton;
