
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, Target, Users, FileText, Radar, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Metodología", href: "/metodologia", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Coach GEO", href: "/coach", icon: <Target className="h-4 w-4" /> },
    { name: "Curso", href: "/curso", icon: <Users className="h-4 w-4" /> },
    { name: "Casos", href: "/casos", icon: <FileText className="h-4 w-4" /> },
    { name: "Radar IA", href: "/radar-ia", icon: <Radar className="h-4 w-4" /> },
    { name: "Glosario", href: "/glosario", icon: <Info className="h-4 w-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">G</span>
          </div>
          <span className="font-bold text-xl text-primary">esGEO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            size="sm" 
            className="bg-accent hover:bg-accent/90 text-primary"
            asChild
          >
            <Link to="/curso/f1">
              Empieza con F1
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-primary"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/curso/f1">
                    Empieza con F1
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
