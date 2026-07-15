
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useVisitorState } from "@/hooks/useVisitorState";
import { trackEvent } from "@/lib/analytics";
import { captureLead } from "@/lib/lead";

interface InlineEmailCaptureProps {
  title: string;
  description: string;
  leadMagnet: string;
  placeholder?: string;
  className?: string;
  /** De dónde salió la captura (para analytics). */
  source?: string;
}

/**
 * F2-7: antes este componente mostraba éxito aunque captureLead fallara (el lead se
 * perdía en silencio). Ahora el éxito solo se muestra si el backend confirma, y el
 * error se comunica al usuario.
 */
const InlineEmailCapture = ({
  title,
  description,
  leadMagnet,
  placeholder = "tu@email.com",
  className = "",
  source = "inline_lead_magnet",
}: InlineEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { toast } = useToast();
  const { markAsLead, visitorState } = useVisitorState();

  // Ya es lead o cliente: no pedir el email otra vez.
  if (visitorState === "lead" || visitorState === "customer") {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu email",
        variant: "destructive",
      });
      return;
    }
    if (status === "loading") return;

    setStatus("loading");

    try {
      const { ok, error } = await captureLead({ email, source });
      if (!ok) {
        // El backend falló: decirlo, no fingir éxito.
        console.error("capture-lead error:", error);
        setStatus("idle");
        toast({
          title: "No se pudo enviar",
          description: "Inténtalo de nuevo en unos segundos. Si sigue fallando, escríbenos a hola@esgeo.ai.",
          variant: "destructive",
        });
        return;
      }

      markAsLead();
      setStatus("success");
      trackEvent.leadCapture(source);
      (window as unknown as { clarity?: (...a: unknown[]) => void }).clarity?.("event", "email_capture", { source });
    } catch (err) {
      console.error("capture-lead error:", err);
      setStatus("idle");
      toast({
        title: "No se pudo enviar",
        description: "Inténtalo de nuevo en unos segundos. Si sigue fallando, escríbenos a hola@esgeo.ai.",
        variant: "destructive",
      });
    }
  };

  if (status === "success") {
    return (
      <Card className={`bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 ${className}`}>
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <CheckCircle className="h-8 w-8 text-accent mx-auto" />
            <h3 className="text-xl font-bold text-primary">¡Listo! Revisa tu email</h3>
            <p className="text-muted-foreground">
              Te hemos enviado {leadMagnet}. Si no llega en unos minutos, mira en spam.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mb-2">
            <Download className="h-4 w-4 mr-1" />
            Recurso Gratuito
          </Badge>

          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Obtener
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            Solo para enviarte el recurso. Sin spam. Te das de baja con un clic.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InlineEmailCapture;
