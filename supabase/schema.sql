-- Run this once in Supabase: SQL Editor > New query > paste > Run.
-- Security model: the public can read PUBLISHED posts and send contact messages.
-- Only users listed in public.admins can do anything else. Enforced by Row Level Security.

create extension if not exists "pgcrypto";

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9\u0980-\u09FF]+(-[a-z0-9\u0980-\u09FF]+)*$'),
  title text not null check (char_length(title) between 1 and 200),
  excerpt text not null default '' check (char_length(excerpt) <= 400),
  content_html text not null default '',
  cover_url text,
  category text not null default 'General' check (char_length(category) <= 60),
  status text not null default 'draft' check (status in ('draft','published')),
  reading_minutes int not null default 1,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists posts_status_published_idx on public.posts (status, published_at desc);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 200),
  subject text not null default '' check (char_length(subject) <= 200),
  body text not null check (char_length(body) between 1 and 5000),
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;
alter table public.posts enable row level security;
alter table public.messages enable row level security;

-- admins: a signed-in user may only see their own row (used for the admin check)
drop policy if exists "admins read self" on public.admins;
create policy "admins read self" on public.admins for select to authenticated using (user_id = auth.uid());

-- posts
drop policy if exists "public reads published" on public.posts;
create policy "public reads published" on public.posts for select to anon, authenticated
  using (status = 'published' and published_at <= now());
drop policy if exists "admin reads all posts" on public.posts;
create policy "admin reads all posts" on public.posts for select to authenticated using (public.is_admin());
drop policy if exists "admin inserts posts" on public.posts;
create policy "admin inserts posts" on public.posts for insert to authenticated with check (public.is_admin());
drop policy if exists "admin updates posts" on public.posts;
create policy "admin updates posts" on public.posts for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admin deletes posts" on public.posts;
create policy "admin deletes posts" on public.posts for delete to authenticated using (public.is_admin());

-- messages: anyone may send, only admin may read/manage
drop policy if exists "anyone sends message" on public.messages;
create policy "anyone sends message" on public.messages for insert to anon, authenticated with check (is_read = false);
drop policy if exists "admin reads messages" on public.messages;
create policy "admin reads messages" on public.messages for select to authenticated using (public.is_admin());
drop policy if exists "admin updates messages" on public.messages;
create policy "admin updates messages" on public.messages for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admin deletes messages" on public.messages;
create policy "admin deletes messages" on public.messages for delete to authenticated using (public.is_admin());

-- keep updated_at fresh
create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists posts_touch on public.posts;
create trigger posts_touch before update on public.posts for each row execute function public.touch_updated_at();

-- Storage bucket for blog images: public read, admin-only write
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('blog-images', 'blog-images', true, 5242880, array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do update set public = true, file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg','image/png','image/webp','image/gif'];

drop policy if exists "admin uploads blog images" on storage.objects;
create policy "admin uploads blog images" on storage.objects for insert to authenticated
  with check (bucket_id = 'blog-images' and public.is_admin());
drop policy if exists "admin updates blog images" on storage.objects;
create policy "admin updates blog images" on storage.objects for update to authenticated
  using (bucket_id = 'blog-images' and public.is_admin());
drop policy if exists "admin deletes blog images" on storage.objects;
create policy "admin deletes blog images" on storage.objects for delete to authenticated
  using (bucket_id = 'blog-images' and public.is_admin());

-- AFTER you create your admin user in Authentication > Users, run (with your email):
--   insert into public.admins (user_id) select id from auth.users where email = 'razib2910@gmail.com';
-- Then in Authentication > Providers > Email, turn OFF "Allow new users to sign up".
