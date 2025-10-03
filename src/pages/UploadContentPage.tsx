import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Upload, CheckCircle, XCircle } from "lucide-react";

interface UploadResult {
  file: string;
  success: boolean;
  path?: string;
  error?: string;
}

export default function UploadContentPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);

  const handleUpload = async () => {
    setIsUploading(true);
    setResults([]);

    try {
      const { data, error } = await supabase.functions.invoke('upload-premium-content');

      if (error) throw error;

      setResults(data.results || []);
      
      const successCount = data.results.filter((r: UploadResult) => r.success).length;
      const failCount = data.results.filter((r: UploadResult) => !r.success).length;

      if (failCount === 0) {
        toast.success(`✅ ${successCount} archivos subidos correctamente al storage`);
      } else {
        toast.warning(`⚠️ ${successCount} exitosos, ${failCount} fallidos`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Error al subir archivos al storage');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-6 w-6" />
              Subir Contenido Premium a Storage
            </CardTitle>
            <CardDescription>
              Esta página sube los archivos PDF desde public/ al bucket de Supabase Storage.
              Solo necesitas hacer esto una vez después de actualizar los PDFs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-4">
              <Button 
                onClick={handleUpload} 
                disabled={isUploading}
                size="lg"
                className="w-full"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subiendo archivos...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Subir PDFs al Storage
                  </>
                )}
              </Button>

              {results.length > 0 && (
                <div className="space-y-3 mt-6">
                  <h3 className="font-semibold">Resultados:</h3>
                  {results.map((result, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border ${
                        result.success 
                          ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-900' 
                          : 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-900'
                      }`}
                    >
                      {result.success ? (
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{result.file}</p>
                        {result.error && (
                          <p className="text-sm text-muted-foreground">{result.error}</p>
                        )}
                        {result.path && (
                          <p className="text-sm text-muted-foreground">Path: {result.path}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">ℹ️ Información</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Los archivos se subirán desde las URLs públicas en /premium-content/</li>
                <li>• Se guardarán en el bucket privado 'premium-content' de Supabase</li>
                <li>• Solo serán accesibles mediante signed URLs después del pago</li>
                <li>• Puedes ejecutar esto tantas veces como necesites</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
