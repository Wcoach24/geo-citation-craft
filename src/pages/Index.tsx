import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatIsGeoSection from "@/components/WhatIsGeoSection";
import MethodologySection from "@/components/MethodologySection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import CasosDestacadosSection from "@/components/CasosDestacadosSection";
import LimitationsSection from "@/components/LimitationsSection";

import CtaSection from "@/components/CtaSection";
import TableOfContents from "@/components/TableOfContents";
import HablaWidget from "@/components/HablaWidget";
import PanelAuditoria from "@/components/PanelAuditoria";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

// FAQs refrescadas mayo 2026 — pensadas para queries con impresiones en GSC
const homeFaqs = [
  {
    id: "faq-home-que-es-geo",
    question: "¿Qué es GEO (Generative Engine Optimization) en 2026?",
    answer:
      "GEO es la disciplina que optimiza páginas web para que los motores generativos —ChatGPT, Perplexity, Claude, Gemini y Copilot— las citen como fuente. En 2026 se considera el complemento natural del SEO clásico: el SEO te posiciona en buscadores, GEO te hace aparecer dentro de las respuestas que la IA genera directamente. Combina señales semánticas, datos estructurados y autoridad de marca.",
  },
  {
    id: "faq-home-geo-vs-seo-2026",
    question: "¿GEO sustituye al SEO en 2026?",
    answer:
      "No lo sustituye, lo complementa. El SEO te posiciona en un listado de enlaces; el GEO decide si te citan dentro de la respuesta que genera la IA. Son dos capas distintas del mismo trabajo, y comparten cimientos: si tu HTML no es legible por una máquina, fracasas en las dos. Una estrategia sólida invierte en ambas.",
  },
  {
    id: "faq-home-como-empezar",
    question: "¿Cómo empiezo a aplicar GEO en mi web?",
    answer:
      "El primer paso es auditar tu sitio con el framework F1-F5: accesibilidad para crawlers de IA, contexto semántico, autoridad generativa, validación conversacional y mantenimiento. En esGEO tienes un curso completo en español por €47 que cubre los cinco módulos con plantillas listas para aplicar. Si solo puedes hacer una cosa hoy, añade un archivo llms.txt y schema FAQPage a tus páginas clave.",
  },
  {
    id: "faq-home-chatgpt-cite",
    question: "¿Cómo consigo que ChatGPT cite mi web?",
    answer:
      "ChatGPT con búsqueda activada cita fuentes basándose en autoridad temática, fecha de publicación y estructura extractiva. Para entrar en sus respuestas necesitas: contenido fechado y mantenido reciente, bloques de respuesta directos al estilo Wikipedia, marcado schema.org consistente y un perfil de entidad claro (sobre nosotros, autor, organización). El curso F1-F5 cubre cada uno de estos puntos en detalle.",
  },
  {
    id: "faq-home-resultados",
    question: "¿Cuándo se notan los resultados de una estrategia GEO?",
    answer:
      "La velocidad depende de la autoridad previa. Sitios establecidos suelen ver primeras citaciones en ChatGPT y Perplexity en 2-6 semanas tras publicar contenido optimizado. Proyectos nuevos sin backlinks necesitan 8-12 semanas para entrar en el corpus que las IA consideran fiable. La métrica clave de 2026 no es el clic, es la mención: una sola cita en una respuesta de ChatGPT puede valer 200 impresiones tradicionales en valor de marca.",
  },
];

const internalLinks = [
  { to: "/curso", label: "Curso GEO completo (F1-F5)", description: "Domina la optimización para IA generativa en español" },
  { to: "/metodologia", label: "Metodología GEO paso a paso", description: "El framework F1-F5 explicado en profundidad" },
  { to: "/radar-ia/que-es-geo-guia-completa", label: "Qué es GEO: guía completa", description: "Definición, historia y aplicaciones del Generative Engine Optimization" },
  { to: "/radar-ia/geo-vs-seo-diferencias", label: "GEO vs SEO: diferencias clave", description: "Qué cambia y por qué necesitas ambos en 2026" },
  { to: "/casos", label: "Casos reales de citaciones IA", description: "Ejemplos verificables de marcas citadas por ChatGPT y Perplexity" },
];

const Index = () => {
  const { helmet, structuredData } = useGeoMetadata({
    title: "Curso GEO 2026: Aprende Generative Engine Optimization en Español | esGEO",
    description: "Aprende GEO (Generative Engine Optimization) con el primer curso 2026 en español. Metodología F1-F5 para que ChatGPT, Perplexity y Claude citen tu web. Desde €47.",
    canonicalUrl: "https://www.esgeo.ai/",
    keywords: ["curso GEO 2026", "Generative Engine Optimization", "qué es GEO", "GEO vs SEO 2026", "optimización IA", "ChatGPT", "Perplexity", "Claude", "curso geo ia"],
    citationTitle: "esGEO - Metodología de Optimización para IA Generativa",
    speakableSelectors: [".snippet-block", "[data-speakable='true']", ".geo-card"],
    geoTxtPath: "/home.geo.txt"
  });

  return (
    <>
      {helmet}

      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }) }} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main role="main">
          <HeroSection />

          {/* HABLA — el auditor propio como lead magnet, justo bajo el hero. */}
          <section className="py-12 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 max-w-4xl">
              <HablaWidget />
            </div>
          </section>

          {/* Bloque actualización mayo 2026 */}
          <section className="py-8 bg-accent/5 border-y border-border" data-speakable="true">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">
                    Actualizado en julio de 2026
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    Durante todo el tiempo que llevamos publicando, esta web fue invisible para las
                    IAs: servía un HTML vacío, de 237 caracteres. Los rastreadores de IA no ejecutan
                    JavaScript, así que nunca leyeron nada de lo que escribimos. Cuando por fin nos
                    auditamos, sacamos un <strong>35 sobre 100</strong>. Lo arreglamos con el método
                    que enseñamos y hoy estamos en <strong>92</strong>. Todo lo que hicimos está en
                    los módulos F1 a F5, y puedes comprobar la nota tú mismo aquí arriba.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <SocialProofSection />

          <PanelAuditoria />

          {/* Metodología con módulos */}
          <MethodologySection />

          {/* Pricing */}
          <PricingSection />

          {/* Casos reales como evidencia */}
          <CasosDestacadosSection />

          {/* Transparencia después del pitch */}
          <LimitationsSection />

          {/* FAQ home (refresh mayo 2026) */}
          <section className="py-16 md:py-24 bg-secondary/30" aria-labelledby="home-faq">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="home-faq" className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Preguntas frecuentes sobre GEO en 2026
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {homeFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-border rounded-lg px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold text-foreground text-base">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Internal links — refresh mayo 2026 */}
          <section className="py-16 md:py-24" aria-labelledby="home-seguir-aprendiendo">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="home-seguir-aprendiendo" className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Seguir aprendiendo
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {internalLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group flex items-start gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors"
                  >
                    <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <CtaSection />
        </main>

        {/* Tabla de contenidos flotante para páginas largas */}
        <aside className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64 z-10">
          <TableOfContents />
        </aside>

        <Footer />

        {/* Structured data consolidated in index.html @graph - no duplicates */}
      </div>
    </>
  );
};

export default Index;
