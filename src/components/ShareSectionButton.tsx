
import { Button } from "@/components/ui/button";
import { Link, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ShareSectionButtonProps {
  sectionId: string;
  title?: string;
  className?: string;
}

const ShareSectionButton = ({ sectionId, title = "sección", className = "" }: ShareSectionButtonProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}#${sectionId}`;
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
      variant="outline"
      size="sm"
      onClick={copyLink}
      className={`flex items-center gap-2 ${className}`}
    >
      {copied ? <Copy className="h-4 w-4 text-accent" /> : <Link className="h-4 w-4" />}
      {copied ? "¡Copiado!" : "Compartir"}
    </Button>
  );
};

export default ShareSectionButton;
