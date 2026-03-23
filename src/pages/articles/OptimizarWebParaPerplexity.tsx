import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const OptimizarWebParaPerplexity = () => {
  return (
    <>
      <Helmet>
        <title>Cómo optimizar tu web para Perplexity | Guía GEO | esGEO</title>
        <meta name="description" content="Estrategia completa para aparecer en respuestas de Perplexity AI. Descubre cómo Perplexity cita diferente a ChatGPT y optimiza para máxima visibilidad." />
        <link rel="canonical" href="https://esgeo.ai/radar-ia/optimizar-web-para-perplexity" />

        <meta name="citation_title" content="Cómo optimizar tu web para Perplexity" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2026-03-20" />
        <meta name="citation_online_date" content="2026-03-20" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="Perplexity, GEO, optimización, SEO IA, modelos generativos, citación" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage"],
            "headline": "Cómo optimizar tu web para Perplexity",
            "description": "Estrategia completa para aparecer en respuestas de Perplexity AI",
            "url": "https://esgeo.ai/radar-ia/optimizar-web-para-perplexity",
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
                  "name": "Optimizar para Perplexity",
                  "item": "https://esgeo.ai/radar-ia/optimizar-web-para-perplexity"
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
                Cómo optimizar tu web para Perplexity
              </h1>

              <HighlightSnippet id="perplexity-optimization-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  Perplexity cita fuentes en tiempo real y prioriza frescura. A diferencia de ChatGPT,
                  Perplexity busca web constantemente y elige fuentes que responden preguntas con precisión.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de marzo de 2026 • Categoría: Optimización IA
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción: ¿Por qué Perplexity es diferente?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity es un motor de IA que busca internet en tiempo real para cada pregunta.
                  Mientras que ChatGPT usa datos históricos de entrenamiento, Perplexity consulta fuentes actuales,
                  como un Google mejorado con inteligencia artificial.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esto significa que <strong>tus posibilidades de aparecer en Perplexity son inmediatas</strong>.
                  No esperas meses. Si tu contenido responde una pregunta con claridad, Perplexity puede citarte
                  en su próxima búsqueda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pero las reglas para aparecer en Perplexity son diferentes a ChatGPT. Esta guía te enseña exactamente cuáles son.
                </p>
              </section>

              <section id="perplexity-vs-chatgpt" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Perplexity vs ChatGPT: Las diferencias críticas</h2>

                <HighlightSnippet id="comparativa-perplexity" variant="insight" className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Aspecto</th>
                          <th className="text-left p-2 font-semibold text-blue-700">ChatGPT</th>
                          <th className="text-left p-2 font-semibold text-purple-700">Perplexity</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="p-2 font-medium">Indexación</td>
                          <td className="p-2 text-blue-700">Datos de entrenamiento (congelados)</td>
                          <td className="p-2 text-purple-700">Búsqueda real-time del internet</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Velocidad de aparición</td>
                          <td className="p-2 text-blue-700">1-3 meses</td>
                          <td className="p-2 text-purple-700">1-2 semanas</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Citación</td>
                          <td className="p-2 text-blue-700">Selectiva, basada en autoridad histórica</td>
                          <td className="p-2 text-purple-700">Agresiva, basada en relevancia actual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Factor: Recency</td>
                          <td className="p-2 text-blue-700">Bajo impacto</td>
                          <td className="p-2 text-purple-700">Crítico (favorece contenido nuevo/actualizado)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Alcance</td>
                          <td className="p-2 text-blue-700">100M+ usuarios (pero limitada por entrenamiento)</td>
                          <td className="p-2 text-purple-700">Crecimiento rápido (búsqueda abierta a todo)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed">
                  La consecuencia: En Perplexity, <strong>contenido nuevo y actualizado tiene ventaja</strong>.
                  Un post de hace una semana sobre noticias actuales superará a uno de hace 6 meses, aunque ambos
                  sean de fuentes autorizadas.
                </p>
              </section>

              <section id="tecnica-1-indexabilidad" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 1: Maximiza tu indexabilidad para Perplexity</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity usa web crawlers similares a Google, pero con diferentes prioridades.
                  Para que Perplexity encuentre tu contenido, necesitas:
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">1. Robots.txt compatible</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity respeta robots.txt. Si has bloqueado Googlebot, probablemente también bloquees a Perplexity.
                  Abre tu acceso:
                </p>

                <div className="bg-card rounded p-4 text-xs overflow-x-auto mb-6 border border-accent/20">
                  <pre className="text-muted-foreground">{`User-agent: *
Allow: /
Disallow: /admin/
# Asegúrate de que Perplexity crawler (y Google) NO están bloqueados
`}</pre>
                </div>

                <h3 className="text-xl font-medium text-primary mb-3">2. Sitemap actualizado</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tu sitemap.xml debe incluir URLs nuevas en menos de 1 semana. Perplexity lo revisa regularmente.
                  Si tu sitemap tiene contenido de 6 meses atrás sin "lastmod" actualizado, Perplexity asume que
                  tu sitio es lento para indexar.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">3. Velocidad de carga</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perplexity favorece sitios rápidos. Si tu web tarda 5 segundos en cargar, Perplexity puede
                  indexarte pero deprioritiza. Mantén carga por debajo de 2 segundos para máxima prioridad.
                </p>
              </section>

              <section id="tecnica-2-recency" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 2: Domina la variable "recency"</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity <strong>ama</strong> contenido fresco. Si una pregunta es sobre algo de 2024, Perplexity
                  priorizará respuestas actualizadas recientemente.
                </p>

                <HighlightSnippet id="recency-estrategia" variant="stat" className="mb-6">
                  <h4 className="font-semibold mb-3">Estrategia de recency para máxima aparición:</h4>
                  <ul className="space-y-2">
                    <li>• <strong>Artículos sobre trends/noticias:</strong> Publica en menos de 2 horas de que sea relevante</li>
                    <li>• <strong>Artículos técnicos:</strong> Actualiza "última revisión" cada 3 meses</li>
                    <li>• <strong>Meta description:</strong> Incluye la fecha: "Guía 2026 sobre..."</li>
                    <li>• <strong>Contenido evergreen:</strong> Añade sección "Últimas actualizaciones" arriba</li>
                  </ul>
                </HighlightSnippet>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ejemplo: Si creas un artículo "Las mejores herramientas GEO 2026", Perplexity lo citará
                  constantemente durante todo 2026. Pero cuando llegue 2027, si no lo actualizas, empieza a perder
                  visibilidad en Perplexity (aunque siga siendo visible en ChatGPT).
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Señales de recency que Perplexity detecta:</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-6">
                  <li>• <strong>dateModified en Schema.org:</strong> Actualizar esto regularmente impacta directamente</li>
                  <li>• <strong>Fecha visible en el artículo:</strong> "Actualizado el 19 de marzo de 2026"</li>
                  <li>• <strong>Contenido dinámico:</strong> Si tu página contiene datos que cambian (precios, stocks), Perplexity la indexa más frecuentemente</li>
                  <li>• <strong>Enlaces recientes internos:</strong> Citar artículos propios nuevos señala frescura</li>
                </ul>
              </section>

              <section id="tecnica-3-fragmentacion-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 3: Fragmentación para búsqueda directa</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity busca fragmentos específicos más que páginas completas. Si tu página tiene una
                  respuesta clara a una pregunta específica, Perplexity la extrae y cita como "fuente directa".
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Tipos de fragmentos que Perplexity prioriza:</h3>

                <div className="space-y-3 mb-6">
                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Listas numeradas</h4>
                    <p className="text-muted-foreground text-sm">
                      "Los 5 pasos de GEO: 1) Fragmentación... 2) Autoridad..."
                      Perplexity extrae listas y las reformatea en su respuesta.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Tablas comparativas</h4>
                    <p className="text-muted-foreground text-sm">
                      Perplexity entiende tablas mejor que párrafos densos. Una tabla "GEO vs SEO"
                      es más probable de ser citada que un párrafo explicativo.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Datos estructurados (números, estadísticas)</h4>
                    <p className="text-muted-foreground text-sm">
                      "Perplexity alcanzó 1M usuarios en 2023" es más citable que "Perplexity creció significativamente".
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Q&A formateado</h4>
                    <p className="text-muted-foreground text-sm">
                      FAQs están diseñadas para ser extraídas por Perplexity. Cada Q&A es un fragmento.
                    </p>
                  </div>
                </div>
              </section>

              <section id="tecnica-4-authority-generativa" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 4: Construye autoridad generativa para Perplexity</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aunque Perplexity prioriza recency, aún respeta la autoridad. Un sitio con bajo autoridad
                  será citado menos incluso si tienes contenido fresco.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Señales de autoridad que Perplexity valora:</h3>

                <ul className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                  <li>
                    <strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness):</strong>
                    Perplexity usa estas categorías de Google. Exhibe tus credenciales. "Escrito por [nombre]
                    con 15 años en GEO" es mejor que sin autor.
                  </li>
                  <li>
                    <strong>Consistencia temática:</strong>
                    Si tu sitio es caos (lunes hablo de GEO, martes de cocina, miércoles de física),
                    pierdes autoridad generativa. Especialización = confianza.
                  </li>
                  <li>
                    <strong>Referencias y citas:</strong>
                    Sitios que citan estudios, investigaciones y otras fuentes tienen mayor autoridad.
                    Perplexity lo detecta y favorece.
                  </li>
                  <li>
                    <strong>Datos estructurados consistentes:</strong>
                    Si usas Schema.org en el 100% de artículos vs 10%, Perplexity nota la diferencia.
                  </li>
                </ul>
              </section>

              <section id="tecnica-5-perplexity-specific" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Técnica 5: Optimización específica para el algoritmo de Perplexity</h2>

                <h3 className="text-xl font-medium text-primary mb-3">Headlines que Perplexity prioriza</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity escanea títulos primero. Si tu H1 contiene la palabra clave exacta de la búsqueda,
                  tienes ventaja.
                </p>

                <div className="bg-card rounded p-4 text-sm border border-accent/20 mb-6">
                  <p className="font-semibold mb-2">Malo:</p>
                  <p className="text-muted-foreground mb-4">"La revolución de la optimización moderna"</p>
                  <p className="font-semibold mb-2">Bien (para palabra clave "qué es GEO"):</p>
                  <p className="text-muted-foreground">"Qué es GEO: Definición, diferencias con SEO y framework completo"</p>
                </div>

                <h3 className="text-xl font-medium text-primary mb-3">Estructura de contenido citable</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity favorece artículos con:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed mb-6">
                  <li>• Párrafo introductorio que responde la pregunta en 2-3 frases</li>
                  <li>• Subtítulos claros (H2, H3) que dividen la respuesta</li>
                  <li>• Snippets (fragmentos de máx 300 caracteres) que responden parcialmente</li>
                  <li>• URL descriptiva: /como-hacer-que-chatgpt-cite-tu-web mejor que /articulo-123</li>
                </ul>

                <h3 className="text-xl font-medium text-primary mb-3">Meta description optimizada</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity usa meta description para decidir si tu contenido responde la pregunta.
                  Una meta bien hecha aumenta clickthrough desde Perplexity.
                </p>

                <div className="bg-card rounded p-4 text-sm border border-accent/20">
                  <p className="font-semibold mb-2">Fórmula:</p>
                  <p className="text-muted-foreground">"[Palabra clave] + definición corta + beneficio. Aprende [X técnica/dato específico]."</p>
                  <p className="text-muted-foreground mt-2 italic">
                    Ejemplo: "GEO es optimización para modelos de IA. Descubre las 5 técnicas para ser citado por ChatGPT y Perplexity en 2026."
                  </p>
                </div>
              </section>

              <section id="plan-accion-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Plan de acción: Domina Perplexity en 4 semanas</h2>

                <div className="space-y-4">
                  <div className="border-l-4 border-purple-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Semana 1: Auditoría y preparación</h4>
                    <p className="text-muted-foreground text-sm">
                      Revisa robots.txt, sitemap.xml y velocidad de carga. Asegúrate que Perplexity pueda acceder.
                      Actualiza dateModified en 5 artículos clave.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Semana 2: Optimiza para recency</h4>
                    <p className="text-muted-foreground text-sm">
                      Crea 2 artículos nuevos sobre trends actuales de tu industria. Asegúrate de que incluyan
                      fecha de publicación visible y Schema.org con datePublished correcto.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Semana 3: Fragmentación y estructura</h4>
                    <p className="text-muted-foreground text-sm">
                      Toma tus 3 artículos más importantes. Refactoriza con listas, tablas y fragmentos citables.
                      Optimiza H1 y meta descriptions.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-700 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-1">Semana 4: Prueba y medición</h4>
                    <p className="text-muted-foreground text-sm">
                      Busca en Perplexity preguntas de tu nicho. ¿Apareces? ¿Eres citado? Toma notas
                      de qué contenido es citado. Ese es tu patrón de éxito.
                    </p>
                  </div>
                </div>
              </section>

              <section id="medicion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo medir tu aparición en Perplexity</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  A diferencia de Google (donde ves posiciones en Search Console), Perplexity no tiene
                  herramientas públicas de medición. Pero puedes medir manualmente:
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Método 1: Búsqueda manual</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ve a Perplexity.ai y busca tus palabras clave. ¿Aparece tu sitio? Anota frecuencia.
                  Hazlo 2 veces por semana para detectar tendencias.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Método 2: Google Analytics 4</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity envía referrer "perplexity.com" en algunos casos. Filtra por referrer en GA4 para ver tráfico.
                  No todo tráfico será atribuible (algunos usos no envían referrer), pero es un proxy útil.
                </p>

                <h3 className="text-xl font-medium text-primary mb-3">Método 3: Menciones y clics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Algunos usuarios harán clic en tu link desde Perplexity. Un aumento inexplicable de tráfico
                  puede indicar apariciones en Perplexity que no ves en Analytics.
                </p>
              </section>

              <section id="errores-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Errores que te impiden aparecer en Perplexity</h2>

                <div className="space-y-3">
                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Bloquear a Perplexity en robots.txt</p>
                    <p className="text-sm text-muted-foreground">
                      Si has configurado "Disallow: /" para todos los bots, Perplexity no puede indexarte.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Nunca actualizar contenido</p>
                    <p className="text-sm text-muted-foreground">
                      Un artículo de 2023 sin cambios pierde visibilidad en Perplexity rápidamente.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Pedir a Perplexity no indexar</p>
                    <p className="text-sm text-muted-foreground">
                      Algunos sitios usan "User-agent: CCBot" para bloquear a Perplexity. Si lo haces, no aparecerás.
                    </p>
                  </div>

                  <div className="border border-destructive/20 bg-destructive/5 rounded p-4">
                    <p className="font-semibold text-destructive mb-1">❌ Contenido detrás de paywall sin preview</p>
                    <p className="text-muted-foreground">
                      Perplexity no cita contenido que no puede leer. Si tu artículo está completamente bloqueado, no aparecerá.
                    </p>
                  </div>
                </div>
              </section>

              <section id="faq-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes sobre Perplexity GEO</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Perplexity y ChatGPT compiten o son diferentes?</h3>
                    <p className="text-muted-foreground">
                      Son canales diferentes. Perplexity es búsqueda + IA. ChatGPT es conversación.
                      Optimizar para ambos tiene estrategias complementarias, no conflictivas.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Cuándo empieza a aparecer mi sitio en Perplexity?</h3>
                    <p className="text-muted-foreground">
                      Si tu sitio es nuevo y publicas un artículo hoy, Perplexity puede indexarlo en 1-3 días.
                      Citación ocurre si es relevante para preguntas que hacen usuarios en Perplexity.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Perplexity es mejor para GEO que Google?</h3>
                    <p className="text-muted-foreground">
                      Perplexity es un canal complementario. No reemplaza a Google, pero es más fácil
                      aparecer en Perplexity porque indexa en tiempo real. Optimiza para ambos.
                    </p>
                  </div>
                </div>
              </section>

              <section id="conclusión-perplexity" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Conclusión</h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Perplexity es la oportunidad más inmediata para ser citado por IA. A diferencia de
                  ChatGPT que toma meses, Perplexity puede citarte en semanas si tu contenido es
                  fresco, fragmentado y autorizado.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  La diferencia está en <strong>recency, relevancia y claridad</strong>. Mantén tu contenido
                  actualizado, publique regularmente y fragmenta tus respuestas. Perplexity te encontrará.
                </p>

                <HighlightSnippet id="conclusión-perplexity-cta" variant="stat" className="mb-6">
                  <p className="font-semibold text-lg mb-2">Comienza hoy:</p>
                  <p className="text-muted-foreground">
                    Abre Perplexity.ai, busca tu palabra clave principal, y nota si apareces.
                    Si no, aplica la Técnica 2 (recency) a tus 3 artículos clave. En una semana,
                    vuelve a buscar. La diferencia será visible.
                  </p>
                </HighlightSnippet>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/como-hacer-que-chatgpt-cite-tu-web">
                  <Button variant="ghost" size="sm">
                    ChatGPT: Cómo ser citado
                  </Button>
                </Link>
                <Link to="/radar-ia/que-es-geo-guia-completa">
                  <Button variant="ghost" size="sm">
                    Qué es GEO - Guía completa
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
              <h3 className="text-xl font-bold mb-2">Domina GEO para todos los motores IA</h3>
              <p className="text-muted-foreground mb-4">
                El curso cubre optimización para ChatGPT, Perplexity, Gemini, Claude y más.
                Aprende la estrategia completa de GEO.
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

export default OptimizarWebParaPerplexity;