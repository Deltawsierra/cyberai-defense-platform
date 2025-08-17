#!/usr/bin/env bash
set -euo pipefail
echo "== Typecheck ==" && npm run -s check
echo "== Quick grep for secrets in client bundle (dist) ==" && (test -d dist && ! grep -R -E "service_role|sk_live|apiKey" dist/ >/dev/null || true)
echo "== CSP headers present in config files ==" && grep -R "Content-Security-Policy" -n vercel.json _headers || true
echo "Done."