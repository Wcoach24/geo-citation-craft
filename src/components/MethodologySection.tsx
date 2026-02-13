import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Users, Target, BarChart, Zap, ArrowRight, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";

const MODULE_ICONS = [FileText, Search, Users, Target, BarChart, Zap];

const MethodologySection = () => {
  const moduleEntries = Object.entries(MODULES);

  return (
    <section id="metodologia" className="section-anchor py-20">
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
              Cada módulo se construye sobre el anterior. Empieza por F0 gratis y avanza a tu ritmo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {moduleEntries.map(([key, module], index) => {
              const Icon = MODULE_ICONS[index];
              return (
                <div
                  key={key}
                  className={`group relative rounded-2xl border bg-background p-6 card-elevated transition-all duration-300 hover:-translate-y-1 ${
                    module.comingSoon ? 'opacity-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className="font-mono font-bold text-xs">
                      {key.toUpperCase()}
                    </Badge>
                  </div>

                  <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {module.shortName.split(' - ')[1] || module.shortName}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  {module.comingSoon ? (
                    <Badge variant="secondary" className="text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      Próximamente
                    </Badge>
                  ) : (
                    <Link
                      to={`/curso/${key}`}
                      className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                    >
                      Ver módulo
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA pack completo */}
          <div className="text-center rounded-2xl bg-muted/40 border border-accent/20 p-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Badge className="bg-accent/15 text-accent border-accent/30">Ahorra €10</Badge>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Pack Completo F1-F5
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Acceso a los 5 módulos fundamentales + guías PDF + actualizaciones gratuitas.
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-lg text-muted-foreground line-through">€60</span>
              <span className="text-4xl font-bold text-primary">€{COMPLETE_COURSE.price}</span>
              <span className="text-sm text-muted-foreground">pago único</span>
            </div>
            <Button size="lg" className="btn-glow cta-pulse bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-6 text-lg rounded-xl" asChild>
              <Link to="/checkout?plan=complete">
                <Zap className="mr-2 h-5 w-5" />
                Comprar Curso Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
              {COMPLETE_COURSE.features.slice(0, 3).map((f, i) => (
                <span key={i} className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
