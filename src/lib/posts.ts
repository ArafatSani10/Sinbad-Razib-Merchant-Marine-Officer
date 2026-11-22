import { publicClient } from "./supabase/public";
import type { Post } from "./content";

const listCols = "id,slug,title,excerpt,cover_url,category,reading_minutes,published_at";

export async function getPublishedPosts(limit?: number, category?: string) {
  const db = publicClient();
  if (!db) return [];
  let q = db.from("posts").select(listCols).eq("status", "published").order("published_at", { ascending: false });
  if (category) q = q.eq("category", category);
  if (limit) q = q.limit(limit);
  const { data } = await q;
  return (data ?? []) as Pick<Post, "id"|"slug"|"title"|"excerpt"|"cover_url"|"category"|"reading_minutes"|"published_at">[];
}

export async function getCategories() {
  const db = publicClient();
  if (!db) return [];
  const { data } = await db.from("posts").select("category").eq("status", "published");
  return [...new Set((data ?? []).map((r) => r.category as string))].sort();
}

export async function getPostBySlug(slug: string) {
  const db = publicClient();
  if (!db) return null;
  const { data } = await db.from("posts").select("*").eq("slug", slug).eq("status", "published").maybeSingle();
  return (data as Post | null) ?? null;
}
