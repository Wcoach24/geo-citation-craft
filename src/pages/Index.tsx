
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection"; 
import WhatIsGeoSection from "@/components/WhatIsGeoSection";
import MethodologySection from "@/components/MethodologySection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import CasosDestacadosSection from "@/components/CasosDestacadosSection";
import CoachSection from "@/components/CoachSection";
import CtaSection from "@/components/CtaSection";
import InlineEmailCapture from "@/components/InlineEmailCapture";
import TableOfContents from "@/components/TableOfContents";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const Index = () => {
  const { helmet, structuredData } = useGeoMetadata({
    title: "esGEO - Optimiza para ser citado por la IA",
    description: "La primera plataforma en español centrada en enseñar cómo estructurar y redactar webs para que los modelos de lenguaje como ChatGPT, Perplexity o Claude las comprendan, recomienden y citen.",
    canonicalUrl: "https://esgeo.ai/",
    keywords: ["GEO", "Generative Engine Optimization", "IA", "ChatGPT", "Perplexity", "Claude", "optimización", "contenido"],
    citationTitle: "esGEO - Metodología de Optimización para IA Generativa",
    speakableSelectors: [".snippet-block", "[data-speakable='true']", ".geo-card"],
    geoTxtPath: "/home.geo.txt"
  });

  return (
    <>
      {helmet}
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main role="main">
          <HeroSection />
          
          {/* Lead Capture después del Hero */}
          <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <InlineEmailCapture
                title="Guía Gratuita: Los 10 Errores que Impiden ser Citado por IA"
                description="Descarga nuestra checklist exclusiva y evita los errores más comunes en GEO"
                leadMagnet="Guía de Errores GEO"
                className="max-w-2xl mx-auto"
              />
            </div>
          </section>

          <WhatIsGeoSection />
          
          {/* Social Proof después de explicar qué es GEO */}
          <SocialProofSection />
          
          <MethodologySection />
          
          {/* Lead Capture después de metodología */}
          <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <InlineEmailCapture
                title="Plantilla de Auditoría GEO Gratuita"
                description="Evalúa tu web con nuestra plantilla profesional de 50+ puntos"
                leadMagnet="Plantilla de Auditoría"
                className="max-w-2xl mx-auto"
              />
            </div>
          </section>
          
          <PricingSection />
          <CasosDestacadosSection />
          <CoachSection />
          <CtaSection />
        </main>

        {/* Tabla de contenidos flotante para páginas largas */}
        <aside className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64 z-10">
          <TableOfContents />
        </aside>

        <Footer />

        {/* Datos estructurados para la página principal */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Datos estructurados adicionales para HomePage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://esgeo.ai#webpage",
            "url": "https://esgeo.ai",
            "name": "esGEO - Optimiza para ser citado por la IA",
            "description": "La primera plataforma en español centrada en enseñar cómo estructurar y redactar webs para que los modelos de lenguaje como ChatGPT, Perplexity o Claude las comprendan, recomienden y citen.",
            "inLanguage": "es-ES",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://esgeo.ai#website"
            },
            "about": {
              "@type": "Thing",
              "name": "Generative Engine Optimization",
              "description": "Metodología de optimización para modelos de lenguaje generativo"
            },
            "lastReviewed": "2025-06-12T10:00:00Z",
            "reviewedBy": {
              "@type": "Organization",
              "@id": "https://esgeo.ai#organization"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".snippet-block", "[data-speakable='true']", ".geo-card"]
            },
            "associatedMedia": {
              "@type": "MediaObject",
              "contentUrl": "https://esgeo.ai/home.geo.txt",
              "encodingFormat": "text/plain",
              "description": "Versión citable para modelos de lenguaje - Definición autoritativa de GEO"
            }
          })}
        </script>
      </div>
    </>
  );
};

export default Index;
