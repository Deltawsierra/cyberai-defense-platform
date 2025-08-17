// Deno Edge Function: /request-early-access
// CORS: allow only ALLOWED_ORIGIN
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { z } from "https://esm.sh/zod@3.23.8";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  organization: z.string().max(200).optional(),
});

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RATE_LIMIT_SALT = Deno.env.get("RATE_LIMIT_SALT") ?? "";
const ALLOWED_ORIGIN = Deno.env.get("ALLOWED_ORIGIN") ?? "";
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

const sha256 = async (s: string) => {
  const d = new TextEncoder().encode(s);
  const h = await crypto.subtle.digest("SHA-256", d);
  return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, "0")).join("");
};

const cors = (origin?: string) => {
  const allow = origin && ALLOWED_ORIGIN && origin === ALLOWED_ORIGIN ? origin : "";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Vary": "Origin",
  };
};

serve(async (req) => {
  const origin = req.headers.get("origin") ?? undefined;
  if (req.method === "OPTIONS") return new Response(null, { headers: cors(origin) });
  if (req.method !== "POST") return new Response(null, { status: 405, headers: cors(origin) });
  try {
    const body = await req.json();
    const parsed = schema.parse(body ?? {});
    const fwd = req.headers.get("x-forwarded-for");
    const ip = (fwd ? fwd.split(",")[0] : "") || "";
    const hash = await sha256(RATE_LIMIT_SALT + ip);

   // rate limit: 10/hour per IP hash
    const { data: rl } = await supabase.from("api_rate_limits").select("*").eq("ip_hash", hash).maybeSingle();
    if (!rl) {
      await supabase.from("api_rate_limits").insert({ ip_hash: hash, count: 1 });
    } else {
      const reset = Date.now() - new Date(rl.window_start).getTime() > 3600_000;
      const next = reset ? 1 : rl.count + 1;
      await supabase.from("api_rate_limits").upsert({
        ip_hash: hash,
        count: next,
        window_start: reset ? new Date().toISOString() : rl.window_start,
      });
      if (!reset && next > 10) return new Response(JSON.stringify({ error: "rate_limited" }), { status: 429, headers: { "content-type": "application/json", ...cors(origin) } });
    }

    await supabase.from("early_access_requests").insert({
      name: parsed.name,
      email: parsed.email,
      organization: parsed.organization ?? null,
      ip_hash: hash,
      status: "new",
    });

    // after successful insert:
    try {
      const apiKey = Deno.env.get("RESEND_API_KEY")
      const from = Deno.env.get("OPS_FROM")
      const to = Deno.env.get("OPS_TO_EARLYACCESS")
      if (apiKey && from && to) {
        const html = `
          <h2>New Early Access Request</h2>
          <p><b>Name:</b> ${parsed.name}</p>
          <p><b>Email:</b> ${parsed.email}</p>
          <p><b>Organization:</b> ${parsed.organization ?? ''}</p>
          <p><small>IP hash: ${hash}</small></p>
        `
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from, to, subject: "Early Access Request", html })
        })
      }
    } catch { /* swallow */ }

    return new Response(null, { status: 204, headers: cors(origin) });
  } catch {
    return new Response(JSON.stringify({ error: "invalid_request" }), { status: 400, headers: { "content-type": "application/json", ...cors(origin) } });
  }
});