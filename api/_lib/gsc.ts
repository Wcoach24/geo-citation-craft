/**
 * Google Search Console API helper for server-side use.
 *
 * Uses native node:crypto for JWT signing — no external deps.
 * Reads service account from env var GSC_SERVICE_ACCOUNT_JSON.
 */
import { createSign } from "node:crypto";

type SA = {
  client_email: string;
  private_key: string;
  token_uri: string;
};

function loadSA(): SA {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("GSC_SERVICE_ACCOUNT_JSON missing");
  return JSON.parse(raw);
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function signJwt(sa: SA, scope: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: sa.client_email,
    scope,
    aud: sa.token_uri,
    exp: now + 3600,
    iat: now,
  };
  const data = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = createSign("RSA-SHA256");
  signer.update(data);
  signer.end();
  const pk = sa.private_key.replace(/\\n/g, "\n");
  const sig = signer.sign(pk);
  return `${data}.${base64url(sig)}`;
}

let cachedToken: { token: string; exp: number } | null = null;

async function getAccessToken(sa: SA): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.exp - now > 60) return cachedToken.token;

  const jwt = await signJwt(sa, "https://www.googleapis.com/auth/webmasters.readonly");
  const r = await fetch(sa.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!r.ok) throw new Error(`GSC token exchange failed: ${r.status} ${await r.text()}`);
  const data = (await r.json()) as { access_token: string; expires_in: number };
  cachedToken = { token: data.access_token, exp: now + data.expires_in };
  return data.access_token;
}

export type GscRow = { keys: string[]; impressions: number; clicks: number; ctr: number; position: number };

export async function gscQuery(siteUrl: string, body: {
  startDate: string;
  endDate: string;
  dimensions?: string[];
  rowLimit?: number;
  startRow?: number;
}): Promise<GscRow[]> {
  const sa = loadSA();
  const token = await getAccessToken(sa);
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const r = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rowLimit: 1000, ...body }),
  });
  if (!r.ok) throw new Error(`GSC query failed: ${r.status} ${await r.text()}`);
  const data = (await r.json()) as { rows?: GscRow[] };
  return data.rows || [];
}

export function gscIsConfigured(): boolean {
  return !!process.env.GSC_SERVICE_ACCOUNT_JSON;
}
