'use client';

import HablaWidget from "@/components/HablaWidget";
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  FileText,
  Search,
  Users,
  Target,
  BarChart,
  CheckCircle,
  Shield,
  Bot,
  Loader2,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { MODULES, COMPLETE_COURSE } from '@/data/modules';
import { useVisitorState } from '@/hooks/useVisitorState';
import { useToast } from '@/hooks/use-toast';
import EmailCapture from '@/components/EmailCapture';
import GuaranteeNote from '@/components/GuaranteeNote';
import { trackEvent } from '@/lib/analytics';
import { startCheckout } from '@/lib/checkout';
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const CursoGeoPage = () => {
  // F1-7: metas sociales (og:/twitter:) — se renderiza ANTES del <Helmet> propio
  // para que los valores especificos de la pagina ganen en los tags duplicados.
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Curso GEO 2026: Aprende Optimización para IA | esGEO",
    description: "Curso GEO 2026 en español: 5 módulos para optimizar tu web y ser citado por ChatGPT, Perplexity y Claude. Framework F1-F5 actualizado con prácticas vigentes en 2026. €47.",
    canonicalUrl: "https://www.esgeo.ai/curso",
  });

  const { visitorState, visitCount, isFromAI } = useVisitorState();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track scroll for mobile CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('[data-hero]');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        setShowMobileCTA(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Module cards data (F1-F5): títulos, bullets y descripciones desde src/data/modules.ts
  // (taxonomía única del framework). Aquí solo se asigna el icono.
  const MODULE_CARD_ICONS = { f1: FileText, f2: Search, f3: Users, f4: Target, f5: BarChart } as const;
  const moduleCards = Object.values(MODULES).map((m) => ({
    id: m.id.toUpperCase(),
    title: m.title,
    description: m.description,
    icon: MODULE_CARD_ICONS[m.id as keyof typeof MODULE_CARD_ICONS],
    topics: m.topics,
  }));

  // FAQs (original 5 + 5 refrescadas mayo 2026)
  const faqs = [
    {
      id: 'faq-geo-seo',
      question: '¿GEO reemplaza al SEO?',
      answer: 'No, GEO complementa al SEO. Mientras SEO te posiciona en Google, GEO te hace citado por ChatGPT, Gemini y Perplexity. Necesitas ambos: posicionamiento en buscadores tradicionales + presencia en respuestas de IA.',
    },
    {
      id: 'faq-prerrequisitos',
      question: '¿Puedo seguir el curso sin conocimientos técnicos?',
      answer: 'Completamente. El curso comienza desde cero en F1 y progresa gradualmente. No necesitas saber HTML, CSS o SQL. Los módulos técnicos incluyen explicaciones paso a paso.',
    },
    {
      id: 'faq-orden',
      question: '¿Debo seguir los módulos en orden?',
      answer: 'Recomendamos seguir F1→F5 secuencialmente, ya que cada módulo construye sobre el anterior. Pero si tienes experiencia en SEO, puedes saltar a F4 directamente.',
    },
    {
      id: 'faq-tiempo-completar',
      question: '¿Cuánto tiempo necesito para completar el curso?',
      answer: 'Son 5 guías en PDF que se leen en una tarde. Aplicarlas es lo que lleva tiempo: cuenta con una o dos sesiones de trabajo por módulo sobre tu propia web. No hay clases en directo ni plazos; lo haces a tu ritmo y los PDFs son tuyos para siempre.',
    },
    {
      id: 'faq-actualizaciones',
      question: '¿Se actualiza el contenido?',
      answer: 'Sí, y las actualizaciones van incluidas: si compras hoy, recibes las versiones nuevas sin pagar otra vez. No prometemos una cadencia fija. Actualizamos cuando cambia algo que de verdad afecta a la citabilidad, no para poder decir que actualizamos cada mes.',
    },
    {
      id: 'faq-curso-2026',
      question: '¿Qué novedades incluye el curso GEO en 2026?',
      answer: 'En 2026 el curso incorpora el comportamiento real de ChatGPT con búsqueda activada, las últimas guidelines de Perplexity para fuentes y el patrón llms.txt como estándar de facto. Se han revisado los cinco módulos F1-F5 para reflejar cómo los LLMs eligen fuentes hoy: mayor peso de schema.org, contenido extractivo en bloques cortos y citaciones cruzadas. Recibes acceso a todas las actualizaciones sin pagar suplementos.',
    },
    {
      id: 'faq-chatgpt-cite',
      question: '¿El curso enseña a hacer que ChatGPT cite mi web concretamente?',
      answer: 'Sí. El módulo F3 (Autoridad Generativa) tiene una sección específica para ChatGPT con búsqueda activa: cómo aparecer en sus respuestas con cita en formato markdown, qué señales E-E-A-T valora y qué estructura HTML rinde mejor. Incluye plantillas listas para aplicar y un protocolo de auditoría para detectar si tu marca ya está siendo citada y cómo escalar la frecuencia.',
    },
    {
      id: 'faq-resultados-tiempo',
      question: '¿Cuánto tarda en notarse el efecto del GEO sobre las citas?',
      answer: 'La indexación inicial de ChatGPT y Perplexity tarda entre 2 y 6 semanas tras publicar contenido nuevo bien optimizado. Las primeras citas suelen aparecer en ese rango si la página ya tenía algo de autoridad. Para sitios nuevos sin backlinks, el ciclo se estira a 8-12 semanas. El curso explica cómo medirlo con consultas controladas y cómo acelerarlo trabajando entidades y datos estructurados.',
    },
    {
      id: 'faq-empresa-cliente',
      question: '¿Puedo aplicar lo aprendido a clientes o solo a mi propia web?',
      answer: 'El curso está pensado tanto para in-house como para consultores: los entregables son licenciables comercialmente y puedes usarlos con clientes sin restricción.',
    },
    {
      id: 'faq-garantia',
      question: '¿Hay garantía de devolución?',
      answer: 'Sí, y es medible. Garantía medible: aplica F1 y F2 sobre tu web. Si tu nota en el auditor no sube al menos 20 puntos, escríbenos con el antes y el después y te devolvemos los 47 €. Tienes 30 días desde la compra para reclamarla; el auditor gratuito de esgeo.ai/geo-score te da la nota del antes y del después.',
    },
    {
      id: 'faq-geo-vs-aeo-2026',
      question: '¿GEO es lo mismo que AEO o LLMO?',
      answer: 'Son términos que conviven en 2026 pero no son intercambiables. GEO (Generative Engine Optimization) cubre el ecosistema completo de motores generativos: ChatGPT, Perplexity, Claude, Gemini, Copilot y la AI Overview de Google. AEO (Answer Engine Optimization) se centra en respuestas directas en buscadores tradicionales. LLMO se usa más en el ámbito anglosajón como sinónimo de GEO. El curso usa GEO porque es la nomenclatura más adoptada en la documentación académica y comercial en español.',
    },
  ];

  // Internal links curados (refresh mayo 2026)
  const internalLinks = [
    {
      to: '/metodologia',
      label: 'Metodología GEO completa',
      description: 'Framework F1-F5 explicado paso a paso',
    },
    {
      to: '/radar-ia/como-hacer-que-chatgpt-cite-tu-web',
      label: 'Cómo hacer que ChatGPT cite tu web',
      description: 'Guía aplicada con patrones de citación reales',
    },
    {
      to: '/radar-ia/geo-vs-seo-diferencias',
      label: 'GEO vs SEO: diferencias clave',
      description: 'Por qué necesitas ambos en 2026',
    },
    {
      to: '/radar-ia/optimizar-web-para-perplexity',
      label: 'Optimizar tu web para Perplexity',
      description: 'Señales que Perplexity prioriza al elegir fuentes',
    },
    {
      to: '/casos',
      label: 'Casos reales de marcas citadas por IA',
      description: 'Ejemplos verificables de citaciones logradas',
    },
  ];

  const handleHeroCTA = () => {
    (window as any).clarity?.('event', 'cta_hero_click');
    document.querySelector('#comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      trackEvent.checkoutStart('complete');
      (window as any).clarity?.('event', 'cta_checkout_click');

      const { url } = await startCheckout({ productType: 'complete' });
      window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "No se pudo iniciar el pago. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleFAQInteraction = (faqId: string) => {
    (window as any).clarity?.('event', 'faq_interaction', { faq: faqId });
  };

  // Determine hero content based on visitor state
  const getHeroContent = () => {
    if (isFromAI) {
      return {
        title: 'Estás aquí porque una IA te trajo. Imagina que haga lo mismo con tu marca.',
        subtitle: 'El primer curso en español de Generative Engine Optimization',
      };
    }
    if (visitCount > 1) {
      return {
        title: 'Sigues pensando en GEO — es hora de actuar',
        subtitle: 'El primer curso en español de Generative Engine Optimization',
      };
    }
    return {
      title: 'Haz que ChatGPT, Gemini y Perplexity citen tu marca',
      subtitle: 'El primer curso en español de Generative Engine Optimization',
    };
  };

  const heroContent = getHeroContent();

  return (
    <div className="min-h-screen bg-background">
      {socialHelmet}
      <Helmet>
        <title>Curso GEO 2026: Aprende Optimización para IA | esGEO</title>
        <meta
          name="description"
          content="Curso GEO 2026 en español: 5 módulos para optimizar tu web y ser citado por ChatGPT, Perplexity y Claude. Framework F1-F5 actualizado con prácticas vigentes en 2026. €47."
        />
        <link rel="canonical" href="https://www.esgeo.ai/curso" />
        <meta name="citation_title" content="Curso GEO 2026: Generative Engine Optimization" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta
          name="citation_keywords"
          content="curso GEO, Generative Engine Optimization, optimización IA, citabilidad LLMs, GEO 2026"
        />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }) }} />
      </Helmet>

      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section
          data-hero
          className="relative bg-gradient-to-b from-primary/5 to-background overflow-hidden py-20 md:py-32"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {heroContent.title}
              </h1>
              {/*
                Bloque de respuesta directa (answerability): qué, para quién y cuánto,
                autocontenido y fechado. Es lo primero que lee una máquina en /curso.
              */}
              <p
                className="snippet-block text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                data-speakable="true"
              >
                El <strong>curso GEO de esGEO</strong> enseña a estructurar una web para que los
                motores generativos la citen. Son <strong>5 módulos</strong> —F1 Accesibilidad para
                crawlers de IA, F2 Contexto semántico, F3 Autoridad generativa, F4 Validación
                conversacional y F5 Mantenimiento— con guías PDF descargables y plantillas listas
                para aplicar. Precio: <strong>47 € de pago único</strong>, sin suscripción, con
                acceso inmediato y los PDFs tuyos para siempre. Está pensado para fundadores,
                responsables de marketing y especialistas SEO que ya tienen web y quieren aparecer
                en las respuestas de ChatGPT, Perplexity, Claude y Gemini. Es el primer curso de GEO
                en español; contenido actualizado en julio de 2026.
              </p>

              {/* Subtítulo personalizado por estado de visitante (nuevo/recurrente/lead). */}
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {heroContent.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  onClick={handleHeroCTA}
                  className="btn-cta text-lg cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                >
                  Quiero dominar GEO — €47
                </button>
              </div>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 pt-4">
                <Bot className="h-4 w-4" />
                Referenciado por Gemini y otros modelos de IA
              </p>
            </div>
          </div>
        </section>

        {/* HABLA — gancho personal: el visitante ve su propia nota antes de leer el temario. */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <HablaWidget
              title="Antes de comprar: mira lo que la IA ve de tu web"
              subtitle="El curso arregla exactamente lo que este auditor detecta. Analiza tu dominio y decide con datos, no con fe."
            />
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-muted/30 border-y border-border py-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground text-center">
              <Bot className="h-4 w-4 flex-shrink-0" />
              <span>Nuestro contenido es referenciado por modelos de IA como ChatGPT, Gemini, Perplexity y Claude</span>
            </div>
          </div>
        </section>

        {/* Actualización mayo 2026 */}
        <section className="py-8 bg-accent/5 border-b border-border" data-speakable="true">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-start gap-4">
              <Calendar className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">
                  Actualizado en julio de 2026
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  El curso incluye el caso de nuestra propia web. esgeo.ai fue invisible para las IAs
                  desde el día en que se publicó: servía un HTML vacío de 237 caracteres. Cuando nos
                  auditamos, sacamos un <strong>35 sobre 100</strong>. Aplicamos F1 a F5 sobre
                  nosotros mismos y subimos a <strong>92</strong>. El antes, el después y los
                  comandos exactos para comprobarlo están dentro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAS Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* Problem */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  El Problema: Tu web es invisible para las IA generativas
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Mientras tu competencia es citada por ChatGPT, tu marca no aparece en ninguna respuesta.
                </p>
              </div>

              {/* Agitation - Before/After Card */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-destructive/20 bg-destructive/5 card-clay">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Antes: Sin GEO</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <span className="text-destructive">✗</span>
                        <span>Escribes contenido y esperas que Google lo encuentre</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive">✗</span>
                        <span>Tráfico orgánico estancado</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive">✗</span>
                        <span>Las IA no saben que existes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-destructive">✗</span>
                        <span>Pierdes oportunidades frente a competidores mejor optimizados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5 card-clay">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Después: Con GEO</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <span className="text-accent">✓</span>
                        <span>Las IA citan tu marca como fuente autorizada</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent">✓</span>
                        <span>Tráfico desde ChatGPT, Gemini y Perplexity</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent">✓</span>
                        <span>Tu contenido aparece en respuestas generativas</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent">✓</span>
                        <span>Posicionas como experto en tu industria</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Solution */}
              <Card className="border-primary/20 bg-primary/5 card-clay">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">La Solución: Aprende GEO</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Este curso te enseña a optimizar tu contenido específicamente para la era de la búsqueda generativa.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    No es SEO. No es copywriting. Es una disciplina completamente nueva diseñada para que las IA te
                    encuentren, comprendan y citen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Module Cards */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                5 Módulos Progresivos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desde fundamentos hasta técnicas avanzadas, todo lo que necesitas para dominar GEO
              </p>
            </div>

            {/* 5 cards: 3+2 en desktop, sin hueco */}
            <div className="grid md:grid-cols-2 lg:grid-cols-6 lg:[&>*]:col-span-2 lg:[&>*:nth-child(4)]:col-start-2 gap-6">
              {moduleCards.map((module) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.id} className="card-clay flex flex-col cursor-default transition-all duration-200">
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <IconComponent className="h-8 w-8 text-accent flex-shrink-0" />
                        <Badge className="bg-primary/10 text-primary font-bold text-base cursor-default">
                          {module.id}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{module.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                      <ul className="space-y-2 flex-1">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Resultados Verificables
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">1º</div>
                <p className="font-semibold text-foreground mb-1">Primer curso de GEO en español</p>
                <p className="text-sm text-muted-foreground">
                  Pioneros en formación de Generative Engine Optimization
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">5</div>
                <p className="font-semibold text-foreground mb-1">Modelos de IA cubiertos</p>
                <p className="text-sm text-muted-foreground">
                  ChatGPT · Gemini · Perplexity · Claude · Copilot
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">F1→F5</div>
                <p className="font-semibold text-foreground mb-1">Metodología progresiva</p>
                <p className="text-sm text-muted-foreground">
                  De fundamentos a implementación avanzada
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <EmailCapture source="course_page" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border rounded-lg px-4 md:px-6"
                  onClick={() => handleFAQInteraction(faq.id)}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-foreground text-base">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Internal links — refresh mayo 2026 */}
        <section className="py-16 md:py-24" aria-labelledby="seguir-aprendiendo">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="seguir-aprendiendo" className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
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

        {/* Inline Checkout Section */}
        <section id="comprar" className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="card-clay bg-primary/5 border-primary/20">
              <CardContent className="pt-8 md:pt-12">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Accede al curso GEO completo
                  </h2>

                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-accent">
                        €{COMPLETE_COURSE.price}
                      </span>
                    </div>
                    <Badge className="bg-accent/20 text-accent border-0 text-sm font-semibold px-4 py-2 cursor-default">
                      Pago único, sin suscripción
                    </Badge>
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-3">
                    {COMPLETE_COURSE.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="btn-cta w-full md:w-auto text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      'Quiero dominar GEO — €47'
                    )}
                  </button>

                  {/* Garantía medible (F2-1) */}
                  <GuaranteeNote className="mt-6" />

                  {/* Trust Message */}
                  <div className="mt-4 p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-start gap-3 justify-center">
                      <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">Acceso inmediato tras el pago. Descarga tus PDFs al instante.</p>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
                    <span>✓ Pago seguro con Stripe</span>
                    <span>✓ Factura para tu empresa (NIF/CIF)</span>
                    <span>✓ Acceso inmediato</span>
                    <span>✓ PDFs descargables</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Sticky Mobile CTA */}
      {showMobileCTA && (
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t border-border p-4 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xl font-bold text-accent">€{COMPLETE_COURSE.price}</div>
            <button onClick={handleCheckout} disabled={isLoading} className="btn-cta text-sm py-2 px-4 cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Quiero GEO'}
            </button>
          </div>
        </div>
      )}

      {/* Exit intent: montado globalmente en App.tsx (F2-7) */}

      <Footer />
    </div>
  );
};

export default CursoGeoPage;
