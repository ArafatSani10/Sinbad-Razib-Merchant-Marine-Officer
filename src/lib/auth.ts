import "server-only";
import { redirect } from "next/navigation";
import { serverClient } from "./supabase/server";

// Verifies the session with Supabase Auth (not just the cookie) AND that the user is on the admin list.
export async function requireAdmin() {
  const supabase = await serverClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/admin/login");
  const { data: row } = await supabase.from("admins").select("user_id").eq("user_id", data.user.id).maybeSingle();
  if (!row) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=not-admin");
  }
  return { supabase, user: data.user };
}
