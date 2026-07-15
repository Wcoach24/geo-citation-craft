
import { useCanonicalHref } from "@/lib/canonical";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, ChevronRight } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  /**
   * F5-4: el índice llega como prop estática por página (antes se construía en
   * useEffect leyendo el DOM → en el HTML servido el componente era null y su
   * ItemList nunca llegaba al crawler).
   */
  items: TocItem[];
  className?: string;
}

const TableOfContents = ({ items, className = "" }: TableOfContentsProps) => {
  const canonicalHref = useCanonicalHref();
  const [activeId, setActiveId] = useState<string>("");
  // F4-5d: el TOC no se muestra mientras el hero esté en viewport (flotaba encima).
  // Empieza oculto (SSR-safe) y un IntersectionObserver — SOLO en useEffect — lo activa.
  // El JSON-LD de abajo NO depende de esto: se emite siempre en el HTML servido.
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) {
      // Página sin hero: mostrar siempre.
      setPastHero(true);
      return;
    }
    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, []);

  useEffect(() => {
    // Resaltar la sección activa (mejora de cliente; no afecta al SSR).
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Datos estructurados del índice: SIEMPRE en el HTML servido, aunque la
          tarjeta visual espere a que el hero salga del viewport. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Índice de Contenidos",
          "numberOfItems": items.length,
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "WebPageElement",
              "name": item.title,
              "url": `${canonicalHref}#${item.id}`
            }
          }))
        }) }} />

      {pastHero && (
        <Card className={`sticky top-8 ${className}`}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <List className="h-5 w-5" />
              Índice de Contenidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav aria-label="Tabla de contenidos">
              <ol className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className={`text-sm ${(item.level ?? 2) > 2 ? 'ml-4' : ''}`}
                  >
                    {/* F5-4: anchor real <a href="#id"> (antes <button onClick>):
                        navegable por crawlers y sin JavaScript. */}
                    <a
                      href={`#${item.id}`}
                      className={`flex items-center gap-2 text-left hover:text-primary transition-colors w-full ${
                        activeId === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                      }`}
                    >
                      <ChevronRight className="h-3 w-3 flex-shrink-0" />
                      <span className="line-clamp-2">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TableOfContents;
