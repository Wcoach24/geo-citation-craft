
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection"; 
import WhatIsGeoSection from "@/components/WhatIsGeoSection";
import MethodologySection from "@/components/MethodologySection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import CasosDestacadosSection from "@/components/CasosDestacadosSection";
import LimitationsSection from "@/components/LimitationsSection";

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

          <WhatIsGeoSection />
          
          {/* Nuestro caso como evidencia de autoridad temprana */}
          <CasosDestacadosSection />
          
          {/* Social Proof temprano para generar confianza */}
          <SocialProofSection />
          
          {/* Transparencia sobre limitaciones */}
          <LimitationsSection />
          
          {/* Pricing simplificado por módulos */}
          <PricingSection />
          
          <MethodologySection />
          <CtaSection />
        </main>

        {/* Tabla de contenidos flotante para páginas largas */}
        <aside className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64 z-10">
          <TableOfContents />
        </aside>

        <Footer />

        {/* Structured data consolidated in index.html @graph - no duplicates */}
      </div>
    </>
  );
};

export default Index;
