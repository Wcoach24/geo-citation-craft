import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const QueEsLlmsTxt = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Qué es llms.txt y cómo crearlo paso a paso (2026) | esGEO",
    description:
      "Qué es el archivo llms.txt, quién lo propuso, cómo se estructura y cómo crear el tuyo paso a paso. Incluye plantilla descargable y qué esperar de verdad de su adopción.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/que-es-llms-txt",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>Qué es llms.txt y cómo crearlo paso a paso (2026) | esGEO</title>
        <meta
          name="description"
          content="Qué es el archivo llms.txt, quién lo propuso, cómo se estructura y cómo crear el tuyo paso a paso. Incluye plantilla descargable y qué esperar de verdad de su adopción."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/que-es-llms-txt" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "Qué es llms.txt y cómo crearlo paso a paso",
          "description":
            "Definición, origen y estructura del archivo llms.txt, guía práctica para crear el tuyo y una lectura honesta de su adopción real en 2026.",
          "url": "https://www.esgeo.ai/radar-ia/que-es-llms-txt",
          "datePublished": "2026-07-15",
          "dateModified": "2026-07-15",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/que-es-llms-txt"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es el archivo llms.txt?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Es un archivo de texto en formato Markdown, colocado en la raíz del dominio (/llms.txt), que da a los modelos de lenguaje un mapa curado de tu sitio: un resumen del proyecto y enlaces a las páginas más útiles. Lo propuso Jeremy Howard, cofundador de Answer.AI, el 3 de septiembre de 2024."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cómo se estructura un archivo llms.txt?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El único bloque obligatorio es un H1 con el nombre del proyecto. Le sigue un blockquote con un resumen, secciones opcionales de contexto en Markdown y una o varias secciones con encabezado H2 que contienen listas de enlaces en formato [nombre](url): nota. Debe ir en la raíz: https://tudominio.com/llms.txt."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cuál es la diferencia entre llms.txt y llms-full.txt?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "llms.txt es el índice curado: resumen más enlaces. La versión completa (llms-full.txt o llms-ctx-full.txt) concatena el contenido de esas páginas en un único archivo de texto plano, para que el modelo lo consuma entero sin navegar. El primero es el mapa; el segundo, el territorio."
              }
            },
            {
              "@type": "Question",
              "name": "¿Google y ChatGPT usan llms.txt de verdad en 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Es una propuesta de la comunidad, no un estándar oficial adoptado por los grandes buscadores. Google ha dicho que no lo usa para clasificar, y ningún gran proveedor de LLM ha confirmado usarlo para citar. Sí lo han adoptado plataformas de documentación y herramientas de desarrollo. Cuesta poco publicarlo y documenta tu sitio con limpieza, pero no esperes que por sí solo te haga aparecer en las respuestas."
              }
            },
            {
              "@type": "Question",
              "name": "¿llms.txt sustituye al robots.txt o al sitemap?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. robots.txt dice a los bots qué pueden rastrear, el sitemap lista todas tus URLs para indexación, y llms.txt ofrece a los modelos una selección curada y legible de lo más importante. Son complementarios: cada uno resuelve un problema distinto."
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
                "name": "Qué es llms.txt",
                "item": "https://www.esgeo.ai/radar-ia/que-es-llms-txt"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #estructura, #pasos"
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
                Qué es llms.txt y cómo crearlo paso a paso
              </h1>

              <HighlightSnippet lastModified="2026-07-15" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>
                    <GeoTerm term="llms-txt">llms.txt</GeoTerm> es un archivo Markdown en la raíz de tu web
                    (/llms.txt) que le da a los modelos de lenguaje un mapa curado de tu sitio:
                  </strong>{" "}
                  un resumen y enlaces a lo que de verdad importa. Lo propuso Jeremy Howard (Answer.AI) el 3
                  de septiembre de 2024. El único bloque obligatorio es el título; el resto suma.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 15 de julio de 2026 • Categoría: Técnico
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="para-que" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Para qué sirve (el problema que resuelve)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando un modelo de lenguaje visita tu web, se encuentra el mismo HTML lleno de menús,
                  banners, scripts y avisos de cookies que un humano &mdash; solo que sin la capacidad de
                  ignorarlos de un vistazo. Gran parte de su "presupuesto de atención" se va en descartar
                  ruido. El <GeoTerm term="llms-txt">llms.txt</GeoTerm> propone un atajo: un único archivo,
                  en texto limpio, que dice "esto es lo que soy y estas son mis páginas importantes".
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Es la misma idea que el robots.txt o el sitemap, pero pensada para el consumo de un{" "}
                  <GeoTerm term="motores-generativos">motor generativo</GeoTerm>, no de un rastreador
                  clásico. Donde el sitemap lista <em>todo</em>, el llms.txt <em>selecciona</em>.
                </p>
              </section>

              <section id="estructura" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo se estructura (la especificación real)</h2>

                <HighlightSnippet lastModified="2026-07-15" id="estructura-snippet" variant="insight" className="mb-6">
                  <p className="text-lg leading-relaxed" data-speakable="true">
                    Según la especificación de llmstxt.org, el orden es: <strong>1)</strong> un H1 con el
                    nombre del proyecto (lo único obligatorio); <strong>2)</strong> un blockquote con el
                    resumen; <strong>3)</strong> secciones de contexto opcionales; <strong>4)</strong> una o
                    varias secciones H2 con listas de enlaces <code>[nombre](url): nota</code>.
                  </p>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed mb-3">Un ejemplo mínimo válido:</p>
                <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                  <code>{`# esGEO

> Curso y herramientas en español para que ChatGPT, Perplexity, Claude
> y Gemini citen tu web. Metodología F1-F5 y auditor de legibilidad-máquina.

## Documentación
- [Qué es GEO](https://www.esgeo.ai/radar-ia/que-es-geo-guia-completa): guía completa
- [Glosario GEO](https://www.esgeo.ai/glosario): definiciones clave

## Curso
- [Metodología F1-F5](https://www.esgeo.ai/metodologia): cómo puntúa el rubric`}</code>
                </pre>
                <p className="text-muted-foreground leading-relaxed">
                  La versión ampliada &mdash; <strong>llms-full.txt</strong> (o llms-ctx-full.txt) &mdash;
                  no lista enlaces: concatena el contenido de esas páginas en texto plano para que el modelo
                  lo lea entero. En esGEO ya publicamos una en{" "}
                  <code>/llms-full.txt</code>, generada en el build a partir de todas las rutas.
                </p>
              </section>

              <section id="pasos" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Crear el tuyo en 5 pasos</h2>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground leading-relaxed mb-6">
                  <li>
                    <strong>Escribe el H1 y el resumen.</strong> Nombre del proyecto y un blockquote de una o
                    dos frases: qué eres, para quién y en qué idioma. Es la parte que más se lee.
                  </li>
                  <li>
                    <strong>Elige tus páginas clave.</strong> No las metas todas. Las 8-15 que mejor
                    responden a lo que la gente pregunta sobre tu tema.
                  </li>
                  <li>
                    <strong>Agrúpalas con H2.</strong> Documentación, Producto, Precios, Blog. Cada enlace en
                    formato <code>[nombre](url): nota breve</code>.
                  </li>
                  <li>
                    <strong>Súbelo a la raíz.</strong> Debe responder en{" "}
                    <code>https://tudominio.com/llms.txt</code>. Si usas un framework, colócalo en la carpeta
                    de estáticos (por ejemplo <code>public/</code>).
                  </li>
                  <li>
                    <strong>Mantenlo vivo.</strong> Revísalo cuando cambie tu estructura. Un llms.txt
                    desfasado que enlaza a páginas muertas es peor que no tenerlo.
                  </li>
                </ol>

                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
                  <h3 className="font-bold text-foreground mb-2">Plantilla llms.txt lista para editar</h3>
                  <p className="text-muted-foreground mb-4">
                    Descarga la estructura completa con comentarios y sustituye tus datos.
                  </p>
                  <a
                    href="/plantilla-llms.txt"
                    download="llms.txt"
                    className="btn-cta inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    Descargar plantilla
                  </a>
                </div>
              </section>

              <section id="honestidad" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Sirve de algo en 2026? La respuesta honesta</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aquí toca separar la moda del hecho. El llms.txt es una <strong>propuesta de la
                  comunidad</strong>, no un estándar que los grandes buscadores hayan adoptado. Google ha
                  declarado que no lo utiliza para clasificar, y ningún gran proveedor de LLM ha confirmado
                  usarlo como señal para <GeoTerm term="citabilidad">citar</GeoTerm>. Quien te prometa que un
                  llms.txt te mete en ChatGPT te está vendiendo humo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Donde sí ha calado es en el mundo de la documentación técnica y las herramientas de
                  desarrollo: varias plataformas lo generan y lo consumen. Y tiene una ventaja que no
                  depende de que nadie lo "adopte": el ejercicio de escribirlo te obliga a decidir cuáles son
                  tus páginas importantes y a describir tu sitio en una frase. Eso, por sí solo, ya mejora tu{" "}
                  <GeoTerm term="datos-estructurados">arquitectura de información</GeoTerm>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestra recomendación: publícalo porque cuesta diez minutos y no hace daño, pero trátalo
                  como lo que es &mdash; higiene, no palanca. La palanca de verdad para que te citen sigue
                  siendo el contenido citable y la estructura de cada página.
                </p>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿llms.txt sustituye al robots.txt o al sitemap?</h3>
                    <p className="text-muted-foreground">
                      No. <GeoTerm term="robots-txt">robots.txt</GeoTerm> dice qué se puede rastrear, el
                      sitemap lista todas tus URLs y el llms.txt ofrece una selección curada y legible. Son
                      complementarios.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Dónde tiene que estar el archivo?</h3>
                    <p className="text-muted-foreground">
                      En la raíz del dominio: <code>https://tudominio.com/llms.txt</code>. Opcionalmente
                      puede vivir en un subpath, pero la raíz es lo esperado.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/datos-estructurados-modelos-generativos">
                  <Button variant="ghost" size="sm">Datos estructurados para IA</Button>
                </Link>
                <Link to="/radar-ia/como-aparecer-en-ai-overviews-google-gemini">
                  <Button variant="ghost" size="sm">Aparecer en los AI Overviews</Button>
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
              source="article_llms-txt"
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

export default QueEsLlmsTxt;
