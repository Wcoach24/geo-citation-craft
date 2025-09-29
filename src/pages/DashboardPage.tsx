import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download, FileText, CheckCircle, Clock, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface PremiumContent {
  moduleId: string;
  moduleName: string;
  files: {
    name: string;
    path: string;
    description: string;
    type: 'pdf' | 'excel' | 'template' | 'case-study';
  }[];
}

interface DownloadHistory {
  id: string;
  module_id: string;
  file_name: string;
  downloaded_at: string;
}

const PREMIUM_CONTENT: PremiumContent[] = [
  {
    moduleId: 'f1',
    moduleName: 'Fundamentos GEO',
    files: [
      { name: 'Guía Completa GEO.pdf', path: 'f1/guia-completa-geo.pdf', description: 'Guía detallada de 25 páginas sobre fundamentos GEO', type: 'pdf' },
      { name: 'Plantilla Auditoría.xlsx', path: 'f1/plantilla-auditoria.xlsx', description: 'Plantilla Excel para auditorías GEO', type: 'excel' },
      { name: 'Caso de Estudio: E-commerce.pdf', path: 'f1/caso-estudio-ecommerce.pdf', description: 'Implementación real en tienda online', type: 'case-study' }
    ]
  },
  {
    moduleId: 'f2',
    moduleName: 'Estructura Web Optimizada',
    files: [
      { name: 'Guía Arquitectura Web.pdf', path: 'f2/guia-arquitectura-web.pdf', description: 'Arquitectura web optimizada para IA', type: 'pdf' },
      { name: 'Templates Schema.org.zip', path: 'f2/templates-schema.zip', description: 'Templates de Schema.org optimizados', type: 'template' },
      { name: 'Checklist Estructura.pdf', path: 'f2/checklist-estructura.pdf', description: 'Checklist imprimible de optimización', type: 'pdf' }
    ]
  },
  {
    moduleId: 'f3',
    moduleName: 'Contenido para IA',
    files: [
      { name: 'Manual Prompts GEO.pdf', path: 'f3/manual-prompts-geo.pdf', description: 'Biblioteca de prompts efectivos', type: 'pdf' },
      { name: 'Generador de Prompts.xlsx', path: 'f3/generador-prompts.xlsx', description: 'Herramienta para generar prompts', type: 'excel' },
      { name: 'Casos Wikipedia Format.pdf', path: 'f3/casos-wikipedia-format.pdf', description: 'Casos de éxito con formato Wikipedia', type: 'case-study' }
    ]
  },
  {
    moduleId: 'f4',
    moduleName: 'Datos Estructurados',
    files: [
      { name: 'Guía Schema.org Avanzada.pdf', path: 'f4/guia-schema-avanzada.pdf', description: 'Implementación avanzada de Schema.org', type: 'pdf' },
      { name: 'Validador Schema.xlsx', path: 'f4/validador-schema.xlsx', description: 'Herramienta de validación Schema', type: 'excel' },
      { name: 'Templates JSON-LD.zip', path: 'f4/templates-json-ld.zip', description: 'Templates JSON-LD listos para usar', type: 'template' }
    ]
  },
  {
    moduleId: 'f5',
    moduleName: 'E-A-T para IA',
    files: [
      { name: 'Estrategia E-A-T.pdf', path: 'f5/estrategia-eat.pdf', description: 'Estrategia completa E-A-T para IA', type: 'pdf' },
      { name: 'Calculadora Autoridad.xlsx', path: 'f5/calculadora-autoridad.xlsx', description: 'Calcula tu puntuación de autoridad', type: 'excel' },
      { name: 'Casos de Autoridad.pdf', path: 'f5/casos-autoridad.pdf', description: 'Casos reales de construcción de autoridad', type: 'case-study' }
    ]
  },
  {
    moduleId: 'f6',
    moduleName: 'Medición y Optimización',
    files: [
      { name: 'Dashboard de Métricas.pdf', path: 'f6/dashboard-metricas.pdf', description: 'Cómo crear dashboards GEO', type: 'pdf' },
      { name: 'Plantilla Métricas.xlsx', path: 'f6/plantilla-metricas.xlsx', description: 'Plantilla para tracking GEO', type: 'excel' },
      { name: 'ROI Calculator.xlsx', path: 'f6/roi-calculator.xlsx', description: 'Calculadora de ROI para GEO', type: 'excel' }
    ]
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf': return <FileText className="h-4 w-4 text-red-500" />;
    case 'excel': return <FileText className="h-4 w-4 text-green-500" />;
    case 'template': return <FileText className="h-4 w-4 text-blue-500" />;
    case 'case-study': return <FileText className="h-4 w-4 text-purple-500" />;
    default: return <FileText className="h-4 w-4" />;
  }
};

