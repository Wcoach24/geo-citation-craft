
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

const TableOfContents = ({ className = "" }: TableOfContentsProps) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extraer headings de la página
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const items: TocItem[] = [];

    headings.forEach((heading) => {
      if (heading.id) {
        items.push({
          id: heading.id,
          title: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1))
        });
      }
    });

    setTocItems(items);

    // Observer para detectar sección activa
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    headings.forEach((heading) => {
      if (heading.id) observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  if (tocItems.length === 0) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className={`sticky top-8 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <List className="h-5 w-5" />
          Índice de Contenidos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav aria-label="Tabla de contenidos" role="navigation">
          <ol className="space-y-2">
            {tocItems.map((item) => (
              <li 
                key={item.id}
                className={`text-sm ${item.level > 2 ? 'ml-4' : ''}`}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-left hover:text-primary transition-colors w-full ${
                    activeId === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  <ChevronRight className="h-3 w-3 flex-shrink-0" />
                  <span className="line-clamp-2">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </CardContent>

      {/* Datos estructurados para TOC */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Índice de Contenidos",
          "numberOfItems": tocItems.length,
          "itemListElement": tocItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "WebPageElement",
              "name": item.title,
              "url": `${window.location.href}#${item.id}`
            }
          }))
        })}
      </script>
    </Card>
  );
};

export default TableOfContents;
