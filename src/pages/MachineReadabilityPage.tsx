import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Eye, Boxes, MessageSquareText, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HablaWidget from "@/components/HablaWidget";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

/**
 * /machine-readability — página PILAR (cornerstone) del tema "legibilidad máquina / GEO".
 * Agrupa y enlaza todo el cluster: el framework HABLA, el Radar IA, la metodología, el
 * auditor gratuito y la página del framework /habla. Página larga, de referencia, citable.
 *
 * REGLA DURA: cero cifras inventadas. El dataset del parque web se describe como mecanismo;
 * las métricas agregadas se publicarán aquí cuando existan, sin adelantar números.
 */

const DIMENSIONES = [
  {
    letra: "H",
    icon: ShieldCheck,
    title: "Higiene",
    body:
      "Los cimientos técnicos que le dicen a un crawler que puede entrar y qué puede leer: robots.txt que no bloquee a los bots de IA, sitemap.xml, HTTPS, etiqueta canonical y el atributo lang correcto. Sin higiene, ni siquiera empieza la conversación.",
  },
  {
    letra: "A",
    icon: Eye,
    title: "Accesible",
    body:
      "¿Hay texto real dentro del HTML que sirve tu servidor? Es un GATE: si falla, lo demás no cuenta. Las SPAs hechas con React, Vue o Angular sin renderizado en servidor entregan un contenedor vacío; el navegador lo rellena con JavaScript, pero el crawler de IA no ejecuta JavaScript y ve una página en blanco.",
  },
  {
    letra: "B",
    icon: Boxes,
    title: "Bloques",
    body:
      "La estructura que la máquina usa para trocear tu contenido: un único h1, una jerarquía de encabezados coherente, HTML semántico (no un mar de divs) y JSON-LD válido. Los bloques bien marcados son los fragmentos que la IA puede extraer y citar por separado.",
  },
  {
    letra: "L",
    icon: MessageSquareText,
    title: "Lenguaje",
    body:
      "La respondibilidad del contenido: que el primer bloque responda qué es, para quién y cuánto cuesta, esté fechado y sea autosuficiente. Un párrafo que solo cobra sentido tras leer los cinco anteriores no es citable de forma aislada.",
  },
  {
    letra: "X",
    icon: Sparkles,
    title: "eXtras",
    body:
      "Las señales que refuerzan la citación: un archivo llms.txt que orienta a los modelos, la entidad declarada en JSON-LD, una vía de contacto clara y las señales de autoría y actualización. No son imprescindibles, pero marcan la diferencia entre ser legible y ser preferido.",
  },
];

const ARTICULOS = [
  { to: "/radar-ia/que-es-geo-guia-completa", title: "Qué es GEO: guía completa", desc: "El punto de partida: qué significa optimizar para motores generativos y por qué cambia las reglas." },
  { to: "/radar-ia/paper-geo-princeton-estudio", title: "El paper GEO de Princeton", desc: "El estudio académico que acuñó el término y midió qué tácticas aumentan la visibilidad de una fuente." },
  { to: "/radar-ia/checklist-geo-25-puntos", title: "Checklist GEO de 25 puntos", desc: "Una lista de comprobación accionable para revisar tu web dimensión por dimensión." },
  { to: "/radar-ia/geo-en-wordpress", title: "GEO en WordPress", desc: "Cómo aplicar la legibilidad máquina en el CMS más extendido, paso a paso." },
  { to: "/radar-ia/geo-para-ecommerce", title: "GEO para e-commerce", desc: "Fichas de producto, categorías y datos estructurados para que la IA recomiende tu tienda." },
  { to: "/radar-ia/geo-local-negocios", title: "GEO local para negocios", desc: "Cómo hacer que la IA cite tu negocio cuando alguien pregunta por servicios en tu zona." },
  { to: "/radar-ia/optimizar-web-para-claude", title: "Optimizar tu web para Claude", desc: "Qué mira ClaudeBot y cómo servirle un HTML que pueda leer y referenciar." },
  { to: "/radar-ia/como-hacer-que-chatgpt-cite-tu-web", title: "Cómo hacer que ChatGPT cite tu web", desc: "Las condiciones para aparecer como fuente en las respuestas de ChatGPT con navegación." },
  { to: "/radar-ia/optimizar-web-para-perplexity", title: "Optimizar tu web para Perplexity", desc: "El motor que más cita fuentes: cómo entrar en su lista de referencias." },
  { to: "/radar-ia/como-aparecer-en-ai-overviews-google-gemini", title: "Aparecer en los AI Overviews", desc: "Cómo entrar en los resúmenes generativos de Google y Gemini." },
  { to: "/radar-ia/que-es-llms-txt", title: "Qué es llms.txt", desc: "El archivo que orienta a los modelos hacia tu contenido más citable." },
  { to: "/radar-ia/herramientas-geo-2026", title: "Herramientas GEO 2026", desc: "El panorama de utilidades para medir y mejorar tu legibilidad máquina." },
  { to: "/radar-ia/geo-aeo-llmo-seo-que-termino-usar", title: "GEO, AEO, LLMO o SEO para IA", desc: "Cuatro siglas para el mismo cambio: cuál conviene usar y por qué." },
];

