
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; 
import WhatIsGeoSection from "@/components/WhatIsGeoSection";
import MethodologySection from "@/components/MethodologySection";
import CasosDestacadosSection from "@/components/CasosDestacadosSection";
import CoachSection from "@/components/CoachSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsGeoSection />
        <MethodologySection />
        <CasosDestacadosSection />
        <CoachSection />
      </main>
    </div>
  );
};

export default Index;
