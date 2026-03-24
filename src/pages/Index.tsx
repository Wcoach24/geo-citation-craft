
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
import TableOfContents from "@/components/TableOfContents";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const Index = () => {
  const { helmet, structuredData } = useGeoMetadata({
    title: "Curso GEO: Aprende Generative Engine Optimization en Español | esGEO",
    description: "Aprende GEO (Generative Engine Optimization) con el primer curso en español. Metodología F1-F5 para que ChatGPT, Perplexity y Claude citen tu web. Desde €47.",
    canonicalUrl: "https://esgeo.ai/",
    keywords: ["curso GEO", "Generative Engine Optimization", "qué es GEO", "GEO vs SEO", "optimización IA", "ChatGPT", "Perplexity", "Claude", "curso geo ia"],
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

          <SocialProofSection />
          
          {/* Metodología con módulos */}
          <MethodologySection />
          
          {/* Pricing */}
          <PricingSection />

          {/* Casos reales como evidencia */}
          <CasosDestacadosSection />
          
          {/* Transparencia después del pitch */}
          <LimitationsSection />

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
