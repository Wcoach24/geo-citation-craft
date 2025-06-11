
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, TrendingUp } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  quote: string;
  metric: {
    before: string;
    after: string;
    improvement: string;
  };
  moduleUsed: string;
  avatar?: string;
}

const TestimonialCard = ({ 
  name, 
  company, 
  role, 
  quote, 
  metric, 
  moduleUsed, 
  avatar = "/placeholder.svg?height=60&width=60" 
}: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-4">
          <img 
            src={avatar} 
            alt={`${name} de ${company}`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-primary">{name}</h3>
            <p className="text-sm text-muted-foreground">{role} en {company}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <Quote className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
          <p className="text-muted-foreground italic">"{quote}"</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-medium text-green-800">Resultados medibles</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Antes</p>
              <p className="font-semibold text-red-600">{metric.before}</p>
            </div>
            <div>
              <p className="text-gray-600">Después</p>
              <p className="font-semibold text-green-600">{metric.after}</p>
            </div>
            <div>
              <p className="text-gray-600">Mejora</p>
              <p className="font-bold text-green-700">{metric.improvement}</p>
            </div>
          </div>
        </div>
        
        <Badge variant="secondary" className="text-xs">
          Utilizó: {moduleUsed}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
