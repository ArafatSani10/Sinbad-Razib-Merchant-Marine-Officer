import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  const pages = ["", "/about", "/blog", "/contact"].map((p) => ({ url: `${site.url}${p}` }));
  return [...pages, ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.published_at ?? undefined }))];
}
