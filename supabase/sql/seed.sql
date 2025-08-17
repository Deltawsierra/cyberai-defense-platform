-- EARLY ACCESS REQUESTS
create table if not exists public.early_access_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (position('@' in email) > 1),
  organization text,
  ip_hash text not null,
  status text not null default 'new' check (status in ('new','contacted','closed'))
);
alter table public.early_access_requests enable row level security;
-- no policies; only service role writes via serverless

-- INVESTOR LEADS
create table if not exists public.investor_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null check (position('@' in email) > 1),
  message text,
  ip_hash text not null,
  status text not null default 'new' check (status in ('new','review','contacted','closed'))
);
alter table public.investor_leads enable row level security;

-- SIMPLE API RATE LIMIT (per IP hash per hour)
create table if not exists public.api_rate_limits (
  ip_hash text primary key,
  window_start timestamptz not null default now(),
  count int not null default 0
);
alter table public.api_rate_limits enable row level security;