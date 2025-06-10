
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "¿Qué es GEO?", href: "#que-es-geo", isAnchor: true },
    { label: "Metodología", href: "/metodologia", isAnchor: false },
    { label: "Coach GEO", href: "/coach", isAnchor: false },
    { label: "Curso", href: "/curso", isAnchor: false },
    { label: "Casos reales", href: "/casos", isAnchor: false },
    { label: "Radar IA", href: "/radar-ia", isAnchor: false },
    { label: "Glosario", href: "/glosario", isAnchor: false },
  ];

  const isCurrentPage = (href: string) => {
    if (href.startsWith("#")) return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              es<span className="text-accent">GEO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.isAnchor ? (
                    <a
                      href={item.href}
                      className={`text-muted-foreground hover:text-primary transition-colors duration-200 font-medium ${
                        isCurrentPage(item.href) ? "text-primary font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-muted-foreground hover:text-primary transition-colors duration-200 font-medium ${
                        isCurrentPage(item.href) ? "text-primary font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              Empieza con F1
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.isAnchor ? (
                      <a
                        href={item.href}
                        className={`block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium ${
                          isCurrentPage(item.href) ? "text-primary font-semibold" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium ${
                          isCurrentPage(item.href) ? "text-primary font-semibold" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
                    Empieza con F1
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
