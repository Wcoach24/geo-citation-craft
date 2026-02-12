
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">G</span>
          </div>
          <span className="font-bold text-xl text-primary">esGEO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <span>Curso</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/curso">Curso Completo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/curso/f1">Módulo F1 - Fundamentos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/curso/f2">Módulo F2 - Jerarquía</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/curso/f3">Módulo F3 - Autoridad</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/metodologia" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Metodología
          </Link>
          
          <Link to="/glosario" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Glosario
          </Link>

          <Link to="/radar-ia" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Radar IA
          </Link>

          <Link to="/casos-reales" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Casos Reales
          </Link>
        </nav>

        {/* CTA / Auth Button - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Button asChild variant="outline" size="sm">
              <Link to="/dashboard">
                <User className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/auth">Iniciar sesión</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/checkout">Comprar Curso</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/curso" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Curso Completo
            </Link>
            <Link to="/metodologia" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Metodología
            </Link>
            <Link to="/glosario" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Glosario
            </Link>
            <Link to="/radar-ia" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Radar IA
            </Link>
            <Link to="/casos-reales" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Casos Reales
            </Link>
            <div className="pt-3 border-t space-y-2">
              {user ? (
                <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Link to="/auth">Iniciar sesión</Link>
                  </Button>
                  <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Link to="/checkout">Comprar Curso</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
