import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userAccess } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="font-bold text-xl text-teal-600">esGEO</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 py-1">
              <span>Curso</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild><Link to="/curso" className="cursor-pointer">Curso Completo</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/curso/f1" className="cursor-pointer">F1 - Fundamentos</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/curso/f2" className="cursor-pointer">F2 - Contexto Semántico</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/curso/f3" className="cursor-pointer">F3 - Autoridad Generativa</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/curso/f4" className="cursor-pointer">F4 - Validación Conversacional</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/curso/f5" className="cursor-pointer">F5 - Mantenimiento Evolutivo</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/metodologia" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 py-1">Metodología</Link>
          <Link to="/glosario" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 py-1">Glosario</Link>
          <Link to="/radar-ia" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 py-1">Radar IA</Link>
          <Link to="/casos-reales" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded px-2 py-1">Casos Reales</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            userAccess.length > 0 ? (
              <Button asChild variant="outline" size="sm" className="cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
                <Link to="/dashboard" className="cursor-pointer">
                  <User className="h-4 w-4 mr-2" />
                  Mi Dashboard
                </Link>
              </Button>
            ) : (
              <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
                <Link to="/curso#comprar" className="cursor-pointer">
                  Curso GEO — €97
                </Link>
              </Button>
            )
          ) : (
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
              <Link to="/curso#comprar" className="cursor-pointer">
                Curso GEO — €97
              </Link>
            </Button>
          )}
        </div>

        <button
          className="md:hidden cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <div className="pb-4 border-b">
              {user ? (
                userAccess.length > 0 ? (
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-lg cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent" onClick={() => setIsMenuOpen(false)}>
                    <Link to="/dashboard" className="cursor-pointer">
                      <User className="h-4 w-4 mr-2" />
                      Mi Dashboard
                    </Link>
                  </Button>
                ) : (
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-lg cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent" onClick={() => setIsMenuOpen(false)}>
                    <Link to="/curso#comprar" className="cursor-pointer">
                      Curso GEO — €97
                    </Link>
                  </Button>
                )
              ) : (
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-lg cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent" onClick={() => setIsMenuOpen(false)}>
                  <Link to="/curso#comprar" className="cursor-pointer">
                    Curso GEO — €97
                  </Link>
                </Button>
              )}
            </div>
            <Link to="/curso" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>Curso Completo</Link>
            <Link to="/metodologia" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>Metodología</Link>
            <Link to="/glosario" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>Glosario</Link>
            <Link to="/radar-ia" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>Radar IA</Link>
            <Link to="/casos-reales" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>Casos Reales</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;