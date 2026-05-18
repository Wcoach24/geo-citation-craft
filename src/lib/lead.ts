/**
 * Frontend helper to call our Vercel /api/capture-lead endpoint.
 * Replaces the old supabase.functions.invoke('capture-lead', ...).
 */
export type LeadBody = {
  email: string;
  source?: string;
  unsubscribe?: boolean;
};

export async function captureLead(body: LeadBody): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch("/api/capture-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: data?.error || `HTTP ${r.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
