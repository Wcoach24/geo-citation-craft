
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Users, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EquipoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: "fundador-esgeo",
      name: "Fundador esGEO",
      role: "CEO & GEO Strategist",
      description: "Pionero en Generative Engine Optimization en España. Experto en optimización para LLMs con más de 15 años de experiencia en SEO y marketing digital.",
      knowsAbout: ["Generative Engine Optimization", "SEO Técnico", "Datos Estructurados", "Optimización para LLMs", "Marketing Digital"],
      image: "https://esgeo.ai/images/equipo/fundador.jpg",
      email: "fundador@esgeo.ai",
      twitter: "https://twitter.com/esgeo_founder",
      linkedin: "https://linkedin.com/in/esgeo-founder"
    },
    {
      id: "directora-contenido",
      name: "Directora de Contenido GEO",
      role: "Content Strategy Director",
      description: "Especialista en redacción citeable y estructura semántica. Lidera la creación de contenido optimizado para ser comprendido por modelos de lenguaje generativos.",
      knowsAbout: ["Redacción Citeable", "Estructura Semántica", "Content Strategy", "Copywriting GEO", "Schema.org"],
      image: "https://esgeo.ai/images/equipo/directora-contenido.jpg",
      email: "contenido@esgeo.ai",
      linkedin: "https://linkedin.com/in/directora-contenido-esgeo"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nuestro Equipo | Expertos en GEO | esGEO</title>
        <meta name="description" content="Conoce al equipo de expertos en Generative Engine Optimization de esGEO. Pioneros en optimización para LLMs y citabilidad por IA en España." />
        <link rel="canonical" href="https://esgeo.ai/acerca-de/equipo" />
        
        <meta name="citation_title" content="Equipo esGEO: Expertos en Generative Engine Optimization" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="equipo GEO, expertos optimización IA, especialistas LLMs, fundadores esGEO" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
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
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/acerca-de">Acerca de</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Nuestro Equipo</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              <Users className="h-4 w-4 mr-2" />
              Nuestro Equipo
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Expertos en GEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneros en Generative Engine Optimization en España
            </p>
          </div>

          {/* Introduction */}
          <HighlightSnippet id="introduccion-equipo" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Quiénes somos?</h2>
              <ShareSectionButton sectionId="introduccion-equipo" title="introducción del equipo" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Somos el primer equipo de especialistas en Generative Engine Optimization en España, dedicados a enseñar y desarrollar metodologías para que el contenido web sea citado por modelos de lenguaje generativos.</strong> 
              Nuestro equipo combina experiencia en SEO tradicional, desarrollo web y comprensión profunda de cómo funcionan los LLMs para crear la metodología GEO más avanzada en español.
            </p>
          </HighlightSnippet>

          {/* Team Members */}
          <section id="miembros-equipo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Miembros del Equipo</h2>
              <ShareSectionButton sectionId="miembros-equipo" title="miembros del equipo" />
            </div>
            
            <div className="grid gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} id={member.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">{member.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary mb-2">{member.name}</CardTitle>
                        <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                        <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Áreas de Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.knowsAbout.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contactar
                      </a>
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Structured Data for Team */}
          {teamMembers.map((member) => (
            <script key={`schema-${member.id}`} type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": `https://esgeo.ai/acerca-de/equipo#${member.id}`,
                "name": member.name,
                "url": `https://esgeo.ai/acerca-de/equipo#${member.id}`,
                "image": member.image,
                "jobTitle": member.role,
                "description": member.description,
                "worksFor": {
                  "@type": "Organization",
                  "@id": "https://esgeo.ai#organization",
                  "name": "esGEO"
                },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": member.role,
                  "skills": member.knowsAbout
                },
                "knowsAbout": member.knowsAbout,
                "email": member.email,
                "sameAs": [member.twitter, member.linkedin].filter(Boolean)
              })}
            </script>
          ))}

          {/* Page Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Nuestro Equipo - esGEO",
              "description": "Conoce al equipo de expertos en Generative Engine Optimization de esGEO",
              "url": "https://esgeo.ai/acerca-de/equipo",
              "mainEntity": {
                "@type": "Organization",
                "@id": "https://esgeo.ai#organization"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Inicio",
                    "item": "https://esgeo.ai"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Acerca de",
                    "item": "https://esgeo.ai/acerca-de"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Nuestro Equipo",
                    "item": "https://esgeo.ai/acerca-de/equipo"
                  }
                ]
              }
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default EquipoPage;
