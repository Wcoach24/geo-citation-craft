import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada - esGEO</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="description" content="La página que buscas no existe. Explora nuestro contenido sobre Generative Engine Optimization." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              Página no encontrada
            </h1>
            <p className="text-muted-foreground mb-8">
              Lo sentimos, la página <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code> no existe o ha sido movida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al inicio
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/curso">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Ver el curso
                </Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-4">¿Buscabas algo específico? Prueba estos enlaces:</p>
              <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <Link to="/metodologia" className="text-primary hover:underline">Metodología GEO</Link>
                <Link to="/glosario" className="text-primary hover:underline">Glosario</Link>
                <Link to="/radar-ia" className="text-primary hover:underline">Radar IA</Link>
                <Link to="/casos" className="text-primary hover:underline">Casos reales</Link>
                <Link to="/acerca-de" className="text-primary hover:underline">Acerca de</Link>
              </nav>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
