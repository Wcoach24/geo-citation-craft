import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import EmailCapture from "@/components/EmailCapture";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, CheckCircle2, AlertCircle, Mail, ArrowRight, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Landing /experto-geo
 *
 * Generado a partir del brief del Gap Hunter (10-jun-2026).
 * Cluster: experto geo, especialistas en posicionamiento geo, consultor geo, experto geo alicante.
 * 243 impr/mes combinadas, intent comercial puro, posiciones 24-72 sin landing dedicada.
 * Cierra el issue #11 (Sentinel intent-mismatch) que Google rankeaba en /acerca-de/equipo.
 *
 * Reglas v2.0 aplicadas:
 *  - Cero cifras inventadas. Rangos de precios marcados como "rango observado" no como verdad universal.
 *  - Sin "garantizado", "exponencial" ni promesas infalsificables.
 *  - CTA prioritario: email a fundador (sin Calendly ya que no está montado). Curso €47 como fallback.
 */

const ExpertoGeoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sevenSignals = [
    { signal: "Te enseña capturas reales de la marca citada por ChatGPT, Perplexity o Gemini, con prompt y fecha.", caveat: "Sin captura + prompt + fecha, es relato." },
    { signal: "Distingue entre RAG en runtime (Perplexity, Claude search) y modelos entrenados.", caveat: "Si te promete \"salir en GPT-5\" sin ese matiz, no sabe cómo aprenden los modelos." },
    { signal: "Tiene un método de medición propio (matriz modelo × prompt, dataset semanal de probes).", caveat: "Sin medición, no hay optimización." },
    { signal: "Te dice qué herramientas usa para tracking (Profound, Otterly, Peec AI, Semrush AI Toolkit).", caveat: "Si menciona Clarity AI o Hugging Face como trackers, no son eso." },
    { signal: "Reconoce que una citación IA no es un backlink y no transfiere link equity.", caveat: "Si promete \"autoridad de dominio en LLMs\", está vendiendo SEO con etiqueta nueva." },
    { signal: "Pone KPIs realistas y los presenta como tu línea base, no como leyes de industria.", caveat: "Cualquiera que prometa porcentajes exactos sin ver tu sitio, no los ha medido." },
    { signal: "Te entrega contenido + arquitectura + plan de mantenimiento, no solo \"contenido optimizado\".", caveat: "El mantenimiento es la mitad del trabajo." },
  ];

  const faqs = [
    {
      q: "¿Qué hace un experto GEO?",
      a: "Audita la web, diseña contenidos citables (answer-first, párrafos atómicos, datos verificables), estructura datos para LLMs y mide presencia en ChatGPT, Perplexity, Gemini y Google AI Overviews. Trabaja con métricas propias por dominio porque no existe un \"Search Console\" de los LLMs."
    },
    {
      q: "¿Cuánto cuesta contratar un consultor GEO en España en 2026?",
      a: "Rangos observados en el mercado español a fecha de 2026: freelance 800-2.500 €/mes, agencia 2.500-8.000 €/mes, in-house 45-70 k€/año. Son rangos de referencia, no tarifa oficial; pedir presupuesto con alcance específico para tu sitio."
    },
    {
      q: "¿Diferencia entre consultor SEO y experto GEO?",
      a: "El consultor SEO optimiza para ranking en buscadores y trabaja con clicks como métrica final. El experto GEO optimiza para ser citado en respuestas generativas y trabaja con menciones, posición en listas de fuentes citadas y share of citation por modelo. Hay solape técnico (HTML semántico, schema, sitemap), pero la métrica de éxito es distinta."
    },
    {
      q: "¿Hay alguna certificación oficial de experto GEO?",
      a: "No, en 2026 no existe certificación oficial reconocida por OpenAI, Anthropic, Google ni Perplexity. La prueba real es el portfolio de marcas citadas, con captura del modelo + prompt + fecha de cada aparición."
    },
    {
      q: "¿En cuánto tiempo se ven resultados de un trabajo GEO?",
      a: "Las primeras citaciones suelen aparecer en 4-8 semanas si la arquitectura base es correcta y el contenido tiene datos verificables. La consolidación (presencia recurrente cross-modelo) lleva 3-6 meses. Es un rango orientativo: depende del nicho, de la autoridad previa del dominio y del refresco de los índices RAG de cada motor."
    },
    {
      q: "¿Necesito un experto GEO si ya tengo un equipo SEO?",
      a: "Depende. Si tu equipo SEO ya entiende answer-first writing, JSON-LD y mide menciones cross-fuente, no. Si trabaja solo con ranking y backlinks, es probable que necesites complementar con alguien que conozca el método específico de medición de citaciones."
    },
    {
      q: "¿Hay expertos GEO en Alicante?",
      a: "esGEO opera desde España con clientes en Alicante, Madrid, Barcelona, Valencia y LATAM. El trabajo de GEO es remoto en su mayoría (auditoría técnica, redacción citable, tracking) — el código postal del consultor no afecta al resultado salvo para reuniones presenciales puntuales."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Experto GEO 2026: qué hace y cómo contratar a un especialista",
    "description": "Qué hace un experto GEO, en qué se diferencia de un consultor SEO, qué pedir en una propuesta, cuánto cobra y cómo evaluar a un consultor en posicionamiento para IA generativa en España y LATAM.",
    "author": { "@type": "Organization", "name": "esGEO", "@id": "https://www.esgeo.ai#organization" },
    "publisher": { "@type": "Organization", "name": "esGEO", "@id": "https://www.esgeo.ai#organization", "logo": { "@type": "ImageObject", "url": "https://www.esgeo.ai/og-image.png" } },
    "datePublished": "2026-06-17",
    "dateModified": "2026-06-17",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.esgeo.ai/experto-geo" }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "GEO Consulting",
    "name": "Consultoría experto GEO",
    "description": "Auditoría, contenido citable, arquitectura para LLMs y tracking de citaciones en ChatGPT, Perplexity, Claude y Gemini.",
    "provider": { "@type": "Organization", "@id": "https://www.esgeo.ai#organization", "name": "esGEO", "url": "https://www.esgeo.ai" },
    "areaServed": [
      { "@type": "Country", "name": "España" },
      { "@type": "Country", "name": "México" },
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Colombia" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR",
        "minPrice": 800,
        "maxPrice": 8000,
        "unitText": "MONTH"
      },
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Experto GEO 2026: qué hace y cómo contratar | esGEO</title>
        <meta name="description" content="Qué hace un experto GEO, en qué se diferencia del SEO, cuánto cobra en España 2026 y 7 señales para distinguir un consultor real. Sin promesas infalsificables." />
        <link rel="canonical" href="https://www.esgeo.ai/experto-geo" />

        <meta name="citation_title" content="Experto GEO 2026: qué hace y cómo contratar a un especialista" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2026" />
        <meta name="citation_online_date" content="2026-06-17" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="experto geo, consultor geo, especialista posicionamiento geo, contratar experto generative engine optimization, precio consultor geo 2026" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />

        <meta property="og:title" content="Experto GEO 2026: qué hace y cómo contratar | esGEO" />
        <meta property="og:description" content="Qué hace un experto GEO, en qué se diferencia del SEO y 7 señales para distinguir un consultor real. España y LATAM 2026." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.esgeo.ai/experto-geo" />
        <meta property="og:image" content="https://www.esgeo.ai/og-image.png" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="esGEO" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experto GEO 2026: qué hace y cómo contratar" />
        <meta name="twitter:description" content="Qué hace un experto GEO, en qué se diferencia del SEO y 7 señales para distinguir un consultor real." />
        <meta name="twitter:image" content="https://www.esgeo.ai/og-image.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Inicio
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Experto GEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero */}
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              <Users className="h-4 w-4 mr-2" />
              Consultoría GEO en España y LATAM
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Experto GEO: qué hace y cómo contratar a un especialista
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Un experto en GEO diseña contenidos y arquitectura web para que ChatGPT, Perplexity y Gemini citen tu marca. Aquí encontrarás qué pedir en una propuesta, cuánto cuesta en 2026 y siete señales para distinguir a un consultor real de uno que vende SEO con etiqueta nueva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="mailto:fundador@esgeo.ai?subject=Consulta%20experto%20GEO&body=Hola%2C%20quiero%20hablar%20con%20un%20experto%20GEO%20para%20mi%20proyecto.%20Te%20cuento%3A%0A%0A1.%20Web%3A%20%0A2.%20Sector%3A%20%0A3.%20Objetivo%3A%20%0A4.%20Presupuesto%20mensual%20aproximado%3A%20%0A%0AGracias.">
                  <Mail className="h-5 w-5 mr-2" />
                  Reservar consulta de diagnóstico
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/curso">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Aprender GEO yo mismo — Curso €47
                </Link>
              </Button>
            </div>
          </header>

          {/* 1. Definitorio */}
          <HighlightSnippet id="que-es-experto-geo" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Qué es un experto GEO y qué hace exactamente?</h2>
              <ShareSectionButton sectionId="que-es-experto-geo" title="qué es un experto GEO" />
            </div>
            <p className="text-lg leading-relaxed mb-4" data-speakable="true">
              <strong>Un experto GEO (Generative Engine Optimization) es un profesional que diseña contenidos y arquitectura web para que los motores generativos —ChatGPT, Perplexity, Claude y Gemini— citen una marca como fuente.</strong> A diferencia del SEO, no optimiza para clics, sino para ser nombrado dentro de la respuesta que la IA da al usuario.
            </p>
            <p className="text-lg leading-relaxed">
              El trabajo combina cuatro capas: auditoría técnica del sitio (accesibilidad para bots de IA como GPTBot, ClaudeBot, PerplexityBot, Google-Extended), redacción citable (answer-first, párrafos atómicos, datos con fuente), estructura semántica (Schema.org, JSON-LD) y medición continua de menciones en respuestas IA.
            </p>
          </HighlightSnippet>

          {/* 2. SEO vs GEO vs Content */}
          <section id="seo-vs-geo-vs-content" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">Experto GEO vs consultor SEO vs especialista en contenido IA</h2>
              <ShareSectionButton sectionId="seo-vs-geo-vs-content" title="diferencias entre roles" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-3 font-semibold">Rol</th>
                    <th className="text-left p-3 font-semibold">Métrica final</th>
                    <th className="text-left p-3 font-semibold">Optimiza para</th>
                    <th className="text-left p-3 font-semibold">Trabaja con</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Consultor SEO</td>
                    <td className="p-3">Clicks orgánicos</td>
                    <td className="p-3">Ranking en SERP</td>
                    <td className="p-3">Backlinks, keywords, Core Web Vitals</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Experto GEO</td>
                    <td className="p-3">Menciones en respuestas IA</td>
                    <td className="p-3">Citabilidad por LLM</td>
                    <td className="p-3">Datos citables, prompts de validación, share of citation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Content strategist IA</td>
                    <td className="p-3">Volumen y calidad del contenido</td>
                    <td className="p-3">Editorial line + voz</td>
                    <td className="p-3">Briefs, calendario editorial, redacción</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Los tres roles se solapan en herramientas (HTML semántico, schema, sitemap), pero la métrica de éxito es distinta. Quien venda los tres como uno suele estar simplificando para cerrar la venta.
            </p>
          </section>

          {/* 3. Siete señales */}
          <section id="siete-senales" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">7 señales que distinguen a un experto GEO real</h2>
              <ShareSectionButton sectionId="siete-senales" title="siete señales del experto GEO real" />
            </div>
            <div className="grid gap-4">
              {sevenSignals.map((item, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-1">{i + 1}. {item.signal}</p>
                        <p className="text-sm text-muted-foreground flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          {item.caveat}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 4. Qué pedir en una propuesta */}
          <section id="que-pedir-propuesta" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">Qué pedir en una propuesta: entregables, KPIs y plazos</h2>
              <ShareSectionButton sectionId="que-pedir-propuesta" title="propuesta GEO" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Entregables mínimos</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Auditoría técnica con captura del estado actual.</p>
                  <p>• Plan de contenido (qué reescribir, qué crear de cero).</p>
                  <p>• Implementación de schema y datos estructurados.</p>
                  <p>• Dashboard de tracking de citaciones por modelo.</p>
                  <p>• Plan de mantenimiento mensual o trimestral.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">KPIs honestos</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Share of citation por modelo (ChatGPT, Perplexity, Claude, Gemini).</p>
                  <p>• Nº de queries donde la marca aparece en top-3 de fuentes citadas.</p>
                  <p>• Variación del CTR en GSC para queries IA-influenciadas.</p>
                  <p>• Hueco competitivo: en qué queries lo gana otra marca y por qué.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Plazos realistas</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Auditoría: 1-2 semanas.</p>
                  <p>• Primera ronda de implementación: 3-6 semanas.</p>
                  <p>• Primeras citaciones medibles: 4-8 semanas.</p>
                  <p>• Consolidación cross-modelo: 3-6 meses.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Banderas rojas</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Promesas de "ranking en ChatGPT en 30 días".</p>
                  <p>• Garantía de resultados sin auditar tu sitio.</p>
                  <p>• Precios sin alcance definido.</p>
                  <p>• Falta de capturas de citas reales en su portfolio.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 5. Precios */}
          <section id="precios-consultor-geo" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">¿Cuánto cobra un consultor GEO en España y LATAM (rangos 2026)?</h2>
              <ShareSectionButton sectionId="precios-consultor-geo" title="precios consultor GEO 2026" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-3 font-semibold">Modalidad</th>
                    <th className="text-left p-3 font-semibold">Rango España</th>
                    <th className="text-left p-3 font-semibold">Rango LATAM</th>
                    <th className="text-left p-3 font-semibold">Para quién</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Freelance</td>
                    <td className="p-3">800 - 2.500 €/mes</td>
                    <td className="p-3">600 - 1.800 USD/mes</td>
                    <td className="p-3">Pymes, ecommerce y SaaS pequeños</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Agencia</td>
                    <td className="p-3">2.500 - 8.000 €/mes</td>
                    <td className="p-3">2.000 - 6.000 USD/mes</td>
                    <td className="p-3">Marcas con varios mercados o productos</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">In-house</td>
                    <td className="p-3">45.000 - 70.000 €/año</td>
                    <td className="p-3">25.000 - 45.000 USD/año</td>
                    <td className="p-3">Empresas con volumen de contenido constante</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Rangos observados en el mercado a fecha de 2026. No son tarifa oficial. Cualquier consultor serio te dará presupuesto cerrado tras ver tu sitio, no antes.
            </p>
          </section>

          {/* 6. Evaluar portfolio */}
          <section id="evaluar-portfolio" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">Cómo evaluar el portfolio: casos donde la marca aparece citada</h2>
              <ShareSectionButton sectionId="evaluar-portfolio" title="evaluar portfolio GEO" />
            </div>
            <p className="text-lg leading-relaxed mb-4">
              El portfolio de un experto GEO real no se mide en logos de clientes. Se mide en capturas verificables de citas. Lo mínimo que debes pedir antes de firmar:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span><strong>Captura del modelo</strong> citando a la marca, con el nombre del modelo visible (ChatGPT-5, Perplexity Sonar, Claude Sonnet, Gemini 2.0).</span></li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span><strong>Prompt exacto</strong> usado para obtener la cita, sin parafraseo.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span><strong>Fecha de la captura</strong> (las citas IA cambian con cada refresh de índice).</span></li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span><strong>Tipo de cita</strong>: URL directa al sitio, mención de marca sin enlace, parafraseo del contenido.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span><strong>Continuidad</strong>: ¿la cita se repite semana a semana o fue puntual?</span></li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Sin estos cinco elementos, la captura es decorativa. Una sola aparición puntual no es un resultado consolidado.
            </p>
          </section>

          {/* 7. Decisión por tamaño */}
          <section id="decision-tamano-empresa" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">¿In-house, freelance o agencia? Decisión por tamaño</h2>
              <ShareSectionButton sectionId="decision-tamano-empresa" title="modalidad por tamaño de empresa" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Freelance</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2"><strong>Ideal para:</strong> pymes, ecommerce o SaaS con un sitio.</p>
                  <p className="mb-2"><strong>Pro:</strong> dedicación enfocada, decisiones rápidas, presupuesto contenido.</p>
                  <p><strong>Contra:</strong> rotación si el freelance cambia de proyecto.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Agencia</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2"><strong>Ideal para:</strong> marcas con varios mercados, varios idiomas o varios productos.</p>
                  <p className="mb-2"><strong>Pro:</strong> capacidad para escalar y cubrir bajas.</p>
                  <p><strong>Contra:</strong> coste más alto, riesgo de senior selling + junior doing.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">In-house</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2"><strong>Ideal para:</strong> empresas que producen contenido cada semana.</p>
                  <p className="mb-2"><strong>Pro:</strong> conocimiento profundo del producto y la voz.</p>
                  <p><strong>Contra:</strong> coste fijo alto, dependencia de una sola persona.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq-experto-geo" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary">Preguntas frecuentes sobre el experto GEO</h2>
              <ShareSectionButton sectionId="faq-experto-geo" title="FAQ experto GEO" />
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{f.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA + Email capture */}
          <section id="cta-experto-geo" className="mb-16">
            <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">¿Necesitas un experto GEO?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Si quieres saber si tu sitio está preparado para ser citado por ChatGPT, Perplexity o Gemini, reserva una consulta de diagnóstico. Sin compromiso ni venta agresiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <a href="mailto:fundador@esgeo.ai?subject=Consulta%20experto%20GEO&body=Hola%2C%20quiero%20hablar%20con%20un%20experto%20GEO%20para%20mi%20proyecto.%20Te%20cuento%3A%0A%0A1.%20Web%3A%20%0A2.%20Sector%3A%20%0A3.%20Objetivo%3A%20%0A4.%20Presupuesto%20mensual%20aproximado%3A%20%0A%0AGracias.">
                      <Mail className="h-5 w-5 mr-2" />
                      Reservar consulta de diagnóstico
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/curso">
                      <ArrowRight className="h-5 w-5 mr-2" />
                      Prefiero aprenderlo yo — Curso €47
                    </Link>
                  </Button>
                </div>
                <div className="border-t border-border pt-6 mt-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    ¿No estás listo todavía? Suscríbete y recibe los criterios para auditar a un experto GEO antes de contratarlo.
                  </p>
                  <EmailCapture variant="inline" source="experto-geo-cta" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Internal links */}
          <section id="internal-links" className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Sigue leyendo</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/metodologia" className="block p-4 rounded-lg border hover:border-accent transition-colors">
                <p className="font-semibold text-primary mb-1">Metodología GEO</p>
                <p className="text-sm text-muted-foreground">Cómo trabaja un experto GEO con el framework F1-F5.</p>
              </Link>
              <Link to="/casos" className="block p-4 rounded-lg border hover:border-accent transition-colors">
                <p className="font-semibold text-primary mb-1">Casos reales</p>
                <p className="text-sm text-muted-foreground">Resultados verificables con captura del modelo.</p>
              </Link>
              <Link to="/curso" className="block p-4 rounded-lg border hover:border-accent transition-colors">
                <p className="font-semibold text-primary mb-1">Curso GEO completo (€47)</p>
                <p className="text-sm text-muted-foreground">La metodología que un experto aplica, para que la apliques tú.</p>
              </Link>
              <Link to="/radar-ia/geo-vs-seo-diferencias" className="block p-4 rounded-lg border hover:border-accent transition-colors">
                <p className="font-semibold text-primary mb-1">GEO vs SEO: diferencias</p>
                <p className="text-sm text-muted-foreground">Contraste de roles, métricas y herramientas.</p>
              </Link>
              <Link to="/geo-score" className="block p-4 rounded-lg border hover:border-accent transition-colors">
                <p className="font-semibold text-primary mb-1">GEO Score</p>
                <p className="text-sm text-muted-foreground">Herramienta de diagnóstico que un experto usa contigo.</p>
              </Link>
              <Link to="/acerca-de/equipo" className="block p-4 rounded-lg border hover:border-accent transition-colors">
                <p className="font-semibold text-primary mb-1">Equipo esGEO</p>
                <p className="text-sm text-muted-foreground">Conoce a las personas detrás del método.</p>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExpertoGeoPage;
