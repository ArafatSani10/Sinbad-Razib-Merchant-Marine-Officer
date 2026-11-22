import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { EmptyPosts, PostCard } from "@/components/post-list";
import { getCategories, getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog", description: "Writing by Sinbad Razib on life at sea, shipping, journalism and ocean conservation." };
export const revalidate = 60;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const [posts, categories] = await Promise.all([getPublishedPosts(undefined, category), getCategories()]);

  return (
    <main>
      <PageHeader title="Blog">Notes from the bridge, the newsroom and the shoreline.</PageHeader>
      <section className="mx-auto max-w-6xl px-5 py-14">
        {categories.length > 1 && (
          <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
            {[undefined, ...categories].map((c) => {
              const on = c === category;
              return (
                <Link key={c ?? "all"} href={c ? `/blog?category=${encodeURIComponent(c)}` : "/blog"} aria-current={on ? "true" : undefined}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium ${on ? "border-navy-900 bg-navy-900 text-fog-50" : "border-navy-300 text-navy-800 hover:border-navy-900"}`}>
                  {c ?? "All"}
                </Link>
              );
            })}
          </nav>
        )}
        {posts.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <div key={p.id} className="relative"><PostCard post={p} /></div>)}</div> : <EmptyPosts />}
      </section>
    </main>
  );
}