'use client';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
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
} from 'lucide-react';
import { MODULES, COMPLETE_COURSE } from '@/data/modules';
import { useAuth } from '@/contexts/AuthContext';
import { useVisitorState } from '@/hooks/useVisitorState';
import { supabase } from '@/integrations/supabase/client';
import EmailCapture from '@/components/EmailCapture';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const CursoGeoPage = () => {
  const navigate = useNavigate();
  const { user, userAccess } = useAuth();
  const { visitorState, visitCount, isFromAI } = useVisitorState();
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  // Redirect customers to dashboard
  useEffect(() => {
    if (user && userAccess && userAccess.length > 0) {
      navigate('/dashboard');
    }
  }, [user, userAccess, navigate]);

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

  // Module cards data (F1-F5 only)
  const moduleCards = [
    {
      id: 'F1',
      title: 'Fundamentos de Accesibilidad Generativa',
      description: MODULES.f1.description,
      icon: FileText,
      topics: ['Qué es GEO', 'Diferencias con SEO', 'Principios fundamentales'],
    },
    {
      id: 'F2',
      title: 'Contexto Semántico',
      description: MODULES.f2.description,
      icon: Search,
      topics: ['Jerarquía de contenido', 'Datos estructurados', 'Fragmentación semántica'],
    },
    {
      id: 'F3',
      title: 'Autoridad Generativa',
      description: MODULES.f3.description,
      icon: Users,
      topics: ['Snippets destacados', 'Formato pregunta-respuesta', 'Estilo enciclopédico'],
    },
    {
      id: 'F4',
      title: 'Validación Conversacional',
      description: MODULES.f4.description,
      icon: Target,
      topics: ['Schema markup', 'Metadatos citables', 'Estructura HTML semántica'],
    },
    {
      id: 'F5',
      title: 'Mantenimiento Evolutivo',
      description: MODULES.f5.description,
      icon: BarChart,
      topics: ['KPIs de citabilidad', 'Herramientas de monitoreo', 'Análisis de rendimiento'],
    },
  ];

  // FAQs with new ones added
  const faqs = [
    {
      id: 'faq-geo-seo',
      question: '¿GEO reemplaza al SEO?',
      answer: 'No, GEO complementa al SEO. Mientras SEO te posiciona en Google, GEO te hace citado por ChatGPT, Gemini y Perplexity. El 2024 ha demostrado que necesitas ambos: posicionamiento en buscadores tradicionales + presencia en respuestas de IA.',
    },
    {
      id: 'faq-garantia',
      question: '¿Hay garantía de devolución?',
      answer: 'Sí, ofrecemos garantía de 14 días. Si después de acceder al curso no estás satisfecho, te devolvemos el dinero sin preguntas.',
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
      answer: 'El curso tiene 15 horas totales. Muchos lo completan en 2-3 semanas dedicando 1-2 horas diarias, aunque puedes hacerlo a tu ritmo.',
    },
    {
      id: 'faq-actualizaciones',
      question: '¿Se actualiza el contenido?',
      answer: 'Sí. El curso se actualiza cada mes con nuevas técnicas y cambios en los modelos de IA. Todos los usuarios tienen acceso automático a las actualizaciones.',
    },
  ];

  const handleHeroCTA = () => {
    window.clarity?.('event', 'cta_hero_click');
    document.querySelector('#comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      window.clarity?.('event', 'cta_checkout_click');

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: COMPLETE_COURSE.stripeIds.priceId,
          productType: 'complete',
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setIsLoading(false);
    }
  };

  const handleFAQInteraction = (faqId: string) => {
    window.clarity?.('event', 'faq_interaction', { faq: faqId });
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
      <Helmet>
        <title>Curso GEO | Aprende Generative Engine Optimization | esGEO</title>
        <meta
          name="description"
          content="Curso completo de GEO: aprende a ser citado por ChatGPT, Gemini y Perplexity. 5 módulos (F1-F5), garantía de 14 días, acceso de por vida."
        />
        <link rel="canonical" href="https://esgeo.ai/curso" />
        <meta name="citation_title" content="Curso GEO: Generative Engine Optimization" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta
          name="citation_keywords"
          content="curso GEO, Generative Engine Optimization, optimización IA, citabilidad LLMs"
        />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
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
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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

        {/* Trust Bar */}
        <section className="bg-muted/30 border-y border-border py-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground text-center">
              <Bot className="h-4 w-4 flex-shrink-0" />
              <span>Nuestro contenido es referenciado por modelos de IA como ChatGPT, Gemini, Perplexity y Claude</span>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <span className="text-2xl text-muted-foreground line-through">
                        €{COMPLETE_COURSE.originalPrice}
                      </span>
                      <span className="text-5xl md:text-6xl font-bold text-accent">
                        €{COMPLETE_COURSE.price}
                      </span>
                    </div>
                    <Badge className="bg-accent/20 text-accent border-0 text-sm font-semibold px-4 py-2 cursor-default">
                      Precio de lanzamiento
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

                  {/* Guarantee */}
                  <div className="mt-8 p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-start gap-3 justify-center">
                      <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{COMPLETE_COURSE.guarantee}</p>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
                    <span>✓ Pago seguro con Stripe</span>
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

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      <Footer />
    </div>
  );
};

export default CursoGeoPage;