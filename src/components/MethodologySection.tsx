import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Users, Target, BarChart, Zap, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES } from "@/data/modules";

const MODULE_ICONS = [
  <FileText className="h-7 w-7" />,
  <Search className="h-7 w-7" />,
  <Users className="h-7 w-7" />,
  <Target className="h-7 w-7" />,
  <BarChart className="h-7 w-7" />,
  <Zap className="h-7 w-7" />,
];

const MODULE_COLORS = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-indigo-500",
];

const MethodologySection = () => {
  const moduleEntries = Object.entries(MODULES);

  return (
    <section id="metodologia" className="section-anchor py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Framework F1-F6
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              6 Módulos Progresivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada módulo se construye sobre el anterior. Empieza por F1 y avanza a tu ritmo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {moduleEntries.map(([key, module], index) => (
              <Card 
                key={key} 
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${module.comingSoon ? 'opacity-60' : ''}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${MODULE_COLORS[index]} text-white`}>
                      {MODULE_ICONS[index]}
                    </div>
                    <div className="flex items-center gap-2">
                      {module.comingSoon && (
                        <Badge variant="secondary" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          Próximamente
                        </Badge>
                      )}
                      <Badge variant="outline" className="font-mono font-bold">
                        {key.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors leading-tight">
                    {module.shortName.split(' - ')[1] || module.shortName}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                {!module.comingSoon && (
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                      asChild
                    >
                      <Link to={`/curso/${key}`}>
                        Ver módulo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold" asChild>
              <Link to="/checkout?plan=complete">
                <Zap className="mr-2 h-5 w-5" />
                Curso Completo F1-F5 — €50
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              <span className="line-through">€60</span> → €50 · Ahorra €10 comprando el pack completo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
