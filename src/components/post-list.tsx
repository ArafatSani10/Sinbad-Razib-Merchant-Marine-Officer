import Image from "next/image";
import Link from "next/link";
import { Anchor } from "lucide-react";
import { formatDate } from "@/lib/content";

type Item = { slug: string; title: string; excerpt: string; cover_url: string | null; category: string; reading_minutes: number; published_at: string | null };

export function PostCard({ post }: { post: Item }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-fog-200 bg-white transition-all hover:-translate-y-1 hover:border-brass-400 hover:shadow-xl hover:shadow-navy-900/10">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-navy-900" tabIndex={-1} aria-hidden="true">
        {post.cover_url
          ? <Image src={post.cover_url} alt="" fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          : <span className="graticule absolute inset-0 grid place-items-center text-brass-400"><Anchor className="h-10 w-10" /></span>}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-navy-600"><span className="font-semibold text-sea-700">{post.category}</span>, {formatDate(post.published_at)}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-navy-950">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 hover:text-sea-700">{post.title}</Link>
        </h3>
        {post.excerpt && <p className="mt-3 line-clamp-3 font-serif text-[1.05rem] leading-relaxed text-navy-800">{post.excerpt}</p>}
        <p className="mt-auto pt-5 text-sm text-navy-600">{post.reading_minutes} min read</p>
      </div>
    </article>
  );
}

export function EmptyPosts() {
  return (
    <div className="rounded-xl border border-dashed border-navy-300 bg-white/60 p-12 text-center">
      <p className="text-lg font-semibold text-navy-900">No posts yet</p>
      <p className="mt-1 text-navy-600">The first post will appear here as soon as it is published.</p>
    </div>
  );
}