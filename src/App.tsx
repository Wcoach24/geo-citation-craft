
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import React, { Suspense } from "react";
import Index from "./pages/Index";

// Lazy-loaded pages
const CursoGeoPage = React.lazy(() => import("./pages/CursoGeoPage"));
const MetodologiaGeoPage = React.lazy(() => import("./pages/MetodologiaGeoPage"));
const CasosRealesPage = React.lazy(() => import("./pages/CasosRealesPage"));
const GlosarioPage = React.lazy(() => import("./pages/GlosarioPage"));
const RadarIAPage = React.lazy(() => import("./pages/RadarIAPage"));
const AcercaDePage = React.lazy(() => import("./pages/AcercaDePage"));
const EquipoPage = React.lazy(() => import("./pages/EquipoPage"));
const PrivacidadPage = React.lazy(() => import("./pages/PrivacidadPage"));
const TerminosPage = React.lazy(() => import("./pages/TerminosPage"));
const ContenidoIAPage = React.lazy(() => import("./pages/ContenidoIAPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const PurchaseSuccessPage = React.lazy(() => import("./pages/PurchaseSuccessPage"));
const GuestAccessPage = React.lazy(() => import("./pages/GuestAccessPage"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Módulos del curso
const ModuloF0Page = React.lazy(() => import("./pages/modules/ModuloF0Page"));
const ModuloF1Page = React.lazy(() => import("./pages/modules/ModuloF1Page"));
const ModuloF2Page = React.lazy(() => import("./pages/modules/ModuloF2Page"));
const ModuloF3Page = React.lazy(() => import("./pages/modules/ModuloF3Page"));
const ModuloF4Page = React.lazy(() => import("./pages/modules/ModuloF4Page"));
const ModuloF5Page = React.lazy(() => import("./pages/modules/ModuloF5Page"));
const ModuloF6Page = React.lazy(() => import("./pages/modules/ModuloF6Page"));

// Artículos del Radar IA
const QueSIgnificaSerCitadoPorIA = React.lazy(() => import("./pages/articles/QueSIgnificaSerCitadoPorIA"));
const MuerteSeoTradicional = React.lazy(() => import("./pages/articles/MuerteSeoTradicional"));
const EstructuraWebParaLenguaje = React.lazy(() => import("./pages/articles/EstructuraWebParaLenguaje"));
const FormatoWikipediaIA = React.lazy(() => import("./pages/articles/FormatoWikipediaIA"));
const DatosEstructuradosModelosGenerativos = React.lazy(() => import("./pages/articles/DatosEstructuradosModelosGenerativos"));
const GeoVsSeoGuiaRapida = React.lazy(() => import("./pages/articles/GeoVsSeoGuiaRapida"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Páginas principales */}
              <Route path="/curso" element={<CursoGeoPage />} />
              <Route path="/coach" element={<Navigate to="/metodologia" replace />} />
              <Route path="/metodologia" element={<MetodologiaGeoPage />} />
              <Route path="/casos" element={<CasosRealesPage />} />
              <Route path="/casos-reales" element={<CasosRealesPage />} />
              <Route path="/glosario" element={<GlosarioPage />} />
              <Route path="/radar-ia" element={<RadarIAPage />} />
              <Route path="/contenido-ia" element={<ContenidoIAPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/success" element={<PurchaseSuccessPage />} />
              <Route path="/guest-access" element={<GuestAccessPage />} />
              <Route path="/auth" element={<AuthPage />} />
              
              {/* Información corporativa */}
              <Route path="/acerca-de" element={<AcercaDePage />} />
              <Route path="/acerca-de/equipo" element={<EquipoPage />} />
              
              {/* Páginas legales */}
              <Route path="/privacidad" element={<PrivacidadPage />} />
              <Route path="/terminos" element={<TerminosPage />} />
              
              {/* Módulos del curso */}
              <Route path="/curso/f0" element={<ModuloF0Page />} />
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
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
