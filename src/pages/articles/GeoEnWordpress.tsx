import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const GeoEnWordpress = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "GEO en WordPress: cómo hacer que la IA cite tu web | esGEO",
    description:
      "Guía práctica de GEO en WordPress: schema con Yoast o Rank Math, HTML semántico, h1 único, primer párrafo respondible, llms.txt y robots.txt para bots de IA.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/geo-en-wordpress",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>GEO en WordPress: cómo hacer que la IA cite tu web | esGEO</title>
        <meta
          name="description"
          content="Guía práctica de GEO en WordPress: schema con Yoast o Rank Math, HTML semántico, h1 único, primer párrafo respondible, llms.txt y robots.txt para bots de IA."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/geo-en-wordpress" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "GEO en WordPress: cómo hacer que la IA cite tu web",
          "description":
            "Cómo aplicar GEO en un sitio WordPress: aprovechar el HTML servido en servidor, marcar con schema mediante Yoast o Rank Math, cuidar la estructura semántica, crear un llms.txt y revisar robots.txt para los bots de IA.",
          "url": "https://www.esgeo.ai/radar-ia/geo-en-wordpress",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/geo-en-wordpress"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿WordPress es bueno para GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, parte con ventaja. WordPress sirve el HTML ya montado desde el servidor, así que los rastreadores de IA ven el contenido sin tener que ejecutar JavaScript, a diferencia de una SPA hecha con React o Vue. El reto en WordPress no es que la IA pueda leer la página, sino que la estructura y el marcado le pongan fácil citarte: un h1 único, HTML semántico, un primer párrafo que responda y schema bien puesto."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué plugin de schema uso en WordPress para GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los plugins SEO más extendidos ya generan datos estructurados JSON-LD válidos: Yoast SEO, Rank Math y The SEO Framework marcan Article, WebPage, BreadcrumbList y la organización de forma automática. Para preguntas frecuentes o fichas de producto puedes añadir FAQPage o Product. No necesitas un plugin nuevo si ya usas uno de estos: basta con revisar que el schema se emita y describa bien la página."
              }
            },
            {
              "@type": "Question",
              "name": "¿WordPress crea el llms.txt automáticamente?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. WordPress no genera un llms.txt por sí solo. Es un fichero de texto que colocas en la raíz del dominio con una descripción del sitio y enlaces a tus páginas clave. Puedes crearlo a mano y subirlo por FTP, generarlo con un plugin específico o servirlo desde una regla del servidor. Es una propuesta de la comunidad, no un estándar confirmado por los grandes proveedores, pero cuesta poco y no hace daño."
              }
            },
            {
              "@type": "Question",
              "name": "¿Tengo que tocar el robots.txt de WordPress para la IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Conviene revisarlo. Por defecto WordPress genera un robots.txt virtual que no bloquea a los bots de IA, pero muchos plugins de seguridad o rendimiento añaden reglas restrictivas. Comprueba que GPTBot, ClaudeBot, PerplexityBot y Google-Extended no estén bloqueados si quieres que esas plataformas puedan rastrearte y citarte. En GEO el objetivo suele ser dar permiso explícito, no restringir."
              }
            },
            {
              "@type": "Question",
              "name": "¿Sirve de algo optimizar el contenido, o basta con los plugins?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los plugins resuelven el marcado, pero no escriben por ti. El trabajo de fondo es de contenido: que cada página responda de forma directa a una pregunta, que el primer párrafo diga qué es, para quién y cuánto, y que los bloques sean autocontenidos para que la IA pueda extraerlos. El paper académico de GEO mostró mejoras de visibilidad de hasta el 40% precisamente al reescribir el contenido con estos criterios, no solo al añadir etiquetas."
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
                "name": "GEO en WordPress",
                "item": "https://www.esgeo.ai/radar-ia/geo-en-wordpress"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #paso-a-paso, #plugins-schema"
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
                GEO en WordPress: cómo hacer que la IA cite tu web
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>WordPress parte con ventaja para GEO:</strong> sirve el HTML ya montado desde el
                  servidor, así que los <GeoTerm term="rastreo">rastreadores de IA</GeoTerm> ven tu contenido
                  sin ejecutar JavaScript, algo que una SPA de React o Vue no garantiza. El reto no es el
                  renderizado, sino la estructura: un h1 único, HTML semántico, un primer párrafo que responda,{" "}
                  <GeoTerm term="datos-estructurados">schema</GeoTerm> con Yoast o Rank Math, un{" "}
                  <GeoTerm term="llms-txt">llms.txt</GeoTerm> propio y un{" "}
                  <GeoTerm term="robots-txt">robots.txt</GeoTerm> que no bloquee a los bots de IA.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Técnico
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="ventaja-wordpress" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  La buena noticia: WordPress ya sirve HTML en el servidor
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El primer obstáculo de cualquier estrategia GEO es tan básico que se pasa por alto: que el
                  bot pueda leer la página. Muchas webs modernas están hechas con frameworks de JavaScript que
                  montan el contenido en el navegador. Si el servidor solo entrega un contenedor vacío, el
                  rastreador &mdash; que normalmente no ejecuta JavaScript &mdash; ve una página en blanco por
                  muy completa que se vea en tu pantalla. Es el gate que suspenden tantas SPAs y el motivo por
                  el que necesitan <GeoTerm term="ssr-prerender">SSR o prerenderizado</GeoTerm>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WordPress, por su arquitectura clásica, no tiene ese problema. PHP arma el HTML completo en
                  el servidor y lo entrega ya con el texto dentro. Cuando <GeoTerm term="gptbot">GPTBot</GeoTerm>,{" "}
                  <GeoTerm term="claudebot">ClaudeBot</GeoTerm> o PerplexityBot piden tu URL, reciben el
                  artículo entero: titulares, párrafos, listas y enlaces. Esa es la ventaja de partida.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Por eso, en WordPress el trabajo no consiste en pelearse con el renderizado, sino en algo más
                  fino: darle al modelo la estructura y las señales que le permiten entender qué es cada cosa y,
                  sobre todo, extraer un fragmento y citarlo. Vamos a ver cómo, paso a paso.
                </p>
              </section>

              <section id="estructura-semantica" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Estructura semántica: h1 único, jerarquía y primer párrafo respondible
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un tema de WordPress bien hecho ya usa etiquetas semánticas (<code>header</code>,{" "}
                  <code>main</code>, <code>article</code>, <code>nav</code>, <code>footer</code>), pero
                  conviene comprobarlo porque no todos lo hacen igual. El problema más común es el del{" "}
                  <strong>h1 duplicado</strong>: algunos temas ponen el nombre del sitio como h1 en todas las
                  páginas y luego el título del post como otro h1. Cada página debería tener un único h1, el que
                  describe su contenido, y a partir de ahí una jerarquía limpia de h2 y h3 sin saltos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El editor de bloques (Gutenberg) te lo pone fácil: usa el bloque de encabezado con el nivel
                  correcto en lugar de poner texto en negrita y grande simulando un título. Los modelos usan esa
                  jerarquía para entender de qué trata cada sección y para hacer{" "}
                  <GeoTerm term="chunking">chunking</GeoTerm>, es decir, para trocear el texto en fragmentos que
                  luego recuperan por separado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La pieza más rentable es el <strong>primer párrafo</strong>. En lugar de una entradilla de
                  marca que tarda tres frases en llegar al grano, empieza respondiendo: qué es esto, para quién
                  y &mdash; si aplica &mdash; cuánto cuesta. Esa <GeoTerm term="answerability">respondibilidad</GeoTerm>{" "}
                  directa es lo que convierte un párrafo en un bloque citable. Un texto que exige leerlo entero
                  para entenderlo se cita mucho menos que uno autocontenido.
                </p>
              </section>

              <section id="schema" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Schema y JSON-LD: deja que Yoast o Rank Math trabajen
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> son el marcado JSON-LD
                  que declara de forma explícita qué es cada cosa de la página: un artículo, un curso, una FAQ,
                  una organización, un autor. Le ahorran al modelo tener que inferirlo y reducen el riesgo de
                  que te describa mal. La gran ventaja de WordPress es que no tienes que escribirlo a mano: los
                  plugins SEO más extendidos ya lo generan.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Yoast SEO, Rank Math y The SEO Framework emiten automáticamente el schema de{" "}
                  <code>Article</code>, <code>WebPage</code>, <code>BreadcrumbList</code> y la organización.
                  Para preguntas frecuentes puedes usar un bloque o módulo que genere <code>FAQPage</code>, y
                  para una tienda WooCommerce, el marcado <code>Product</code> con precio y disponibilidad. Lo
                  importante es que el schema exista, sea coherente con lo que ve el usuario y no se solape
                  &mdash; conviene evitar que dos plugins marquen la misma entidad dos veces.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Después de activarlo, valida. Pega una URL en un validador de datos estructurados y confirma
                  que el <code>headline</code>, la descripción, el autor y las fechas son correctos. Un schema
                  presente pero con datos erróneos es peor que no tenerlo, porque le das al modelo información
                  equivocada con apariencia de certeza.
                </p>
              </section>

              <section id="plugins-schema" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Comparativa a alto nivel de plugins de schema
                </h2>
                <HighlightSnippet lastModified="2026-07-20" id="plugins-tabla" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Plugin</th>
                          <th className="text-left p-2 font-semibold">Enfoque</th>
                          <th className="text-left p-2 font-semibold">Schema que suele cubrir</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Yoast SEO</td>
                          <td className="p-2">SEO integral con un grafo de schema conectado</td>
                          <td className="p-2">Article, WebPage, Organization, Breadcrumb</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Rank Math</td>
                          <td className="p-2">SEO integral con módulos de schema configurables</td>
                          <td className="p-2">Article, Product, FAQ, HowTo, Breadcrumb</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">The SEO Framework</td>
                          <td className="p-2">Ligero y minimalista, schema esencial de serie</td>
                          <td className="p-2">Article, WebPage, Breadcrumb</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Plugin específico de schema</td>
                          <td className="p-2">Marcado avanzado como complemento del SEO</td>
                          <td className="p-2">Tipos amplios de schema.org a medida</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>
                <p className="text-muted-foreground leading-relaxed">
                  La tabla es orientativa y las capacidades exactas dependen de la versión y la configuración de
                  cada plugin. La conclusión práctica es simple: si ya usas uno de los grandes plugins SEO, casi
                  seguro que tienes el schema básico cubierto y no necesitas instalar nada más. Elige uno, no
                  varios a la vez, para no duplicar el marcado.
                </p>
              </section>

              <section id="llms-txt" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Crear un llms.txt (WordPress no lo genera solo)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El <GeoTerm term="llms-txt">llms.txt</GeoTerm> es un fichero de texto en formato markdown que
                  se coloca en la raíz del dominio &mdash; en <code>tudominio.com/llms.txt</code> &mdash; con
                  una descripción del sitio y enlaces curados a tus páginas más importantes, pensado para
                  orientar a los modelos de lenguaje. WordPress no lo crea por su cuenta, así que tienes que
                  añadirlo tú.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tienes tres caminos: crear el fichero a mano y subirlo por FTP o desde el gestor de archivos
                  del hosting a la carpeta raíz; instalar un plugin que lo genere y lo mantenga actualizado; o
                  servirlo mediante una regla del servidor. Sea cual sea, el contenido importa más que el método:
                  un título con el nombre del proyecto, un párrafo que explique qué haces y para quién, y una
                  lista de enlaces con una frase de contexto cada uno.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Conviene ser honesto sobre su alcance: llms.txt es una propuesta de la comunidad, no un
                  estándar confirmado por los grandes proveedores de IA. Ninguno ha declarado públicamente que
                  lo consuma. Aun así, cuesta diez minutos, no hace daño y ordena tu pensamiento sobre qué
                  páginas quieres que representen tu sitio. Ponlo, pero no esperes magia.
                </p>
              </section>

              <section id="robots-txt" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Revisar el robots.txt para los bots de IA
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El <GeoTerm term="robots-txt">robots.txt</GeoTerm> declara qué rastreadores pueden acceder a
                  qué rutas. En SEO defensivo se usa para restringir; en GEO se usa al revés, para dar permiso
                  explícito. WordPress genera un robots.txt virtual por defecto que no bloquea a los bots de IA,
                  pero muchos plugins de seguridad, caché o rendimiento añaden reglas propias que sí pueden
                  cortarles el paso sin que te enteres.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Abre <code>tudominio.com/robots.txt</code> y comprueba que no haya reglas <code>Disallow</code>{" "}
                  que afecten a los agentes de IA que te interesan: <GeoTerm term="gptbot">GPTBot</GeoTerm> y
                  OAI-SearchBot de OpenAI, <GeoTerm term="claudebot">ClaudeBot</GeoTerm> de Anthropic,
                  PerplexityBot de Perplexity y Google-Extended para Gemini. Si tu plugin SEO permite editar el
                  robots.txt, puedes gestionarlo desde ahí; si no, se edita el fichero físico en la raíz.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Un matiz que suele confundir: bloquear GPTBot &mdash; que sirve para entrenamiento &mdash; no
                  es lo mismo que impedir que ChatGPT te cite en búsqueda, de lo que se encarga OAI-SearchBot.
                  Decide con criterio qué agentes permites y sé consciente de qué implica cada uno.
                </p>
              </section>

              <section id="paso-a-paso" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Paso a paso en WordPress</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si quieres una ruta ordenada para aplicar todo lo anterior en tu instalación, este es un
                  recorrido sensato de menos a más esfuerzo:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed mb-4">
                  <li>
                    <strong>Comprueba el HTML servido.</strong> Mira el código fuente de una entrada (clic
                    derecho, "ver código fuente") y confirma que el texto del artículo está ahí, no cargado por
                    JavaScript. En WordPress casi siempre lo estará.
                  </li>
                  <li>
                    <strong>Audita la jerarquía de encabezados.</strong> Un único h1 por página y h2/h3 sin
                    saltos. Corrige los temas que ponen el nombre del sitio como h1.
                  </li>
                  <li>
                    <strong>Reescribe los primeros párrafos.</strong> Que respondan qué es, para quién y cuánto
                    en las tres primeras frases. Esta es la palanca de mayor impacto.
                  </li>
                  <li>
                    <strong>Activa y valida el schema.</strong> Con Yoast, Rank Math o The SEO Framework, y
                    revisa el resultado en un validador de datos estructurados.
                  </li>
                  <li>
                    <strong>Añade FAQPage donde tenga sentido.</strong> En páginas con preguntas reales, marca
                    las respuestas como <code>FAQPage</code>; en tiendas, comprueba el <code>Product</code>.
                  </li>
                  <li>
                    <strong>Crea el llms.txt</strong> en la raíz del dominio con descripción y enlaces clave.
                  </li>
                  <li>
                    <strong>Revisa el robots.txt</strong> y asegúrate de que los bots de IA que te interesan no
                    están bloqueados por ningún plugin.
                  </li>
                </ol>
                <p className="text-muted-foreground leading-relaxed">
                  Ninguno de estos pasos exige tocar código complicado ni rehacer la web. Se trata de aprovechar
                  lo que WordPress ya te da y afinar la estructura para que la IA no tenga que adivinar nada.
                </p>
              </section>

              <section id="por-que-funciona" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Por qué este trabajo mueve la aguja</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Puede parecer que marcar schema y ordenar encabezados son detalles menores, pero la evidencia
                  apunta a que el contenido y su estructura pesan de verdad. El trabajo académico que dio nombre
                  a la disciplina &mdash; el paper "GEO: Generative Engine Optimization" de Princeton, publicado
                  en arXiv (2311.09735) en noviembre de 2023 y presentado en KDD 2024 &mdash; midió que aplicar
                  métodos <GeoTerm term="geo">GEO</GeoTerm> puede aumentar la visibilidad de una fuente hasta un
                  40% en las respuestas generativas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En un flujo de <GeoTerm term="rag">recuperación aumentada</GeoTerm>, la cita se decide en la
                  fase de recuperación, antes de generar la respuesta. Por eso importa que tu contenido esté
                  troceado en bloques autocontenidos, bien etiquetados y accesibles: es lo que aumenta tu{" "}
                  <GeoTerm term="share-of-citations">cuota de citación</GeoTerm>. WordPress te da la base;
                  el resto es criterio.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Necesito un plugin específico de GEO?
                    </h3>
                    <p className="text-muted-foreground">
                      No necesariamente. Con un buen plugin SEO tienes el schema cubierto; el llms.txt y el
                      robots.txt se gestionan aparte. La mayor parte del trabajo es de contenido y estructura,
                      no de instalar más extensiones.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Sirve esto para WooCommerce?
                    </h3>
                    <p className="text-muted-foreground">
                      Sí. Las fichas de producto se benefician del marcado <code>Product</code> con precio y
                      disponibilidad, y de una descripción que responda de forma directa qué es el producto y
                      para quién. Los mismos principios de estructura aplican.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Y si mi tema es antiguo?
                    </h3>
                    <p className="text-muted-foreground">
                      Revisa la jerarquía de encabezados y las etiquetas semánticas: son los puntos donde los
                      temas viejos suelen fallar. Si el tema mete varios h1 o no usa <code>article</code>, vale
                      la pena corregirlo o migrar a uno más limpio.
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
                <Link to="/radar-ia/que-es-llms-txt">
                  <Button variant="ghost" size="sm">Qué es llms.txt</Button>
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
              source="article_geo-wordpress"
              title="Antes de irte: el módulo F0 gratis"
              description="Te envío el módulo F0 completo (diagnóstico en 15 min): mide si la IA puede leer tu WordPress y qué arreglar primero."
              leadMagnet="el módulo F0 completo"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default GeoEnWordpress;
