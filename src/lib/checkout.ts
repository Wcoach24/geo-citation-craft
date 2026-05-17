/**
 * Frontend helper to call our Vercel /api/checkout endpoint.
 * Replaces the old supabase.functions.invoke('create-checkout', ...).
 */
export type CheckoutBody = {
  productType: "module" | "complete";
  moduleId?: string;
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
