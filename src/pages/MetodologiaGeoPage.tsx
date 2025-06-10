
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Home,
  ChevronRight,
  BookOpen,
  FileText,
  Search,
  Users,
  Target,
  BarChart,
  Zap,
  ArrowRight,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MetodologiaGeoPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set up anchor navigation with smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without reloading page
          history.pushState(null, '', targetId);
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);

  // Módulos F1-F6 data
  const modules = [
    {
      id: "F1",
      title: "Fundamentos GEO",
      description: "Comprende los principios básicos de optimización para IA generativa",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-500",
      topics: ["Qué es GEO", "Diferencias con SEO", "Casos de uso"],
      duration: "PT2H",
      difficulty: "Beginner"
    },
    {
      id: "F2", 
      title: "Estructura semántica",
      description: "Aprende a organizar contenido para máxima comprensión por IA",
      icon: <Search className="h-6 w-6" />,
      color: "bg-green-500",
      topics: ["Jerarquía de contenido", "Datos estructurados", "Fragmentación"],
      duration: "PT3H",
      difficulty: "Beginner"
    },
    {
      id: "F3",
      title: "Redacción citeable", 
      description: "Técnicas de escritura que favorecen la citación por modelos de lenguaje",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
      topics: ["Snippets destacados", "Formato Q&A", "Estilo Wikipedia"],
      duration: "PT4H",
      difficulty: "Intermediate"
    },
    {
      id: "F4",
      title: "Optimización técnica",
      description: "Implementación de elementos técnicos para máxima accesibilidad IA",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500", 
      topics: ["Schema markup", "Metadatos", "Estructura HTML"],
      duration: "PT3H",
      difficulty: "Intermediate"
    },
    {
      id: "F5",
      title: "Medición y análisis",
      description: "Métricas específicas para evaluar el rendimiento GEO",
      icon: <BarChart className="h-6 w-6" />,
      color: "bg-red-500",
      topics: ["KPIs GEO", "Herramientas", "Monitoreo"],
      duration: "PT2H",
      difficulty: "Intermediate"
    },
    {
      id: "F6",
      title: "Estrategia avanzada",
      description: "Tácticas avanzadas para dominar en ecosistemas de IA",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-indigo-500",
      topics: ["Link building GEO", "Contenido viral", "Escalabilidad"],
      duration: "PT5H",
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Metodología GEO | Framework F1-F6 | esGEO</title>
        <meta name="description" content="Metodología completa GEO (Generative Engine Optimization) - Aprende a optimizar tu web para ser citado por IA con nuestro Framework F1-F6." />
        <link rel="canonical" href="https://esgeo.es/metodologia" />
        
        {/* Speakable / Citation meta */}
        <meta name="citation_title" content="Metodología GEO: Framework F1-F6" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
      </Helmet>
      
      <Header />
      
      <main className="pt-8 pb-20">
        {/* Breadcrumbs - Navegación Semántica */}
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <Home className="h-3.5 w-3.5" />
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Metodología GEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Hero Section */}
        <section id="metodologia-intro" className="section-anchor py-14 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Badge variant="outline" className="text-accent border-accent">
                  Framework Completo
                </Badge>
                <ShareSectionButton 
                  sectionId="metodologia-intro" 
                  title="metodología completa" 
                  className="ml-2" 
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Metodología GEO
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Entiende los fundamentos que hacen que tu web sea citada por IA.
              </p>
              
              <HighlightSnippet id="metodologia-definicion" variant="definition" className="text-left">
                <p className="text-lg" data-speakable="true">
                  <strong>La Metodología GEO</strong> es un framework estructurado en seis módulos progresivos 
                  que permite a una web ser entendida por LLMs como una fuente fiable y estructurada. 
                  Está diseñada para optimizar contenido web específicamente para modelos de lenguaje como 
                  ChatGPT, Claude y Perplexity, maximizando la probabilidad de ser citado como referencia autoritativa.
                </p>
              </HighlightSnippet>
            </div>
          </div>
        </section>
        
        {/* Framework Visual - Diagrama Interactivo */}
        <section id="framework-visual" className="section-anchor py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  Framework Completo
                </h2>
                <ShareSectionButton 
                  sectionId="framework-visual" 
                  title="diagrama del framework" 
                />
              </div>
              
              <div className="relative bg-muted/20 rounded-xl p-6 mb-12">
                {/* SVG Framework Diagram */}
                <svg 
                  viewBox="0 0 800 300" 
                  className="w-full h-auto"
                  aria-labelledby="framework-title framework-desc"
                >
                  <title id="framework-title">Framework GEO F1-F6</title>
                  <desc id="framework-desc">Diagrama de los 6 módulos de la Metodología GEO</desc>
                  
                  {/* Conector línea */}
                  <path 
                    d="M 100 150 L 700 150" 
                    stroke="#e2e8f0" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="1 7"
                  />
                  
                  {/* Módulos círculos */}
                  <a href="#modulo-f1">
                    <circle cx="100" cy="150" r="40" fill="#3b82f6" className="cursor-pointer hover:opacity-90 transition-opacity" />
                    <text x="100" y="150" textAnchor="middle" fill="white" dy=".3em" fontWeight="bold" fontSize="18">F1</text>
                  </a>
                  
                  <a href="#modulo-f2">
                    <circle cx="240" cy="150" r="40" fill="#10b981" className="cursor-pointer hover:opacity-90 transition-opacity" />
                    <text x="240" y="150" textAnchor="middle" fill="white" dy=".3em" fontWeight="bold" fontSize="18">F2</text>
                  </a>
                  
                  <a href="#modulo-f3">
                    <circle cx="380" cy="150" r="40" fill="#8b5cf6" className="cursor-pointer hover:opacity-90 transition-opacity" />
                    <text x="380" y="150" textAnchor="middle" fill="white" dy=".3em" fontWeight="bold" fontSize="18">F3</text>
                  </a>
                  
                  <a href="#modulo-f4">
                    <circle cx="520" cy="150" r="40" fill="#f97316" className="cursor-pointer hover:opacity-90 transition-opacity" />
                    <text x="520" y="150" textAnchor="middle" fill="white" dy=".3em" fontWeight="bold" fontSize="18">F4</text>
                  </a>
                  
                  <a href="#modulo-f5">
                    <circle cx="660" cy="150" r="40" fill="#ef4444" className="cursor-pointer hover:opacity-90 transition-opacity" />
                    <text x="660" y="150" textAnchor="middle" fill="white" dy=".3em" fontWeight="bold" fontSize="18">F5</text>
                  </a>
                  
                  <a href="#modulo-f6">
                    <circle cx="700" cy="150" r="60" fill="#4f46e5" className="cursor-pointer hover:opacity-90 transition-opacity" />
                    <text x="700" y="150" textAnchor="middle" fill="white" dy=".3em" fontWeight="bold" fontSize="24">F6</text>
                  </a>
                  
                  {/* Etiquetas descriptivas */}
                  <text x="100" y="220" textAnchor="middle" fill="#0f172a" fontSize="12">Fundamentos</text>
                  <text x="240" y="220" textAnchor="middle" fill="#0f172a" fontSize="12">Estructura</text>
                  <text x="380" y="220" textAnchor="middle" fill="#0f172a" fontSize="12">Redacción</text>
                  <text x="520" y="220" textAnchor="middle" fill="#0f172a" fontSize="12">Técnica</text>
                  <text x="660" y="220" textAnchor="middle" fill="#0f172a" fontSize="12">Medición</text>
                  <text x="700" y="220" textAnchor="middle" fill="#0f172a" fontSize="12">Estrategia</text>
                  
                  <text x="400" y="50" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">Metodología GEO: Framework F1-F6</text>
                  <text x="400" y="75" textAnchor="middle" fill="#475569" fontSize="12">Haz clic en cada módulo para ver detalles</text>
                </svg>
                
                <div className="text-center text-sm text-muted-foreground mt-4">
                  <p>Diagrama interactivo del Framework GEO F1-F6. Haz clic en cada módulo para navegar a su descripción.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Módulos F1-F6 */}
        <section id="modulos" className="section-anchor py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  Módulos F1-F6
                </h2>
                <ShareSectionButton 
                  sectionId="modulos" 
                  title="módulos del framework" 
                />
              </div>
              
              <HighlightSnippet id="modulos-descripcion" variant="insight" className="mb-10">
                <p className="text-center" data-speakable="true">
                  <strong>El Framework F1-F6</strong> está diseñado como un sistema progresivo donde cada módulo 
                  construye sobre el anterior. Desde fundamentos básicos hasta estrategias avanzadas, 
                  esta estructura permite una implementación escalonada y adaptable a cualquier tipo de web.
                </p>
              </HighlightSnippet>
              
              {/* Tabs para filtrar por dificultad */}
              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="justify-center mb-6">
                  <TabsTrigger value="all">Todos los módulos</TabsTrigger>
                  <TabsTrigger value="beginner">Principiante</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermedio</TabsTrigger>
                  <TabsTrigger value="advanced">Avanzado</TabsTrigger>
                </TabsList>
                
                {/* All Modules */}
                <TabsContent value="all">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module) => (
                      <Card 
                        key={module.id} 
                        id={`modulo-${module.id.toLowerCase()}`} 
                        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 section-anchor"
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`p-3 rounded-lg ${module.color} text-white`}>
                              {module.icon}
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="font-mono font-bold">
                                {module.id}
                              </Badge>
                              <ShareSectionButton 
                                sectionId={`modulo-${module.id.toLowerCase()}`} 
                                title={`módulo ${module.id}`} 
                              />
                            </div>
                          </div>
                          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                            {module.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {module.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-4">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                {topic}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                            <span>Nivel: {module.difficulty}</span>
                            <span>Duración: {module.duration.replace('PT', '').replace('H', 'h')}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                          >
                            Explorar módulo
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Beginner Modules */}
                <TabsContent value="beginner">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules
                      .filter(module => module.difficulty === "Beginner")
                      .map((module) => (
                        <Card 
                          key={module.id} 
                          id={`modulo-${module.id.toLowerCase()}`} 
                          className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 section-anchor"
                        >
                          {/* Card Content same as above, just filtered */}
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className={`p-3 rounded-lg ${module.color} text-white`}>
                                {module.icon}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="font-mono font-bold">
                                  {module.id}
                                </Badge>
                                <ShareSectionButton 
                                  sectionId={`modulo-${module.id.toLowerCase()}`} 
                                  title={`módulo ${module.id}`} 
                                />
                              </div>
                            </div>
                            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                              {module.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {module.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 mb-4">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                              <span>Nivel: {module.difficulty}</span>
                              <span>Duración: {module.duration.replace('PT', '').replace('H', 'h')}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              variant="outline" 
                              className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                            >
                              Explorar módulo
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                {/* Intermediate Modules */}
                <TabsContent value="intermediate">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules
                      .filter(module => module.difficulty === "Intermediate")
                      .map((module) => (
                        <Card 
                          key={module.id} 
                          id={`modulo-${module.id.toLowerCase()}`} 
                          className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 section-anchor"
                        >
                          {/* Card Content same as above, just filtered */}
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className={`p-3 rounded-lg ${module.color} text-white`}>
                                {module.icon}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="font-mono font-bold">
                                  {module.id}
                                </Badge>
                                <ShareSectionButton 
                                  sectionId={`modulo-${module.id.toLowerCase()}`} 
                                  title={`módulo ${module.id}`} 
                                />
                              </div>
                            </div>
                            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                              {module.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {module.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 mb-4">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                              <span>Nivel: {module.difficulty}</span>
                              <span>Duración: {module.duration.replace('PT', '').replace('H', 'h')}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              variant="outline" 
                              className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                            >
                              Explorar módulo
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                {/* Advanced Modules */}
                <TabsContent value="advanced">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules
                      .filter(module => module.difficulty === "Advanced")
                      .map((module) => (
                        <Card 
                          key={module.id} 
                          id={`modulo-${module.id.toLowerCase()}`} 
                          className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 section-anchor"
                        >
                          {/* Card Content same as above, just filtered */}
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className={`p-3 rounded-lg ${module.color} text-white`}>
                                {module.icon}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="font-mono font-bold">
                                  {module.id}
                                </Badge>
                                <ShareSectionButton 
                                  sectionId={`modulo-${module.id.toLowerCase()}`} 
                                  title={`módulo ${module.id}`} 
                                />
                              </div>
                            </div>
                            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                              {module.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {module.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 mb-4">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                              <span>Nivel: {module.difficulty}</span>
                              <span>Duración: {module.duration.replace('PT', '').replace('H', 'h')}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              variant="outline" 
                              className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                            >
                              Explorar módulo
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="text-center mt-10">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                  Acceder al curso completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparativa SEO vs GEO */}
        <section id="comparativa" className="section-anchor py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  Comparativa: SEO vs GEO
                </h2>
                <ShareSectionButton 
                  sectionId="comparativa" 
                  title="comparativa SEO vs GEO" 
                />
              </div>
              
              <HighlightSnippet id="no-es-seo-es-geo" variant="definition" className="mb-10">
                <p className="text-center text-lg" data-speakable="true">
                  <strong>No es SEO, es GEO.</strong> Mientras que el SEO tradicional optimiza para buscadores, 
                  GEO optimiza para modelos de lenguaje. No son opuestos, sino complementarios - 
                  pero requieren técnicas específicas y métricas distintas.
                </p>
              </HighlightSnippet>
              
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Aspecto</TableHead>
                      <TableHead className="w-1/3 text-red-600">SEO Tradicional</TableHead>
                      <TableHead className="w-1/3 text-accent">GEO</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Objetivo principal</TableCell>
                      <TableCell>Ranking en SERPs</TableCell>
                      <TableCell>Citabilidad por IA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Audiencia objetivo</TableCell>
                      <TableCell>Algoritmos de búsqueda + usuarios</TableCell>
                      <TableCell>Modelos de lenguaje + IA generativa</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Factores clave</TableCell>
                      <TableCell>Keywords, backlinks, autoridad</TableCell>
                      <TableCell>Estructura, fragmentabilidad, citabilidad</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Métricas de éxito</TableCell>
                      <TableCell>Posición SERP, CTR, tráfico orgánico</TableCell>
                      <TableCell>Frecuencia de citación, precisión de citación</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Técnicas principales</TableCell>
                      <TableCell>Link building, optimización on-page</TableCell>
                      <TableCell>Estructuración semántica, fragmentación, redacción citeable</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Herramientas</TableCell>
                      <TableCell>Google Search Console, Ahrefs, SEMrush</TableCell>
                      <TableCell>Coach GEO, validadores IA, analizadores de citabilidad</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Datos estructurados</TableCell>
                      <TableCell>Para rich snippets en SERP</TableCell>
                      <TableCell>Para comprensión semántica por LLMs</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Evolución temporal</TableCell>
                      <TableCell>Modelo maduro (20+ años)</TableCell>
                      <TableCell>Modelo emergente (2023+)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="metodologia-faq" className="section-anchor py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  Preguntas frecuentes
                </h2>
                <ShareSectionButton 
                  sectionId="metodologia-faq" 
                  title="preguntas frecuentes" 
                />
              </div>
              
              <div className="space-y-6">
                <div id="faq-item-1" className="geo-card">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    ¿Cuánto tiempo se tarda en implementar toda la Metodología GEO?
                  </h3>
                  <p className="text-muted-foreground">
                    La implementación completa del Framework F1-F6 requiere aproximadamente 19 horas de formación, 
                    más el tiempo de implementación práctica en tu web. Sin embargo, cada módulo puede implementarse 
                    de forma independiente y progresiva, obteniendo resultados desde las primeras aplicaciones.
                  </p>
                </div>
                
                <div id="faq-item-2" className="geo-card">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    ¿Cuál es la diferencia entre GEO y el SEO tradicional?
                  </h3>
                  <p className="text-muted-foreground">
                    Mientras que el SEO optimiza para algoritmos de búsqueda tradicionales y usuarios humanos, 
                    GEO se centra específicamente en optimizar para modelos de lenguaje e IAs generativas. 
                    La mayor diferencia está en las técnicas de estructuración, fragmentación y citabilidad 
                    que GEO prioriza. Para una comparativa detallada, consulta nuestra <a href="#comparativa" className="text-accent hover:underline">tabla comparativa</a>.
                  </p>
                </div>
                
                <div id="faq-item-3" className="geo-card">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    ¿Cómo se mide el éxito en GEO?
                  </h3>
                  <p className="text-muted-foreground">
                    El éxito en GEO se mide principalmente por la frecuencia de citación en respuestas de IA, 
                    la precisión de las citas (si reflejan correctamente tu contenido), y la autoridad percibida 
                    por los modelos de lenguaje. El módulo F5 cubre en detalle las métricas específicas y herramientas 
                    para monitorizar el rendimiento GEO.
                  </p>
                </div>
                
                <div id="faq-item-4" className="geo-card">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    ¿Por qué necesito implementar GEO en mi web?
                  </h3>
                  <p className="text-muted-foreground">
                    Con el crecimiento exponencial del uso de asistentes IA como ChatGPT, Perplexity y Claude, 
                    cada vez más usuarios buscan información a través de estos sistemas en lugar de motores 
                    de búsqueda tradicionales. Si tu web no está optimizada para estos modelos, pierdes 
                    visibilidad y autoridad en este nuevo canal de descubrimiento de información, que ya representa 
                    un porcentaje significativo del tráfico web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contenido Relacionado */}
        <section id="contenido-relacionado" className="section-anchor py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
                Contenido relacionado
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-accent" />
                      Coach GEO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Descubre cómo nuestro asistente IA especializado puede ayudarte 
                      a implementar todas las técnicas GEO en tu web.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#coach">
                        Explorar Coach GEO
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-accent" />
                      Casos de éxito
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Revisa casos reales de webs que han implementado GEO y 
                      han multiplicado sus citaciones por modelos de lenguaje.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#casos">
                        Ver casos de éxito
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="mt-10 text-center">
                <Button asChild>
                  <a href="/">
                    Volver a inicio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Metodología GEO | Framework F1-F6",
            "description": "Metodología completa GEO (Generative Engine Optimization) - Aprende a optimizar tu web para ser citado por IA con nuestro Framework F1-F6.",
            "url": "https://esgeo.es/metodologia",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".snippet-block", "[data-speakable='true']"]
            },
            "mainEntity": {
              "@type": "Course",
              "name": "Framework F1-F6 de Generative Engine Optimization",
              "description": "Curso completo de optimización para IA generativa estructurado en seis módulos progresivos.",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F1-F6",
              "coursePrerequisites": "Conocimientos básicos de marketing digital",
              "educationalLevel": "Intermediate",
              "teaches": [
                "Optimización para IA generativa",
                "Estructura semántica para LLMs", 
                "Redacción citeable",
                "Técnicas de fragmentación",
                "Métricas GEO"
              ],
              "hasCourseInstance": modules.map((module, index) => ({
                "@type": "CourseInstance",
                "name": `${module.id} - ${module.title}`,
                "description": module.description,
                "courseMode": "online",
                "duration": module.duration
              }))
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://esgeo.es/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Metodología GEO",
                  "item": "https://esgeo.es/metodologia"
                }
              ]
            }
          })
        }} />
        
        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo se tarda en implementar toda la Metodología GEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La implementación completa del Framework F1-F6 requiere aproximadamente 19 horas de formación, más el tiempo de implementación práctica en tu web. Sin embargo, cada módulo puede implementarse de forma independiente y progresiva, obteniendo resultados desde las primeras aplicaciones."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre GEO y el SEO tradicional?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mientras que el SEO optimiza para algoritmos de búsqueda tradicionales y usuarios humanos, GEO se centra específicamente en optimizar para modelos de lenguaje e IAs generativas. La mayor diferencia está en las técnicas de estructuración, fragmentación y citabilidad que GEO prioriza."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo se mide el éxito en GEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El éxito en GEO se mide principalmente por la frecuencia de citación en respuestas de IA, la precisión de las citas (si reflejan correctamente tu contenido), y la autoridad percibida por los modelos de lenguaje. El módulo F5 cubre en detalle las métricas específicas y herramientas para monitorizar el rendimiento GEO."
                }
              },
              {
                "@type": "Question",
                "name": "¿Por qué necesito implementar GEO en mi web?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Con el crecimiento exponencial del uso de asistentes IA como ChatGPT, Perplexity y Claude, cada vez más usuarios buscan información a través de estos sistemas en lugar de motores de búsqueda tradicionales. Si tu web no está optimizada para estos modelos, pierdes visibilidad y autoridad en este nuevo canal de descubrimiento de información, que ya representa un porcentaje significativo del tráfico web."
                }
              }
            ]
          })
        }} />
        
        {/* HowTo Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cómo implementar GEO en tu web",
            "description": "Guía paso a paso para implementar Generative Engine Optimization en tu web siguiendo el Framework F1-F6.",
            "totalTime": "PT19H",
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Coach GEO"
              },
              {
                "@type": "HowToTool",
                "name": "Editor web/CMS"
              },
              {
                "@type": "HowToTool",
                "name": "Validador de citabilidad"
              }
            ],
            "step": modules.map((module, index) => ({
              "@type": "HowToStep",
              "name": `${module.id}: ${module.title}`,
              "text": module.description,
              "url": `https://esgeo.es/metodologia#modulo-${module.id.toLowerCase()}`,
              "image": {
                "@type": "ImageObject",
                "url": `https://esgeo.es/images/modulo-${module.id.toLowerCase()}.png`
              },
              "itemListElement": module.topics.map(topic => ({
                "@type": "HowToDirection",
                "text": topic
              }))
            }))
          })
        }} />
      </main>
    </div>
  );
};

export default MetodologiaGeoPage;

