import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cleanHtml, formatDate } from "@/lib/content";
import { getPostBySlug } from "@/lib/posts";
import { site } from "@/lib/site";

export const revalidate = 60;
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(decodeURIComponent(slug));
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.published_at ?? undefined, images: post.cover_url ? [post.cover_url] : ["/assests/pic.jpg"] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(decodeURIComponent(slug));
  if (!post) notFound();

  return (
    <main>
      <header className="graticule bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-14 md:pt-20">
          <Link href="/blog" className="text-sm font-semibold text-brass-300 hover:underline">Back to blog</Link>
          <p className="mt-8 text-sm text-navy-300">{post.category}, {formatDate(post.published_at)}, {post.reading_minutes} min read</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.08]">{post.title}</h1>
          {post.excerpt && <p className="mt-5 font-serif text-xl leading-relaxed text-fog-100">{post.excerpt}</p>}
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-12">
        {post.cover_url && (
          <div className="relative -mt-0 mb-10 aspect-[16/9] overflow-hidden bg-navy-900">
            <Image src={post.cover_url} alt="" fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
          </div>
        )}
        <div className="prose-log" dangerouslySetInnerHTML={{ __html: cleanHtml(post.content_html) }} />
        <footer className="mt-14 flex items-center gap-4 border-t border-fog-200 pt-8">
          <span className="relative h-14 w-14 overflow-hidden rounded-full"><Image src="/assests/pic.jpg" alt="" fill sizes="56px" className="object-cover object-top" /></span>
          <p className="text-navy-800"><span className="block font-bold text-navy-950">{site.name}</span>Merchant marine officer, reporter and founder of Marine Animal Care. <Link href="/contact" className="font-semibold text-sea-700 underline underline-offset-4">Get in touch</Link></p>
        </footer>
      </article>
    </main>
  );
}
