
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              GEO
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/metodologia" 
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Metodología
            </a>
            <a 
              href="/curso" 
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Curso
            </a>
            <a 
              href="/coach" 
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Coach
            </a>
            <a 
              href="/casos" 
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Casos Reales
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="/coach">Usar Coach GEO</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                href="/metodologia"
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Metodología
              </a>
              <a
                href="/curso"
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Curso
              </a>
              <a
                href="/coach"
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Coach
              </a>
              <a
                href="/casos"
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos Reales
              </a>
              <div className="pt-2">
                <Button asChild className="w-full">
                  <a href="/coach" onClick={() => setIsMenuOpen(false)}>Usar Coach GEO</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
