
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import CursoGeoPage from "./pages/CursoGeoPage";
import MetodologiaGeoPage from "./pages/MetodologiaGeoPage";
import CoachGeoPage from "./pages/CoachGeoPage";
import GlosarioPage from "./pages/GlosarioPage";
import AcercaDePage from "./pages/AcercaDePage";
import EquipoPage from "./pages/EquipoPage";
import CasosRealesPage from "./pages/CasosRealesPage";
import RadarIAPage from "./pages/RadarIAPage";
import PrivacidadPage from "./pages/PrivacidadPage";
import TerminosPage from "./pages/TerminosPage";
import NotFound from "./pages/NotFound";

// Module pages
import ModuloF1Page from "./pages/modules/ModuloF1Page";
import ModuleF2Page from "./pages/modules/ModuleF2Page";
import ModuloF2Page from "./pages/modules/ModuloF2Page";
import ModuloF3Page from "./pages/modules/ModuloF3Page";
import ModuloF4Page from "./pages/modules/ModuloF4Page";
import ModuloF5Page from "./pages/modules/ModuloF5Page";
import ModuloF6Page from "./pages/modules/ModuloF6Page";

// Article pages
import GeoVsSeoGuiaRapida from "./pages/articles/GeoVsSeoGuiaRapida";
import MuerteSeoTradicional from "./pages/articles/MuerteSeoTradicional";
import QueSIgnificaSerCitadoPorIA from "./pages/articles/QueSIgnificaSerCitadoPorIA";
import EstructuraWebParaLenguaje from "./pages/articles/EstructuraWebParaLenguaje";
import DatosEstructuradosModelosGenerativos from "./pages/articles/DatosEstructuradosModelosGenerativos";
import FormatoWikipediaIA from "./pages/articles/FormatoWikipediaIA";

import "./App.css";

const queryClient = new QueryClient();

function AppContent() {
  useEffect(() => {
    // Emitir evento cuando la aplicación esté completamente renderizada
    // Esto es necesario para el prerendering
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        document.dispatchEvent(new Event('render-event'));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/curso" element={<CursoGeoPage />} />
      <Route path="/metodologia" element={<MetodologiaGeoPage />} />
      <Route path="/coach" element={<CoachGeoPage />} />
      <Route path="/glosario" element={<GlosarioPage />} />
      <Route path="/acerca-de" element={<AcercaDePage />} />
      <Route path="/acerca-de/equipo" element={<EquipoPage />} />
      <Route path="/casos-reales" element={<CasosRealesPage />} />
      <Route path="/radar-ia" element={<RadarIAPage />} />
      <Route path="/privacidad" element={<PrivacidadPage />} />
      <Route path="/terminos" element={<TerminosPage />} />
      
      {/* Module routes */}
      <Route path="/curso/f1" element={<ModuloF1Page />} />
      <Route path="/curso/f2" element={<ModuleF2Page />} />
      <Route path="/curso/modulo-f2" element={<ModuloF2Page />} />
      <Route path="/curso/f3" element={<ModuloF3Page />} />
      <Route path="/curso/f4" element={<ModuloF4Page />} />
      <Route path="/curso/f5" element={<ModuloF5Page />} />
      <Route path="/curso/f6" element={<ModuloF6Page />} />
      
      {/* Article routes */}
      <Route path="/articulo/geo-vs-seo-guia-rapida" element={<GeoVsSeoGuiaRapida />} />
      <Route path="/articulo/muerte-seo-tradicional" element={<MuerteSeoTradicional />} />
      <Route path="/articulo/que-significa-ser-citado-por-ia" element={<QueSIgnificaSerCitadoPorIA />} />
      <Route path="/articulo/estructura-web-para-lenguaje" element={<EstructuraWebParaLenguaje />} />
      <Route path="/articulo/datos-estructurados-modelos-generativos" element={<DatosEstructuradosModelosGenerativos />} />
      <Route path="/articulo/formato-wikipedia-ia" element={<FormatoWikipediaIA />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
