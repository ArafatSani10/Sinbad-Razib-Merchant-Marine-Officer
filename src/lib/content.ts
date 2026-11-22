import sanitizeHtml from "sanitize-html";

export function cleanHtml(dirty: string) {
  return sanitizeHtml(dirty, {
    allowedTags: ["p","h2","h3","h4","ul","ol","li","blockquote","strong","em","u","s","a","img","code","pre","hr","br","figure","figcaption"],
    allowedAttributes: { a: ["href","target","rel"], img: ["src","alt","title"] },
    allowedSchemes: ["https","mailto"],
    allowedSchemesByTag: { img: ["https"] },
    transformTags: {
      a: (tag, attribs) => ({ tagName: "a", attribs: { ...attribs, target: "_blank", rel: "noopener noreferrer nofollow" } }),
    },
  });
}

export function slugify(input: string) {
  return input
    .normalize("NFC")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0980-\u09FF\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function readingMinutes(html: string) {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content_html: string;
  cover_url: string | null;
  category: string;
  status: "draft" | "published";
  reading_minutes: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};
