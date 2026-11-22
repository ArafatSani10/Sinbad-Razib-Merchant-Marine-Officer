import Link from "next/link";
import AdminShell from "@/components/admin/shell";
import { requireAdmin } from "@/lib/auth";
import { formatDate, type Post } from "@/lib/content";
import { deletePost } from "./actions";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const { supabase } = await requireAdmin();
  const [{ data }, { count: unread }] = await Promise.all([
    supabase.from("posts").select("id,title,slug,status,category,published_at,updated_at").order("updated_at", { ascending: false }),
    supabase.from("messages").select("id", { count: "exact", head: true }).eq("is_read", false),
  ]);
  const posts = (data ?? []) as Pick<Post, "id" | "title" | "slug" | "status" | "category" | "published_at" | "updated_at">[];
  const published = posts.filter((p) => p.status === "published").length;

  return (
    <AdminShell active="posts" unread={unread ?? 0}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-navy-950">Blog posts</h1>
        <Link href="/admin/posts/new" className="bg-navy-900 px-5 py-3 font-semibold text-fog-50 hover:bg-navy-800">Write a new post</Link>
      </div>
      <p className="mt-2 text-navy-800">{published} published, {posts.length - published} drafts, {unread ?? 0} unread messages.</p>

      <div className="mt-8 overflow-x-auto bg-white">
        {posts.length === 0 ? (
          <div className="p-12 text-center"><p className="text-lg font-bold text-navy-950">No posts yet</p><p className="mt-1 text-navy-600">Write your first post to see it here.</p></div>
        ) : (
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-fog-200 text-navy-600"><tr><th className="p-4 font-medium">Title</th><th className="p-4 font-medium">Status</th><th className="p-4 font-medium">Category</th><th className="p-4 font-medium">Updated</th><th className="p-4" /></tr></thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-b border-fog-100 last:border-0">
                  <td className="p-4"><Link href={`/admin/posts/${p.id}`} className="font-semibold text-navy-950 hover:underline">{p.title}</Link></td>
                  <td className="p-4"><span className={`px-2 py-0.5 text-xs font-semibold ${p.status === "published" ? "bg-sea-700 text-white" : "bg-fog-200 text-navy-800"}`}>{p.status === "published" ? "Published" : "Draft"}</span></td>
                  <td className="p-4 text-navy-800">{p.category}</td>
                  <td className="p-4 text-navy-800">{formatDate(p.updated_at)}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-4">
                      {p.status === "published" && <Link href={`/blog/${p.slug}`} target="_blank" className="font-semibold text-sea-700 hover:underline">View</Link>}
                      <Link href={`/admin/posts/${p.id}`} className="font-semibold text-navy-900 hover:underline">Edit</Link>
                      <form action={deletePost}><input type="hidden" name="id" value={p.id} /><button className="font-semibold text-signal hover:underline" aria-label={`Delete ${p.title}`}>Delete</button></form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminShell>
  );
}
