import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const GeoLocalNegocios = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "GEO local: cómo hacer que la IA recomiende tu negocio en tu ciudad | esGEO",
    description:
      "Aplica GEO a negocios locales para que ChatGPT, Perplexity, Gemini y AI Overviews te recomienden cuando alguien busca el mejor sitio de tu ciudad.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/geo-local-negocios",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>GEO local: cómo hacer que la IA recomiende tu negocio en tu ciudad | esGEO</title>
        <meta
          name="description"
          content="Aplica GEO a negocios locales para que ChatGPT, Perplexity, Gemini y AI Overviews te recomienden cuando alguien busca el mejor sitio de tu ciudad."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/geo-local-negocios" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "GEO local: cómo hacer que la IA recomiende tu negocio en tu ciudad",
          "description":
            "Guía práctica de GEO para negocios locales: schema LocalBusiness, coherencia NAP, Google Business Profile, reseñas y contenido que responde preguntas locales para ser citado por la IA.",
          "url": "https://www.esgeo.ai/radar-ia/geo-local-negocios",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/geo-local-negocios"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es el GEO local y en qué se diferencia del SEO local?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El SEO local busca que tu negocio aparezca en el mapa y en el pack de resultados de Google cuando alguien busca desde tu ciudad. El GEO local busca algo distinto: que la IA (ChatGPT, Perplexity, Gemini, AI Overviews) te mencione y te cite dentro de la respuesta conversacional cuando alguien pregunta por el mejor sitio de una categoría en tu ciudad. En SEO local ganas una posición en una lista; en GEO local ganas una frase dentro de una recomendación."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué datos necesita tener mi web para que la IA recomiende mi negocio local?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los hechos verificables de tu negocio, marcados con schema LocalBusiness: nombre exacto, dirección, coordenadas geográficas, teléfono, horario y tipo de negocio. Además, contenido que responda preguntas locales concretas con datos: en qué zona estás, tu especialidad, rango de precios y a quién sirves. La IA cita mejor lo que puede leer como hechos claros, no lo que suena a eslogan."
              }
            },
            {
              "@type": "Question",
              "name": "¿Por qué importa la coherencia NAP para el GEO local?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NAP es nombre, dirección y teléfono. Si esos tres datos aparecen escritos de forma distinta en tu web, en Google Business Profile y en los directorios, la IA recibe señales contradictorias sobre quién eres y dónde estás, y ante la duda no te cita. Un NAP idéntico en todas partes reduce la ambigüedad y hace que el sistema pueda afirmar tu información con confianza."
              }
            },
            {
              "@type": "Question",
              "name": "¿Las IAs leen las reseñas de mi negocio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los motores generativos que consultan fuentes en tiempo real pueden apoyarse en agregadores públicos, como Google Business Profile, donde viven tus reseñas, y sintetizan lo que dicen muchos clientes en frases como 'destaca por su atención' o 'conocido por sus precios ajustados'. No cuenta solo la nota media: cuenta el patrón temático de lo que la gente repite. Por eso conviene tener reseñas reales, recientes y descriptivas."
              }
            },
            {
              "@type": "Question",
              "name": "¿Una web local en HTML servido parte con ventaja frente a una SPA vacía?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Muchos rastreadores de IA leen el HTML que llega en la respuesta del servidor y no ejecutan JavaScript como lo hace un navegador. Si tu web sirve el contenido y los datos del negocio directamente en el HTML, la IA los ve. Si tu web es una SPA que pinta todo con JavaScript y deja el HTML inicial casi vacío, ese contenido puede quedar invisible. Un negocio local con una web sencilla bien servida suele partir con ventaja frente a una marca con una SPA que no muestra nada en el HTML inicial."
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
                "name": "GEO local para negocios",
                "item": "https://www.esgeo.ai/radar-ia/geo-local-negocios"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #nap, #seo-vs-geo-local"
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
                GEO local: cómo hacer que la IA recomiende tu negocio en tu ciudad
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>El GEO local es aplicar <GeoTerm term="geo">GEO</GeoTerm> a un negocio de barrio</strong>{" "}
                  &mdash; restaurante, clínica, tienda o autónomo &mdash; para que ChatGPT, Perplexity, Gemini
                  y los <GeoTerm term="ai-overviews">AI Overviews</GeoTerm> te mencionen cuando alguien pregunta
                  por el "mejor X en mi ciudad". No se trata de salir en el mapa, sino de ser la fuente que la
                  IA cita dentro de la respuesta conversacional.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Estrategia
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="que-cambia" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">La pregunta ha cambiado de sitio</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durante años, cuando alguien quería "el mejor ramen de Malasaña" o "un dentista de confianza
                  en Sevilla", abría Google, miraba el mapa y comparaba estrellas. Hoy, cada vez más gente le
                  hace esa misma pregunta a ChatGPT, a Perplexity o al asistente de su móvil, y espera una
                  respuesta en prosa: "Te recomiendo tres sitios. El primero destaca por...". Esa respuesta no
                  es una lista de diez enlaces; son dos o tres nombres citados, y punto.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ahí está el cambio de juego para un negocio local. Antes competías por una posición en una
                  lista larga. Ahora compites por estar entre los dos o tres negocios que la IA nombra en su
                  recomendación. Si no te cita, no existes en esa conversación, aunque estés en el mapa. El GEO
                  local es el trabajo de conseguir que te nombre.
                </p>
              </section>

              <section id="seo-vs-geo-local" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">SEO local clásico vs GEO local</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No son lo mismo y conviene no confundirlos. El SEO local persigue una posición: aparecer en
                  el pack de tres resultados con mapa, subir en la búsqueda geolocalizada, acumular reseñas para
                  mejorar el ranking. El objetivo es que el usuario te vea en una lista y haga clic.
                </p>
                <HighlightSnippet lastModified="2026-07-20" id="tabla" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Aspecto</th>
                          <th className="text-left p-2 font-semibold">SEO local clásico</th>
                          <th className="text-left p-2 font-semibold">GEO local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Dónde apareces</td>
                          <td className="p-2">Mapa y pack de resultados</td>
                          <td className="p-2">Dentro de la respuesta conversacional</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Qué ganas</td>
                          <td className="p-2">Una posición en una lista</td>
                          <td className="p-2">Una mención citada en prosa</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Cómo compite el usuario</td>
                          <td className="p-2">Compara y hace clic</td>
                          <td className="p-2">Recibe dos o tres nombres y decide</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Qué pesa</td>
                          <td className="p-2">Proximidad, señales de ranking</td>
                          <td className="p-2"><GeoTerm term="citabilidad">Citabilidad</GeoTerm> y hechos claros</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>
                <p className="text-muted-foreground leading-relaxed">
                  El GEO local persigue una mención: que cuando el motor generativo construye su respuesta,
                  tenga tus datos claros, tus hechos verificables y tus reseñas sintetizadas, y decida nombrarte.
                  Comparten cimientos &mdash; ficha bien puesta, reseñas reales, web sana &mdash; pero la métrica
                  de éxito es distinta: del clic a la mención.
                </p>
              </section>

              <section id="schema" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Schema LocalBusiness: dar tus hechos en claro</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El primer trabajo del GEO local es entregarle a la IA tus datos como hechos, no como diseño.
                  Los <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> del tipo
                  LocalBusiness son la forma estándar de hacerlo: un bloque de código en tu web que declara,
                  sin ambigüedad, quién eres y dónde estás.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lo mínimo que debe incluir: el nombre exacto del negocio, la dirección postal completa, las
                  coordenadas geográficas (latitud y longitud), el teléfono, el horario de apertura por días y
                  el tipo concreto de negocio (Restaurant, Dentist, Store, según corresponda). Si de verdad
                  recoges valoraciones en tu propia web, puedes añadir aggregateRating &mdash; pero solo si es
                  real y verificable. Inventar una nota media es un riesgo, no un atajo: rompe la confianza que
                  intentas construir.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La idea de fondo es sencilla: cuanto más fácil le pones a la máquina afirmar un dato sobre ti
                  con seguridad, más probable es que lo use. El schema convierte tu página en algo que la IA
                  puede leer como una ficha, no como un folleto.
                </p>
              </section>

              <section id="nap" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Coherencia NAP: la misma verdad en todas partes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NAP significa nombre, dirección y teléfono. Parece trivial, pero es donde más negocios locales
                  se pierden. "Clínica Dental Torres", "Dental Torres" y "C. Dental Dr. Torres" pueden ser el
                  mismo sitio, pero para un sistema que agrega información son tres señales que no encajan del
                  todo. Lo mismo con una dirección escrita como "C/ Mayor 4, 2ºB" en un lado y "Calle Mayor,
                  número 4" en otro, o un teléfono con y sin prefijo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El GEO local exige que ese trío &mdash; nombre, dirección y teléfono &mdash; aparezca escrito
                  exactamente igual en toda tu web, en tu ficha de Google, en tus redes y en cualquier directorio
                  donde estés. Cuando los datos coinciden en todas partes, la IA puede afirmar tu información con
                  confianza. Cuando se contradicen, ante la duda, prefiere no citarte. La coherencia NAP no es
                  burocracia: es reducir la ambigüedad que impide que te recomienden.
                </p>
              </section>

              <section id="gbp" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Google Business Profile: una fuente que la IA consulta</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tu ficha de Google Business Profile no es solo para salir en el mapa. Es una fuente pública,
                  estructurada y actualizada donde viven tu categoría, tu horario, tus fotos y, sobre todo, tus
                  reseñas. Los motores generativos que se apoyan en información local encuentran ahí un resumen
                  fiable de tu negocio.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Por eso vale la pena tenerla completa y sin huecos: categoría principal bien elegida, horario
                  al día (incluidos festivos), atributos que describan qué ofreces y una descripción con hechos,
                  no adjetivos. Una ficha rellenada a medias le da a la IA menos material del que tirar cuando
                  construye una recomendación. Una ficha completa y coherente con tu web refuerza el mismo mensaje
                  desde dos sitios.
                </p>
              </section>

              <section id="resenas" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Reseñas: cómo las sintetiza la IA</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando un motor generativo recomienda un negocio, no suele leer una reseña suelta: sintetiza
                  el patrón de muchas. Detecta qué repiten los clientes y lo condensa en frases como "conocido
                  por su trato cercano", "la gente destaca los precios ajustados" o "recomendado para familias".
                  Ese resumen temático es lo que acaba en la respuesta.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La consecuencia práctica: no cuenta solo la nota media, cuenta lo que la gente dice y con qué
                  palabras. Reseñas reales, recientes y descriptivas &mdash; que mencionen el plato, el servicio
                  concreto, la zona &mdash; le dan a la IA material rico para citarte con precisión. Pedir a
                  clientes satisfechos que cuenten qué les gustó, en sus palabras, ayuda más que perseguir una
                  cifra. Y responder a las reseñas, incluidas las regulares, añade contexto que también se lee.
                </p>
              </section>

              <section id="contenido-local" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Contenido que responde preguntas locales con hechos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La <GeoTerm term="answerability">respondibilidad</GeoTerm> es tan importante en local como en
                  cualquier otro sitio. Piensa en las preguntas reales que hace alguien de tu ciudad: "¿cuánto
                  cuesta una limpieza dental en Granada?", "¿hay parking cerca?", "¿abrís los domingos?",
                  "¿tenéis menú sin gluten?". Tu web debería responderlas de forma directa y con datos: precios
                  orientativos, zona exacta, especialidad, horarios, servicios concretos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Los hechos se citan; los eslóganes no. "Somos los mejores de la ciudad" no le sirve a la IA
                  para nada. "Estamos en el barrio de la Magdalena, a cinco minutos de la estación, especializados
                  en ortodoncia invisible, con primera visita gratuita" sí: son afirmaciones que la máquina puede
                  extraer y usar. Escribe para responder, no para presumir.
                </p>
              </section>

              <section id="paginas-servicio" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Páginas por servicio y por localidad</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un negocio local rara vez hace una sola cosa ni sirve a un solo sitio. Un fisioterapeuta trata
                  lesiones deportivas, dolor de espalda y rehabilitación; una gestoría cubre autónomos, sociedades
                  y herencias; una tienda puede tener local y hacer envíos a varios barrios. Reunir todo en una
                  home genérica diluye tus hechos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Crear una página por servicio y, cuando tiene sentido, por localidad o zona, permite responder
                  con precisión a preguntas muy concretas. Una página "Ortodoncia invisible en Granada centro"
                  responde exactamente a esa consulta mejor que una home que lo mezcla todo. Eso sí: cada página
                  debe aportar información real y distinta &mdash; nada de clonar el mismo texto cambiando el
                  nombre de la calle. La <GeoTerm term="autoridad-ia">autoridad</GeoTerm> se gana con contenido
                  útil, no con plantillas repetidas.
                </p>
              </section>

              <section id="html-vs-spa" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Por qué una web sencilla bien servida gana a la SPA vacía</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aquí el negocio de barrio parte, a veces, con ventaja sobre una marca grande. Muchos
                  <GeoTerm term="motores-generativos"> motores generativos</GeoTerm> leen el HTML que devuelve
                  el servidor y no ejecutan JavaScript como lo haría un navegador completo. Si tu web sirve el
                  contenido &mdash; nombre, dirección, servicios, textos &mdash; directamente en ese HTML, la IA
                  lo ve sin esfuerzo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En cambio, muchas webs modernas son SPA (single page application): el HTML inicial llega casi
                  vacío y todo se pinta después con JavaScript. Para un ojo humano se ve bien; para un rastreador
                  que no ejecuta ese JavaScript, la página parece un cascarón sin contenido. Una cadena con una
                  web deslumbrante pero construida así puede resultar ilegible para la IA, mientras que la web
                  modesta del restaurante de la esquina, servida en HTML plano, se lee perfectamente. Complementar
                  esto con un archivo <GeoTerm term="llms-txt">llms.txt</GeoTerm> que resuma tus datos clave es un
                  extra que refuerza el mensaje.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Sirve el GEO local si no tengo tienda física, solo soy autónomo?</h3>
                    <p className="text-muted-foreground">
                      Sí. Un autónomo que da servicio en una zona (un electricista, una diseñadora, un profesor
                      particular) puede declarar su área de servicio, su especialidad y sus datos igual que un
                      local con puerta a la calle. Lo que importa es que tus hechos sean claros y coherentes.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Puedo poner una nota media si aún no tengo reseñas propias?</h3>
                    <p className="text-muted-foreground">
                      No. El aggregateRating del schema solo debe reflejar valoraciones reales y verificables.
                      Inventar una cifra rompe la confianza y puede volverse en tu contra. Si no tienes reseñas
                      propias todavía, trabaja primero las de Google Business Profile.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿El GEO local sustituye al SEO local?</h3>
                    <p className="text-muted-foreground">
                      No, lo complementa. Comparten cimientos &mdash; NAP coherente, ficha completa, reseñas
                      reales &mdash; pero persiguen cosas distintas: el SEO local, una posición en el mapa; el
                      GEO local, una mención dentro de la respuesta de la IA. Bien hecho, un trabajo refuerza el
                      otro.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/datos-estructurados-modelos-generativos">
                  <Button variant="ghost" size="sm">Datos estructurados para modelos generativos</Button>
                </Link>
                <Link to="/radar-ia/que-es-geo-guia-completa">
                  <Button variant="ghost" size="sm">Qué es GEO: guía completa</Button>
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
              source="article_geo-local"
              title="Antes de irte: el módulo F0 gratis"
              description="Te envío el módulo F0 completo (diagnóstico en 15 min): mide si la IA puede leer tu web local y qué arreglar primero."
              leadMagnet="el módulo F0 completo"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default GeoLocalNegocios;
