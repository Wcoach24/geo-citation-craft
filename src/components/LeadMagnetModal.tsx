
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Gift, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadMagnetModalProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  leadMagnet: string;
  benefits: string[];
}

const LeadMagnetModal = ({ trigger, title, description, leadMagnet, benefits }: LeadMagnetModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - in real implementation, this would send to your email service
    setTimeout(() => {
      toast({
        title: "¡Gracias por registrarte!",
        description: "Te hemos enviado el recurso a tu email. Revisa tu bandeja de entrada.",
      });
      
      console.log("Lead captured:", { name, email, leadMagnet });
      
      // In real implementation, trigger download or redirect
      setEmail("");
      setName("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-accent" />
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-2">
              <Download className="h-4 w-4 mr-1" />
              Descarga Gratuita
            </Badge>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Incluye:</h4>
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Descargar {leadMagnet}
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            No spam. Cancela tu suscripción en cualquier momento.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetModal;
