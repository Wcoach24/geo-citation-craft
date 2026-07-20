import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";
import InlineEmailCapture from "@/components/InlineEmailCapture";

const ChecklistGeo25Puntos = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Checklist GEO de 25 puntos para auditar tu web (2026) | esGEO",
    description:
      "Checklist accionable de 25 puntos para auditar tu web de cara a la IA, agrupada por las 5 dimensiones del framework HABLA. Con el porqué y cómo verificar cada punto.",
    canonicalUrl: "https://www.esgeo.ai/radar-ia/checklist-geo-25-puntos",
  });

  return (
    <>
      {socialHelmet}
      <Helmet>
        <title>Checklist GEO de 25 puntos para auditar tu web (2026) | esGEO</title>
        <meta
          name="description"
          content="Checklist accionable de 25 puntos para auditar tu web de cara a la IA, agrupada por las 5 dimensiones del framework HABLA. Con el porqué y cómo verificar cada punto."
        />
        <link rel="canonical" href="https://www.esgeo.ai/radar-ia/checklist-geo-25-puntos" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Article", "WebPage", "FAQPage"],
          "headline": "Checklist GEO de 25 puntos para auditar tu web (2026)",
          "description":
            "Checklist accionable de 25 puntos para auditar una web de cara a la IA generativa, agrupada por las cinco dimensiones del framework HABLA: Higiene, Accesible, Bloques, Lenguaje y eXtras.",
          "url": "https://www.esgeo.ai/radar-ia/checklist-geo-25-puntos",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "publisher": { "@type": "Organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
          "image": "https://www.esgeo.ai/og-image.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.esgeo.ai/radar-ia/checklist-geo-25-puntos"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es el framework HABLA para auditar una web para IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "HABLA agrupa la auditoría GEO en cinco dimensiones: Higiene (robots.txt, sitemap, HTTPS, canonical, idioma), Accesible (que el HTML servido contenga el texto sin ejecutar JavaScript), Bloques (un solo h1, jerarquía de encabezados, HTML semántico, JSON-LD, alt, meta description), Lenguaje o citabilidad (primer bloque autosuficiente, fechado y con cifra) y eXtras (llms.txt, entidad Organization o Person, contacto legible y señales de citación). Son 25 puntos, cinco por dimensión."
              }
            },
            {
              "@type": "Question",
              "name": "¿Por qué importa que el HTML servido contenga el texto sin ejecutar JavaScript?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Muchos rastreadores de IA leen el HTML inicial y no siempre ejecutan JavaScript como lo hace un navegador. En una SPA sin renderizado en servidor, el contenido puede llegar vacío al bot. Para comprobarlo, mira el código fuente de la página (Ctrl+U) o descárgala con curl: si tu texto principal no aparece ahí, un modelo podría no verlo."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cómo verifico si mi robots.txt permite a los bots de IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Abre tu-dominio/robots.txt en el navegador y busca reglas para GPTBot, ClaudeBot y PerplexityBot. Comprueba que no haya un Disallow que bloquee de forma involuntaria las rutas que quieres que la IA lea, y que el archivo enlace tu sitemap.xml. Decidir qué bots permites es una decisión de negocio, pero conviene que sea deliberada y no accidental."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué debe responder el primer bloque de contenido de una página?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El primer bloque debe ser autosuficiente: responder qué es, para quién y cuánto o cuándo con una cifra o dato concreto, y estar fechado. Así, si un modelo cita solo ese fragmento, la respuesta sigue teniendo sentido sin el resto de la página. Verifícalo leyendo únicamente el primer párrafo: ¿se entiende solo?"
              }
            },
            {
              "@type": "Question",
              "name": "¿Necesito un archivo llms.txt para hacer GEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No es obligatorio, pero un llms.txt real (con enlaces a tus páginas clave, no un archivo vacío o de relleno) funciona como índice legible para modelos y como declaración de qué contenido consideras importante. Comprueba que exista en la raíz, que devuelva 200 y que sus enlaces apunten a URLs vivas."
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
                "name": "Checklist GEO de 25 puntos",
                "item": "https://www.esgeo.ai/radar-ia/checklist-geo-25-puntos"
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": "#definicion, #como-usar, #higiene"
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
                Checklist GEO de 25 puntos para auditar tu web (2026)
              </h1>

              <HighlightSnippet lastModified="2026-07-20" id="definicion" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Esta es una checklist de 25 puntos para auditar si tu web está lista para la IA
                  generativa</strong>, agrupada en las cinco dimensiones del framework{" "}
                  <strong>HABLA</strong>: Higiene, Accesible, Bloques, Lenguaje y eXtras &mdash; cinco puntos
                  por dimensión. Cada punto incluye por qué importa y cómo verificarlo tú mismo. Pensada como
                  pieza de referencia para recorrer de arriba abajo antes de publicar o rediseñar.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 20 de julio de 2026 • Categoría: Técnico
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="como-usar" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo usar esta checklist</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El objetivo de <GeoTerm term="geo">GEO</GeoTerm> no es posicionar un enlace, sino conseguir
                  que ChatGPT, Perplexity, Claude, Gemini y los{" "}
                  <GeoTerm term="ai-overviews">AI Overviews</GeoTerm> puedan leer tu contenido, entenderlo y
                  citarte como fuente. Para eso hacen falta tres cosas encadenadas: que los bots puedan
                  <em> entrar</em>, que puedan <em>leer</em> el texto y que ese texto sea <em>citable</em>.
                  Las cinco dimensiones de HABLA recorren esa cadena en orden.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Recorre las cinco secciones de arriba abajo y marca cada punto como cumplido o pendiente.
                  Si un punto de Higiene o Accesibilidad falla, arréglalo antes de tocar los demás: de nada
                  sirve un contenido excelente si el bot no puede entrar o no ve el texto. Cada punto lleva
                  una comprobación manual concreta para que no dependas de creerlo, sino de verlo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si prefieres un primer diagnóstico automático, en esgeo.ai tienes un auditor gratuito en{" "}
                  <Link to="/geo-score" className="text-accent underline">/geo-score</Link> que comprueba
                  varios de estos puntos por ti (accesibilidad del HTML, encabezados, schema, robots y algo
                  más) y te da un punto de partida. No sustituye a la revisión manual, pero ahorra tiempo.
                </p>
              </section>

              <section id="higiene" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">H — Higiene técnica</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los cimientos. Si un bot no puede rastrear tu web o encuentra señales contradictorias, todo
                  lo demás da igual. Estos cinco puntos aseguran que la puerta esté abierta y bien señalizada.
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
                  <li>
                    <strong><GeoTerm term="robots-txt">robots.txt</GeoTerm> con reglas explícitas para los
                    bots de IA.</strong> Por qué importa: <GeoTerm term="gptbot">GPTBot</GeoTerm>,{" "}
                    <GeoTerm term="claudebot">ClaudeBot</GeoTerm> y PerplexityBot deciden si rastrean según
                    lo que diga este archivo; un bloqueo accidental te deja fuera de las respuestas. Cómo
                    verificar: abre <code>tu-dominio/robots.txt</code> y confirma que las reglas para esos
                    user-agents son las que quieres (permitir o bloquear, pero a propósito).
                  </li>
                  <li>
                    <strong>sitemap.xml presente y enlazado.</strong> Por qué importa: es el índice que
                    ayuda a los rastreadores a descubrir todas tus URLs, no solo las enlazadas desde el menú.
                    Cómo verificar: abre <code>tu-dominio/sitemap.xml</code>, comprueba que lista tus páginas
                    reales y que aparece referenciado con <code>Sitemap:</code> dentro del robots.txt.
                  </li>
                  <li>
                    <strong>HTTPS válido en todo el sitio.</strong> Por qué importa: es una señal básica de
                    confianza y muchos rastreadores penalizan o evitan contenido mixto o certificados rotos.
                    Cómo verificar: navega tu web y confirma el candado; revisa que no haya avisos de
                    contenido mixto en la consola del navegador (F12).
                  </li>
                  <li>
                    <strong>Etiqueta canonical correcta en cada página.</strong> Por qué importa: el{" "}
                    <GeoTerm term="datos-estructurados">canonical</GeoTerm> le dice al bot cuál es la URL
                    oficial de un contenido y evita que el valor de citación se disperse entre duplicados.
                    Cómo verificar: en el código fuente busca{" "}
                    <code>&lt;link rel="canonical"&gt;</code> y comprueba que apunta a la URL real y absoluta
                    de esa misma página, no a la home ni a otra.
                  </li>
                  <li>
                    <strong>Idioma declarado con el atributo lang.</strong> Por qué importa: ayuda a los
                    modelos a saber en qué idioma servirte y a asociarte con consultas en español. Cómo
                    verificar: en el código fuente, la etiqueta de apertura debe ser{" "}
                    <code>&lt;html lang="es"&gt;</code> (o el idioma que corresponda), no vacía.
                  </li>
                </ol>
              </section>

              <section id="accesible" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">A — Accesible para el bot</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Que el bot entre no significa que <em>lea</em>. Muchos rastreadores procesan el HTML inicial
                  y no ejecutan JavaScript como un navegador. Estos puntos comprueban que tu texto llegue de
                  verdad, sobre todo si usas una SPA.
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed" start={6}>
                  <li>
                    <strong>El HTML servido contiene el texto principal.</strong> Por qué importa: si el
                    contenido solo aparece tras ejecutar JS, un bot que lee el HTML inicial puede recibir una
                    página casi vacía. Cómo verificar: pulsa Ctrl+U (ver código fuente) o descarga la página
                    con <code>curl</code>; busca un párrafo de tu texto. Si no está, el bot tampoco lo ve.
                  </li>
                  <li>
                    <strong>Cuidado con las SPAs sin{" "}
                    <GeoTerm term="ssr-prerender">SSR o prerender</GeoTerm>.</strong> Por qué importa: React,
                    Vue o Angular sin renderizado en servidor entregan un HTML mínimo y montan el contenido en
                    el cliente. Cómo verificar: si el código fuente es solo un <code>&lt;div id="root"&gt;</code>{" "}
                    vacío, necesitas SSR, renderizado estático o prerender para los bots.
                  </li>
                  <li>
                    <strong>El contenido no depende de clics o scroll para cargar.</strong> Por qué importa:
                    texto oculto tras acordeones que se cargan por JS, pestañas o scroll infinito puede no
                    llegar al rastreador. Cómo verificar: comprueba que el texto importante está en el HTML
                    inicial, no inyectado solo tras interacción del usuario.
                  </li>
                  <li>
                    <strong>Sin bloqueos por muros de cookies o interstitials.</strong> Por qué importa: un
                    muro que tapa el contenido hasta aceptar puede impedir que el bot llegue al texto. Cómo
                    verificar: revisa que el contenido exista en el HTML aunque el overlay lo cubra
                    visualmente, y que no se cargue solo tras el consentimiento.
                  </li>
                  <li>
                    <strong>Recursos clave no bloqueados en robots.txt.</strong> Por qué importa: bloquear
                    CSS o JS necesarios para renderizar puede dar al bot una imagen incompleta de la página.
                    Cómo verificar: repasa el robots.txt y asegúrate de que no hay <code>Disallow</code> sobre
                    carpetas de assets imprescindibles para entender el contenido.
                  </li>
                </ol>
              </section>

              <section id="bloques" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">B — Bloques y estructura</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El bot ya lee tu texto; ahora tiene que <em>entender su estructura</em>. Encabezados
                  ordenados, HTML semántico y datos estructurados le permiten identificar de qué trata cada
                  parte y extraer el fragmento adecuado.
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed" start={11}>
                  <li>
                    <strong>Un solo h1 por página.</strong> Por qué importa: el h1 declara el tema principal;
                    varios h1 confunden esa señal. Cómo verificar: en la consola del navegador ejecuta{" "}
                    <code>document.querySelectorAll('h1').length</code> y comprueba que devuelve 1.
                  </li>
                  <li>
                    <strong>Jerarquía de encabezados sin saltos.</strong> Por qué importa: pasar de h2 a h4
                    sin h3 rompe el esquema del documento que el modelo usa para mapear secciones. Cómo
                    verificar: recorre los encabezados en orden y confirma que descienden de nivel sin huecos.
                  </li>
                  <li>
                    <strong>HTML semántico: main, article, section.</strong> Por qué importa: estas etiquetas
                    delimitan el contenido principal frente a menús y pies, y ayudan a aislar lo citable. Cómo
                    verificar: revisa que el cuerpo use <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>{" "}
                    y <code>&lt;section&gt;</code> en lugar de <code>&lt;div&gt;</code> genéricos para todo.
                  </li>
                  <li>
                    <strong>JSON-LD válido con un <GeoTerm term="datos-estructurados">@type</GeoTerm> acorde
                    al contenido.</strong> Por qué importa: los datos estructurados describen tu página en un
                    lenguaje que los modelos interpretan sin ambigüedad (Article, FAQPage, HowTo, Product...).
                    Cómo verificar: pega la URL en el validador de schema.org o de Google y confirma que no
                    da errores y que el <code>@type</code> encaja con lo que realmente publicas.
                  </li>
                  <li>
                    <strong>Imágenes con atributo alt descriptivo y meta description presente.</strong> Por
                    qué importa: el alt aporta el contenido de las imágenes en texto y la meta description es
                    el resumen que muchos sistemas usan como referencia. Cómo verificar: revisa que las
                    imágenes de contenido tengan <code>alt</code> con sentido y que exista una sola{" "}
                    <code>&lt;meta name="description"&gt;</code> por página.
                  </li>
                </ol>
              </section>

              <section id="lenguaje" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">L — Lenguaje y citabilidad</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estructura correcta, pero ¿es el texto <em>citable</em>? Un modelo tiende a extraer
                  fragmentos que se sostienen solos. Estos puntos trabajan la{" "}
                  <GeoTerm term="answerability">respondibilidad</GeoTerm>: que cada bloque responda por sí
                  mismo.
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed" start={16}>
                  <li>
                    <strong>El primer bloque responde qué, para quién y cuánto.</strong> Por qué importa: es
                    el fragmento con más probabilidad de ser citado; si define el tema, el público y un dato
                    concreto, la cita funciona sola. Cómo verificar: lee solo el primer párrafo, ¿se entiende
                    sin el resto?
                  </li>
                  <li>
                    <strong>Ese primer bloque incluye una cifra o dato concreto.</strong> Por qué importa: un
                    número verificable (un plazo, una cantidad, un porcentaje real medido por ti) hace el
                    fragmento más específico y útil. Cómo verificar: comprueba que la entradilla contiene al
                    menos un dato concreto y comprobable, no solo generalidades.
                  </li>
                  <li>
                    <strong>Contenido fechado y con fecha de actualización real.</strong> Por qué importa: la
                    frescura influye en qué fuentes se consideran vigentes; una fecha falsa que cambia en cada
                    build es un antipatrón. Cómo verificar: revisa que la fecha visible y la de los datos
                    estructurados reflejen la última modificación real del contenido.
                  </li>
                  <li>
                    <strong>Fragmentos autosuficientes a lo largo de la página.</strong> Por qué importa: no
                    solo el primero; cualquier sección debería entenderse sin depender de un "como decíamos
                    antes". Cómo verificar: lee dos o tres párrafos sueltos al azar, ¿tienen sentido fuera de
                    contexto?
                  </li>
                  <li>
                    <strong>Buena densidad de contenido frente a markup.</strong> Por qué importa: una página
                    con mucho HTML de plantilla y poco texto real ofrece poco que citar. Cómo verificar:
                    valora si la mayor parte de la página es contenido útil y no una capa fina de texto sobre
                    mucho envoltorio.
                  </li>
                </ol>
              </section>

              <section id="extras" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">X — eXtras que suman autoridad</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Con los cuatro pilares cubiertos, estos extras refuerzan tu identidad y tu autoridad como
                  fuente. No son imprescindibles para empezar, pero marcan la diferencia entre una web
                  legible y una web que la IA reconoce y cita.
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed" start={21}>
                  <li>
                    <strong>Un <GeoTerm term="llms-txt">llms.txt</GeoTerm> real, con enlaces.</strong> Por
                    qué importa: funciona como índice legible de tu contenido clave para modelos; uno vacío o
                    de relleno no aporta nada. Cómo verificar: abre <code>tu-dominio/llms.txt</code>,
                    comprueba que devuelve 200 y que sus enlaces apuntan a URLs vivas y relevantes.
                  </li>
                  <li>
                    <strong>Entidad Organization o Person en JSON-LD.</strong> Por qué importa: declarar
                    quién está detrás (marca o autor) ayuda a los modelos a construir tu identidad como
                    fuente. Cómo verificar: revisa que tu schema incluya un bloque{" "}
                    <code>Organization</code> o <code>Person</code> con nombre y URL consistentes.
                  </li>
                  <li>
                    <strong>Vía de contacto legible en el HTML.</strong> Por qué importa: un contacto en
                    texto (no solo en una imagen o tras un formulario JS) refuerza que hay una entidad real y
                    responsable. Cómo verificar: comprueba que exista una página o bloque de contacto con
                    datos en texto plano rastreable.
                  </li>
                  <li>
                    <strong>Señales de citación y autoría.</strong> Por qué importa: firmar los artículos,
                    enlazar fuentes y mantener coherencia de marca genera las señales de confianza que un
                    modelo asocia a fuentes fiables. Cómo verificar: revisa que tus contenidos tengan autor
                    visible y referencias comprobables cuando afirmas datos.
                  </li>
                  <li>
                    <strong>Consistencia de entidad entre páginas y schema.</strong> Por qué importa: usar el
                    mismo nombre, la misma URL y los mismos identificadores en todo el sitio ayuda a que la IA
                    consolide tu marca como una única entidad. Cómo verificar: contrasta que el nombre y la
                    URL de tu organización coincidan en el footer, el schema y las páginas legales.
                  </li>
                </ol>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Por dónde empiezo si no puedo con los 25?</h3>
                    <p className="text-muted-foreground">
                      Por Higiene y Accesibilidad. Si el bot no entra o no ve tu texto, el resto no cuenta. En
                      concreto, comprueba primero el robots.txt y que el HTML servido contenga tu contenido
                      principal.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Puedo automatizar esta revisión?</h3>
                    <p className="text-muted-foreground">
                      Algunos puntos sí. El auditor gratuito de{" "}
                      <Link to="/geo-score" className="text-accent underline">/geo-score</Link> comprueba
                      automáticamente varios (accesibilidad del HTML, encabezados, schema, robots) y te da un
                      punto de partida. Los puntos de citabilidad requieren criterio humano.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg font-medium text-primary mb-2">¿Debo permitir a todos los bots de IA?</h3>
                    <p className="text-muted-foreground">
                      Es una decisión de negocio. Lo importante es que sea deliberada: revisa tu robots.txt y
                      decide a conciencia si permites o bloqueas GPTBot, ClaudeBot y PerplexityBot, en lugar
                      de dejarlo al azar de una plantilla.
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/radar-ia/que-es-geo-guia-completa">
                  <Button variant="ghost" size="sm">Qué es GEO: guía completa</Button>
                </Link>
                <Link to="/geo-score">
                  <Button variant="ghost" size="sm">Auditor gratuito GEO Score</Button>
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
              source="article_checklist-25"
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

export default ChecklistGeo25Puntos;
