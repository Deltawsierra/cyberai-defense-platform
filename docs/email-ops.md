# Email Operations Pipeline

Email pipeline lives in Supabase Edge Functions.
Provider: Resend (https://resend.com)

## Secrets (server-side only):
- `RESEND_API_KEY` # required
- `OPS_FROM` # e.g. "CyberAI Ops <ops@yourdomain.com>"
- `OPS_TO_EARLYACCESS` # e.g. "ops@yourdomain.com"
- `OPS_TO_INVESTORS` # e.g. "investors@yourdomain.com"
- `ALLOWED_ORIGIN` # your site origin for CORS (already set)

## Behavior:
- On successful insert, function tries to email Ops. Email failures DO NOT bubble to client.
- Client still gets 204 on success, generic 400/429 on invalid/rate-limit.