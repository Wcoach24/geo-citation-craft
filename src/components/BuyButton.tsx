import { useState } from "react";
import { Loader2, ArrowRight } from "lucide-react";
import { startCheckout } from "@/lib/checkout";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

interface BuyButtonProps {
  children?: React.ReactNode;
  className?: string;
  /** De dónde salió el clic. Va a Clarity para saber qué CTA vende. */
  source: string;
  showArrow?: boolean;
  /** F2-5: producto a comprar. Por defecto el curso completo (47 €). */
  productType?: "complete" | "curso-auditoria";
}

/**
 * BuyButton — el único camino a la compra.
 *
 * Antes, los CTA de la home y de los módulos enlazaban a `/checkout`, que era una
 * página que solo hacía `navigate('/curso#comprar')`. El usuario pagaba dos saltos y
 * un flash en blanco, y al llegar tenía que volver a hacer clic en otro botón.
 * Ahora cualquier "comprar" abre Stripe directamente.
 */
export default function BuyButton({
  children = "Comprar el curso — 47 €",
  className = "btn-cta",
  source,
  showArrow = true,
  productType = "complete",
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const buy = async () => {
    try {
      setLoading(true);
      trackEvent.checkoutStart(productType);
      (window as unknown as { clarity?: (...a: unknown[]) => void }).clarity?.("event", "cta_checkout_click", { source });
      const { url } = await startCheckout({ productType });
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      setLoading(false);
      toast({
        title: "No se pudo abrir el pago",
        description: "Vuelve a intentarlo. Si sigue fallando, escríbenos a hola@esgeo.ai.",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={buy}
      disabled={loading}
      className={`${className} inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent`}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Abriendo el pago…
        </>
      ) : (
        <>
          {children}
          {showArrow && <ArrowRight className="h-4 w-4" />}
        </>
      )}
    </button>
  );
}
