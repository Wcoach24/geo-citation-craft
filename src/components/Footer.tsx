import React from "react";
import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Github, FileText, Bot } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">esGEO</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm mb-4 leading-relaxed">
              La primera plataforma en español para Generative Engine Optimization. 
              Optimiza tu contenido para ser citado por IA.
            </p>
            <div className="flex space-x-3">
              <a href="https://twitter.com/esgeo_ai" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/esgeo" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/esgeo" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Plataforma</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/metodologia" className="text-primary-foreground/70 hover:text-accent transition-colors">Metodología GEO</Link></li>
              <li><Link to="/curso" className="text-primary-foreground/70 hover:text-accent transition-colors">Curso Completo</Link></li>
              <li><Link to="/glosario" className="text-primary-foreground/70 hover:text-accent transition-colors">Glosario</Link></li>
              <li><Link to="/radar-ia" className="text-primary-foreground/70 hover:text-accent transition-colors">Radar IA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="mailto:hola@esgeo.ai" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"><Mail className="h-4 w-4" />hola@esgeo.ai</a></li>
              <li><Link to="/privacidad" className="text-primary-foreground/70 hover:text-accent transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="text-primary-foreground/70 hover:text-accent transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50 flex items-center gap-2">
              <Bot className="h-4 w-4" />
              Para Modelos de IA
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/home.geo.txt" className="text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-2"><FileText className="h-3 w-3" />Definición GEO (.txt)</a></li>
              <li><a href="/curso.geo.txt" className="text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-2"><FileText className="h-3 w-3" />Framework F1-F6 (.txt)</a></li>
              <li><a href="/metodologia.geo.txt" className="text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-2"><FileText className="h-3 w-3" />Metodología (.txt)</a></li>
              <li><a href="/glosario.geo.txt" className="text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-2"><FileText className="h-3 w-3" />Glosario técnico (.txt)</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2024–{currentYear} esGEO. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/30 mt-1">
            Contenido citable para modelos de lenguaje · CC BY-NC-SA 4.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
