/**
 * GET /api/admin/metrics
 *
 * Returns aggregated metrics for the admin dashboard. Requires the `admin_auth`
 * cookie set by /api/admin/auth.
 *
 * Data sources:
 *   - Stripe API (server-side, uses STRIPE_SECRET_KEY)
 *   - GitHub API (uses GITHUB_ADMIN_TOKEN; falls back to unauthenticated which
 *     is rate-limited but still works for a public repo)
 *
 * Returns 401 if cookie missing or invalid.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

function getCookie(req: VercelRequest, name: string): string | null {
  const raw = req.headers.cookie || "";
  for (const part of raw.split(";")) {
    const [k, ...vparts] = part.trim().split("=");
    if (k === name) return decodeURIComponent(vparts.join("="));
  }
  return null;
}

function startOfDayUtc(d = new Date()): Date {
  const x = new Date(d);
  x.setUTCHours(0, 0, 0, 0);
  return x;
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function maskEmail(email: string | null | undefined): string {
  if (!email) return "—";
  const [user, domain] = email.split("@");
  if (!domain) return email;
  const visible = user.slice(0, 2);
  return `${visible}${"•".repeat(Math.max(1, user.length - 2))}@${domain}`;
}

// ── Stripe metrics ───────────────────────────────────────────────────────
async function loadStripeMetrics(stripe: Stripe) {
  // Pull last 90 days of paid sessions, paginated
  const now = new Date();
  const sinceTs = Math.floor((now.getTime() - 90 * 86400000) / 1000);

  const sessions: Stripe.Checkout.Session[] = [];
  let starting_after: string | undefined;
  for (let i = 0; i < 10; i++) {
    const res = await stripe.checkout.sessions.list({
      limit: 100,
      created: { gte: sinceTs },
      ...(starting_after ? { starting_after } : {}),
    });
    sessions.push(...res.data);
    if (!res.has_more) break;
    starting_after = res.data[res.data.length - 1]?.id;
  }

  // Only count paid
  const paid = sessions.filter(s => s.payment_status === "paid");

  const today = startOfDayUtc(now);
  const sevenDaysAgo = new Date(today.getTime() - 6 * 86400000);
  const thirtyDaysAgo = new Date(today.getTime() - 29 * 86400000);

  function sumIn(window: Date) {
    let count = 0, amount = 0;
    for (const s of paid) {
      const t = new Date((s.created || 0) * 1000);
      if (t >= window) { count++; amount += (s.amount_total || 0) / 100; }
    }
    return { count, amount };
  }

  const todayMetrics = sumIn(today);
  const week = sumIn(sevenDaysAgo);
  const month = sumIn(thirtyDaysAgo);
  const all90 = { count: paid.length, amount: paid.reduce((a, s) => a + (s.amount_total || 0) / 100, 0) };

  // Recent sales
  const recent = paid.slice(0, 10).map(s => ({
    id: s.id,
    when: new Date((s.created || 0) * 1000).toISOString(),
    amount: (s.amount_total || 0) / 100,
    currency: (s.currency || "eur").toUpperCase(),
    email_masked: maskEmail(s.customer_email || s.customer_details?.email),
    country: s.customer_details?.address?.country || "—",
    product: s.metadata?.product_type === "complete" ? "Curso completo" : (s.metadata?.module_id ? `Módulo ${s.metadata.module_id.toUpperCase()}` : "—"),
  }));

  // Revenue por producto
  const byProduct: Record<string, { count: number; amount: number }> = {};
  for (const s of paid) {
    const key = s.metadata?.product_type === "complete" ? "Curso completo" : (s.metadata?.module_id ? `Módulo ${s.metadata.module_id.toUpperCase()}` : "Otro");
    if (!byProduct[key]) byProduct[key] = { count: 0, amount: 0 };
    byProduct[key].count++;
    byProduct[key].amount += (s.amount_total || 0) / 100;
  }

  // Daily revenue last 30 days for chart
  const dailyMap: Record<string, number> = {};
  for (let i = 29; i >= 0; i--) {
    const d = isoDate(new Date(today.getTime() - i * 86400000));
    dailyMap[d] = 0;
  }
  for (const s of paid) {
    const d = isoDate(new Date((s.created || 0) * 1000));
    if (d in dailyMap) dailyMap[d] += (s.amount_total || 0) / 100;
  }
  const daily = Object.entries(dailyMap).map(([d, v]) => ({ date: d, revenue: v }));

  return { today: todayMetrics, week, month, all90, recent, byProduct, daily };
}

// ── GitHub metrics ───────────────────────────────────────────────────────
async function ghFetch(path: string) {
  const headers: Record<string, string> = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "esgeo-admin/1.0",
  };
  if (process.env.GITHUB_ADMIN_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_ADMIN_TOKEN}`;
  }
  const r = await fetch(`https://api.github.com${path}`, { headers });
  if (!r.ok) {
    console.error(`[admin] github ${path} → ${r.status}`);
    return null;
  }
  return r.json();
}

async function loadGithubMetrics() {
  const repo = "Wcoach24/geo-citation-craft";

  const [issues, prs] = await Promise.all([
    ghFetch(`/repos/${repo}/issues?state=open&per_page=30&labels=sentinel-alert`),
    ghFetch(`/repos/${repo}/pulls?state=open&per_page=30`),
  ]);

  const issueList = (issues || []).filter((i: any) => !i.pull_request).map((i: any) => ({
    number: i.number,
    title: i.title,
    url: i.html_url,
    labels: (i.labels || []).map((l: any) => typeof l === "string" ? l : l.name),
    created_at: i.created_at,
    comments: i.comments || 0,
  }));

  const agentPrs = (prs || []).filter((p: any) => {
    const ref = (p.head?.ref || "").toLowerCase();
    return ref.startsWith("agent/") || (p.labels || []).some((l: any) => {
      const n = (typeof l === "string" ? l : l.name).toLowerCase();
      return ["agent", "gap-hunter", "ctr-surgeon", "content-refresher"].includes(n);
    });
  }).map((p: any) => ({
    number: p.number,
    title: p.title,
    url: p.html_url,
    draft: p.draft,
    branch: p.head?.ref,
    labels: (p.labels || []).map((l: any) => typeof l === "string" ? l : l.name),
    created_at: p.created_at,
  }));

  return { issues: issueList, prs: agentPrs };
}

// ── Handler ──────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return res.status(500).json({ error: "ADMIN_TOKEN env not configured" });

  const cookie = getCookie(req, "admin_auth");
  if (!cookie || cookie !== expected) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) return res.status(500).json({ error: "STRIPE_SECRET_KEY env missing" });
  const stripe = new Stripe(stripeKey, { apiVersion: "2024-12-18.acacia" });

  try {
    const [stripeMetrics, githubMetrics] = await Promise.all([
      loadStripeMetrics(stripe),
      loadGithubMetrics(),
    ]);

    res.setHeader("Cache-Control", "private, no-store");
    return res.status(200).json({
      generated_at: new Date().toISOString(),
      stripe: stripeMetrics,
      github: githubMetrics,
    });
  } catch (err) {
    console.error("[admin] metrics error:", err);
    return res.status(500).json({ error: (err as Error).message });
  }
}
