import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Shield, Split, Gauge } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HpLiveSignals from "@/components/HpLiveSignals";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const TITLE =
  "Hiperpersonalización web en tiempo real: cómo esGEO adapta esta página a tu sesión (2026) | esGEO";
const DESC =
  "Qué es la hiperpersonalización client-side, cómo funciona el modelo señal→regla→adaptación y cómo esGEO la aplica sobre su propia web sin backend, sin cookies de terceros y sin enviar tus datos a ningún servidor. Con demo en vivo.";
const URL = "https://www.esgeo.ai/hiperpersonalizacion";

const matrix: { signal: string; adaptation: string }[] = [
  {
    signal: "De dónde llegas (UTM o referrer)",
    adaptation:
      "El titular cambia según el canal: quien viene de LinkedIn ve un mensaje B2B; quien viene de un buscador ve una promesa centrada en aparecer citado.",
  },
  {
    signal: "Visita recurrente",
    adaptation:
      "Si ya habías estado, el titular te reconoce (“otra vez por aquí”) en vez de tratarte como si fuera tu primera vez.",
  },
  {
    signal: "Score de intención (tiempo + scroll + interacción)",
    adaptation:
      "Cuando el interés sube de un umbral, aparece una oferta directa del curso; a quien solo pasa de largo no se le enseña nada agresivo.",
  },
  {
    signal: "Email de empresa",
    adaptation:
      "Si escribes un correo corporativo, el copy puede nombrar tu empresa; si es un correo personal, pivota a marca personal.",
  },
  {
    signal: "Patrón de lectura (skimmer)",
    adaptation:
      "A quien va rápido y baja mucho, se le ofrece un resumen; a quien lee en profundidad, contenido ampliado.",
  },
  {
    signal: "Inactividad y hora local",
    adaptation:
      "Un aviso suave si te quedas quieto; mensajes contextuales según sea de día o de noche.",
  },
];

const faqs = [
  {
    q: "¿Qué es la hiperpersonalización web en tiempo real?",
    a: "Es adaptar el contenido de una página a cada visitante en el mismo momento en que lo lee, en función de señales de su sesión (de dónde llega, si es recurrente, cuánto interés muestra, la hora). En la versión client-side todo ocurre en el navegador: no hace falta backend, ni login, ni cookies de terceros, y ningún dato de la sesión sale del dispositivo.",
  },
  {
    q: "¿esGEO envía mis datos a un servidor para personalizar?",
    a: "No. El motor calcula las señales en tu navegador y aplica las reglas ahí mismo. Nada de lo que hace esta página con tu sesión (tiempo, scroll, origen, email que escribas en la demo) se transmite ni se almacena fuera de tu propio navegador. Solo se registran eventos anónimos de qué regla se disparó, para poder medir si personalizar mejora la experiencia.",
  },
  {
    q: "¿En qué se basa el modelo señal → regla → adaptación?",
    a: "Personalizar es unir tres piezas: una señal (un hecho observable de la sesión), una regla (una condición sobre esa señal) y una adaptación (un cambio concreto en la página). La norma de oro es que el default va primero: la página se sirve completa y correcta sin ninguna personalización, y los cambios se aplican encima. Si el motor falla o no carga, no pasa nada.",
  },
  {
    q: "¿La personalización no es un poco invasiva?",
    a: "Depende de cómo se haga. La metodología de esGEO fija límites: nada de señales sensibles (salud, identidad, ubicación fina), aviso visible de que la página se adapta, respeto a quien prefiere menos animación, y un umbral “creepy”: si una adaptación revela un dato que no diste conscientemente, se suaviza o se etiqueta. El objetivo es que pienses “qué relevante”, no “cómo saben eso”.",
  },
];

