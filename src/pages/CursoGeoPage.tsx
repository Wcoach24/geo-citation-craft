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
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import EmailCapture from '@/components/EmailCapture';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const CursoGeoPage = () => {
  const navigate = useNavigate();
  const { user, userAccess } = useAuth();
  const { visitorState, visitCount, isFromAI } = useVisitorState();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileCTA] = useState(false);

  useEffect(() => {
    if (user && userAccess && userAccess.length > 0) {
      navigate('/dashboard');
    }
  }, [user, userAccess, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = async (productType: 'module' | 'complete', moduleId?: string) => {
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` }),
        },
        body: JSON.stringify({
          productType,
          moduleId,
          guestEmail: !token ? undefined : undefined,
        }),
      });

      if (!response.ok) throw new Error('Checkout failed');
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      toast({ title: 'Error', description: 'No se pudo crear la sesión de compra', variant: 'destructive' });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Curso GEO: Generative Engine Optimization | esGEO</title>
        <meta name="description" content="Aprende GEO con el primer curso en español. 5 módulos (F1-F5) sobre cómo optimizar contenido para ser citado por IA. €97 curso completo o €29 módulos individuales." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section data-hero className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-background py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4 inline-block">Primer curso GEO en español</Badge>
                <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
                  Domina GEO<br />Aparece en respuestas de IA
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Aprende el framework completo F1-F5 para optimizar tu contenido y ser citado por ChatGPT, Perplexity, Gemini y Claude.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-cta" onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}>
                    Empezar ahora — €97
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate('/casos')}>
                    Ver casos reales
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-12 bg-white dark:bg-slate-950 border-y">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <p className="text-center text-sm text-muted-foreground mb-8">Confían en esGEO</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">2,500+</div>
                    <p className="text-xs text-muted-foreground">Estudiantes</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4.9/5</div>
                    <p className="text-xs text-muted-foreground">Calificación</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">142</div>
                    <p className="text-xs text-muted-foreground">Páginas contenido</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">€97</div>
                    <p className="text-xs text-muted-foreground">Acceso de por vida</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modules Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-primary mb-4">El Framework GEO: 5 módulos fundamentales</h2>
                  <p className="text-lg text-muted-foreground">Cada módulo es una guía PDF profesional de 25-35 páginas con casos prácticos y checklists.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: 'F1', title: 'Fundamentos de Accesibilidad Generativa', icon: FileText, desc: 'Fragmentación y estructura' },
                    { id: 'F2', title: 'Contexto Semántico', icon: Search, desc: 'Jerarquía y claridad' },
                    { id: 'F3', title: 'Autoridad Generativa', icon: Users, desc: 'Señales de expertise' },
                    { id: 'F4', title: 'Validación Conversacional', icon: Target, desc: 'Formatos que funcionan' },
                    { id: 'F5', title: 'Mantenimiento Evolutivo', icon: BarChart, desc: 'Frescura y actualización' },
                  ].map((module) => {
                    const IconComponent = module.icon;
                    return (
                      <Card key={module.id} className="card-clay border-accent/20 hover:border-accent/40 transition">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-accent/10 rounded-lg">
                              <IconComponent className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                              <Badge variant="secondary" className="mb-2">{module.id}</Badge>
                              <h3 className="font-bold text-primary">{module.title}</h3>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{module.desc}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            disabled={isLoading}
                            onClick={() => handleCheckout('module', module.id.toLowerCase())}
                          >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            €29 — Comprar módulo
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">Preguntas frecuentes</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                    <AccordionTrigger>¿Qué diferencia hay entre módulos individuales y el curso completo?</AccordionTrigger>
                    <AccordionContent>
                      Los módulos individuales (€29) contienen guías PDF de 25-35 páginas cada uno. El curso completo (€97) incluye todos los 5 módulos más acceso a actualizaciones de por vida y comunidad exclusiva.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>¿Cuánto tiempo toma completar el curso?</AccordionTrigger>
                    <AccordionContent>
                      Cada módulo puede completarse en 2-3 horas. El curso completo (5 módulos) toma 10-15 horas según tu ritmo. Muchos estudiantes lo hacen en 2-3 semanas dedicando 1-2 horas diarias.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>¿Es necesario tener conocimientos de SEO previos?</AccordionTrigger>
                    <AccordionContent>
                      No. El curso está diseñado para principiantes. Si tienes experiencia en SEO, aprenderás cómo GEO es diferente y complementario.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q4">
                    <AccordionTrigger>¿Hay garantía de reembolso?</AccordionTrigger>
                    <AccordionContent>
                      Sí. 30 días de garantía sin preguntas. Si el curso no te funciona, devolvemos tu dinero.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q5">
                    <AccordionTrigger>¿Se incluyen las actualizaciones futuras?</AccordionTrigger>
                    <AccordionContent>
                      Sí. Una vez que compres (módulo o curso completo), tienes acceso de por vida a todas las actualizaciones.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section id="comprar" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <Card className="card-clay border-accent/20">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Curso completo — Todos los 5 módulos</h2>
                    <div className="text-5xl font-bold text-accent mb-2">€97</div>
                    <p className="text-muted-foreground mb-6">142 páginas de contenido premium + acceso de por vida + actualizaciones gratis</p>
                    <Button
                      size="lg"
                      className="btn-cta w-full mb-4"
                      disabled={isLoading}
                      onClick={() => handleCheckout('complete')}
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                      Empezar ahora
                    </Button>
                    <p className="text-xs text-muted-foreground">Garantía de reembolso 30 días • Sin contrato • Cancela cuando quieras</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ExitIntentPopup />
      </div>
    </>
  );
};

export default CursoGeoPage;