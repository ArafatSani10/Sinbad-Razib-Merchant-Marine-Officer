"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { cleanHtml, readingMinutes, slugify } from "@/lib/content";
import { serverClient } from "@/lib/supabase/server";

export async function login(_prev: { error?: string } | undefined, form: FormData) {
  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password." };
  const supabase = await serverClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: "Email or password is incorrect." };
  redirect("/admin");
}

export async function logout() {
  const supabase = await serverClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export type SaveInput = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  content_html: string;
  cover_url: string | null;
  status: "draft" | "published";
};

export async function savePost(input: SaveInput): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const { supabase } = await requireAdmin();

  const title = input.title.trim().slice(0, 200);
  if (!title) return { ok: false, error: "Add a title before saving." };
  const slug = slugify(input.slug || title);
  if (!slug) return { ok: false, error: "The URL slug is empty. Use letters or numbers." };
  if (input.cover_url && !/^https:\/\//.test(input.cover_url)) return { ok: false, error: "Cover image must be an https link." };

  const html = cleanHtml(input.content_html);
  const row: Record<string, unknown> = {
    title,
    slug,
    excerpt: input.excerpt.trim().slice(0, 400),
    category: (input.category.trim() || "General").slice(0, 60),
    content_html: html,
    cover_url: input.cover_url || null,
    status: input.status,
    reading_minutes: readingMinutes(html),
  };

  let id = input.id;
  if (id) {
    const { data: existing } = await supabase.from("posts").select("published_at").eq("id", id).maybeSingle();
    if (input.status === "published" && !existing?.published_at) row.published_at = new Date().toISOString();
    const { error } = await supabase.from("posts").update(row).eq("id", id);
    if (error) return { ok: false, error: error.code === "23505" ? "Another post already uses this slug." : "Could not save. Try again." };
  } else {
    if (input.status === "published") row.published_at = new Date().toISOString();
    const { data, error } = await supabase.from("posts").insert(row).select("id").single();
    if (error || !data) return { ok: false, error: error?.code === "23505" ? "Another post already uses this slug." : "Could not save. Try again." };
    id = data.id as string;
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");
  revalidatePath("/admin");
  return { ok: true, id: id! };
}

export async function deletePost(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (id) await supabase.from("posts").delete().eq("id", id);
  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function setMessageRead(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const read = formData.get("read") === "true";
  if (id) await supabase.from("messages").update({ is_read: read }).eq("id", id);
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}

export async function deleteMessage(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (id) await supabase.from("messages").delete().eq("id", id);
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}
