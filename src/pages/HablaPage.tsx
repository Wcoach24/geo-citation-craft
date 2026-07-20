import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  Layers,
  MessageSquareText,
  Sparkles,
  Home,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HablaWidget from "@/components/HablaWidget";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

/**
 * /habla — la página pilar que explica EN DETALLE el framework HABLA: el modelo de cinco
 * dimensiones que hay detrás del auditor de esGEO. Cada dimensión con su letra, qué mide,
 * por qué importa y cómo se comprueba con una máquina (no con una opinión). Embebe el
 * auditor en vivo (HablaWidget) para que el visitante ponga su web a hablar.
 */
const HablaPage = () => {
  // Metas sociales (og:/twitter:). Se renderiza ANTES del <Helmet> propio para que los
  // valores específicos de la página ganen en los tags duplicados.
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "HABLA: el framework de 5 dimensiones para que la IA lea y cite tu web | esGEO",
    description:
      "HABLA es el modelo de 5 dimensiones (Higiene, Accesible, Bloques, Lenguaje, eXtras) que mide si una máquina puede leer y citar tu web. Cada dimensión se comprueba con código, no con opinión.",
    canonicalUrl: "https://www.esgeo.ai/habla",
    ogType: "article",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dimensions = [
    {
      letter: "H",
      name: "Higiene",
      icon: ShieldCheck,
      what:
        "Los ficheros básicos que un rastreador espera encontrar antes de leerte: robots.txt (con reglas explícitas para GPTBot, ClaudeBot y PerplexityBot), sitemap.xml, HTTPS, etiqueta canonical y atributo lang.",
      why:
        "Si el robots.txt bloquea a los bots de IA, o falta el sitemap, o el sitio no va por HTTPS, la máquina se topa con fricción antes siquiera de leer una palabra. Es la portería del edificio: no da puntos por sí sola, pero un fallo aquí te resta visitas de crawler.",
      check:
        "Se descargan /robots.txt y /sitemap.xml y se comprueba el esquema de la URL, la etiqueta canonical del HTML y el atributo lang del <html>. Existe o no existe: es binario, no interpretable.",
    },
    {
      letter: "A",
      name: "Accesible",
      icon: Eye,
      what:
        "¿Hay texto real en el HTML que sirve el servidor, sin ejecutar JavaScript? Es la pregunta más importante de todo el framework.",
      why:
        "Es un GATE: si falla, el resto no cuenta. Los rastreadores de IA no ejecutan JavaScript; leen el HTML crudo que sale del servidor. Las webs hechas con React, Vue o Angular sin renderizado en servidor entregan un contenedor vacío que el navegador rellena después. La máquina ve una página en blanco y no hay Bloques ni Lenguaje que puedan salvarla.",
      check:
        "Se cuenta cuántos caracteres de texto visible hay en el HTML inicial y se detecta el patrón de shell vacío. Si no hay texto real, el gate se marca suspendido y la nota se corta ahí.",
    },
    {
      letter: "B",
      name: "Bloques",
      icon: Layers,
      what:
        "La estructura del documento: un solo h1, jerarquía de encabezados sin saltos, HTML semántico (main, article, section) y JSON-LD válido con un @type de contenido.",
      why:
        "Una máquina segmenta tu página por sus bloques para decidir qué trozo responde a qué pregunta. Sin un h1 claro, con encabezados que saltan de h2 a h4, o con todo metido en divs anónimos, el modelo no sabe dónde empieza y acaba cada idea, y te fragmenta mal.",
      check:
        "Se cuentan los h1, se valida la secuencia de encabezados, se buscan las etiquetas semánticas y se parsea el JSON-LD para confirmar que existe y tiene un @type de contenido reconocible.",
    },
    {
      letter: "L",
      name: "Lenguaje",
      icon: MessageSquareText,
      what:
        "La answerability del primer bloque de contenido: ¿responde QUÉ eres, PARA QUIÉN, CUÁNTO (con una cifra), está fechado y se sostiene solo, sin contexto previo?",
      why:
        "Es lo que separa una web que se lee de una web que se cita. Un modelo generativo prefiere párrafos autónomos que respondan una pregunta completa. Si tu primer bloque es un eslogan vacío, la máquina no tiene un hecho que extraer y citar.",
      check:
        "El rubric 2.0 mide cinco hechos, no palabras sueltas: qué, para quién, cuánto (con número), fechado y autocontenido. Devuelve una puntuación de 0 a 5 hechos presentes. Comprueba hechos, no adjetivos.",
    },
    {
      letter: "X",
      name: "eXtras",
      icon: Sparkles,
      what:
        "Las señales avanzadas: un llms.txt real, la entidad Organization o Person declarada en JSON-LD, una vía de contacto legible y señales de citación.",
      why:
        "Son la diferencia entre una web correcta y una web que la máquina reconoce como una entidad con identidad y autoridad. No arreglan un gate suspendido, pero suben el techo de lo que puedes conseguir una vez lo básico funciona.",
      check:
        "Se descarga /llms.txt para confirmar que existe y no está vacío, se busca la entidad Organization o Person en el JSON-LD y se detectan las vías de contacto y las señales de citación presentes en el HTML.",
    },
  ];

  const faqs = [
    {
      q: "¿Qué significa HABLA y por qué ese nombre?",
      a: "HABLA es el nombre del framework de cinco dimensiones que hay detrás del auditor de esGEO. Cada letra es una dimensión: Higiene, Accesible, Bloques, Lenguaje y eXtras. El nombre es una metáfora deliberada: describe el idioma con el que tu web habla con las máquinas. Si ese idioma está roto, la IA no te entiende, por muy bien que te vea un humano en el navegador.",
    },
    {
      q: "¿Por qué la nota es una nota y no una opinión?",
      a: "Porque cada dimensión se comprueba con una comprobación de máquina, no con un juicio subjetivo. El robots.txt existe o no existe; hay texto en el HTML inicial o no lo hay; hay un solo h1 o hay tres. El auditor descarga el HTML real que sirve tu servidor, sin ejecutar JavaScript, exactamente como haría un crawler de IA, y aplica reglas verificables. Además devuelve el rubric versionado con el que puntuó: una nota sin rubric sería una opinión.",
    },
    {
      q: "¿Qué es el gate de Accesible y por qué corta la nota?",
      a: "La dimensión Accesible es un gate: comprueba si hay texto real en el HTML que sale del servidor sin ejecutar JavaScript. Si falla, el resto de dimensiones no cuentan, porque no sirve de nada tener una estructura perfecta si la máquina nunca llega a verla. Las webs React, Vue o Angular sin renderizado en servidor suelen fallar aquí: entregan un HTML vacío que el navegador rellena, pero el crawler no.",
    },
    {
      q: "¿Qué es el caveat que devuelve el auditor?",
      a: "El caveat es lo que la nota NO significa, y se enseña en lugar de esconderse. El auditor mide si una máquina PUEDE leerte y estructurar tu contenido; no mide tu autoridad, ni la calidad de tu producto, ni si de verdad te van a citar. Una nota alta significa que has quitado las barreras técnicas para ser citado, no que ya lo estés siendo.",
    },
    {
      q: "¿Es lo mismo HABLA que el auditor de la página /geo-score?",
      a: "Sí: es el mismo motor. /habla explica el framework en detalle, dimensión por dimensión, y /geo-score es la herramienta directa para lanzar el análisis. Ambas embeben el mismo auditor de esGEO, así que la nota que obtienes es idéntica: la que sacaría un rastreador de IA leyendo tu HTML.",
    },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "HABLA: el framework de 5 dimensiones para que la IA lea y cite tu web",
    description:
      "El modelo de cinco dimensiones (Higiene, Accesible, Bloques, Lenguaje, eXtras) con el que el auditor de esGEO mide si una máquina puede leer y citar una web. Cada dimensión es verificable con una comprobación de máquina.",
    url: "https://www.esgeo.ai/habla",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    inLanguage: "es-ES",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      "@id": "https://www.esgeo.ai#organization",
      name: "esGEO",
      url: "https://www.esgeo.ai",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.esgeo.ai#organization",
      name: "esGEO",
      url: "https://www.esgeo.ai",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.esgeo.ai/" },
        { "@type": "ListItem", position: 2, name: "HABLA", item: "https://www.esgeo.ai/habla" },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".snippet-block", "[data-speakable]"],
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.esgeo.ai/habla" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      {socialHelmet}
      <Helmet>
        <title>HABLA: el framework de 5 dimensiones para que la IA lea y cite tu web | esGEO</title>
        <meta
          name="description"
          content="HABLA es el modelo de 5 dimensiones que mide si una máquina puede leer y citar tu web. Cada dimensión se comprueba con código, no con opinión. Pon tu web a hablar."
        />
        <link rel="canonical" href="https://www.esgeo.ai/habla" />
        <meta property="og:title" content="HABLA: el idioma con el que tu web habla con las máquinas" />
        <meta
          property="og:description"
          content="El framework de 5 dimensiones detrás del auditor de esGEO. Higiene, Accesible, Bloques, Lenguaje y eXtras: cada una verificable con una comprobación de máquina."
        />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      <main role="main">
        {/* Migas de pan */}
        <nav aria-label="Migas de pan" className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl py-3">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground">
                  <Home className="h-3.5 w-3.5" />
                  Inicio
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li className="text-foreground font-medium" aria-current="page">
                HABLA
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-5">
                <MessageSquareText className="h-4 w-4" />
                EL FRAMEWORK HABLA
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                HABLA: el idioma con el que tu web habla con las máquinas
              </h1>
              <p
                className="snippet-block text-lg text-muted-foreground max-w-2xl mx-auto"
                data-speakable="true"
              >
                <strong>HABLA</strong> es el modelo de cinco dimensiones que hay detrás del auditor de
                esGEO. Cada letra mide una capa distinta de si una máquina puede leerte y citarte:{" "}
                <strong>H</strong>igiene, <strong>A</strong>ccesible, <strong>B</strong>loques,{" "}
                <strong>L</strong>enguaje y e<strong>X</strong>tras. Lo importante: cada dimensión es
                verificable con una comprobación de máquina sobre el HTML que tu servidor entrega de
                verdad, sin ejecutar JavaScript. Por eso el resultado es una nota, no una opinión.
              </p>
            </div>

            <HighlightSnippet variant="definition" lastModified="2026-07-20">
              <p className="text-base text-foreground">
                <strong>Definición.</strong> HABLA es un framework de auditoría de{" "}
                <GeoTerm term="citabilidad">legibilidad para máquinas</GeoTerm> compuesto por cinco
                dimensiones —Higiene, Accesible, Bloques, Lenguaje y eXtras— que puntúan de 0 a 100 si
                un rastreador de IA como GPTBot o ClaudeBot puede leer, estructurar y citar una web a
                partir del HTML que sirve el servidor, sin ejecutar JavaScript. Cada dimensión se
                comprueba con reglas de máquina, no con juicios subjetivos; el auditor devuelve además
                el rubric versionado con el que puntuó y un caveat que aclara lo que la nota no
                significa.
              </p>
            </HighlightSnippet>
          </div>
        </section>

        {/* Las 5 dimensiones */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Las cinco dimensiones, una por una
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada dimensión tiene su letra, mide algo concreto, importa por una razón concreta y se
                comprueba con una máquina. No hay opiniones: hay comprobaciones que pasan o no pasan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {dimensions.map((d) => (
                <article
                  key={d.letter}
                  className="rounded-xl border border-border bg-card p-6"
                  data-speakable="true"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent text-2xl font-bold">
                      {d.letter}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">{d.name}</h3>
                      <d.icon className="h-4 w-4 text-muted-foreground mt-1" />
                    </div>
                    {d.letter === "A" && (
                      <span className="ml-auto text-xs font-semibold uppercase tracking-wide bg-destructive/10 text-destructive border border-destructive/20 px-2 py-1 rounded">
                        Gate
                      </span>
                    )}
                  </div>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-foreground">Qué mide</dt>
                      <dd className="text-muted-foreground">{d.what}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Por qué importa</dt>
                      <dd className="text-muted-foreground">{d.why}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Cómo se comprueba</dt>
                      <dd className="text-muted-foreground">{d.check}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-8 text-center">
              El auditor no se queda en el número. Devuelve también el{" "}
              <strong>rubric versionado</strong> —la versión exacta de las reglas con las que puntuó,
              porque una nota sin rubric no es una nota— y un <strong>caveat</strong> que recuerda lo
              que la nota no significa: mide si una máquina <em>puede</em> leerte, no tu autoridad ni
              si de verdad te van a citar.
            </p>
          </div>
        </section>

        {/* Auditor en vivo */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Pon tu web a hablar
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                La teoría se entiende mejor con tu propio dominio delante. El auditor lee tu HTML como
                lo haría un crawler de IA y te dice en qué dimensión de HABLA fallas primero.
              </p>
            </div>

            <HablaWidget
              title="Pon tu web a hablar"
              subtitle="Escribe tu dominio y te digo en qué dimensión falla."
            />
          </div>
        </section>

        {/* Cómo se usa la nota */}
        <section className="py-14 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Cómo se usa la nota
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              La nota de HABLA no es un adorno para presumir: es un ciclo de trabajo. Se mide, se
              arregla por dimensión y se vuelve a medir.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-sm font-bold text-accent">01</span>
                <h3 className="font-semibold text-foreground mt-2 mb-2">Medir</h3>
                <p className="text-sm text-muted-foreground">
                  Lanza el auditor y anota tu nota de partida y el gate. Sabrás si la máquina te lee y,
                  si no, en qué dimensión se rompe. Tienes la herramienta directa en{" "}
                  <Link to="/geo-score" className="text-primary underline underline-offset-2">
                    /geo-score
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-sm font-bold text-accent">02</span>
                <h3 className="font-semibold text-foreground mt-2 mb-2">Arreglar por dimensión</h3>
                <p className="text-sm text-muted-foreground">
                  Empieza por el gate de Accesible: sin texto en el HTML, nada más importa. Luego sube
                  Bloques y Lenguaje. La{" "}
                  <Link to="/metodologia" className="text-primary underline underline-offset-2">
                    metodología
                  </Link>{" "}
                  y el{" "}
                  <Link to="/curso" className="text-primary underline underline-offset-2">
                    curso
                  </Link>{" "}
                  te dan el orden de ataque dimensión por dimensión.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-sm font-bold text-accent">03</span>
                <h3 className="font-semibold text-foreground mt-2 mb-2">Volver a medir</h3>
                <p className="text-sm text-muted-foreground">
                  Vuelve a pasar el auditor y compara. Como cada dimensión es una comprobación de
                  máquina, el progreso es objetivo: la nota sube porque un fallo verificable ha dejado
                  de fallar, no porque lo digas tú.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enlaces pilar */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-5">
              <Link
                to="/machine-readability"
                className="group rounded-xl border border-border bg-card p-6 hover:border-accent transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  El sistema completo
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  HABLA es la forma de medir la legibilidad para máquinas. La página pilar de{" "}
                  <GeoTerm term="geo">legibilidad para máquinas</GeoTerm> explica todo el sistema: qué
                  es, por qué el <GeoTerm term="ssr-prerender">renderizado en servidor</GeoTerm>{" "}
                  cambia el resultado y cómo encajan los{" "}
                  <GeoTerm term="datos-estructurados">datos estructurados</GeoTerm> y el{" "}
                  <GeoTerm term="llms-txt">llms.txt</GeoTerm>.
                </p>
              </Link>
              <Link
                to="/radar-ia"
                className="group rounded-xl border border-border bg-card p-6 hover:border-accent transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  Radar IA
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  Guías y análisis sobre <GeoTerm term="motores-generativos">motores generativos</GeoTerm>,{" "}
                  <GeoTerm term="answerability">answerability</GeoTerm> y cómo se comportan bots como{" "}
                  <GeoTerm term="gptbot">GPTBot</GeoTerm> y{" "}
                  <GeoTerm term="claudebot">ClaudeBot</GeoTerm> cuando entran en una web. El{" "}
                  <GeoTerm term="robots-txt">robots.txt</GeoTerm> decide si les dejas pasar.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <dl className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-border pb-6">
                  <dt className="font-semibold text-foreground mb-2">{f.q}</dt>
                  <dd className="text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Mide en qué dimensión falla tu web. Luego arréglala.
            </h2>
            <p className="text-primary-foreground/75 mb-7">
              El auditor de esGEO te da la nota y el diagnóstico por dimensión. El curso te enseña a
              subir cada una.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/geo-score">
                  Auditar mi web <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/curso">Ver el curso</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HablaPage;
