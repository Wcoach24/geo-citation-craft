import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const QueEsGeoGuiaCompleta = () => {
  return (
    <>
      <Helmet>
        <title>¿Qué es GEO? Guía Completa 2026 de Generative Engine Optimization | esGEO</title>
        <meta name="description" content="GEO (Generative Engine Optimization) es la metodología para que ChatGPT, Perplexity y Claude citen tu web. Guía con framework F1-F5, datos de Princeton y ejemplos prácticos." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/que-es-geo-guia-completa" />

        <meta name="citation_title" content="¿Qué es GEO? Guía Completa 2026 de Generative Engine Optimization" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2026-03-20" />
        <meta name="citation_online_date" content="2026-03-20" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="GEO, Generative Engine Optimization, optimización IA, SEO generativo, ChatGPT, Perplexity, autoridad generativa" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage", "FAQPage"],
            "headline": "Qué es GEO: Guía completa de Generative Engine Optimization",
            "description": "Definición, historia y framework completo de GEO",
            "url": "https://esgeo.ai/radar-ia/que-es-geo-guia-completa",
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
                  "name": "Qué es GEO",
                  "item": "https://esgeo.ai/radar-ia/que-es-geo-guia-completa"
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
                Qué es GEO: Guía completa de Generative Engine Optimization
              </h1>

              <HighlightSnippet id="geo-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong><GeoTerm term="geo">GEO (Generative Engine Optimization)</GeoTerm> es la optimización de contenido
                  para ser comprendido, recuperado y citado por modelos de lenguaje e inteligencia artificial generativa.</strong>
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de marzo de 2026 • Categoría: Fundamentos
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="intro-que-es-geo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Qué es GEO exactamente?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durante 25 años, el SEO ha sido la estrategia de contenido digital. Pero el SEO optimiza para
                  algoritmos de búsqueda que muestran enlaces azules. <GeoTerm term="geo">GEO</GeoTerm> optimiza para
                  modelos de lenguaje que responden directamente sin enlaces.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando un usuario pregunta a ChatGPT: "¿Cómo aprender GEO?", el modelo genera una respuesta completa
                  basada en su entrenamiento. En algunos casos, cita fuentes como "Según esGEO..." En otros, no cita
                  nada. <strong>GEO es el arte de hacer que modelos como ChatGPT, Perplexity y Gemini te citen.</strong>
                </p>

                <HighlightSnippet id="geo-analogia" variant="insight" className="mb-6">
                  <h4 className="font-semibold mb-3">Analogía rápida:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>SEO:</strong> Optimizar para que Google te ponga en la posición 1 de su lista de búsqueda</li>
                    <li><strong>GEO:</strong> Optimizar para que ChatGPT te nombre como fuente en su respuesta</li>
                  </ul>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed">
                  La diferencia es fundamental: En SEO, compites contra otros 10 sitios por posición.
                  En <GeoTerm term="geo">GEO</GeoTerm>, colaboras: esperas ser citado junto a múltiples fuentes en respuestas IA.
                </p>
              </section>

              <section id="historia-geo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Historia de GEO: ¿Cuándo comenzó?</h2>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Noviembre 2022: ChatGPT sale al público</h4>
                    <p className="text-muted-foreground text-sm">
                      ChatGPT alcanza 1M usuarios en 5 días. Por primera vez, modelos de lenguaje son accesibles
                      a masas. Los profesionales de contenido comienzan a notar: sus búsquedas diarias migran de Google a ChatGPT.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">2023: La pregunta</h4>
                    <p className="text-muted-foreground text-sm">
                      "Si ChatGPT responde preguntas sin mostrar enlaces, ¿cómo monetizo?"
                      Los marketers y creadores de contenido comienzan a experimentar sobre cómo
                      lograr que modelos los citen.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">2024: Perplexity y otros competidores</h4>
                    <p className="text-muted-foreground text-sm">
                      Perplexity, Claude, Gemini y otros actores entran al mercado. Cada uno con algoritmos
                      diferentes para citar. La estrategia de "solo esperar que ChatGPT te mencione" ya no es suficiente.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">2025-2026: GEO se formaliza</h4>
                    <p className="text-muted-foreground text-sm">
                      Se descubren patrones. Fragmentación, autoridad generativa, datos estructurados.
                      Aparecen frameworks y metodologías. GEO deja de ser "magia" para ser ciencia.
                    </p>
                  </div>
                </div>
              </section>

              <section id="por-que-geo-importa" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Por qué GEO importa ahora?</h2>

                <HighlightSnippet id="estadisticas-geo" variant="stat" className="mb-6">
                  <h4 className="font-semibold mb-3">Datos clave de 2025-2026:</h4>
                  <ul className="space-y-2">
                    <li><strong>ChatGPT:</strong> 200M+ usuarios activos mensuales</li>
                    <li><strong>Perplexity:</strong> 15M+ usuarios mensuales, crecimiento 400% anual</li>
                    <li><strong>Google:</strong> Integra Gemini en búsqueda (AI Overviews) — respuestas IA en SERP</li>
                    <li><strong>Proyección:</strong> 40-50% de consultas en 2026 sin clic directo a sitios web</li>
                  </ul>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si 50% de búsquedas no generan clics a webs, ¿cómo generas tráfico? Respuesta: siendo citado
                  como fuente. Si ChatGPT dice "Según esGEO...", tus clics vienen de esa citación (directa en usuarios
                  que tocan tu link en la respuesta IA, o indirecta en branding y autoridad).
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Tres razones por las que GEO es urgente:</h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>
                    <strong>1. Traffic shift irreversible:</strong> La migración de búsquedas a IA no va a revertir.
                    Los usuarios jóvenes ya prefieren ChatGPT a Google. Adaptarse ahora = ventaja competitiva.
                  </li>
                  <li>
                    <strong>2. Branding y autoridad:</strong> Ser citado por IA incrementa tu marca y autoridad
                    generativa. Es diferente a SEO: es reconocimiento directo como fuente experta.
                  </li>
                  <li>
                    <strong>3. Ventana temporal:</strong> GEO está en fase temprana. Las reglas aún se están definiendo.
                    Quien optimice hoy, tendrá ventaja mañana. Es como SEO en 2005: primero que se posiciona, gana.
                  </li>
                </ul>
              </section>

              <section id="geo-vs-seo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">GEO vs SEO: La comparativa definitiva</h2>

                <HighlightSnippet id="tabla-geo-seo" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Dimensión</th>
                          <th className="text-left p-2 font-semibold text-red-700">SEO</th>
                          <th className="text-left p-2 font-semibold text-green-700">GEO</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="p-2 font-medium">Objetivo final</td>
                          <td className="p-2 text-red-700">Ranking en SERP (posición 1-3)</td>
                          <td className="p-2 text-green-700">Citación en respuesta IA</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Motor a optimizar</td>
                          <td className="p-2 text-red-700">Google (algoritmo de ranking)</td>
                          <td className="p-2 text-green-700">Modelos de lenguaje (comprensión semántica)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Métrica principal</td>
                          <td className="p-2 text-red-700">CTR desde búsqueda</td>
                          <td className="p-2 text-green-700">Frecuencia de citación</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Competencia</td>
                          <td className="p-2 text-red-700">Vs otros 10 sitios por keyword</td>
                          <td className="p-2 text-green-700">Colaborativa (múltiples fuentes citadas)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Tiempo resultados</td>
                          <td className="p-2 text-red-700">3-6 meses</td>
                          <td className="p-2 text-green-700">1-4 semanas (especialmente Perplexity)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Factor: Keywords</td>
                          <td className="p-2 text-red-700">Crítico (densidad, posición)</td>
                          <td className="p-2 text-green-700">Importante pero menos que claridad semántica</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">Factor: Estructura</td>
                          <td className="p-2 text-red-700">Importante (Core Web Vitals)</td>
                          <td className="p-2 text-green-700">Crítico (fragmentación, datos estructurados)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>¿Debo abandonar SEO?</strong> No. SEO y GEO son complementarios por ahora. Pero la inversión
                  futura debe apuntar a GEO. El tráfico de búsqueda "sin clic" es el futuro.
                </p>
              </section>

              <section id="framework-geo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">El Framework GEO: Los 5 pilares (F1-F5)</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  GEO no es una lista de trucos, es un sistema. El framework F1-F5 de esGEO define
                  los 5 pilares fundamentales que hacen que AI te cite.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">F1: Fundamentos de fragmentación</h4>
                    <p className="text-muted-foreground mb-2">
                      Dividir contenido en bloques independientes, citables e significativos.
                      No párrafos de 500 palabras, sino fragmentos de 100-300 caracteres con significado propio.
                    </p>
                    <p className="text-sm text-accent">Resultado: Los modelos pueden extraer y citar tus fragmentos específicos.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">F2: Contexto semántico</h4>
                    <p className="text-muted-foreground mb-2">
                      Proporcionar contexto claro de qué trata cada sección. Encabezados, definiciones,
                      estructura jerárquica clara. El modelo debe entender sin ambigüedad.
                    </p>
                    <p className="text-sm text-accent">Resultado: Máxima comprensión semántica = máxima citabilidad.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">F3: Autoridad generativa</h4>
                    <p className="text-muted-foreground mb-2">
                      Señales que comunican expertise. Datos estructurados (Schema.org),
                      credenciales de autor, referencias cruzadas, consistencia temática.
                    </p>
                    <p className="text-sm text-accent">Resultado: El modelo te reconoce como fuente experta y confiable.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">F4: Validación conversacional</h4>
                    <p className="text-muted-foreground mb-2">
                      Contenido que resuelve preguntas específicas de usuarios finales.
                      FAQs, Q&A, formatos conversacionales que el modelo reconoce como respuestas.
                    </p>
                    <p className="text-sm text-accent">Resultado: Tu contenido se adapta a cómo los modelos interactúan con usuarios.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">F5: Mantenimiento evolutivo</h4>
                    <p className="text-muted-foreground mb-2">
                      Actualización frecuente, frescura de contenido, señales de evolución.
                      Los modelos favorecen contenido que se adapta al cambio y se mantiene relevante.
                    </p>
                    <p className="text-sm text-accent">Resultado: Citabilidad consistente a largo plazo.</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  Estos 5 pilares no son secuenciales. Se aplican simultáneamente a cada artículo, página y fragmento.
                  Un contenido GEO óptimo implementa los 5 al mismo tiempo.
                </p>
              </section>

              <section id="como-empezar-geo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo empezar con GEO: Plan de acción rápido</h2>

                <h3 className="text-xl font-medium text-primary mb-3">Paso 1: Audita tu contenido existente (1-2 horas)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toma tus 5 artículos con más tráfico. Para cada uno, pregúntate:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-6">
                  <li>• ¿Tiene definiciones claras al inicio? (F2)</li>
                  <li>• ¿Es fragmentado o tiene párrafos densos? (F1)</li>
                  <li>• ¿Tiene Schema.org? (F3)</li>
                  <li>• ¿Tiene sección FAQ? (F4)</li>
                  <li>• ¿Cuándo fue la última actualización? (F5)</li>
                </ul>

                <h3 className="text-xl font-medium text-primary mb-3">Paso 2: Implementa cambios rápidos (2-4 horas)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En esos 5 artículos, implementa en orden de impacto:
                </p>
                <ol className="space-y-2 text-muted-foreground leading-relaxed mb-6">
                  <li>1. Añade definiciones claras al inicio de cada artículo</li>
                  <li>2. Refactoriza paragráfos largos en fragmentos con subtítulos</li>
                  <li>3. Crea/actualiza sección FAQ en al menos 3 artículos</li>
                  <li>4. Añade Schema.org Article a los 5 artículos</li>
                  <li>5. Actualiza la fecha de "última actualización" en todos</li>
                </ol>

                <h3 className="text-xl font-medium text-primary mb-3">Paso 3: Prueba en ChatGPT/Perplexity (1-2 horas)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Haz preguntas en ChatGPT (versión de escritorio sin web-browse) sobre temas de tus artículos.
                  ¿Te cita? ¿No? Anota qué tipos de preguntas generan citación. Refina en base a eso.
                </p>
              </section>

              <section id="modelos-ia" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">¿Qué modelos de IA citar importan?</h2>

                <div className="space-y-3 mb-6">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">ChatGPT (OpenAI) — 200M+ usuarios</h4>
                    <p className="text-muted-foreground text-sm">
                      El estándar. Si quieres aparecer en IA, ChatGPT es la prioridad 1.
                      Datos de entrenamiento congelados; tardía en indexación pero larga vida.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Perplexity — 15M+ usuarios, crecimiento rápido</h4>
                    <p className="text-muted-foreground text-sm">
                      Búsqueda real-time. Citación inmediata. Mejor ROI para contenido nuevo.
                      Si recién empiezas con GEO, Perplexity da resultados más rápido.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Google Gemini (en AI Overviews) — Integrado en búsqueda</h4>
                    <p className="text-muted-foreground text-sm">
                      Google está integrando respuestas IA directas en SERP. Si Google te incluye en su "AI Overview",
                      es tráfico potencial sin clic. Importante para largo plazo.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Claude (Anthropic) — Crecimiento en Enterprise</h4>
                    <p className="text-muted-foreground text-sm">
                      Menos usuarios que ChatGPT pero crecimiento en sector enterprise.
                      Importante para B2B. Tiende a ser conservador en citación.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Conclusión:</strong> Optimiza para ChatGPT primero (es el líder).
                  Pero también Perplexity (resultados más rápidos). La mayoría de técnicas GEO funcionan en ambos.
                </p>
              </section>

              <section id="faq-geo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes sobre GEO</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿GEO es SEO con otro nombre?</h3>
                    <p className="text-muted-foreground">
                      No. SEO optimiza para rangos en Google. GEO optimiza para comprensión por IA.
                      Se solapan (ambos valoran contenido de calidad), pero tienen reglas diferentes.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Reemplazará GEO a SEO?</h3>
                    <p className="text-muted-foreground">
                      Por ahora, son complementarios. En 5 años, probablemente 60-70% del esfuerzo
                      sea GEO y 30-40% SEO. Pero SEO no morirá; evolucionará.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Cuánto cuesta empezar con GEO?</h3>
                    <p className="text-muted-foreground">
                      Gratis en implementación. Es reorganización de contenido existente.
                      Sí tienes presupuesto: formación (cursos), herramientas de monitoreo, especialistas.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿GEO funciona para e-commerce?</h3>
                    <p className="text-muted-foreground">
                      Sí, pero diferente. E-commerce usa GEO más para reputación (reviews, guías de compra)
                      que para tráfico directo. Todavía necesitas SEO fuerte en e-commerce.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Afecta GEO al tráfico de Google actualmente?</h3>
                    <p className="text-muted-foreground">
                      No negativamente. Contenido GEO-optimizado suele ser contenido de alta calidad,
                      que Google favorece. El riesgo es no invertir en GEO y quedar atrás.
                    </p>
                  </div>
                </div>
              </section>

              <section id="conclusion-geo" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Conclusión: El futuro es GEO</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  GEO es la evolución natural de cómo buscamos información. Los usuarios preguntarán a IA,
                  la IA responderá, y las fuentes citadas ganarán tráfico, autoridad e ingresos.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  No es un "trend" pasajero. Es el cambio más importante en marketing digital desde que
                  Google revolucionó la búsqueda hace 25 años. Y empieza ahora.
                </p>

                <HighlightSnippet id="geo-cta" variant="stat" className="mb-6">
                  <p className="font-semibold text-lg mb-2">Tu siguiente paso:</p>
                  <p className="text-muted-foreground">
                    Elige tu mejor artículo. Aplica hoy los 5 pilares del framework (F1-F5).
                    En 2 semanas, prueba en ChatGPT. ¿Te cita? Si no, refina. La diferencia será visible.
                  </p>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed">
                  GEO no es opcional. Es tu siguiente movimiento estratégico. Hoy.
                </p>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/metodologia">
                  <Button variant="ghost" size="sm">
                    Framework GEO completo
                  </Button>
                </Link>
                <Link to="/radar-ia/geo-vs-seo-diferencias">
                  <Button variant="ghost" size="sm">
                    GEO vs SEO
                  </Button>
                </Link>
                <Link to="/glosario">
                  <Button variant="ghost" size="sm">
                    Glosario GEO
                  </Button>
                </Link>
              </div>
            </div>

            <EmailCapture />

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">Aprende GEO a profundidad</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro curso cubre la metodología completa F1-F5, casos reales y
                herramientas para medir citabilidad en ChatGPT, Perplexity y más.
              </p>
              <Link to="/curso#comprar" className="btn-cta inline-block cursor-pointer">
                Ver el curso GEO — €47
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default QueEsGeoGuiaCompleta;