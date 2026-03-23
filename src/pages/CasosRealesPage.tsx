import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Shield, Globe, Zap, Search, ArrowRight, Sparkles, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const CasosRealesPage = () => {
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
              <BreadcrumbPage>Por qué funciona</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <section className="mb-16 section-anchor" id="por-que-existe">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Primer curso GEO en español</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              GEO no es una moda. Es la evolución del SEO.
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              En 2024, Princeton y Georgia Tech publicaron la investigación fundacional sobre cómo optimizar contenido para motores generativos. esGEO fue el primer curso en sistematizar esos hallazgos en español.
            </p>
            <p className="text-base text-muted-foreground">
              No somos una gran plataforma. Somos profesionales del SEO que vimos el cambio antes que la mayoría y decidimos documentar todo lo que aprendimos.
            </p>
          </div>
          <ShareSectionButton sectionId="por-que-existe" title="por qué funciona GEO" className="mt-4 flex justify-center" />
        </section>

        {/* Section 1: Respaldo académico */}
        <section className="mb-16 section-anchor" id="investigacion-academica">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  Respaldado por investigación de nivel mundial
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Nuestra metodología no se basa en opiniones. Se basa en datos publicados por dos de las universidades más prestigiosas del mundo.
              </p>
            </div>

            <Card className="card-clay mb-8 border-teal-100">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-3">Princeton University &amp; Georgia Tech, 2024</Badge>
                <CardTitle>Paper: &quot;GEO: Generative Engine Optimization&quot;</CardTitle>
                <CardDescription>
                  El estudio que definió las reglas del juego para aparecer en respuestas de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">+41%</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        de visibilidad en IA al incluir estadísticas verificables en el contenido
                      </p>
                    </div>
                    <div className="p-5 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">+31.4%</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        de citaciones al añadir referencias y fuentes verificables
                      </p>
                    </div>
                    <div className="p-5 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">+28%</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        de menciones al incluir citas de expertos reconocidos
                      </p>
                    </div>
                    <div className="p-5 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">3.4x</div>
                      <p className="text-sm text-muted-foreground font-medium">
                        más citaciones para contenido actualizado en los últimos 30 días
                      </p>
                    </div>
                  </div>

                  <HighlightSnippet variant="definition">
                    <p data-speakable="true">
                      <strong>Cada módulo F1-F5 implementa directamente estos hallazgos.</strong> F1 cubre accesibilidad técnica, F2 estructura semántica, F3 autoridad verificable, F4 validación conversacional, y F5 el mantenimiento que consigue ese 3.4x.
                    </p>
                  </HighlightSnippet>
                </div>
              </CardContent>
            </Card>

            <ShareSectionButton sectionId="investigacion-academica" title="investigación académica" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 2: La industria ya adoptó GEO */}
        <section className="mb-16 section-anchor" id="industria-adopta">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  Las herramientas que ya usas están adoptando GEO
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                La pregunta ya no es si GEO importa. Es cuándo empiezas tú.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">Ahrefs integra métricas de visibilidad en IA</h3>
                      <p className="text-sm text-muted-foreground">
                        La plataforma de SEO #1 del mundo ahora rastrea la citabilidad de tu contenido en modelos generativos como métrica crítica de rendimiento.
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
                      <h3 className="font-semibold text-primary mb-1">SEMrush añade módulo completo de GEO</h3>
                      <p className="text-sm text-muted-foreground">
                        Puedes medir directamente cómo aparece tu contenido en respuestas de ChatGPT, Gemini y Perplexity desde SEMrush.
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
                      <h3 className="font-semibold text-primary mb-1">HubSpot publica guía oficial de GEO</h3>
                      <p className="text-sm text-muted-foreground">
                        La plataforma de marketing más grande del mundo recomienda GEO como parte esencial de cualquier estrategia digital moderna.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">Google AI Overviews cambia las reglas del juego</h3>
                      <p className="text-sm text-muted-foreground">
                        Los AI Overviews están reemplazando los snippets tradicionales en los resultados de Google. Si tu contenido no está optimizado para IA, estás perdiendo visibilidad cada día.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ShareSectionButton sectionId="industria-adopta" title="adopción de GEO en la industria" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 3: Compruébalo tú mismo */}
        <section className="mb-16 section-anchor" id="compruebalo">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Search className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  No nos creas. Compruébalo tú mismo.
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Cada una de estas afirmaciones es verificable en menos de 30 segundos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Search className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Busca &quot;curso de GEO&quot; en Google</h3>
                      <p className="text-sm text-muted-foreground">
                        Estamos en la primera página. No porque lo digamos nosotros — porque aplicamos nuestra propia metodología.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Pregunta a Gemini o ChatGPT por cursos GEO en español</h3>
                      <p className="text-sm text-muted-foreground">
                        Las IAs nos mencionan porque nuestro contenido está optimizado exactamente con lo que enseñamos en el curso.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Revisa nuestro código fuente</h3>
                      <p className="text-sm text-muted-foreground">
                        Archivos .geo.txt, schema.org, meta tags de citación, página /contenido-ia. Todo lo que enseñamos, lo implementamos primero aquí.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-clay">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Busca &quot;GEO optimization&quot; en Ahrefs o SEMrush</h3>
                      <p className="text-sm text-muted-foreground">
                        Verás que estas herramientas ya están construyendo funcionalidades completas alrededor de esta disciplina.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <HighlightSnippet variant="insight">
              <p className="font-medium">
                Lo que enseñamos, lo practicamos. Este sitio es nuestro propio laboratorio de GEO. Cada técnica del framework F1-F5 está implementada aquí antes de enseñarla.
              </p>
            </HighlightSnippet>

            <ShareSectionButton sectionId="compruebalo" title="pruebas verificables" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Section 4: Transparencia */}
        <section className="mb-16 section-anchor" id="transparencia">
          <div className="max-w-4xl mx-auto">
            <Card className="card-clay border-accent/20">
              <CardHeader className="text-center">
                <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">Nuestra filosofía: transparencia radical</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-muted-foreground">
                  Lanzamos en 2025. No somos una plataforma masiva — somos profesionales que vimos el cambio hacia motores generativos antes que la mayoría y decidimos crear el recurso que nos habría gustado tener.
                </p>
                <p className="text-muted-foreground">
                  No fabricamos testimonios. No inflamos números. Cada afirmación en esta página es verificable por ti en menos de un minuto.
                </p>
                <div className="pt-4">
                  <p className="text-sm font-medium text-primary">
                    La mejor prueba de que GEO funciona es que estás leyendo esto — probablemente porque Google o una IA te trajo aquí.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ShareSectionButton sectionId="transparencia" title="nuestra filosofía" className="mt-6 flex justify-center" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16 section-anchor" id="cta-final">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Domina GEO antes que tu competencia
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              La ventana de oportunidad es ahora. Los que implementen GEO primero dominarán las respuestas de IA en su nicho.
            </p>
            <Button asChild size="lg" className="btn-cta">
              <Link to="/curso#comprar">
                Quiero dominar GEO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              5 módulos + guías PDF profesionales + actualizaciones de por vida
            </p>
          </div>
          <ShareSectionButton sectionId="cta-final" title="dominar GEO" className="mt-6 flex justify-center" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasosRealesPage;
