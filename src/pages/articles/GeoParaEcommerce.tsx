import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const GeoParaEcommerce = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "GEO para ecommerce: que la IA recomiende tus productos | esGEO",
    description:
      "Cómo lograr que ChatGPT, Perplexity y los AI Overviews recomienden y citen tus productos: schema Product, fichas con texto real, comparativas, FAQ y reseñas.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/geo-para-ecommerce",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>GEO para ecommerce: que la IA recomiende tus productos | esGEO</title>
        <meta
          name="description"
          content="Cómo lograr que ChatGPT, Perplexity y los AI Overviews recomienden y citen tus productos: schema Product, fichas con texto real, comparativas, FAQ y reseñas."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/geo-para-ecommerce" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "GEO para ecommerce: que la IA recomiende tus productos",
          "description":
            "Guía de GEO para tiendas online: schema Product, fichas de producto con texto real servido en HTML, comparativas y guías de compra citables, FAQ por producto, ItemList de categoría y reseñas como material que la IA sintetiza.",
          "url": "https://www.esgeo.ai/radar-ia/geo-para-ecommerce",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/geo-para-ecommerce"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Cómo consigo que la IA recomiende los productos de mi tienda?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sirviendo el texto real de la ficha en el HTML (no solo con JavaScript), marcando cada producto con schema Product que incluya name, description, offers con price, priceCurrency y availability, brand y, si son reales, aggregateRating y review. Además, publica comparativas y guías de compra citables, FAQ por producto y categoría, e ItemList en las páginas de categoría. La IA recomienda lo que puede leer, entender y contrastar con datos concretos."
              }
            },
            {
              "@type": "Question",
              "name": "¿Por qué mi ecommerce headless o SPA no aparece en las respuestas de IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Muchas tiendas headless o construidas como SPA renderizan la ficha de producto solo en el navegador con JavaScript. Si el HTML que se sirve llega casi vacío, el rastreador de la IA no encuentra el texto y no puede citarlo: falla el gate de accesibilidad del contenido. La solución es renderizado en servidor o prerenderizado, de modo que la descripción, el precio y las características viajen ya en el HTML servido."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué debe responder la descripción de un producto para GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Qué es el producto, para quién es, de qué materiales está hecho, qué medidas y capacidad tiene y a qué precio, todo con cifras concretas. Una descripción tipo 'diseño premium y calidad excepcional' no aporta nada sintetizable. Una que diga 'mochila impermeable de 22 litros, poliéster reciclado, compartimento para portátil de 15 pulgadas, 39,90 euros' sí da a la IA hechos que puede citar al comparar."
              }
            },
            {
              "@type": "Question",
              "name": "¿Sirven las reseñas de clientes para GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Las reseñas son material que las IAs sintetizan cuando alguien pregunta 'qué opinan los compradores' o 'es cómoda esta silla para trabajar'. Publica las reseñas como texto en la página y márcalas con schema review y aggregateRating únicamente cuando sean valoraciones reales de clientes verificables. Marcar puntuaciones inventadas es una mala práctica que puede penalizarte."
              }
            },
            {
              "@type": "Question",
              "name": "¿En qué se diferencia el SEO de ecommerce del GEO de ecommerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El SEO de ecommerce buscaba que el usuario hiciera clic en tu ficha desde el buscador. El GEO busca que la IA nombre tu producto dentro de su respuesta, por ejemplo cuando alguien pregunta '¿mejor mochila impermeable por menos de 100 euros?'. Cambia la intención: de atraer el clic a ser la fuente que la IA cita y recomienda."
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
                "name": "GEO para ecommerce",
                "item": "https://www.esgeo.ai/radar-ia/geo-para-ecommerce"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #schema, #intencion"
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
                GEO para ecommerce: que la IA recomiende tus productos
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Para que ChatGPT, Perplexity o los{" "}
                  <GeoTerm term="ai-overviews">AI Overviews</GeoTerm> recomienden tus productos</strong>,
                  tu tienda tiene que servir el texto real de la ficha en el HTML, marcar cada producto con{" "}
                  <GeoTerm term="datos-estructurados">schema Product</GeoTerm> (precio, disponibilidad,
                  marca y valoraciones reales) y responder con cifras a qué es, para quién, de qué material,
                  qué medidas y a qué precio. El objetivo del <GeoTerm term="geo">GEO</GeoTerm> no es el
                  clic: es que la IA <strong>nombre tu producto</strong> dentro de su respuesta.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Estrategia
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="intencion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Del clic a la mención: cambia la intención
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durante veinte años, el SEO de ecommerce tuvo un único objetivo medible: que el usuario
                  viera tu ficha en el buscador y <em>hiciera clic</em> para llegar a ella. Toda la
                  optimización &mdash; el título, la meta descripción, los enlaces internos &mdash; empujaba
                  hacia ese clic. El GEO cambia la pregunta. Cuando alguien escribe en ChatGPT o Perplexity
                  &laquo;¿mejor mochila impermeable por menos de 100&nbsp;&euro;?&raquo;, no va a recibir diez
                  enlaces azules: va a recibir una respuesta redactada con dos o tres productos concretos
                  nombrados dentro. El nuevo objetivo es <strong>ser uno de esos productos citados</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Esto tiene una consecuencia incómoda: la IA solo puede recomendar un producto si primero
                  puede <em>leerlo</em>, <em>entenderlo</em> y <em>contrastarlo</em> con datos concretos. Un
                  catálogo lleno de fotos bonitas y descripciones vacías es invisible para el modelo. La
                  <GeoTerm term="citabilidad"> citabilidad</GeoTerm> de una ficha depende de que contenga
                  hechos verificables, no adjetivos.
                </p>
              </section>

              <section id="gate-a" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  El gate del contenido: HTML servido, no solo JavaScript
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Es el fallo más común y el más caro. Muchas tiendas modernas se construyen como aplicaciones
                  headless o SPA (Single Page Application): el servidor manda un HTML casi vacío y el navegador
                  monta la ficha después, con JavaScript, pidiendo los datos a una API. Para un humano con
                  navegador funciona perfecto. Para el rastreador de una IA, que en muchos casos no ejecuta
                  todo ese JavaScript, la página llega en blanco. Sin texto servido, no hay nada que citar:
                  falla el primer <GeoTerm term="answerability">gate de accesibilidad</GeoTerm> del contenido.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La solución es asegurar que la descripción, las características, el precio y las reseñas
                  viajen ya dentro del HTML que se sirve, mediante renderizado en servidor (SSR) o
                  prerenderizado estático. Una prueba rápida: pide el HTML de una ficha con
                  &laquo;ver código fuente&raquo; o con <code>curl</code> y busca la descripción del producto.
                  Si no está ahí, tampoco está para la IA.
                </p>
              </section>

              <section id="schema" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Schema Product: los datos que la IA reutiliza
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> son la forma más
                  fiable de decirle a un motor generativo &laquo;esto es un producto, y estos son sus
                  datos&raquo; sin ambigüedad. Cada ficha debería llevar un bloque{" "}
                  <code>Product</code> con, al menos, estos campos:
                </p>
                <HighlightSnippet lastModified="2026-07-20" id="schema-tabla" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Campo</th>
                          <th className="text-left p-2 font-semibold">Para qué sirve</th>
                          <th className="text-left p-2 font-semibold">Cuándo incluirlo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-success">name / description</td>
                          <td className="p-2">Identifica el producto y lo describe con texto</td>
                          <td className="p-2">Siempre</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">offers.price</td>
                          <td className="p-2">Precio numérico que la IA puede filtrar</td>
                          <td className="p-2">Siempre, con priceCurrency</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">offers.availability</td>
                          <td className="p-2">En stock / agotado</td>
                          <td className="p-2">Siempre, actualizado</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">brand</td>
                          <td className="p-2">Marca, clave en comparativas</td>
                          <td className="p-2">Siempre que aplique</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">aggregateRating</td>
                          <td className="p-2">Valoración media y número de reseñas</td>
                          <td className="p-2">Solo si son reseñas reales</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">review</td>
                          <td className="p-2">Opiniones individuales de compradores</td>
                          <td className="p-2">Solo si son reales y verificables</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>
                <p className="text-muted-foreground leading-relaxed">
                  Regla dura: <strong>aggregateRating y review solo si son valoraciones reales</strong>. Marcar
                  puntuaciones inventadas para forzar las estrellas es una mala práctica que las plataformas
                  penalizan y que, además, destruye la confianza cuando la IA contrasta lo que dices con otras
                  fuentes. El <code>priceCurrency</code> (EUR) y una disponibilidad al día importan tanto como
                  el precio: una respuesta que recomienda algo agotado envejece mal.
                </p>
              </section>

              <section id="descripciones" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Descripciones que responden, no que adornan
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La ficha de producto es, para el GEO, una pequeña página de respuestas. Debe contestar de
                  forma explícita y con cifras a cinco preguntas: <strong>qué es</strong>,{" "}
                  <strong>para quién</strong>, <strong>de qué materiales</strong>,{" "}
                  <strong>qué medidas o capacidad</strong> y <strong>a qué precio</strong>. Compara:
                </p>
                <HighlightSnippet lastModified="2026-07-20" id="descripcion-ejemplo" variant="stat" className="mb-6">
                  <p className="leading-relaxed mb-2">
                    <strong>Vacío (no citable):</strong> &laquo;Mochila de diseño premium con acabados de
                    máxima calidad, pensada para quienes exigen lo mejor.&raquo;
                  </p>
                  <p className="leading-relaxed">
                    <strong>Con hechos (citable):</strong> &laquo;Mochila impermeable de 22&nbsp;litros en
                    poliéster reciclado, con compartimento acolchado para portátil de 15&nbsp;pulgadas, dos
                    bolsillos exteriores y cierre resistente al agua. Pesa 650&nbsp;gramos. Ideal para
                    desplazamientos diarios en bici. 39,90&nbsp;&euro;.&raquo;
                  </p>
                </HighlightSnippet>
                <p className="text-muted-foreground leading-relaxed">
                  La segunda versión le da al modelo material que puede extraer y comparar: litros, material,
                  peso, uso, precio. Cuando alguien pregunte por &laquo;mochila impermeable ligera para bici
                  por menos de 50&nbsp;&euro;&raquo;, la IA tiene los datos para incluirla en la respuesta. La
                  primera versión, en cambio, no aporta ningún hecho: es ruido.
                </p>
              </section>

              <section id="comparativas" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Comparativas y guías de compra citables
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las preguntas de compra en IA son casi siempre comparativas: &laquo;¿mejor X para Y?&raquo;,
                  &laquo;¿A o B para Z?&raquo;, &laquo;alternativas a W por menos de N euros&raquo;. Si en tu
                  web publicas guías de compra y comparativas honestas &mdash;con tablas de características,
                  rangos de precio y recomendaciones por caso de uso&mdash; le estás dando al modelo el texto
                  ya masticado que necesita para responder. Una guía tipo &laquo;Cómo elegir mochila
                  impermeable: capacidad, materiales y precio&raquo; que enlaza a tus productos concretos es
                  una de las piezas con más <GeoTerm term="citabilidad">citabilidad</GeoTerm> del ecommerce.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aquí no vale el autobombo. Una comparativa donde tu producto siempre gana en todo tiene poco
                  valor como fuente. La que la IA cita es la que reconoce matices: para quién es mejor cada
                  opción, en qué gana la competencia, qué caso de uso descarta tu producto. La honestidad es,
                  paradójicamente, lo que aumenta la <GeoTerm term="share-of-citations">cuota de
                  citación</GeoTerm>.
                </p>
              </section>

              <section id="faq-categoria" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  FAQ por producto y por categoría
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cada producto y cada categoría acumulan preguntas reales de clientes: &laquo;¿es apto para
                  lavavajillas?&raquo;, &laquo;¿cabe un portátil de 16&nbsp;pulgadas?&raquo;, &laquo;¿qué talla
                  elijo si estoy entre dos?&raquo;. Publicar esas preguntas con su respuesta como texto, y
                  marcarlas con schema FAQPage, hace dos cosas: cubre la <em>cola larga</em> de dudas que la
                  IA recibe y le entrega respuestas ya redactadas que puede citar casi literalmente. Responde
                  la pregunta en la primera frase, con el dato, y desarrolla después.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En categoría, la FAQ resuelve la intención de investigación: &laquo;¿qué diferencia hay entre
                  impermeable y resistente al agua?&raquo;, &laquo;¿qué capacidad necesito para un viaje de fin
                  de semana?&raquo;. Son las preguntas que la gente hace <em>antes</em> de decidir, justo donde
                  quieres que la IA te encuentre.
                </p>
              </section>

              <section id="itemlist-feeds" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Categorías, ItemList y feeds
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las páginas de categoría son mapas del catálogo. Marcarlas con <code>ItemList</code> &mdash;
                  la lista ordenada de productos que contienen&mdash; ayuda al motor a entender qué vendes y
                  cómo se agrupa. Sumado a un feed de producto bien mantenido (nombre, precio, disponibilidad,
                  identificadores), das una imagen coherente de tu inventario que la IA puede leer sin
                  reconstruirla ficha a ficha. La coherencia entre lo que dice el feed, el schema y el HTML
                  visible es lo que genera confianza en la fuente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Un archivo <GeoTerm term="llms-txt">llms.txt</GeoTerm> puede orientar además a los modelos
                  hacia tus páginas más valiosas &mdash;guías, categorías principales, productos destacados&mdash;
                  a modo de índice legible por máquinas. No sustituye al schema, pero refuerza qué partes del
                  catálogo quieres que se consideren primero.
                </p>
              </section>

              <section id="resenas-duplicados" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Reseñas, duplicados y paginación
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las reseñas de clientes son material que las IAs <strong>sintetizan</strong>. Cuando alguien
                  pregunta &laquo;¿es cómoda esta silla para ocho horas de trabajo?&raquo;, el modelo tira de
                  las opiniones publicadas para construir un veredicto. Publícalas como texto en la página
                  &mdash;no solo dentro de un widget que carga por JavaScript&mdash; y márcalas con schema
                  review únicamente cuando sean reales. Diez reseñas concretas y variadas valen más, para la
                  síntesis, que un &laquo;4,8 estrellas&raquo; sin contexto.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El gran reto técnico del ecommerce es el <strong>contenido duplicado y la paginación</strong>:
                  variantes de color con URLs distintas y la misma descripción, filtros que generan miles de
                  URLs casi idénticas, listados paginados que fragmentan la categoría. Para un motor generativo,
                  esto diluye la señal: no sabe cuál es la versión canónica que debe citar. Ordénalo con
                  etiquetas <code>canonical</code> claras, gestión sensata de los parámetros de filtro y
                  descripciones diferenciadas por variante cuando aporten algo. Un catálogo limpio se cita
                  mejor que uno grande y desordenado.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Puedo marcar aggregateRating aunque tenga pocas reseñas?
                    </h3>
                    <p className="text-muted-foreground">
                      Solo si son reales. No hay un mínimo mágico, pero marcar valoraciones inventadas o
                      infladas es una mala práctica que penaliza y que la IA acaba contradiciendo al cruzar
                      fuentes. Si aún no tienes reseñas fiables, no marques la puntuación.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿El GEO sustituye al SEO en mi tienda?
                    </h3>
                    <p className="text-muted-foreground">
                      No. El HTML semántico, el rastreo, la velocidad y el schema siguen siendo la base
                      compartida. Lo que cambia es la métrica de éxito: de la posición y el clic a que la IA
                      nombre tu producto en la respuesta.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">
                      ¿Por dónde empiezo si mi tienda es una SPA?
                    </h3>
                    <p className="text-muted-foreground">
                      Por el gate de contenido: comprueba si la descripción y el precio están en el HTML
                      servido. Si no, prioriza el renderizado en servidor o el prerenderizado de las fichas
                      antes que cualquier otra táctica.
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
                <Link to="/radar-ia/estructura-web-para-lenguaje">
                  <Button variant="ghost" size="sm">Estructura web para lenguaje</Button>
                </Link>
                <Link to="/glosario">
                  <Button variant="ghost" size="sm">Glosario GEO</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">¿Quieres que la IA recomiende tus productos?</h3>
              <p className="text-muted-foreground mb-4">
                Aprende la metodología completa en nuestro curso de 5 módulos.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €47
              </Link>
            </div>

            <InlineEmailCapture
              className="mt-8"
              source="article_geo-ecommerce"
              title="Antes de irte: el módulo F0 gratis"
              description="Te envío el módulo F0 completo (diagnóstico en 15 min): mide si la IA puede leer las fichas de tu tienda y qué arreglar primero."
              leadMagnet="el módulo F0 completo"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default GeoParaEcommerce;
