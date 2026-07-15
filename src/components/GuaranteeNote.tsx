import { ShieldCheck } from "lucide-react";

interface GuaranteeNoteProps {
  className?: string;
  /** Variante compacta para colocar justo debajo de un BuyButton. */
  compact?: boolean;
}

/**
 * F2-1: Garantía medible — texto canónico único.
 *
 * Se muestra bajo cada BuyButton, en /curso#comprar y en /checkout. La promesa
 * es verificable con el propio auditor del sitio (/geo-score): antes y después.
 */
export const GUARANTEE_TEXT =
  "Garantía medible: aplica F1 y F2 sobre tu web. Si tu nota en el auditor no sube al menos 20 puntos, escríbenos con el antes y el después y te devolvemos los 47 €.";

export default function GuaranteeNote({ className = "", compact = false }: GuaranteeNoteProps) {
  if (compact) {
    return (
      <p className={`text-xs text-muted-foreground flex items-start gap-1.5 text-left max-w-md mx-auto ${className}`}>
        <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
        <span>{GUARANTEE_TEXT}</span>
      </p>
    );
  }

  return (
    <div className={`rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-start gap-3 text-left ${className}`}>
      <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-sm text-muted-foreground leading-relaxed">{GUARANTEE_TEXT}</p>
    </div>
  );
}
