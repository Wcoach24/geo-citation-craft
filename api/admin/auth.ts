/**
 * GET /api/admin/auth?token=XXX
 *
 * If token matches ADMIN_TOKEN env, sets httpOnly cookie `admin_auth` for 30 days
 * and redirects to /admin. Otherwise returns 401.
 *
 * GET /api/admin/auth (sin token):
 * - If valid cookie present → redirect to /admin
 * - Else → 401
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

function getCookie(req: VercelRequest, name: string): string | null {
  const raw = req.headers.cookie || "";
  for (const part of raw.split(";")) {
    const [k, ...vparts] = part.trim().split("=");
    if (k === name) return decodeURIComponent(vparts.join("="));
  }
  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) {
    return res.status(500).send("ADMIN_TOKEN env not configured");
  }

  const tokenParam = (req.query.token as string) || "";
  const cookie = getCookie(req, "admin_auth");

  // Verify either via token param or existing cookie
  const authorized = (tokenParam && tokenParam === expected) || (cookie && cookie === expected);

  if (!authorized) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(401).send(`
      <html><head><title>Acceso denegado</title>
      <style>body{font-family:-apple-system,sans-serif;max-width:480px;margin:80px auto;padding:24px;text-align:center;color:#1a1a1a;}
      h1{font-size:20px}p{color:#666;font-size:14px;line-height:1.6}</style>
      </head><body>
      <h1>Acceso al dashboard</h1>
      <p>Necesitas el token. Si lo tienes, accede vía<br><code style="background:#f5f3ee;padding:4px 8px;">esgeo.ai/admin?token=...</code></p>
      </body></html>
    `);
  }

  // Set cookie if it came via token param (or refresh expiry on already-authed visit)
  if (tokenParam) {
    const maxAge = 30 * 86400; // 30 days
    res.setHeader("Set-Cookie",
      `admin_auth=${encodeURIComponent(expected)}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`
    );
  }

  // Redirect to dashboard page
  res.setHeader("Location", "/admin/");
  return res.status(302).end();
}
