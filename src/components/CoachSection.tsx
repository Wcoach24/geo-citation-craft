
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Target, FileDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CoachSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="coach">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coach GEO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu asistente personal para aplicar GEO paso a paso. 
            Recibe guidance personalizado y optimiza tu web para ser citado por IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle>Conversacional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                El coach te hace preguntas específicas sobre tu web y objetivos para personalizar las recomendaciones.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle>Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cada recomendación se adapta a tu sector, audiencia y nivel técnico para máxima efectividad.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <FileDown className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle>Accionable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recibe un informe detallado con pasos específicos y prioritarios para implementar en tu web.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Link to="/coach">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Empezar coaching GEO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
