
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AcercaDePage = () => {
  const teamMembers = [
    {
      name: "Equipo esGEO",
      role: "Especialistas en Optimización para IA",
      bio: "Pioneros en el desarrollo de metodologías específicas para optimización de contenido dirigido a modelos de lenguaje generativo.",
      expertise: ["Ingeniería de Prompts", "Datos Estructurados", "Análisis de Citabilidad", "Investigación en IA"]
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Nacimiento de GEO",
      description: "Desarrollo de la primera metodología sistemática para optimización de contenido específicamente para modelos generativos."
    },
    {
      year: "2024",
      title: "Framework F1-F6",
      description: "Creación del framework modular que abarca desde fundamentos hasta métricas avanzadas de citabilidad."
    },
    {
      year: "2024",
      title: "Primeros Casos Documentados",
      description: "Demostración práctica de citabilidad por parte de ChatGPT, Claude y Perplexity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Acerca de</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-12 section-anchor" id="header-acerca">
          <Users className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Acerca de esGEO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneros en la optimización de contenido para la era de la inteligencia artificial generativa
          </p>
          <ShareSectionButton sectionId="header-acerca" title="página acerca de esGEO" className="mt-4" />
        </div>

        {/* Mission */}
        <section id="mision-esgeo" className="mb-16 section-anchor">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-accent mx-auto mb-2" />
                  <CardTitle>Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Democratizar el acceso a técnicas de optimización para que cualquier creador de contenido 
                    pueda ser citado por modelos de IA generativa.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-accent mx-auto mb-2" />
                  <CardTitle>Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ser la referencia mundial en metodologías de optimización para modelos generativos, 
                    estableciendo los estándares de la industria.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                  <CardTitle>Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transparencia, rigor científico, accesibilidad y compromiso con la democratización 
                    del conocimiento en IA.
                  </p>
                </CardContent>
              </Card>
            </div>

            <HighlightSnippet id="proposito-esgeo" variant="insight">
              <p className="text-lg" data-speakable="true">
                esGEO nace de la necesidad de adaptar las estrategias de contenido a una nueva realidad: 
                los usuarios consultan directamente a la IA en lugar de navegar por múltiples sitios web.
              </p>
            </HighlightSnippet>
            
            <ShareSectionButton sectionId="mision-esgeo" title="misión y visión" className="mt-4" />
          </div>
        </section>

        {/* Why GEO Matters */}
        <section id="importancia-geo" className="mb-16 section-anchor">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
              ¿Por qué importa GEO?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                En la nueva economía de la atención, ser citado por un modelo de IA equivale a estar 
                en la primera posición de búsqueda tradicional. Sin embargo, los algoritmos de 
                citabilidad de los LLMs operan con criterios diferentes a los motores de búsqueda convencionales.
              </p>
              <p>
                Mientras que el SEO tradicional se enfoca en rankings y tráfico, GEO se centra en la 
                comprensibilidad, procesabilidad y citabilidad del contenido por parte de sistemas de IA.
              </p>
            </div>

            <HighlightSnippet id="diferencia-seo-geo" variant="definition">
              <p data-speakable="true">
                <strong>Diferencia clave:</strong> El SEO optimiza para algoritmos de ranking, 
                GEO optimiza para algoritmos de comprensión y citación de modelos generativos.
              </p>
            </HighlightSnippet>
            
            <ShareSectionButton sectionId="importancia-geo" title="importancia de GEO" className="mt-4" />
          </div>
        </section>

        {/* Team */}
        <section id="equipo-esgeo" className="mb-16 section-anchor">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
              Nuestro Equipo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div>
                      <p className="font-medium text-foreground mb-2">Áreas de especialización:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <ShareSectionButton sectionId="equipo-esgeo" title="equipo de esGEO" className="mt-6" />
          </div>
        </section>

        {/* Timeline */}
        <section id="historia-esgeo" className="mb-16 section-anchor">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
              Nuestra Historia
            </h2>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <ShareSectionButton sectionId="historia-esgeo" title="historia de esGEO" className="mt-6" />
          </div>
        </section>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Acerca de esGEO",
              "description": "Información sobre esGEO, pioneros en optimización de contenido para modelos de IA generativa",
              "mainEntity": {
                "@type": "Organization",
                "name": "esGEO",
                "description": "Especialistas en Generative Engine Optimization (GEO)",
                "url": "https://esgeo.com",
                "foundingDate": "2024",
                "specialty": "Optimización de contenido para modelos de lenguaje generativo"
              }
            })
          }}
        />
      </main>
    </div>
  );
};

export default AcercaDePage;
