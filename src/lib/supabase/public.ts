import { createClient } from "@supabase/supabase-js";
import { hasSupabase, supabaseAnonKey, supabaseUrl } from "./env";

// Cookie-less client for public pages. RLS only lets it see published posts.
export function publicClient() {
  if (!hasSupabase) return null;
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
