
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Github, FileText, Bot } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Marca y Misión */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl text-primary">esGEO</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              La primera plataforma en español para <strong>Generative Engine Optimization</strong>. 
              Optimiza tu contenido para ser citado por IA.
            </p>
            <div className="flex space-x-3">
              <a href="https://twitter.com/esgeo_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/esgeo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/esgeo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegación Principal */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/metodologia" className="text-muted-foreground hover:text-primary">Metodología GEO</Link></li>
              <li><Link to="/curso" className="text-muted-foreground hover:text-primary">Curso Completo</Link></li>
              <li><Link to="/coach" className="text-muted-foreground hover:text-primary">Coach GEO</Link></li>
              <li><Link to="/casos" className="text-muted-foreground hover:text-primary">Casos Reales</Link></li>
              <li><Link to="/glosario" className="text-muted-foreground hover:text-primary">Glosario</Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/radar-ia" className="text-muted-foreground hover:text-primary">Radar IA</Link></li>
              <li><Link to="/curso/f1" className="text-muted-foreground hover:text-primary">Empezar con F1</Link></li>
              <li><Link to="/acerca-de" className="text-muted-foreground hover:text-primary">Acerca de</Link></li>
              <li><Link to="/acerca-de/equipo" className="text-muted-foreground hover:text-primary">Nuestro Equipo</Link></li>
            </ul>
          </div>

          {/* Legal, Contacto y Citabilidad */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Legal y Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hola@esgeo.ai" className="text-muted-foreground hover:text-primary flex items-center gap-2"><Mail className="h-4 w-4" />hola@esgeo.ai</a></li>
              <li><Link to="/privacidad" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="text-muted-foreground hover:text-primary">Términos y Condiciones</Link></li>
            </ul>
            
            {/* Sección especial para archivos citables */}
            <div className="mt-6 pt-4 border-t border-muted">
              <h4 className="font-medium text-primary mb-3 flex items-center gap-2">
                <Bot className="h-4 w-4" />
                Para Modelos de IA
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="/home.geo.txt" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    Definición GEO (.txt)
                  </a>
                </li>
                <li>
                  <a href="/curso.geo.txt" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    Framework F1-F6 (.txt)
                  </a>
                </li>
                <li>
                  <a href="/metodologia.geo.txt" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    Metodología (.txt)
                  </a>
                </li>
                <li>
                  <a href="/glosario.geo.txt" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    Glosario técnico (.txt)
                  </a>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                Contenido estructurado para citación por LLMs
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 - {currentYear} esGEO. Todos los derechos reservados. 
            <span className="block md:inline md:ml-2">Optimiza para ser citado por la IA.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Contenido disponible en formato citable para modelos de lenguaje • Licencia CC BY-NC-SA 4.0
          </p>
        </div>
      </div>

      {/* Schema.org Organization Footer */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://esgeo.ai#organization",
          "name": "esGEO",
          "url": "https://esgeo.ai",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hola@esgeo.ai",
            "availableLanguage": "Spanish"
          },
          "sameAs": [
            "https://twitter.com/esgeo_ai",
            "https://linkedin.com/company/esgeo",
            "https://github.com/esgeo"
          ],
          "publishingPrinciples": "https://esgeo.ai/metodologia.geo.txt",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "url": "https://esgeo.ai"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;
