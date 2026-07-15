/**
 * Frontend helper to call our Vercel /api/checkout endpoint.
 * Replaces the old supabase.functions.invoke('create-checkout', ...).
 */
export type CheckoutBody = {
  // F2-2: los módulos sueltos ya no se venden — 'module' eliminado del tipo.
  // F2-5: 'curso-auditoria' = curso completo + auditoría personalizada (197 €).
  productType: "complete" | "curso-auditoria";
  guestEmail?: string;
};

export async function startCheckout(body: CheckoutBody): Promise<{ url: string }> {
  const r = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    throw new Error(data?.error || `Checkout failed (HTTP ${r.status})`);
  }
  if (!data?.url) throw new Error("No checkout URL returned");
  return { url: data.url as string };
}
