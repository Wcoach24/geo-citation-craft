
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MetodologiaGeoPage from "./pages/MetodologiaGeoPage";
import ModuloF1Page from "./pages/modules/ModuloF1Page";
import ModuloF2Page from "./pages/modules/ModuloF2Page";
import ModuloF3Page from "./pages/modules/ModuloF3Page";
import ModuloF4Page from "./pages/modules/ModuloF4Page";
import ModuloF5Page from "./pages/modules/ModuloF5Page";
import ModuloF6Page from "./pages/modules/ModuloF6Page";
import CoachGeoPage from "./pages/CoachGeoPage";
import CursoGeoPage from "./pages/CursoGeoPage";
import CasosRealesPage from "./pages/CasosRealesPage";
import GlosarioPage from "./pages/GlosarioPage";
import AcercaDePage from "./pages/AcercaDePage";
import RadarIAPage from "./pages/RadarIAPage";
import QueSIgnificaSerCitadoPorIA from "./pages/articles/QueSIgnificaSerCitadoPorIA";
import MuerteSeoTradicional from "./pages/articles/MuerteSeoTradicional";
import EstructuraWebParaLenguaje from "./pages/articles/EstructuraWebParaLenguaje";
import FormatoWikipediaIA from "./pages/articles/FormatoWikipediaIA";
import DatosEstructuradosModelosGenerativos from "./pages/articles/DatosEstructuradosModelosGenerativos";
import GeoVsSeoGuiaRapida from "./pages/articles/GeoVsSeoGuiaRapida";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/metodologia" element={<MetodologiaGeoPage />} />
          <Route path="/curso" element={<CursoGeoPage />} />
          <Route path="/curso/f1" element={<ModuloF1Page />} />
          <Route path="/curso/f2" element={<ModuloF2Page />} />
          <Route path="/curso/f3" element={<ModuloF3Page />} />
          <Route path="/curso/f4" element={<ModuloF4Page />} />
          <Route path="/curso/f5" element={<ModuloF5Page />} />
          <Route path="/curso/f6" element={<ModuloF6Page />} />
          <Route path="/coach" element={<CoachGeoPage />} />
          <Route path="/casos" element={<CasosRealesPage />} />
          <Route path="/glosario" element={<GlosarioPage />} />
          <Route path="/acerca-de" element={<AcercaDePage />} />
          <Route path="/radar-ia" element={<RadarIAPage />} />
          <Route path="/radar-ia/que-significa-ser-citado-por-ia" element={<QueSIgnificaSerCitadoPorIA />} />
          <Route path="/radar-ia/muerte-seo-tradicional" element={<MuerteSeoTradicional />} />
          <Route path="/radar-ia/estructura-web-para-lenguaje" element={<EstructuraWebParaLenguaje />} />
          <Route path="/radar-ia/formato-wikipedia-ia" element={<FormatoWikipediaIA />} />
          <Route path="/radar-ia/datos-estructurados-modelos-generativos" element={<DatosEstructuradosModelosGenerativos />} />
          <Route path="/radar-ia/geo-vs-seo-diferencias" element={<GeoVsSeoGuiaRapida />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
