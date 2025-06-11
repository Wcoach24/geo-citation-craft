
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Target, TrendingUp } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  timeframe: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    change: string;
    isPositive: boolean;
  }[];
  implementedModules: string[];
  image?: string;
  url?: string;
}

const CaseStudyCard = ({ 
  title, 
  company, 
  industry, 
  challenge, 
  solution, 
  timeframe, 
  metrics, 
  implementedModules,
  image = "/placeholder.svg?height=200&width=400",
  url 
}: CaseStudyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg mb-2">{title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span className="font-medium">{company}</span>
              <Badge variant="outline">{industry}</Badge>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{timeframe}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <img 
          src={image} 
          alt={`Caso de estudio: ${title}`}
          className="w-full h-32 object-cover rounded-lg border"
        />
        
        <div className="space-y-2">
          <div>
            <h4 className="font-medium text-sm text-primary mb-1">Desafío</h4>
            <p className="text-sm text-muted-foreground">{challenge}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-primary mb-1">Solución GEO</h4>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-800 text-sm">Resultados</span>
          </div>
          <div className="space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center text-xs">
                <span className="text-gray-600">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">{metric.before}</span>
                  <span>→</span>
                  <span className="font-semibold">{metric.after}</span>
                  <span className={`font-bold ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h5 className="font-medium text-sm">Módulos implementados:</h5>
          <div className="flex flex-wrap gap-1">
            {implementedModules.map((module, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {module}
              </Badge>
            ))}
          </div>
        </div>
        
        {url && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver caso completo
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
