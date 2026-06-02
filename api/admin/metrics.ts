/**
 * GET /api/admin/metrics
 *
 * Returns aggregated metrics for the admin dashboard. Requires the `admin_auth`
 * cookie set by /api/admin/auth.
 *
 * Data sources (all optional — return null if their env var is missing):
 *   - Stripe API (STRIPE_SECRET_KEY) — sales, revenue
 *   - GitHub API (GITHUB_ADMIN_TOKEN optional) — issues + PRs from agents
 *   - GSC API (GSC_SERVICE_ACCOUNT_JSON) — traffic, top queries, top pages
 *   - Resend Audience (RESEND_API_KEY) — email leads count
 *   - Citation Tracker summary (read from GitHub raw) — SoC trend
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { gscQuery, gscIsConfigured } from "../_lib/gsc.js";

const LEADS_AUDIENCE_ID = "6f09528e-620e-40b5-926b-4caffec4737c";
const SITE_URL = "sc-domain:esgeo.ai";
const COMMERCIAL_PAGES = ["/", "/curso", "/metodologia", "/curso/f0", "/curso/f1", "/curso/f2", "/curso/f3", "/curso/f4", "/curso/f5"];

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

// ── Stripe ────────────────────────────────────────────────────────────────
async function loadStripeMetrics(stripe: Stripe) {
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

  const recent = paid.slice(0, 10).map(s => ({
    id: s.id,
    when: new Date((s.created || 0) * 1000).toISOString(),
    amount: (s.amount_total || 0) / 100,
    currency: (s.currency || "eur").toUpperCase(),
    email_masked: maskEmail(s.customer_email || s.customer_details?.email),
    country: s.customer_details?.address?.country || "—",
    product: s.metadata?.product_type === "complete" ? "Curso completo" : (s.metadata?.module_id ? `Módulo ${s.metadata.module_id.toUpperCase()}` : "—"),
  }));

  const byProduct: Record<string, { count: number; amount: number }> = {};
  for (const s of paid) {
    const key = s.metadata?.product_type === "complete" ? "Curso completo" : (s.metadata?.module_id ? `Módulo ${s.metadata.module_id.toUpperCase()}` : "Otro");
    if (!byProduct[key]) byProduct[key] = { count: 0, amount: 0 };
    byProduct[key].count++;
    byProduct[key].amount += (s.amount_total || 0) / 100;
  }

  const dailyMap: Record<string, number> = {};
  for (let i = 29; i >= 0; i--) dailyMap[isoDate(new Date(today.getTime() - i * 86400000))] = 0;
  for (const s of paid) {
    const d = isoDate(new Date((s.created || 0) * 1000));
    if (d in dailyMap) dailyMap[d] += (s.amount_total || 0) / 100;
  }
  const daily = Object.entries(dailyMap).map(([d, v]) => ({ date: d, revenue: v }));

  return { today: todayMetrics, week, month, all90, recent, byProduct, daily };
}

// ── GitHub ────────────────────────────────────────────────────────────────
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

// ── GSC ──────────────────────────────────────────────────────────────────
async function loadGscMetrics() {
  if (!gscIsConfigured()) return null;
  try {
    const today = new Date();
    const end = new Date(today.getTime() - 86400000 * 2); // GSC lag ~2 days
    const start7 = new Date(end.getTime() - 6 * 86400000);
    const start30 = new Date(end.getTime() - 29 * 86400000);

    const [last30, byPage7, byQuery7, daily30] = await Promise.all([
      gscQuery(SITE_URL, { startDate: isoDate(start30), endDate: isoDate(end), dimensions: [] }),
      gscQuery(SITE_URL, { startDate: isoDate(start7), endDate: isoDate(end), dimensions: ["page"], rowLimit: 10 }),
      gscQuery(SITE_URL, { startDate: isoDate(start7), endDate: isoDate(end), dimensions: ["query"], rowLimit: 15 }),
      gscQuery(SITE_URL, { startDate: isoDate(start30), endDate: isoDate(end), dimensions: ["date"], rowLimit: 30 }),
    ]);

    // Get also last 7d totals
    const last7 = await gscQuery(SITE_URL, { startDate: isoDate(start7), endDate: isoDate(end), dimensions: [] });

    const totals = (rows: any[]) => rows[0] ? {
      clicks: rows[0].clicks || 0,
      impressions: rows[0].impressions || 0,
      ctr: rows[0].ctr || 0,
      position: rows[0].position || 0,
    } : { clicks: 0, impressions: 0, ctr: 0, position: 0 };

    return {
      window_30d: totals(last30),
      window_7d: totals(last7),
      top_pages: byPage7.map(r => ({
        page: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
      })),
      top_queries: byQuery7.map(r => ({
        query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
      })),
      daily: daily30.map(r => ({
        date: r.keys[0], clicks: r.clicks, impressions: r.impressions,
      })),
    };
  } catch (err) {
    console.error("[admin] gsc error:", (err as Error).message);
    return { error: (err as Error).message };
  }
}

// ── Resend audience (leads) ──────────────────────────────────────────────
async function loadLeadsMetrics() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  try {
    const r = await fetch(`https://api.resend.com/audiences/${LEADS_AUDIENCE_ID}/contacts`, {
      headers: { Authorization: `Bearer ${key}` },
    });
    if (!r.ok) {
      console.error(`[admin] resend ${r.status}`);
      return { error: `Resend ${r.status}` };
    }
    const data = (await r.json()) as { data?: Array<{ created_at: string; unsubscribed?: boolean }> };
    const contacts = data.data || [];
    const total = contacts.length;
    const subscribed = contacts.filter(c => !c.unsubscribed).length;
    const now = Date.now();
    const ms7 = 7 * 86400000, ms30 = 30 * 86400000;
    const last7 = contacts.filter(c => now - new Date(c.created_at).getTime() < ms7).length;
    const last30 = contacts.filter(c => now - new Date(c.created_at).getTime() < ms30).length;

    return { total, subscribed, unsubscribed: total - subscribed, last7, last30 };
  } catch (err) {
    console.error("[admin] leads error:", (err as Error).message);
    return { error: (err as Error).message };
  }
}

// ── SoC (Citation Tracker summary) ───────────────────────────────────────
async function loadSocMetrics() {
  try {
    // Try the latest 4 weeks; Citation Tracker writes summary-YYYY-WW.json
    const now = new Date();
    const candidates: string[] = [];
    for (let i = 0; i < 6; i++) {
      const d = new Date(now.getTime() - i * 7 * 86400000);
      const y = d.getUTCFullYear();
      const wk = Math.ceil((((d.getTime() - new Date(y, 0, 1).getTime()) / 86400000) + new Date(y, 0, 1).getUTCDay() + 1) / 7);
      candidates.push(`summary-${y}-W${String(wk).padStart(2, "0")}.json`);
    }

    const results: Array<{ week: string; soc_pct: number; queries_probed?: number }> = [];
    for (const fname of candidates) {
      const url = `https://raw.githubusercontent.com/Wcoach24/geo-citation-craft/main/agents/data/citations/${fname}`;
      try {
        const r = await fetch(url);
        if (!r.ok) continue;
        const data = await r.json() as any;
        results.push({
          week: fname.replace("summary-", "").replace(".json", ""),
          soc_pct: data.soc_global_pct || data.soc_pct || 0,
          queries_probed: data.queries_probed || data.total_runs,
        });
      } catch {/* ignore */}
    }

    if (results.length === 0) return null;
    results.reverse(); // oldest first for chart
    return {
      current_soc: results[results.length - 1]?.soc_pct || 0,
      previous_soc: results[results.length - 2]?.soc_pct || 0,
      history: results,
    };
  } catch (err) {
    console.error("[admin] soc error:", (err as Error).message);
    return null;
  }
}

// ── Handler ──────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return res.status(500).json({ error: "ADMIN_TOKEN env not configured" });

  const cookie = getCookie(req, "admin_auth");
  if (!cookie || cookie !== expected) return res.status(401).json({ error: "unauthorized" });

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) return res.status(500).json({ error: "STRIPE_SECRET_KEY env missing" });
  const stripe = new Stripe(stripeKey, { apiVersion: "2024-12-18.acacia" });

  try {
    const [stripeMetrics, githubMetrics, gscMetrics, leadsMetrics, socMetrics] = await Promise.all([
      loadStripeMetrics(stripe),
      loadGithubMetrics(),
      loadGscMetrics(),
      loadLeadsMetrics(),
      loadSocMetrics(),
    ]);

    res.setHeader("Cache-Control", "private, no-store");
    return res.status(200).json({
      generated_at: new Date().toISOString(),
      stripe: stripeMetrics,
      github: githubMetrics,
      gsc: gscMetrics,
      leads: leadsMetrics,
      soc: socMetrics,
    });
  } catch (err) {
    console.error("[admin] metrics error:", err);
    return res.status(500).json({ error: (err as Error).message });
  }
}
