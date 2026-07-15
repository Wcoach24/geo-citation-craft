
import { Button } from "@/components/ui/button";
import { Link, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ShareSectionButtonProps {
  sectionId: string;
  title?: string;
  className?: string;
}

/**
 * Botón de compartir sección. F4-6e: icon-only ghost junto al heading —
 * antes era un botón outline con texto y había ~55 por el sitio compitiendo
 * con los CTAs reales.
 */
const ShareSectionButton = ({ sectionId, title = "sección", className = "" }: ShareSectionButtonProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast({
        title: "Enlace copiado",
        description: `Puedes compartir esta ${title} específica`,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copyLink}
      aria-label={`Copiar enlace a ${title}`}
      title={`Copiar enlace a ${title}`}
      className={`h-8 w-8 text-muted-foreground hover:bg-secondary hover:text-foreground ${className}`}
    >
      {copied ? <Check className="h-4 w-4 text-accent" /> : <Link className="h-4 w-4" />}
    </Button>
  );
};

export default ShareSectionButton;
