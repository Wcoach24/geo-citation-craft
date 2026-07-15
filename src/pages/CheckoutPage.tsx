import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BuyButton from '@/components/BuyButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  FileText,
  Mail,
  Receipt,
  ShieldCheck,
  Lock,
  ArrowLeft,
} from 'lucide-react';
import { MODULES, COMPLETE_COURSE, SUPPORT_EMAIL } from '@/data/modules';
import { useGeoMetadata } from '@/hooks/useGeoMetadata';

/**
 * F1-9: /checkout real.
 *
 * Antes esta página era un `navigate('/curso#comprar')`: 5,7 KB sin <title> y un
 * flash en blanco. Ahora es una página de pre-pago prerenderizada: qué compras,
 * qué recibes, cómo se paga y qué garantía tienes — con el BuyButton que abre
 * Stripe directamente.
 */
const CheckoutPage = () => {
  const { helmet: socialHelmet } = useGeoMetadata({
    title: 'Comprar el curso GEO completo — 47 €, pago único | esGEO',
    description:
      'Curso GEO completo (F1-F5) por 47 €, pago único. 5 PDFs con 142 páginas al instante en tu email. Factura disponible. Pago seguro vía Stripe: no guardamos tu tarjeta.',
    canonicalUrl: 'https://www.esgeo.ai/checkout',
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {socialHelmet}
      <Helmet>
        <title>Comprar el curso GEO completo — 47 €, pago único | esGEO</title>
        <meta
          name="description"
          content="Curso GEO completo (F1-F5) por 47 €, pago único. 5 PDFs con 142 páginas al instante en tu email. Factura disponible. Pago seguro vía Stripe: no guardamos tu tarjeta."
        />
        <link rel="canonical" href="https://www.esgeo.ai/checkout" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/curso"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la página del curso
          </Link>

          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Pago único · Sin suscripción
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Curso GEO completo — 47 €, pago único
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-speakable="true">
              Los cinco módulos del método F1-F5 en PDF, con checklists aplicables y el caso real
              de esgeo.ai. Recibes los 5 PDFs (142 páginas) al instante en tu email, con factura
              disponible.
            </p>
          </div>

          {/* Qué recibes */}
          <Card className="border-accent/30 card-elevated mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-primary mb-6">Qué recibes al pagar</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>5 PDFs (142 páginas)</strong> — los módulos F1 a F5 del método GEO,
                    al instante en tu email tras el pago.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Entrega inmediata</strong> — el enlace de descarga llega a tu correo
                    en cuanto Stripe confirma el pago. Los PDFs son tuyos para siempre, con
                    actualizaciones incluidas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Receipt className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Factura para tu empresa (NIF/CIF)</strong> — introduce tu NIF/CIF en
                    el propio pago y la factura te llega automáticamente. También puedes pedirla
                    escribiendo a {SUPPORT_EMAIL}.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pago vía Stripe</strong> — no guardamos tu tarjeta. El pago se procesa
                    íntegramente en la pasarela segura de Stripe.
                  </span>
                </li>
              </ul>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-primary">€{COMPLETE_COURSE.price}</span>
                  <span className="text-sm text-muted-foreground text-left">
                    pago único
                    <br />
                    sin suscripción
                  </span>
                </div>
                <BuyButton
                  source="checkout-page"
                  className="btn-glow cta-pulse bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-lg rounded-xl"
                >
                  Comprar el curso — 47 €
                </BuyButton>
                <p className="text-xs text-muted-foreground mt-3">
                  Pago seguro con tarjeta, PayPal o Link a través de Stripe · Factura para tu
                  empresa (NIF/CIF) · ¿Dudas? {SUPPORT_EMAIL}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Garantía */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8 mb-10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">Garantía medible</h2>
                <p className="text-muted-foreground leading-relaxed" data-speakable="true">
                  Garantía medible: aplica F1 y F2 sobre tu web. Si tu nota en el auditor no sube
                  al menos 20 puntos, escríbenos con el antes y el después y te devolvemos los
                  47 €. Tienes 30 días desde la compra; escribe a {SUPPORT_EMAIL} con tu informe
                  del antes y el después y gestionamos la devolución.
                </p>
              </div>
            </div>
          </div>

          {/* Los 5 módulos */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-6">
              Los 5 módulos incluidos (F1-F5)
            </h2>
            <ul className="space-y-4">
              {Object.values(MODULES).map((m) => (
                <li key={m.id} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">
                      {m.id.toUpperCase()} — {m.title}
                    </span>
                    <p className="text-sm text-muted-foreground">{m.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Preguntas frecuentes del pago */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-primary mb-6">Preguntas frecuentes del pago</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-foreground mb-1">¿Cómo se paga?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Con tarjeta, PayPal o Link, a través de Stripe. Al pulsar el botón se abre la
                  pasarela segura de Stripe; nosotros nunca vemos ni guardamos los datos de tu
                  tarjeta.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">¿Cuándo recibo el material?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Al instante: en cuanto Stripe confirma el pago, recibes en tu email el acceso a
                  los 5 PDFs (142 páginas). Si no llega en unos minutos, revisa spam o escríbenos
                  a {SUPPORT_EMAIL}.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">¿Puedo pedir factura?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sí. En la pasarela de pago puedes marcar "Compro como empresa" e introducir tu
                  NIF/CIF: la factura se genera y te llega automáticamente. Si se te olvidó,
                  escribe a {SUPPORT_EMAIL} y te la enviamos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">¿Hay suscripción o pagos ocultos?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No. Son 47 € una sola vez. Las actualizaciones de los módulos van incluidas y no
                  se cobra nada más.
                </p>
              </div>
            </div>
          </section>

          {/* Detalles honestos */}
          <section className="text-sm text-muted-foreground leading-relaxed space-y-3 mb-6">
            <p>
              <strong className="text-foreground">Qué es este curso:</strong> el método completo de
              Generative Engine Optimization que aplicamos en esgeo.ai (de 35 a 92 en nuestro
              auditor, auditado el 12 de julio de 2026). No hay clases en directo ni plazos: son
              guías en PDF que aplicas a tu ritmo sobre tu propia web.
            </p>
            <p>
              <strong className="text-foreground">Para quién:</strong> responsables de webs
              propias, consultores y agencias. Los entregables son licenciables comercialmente y
              puedes usarlos con clientes sin restricción.
            </p>
            <p>
              <strong className="text-foreground">Soporte:</strong> cualquier duda antes o después
              de comprar, en {SUPPORT_EMAIL}. Respondemos personalmente.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
