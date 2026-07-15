import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Target, Zap, Trophy, RotateCcw } from "lucide-react";

interface ResultsCardProps {
  score: number;
  onRestart: () => void;
}

const getResultData = (score: number) => {
  if (score <= 6) {
    return {
      level: "CRÍTICO",
      color: "destructive",
      icon: AlertTriangle,
      bgClass: "bg-destructive/5 border-destructive/20",
      title: "Tu web es invisible para la IA",
      description: "Necesitas implementación urgente de GEO. Tu sitio web no está preparado para los motores generativos.",
      recommendation: "F1: Accesibilidad Generativa",
      recommendationDesc: "Establece la base técnica fundamental para que la IA pueda acceder a tu contenido.",
      ctaLink: "/curso/f1",
      ctaText: "Solucionar URGENTE con F1",
      urgency: "Cada día sin GEO = oportunidades perdidas"
    };
  } else if (score <= 12) {
    return {
      level: "BÁSICO",
      color: "default",
      icon: Target,
      bgClass: "bg-warning/5 border-warning/20",
      title: "Necesitas optimización sistemática",
      description: "Tu sitio tiene algunos elementos GEO, pero necesita una implementación completa y sistemática.",
      recommendation: "Curso GEO Completo",
      recommendationDesc: "Implementa los módulos F1-F5 para una optimización integral.",
      ctaLink: "/checkout?type=complete",
      ctaText: "Implementar Framework Completo",
      urgency: "Optimización gradual con descuento del 17%"
    };
  } else if (score <= 16) {
    return {
      level: "AVANZADO",
      color: "default",
      icon: Zap,
      bgClass: "bg-primary/50/5 border-primary/20",
      title: "Optimiza aspectos específicos",
      description: "Tu sitio está bien preparado, pero necesita ajustes en autoridad y optimización técnica.",
      recommendation: "F3 + F4: Autoridad y Validación",
      recommendationDesc: "Fortalece tu autoridad ante la IA y optimiza los aspectos técnicos avanzados.",
      ctaLink: "/curso/f3",
      ctaText: "Mejorar con F3 + F4",
      urgency: "Mejora selectiva para maximum impact"
    };
  } else {
    return {
      level: "EXPERTO",
      color: "default",
      icon: Trophy,
      bgClass: "bg-success/50/5 border-success/20",
      title: "Mantén tu ventaja competitiva",
      description: "¡Excelente! Tu sitio está muy bien optimizado para GEO. Enfócate en mantener y evolucionar.",
      recommendation: "F5: Mantenimiento Evolutivo",
      recommendationDesc: "Sistemas automáticos para mantener tu optimización GEO al día.",
      ctaLink: "/curso/f5",
      ctaText: "Mantener Ventaja con F5",
      urgency: "Evolución continua para liderazgo"
    };
  }
};

const ResultsCard = ({ score, onRestart }: ResultsCardProps) => {
  const result = getResultData(score);
  const IconComponent = result.icon;

  return (
    <div className="animate-fade-in">
      <Card className={result.bgClass}>
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-background/50 rounded-full">
              <IconComponent className="h-8 w-8" />
            </div>
          </div>
          <div className="space-y-2">
            <Badge variant={result.color as any} className="text-xs">
              RESULTADO: {result.level} ({score}/20 puntos)
            </Badge>
            <CardTitle className="text-2xl">{result.title}</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-center">
            {result.description}
          </p>

          <Card className="bg-background/50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-primary mb-2">
                📋 Recomendación personalizada:
              </h4>
              <h5 className="font-medium mb-2">{result.recommendation}</h5>
              <p className="text-sm text-muted-foreground mb-4">
                {result.recommendationDesc}
              </p>
              <div className="text-xs text-muted-foreground italic">
                💡 {result.urgency}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <Link to={result.ctaLink}>
                {result.ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                onClick={onRestart}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Repetir Test
              </Button>
              <Button variant="outline" asChild>
                <Link to="/curso">
                  Ver Todos los Módulos
                </Link>
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              🎯 Test basado en el framework GEO desarrollado por esGEO
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsCard;