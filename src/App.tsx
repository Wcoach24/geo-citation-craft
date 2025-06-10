
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MetodologiaGeoPage from "./pages/MetodologiaGeoPage";
import CoachGeoPage from "./pages/CoachGeoPage";
import CursoGeoPage from "./pages/CursoGeoPage";
import CasosRealesPage from "./pages/CasosRealesPage";
import GlosarioPage from "./pages/GlosarioPage";
import AcercaDePage from "./pages/AcercaDePage";
import RadarIAPage from "./pages/RadarIAPage";
import QueSIgnificaSerCitadoPorIA from "./pages/articles/QueSIgnificaSerCitadoPorIA";

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
          <Route path="/coach" element={<CoachGeoPage />} />
          <Route path="/curso" element={<CursoGeoPage />} />
          <Route path="/casos" element={<CasosRealesPage />} />
          <Route path="/glosario" element={<GlosarioPage />} />
          <Route path="/acerca-de" element={<AcercaDePage />} />
          <Route path="/radar-ia" element={<RadarIAPage />} />
          <Route path="/radar-ia/que-significa-ser-citado-por-ia" element={<QueSIgnificaSerCitadoPorIA />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
