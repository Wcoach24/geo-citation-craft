import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { HelpCircle, Mail, Search, CheckCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AyudaCompraPage = () => {
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleRecoverPurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      // Aquí puedes implementar la lógica para buscar la compra
      // Por ahora, solo mostramos un mensaje
      setTimeout(() => {
        toast({
          title: "Búsqueda completada",
          description: "Si encontramos tu compra, recibirás un email con tu enlace de acceso."
        });
        setIsSearching(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al buscar tu compra. Por favor contacta a soporte.",
        variant: "destructive"
      });
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Centro de Ayuda</h1>
            <p className="text-xl text-muted-foreground">
              Resuelve tus dudas sobre tu compra y acceso al contenido
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  ¿Necesitas ayuda personalizada? Nuestro equipo está aquí para ayudarte.
                </p>
                <Button 
                  onClick={() => window.location.href = 'mailto:soporte@esgeo.ai'}
                  className="w-full"
                >
                  Enviar Email a Soporte
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Verificar Compra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  ¿Acabas de comprar? Verifica el estado de tu pedido.
                </p>
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full">
                    Ir al Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Recover Purchase Form */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Recuperar mi Compra
              </CardTitle>
              <CardDescription>
                Si compraste como invitado y no recibiste el email, ingresa tu dirección de correo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRecoverPurchase} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email usado en la compra</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSearching} className="w-full">
                  {isSearching ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Buscando...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Buscar mi compra
                    </>
                  )}
                </Button>
                <Alert>
                  <AlertDescription>
                    Te enviaremos un email con tu enlace de acceso si encontramos tu compra.
                  </AlertDescription>
                </Alert>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
              <CardDescription>
                Respuestas a las dudas más comunes sobre compras y acceso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿No recibí el email de confirmación?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Si no recibiste el email de confirmación:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Revisa tu carpeta de spam o correo no deseado</li>
                      <li>Verifica que el email es correcto en tu historial de compra</li>
                      <li>Usa el formulario "Recuperar mi Compra" arriba</li>
                      <li>Si compraste con cuenta, ve directamente a tu <Link to="/dashboard" className="text-primary underline">Dashboard</Link></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>¿El enlace de descarga no funciona?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Si tu enlace no funciona:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Asegúrate de copiar el enlace completo (puede estar partido en varias líneas en el email)</li>
                      <li>Intenta abrir el enlace en otro navegador</li>
                      <li>Los enlaces de invitado expiran en 90 días - verifica la fecha</li>
                      <li>Si tienes cuenta, accede desde tu <Link to="/dashboard" className="text-primary underline">Dashboard</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>¿No veo mi contenido en el Dashboard?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Si no aparece tu contenido:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Haz clic en "Actualizar acceso" en tu Dashboard</li>
                      <li>Cierra sesión y vuelve a iniciar sesión</li>
                      <li>Espera 5-10 minutos si acabas de comprar (el sistema puede tardar un poco)</li>
                      <li>Verifica que usaste el mismo email para la compra y tu cuenta</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Puedo cambiar de cuenta de invitado a registrada?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Sí, es muy sencillo:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Crea una cuenta usando el <strong>mismo email</strong> que usaste para comprar</li>
                      <li>Una vez dentro, tu acceso se vinculará automáticamente</li>
                      <li>Si no se vincula, usa el botón "Actualizar acceso" en el Dashboard</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>¿El pago fue procesado pero no tengo acceso?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Si el pago se realizó pero no tienes acceso:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Revisa tu email de confirmación de Stripe (recibirás uno incluso si nuestro sistema falla)</li>
                      <li>Usa el formulario "Recuperar mi Compra" con el email de la transacción</li>
                      <li>Contacta a soporte con el ID de transacción de Stripe</li>
                      <li>No te preocupes - tenemos registro de todas las compras y te otorgaremos acceso manualmente</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>¿Cómo descargo los PDFs?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Para descargar tus guías PDF:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Con cuenta:</strong> Ve a tu <Link to="/dashboard" className="text-primary underline">Dashboard</Link> y haz clic en "Descargar PDF"</li>
                      <li><strong>Como invitado:</strong> Usa el enlace que recibiste por email</li>
                      <li>Puedes descargar los PDFs tantas veces como quieras</li>
                      <li>Los archivos se abrirán en una nueva pestaña para descargar</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>¿Cuánto tiempo tengo acceso al contenido?</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p>Política de acceso:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Con cuenta registrada:</strong> Acceso permanente sin límite de tiempo</li>
                      <li><strong>Como invitado:</strong> 90 días desde la compra</li>
                      <li>Recomendamos crear una cuenta para acceso permanente</li>
                      <li>Una vez descargados, los PDFs son tuyos para siempre</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>¿Aún necesitas ayuda?</CardTitle>
              <CardDescription>
                Nuestro equipo de soporte está disponible para ayudarte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Si no encontraste la respuesta a tu pregunta, contáctanos directamente:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = 'mailto:soporte@esgeo.ai'}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  soporte@esgeo.ai
                </Button>
                <Link to="/dashboard" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Ir al Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AyudaCompraPage;
