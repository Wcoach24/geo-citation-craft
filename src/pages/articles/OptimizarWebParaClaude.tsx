import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const OptimizarWebParaClaude = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Cómo optimizar tu web para que Claude te cite | esGEO",
    description:
      "Claude (Anthropic) puede consultar la web y su rastreador se identifica como ClaudeBot. Aprende qué valora Claude al citar y cómo preparar tu web para aparecer.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/optimizar-web-para-claude",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>Cómo optimizar tu web para que Claude te cite | esGEO</title>
        <meta
          name="description"
          content="Claude (Anthropic) puede consultar la web y su rastreador se identifica como ClaudeBot. Aprende qué valora Claude al citar y cómo preparar tu web para aparecer."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/optimizar-web-para-claude" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "Cómo optimizar tu web para que Claude te cite",
          "description":
            "Guía para preparar tu web de cara a Claude, el asistente de Anthropic: qué valora al citar, cómo funciona su búsqueda web y qué decidir con ClaudeBot en robots.txt.",
          "url": "https://www.esgeo.ai/radar-ia/optimizar-web-para-claude",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/optimizar-web-para-claude"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Claude puede leer mi web?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Claude puede consultar internet cuando la función de búsqueda o navegación web está activa, además de apoyarse en su conocimiento previo. El rastreador de Anthropic se identifica como ClaudeBot. Que Claude pueda leerte depende de que sirvas HTML accesible y de que no lo bloquees en tu robots.txt: verifica en tu robots.txt y en tus logs de servidor qué agentes están permitidos."
              }
            },
            {
              "@type": "Question",
              "name": "¿Debo permitir o bloquear a ClaudeBot en robots.txt?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Es una decisión de negocio, no técnica. Permitir el rastreo facilita que tu contenido se pueda tener en cuenta; bloquearlo protege el contenido frente a usos que no deseas. La distinción entre rastreo para citación y uso para entrenamiento no siempre es nítida, así que revisa la documentación vigente de Anthropic y comprueba en tus logs qué agentes acceden antes de decidir."
              }
            },
            {
              "@type": "Question",
              "name": "¿Hay un truco específico para que Claude me cite?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Gran parte del trabajo es el mismo que para ChatGPT o Perplexity: HTML limpio servido en servidor, estructura clara con encabezados, afirmaciones autosuficientes y fechadas, fuentes concretas y datos verificables. El matiz es que Claude tiende a valorar el contexto claro y la honestidad de la fuente, así que evita exageraciones y marca bien lo que afirmas."
              }
            },
            {
              "@type": "Question",
              "name": "¿Sirve de algo un archivo llms.txt para Claude?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Un archivo llms.txt es un resumen legible de la identidad de tu sitio y de tus enlaces más importantes, pensado para modelos de lenguaje. No es un estándar obligatorio ni garantiza nada, pero es de bajo coste y ayuda a que un modelo entienda quién eres y qué páginas importan. Combínalo siempre con HTML accesible: el llms.txt complementa, no sustituye."
              }
            },
            {
              "@type": "Question",
              "name": "¿Necesito JavaScript para que Claude lea mi contenido?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Al contrario: conviene no depender de JavaScript. El contenido importante debe estar en el HTML que devuelve el servidor, no generarse solo en el navegador. Si tu texto aparece únicamente tras ejecutar JS en el cliente, corres el riesgo de que un rastreador reciba una página vacía. Sirve el contenido en el HTML inicial y comprueba con 'ver código fuente' que el texto está ahí."
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
                "name": "Optimizar para Claude",
                "item": "https://www.esgeo.ai/radar-ia/optimizar-web-para-claude"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #que-valora, #faq"
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
                Cómo optimizar tu web para que Claude te cite
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Claude, el asistente de Anthropic, puede consultar la web</strong> cuando su
                  búsqueda o navegación está activa, y su rastreador se identifica como{" "}
                  <GeoTerm term="claudebot">ClaudeBot</GeoTerm>. Para que te tenga en cuenta al responder,
                  sirve <GeoTerm term="rastreo">HTML limpio desde el servidor</GeoTerm>, estructura tu
                  contenido con encabezados claros y haz afirmaciones autosuficientes, fechadas y con
                  fuentes. No hay un "truco Claude": es el mismo trabajo de{" "}
                  <GeoTerm term="geo">GEO</GeoTerm> que para ChatGPT o Perplexity, con un matiz de claridad
                  y honestidad.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Técnico
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué es Claude y por qué importa aquí</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Claude es el asistente conversacional de Anthropic. Como otros{" "}
                  <GeoTerm term="motores-generativos">motores generativos</GeoTerm>, combina lo que aprendió
                  durante su entrenamiento con la capacidad de consultar internet cuando la función de
                  búsqueda o navegación web está disponible. Eso significa que, en determinados contextos,
                  Claude puede leer una página en el momento y citarla o resumirla en su respuesta.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando Anthropic rastrea la web, su agente se identifica como{" "}
                  <strong>ClaudeBot</strong>. En discusiones y configuraciones de{" "}
                  <GeoTerm term="robots-txt">robots.txt</GeoTerm> también aparecen nombres como
                  <em> Claude-Web</em> o <em>anthropic-ai</em> asociados a distintos usos. Los nombres de
                  agente y su comportamiento cambian con el tiempo, así que no des por buena ninguna lista
                  de memoria: <strong>verifica en tu propio robots.txt y en tus logs de servidor</strong>{" "}
                  qué agentes acceden realmente a tu sitio.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La buena noticia es que casi todo lo que haces para que Claude pueda citarte es lo mismo
                  que ya deberías estar haciendo para ChatGPT, Perplexity o los buscadores clásicos. No hay
                  una palanca secreta: hay higiene técnica y contenido honesto.
                </p>
              </section>

              <section id="claudebot-robots" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">ClaudeBot y robots.txt: una decisión de negocio</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permitir o bloquear a ClaudeBot no es una cuestión puramente técnica, es una decisión
                  estratégica. Por un lado, dejar que el rastreador acceda facilita que tu contenido se
                  pueda tener en cuenta cuando alguien pregunta por tu tema. Por otro, hay quien prefiere
                  restringir el acceso para proteger su contenido frente a usos que no desea.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La tensión de fondo es la distinción entre <strong>rastreo para citación</strong> (que un
                  modelo pueda consultarte y mencionarte al responder) y <strong>uso para entrenamiento</strong>{" "}
                  (que tu contenido alimente futuros modelos). Esa frontera no siempre es nítida y la
                  documentación de los proveedores cambia. Antes de tomar una decisión definitiva, revisa la
                  documentación vigente de Anthropic sobre sus agentes y comprueba qué está pasando en tus
                  logs.
                </p>

                <div className="bg-card rounded p-4 text-xs overflow-x-auto mb-6 border border-accent/20">
                  <pre className="text-muted-foreground">{`# Ejemplo ilustrativo — adáptalo y verifica el nombre de agente en tu caso
# Permitir el rastreo de ClaudeBot:
User-agent: ClaudeBot
Allow: /

# O, si prefieres restringir su acceso:
# User-agent: ClaudeBot
# Disallow: /

# Nota: confirma en tus logs qué agentes de Anthropic acceden
# (ClaudeBot y, según el uso, otros como Claude-Web / anthropic-ai).
`}</pre>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Sea cual sea tu elección, hazla de forma consciente y documéntala. Un bloqueo accidental
                  heredado de una plantilla puede dejarte fuera sin que lo sepas; y una apertura total puede
                  no encajar con tu política de contenidos. En ambos casos, la clave es{" "}
                  <strong>saber qué está configurado</strong> y por qué.
                </p>
              </section>

              <section id="que-valora" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué valora Claude al citar una fuente</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ningún proveedor publica una fórmula exacta de citación, pero hay principios técnicos que
                  se sostienen porque son los mismos que hacen tu contenido legible para cualquier modelo. Si
                  tuvieras que quedarte con cinco, serían estos.
                </p>

                <HighlightSnippet lastModified="2026-07-20" id="valores-clave" variant="insight" className="mb-6">
                  <h4 className="font-semibold mb-3">Cinco cosas que ayudan a que Claude te cite:</h4>
                  <ul className="space-y-2">
                    <li>• <strong>HTML limpio servido en servidor:</strong> el contenido está en el HTML inicial, sin depender de que se ejecute JavaScript en el navegador.</li>
                    <li>• <strong>Estructura clara con encabezados:</strong> H1, H2 y H3 que dividen el texto en respuestas concretas y fáciles de extraer.</li>
                    <li>• <strong>Afirmaciones autosuficientes y fechadas:</strong> frases que se entienden solas, con fecha visible y sin depender del párrafo anterior.</li>
                    <li>• <strong>Fuentes y datos concretos:</strong> cifras, referencias y enlaces que respaldan lo que afirmas.</li>
                    <li>• <strong>Un llms.txt que resuma tu identidad y enlaces:</strong> complementa el HTML, no lo sustituye.</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">HTML limpio y sin depender de JavaScript</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Es el punto que más webs suspenden. Si tu texto solo aparece después de que el navegador
                  ejecute JavaScript, un rastreador puede recibir una página prácticamente vacía. Sirve el
                  contenido en el HTML que devuelve el servidor y confírmalo con un gesto simple: abre "ver
                  código fuente" (no el inspector) y busca tu texto. Si no está ahí, tampoco lo estará para
                  quien te rastree.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Estructura y respuestas extraíbles</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un modelo cita mejor lo que puede aislar. Un encabezado que formula una pregunta seguido de
                  un párrafo que la responde en dos o tres frases es material ideal para ser citado. Las
                  listas, las tablas y los bloques de definición ayudan a la{" "}
                  <GeoTerm term="citabilidad">citabilidad</GeoTerm> porque delimitan la respuesta.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Afirmaciones autosuficientes y fechadas</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "En julio de 2026, ClaudeBot es el rastreador con el que Anthropic se identifica" es más
                  citable que "el rastreador ha cambiado hace poco". La primera frase se sostiene sola,
                  incluye fecha y no obliga a leer lo anterior. Escribe pensando en que cada frase pueda
                  viajar sola dentro de una respuesta.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Fuentes, datos y honestidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aquí está el matiz de Claude. Anthropic pone mucho énfasis en la utilidad y la honestidad
                  de las respuestas, así que un contenido que distingue con claridad entre lo que es un hecho
                  verificable y lo que es una opinión, que enlaza a sus fuentes y que no exagera, encaja bien
                  con lo que el asistente tiende a valorar. Presume menos y demuestra más: datos concretos,
                  referencias y una <GeoTerm term="answerability">respuesta directa</GeoTerm> a la pregunta.
                </p>
              </section>

              <section id="llms-txt" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">El papel del llms.txt</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El <GeoTerm term="llms-txt">llms.txt</GeoTerm> es un archivo de texto legible, situado en
                  la raíz de tu dominio, que resume quién eres y enlaza a tus páginas más importantes,
                  pensado para que un modelo de lenguaje entienda tu sitio de un vistazo. No es un estándar
                  obligatorio y no garantiza citación, pero es de bajo coste y aporta contexto.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trátalo como un complemento, nunca como un sustituto del HTML accesible. Si tu contenido
                  real no es legible, un buen llms.txt no lo arregla. Un ejemplo mínimo:
                </p>
                <div className="bg-card rounded p-4 text-xs overflow-x-auto mb-6 border border-accent/20">
                  <pre className="text-muted-foreground">{`# Tu Marca
> Descripción breve y honesta de qué haces y para quién.

## Páginas clave
- [Qué hacemos](https://tu-dominio.com/): resumen de una frase.
- [Guía principal](https://tu-dominio.com/guia): resumen de una frase.
- [Contacto](https://tu-dominio.com/contacto): cómo llegar a ti.
`}</pre>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mantenlo corto, veraz y actualizado. Si prometes algo en el llms.txt que la página no
                  cumple, restas confianza en lugar de sumarla.
                </p>
              </section>

              <section id="mismo-trabajo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">El mismo trabajo que para ChatGPT y Perplexity (con matices)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conviene repetirlo porque ahorra dinero y tiempo: <strong>no existe un servicio de
                  "optimización para Claude" separado del resto.</strong> El grueso de las acciones —servir
                  HTML completo, estructurar con encabezados, responder arriba, fragmentar, fechar,
                  <GeoTerm term="datos-estructurados"> marcar con datos estructurados</GeoTerm> y ganar
                  autoridad— sirve para todos los asistentes a la vez.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los matices son eso, matices. Perplexity tiende a premiar la frescura y la búsqueda en
                  tiempo real; ChatGPT combina su entrenamiento con navegación; y Claude, dentro de ese mismo
                  patrón, tiende a valorar el contexto claro y la honestidad de la fuente. Ninguno de esos
                  matices contradice a los demás: apuntan en la misma dirección de calidad.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si dudas de un dato concreto —el nombre exacto de un agente, si una función de navegación
                  está activa en tu caso, o qué está bloqueado— no lo inventes: <strong>compruébalo en tu
                  robots.txt, en tus logs y en la documentación vigente del proveedor.</strong> Esa disciplina
                  es, en sí misma, parte de una buena estrategia de citación.
                </p>
              </section>

              <section id="checklist" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Checklist para preparar tu web</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">1. Comprueba tu robots.txt</h4>
                    <p className="text-muted-foreground text-sm">
                      Verifica qué agentes permites o bloqueas y decide de forma consciente qué hacer con
                      ClaudeBot. No dejes la configuración al azar de una plantilla heredada.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">2. Revisa tus logs de servidor</h4>
                    <p className="text-muted-foreground text-sm">
                      Mira qué agentes de Anthropic acceden realmente y con qué frecuencia. Los logs cuentan
                      la verdad; las listas de memoria caducan.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">3. Sirve el contenido en el HTML</h4>
                    <p className="text-muted-foreground text-sm">
                      Abre "ver código fuente" y confirma que tu texto importante está presente sin ejecutar
                      JavaScript.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">4. Estructura y fecha tus respuestas</h4>
                    <p className="text-muted-foreground text-sm">
                      Encabezados claros, párrafos que responden en dos o tres frases, afirmaciones que se
                      sostienen solas y fechas visibles.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">5. Añade fuentes y un llms.txt honesto</h4>
                    <p className="text-muted-foreground text-sm">
                      Respalda tus afirmaciones con datos y enlaces, y publica un llms.txt breve que resuma
                      tu identidad y tus páginas clave.
                    </p>
                  </div>
                </div>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Claude puede leer mi web?</h3>
                    <p className="text-muted-foreground">
                      Puede consultar internet cuando su búsqueda o navegación web está activa, además de
                      apoyarse en su conocimiento previo. El rastreador de Anthropic se identifica como
                      ClaudeBot. Que te lea depende de que sirvas HTML accesible y de que no lo bloquees:
                      verifica en tu robots.txt y en tus logs.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Bloqueo o permito a ClaudeBot?</h3>
                    <p className="text-muted-foreground">
                      Es una decisión de negocio: permitir facilita la citación, bloquear protege tu
                      contenido. La frontera entre citación y entrenamiento no siempre es nítida, así que
                      revisa la documentación vigente de Anthropic antes de decidir.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Hay un truco específico para Claude?</h3>
                    <p className="text-muted-foreground">
                      No. Es el mismo trabajo que para ChatGPT o Perplexity: HTML limpio, estructura clara,
                      afirmaciones fechadas y fuentes. El matiz es que Claude tiende a valorar el contexto
                      claro y la honestidad, así que evita exageraciones.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Necesito JavaScript para que Claude me lea?</h3>
                    <p className="text-muted-foreground">
                      Al contrario: conviene no depender de él. El contenido debe estar en el HTML del
                      servidor. Si tu texto solo aparece tras ejecutar JS en el cliente, un rastreador puede
                      recibir una página vacía.
                    </p>
                  </div>
                </div>
              </section>

              <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Conclusión</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Optimizar tu web para que Claude te cite no consiste en perseguir un algoritmo secreto,
                  sino en aplicar buenas prácticas verificables: HTML servido desde el servidor, estructura
                  clara, afirmaciones autosuficientes y fechadas, fuentes concretas y un llms.txt honesto. A
                  eso se suma una decisión consciente sobre ClaudeBot en tu robots.txt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El resto es la misma disciplina que sirve para cualquier asistente. Cuando dudes de un
                  dato, no lo inventes: mira tu robots.txt, tus logs y la documentación vigente. Esa
                  honestidad técnica es precisamente lo que hace que una fuente merezca ser citada.
                </p>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/como-hacer-que-chatgpt-cite-tu-web">
                  <Button variant="ghost" size="sm">ChatGPT: cómo ser citado</Button>
                </Link>
                <Link to="/radar-ia/optimizar-web-para-perplexity">
                  <Button variant="ghost" size="sm">Optimizar para Perplexity</Button>
                </Link>
                <Link to="/glosario">
                  <Button variant="ghost" size="sm">Glosario GEO</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">Domina GEO para todos los motores IA</h3>
              <p className="text-muted-foreground mb-4">
                El curso cubre optimización para ChatGPT, Perplexity, Gemini, Claude y más, con la estrategia
                completa de GEO paso a paso.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €47
              </Link>
            </div>

            <InlineEmailCapture
              className="mt-8"
              source="article_optimizar-claude"
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

export default OptimizarWebParaClaude;
