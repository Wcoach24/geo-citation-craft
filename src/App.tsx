
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CursoGeoPage from "./pages/CursoGeoPage";
import CoachGeoPage from "./pages/CoachGeoPage";
import MetodologiaGeoPage from "./pages/MetodologiaGeoPage";
import CasosRealesPage from "./pages/CasosRealesPage";
import GlosarioPage from "./pages/GlosarioPage";
import RadarIAPage from "./pages/RadarIAPage";
import AcercaDePage from "./pages/AcercaDePage";
import EquipoPage from "./pages/EquipoPage";
import PrivacidadPage from "./pages/PrivacidadPage";
import TerminosPage from "./pages/TerminosPage";
import ContenidoIAPage from "./pages/ContenidoIAPage";
import NotFound from "./pages/NotFound";

// Módulos del curso
import ModuloF1Page from "./pages/modules/ModuloF1Page";
import ModuloF2Page from "./pages/modules/ModuloF2Page";
import ModuloF3Page from "./pages/modules/ModuloF3Page";
import ModuloF4Page from "./pages/modules/ModuloF4Page";
import ModuloF5Page from "./pages/modules/ModuloF5Page";
import ModuloF6Page from "./pages/modules/ModuloF6Page";

// Artículos del Radar IA
import QueSIgnificaSerCitadoPorIA from "./pages/articles/QueSIgnificaSerCitadoPorIA";
import MuerteSeoTradicional from "./pages/articles/MuerteSeoTradicional";
import EstructuraWebParaLenguaje from "./pages/articles/EstructuraWebParaLenguaje";
import FormatoWikipediaIA from "./pages/articles/FormatoWikipediaIA";
import DatosEstructuradosModelosGenerativos from "./pages/articles/DatosEstructuradosModelosGenerativos";
import GeoVsSeoGuiaRapida from "./pages/articles/GeoVsSeoGuiaRapida";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Páginas principales */}
            <Route path="/curso" element={<CursoGeoPage />} />
            <Route path="/coach" element={<CoachGeoPage />} />
            <Route path="/metodologia" element={<MetodologiaGeoPage />} />
            <Route path="/casos" element={<CasosRealesPage />} />
            <Route path="/glosario" element={<GlosarioPage />} />
            <Route path="/radar-ia" element={<RadarIAPage />} />
            <Route path="/contenido-ia" element={<ContenidoIAPage />} />
            
            {/* Información corporativa */}
            <Route path="/acerca-de" element={<AcercaDePage />} />
            <Route path="/acerca-de/equipo" element={<EquipoPage />} />
            
            {/* Páginas legales */}
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="/terminos" element={<TerminosPage />} />
            
            {/* Módulos del curso */}
            <Route path="/curso/f1" element={<ModuloF1Page />} />
            <Route path="/curso/f2" element={<ModuloF2Page />} />
            <Route path="/curso/f3" element={<ModuloF3Page />} />
            <Route path="/curso/f4" element={<ModuloF4Page />} />
            <Route path="/curso/f5" element={<ModuloF5Page />} />
            <Route path="/curso/f6" element={<ModuloF6Page />} />
            
            {/* Artículos del Radar IA */}
            <Route path="/radar-ia/que-significa-ser-citado-por-ia" element={<QueSIgnificaSerCitadoPorIA />} />
            <Route path="/radar-ia/muerte-seo-tradicional" element={<MuerteSeoTradicional />} />
            <Route path="/radar-ia/estructura-web-para-lenguaje" element={<EstructuraWebParaLenguaje />} />
            <Route path="/radar-ia/formato-wikipedia-ia" element={<FormatoWikipediaIA />} />
            <Route path="/radar-ia/datos-estructurados-modelos-generativos" element={<DatosEstructuradosModelosGenerativos />} />
            <Route path="/radar-ia/geo-vs-seo-diferencias" element={<GeoVsSeoGuiaRapida />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