const FAQS = [
  {
    q: "¿Qué es la legibilidad máquina (machine readability)?",
    a: "Es la capacidad de una web para ser leída por un programa automático —en este caso, los rastreadores de los modelos de IA— sin intervención humana ni ejecución de JavaScript. Una web es legible para la máquina cuando el HTML que entrega su servidor contiene el texto, la estructura y las señales que un crawler necesita para entender y citar su contenido.",
  },
  {
    q: "¿Por qué mi web se ve bien en el navegador pero la IA no la lee?",
    a: "Porque tu navegador ejecuta JavaScript y los rastreadores de IA, por lo general, no. Si tu web es una SPA de React, Vue o Angular sin renderizado en servidor, el HTML que sale de tu servidor es un contenedor casi vacío que el navegador rellena en tu pantalla. El crawler descarga ese HTML vacío y no encuentra nada que leer. Es el fallo del gate de Accesible, el más común y el que anula todo lo demás.",
  },
  {
    q: "¿Qué es el framework HABLA?",
    a: "HABLA es la forma de organizar la legibilidad máquina en cinco dimensiones evaluables: Higiene (robots.txt, sitemap, HTTPS, canonical, lang), Accesible (texto real en el HTML servido, un gate), Bloques (h1, encabezados, HTML semántico, JSON-LD), Lenguaje (respondibilidad del primer bloque) y eXtras (llms.txt, entidad, contacto, señales de citación). El auditor gratuito puntúa cada una de 0 a 100.",
  },
  {
    q: "¿Cómo mido la legibilidad máquina de mi web?",
    a: "Con el auditor gratuito: escribes tu dominio y descarga el HTML que tu servidor entrega, sin ejecutar JavaScript, igual que haría un crawler de IA. Devuelve una puntuación sobre las cinco dimensiones de HABLA y una lista de mejoras ordenadas por impacto. No requiere registro y solo analiza HTML público.",
  },
  {
    q: "¿La legibilidad máquina sustituye al SEO?",
    a: "No lo sustituye, lo reorienta. El HTML semántico, el rastreo, la velocidad y los datos estructurados siguen siendo la base. Lo que cambia es la métrica de éxito: de la posición y el clic en el buscador a la mención y la cuota de citación dentro de la respuesta generada.",
  },
];

