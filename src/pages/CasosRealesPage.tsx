import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, BarChart3, BookOpen, Shield, Globe, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CasosRealesPage = () => {
  const [submittedForm, setSubmittedForm] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedForm(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Casos Reales</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero: La evidencia detrás de GEO */}
        <section className="mb-16 section-anchor" id="hero-evidencia">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              La evidencia detrás de GEO
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              No fabricamos testimonios. Te mostramos datos verificables, investigación académica y nuestros propios resultados.
            </p>
            <p className="text-sm text-muted-foreground italic">
              En el mundo del SEO y marketing, la credibilidad es todo. Preferimos mostrar números reales que pretender tener clientes imaginarios.
            </p>
          </div>
          <ShareSectionButton sectionId="hero-evidencia" title="evidencia detrás de GEO" className="mt-4 flex justify-center" />
        </section>

        {/* Section 1: Nuestro propio caso - esGEO.ai */}
        <section className="mb-16 section-anchor" id="caso-esgeo">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BarChart3 className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  Nuestro propio caso: esGEO.ai
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Aplicamos nuestra propia metodología a nuestro sitio. Estos son los resultados verificables.
              </p>
            </div>

            <Card className="card-clay mb-8">
              <CardHeader>
                <CardTitle>Datos verificables de Google Search Console (3 meses)</CardTitle>
                <CardDescription>Desde diciembre 2025 a marzo 2026 — Puedes verificar nuestro posicionamiento buscando "curso de geo" en Google</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">311</div>
                    <div className="text-sm text-muted-foreground">Clics orgánicos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">6.120</div>
                    <div className="text-sm text-muted-foreground">Impresiones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">9.4</div>
                    <div className="text-sm text-muted-foreground">Posición media (GEO)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">131</div>
                    <div className="text-sm text-muted-foreground">Consultas indexadas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-clay mb-8">
              <CardHeader>
                <CardTitle>Datos de Microsoft Clarity (Usuarios reales)</CardTitle>
                <CardDescription>Usuarios que llegan desde Gemini, Claude y otros modelos de IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">+12</div>
                    <div className="text-sm text-muted-foreground">Visitantes/mes desde Gemini</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">+8</div>
                    <div className="text-sm text-muted-foreground">Visitantes/mes desde Claude</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">84/100</div>
                    <div className="text-sm text-muted-foreground">Puntuación de rendimiento</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-clay">
              <CardHeader>
                <CardTitle>Timeline de implementación GEO en esGEO.ai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                      <div className="w-1 h-12 bg-accent/30"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Junio 2025: Lanzamiento con GEO</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Implementación inicial: archivos .geo.txt, página /contenido-ia, schema.org markup, metadatos para citabilidad
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                      <div className="w-1 h-12 bg-accent/30"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Junio - Diciembre 2025: Expansión de contenido</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Creación de 25+ artículos de metodología, casos de uso, publicación de research, meta tags de citación, estructura semántica completa
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                      <div className="w-1 h-12 bg-accent/30"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Enero - Marzo 2026: Optimización y prerendering</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Optimización de funnel de compra, prerendering de contenido estático, internal linking, actualización mensual de contenido
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Presente: Resultados medibles</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        311 clics en búsqueda orgánica, 20+ visitantes mensuales desde IA, 6.120 impresiones, posicionamiento en queries de GEO
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <HighlightSnippet variant="insight" className="mt-6">
              <p className="font-medium">
                Estos datos son públicos. Puedes verificar nuestro posicionamiento buscando "curso de geo" en Google y viendo que aparecemos en posición 9 media. Usa Google Search Console para ver nuestras métricas exactas.
              </p>
            </HighlightSnippet>

            <ShareSectionButton sectionId="caso-esgeo" title="caso de esGEO.ai" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 2: La investigación académica */}
        <section className="mb-16 section-anchor" id="investigacion-academica">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  La investigación académica
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Nuestra metodología está respaldada por investigación de universidades líderes
              </p>
            </div>

            <Card className="card-clay mb-8 border-teal-100">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-3">Princeton University & Georgia Tech, 2024</Badge>
                <CardTitle>GEO: Generative Engine Optimization</CardTitle>
                <CardDescription>
                  Estudio académico que analiza cómo mejorar la visibilidad de contenido en modelos de lenguaje generativo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">+41%</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Aumento de visibilidad al añadir estadísticas verificables al contenido
                      </p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">+31.4%</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Mejora por incluir citas, referencias y fuentes verificables
                      </p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">+28%</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Incremento al incorporar citas de expertos verificables
                      </p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">3.4x</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Más citaciones para contenido actualizado en menos de 30 días
                      </p>
                    </div>
                  </div>

                  <HighlightSnippet variant="definition">
                    <p data-speakable="true">
                      <strong>Conexión a nuestro F1-F5:</strong> Cada módulo de nuestro framework implementa directamente los hallazgos de esta investigación. F1 cubre accesibilidad, F2 estructura semántica, F3-F4 autoridad y validación, F5 mantenimiento evolutivo continuo.
                    </p>
                  </HighlightSnippet>
                </div>
              </CardContent>
            </Card>

            <ShareSectionButton sectionId="investigacion-academica" title="investigación académica" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 3: La industria adopta GEO */}
        <section className="mb-16 section-anchor" id="industria-adopta">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  La industria adopta GEO
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Las herramientas más importantes del SEO están integrando métricas de GEO
              </p>
            </div>

            <div className="space-y-4">
              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">Ahrefs integra métricas de visibilidad en IA (2025)</h3>
                      <p className="text-sm text-muted-foreground">
                        La plataforma de SEO #1 ahora rastrea la citabilidad de contenido en modelos generativos como métrica crítica.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">SEMrush añade módulo de GEO a su plataforma (2025)</h3>
                      <p className="text-sm text-muted-foreground">
                        Ahora puedes medir directamente cómo aparece tu contenido en respuestas de IA desde SEMrush.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">HubSpot publica guía oficial de GEO (2026)</h3>
                      <p className="text-sm text-muted-foreground">
                        La plataforma de marketing más grande ahora recomienda GEO como parte de la estrategia de marketing digital moderna.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">Google introduce AI Overviews, cambiando las reglas</h3>
                      <p className="text-sm text-muted-foreground">
                        Los AI Overviews en Google Search están reemplazando los snippets tradicionales. GEO es ahora esencial para aparecer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <HighlightSnippet variant="insight" className="mt-8">
              <p className="font-medium">
                GEO ya no es experimental. Es un campo académico respaldado, integrado por las herramientas de SEO más importantes, y recomendado por las mayores plataformas de marketing.
              </p>
            </HighlightSnippet>

            <ShareSectionButton sectionId="industria-adopta" title="adopción industrial" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 4: Lo que decimos vs lo que hacemos */}
        <section className="mb-16 section-anchor" id="transparencia-radical">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  Lo que decimos vs lo que hacemos
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Transparencia radical: somos nuevos, pero somos honestos
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="border-red-200">
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-red-700">
                    <XCircle className="h-5 w-5" />
                    Lo que NO hacemos
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-sm">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>No fabricamos testimonios ni casos de estudio ficticios</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>No inflamos métricas ni editamos números</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>No prometemos resultados en 24 horas ni garantías imposibles</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>No vendemos sueños — vendemos metodología</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>No ocultamos que somos nuevos — 7 clientes hasta ahora</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                    <CheckCircle className="h-5 w-5" />
                    Lo que SÍ hacemos
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Documentamos cada técnica con datos reales de GSC y Clarity</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Aplicamos nuestra propia metodología a nuestro sitio</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Actualizamos contenido cada mes y documentamos cambios</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Citamos todas nuestras fuentes (Princeton, Georgia Tech, papers académicos)</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Somos honestos sobre limitaciones y nos enfocamos en resultados a largo plazo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <HighlightSnippet variant="insight">
              <p className="font-medium">
                Si buscas un curso con 500 testimonios de 5 estrellas, no somos para ti. Si buscas metodología respaldada por datos, transparencia total, y la oportunidad de formar parte de algo nuevo — sigue leyendo.
              </p>
            </HighlightSnippet>

            <ShareSectionButton sectionId="transparencia-radical" title="nuestra filosofía" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 5: Contribuye con tu caso */}
        <section className="mb-16 section-anchor" id="contribuye-casos">
          <div className="max-w-4xl mx-auto">
            <Card className="card-clay">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">Construye un caso GEO con nosotros</CardTitle>
                <CardDescription>
                  Estamos documentando implementaciones reales de nuestra metodología
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">¿Cómo funciona?</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Compra el curso GEO (€47)</li>
                      <li>Implementa la metodología F1-F5 en tu sitio</li>
                      <li>Documenta tus resultados en 2-3 meses</li>
                      <li>Comparte el caso con nosotros (con datos verificables)</li>
                      <li>Publicamos tu caso en esta página como referencia</li>
                    </ol>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Beneficios para ti:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ Credibilidad: apareces como caso verificado de éxito</li>
                      <li>✓ Exposición: tu caso llega a profesionales de SEO de toda la comunidad</li>
                      <li>✓ Validación: tu implementación contribuye al campo de GEO</li>
                    </ul>
                  </div>

                  <Button asChild className="w-full btn-cta">
                    <Link to="/curso#comprar">
                      Ver el curso GEO — €47
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <ShareSectionButton sectionId="contribuye-casos" title="programa de casos" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16 section-anchor" id="cta-final">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              La mejor prueba es tu propia implementación
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Aplica la metodología F1-F5 en tu contenido y mide los resultados tú mismo. No le creas a nuestros números, verifica los tuyos.
            </p>
            <Button asChild size="lg" className="btn-cta">
              <Link to="/curso#comprar">
                Accede al curso GEO — €47
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Acceso completo a 5 módulos + PDF guías + actualizaciones de por vida
            </p>
          </div>
          <ShareSectionButton sectionId="cta-final" title="CTA final" className="mt-6 flex justify-center" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasosRealesPage;
