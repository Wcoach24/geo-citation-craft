
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TerminosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Términos y Condiciones | esGEO</title>
        <meta name="description" content="Términos y condiciones de uso de esGEO. Condiciones para el acceso y uso de nuestra plataforma de Generative Engine Optimization." />
        <link rel="canonical" href="https://esgeo.ai/terminos" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
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
                <BreadcrumbPage>Términos y Condiciones</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-accent" />
              <h1 className="text-4xl font-bold text-primary">Términos y Condiciones</h1>
            </div>
            <p className="text-muted-foreground">Última actualización: 15 de diciembre de 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Aceptación de términos</h2>
              <p className="text-muted-foreground">
                Al acceder y utilizar esGEO (https://esgeo.ai), aceptas cumplir con estos términos y condiciones. 
                Si no estás de acuerdo con algún aspecto de estos términos, te pedimos que no utilices nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Descripción del servicio</h2>
              <p className="text-muted-foreground mb-4">
                esGEO es una plataforma educativa especializada en Generative Engine Optimization (GEO) que ofrece:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Metodología completa F1-F6 para optimización GEO</li>
                <li>Contenido educativo sobre optimización para LLMs</li>
                <li>Herramientas y recursos para mejorar la citabilidad por IA</li>
                <li>Casos de estudio y análisis del sector</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Uso permitido</h2>
              <p className="text-muted-foreground mb-4">
                Puedes utilizar nuestro contenido para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Aprendizaje personal sobre GEO y optimización para IA</li>
                <li>Implementación de técnicas GEO en tus propios proyectos</li>
                <li>Compartir enlaces a nuestros recursos (con atribución)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Limitaciones de uso</h2>
              <p className="text-muted-foreground mb-4">
                Está prohibido:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Copiar o redistribuir nuestro contenido sin autorización</li>
                <li>Utilizar nuestros materiales con fines comerciales sin permiso</li>
                <li>Interferir con el funcionamiento del sitio web</li>
                <li>Utilizar el sitio para actividades ilegales o no éticas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Propiedad intelectual</h2>
              <p className="text-muted-foreground">
                Todo el contenido de esGEO, incluyendo pero no limitado a textos, metodologías, diseños y códigos, 
                es propiedad de esGEO y está protegido por las leyes de propiedad intelectual aplicables.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitación de responsabilidad</h2>
              <p className="text-muted-foreground">
                El contenido de esGEO se proporciona "tal como está" con fines educativos. No garantizamos 
                resultados específicos de la implementación de nuestras metodologías GEO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contacto</h2>
              <p className="text-muted-foreground">
                Para consultas sobre estos términos, contacta con nosotros en:{" "}
                <a href="mailto:hola@esgeo.ai" className="text-accent hover:underline">hola@esgeo.ai</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TerminosPage;
