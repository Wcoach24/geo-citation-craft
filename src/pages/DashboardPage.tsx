import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download, FileText, CheckCircle, Clock, Trophy, Loader2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface PremiumContent {
  moduleId: string;
  title: string;
  description: string;
  files: {
    name: string;
    fileName: string;
    filePath: string;
    type: 'pdf' | 'excel' | 'template' | 'case-study';
    size: string;
    description: string;
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
    title: 'Módulo F1: Fundamentos y Accesibilidad Generativa',
    description: 'Conceptos fundamentales del GEO y principios de accesibilidad para IA. Aprende los fundamentos teóricos y prácticos.',
    files: [
      {
        name: 'Guía Completa - Fundamentos Accesibilidad Generativa',
        fileName: 'guia-completa-modulo-f1.pdf',
        filePath: 'f1/guia-completa-modulo-f1.pdf',
        type: 'pdf',
        size: '3.2 MB',
        description: 'Manual completo con fundamentos del GEO, principios de accesibilidad generativa y estrategias de implementación inicial.'
      }
    ]
  },
  {
    moduleId: 'f2',
    title: 'Módulo F2: Contexto Semántico y Formato Óptimo',
    description: 'Estructuración semántica avanzada y formatos optimizados para comprensión de IA. Domina el contexto y la estructura.',
    files: [
      {
        name: 'Guía Completa - Contexto Semántico y Formato',
        fileName: 'guia-completa-modulo-f2.pdf',
        filePath: 'f2/guia-completa-modulo-f2.pdf',
        type: 'pdf',
        size: '4.1 MB',
        description: 'Guía exhaustiva sobre estructuración semántica, formatos óptimos para IA y técnicas de contextualización avanzada.'
      }
    ]
  },
  {
    moduleId: 'f3',
    title: 'Módulo F3: Autoridad Generativa',
    description: 'Construcción de autoridad digital reconocida por modelos de IA. Estrategias para establecer credibilidad y confianza.',
    files: [
      {
        name: 'Guía Completa - Autoridad Generativa',
        fileName: 'guia-completa-modulo-f3.pdf',
        filePath: 'f3/guia-completa-modulo-f3.pdf',
        type: 'pdf',
        size: '2.8 MB',
        description: 'Manual completo sobre construcción de autoridad digital, estrategias de credibilidad y reconocimiento por IA.'
      }
    ]
  },
  {
    moduleId: 'f4',
    title: 'Módulo F4: Validación Conversacional',
    description: 'Técnicas de validación y optimización para conversaciones de IA. Mejora tu presencia en diálogos generativos.',
    files: [
      {
        name: 'Guía Completa - Validación Conversacional',
        fileName: 'guia-completa-modulo-f4.pdf',
        filePath: 'f4/guia-completa-modulo-f4.pdf',
        type: 'pdf',
        size: '3.5 MB',
        description: 'Estrategias avanzadas de validación conversacional, optimización para diálogos de IA y técnicas de mejora continua.'
      }
    ]
  },
  {
    moduleId: 'f5',
    title: 'Módulo F5: Mantenimiento Evolutivo',
    description: 'Estrategias de mantenimiento y evolución continua. Mantén tu estrategia GEO actualizada con los avances de IA.',
    files: [
      {
        name: 'Guía Completa - Mantenimiento Evolutivo',
        fileName: 'guia-completa-modulo-f5.pdf',
        filePath: 'f5/guia-completa-modulo-f5.pdf',
        type: 'pdf',
        size: '2.9 MB',
        description: 'Manual de mantenimiento evolutivo, estrategias de actualización continua y adaptación a nuevos modelos de IA.'
      }
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
  const { user, userAccess, refreshUserAccess } = useAuth();
  const { toast } = useToast();
  const [downloadHistory, setDownloadHistory] = useState<DownloadHistory[]>([]);
  const [downloadingFiles, setDownloadingFiles] = useState<Set<string>>(new Set());
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const handleRefreshAccess = async () => {
    setIsRefreshing(true);
    try {
      await refreshUserAccess();
      toast({
        title: "Acceso actualizado",
        description: "Tu información de acceso se ha actualizado correctamente"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el acceso. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsRefreshing(false);
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

  const totalModules = 5;
  const accessedModules = userAccess.length;
  const progressPercentage = (accessedModules / totalModules) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard Premium</h1>
            <p className="text-muted-foreground">
              Bienvenido/a, {user.email}. Aquí puedes acceder a todo tu contenido premium.
            </p>
          </div>
          <Button 
            onClick={handleRefreshAccess} 
            disabled={isRefreshing}
            variant="outline"
          >
            {isRefreshing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Actualizando...
              </>
            ) : (
              'Actualizar acceso'
            )}
          </Button>
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
                {['f1', 'f2', 'f3', 'f4', 'f5'].map((moduleId) => (
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
                    {content.title}
                  </CardTitle>
                  <CardDescription>
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-1">
                    {content.files.map((file) => (
                      <Card key={file.filePath} className="border border-border/50">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {getFileIcon(file.type)}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-base">{file.name}</h4>
                                <Badge variant="secondary" className="text-xs">{file.size}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">{file.description}</p>
                              <Button
                                size="default"
                                onClick={() => handleDownload(file.filePath, file.fileName)}
                                disabled={downloadingFiles.has(file.filePath)}
                                className="w-full sm:w-auto"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                {downloadingFiles.has(file.filePath) ? 'Descargando...' : 'Descargar PDF'}
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
          <Card className="border-2 border-dashed">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle>Aún no tienes contenido premium</CardTitle>
              <CardDescription>
                Desbloquea acceso a guías PDF profesionales, metodología paso a paso y casos de estudio reales.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 Curso Completo</h4>
                  <p className="text-sm text-muted-foreground">5 módulos + contenido premium</p>
                  <p className="text-lg font-bold mt-2">€497</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">📚 Módulos Individuales</h4>
                  <p className="text-sm text-muted-foreground">Compra solo lo que necesites</p>
                  <p className="text-lg font-bold mt-2">Desde €147</p>
                </div>
              </div>
              <Link to="/checkout">
                <Button size="lg" className="w-full">
                  Ver Planes y Precios
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                ¿Acabas de comprar? <button onClick={handleRefreshAccess} className="text-primary underline">Actualiza tu acceso aquí</button>
              </p>
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