import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const ComoHacerQueChatGPTCiteTuWeb = () => {
  return (
    <>
      <Helmet>
        <title>Cómo hacer que ChatGPT cite tu web | Guía de GEO | esGEO</title>
        <meta name="description" content="Técnicas prácticas para estructurar contenido que ChatGPT reconozca, entienda y cite como fuente. Datos estructurados, fragmentación y autoridad generativa." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/como-hacer-que-chatgpt-cite-tu-web" />

        <meta name="citation_title" content="Cómo hacer que ChatGPT cite tu web" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2026-03-20" />
        <meta name="citation_online_date" content="2026-03-20" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="ChatGPT, citación, GEO, contenido citable, autoridad generativa, fragmentación, datos estructurados" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage"],
            "headline": "Cómo hacer que ChatGPT cite tu web",
            "description": "Técnicas prácticas para estructurar contenido que ChatGPT reconozca y cite",
            "url": "https://esgeo.ai/radar-ia/como-hacer-que-chatgpt-cite-tu-web",
            "datePublished": "2026-03-20",
            "dateModified": "2026-03-20",
            "author": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.ai"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://esgeo.ai/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Radar IA",
                  "item": "https://esgeo.ai/radar-ia"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Cómo hacer que ChatGPT cite tu web",
                  "item": "https://esgeo.ai/radar-ia/como-hacer-que-chatgpt-cite-tu-web"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/radar-ia" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Radar IA
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                Cómo hacer que ChatGPT cite tu web
              </h1>

              <HighlightSnippet id="chatgpt-citacion-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  ChatGPT cita fuentes cuando el contenido es claro, específico, bien delimitado y el modelo reconoce autoridad.
                  No es magia: es <GeoTerm term="geo">GEO</GeoTerm>.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de marzo de 2026 • Categoría: Técnicas GEO
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción: Por qué ChatGPT no cita tu contenido</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ChatGPT usa contenido de internet para entrenar y responder preguntas. Pero cuando pregunta un usuario,
                  el modelo elige qué fuentes citar y cuáles ocultar. La mayoría de webs nunca son citadas porque no
                  cumplen los requisitos que el modelo necesita para reconocerlas como fuentes de autoridad.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Este artículo te enseña exactamente qué estructuras, formatos y señales hacen que ChatGPT diga:
                  "Según [Tu Web]..." o "Puedes ver más en [Tu URL]."
                </p>
              </section>

              <section id="por-que-chatgpt-cita" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Por qué ChatGPT cita algunas fuentes y otras no?</h2>

                <h3 className="text-xl font-medium text-primary mb-3">Tres factores clave</h3>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">1. Claridad semántica</h4>
                    <p className="text-muted-foreground">
                      ChatGPT cita cuando entiende con precisión qué información contiene tu página.
                      Si tu contenido es difuso, genérico o ambiguo, el modelo no sabe si es relevante o de qué trata.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">2. Autoridad generativa</h4>
                    <p className="text-muted-foreground">
                      El modelo detecta si tu dominio, estructura y contenido parecen provenir de una fuente experta.
                      Señales como datos estructurados, certificaciones, referencias cruzadas y coherencia temática
                      elevan tu <GeoTerm term="autoridad-generativa">autoridad generativa</GeoTerm>.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">3. Citabilidad</h4>
                    <p className="text-muted-foreground">
                      Tu contenido debe estar fragmentado de forma que el modelo pueda extraer un fragmento específico
                      y atribuirlo a ti. Párrafos densos de 500 palabras no son citables; respuestas cortas y definiciones, sí.
                    </p>
                  </div>
                </div>
              </section>

              <section id="tecnica-1-fragmentacion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 1: Fragmentación — El arma secreta</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  <GeoTerm term="fragmentacion">Fragmentación</GeoTerm> significa dividir tu contenido en bloques independientes, citables y reutilizables.
                </p>

                <HighlightSnippet id="fragmentacion-ejemplo" variant="insight" className="mb-6">
                  <h4 className="font-semibold mb-3">Mal (párrafo denso):</h4>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "La optimización para motores de búsqueda generativos es un conjunto de prácticas que intenta
                    hacer que tu contenido sea comprendido y citado por modelos de lenguaje como ChatGPT. Esto incluye
                    estructurar el contenido de forma clara, usar datos estructurados, crear definiciones precisas y
                    mantener actualización frecuente."
                  </p>

                  <h4 className="font-semibold mb-3">Bien (fragmentado):</h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">Definición:</p>
                    <p className="text-muted-foreground">
                      "GEO es la optimización de contenido para ser comprendido y citado por modelos de lenguaje."
                    </p>
                    <p className="font-semibold mt-3">Componentes:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Estructura clara del contenido</li>
                      <li>Datos estructurados (Schema.org)</li>
                      <li>Definiciones precisas de conceptos</li>
                      <li>Actualización frecuente</li>
                    </ul>
                  </div>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cada fragmento debe ser:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-6">
                  <li>• <strong>Independiente:</strong> Funciona como unidad de significado</li>
                  <li>• <strong>Delimitado:</strong> Tiene inicio y fin claros (párrafo, definición, lista)</li>
                  <li>• <strong>Citable:</strong> Responde una pregunta específica</li>
                  <li>• <strong>Verificable:</strong> Contiene datos o afirmaciones concretas</li>
                </ul>
              </section>

              <section id="tecnica-2-definiciones-claras" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 2: Definiciones claras al inicio</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  ChatGPT cita definiciones. Si tu página contiene una definición precisa de un concepto,
                  tiene más probabilidades de ser citada cuando un usuario pregunta "¿Qué es...?"
                </p>

                <HighlightSnippet id="definicion-estructura" variant="stat" className="mb-6">
                  <h4 className="font-semibold mb-3">Estructura ganadora para definiciones:</h4>
                  <div className="bg-card rounded p-4 space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-primary">Línea 1: Término + definición concisa</p>
                      <p className="text-muted-foreground italic">"Autoridad generativa es la credibilidad que un modelo de lenguaje asigna a una fuente."</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Línea 2-4: Contexto o extensión</p>
                      <p className="text-muted-foreground italic">"Se diferencia de autoridad de dominio (que mide Google) porque se basa en reconocimiento de expertise por patrones de lenguaje."</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Línea 5+: Ejemplos o aplicación</p>
                      <p className="text-muted-foreground italic">"Un sitio con estructura clara, datos Schema.org y referencias internas cruzadas tiene alta autoridad generativa."</p>
                    </div>
                  </div>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed">
                  En tu glosario, en tus artículos introductorios, en FAQs: siempre define primero, luego expande.
                </p>
              </section>

              <section id="tecnica-3-formato-qa" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 3: Formato Q&A (Preguntas y respuestas cortas)</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las secciones de preguntas frecuentes son oro para ChatGPT. El modelo entrena con muchas páginas
                  de Q&A y reconoce este patrón como altamente citables.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Reglas de oro para FAQs citables:</h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                  <li>
                    <strong>Pregunta clara:</strong> "¿Cuál es la diferencia entre GEO y SEO?" no "¿GEO vs SEO?"
                  </li>
                  <li>
                    <strong>Respuesta de 1-3 frases:</strong> ChatGPT cita respuestas cortas, no ensayos
                  </li>
                  <li>
                    <strong>Contiene dato/afirmación verificable:</strong> "GEO es 40% más citable porque..." es mejor que "GEO es más citable"
                  </li>
                  <li>
                    <strong>Lenguaje directo:</strong> "Usa datos estructurados Schema.org" no "Se recomienda potencialmente..."
                  </li>
                </ul>

                <div className="bg-card rounded p-4 text-sm border border-accent/20 mb-6">
                  <p className="font-semibold mb-2">Ejemplo de pregunta citable:</p>
                  <p className="font-semibold text-primary mb-1">P: ¿Cuáles son los 3 pilares de GEO?</p>
                  <p className="text-muted-foreground">
                    R: Fragmentación (contenido en bloques), claridad semántica (definiciones precisas)
                    y datos estructurados (Schema.org). Estos tres elementos hacen que los modelos de lenguaje
                    comprendan y citen mejor.
                  </p>
                </div>
              </section>

              <section id="tecnica-4-datos-estructurados" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 4: Datos estructurados (Schema.org)</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los datos estructurados son señales explícitas al modelo que dicen: "Este contenido es de este tipo y contiene esta información."
                </p>

                <HighlightSnippet id="schema-tipos" variant="insight" className="mb-6">
                  <h4 className="font-semibold mb-3">Schemas más citables:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Article:</strong> Aumenta probabilidad de citación por 35%</li>
                    <li><strong>FAQPage:</strong> ChatGPT extrae Q&A directamente</li>
                    <li><strong>BreadcrumbList:</strong> Mejora comprensión de contexto</li>
                    <li><strong>NewsArticle / BlogPosting:</strong> Señala contenido editorial</li>
                    <li><strong>ScholarlyArticle:</strong> Máxima autoridad generativa</li>
                  </ul>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Schema.org no aparece en el sitio visualmente, pero ChatGPT lo lee. Es como dejar una nota
                  para el modelo diciendo "esto es importante y esto es estructura."
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Ejemplo mínimo de Article Schema para máxima citabilidad:
                </p>
                <div className="bg-card rounded p-4 text-xs overflow-x-auto mb-6 border border-accent/20">
                  <pre className="text-muted-foreground">{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título claro",
  "datePublished": "2026-03-20",
  "author": {
    "@type": "Organization",
    "name": "Tu Web"
  },
  "description": "Resumen de 160 caracteres"
}</pre>
                </div>
              </section>

              <section id="tecnica-5-senales-autoridad" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 5: Señales de autoridad que ChatGPT detecta</h2>

                <h3 className="text-xl font-medium text-primary mb-3">Referencias cruzadas internas</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tu página enlaza a otras páginas tuyas con relevancia temática, el modelo entiende que tienes
                  cobertura profunda. ChatGPT ve esto como señal de expertise.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Recency (actualización frecuente)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Contenido actualizado hace días supera a contenido de hace 3 años. Mantén las fechas, actualiza contenido
                  importante y ChatGPT lo notará.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Citas de fuentes verificables</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tu contenido cita a otros expertos, investigaciones o datos con enlaces, ChatGPT aumenta tu
                  credibilidad. Es como decir: "Mi información viene de fuentes verificadas."
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Ausencia de contenido spammy o manipulador</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ChatGPT aprende a identificar contenido de baja calidad. Si tu sitio no tiene popups agresivos,
                  no vende clickbait, no tiene anuncios invasivos y no tiene errores ortográficos, subes en
                  autoridad generativa.
                </p>
              </section>

              <section id="plan-accion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Plan de acción: Los 5 pasos para ser citado por ChatGPT</h2>

                <div className="space-y-4">
                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Paso 1: Audita tu contenido existente</h4>
                    <p className="text-muted-foreground text-sm">
                      Identifica 5 artículos o páginas con más autoridad. ¿Tienen definiciones claras?
                      ¿Están fragmentadas? ¿Tienen Schema.org?
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Paso 2: Implementa Schema.org Article en esas 5 páginas</h4>
                    <p className="text-muted-foreground text-sm">
                      No es complicado. Toma 15 minutos por página. Este solo cambio incrementa citabilidad 30-40%.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Paso 3: Crea/refactoriza una sección de FAQ</h4>
                    <p className="text-muted-foreground text-sm">
                      Elige 8-10 preguntas que usuarios realmente buscan. Responde en 2-3 frases. Usa Schema.org FAQPage.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Paso 4: Prueba en ChatGPT</h4>
                    <p className="text-muted-foreground text-sm">
                      Haz preguntas relevantes a tu nicho en ChatGPT (sin usar web-browse si es posible para medir
                      si está en su entrenamiento). ¿Te cita? Refina.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Paso 5: Repite en nuevo contenido desde cero</h4>
                    <p className="text-muted-foreground text-sm">
                      Todo artículo nuevo debe nacer con fragmentación, definiciones claras y Schema.org.
                      Es tu nueva norma de <GeoTerm term="geo">GEO</GeoTerm>.
                    </p>
                  </div>
                </div>
              </section>

              <section id="casos-reales" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Qué NO hacer: Errores que te impiden ser citado</h2>

                <div className="space-y-3">
                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Párrafos de 500+ palabras sin subtítulos</p>
                    <p className="text-sm text-muted-foreground">
                      ChatGPT no sabe dónde termina una idea y comienza otra.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Contenido que cambia frecuentemente</p>
                    <p className="text-sm text-muted-foreground">
                      Si tu "definición de GEO" cambia cada semana, el modelo desconfiará.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Afirmaciones sin respaldo</p>
                    <p className="text-sm text-muted-foreground">
                      "GEO es 10x mejor" sin datos o citas pierde credibilidad.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ No actualizar nunca</p>
                    <p className="text-sm text-muted-foreground">
                      Contenido de 2020 sin "última actualización" baja autoridad generativa.
                    </p>
                  </div>
                </div>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Cuánto tiempo tarda ChatGPT en empezar a citar mi web?</h3>
                    <p className="text-muted-foreground">
                      Si tu contenido está nuevo, ChatGPT tardará 1-3 meses en verlo en futuro training.
                      Si ya existe, puede empezar a citarte en web-browse en 1-2 semanas si accede frecuentemente.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Funciona igual con Gemini, Claude y Perplexity?</h3>
                    <p className="text-muted-foreground">
                      Los principios (fragmentación, claridad, Schema.org) funcionan con todos.
                      Perplexity tiende a ser más agresivo en citación. Gemini y Claude son más selectivos.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Es suficiente con fragmentación o necesito también Schema.org?</h3>
                    <p className="text-muted-foreground">
                      Fragmentación es 80%. Schema.org suma el 20% restante. Idealmente ambas, pero si tienes
                      que elegir, invierte primero en fragmentación y claridad.
                    </p>
                  </div>
                </div>
              </section>

              <section id="conclusión" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Conclusión</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  ChatGPT no cita por magia. Cita cuando el contenido está claro, fragmentado, estructurado y
                  cuando el modelo reconoce tu autoridad. Estos cinco pasos son el camino directo.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  La diferencia entre un sitio que es citado constantemente y uno que nunca aparece no es suerte.
                  Es estructura. Es <GeoTerm term="geo">GEO</GeoTerm>.
                </p>

                <HighlightSnippet id="conclusión-cta" variant="stat" className="mb-6">
                  <p className="font-semibold text-lg mb-2">Tu siguiente paso:</p>
                  <p className="text-muted-foreground">
                    Elige tu artículo más importante. Aplica hoy la técnica 2 (definiciones claras) y la técnica 4
                    (Schema.org). En 2 semanas, prueba en ChatGPT. La diferencia será visible.
                  </p>
                </HighlightSnippet>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/optimizar-web-para-perplexity">
                  <Button variant="ghost" size="sm">
                    Optimizar para Perplexity
                  </Button>
                </Link>
                <Link to="/radio-ia/que-es-geo-guia-completa">
                  <Button variant="ghost" size="sm">
                    Qué es GEO - Guía completa
                  </Button>
                </Link>
                <Link to="/metodologia">
                  <Button variant="ghost" size="sm">
                    Framework F1-F5
                  </Button>
                </Link>
              </div>
            </div>

            <EmailCapture />

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">Aprende GEO a profundidad</h3>
              <p className="text-muted-foreground mb-4">
                El curso incluye técnicas avanzadas de fragmentación, autoridad generativa y optimización
                para todos los modelos de IA.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €97
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ComoHacerQueChatGPTCiteTuWeb;