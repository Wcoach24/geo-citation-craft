import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, FileSearch, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HablaWidget from "@/components/HablaWidget";
import { Button } from "@/components/ui/button";
import { HABLA_API } from "@/lib/habla";
import { trackEvent } from "@/lib/analytics";

/**
 * /geo-score — antes era un quiz de autoevaluación: el visitante contestaba preguntas y el
 * front calculaba una nota. Era una nota inventada sobre respuestas subjetivas.
 *
 * Ahora la página sirve el auditor real (HABLA): lee el HTML que tu servidor entrega, sin
 * ejecutar JavaScript, exactamente como haría GPTBot, y devuelve una puntuación medible.
 * La URL se mantiene (no romper SEO: recibe tráfico y enlaces).
 */
const GeoScorePage = () => {
  const faqs = [
    {
      q: "¿Qué mide exactamente el auditor?",
      a: "Descarga el HTML que tu servidor entrega —sin ejecutar JavaScript, igual que un crawler de IA— y lo puntúa de 0 a 100 sobre cinco dimensiones: Higiene (robots.txt, sitemap, HTTPS), Accesible (¿hay texto real en el HTML inicial?), Bloques (h1, encabezados, HTML semántico, datos estructurados), Lenguaje (¿el primer bloque responde qué, para quién y cuánto?) y eXtras (llms.txt, señales de citación).",
    },
    {
      q: "¿Por qué mi web puntúa bajo si se ve perfecta en el navegador?",
      a: "Porque tú ejecutas JavaScript y los rastreadores de IA no. Si tu web está hecha con React, Vue o Angular sin renderizado en servidor, el HTML que sale de tu servidor es un contenedor vacío: el navegador lo rellena, el crawler no. Es el fallo más común y el más caro, porque anula todo lo demás.",
    },
    {
      q: "¿Es gratis? ¿Guardáis mi web?",
      a: "El análisis es gratuito y no requiere registro. Solo se analiza HTML público, el mismo que cualquiera puede ver con 'ver código fuente'. Guardamos la URL y la puntuación para medir el estado del parque web en español.",
    },
    {
      q: "¿Y si mi puntuación es mala?",
      a: "Es lo normal: la mayoría de las webs modernas fallan el gate de accesibilidad. El auditor te dice qué arreglar primero; el curso F1–F5 te enseña a arreglarlo todo. La propia esgeo.ai puntuaba 35 sobre 100 antes de aplicarse su propio método.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Auditor GEO gratuito — ¿tu web habla con las IAs? | esGEO</title>
        <meta
          name="description"
          content="Analiza gratis si ChatGPT, Perplexity, Claude y Gemini pueden leer tu web. Puntuación 0-100 sobre el HTML real que sirve tu servidor, sin ejecutar JavaScript. Sin registro."
        />
        <link rel="canonical" href="https://www.esgeo.ai/geo-score" />
        <meta property="og:title" content="Auditor GEO gratuito — ¿tu web habla con las IAs?" />
        <meta
          property="og:description"
          content="Puntuación 0-100 de la legibilidad de tu web para los modelos de IA. Gratis y sin registro."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "HABLA — auditor de legibilidad máquina",
            url: "https://www.esgeo.ai/geo-score",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
            inLanguage: "es-ES",
            description:
              "Auditor gratuito que puntúa de 0 a 100 la legibilidad de una web para los modelos de lenguaje generativo, analizando el HTML servido sin ejecutar JavaScript.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            publisher: { "@type": "Organization", name: "esGEO", url: "https://www.esgeo.ai" },
          }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }) }} />
      </Helmet>

      <Header />

      <main role="main">
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Bot className="h-4 w-4" />
                AUDITOR GRATUITO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
                ¿Tu web habla con las IAs?
              </h1>
              <p
                className="snippet-block text-lg text-muted-foreground max-w-2xl mx-auto"
                data-speakable="true"
              >
                Este auditor descarga el HTML que tu servidor entrega de verdad —{" "}
                <strong>sin ejecutar JavaScript, igual que GPTBot, ClaudeBot o PerplexityBot</strong>{" "}
                — y lo puntúa de 0 a 100 sobre cinco dimensiones: Higiene, Accesible, Bloques,
                Lenguaje y eXtras. Es gratuito, no pide registro y tarda unos diez segundos. Si tu
                web está hecha con React, Vue o Angular sin renderizado en servidor, es probable que
                suspenda: el HTML que sale de tu servidor está vacío y el crawler no ve nada.
              </p>
            </div>

            <HablaWidget
              title="Analiza tu dominio"
              subtitle="Escribe la dirección y te digo qué encuentra un crawler de IA cuando entra."
              onAnalyzeStart={(url) => trackEvent.geoScoreStarted(url)}
              onAnalyzeComplete={(r) => trackEvent.geoScoreCompleted(r.total, r.grade)}
              onAnalyzeError={(message) => trackEvent.geoScoreError(message)}
              onResultCtaClick={(target, grade) => trackEvent.geoScoreCta(target, grade)}
            />

            {/* Cómo funciona */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {[
                {
                  icon: FileSearch,
                  title: "Lee lo que lee la máquina",
                  body: "Descarga el HTML crudo. No abre un navegador ni ejecuta scripts: ve exactamente lo que ve un rastreador de IA.",
                },
                {
                  icon: ShieldCheck,
                  title: "Puntúa cinco dimensiones",
                  body: "H-A-B-L-A: Higiene, Accesible, Bloques, Lenguaje y eXtras. Accesible es un gate: si no hay texto en el HTML, el resto no cuenta.",
                },
                {
                  icon: ArrowRight,
                  title: "Te dice qué arreglar",
                  body: "Devuelve las mejoras ordenadas por impacto, con el tiempo estimado de cada una. Empieza por la primera.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-card p-5">
                  <c.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Caso propio */}
        <section className="py-12 bg-muted/30 border-y border-border" data-speakable="true">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Empezamos por nuestra propia web
            </h2>
            <p className="text-muted-foreground">
              <strong>esgeo.ai</strong> fue invisible para las IAs desde el día en que se publicó:
              un HTML vacío de 237 caracteres, gate de accesibilidad suspendido. Cuando pasamos este
              mismo auditor por nuestra propia web, sacó un <strong>35 sobre 100</strong>. La web que
              vende un curso sobre cómo ser citado por las IAs era, para las IAs, una página en
              blanco. Lo arreglamos aplicando el método F1–F5 y publicamos el antes y el después.
              Puedes auditarnos tú mismo con el formulario de arriba.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14">
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
              El auditor te dice qué falla. El curso te enseña a arreglarlo.
            </h2>
            <p className="text-primary-foreground/75 mb-7">
              5 módulos, guías PDF y plantillas. 47 € de pago único, sin suscripción.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/curso">
                  Ver el curso — 47 € <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={HABLA_API} target="_blank" rel="noopener">
                  Abrir HABLA
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GeoScorePage;
