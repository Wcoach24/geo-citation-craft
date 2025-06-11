
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacidadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidad | esGEO</title>
        <meta name="description" content="Política de privacidad de esGEO. Cómo protegemos y utilizamos tu información personal en nuestra plataforma de Generative Engine Optimization." />
        <link rel="canonical" href="https://esgeo.ai/privacidad" />
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
                <BreadcrumbPage>Política de Privacidad</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <h1 className="text-4xl font-bold text-primary">Política de Privacidad</h1>
            </div>
            <p className="text-muted-foreground">Última actualización: 15 de diciembre de 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Información que recopilamos</h2>
              <p className="text-muted-foreground mb-4">
                En esGEO recopilamos únicamente la información necesaria para proporcionar nuestros servicios de Generative Engine Optimization:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Información de contacto cuando nos escribes (nombre, email)</li>
                <li>Datos de navegación anónimos para mejorar la experiencia</li>
                <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Cómo utilizamos tu información</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Responder a tus consultas sobre GEO y nuestros servicios</li>
                <li>Mejorar el contenido y la funcionalidad de nuestra plataforma</li>
                <li>Enviar actualizaciones sobre nuevos contenidos de GEO (solo si lo solicitas)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Protección de datos</h2>
              <p className="text-muted-foreground">
                Nos comprometemos a proteger tu información personal. No vendemos, alquilamos ni compartimos 
                tu información con terceros sin tu consentimiento explícito, excepto cuando sea requerido por ley.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Tus derechos</h2>
              <p className="text-muted-foreground mb-4">
                Bajo el RGPD, tienes derecho a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar información incorrecta</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Contacto</h2>
              <p className="text-muted-foreground">
                Para cualquier consulta sobre esta política de privacidad, contacta con nosotros en:{" "}
                <a href="mailto:hola@esgeo.ai" className="text-accent hover:underline">hola@esgeo.ai</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacidadPage;
