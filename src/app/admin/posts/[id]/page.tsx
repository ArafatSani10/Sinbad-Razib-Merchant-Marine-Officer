import { notFound } from "next/navigation";
import AdminShell from "@/components/admin/shell";
import PostEditor from "@/components/admin/post-editor";
import { requireAdmin } from "@/lib/auth";
import type { Post } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  return <AdminShell active="posts"><PostEditor post={data as Post} /></AdminShell>;
}