const DashboardPage = () => {
  const { user, userAccess } = useAuth();
  const { toast } = useToast();
  const [downloadHistory, setDownloadHistory] = useState<DownloadHistory[]>([]);
  const [downloadingFiles, setDownloadingFiles] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (user) {
      fetchDownloadHistory();
    }
  }, [user]);

  const fetchDownloadHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('content_downloads')
        .select('*')
        .eq('user_id', user?.id)
        .order('downloaded_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setDownloadHistory(data || []);
    } catch (error) {
      console.error('Error fetching download history:', error);
    }
  };

  const handleDownload = async (filePath: string, fileName: string) => {
    if (downloadingFiles.has(filePath)) return;

    setDownloadingFiles(prev => new Set(prev).add(filePath));

    try {
      const { data, error } = await supabase.functions.invoke('generate-download-url', {
        body: { filePath }
      });

      if (error) throw error;

      // Create a temporary link to download the file
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Refresh download history
      fetchDownloadHistory();

      toast({
        title: "Descarga iniciada",
        description: `Se ha iniciado la descarga de ${fileName}`,
      });

    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Error en la descarga",
        description: "No se pudo descargar el archivo. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setDownloadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(filePath);
        return newSet;
      });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Acceso requerido</CardTitle>
            <CardDescription>
              Necesitas iniciar sesión para acceder a tu dashboard premium.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/auth">
              <Button className="w-full">Iniciar sesión</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const accessibleContent = PREMIUM_CONTENT.filter(content => 
    userAccess.includes(content.moduleId)
  );

  const totalModules = 6;
  const accessedModules = userAccess.length;
  const progressPercentage = (accessedModules / totalModules) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard Premium</h1>
          <p className="text-muted-foreground">
            Bienvenido/a, {user.email}. Aquí puedes acceder a todo tu contenido premium.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Tu Progreso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Módulos desbloqueados</span>
                  <span className="text-sm text-muted-foreground">{accessedModules}/{totalModules}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].map((moduleId) => (
                  <Badge 
                    key={moduleId}
                    variant={userAccess.includes(moduleId) ? "default" : "secondary"}
                    className="flex items-center gap-1"
                  >
                    {userAccess.includes(moduleId) ? 
                      <CheckCircle className="h-3 w-3" /> : 
                      <Clock className="h-3 w-3" />
                    }
                    Módulo {moduleId.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Content */}
        {accessibleContent.length > 0 ? (
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Tu Contenido Premium</h2>
            
            {accessibleContent.map((content) => (
              <Card key={content.moduleId}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="default">Módulo {content.moduleId.toUpperCase()}</Badge>
                    {content.moduleName}
                  </CardTitle>
                  <CardDescription>
                    {content.files.length} recursos disponibles para descarga
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {content.files.map((file) => (
                      <Card key={file.path} className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            {getFileIcon(file.type)}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm mb-1 truncate">{file.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3">{file.description}</p>
                              <Button
                                size="sm"
                                onClick={() => handleDownload(file.path, file.name)}
                                disabled={downloadingFiles.has(file.path)}
                                className="w-full"
                              >
                                <Download className="h-3 w-3 mr-1" />
                                {downloadingFiles.has(file.path) ? 'Descargando...' : 'Descargar'}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>No hay contenido premium disponible</CardTitle>
              <CardDescription>
                Aún no tienes acceso a ningún módulo premium. Compra el acceso para desbloquear contenido exclusivo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/checkout">
                <Button>Ver Planes</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Download History */}
        {downloadHistory.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Historial de Descargas</CardTitle>
              <CardDescription>Tus últimas 10 descargas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {downloadHistory.map((download) => (
                  <div key={download.id} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <div>
                      <span className="font-medium text-sm">{download.file_name}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        Módulo {download.module_id.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(download.downloaded_at).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;