const HiperpersonalizacionPage = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: TITLE,
    description: DESC,
    canonicalUrl: URL,
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={URL} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          headline:
            "Hiperpersonalización web en tiempo real: cómo esGEO adapta su web a tu sesión",
          description: DESC,
          url: URL,
          datePublished: "2026-07-18",
          dateModified: "2026-07-18",
          author: { "@type": "Organization", name: "esGEO", url: "https://www.esgeo.ai" },
          publisher: { "@type": "Organization", name: "esGEO", url: "https://www.esgeo.ai" },
          image: "https://www.esgeo.ai/og-image.png",
          mainEntityOfPage: { "@type": "WebPage", "@id": URL },
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main role="main">
          {/* HERO */}
          <section className="hero-gradient py-16 md:py-24 text-primary-foreground">
            <div className="container mx-auto px-4 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-light mb-4">
                Metodología esGEO · aplicada sobre esGEO
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Esta web se está adaptando a ti mientras la lees
              </h1>
              <p
                className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl"
                data-speakable="true"
              >
                La hiperpersonalización en tiempo real cambia el contenido de una página según
                señales de tu sesión —de dónde llegas, si ya habías estado, cuánto interés
                muestras— y lo hace <strong>entero en tu navegador</strong>: sin backend, sin
                login, sin cookies de terceros y sin enviar tus datos a ningún sitio. Aquí te
                enseñamos cómo funciona, con el mismo motor que corre en esta web.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Eye className="h-5 w-5" /> Ver mis señales en vivo
                </a>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  El framework GEO <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* QUÉ ES */}
          <section className="py-14 md:py-20" data-hp-section="que-es">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Señal → regla → adaptación
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Personalizar bien no es magia ni vigilancia: es unir tres piezas. Una{" "}
                <strong className="text-foreground">señal</strong> es un hecho observable de tu
                sesión (llegaste desde LinkedIn, es tu segunda visita, llevas 40 segundos
                leyendo). Una <strong className="text-foreground">regla</strong> es una condición
                sobre esa señal. Y una <strong className="text-foreground">adaptación</strong> es
                un cambio concreto en la página: otro titular, una oferta que aparece, un resumen
                que se despliega.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La norma de oro es que el <strong className="text-foreground">default va
                primero</strong>. La página se construye completa y correcta sin ninguna
                personalización —eso es lo que ven los buscadores y los modelos de IA que
                rastrean esta web— y los cambios se aplican encima, solo en tu navegador. Si el
                motor falla, no carga o lo bloqueas, no se rompe nada: ves la versión genérica,
                que también está pensada para funcionar.
              </p>
            </div>
          </section>

          {/* MATRIZ */}
          <section className="py-14 md:py-20 bg-secondary/30" data-hp-section="matriz">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Qué adapta esta web, y con qué señal
              </h2>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="p-4 font-semibold text-foreground">Señal</th>
                      <th className="p-4 font-semibold text-foreground">Adaptación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrix.map((row) => (
                      <tr key={row.signal} className="border-t border-border align-top">
                        <td className="p-4 font-medium text-foreground w-1/3">{row.signal}</td>
                        <td className="p-4 text-muted-foreground">{row.adaptation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Máximo seis reglas vivas a la vez: más reglas convierten la página en algo
                esquizofrénico. Cuando varias tocan el mismo elemento, mandan en este orden:
                recurrencia &gt; origen &gt; intención.
              </p>
            </div>
          </section>

          {/* DEMO */}
          <section id="demo" className="py-14 md:py-20" data-hp-section="demo">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Demo en vivo: lo que el motor sabe de tu sesión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Estas son las señales que esta página está calculando ahora mismo sobre tu visita.
                Se actualizan cada medio segundo y no salen de tu navegador. Pruébalo: recarga,
                haz scroll, vuelve mañana, o entra con <code>?utm_source=linkedin</code> y mira
                cómo cambia el titular de la home.
              </p>
              <HpLiveSignals />
            </div>
          </section>

          {/* ÉTICA / LÍMITES */}
          <section className="py-14 md:py-20 bg-secondary/30" data-hp-section="limites">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Los límites que nos ponemos
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <Shield className="h-6 w-6 text-accent mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Tus datos no se mueven</h3>
                  <p className="text-sm text-muted-foreground">
                    Todo el cálculo es client-side. Sin backend, sin cookies de terceros, sin
                    perfilado cross-device. Solo eventos anónimos de qué regla se disparó, para
                    medir.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <Eye className="h-6 w-6 text-accent mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Nada de umbral creepy</h3>
                  <p className="text-sm text-muted-foreground">
                    Ninguna señal sensible (salud, identidad, ubicación fina). Si una adaptación
                    revelara un dato que no diste conscientemente, se suaviza o se etiqueta.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <Split className="h-6 w-6 text-accent mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Se mide, no se cree</h3>
                  <p className="text-sm text-muted-foreground">
                    La mitad de las visitas ve la versión personalizada y la otra mitad la
                    genérica. Si personalizar no gana en conversión, se quitan reglas, no se
                    añaden.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20" data-hp-section="faq">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Gauge className="h-7 w-7 text-accent" />
                Preguntas frecuentes
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
                <p className="text-lg text-foreground font-semibold mb-4">
                  La misma idea, aplicada a que la IA te cite: primero legible por máquinas,
                  luego adaptable para humanos.
                </p>
                <Link
                  to="/curso"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Ver el curso GEO (F1-F5) <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HiperpersonalizacionPage;