const MachineReadabilityPage = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Machine Readability: la guía para que la IA pueda leer y citar tu web | esGEO",
    description:
      "La página pilar de la legibilidad máquina: el framework HABLA (5 dimensiones), el auditor gratuito, el Radar IA y la metodología para que los crawlers de IA puedan leer y citar tu web.",
    canonicalUrl: "https://www.esgeo.ai/machine-readability",
    lastModified: "2026-07-20",
    ogType: "website",
    keywords: ["machine readability", "legibilidad máquina", "GEO", "framework HABLA", "SSR", "citabilidad"],
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>Machine Readability: la guía para que la IA pueda leer y citar tu web | esGEO</title>
        <meta
          name="description"
          content="La página pilar de la legibilidad máquina: el framework HABLA (5 dimensiones), el auditor gratuito, el Radar IA y la metodología para que los crawlers de IA puedan leer y citar tu web."
        />
        <link rel="canonical" href="https://www.esgeo.ai/machine-readability" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "headline": "Machine Readability: la guía para que la IA pueda leer y citar tu web",
          "description":
            "Página pilar sobre legibilidad máquina y GEO: el framework HABLA de cinco dimensiones, el auditor gratuito, la biblioteca del Radar IA y la metodología para que los modelos de IA puedan leer y citar una web.",
          "url": "https://www.esgeo.ai/machine-readability",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "inLanguage": "es-ES",
          "isAccessibleForFree": true,
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.esgeo.ai#organization",
            "name": "esGEO",
            "url": "https://www.esgeo.ai"
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.esgeo.ai/machine-readability" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.esgeo.ai/" },
              { "@type": "ListItem", "position": 2, "name": "Machine Readability", "item": "https://www.esgeo.ai/machine-readability" }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["#que-es", "#dimensiones"]
          }
        })}</script>

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main role="main">
          {/* 1. HERO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <div className="text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-primary">Inicio</Link> / Machine Readability
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                Machine readability: que las máquinas puedan leerte
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="que-es" variant="definition" className="mb-6">
                <p
                  className="text-xl leading-relaxed"
                  data-speakable="true"
                >
                  <strong>La legibilidad máquina es la condición previa de todo lo demás:</strong>{" "}
                  si un crawler de IA &mdash;que <strong>no ejecuta JavaScript</strong>&mdash; no puede leer el
                  HTML que sirve tu servidor, no puede entenderte y, por tanto, no puede citarte. Da igual lo
                  bonita que se vea tu web en el navegador: lo que importa es lo que la máquina recibe cuando
                  descarga tu página. Esta es la página pilar de la{" "}
                  <GeoTerm term="citabilidad">citabilidad</GeoTerm>: reúne el framework{" "}
                  <strong>HABLA</strong>, el auditor gratuito, la biblioteca del Radar IA y la metodología
                  para trabajar cada dimensión.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Actualizado el 20 de julio de 2026 &bull; Guía de referencia
              </div>

              <p className="text-muted-foreground leading-relaxed mt-8">
                Durante veinte años, el objetivo de una web fue posicionar enlaces para que una persona hiciera
                clic. Con la llegada de los <GeoTerm term="motores-generativos">motores generativos</GeoTerm>{" "}
                &mdash;ChatGPT, Perplexity, Claude, Gemini y los{" "}
                <GeoTerm term="ai-overviews">AI Overviews</GeoTerm> de Google&mdash; el objetivo se ha
                desplazado: ahora quieres ser la fuente que la IA lee, entiende y menciona en su respuesta.
                Y para que eso ocurra, primero tu web tiene que ser legible para una máquina. Todo lo demás
                &mdash;autoridad, frescura, buen contenido&mdash; llega después de superar ese umbral.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                El error más caro es asumir que, si tú ves la página, la máquina también la ve. No es así.
                Tú tienes un navegador que ejecuta JavaScript; el rastreador, por lo general, descarga el HTML
                crudo y lo lee tal cual. Cuando esos dos documentos no coinciden &mdash;porque el contenido se
                monta en el cliente&mdash;, hay una brecha invisible entre lo que crees que publicas y lo que
                la IA recibe. La legibilidad máquina consiste en cerrar esa brecha.
              </p>
            </div>
          </section>

          {/* 2. LAS 5 DIMENSIONES */}
          <section id="dimensiones" className="py-14 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">
                Las 5 dimensiones (framework HABLA)
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-10">
                HABLA descompone la legibilidad máquina en cinco dimensiones evaluables. El acrónimo se lee de
                arriba abajo: <strong>H</strong>igiene, <strong>A</strong>ccesible, <strong>B</strong>loques,{" "}
                <strong>L</strong>enguaje y e<strong>X</strong>tras. La segunda, Accesible, es un{" "}
                <strong>gate</strong>: si tu HTML no contiene texto real, las otras cuatro no puntúan, porque
                no hay nada sobre lo que puntuar.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {DIMENSIONES.map((d) => (
                  <div key={d.letra} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent font-bold text-lg">
                        {d.letra}
                      </span>
                      <d.icon className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-foreground text-lg">{d.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                  </div>
                ))}
                <div className="rounded-xl border border-dashed border-accent/40 bg-accent/5 p-6 flex flex-col justify-center">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Cada dimensión se puntúa de 0 a 100. La nota total te dice cuán legible es tu web para
                    un modelo de IA hoy, y qué arreglar primero.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/habla">El framework en detalle <ArrowRight className="h-4 w-4 ml-2" /></Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link to="/geo-score">Audita tu web gratis <ArrowRight className="h-4 w-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mt-10">
                El fallo más habitual vive en la dimensión Accesible. Las webs modernas se construyen cada vez
                más como aplicaciones de una sola página que renderizan en el cliente; sin{" "}
                <GeoTerm term="ssr-prerender">renderizado en servidor</GeoTerm> ni prerenderizado, el HTML que
                llega al crawler está prácticamente vacío. Por eso Accesible es un gate y no una nota más:
                arreglar la higiene o el JSON-LD no sirve de nada si la máquina no encuentra texto que leer.
              </p>
            </div>
          </section>

          {/* 3. EMPIEZA A MEDIR (auditor embebido) */}
          <section className="py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Empieza a medir</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center mb-8">
                No hace falta que te fíes de la teoría. Escribe tu dominio y mira, en unos segundos, qué ve un
                crawler de IA cuando entra en tu web. El análisis descarga el HTML que sirve tu servidor
                &mdash;sin ejecutar JavaScript&mdash; y lo puntúa sobre las cinco dimensiones de HABLA.
              </p>

              <HablaWidget
                title="Mide tu web ahora"
                subtitle="Escribe tu dominio y mira qué ve un crawler de IA."
              />

              <p className="text-muted-foreground leading-relaxed text-center mt-6 text-sm">
                Es gratuito, no pide registro y solo analiza HTML público, el mismo que cualquiera puede ver
                con &laquo;ver código fuente&raquo;.
              </p>
            </div>
          </section>

          {/* 4. BIBLIOTECA DEL RADAR IA */}
          <section className="py-14 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Biblioteca del Radar IA</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center mb-10">
                El cluster completo de artículos sobre legibilidad máquina y GEO. Empieza por la guía completa
                y baja a los casos concretos: tu CMS, tu tipo de negocio o el motor de IA que te interesa.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {ARTICULOS.map((a) => (
                  <Link
                    key={a.to}
                    to={a.to}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-accent/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
                <Button asChild variant="outline">
                  <Link to="/radar-ia">Ver todo el Radar <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/metodologia">Conocer la metodología</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* 5. EL ESTADO DEL PARQUE WEB EN ESPAÑOL */}
          <section className="py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-4">
                El estado del parque web en español
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cada vez que alguien analiza un dominio con el auditor, se registra el resultado de forma
                anónima. No se guarda ningún dato personal ni contenido privado: solo el HTML público que
                cualquier visitante puede ver, la URL analizada y la puntuación sobre las cinco dimensiones.
                Con esos registros se está construyendo un dataset del estado de la legibilidad máquina en
                las webs en español.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El objetivo es responder con datos a una pregunta que hoy solo se responde con intuición:
                ¿cuántas webs en español pueden, de verdad, ser leídas y citadas por un modelo de IA? El
                patrón cualitativo que aparece una y otra vez es claro: la mayoría de las webs modernas
                fallan el gate de Accesible porque renderizan en el cliente sin{" "}
                <GeoTerm term="ssr-prerender">renderizado en servidor</GeoTerm>, de modo que entregan un HTML
                vacío al crawler. Es el mismo fallo, repetido en proyecto tras proyecto.
              </p>
              <HighlightSnippet lastModified="2026-07-20" id="dataset" variant="insight" className="mb-4">
                <p className="leading-relaxed">
                  <strong>Sobre las cifras:</strong> las métricas agregadas de este dataset se publicarán aquí
                  cuando la muestra sea suficiente para ser honesta. Hasta entonces, no se adelantan medias ni
                  porcentajes: describir el mecanismo y el patrón cualitativo es riguroso; inventar un número
                  para rellenar, no.
                </p>
              </HighlightSnippet>
              <p className="text-muted-foreground leading-relaxed">
                Este enfoque encaja con la propia filosofía de la legibilidad máquina: los datos verificables
                por encima de las afirmaciones sin respaldo. Una web que quiere ser citada por la IA gana{" "}
                <GeoTerm term="autoridad-ia">autoridad</GeoTerm> siendo precisa y contrastable, no exagerando.
                El dataset se rige por esa misma regla.
              </p>
            </div>
          </section>

          {/* 6. CTA CURSO */}
          <section className="py-14 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                El auditor te dice qué falla. El curso te enseña a arreglarlo.
              </h2>
              <p className="text-primary-foreground/75 mb-7">
                La metodología completa para trabajar las cinco dimensiones de HABLA y ganar{" "}
                <span className="underline decoration-dotted">cuota de citación</span> en las respuestas de la
                IA. 5 módulos, guías y plantillas. 47 &euro; de pago único, sin suscripción.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/curso">Ver el curso &mdash; 47 &euro; <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/geo-score">Auditar mi web gratis</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Preguntas frecuentes</h2>
              <dl className="space-y-6">
                {FAQS.map((f) => (
                  <div key={f.q} className="border-b border-border pb-6">
                    <dt className="font-semibold text-foreground mb-2">{f.q}</dt>
                    <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Sigue explorando</h3>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="ghost" size="sm"><Link to="/habla">El framework HABLA</Link></Button>
                  <Button asChild variant="ghost" size="sm"><Link to="/geo-score">Auditor gratuito</Link></Button>
                  <Button asChild variant="ghost" size="sm"><Link to="/radar-ia">Radar IA</Link></Button>
                  <Button asChild variant="ghost" size="sm"><Link to="/metodologia">Metodología</Link></Button>
                  <Button asChild variant="ghost" size="sm"><Link to="/glosario">Glosario GEO</Link></Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MachineReadabilityPage;
