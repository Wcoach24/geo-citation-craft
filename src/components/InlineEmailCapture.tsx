
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface InlineEmailCaptureProps {
  title: string;
  description: string;
  leadMagnet: string;
  placeholder?: string;
  className?: string;
}

const InlineEmailCapture = ({ 
  title, 
  description, 
  leadMagnet, 
  placeholder = "tu@email.com",
  className = ""
}: InlineEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

    setIsSubmitting(true);

    try {
      await supabase.functions.invoke('capture-lead', {
        body: { email, source: 'inline_lead_magnet' },
      });
    } catch (err) {
      console.error('capture-lead error:', err);
    }

    toast({
      title: "¡Perfecto!",
      description: `Te hemos enviado ${leadMagnet} a tu email.`,
    });

    console.log("Inline lead captured:", { email, leadMagnet });
    setEmail("");
    setIsSubmitting(false);
  };

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
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Obtener
                </>
              )}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground">
            📧 Sin spam • Recursos exclusivos • Cancela cuando quieras
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InlineEmailCapture;
