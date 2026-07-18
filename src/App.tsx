import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import React, { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import ScrollToHash from "@/components/ScrollToHash";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import HyperPersonalizacion from "@/components/HyperPersonalizacion";
import { GeoTermRegistryProvider } from "@/components/GeoTerm";

// Lazy-loaded pages
const CursoGeoPage = React.lazy(() => import("./pages/CursoGeoPage"));
const MetodologiaGeoPage = React.lazy(() => import("./pages/MetodologiaGeoPage"));
const CasosRealesPage = React.lazy(() => import("./pages/CasosRealesPage"));
const GlosarioPage = React.lazy(() => import("./pages/GlosarioPage"));
const RadarIAPage = React.lazy(() => import("./pages/RadarIAPage"));
const GeoScorePage = React.lazy(() => import("./pages/GeoScorePage"));
const AcercaDePage = React.lazy(() => import("./pages/AcercaDePage"));
const EquipoPage = React.lazy(() => import("./pages/EquipoPage"));
const ExpertoGeoPage = React.lazy(() => import("./pages/ExpertoGeoPage"));
const PrivacidadPage = React.lazy(() => import("./pages/PrivacidadPage"));
const TerminosPage = React.lazy(() => import("./pages/TerminosPage"));
const ContenidoIAPage = React.lazy(() => import("./pages/ContenidoIAPage"));
const HiperpersonalizacionPage = React.lazy(() => import("./pages/HiperpersonalizacionPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const PurchaseSuccessPage = React.lazy(() => import("./pages/PurchaseSuccessPage"));
const UnsubscribePage = React.lazy(() => import("./pages/UnsubscribePage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Módulos del curso
const ModuloF0Page = React.lazy(() => import("./pages/modules/ModuloF0Page"));
const ModuloF1Page = React.lazy(() => import("./pages/modules/ModuloF1Page"));
const ModuloF2Page = React.lazy(() => import("./pages/modules/ModuloF2Page"));
const ModuloF3Page = React.lazy(() => import("./pages/modules/ModuloF3Page"));
const ModuloF4Page = React.lazy(() => import("./pages/modules/ModuloF4Page"));
const ModuloF5Page = React.lazy(() => import("./pages/modules/ModuloF5Page"));

// Artículos del Radar IA
const QueSIgnificaSerCitadoPorIA = React.lazy(() => import("./pages/articles/QueSIgnificaSerCitadoPorIA"));
const MuerteSeoTradicional = React.lazy(() => import("./pages/articles/MuerteSeoTradicional"));
const EstructuraWebParaLenguaje = React.lazy(() => import("./pages/articles/EstructuraWebParaLenguaje"));
const FormatoWikipediaIA = React.lazy(() => import("./pages/articles/FormatoWikipediaIA"));
const DatosEstructuradosModelosGenerativos = React.lazy(() => import("./pages/articles/DatosEstructuradosModelosGenerativos"));
const GeoVsSeoGuiaRapida = React.lazy(() => import("./pages/articles/GeoVsSeoGuiaRapida"));
const ComoHacerQueChatGPTCiteTuWeb = React.lazy(() => import("./pages/articles/ComoHacerQueChatGPTCiteTuWeb"));
const OptimizarWebParaPerplexity = React.lazy(() => import("./pages/articles/OptimizarWebParaPerplexity"));
const QueEsGeoGuiaCompleta = React.lazy(() => import("./pages/articles/QueEsGeoGuiaCompleta"));
const AparecerEnAiOverviews = React.lazy(() => import("./pages/articles/AparecerEnAiOverviews"));
const QueEsLlmsTxt = React.lazy(() => import("./pages/articles/QueEsLlmsTxt"));
const GeoAeoLlmoSeo = React.lazy(() => import("./pages/articles/GeoAeoLlmoSeo"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

/**
 * AppProviders — providers agnósticos de router. Los usa tanto el cliente
 * (BrowserRouter) como el prerender SSR (StaticRouter, ver src/entry-server.tsx).
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

/**
 * AppRoutes — tabla de rutas única. Fuente de verdad compartida cliente/servidor:
 * si se añade una ruta aquí, el prerender la ve.
 */
export function AppRoutes() {
  return (
            <GeoTermRegistryProvider>
            <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Páginas principales */}
              <Route path="/curso" element={<CursoGeoPage />} />
              <Route path="/coach" element={<Navigate to="/metodologia" replace />} />
              <Route path="/metodologia" element={<MetodologiaGeoPage />} />
              <Route path="/casos" element={<CasosRealesPage />} />
              <Route path="/casos-reales" element={<Navigate to="/casos" replace />} />
              <Route path="/glosario" element={<GlosarioPage />} />
              <Route path="/radar-ia" element={<RadarIAPage />} />
              <Route path="/geo-score" element={<GeoScorePage />} />
              <Route path="/contenido-ia" element={<ContenidoIAPage />} />
              <Route path="/experto-geo" element={<ExpertoGeoPage />} />
              <Route path="/hiperpersonalizacion" element={<HiperpersonalizacionPage />} />
              <Route path="/consultor-geo" element={<Navigate to="/experto-geo" replace />} />
              <Route path="/especialista-geo" element={<Navigate to="/experto-geo" replace />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/success" element={<PurchaseSuccessPage />} />
              
              {/* Información corporativa */}
              <Route path="/acerca-de" element={<AcercaDePage />} />
              <Route path="/acerca-de/equipo" element={<EquipoPage />} />
              
              {/* Páginas legales y email */}
              <Route path="/privacidad" element={<PrivacidadPage />} />
              <Route path="/terminos" element={<TerminosPage />} />
              <Route path="/unsubscribe" element={<UnsubscribePage />} />
              
              {/* Módulos del curso */}
              <Route path="/curso/f0" element={<ModuloF0Page />} />
              <Route path="/curso/f1" element={<ModuloF1Page />} />
              <Route path="/curso/f2" element={<ModuloF2Page />} />
              <Route path="/curso/f3" element={<ModuloF3Page />} />
              <Route path="/curso/f4" element={<ModuloF4Page />} />
              <Route path="/curso/f5" element={<ModuloF5Page />} />
              
              {/* Artículos del Radar IA */}
              <Route path="/radar-ia/que-significa-ser-citado-por-ia" element={<QueSIgnificaSerCitadoPorIA />} />
              <Route path="/radar-ia/muerte-seo-tradicional" element={<MuerteSeoTradicional />} />
              <Route path="/radar-ia/estructura-web-para-lenguaje" element={<EstructuraWebParaLenguaje />} />
              <Route path="/radar-ia/formato-wikipedia-ia" element={<FormatoWikipediaIA />} />
              <Route path="/radar-ia/datos-estructurados-modelos-generativos" element={<DatosEstructuradosModelosGenerativos />} />
              <Route path="/radar-ia/geo-vs-seo-diferencias" element={<GeoVsSeoGuiaRapida />} />
              <Route path="/radar-ia/como-hacer-que-chatgpt-cite-tu-web" element={<ComoHacerQueChatGPTCiteTuWeb />} />
              <Route path="/radar-ia/optimizar-web-para-perplexity" element={<OptimizarWebParaPerplexity />} />
              <Route path="/radar-ia/que-es-geo-guia-completa" element={<QueEsGeoGuiaCompleta />} />
              <Route path="/radar-ia/como-aparecer-en-ai-overviews-google-gemini" element={<AparecerEnAiOverviews />} />
              <Route path="/radar-ia/que-es-llms-txt" element={<QueEsLlmsTxt />} />
              <Route path="/radar-ia/geo-aeo-llmo-seo-que-termino-usar" element={<GeoAeoLlmoSeo />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
            </GeoTermRegistryProvider>
  );
}

function App() {
  return (
    <AppProviders>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <AppRoutes />
        {/* F2-7: exit intent global (antes solo en /curso). Solo cliente: el prerender
            SSR renderiza AppRoutes vía entry-server y no pasa por aquí. La supresión
            por visitorState (lead/customer) y por sesión vive dentro del componente. */}
        <ExitIntentPopup />
        {/* Motor de hiperpersonalización client-side (público/hyperpersonal.js).
            Solo cliente: init corre en useEffect, nunca en el prerender SSR.
            Ver /hiperpersonalizacion. */}
        <HyperPersonalizacion />
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </AppProviders>
  );
}

export default App;
