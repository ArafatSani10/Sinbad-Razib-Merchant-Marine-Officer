"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipImage from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, Heading2, Heading3, Italic, Link2, List, ListOrdered, Minus, Quote, Redo2, Undo2, ImagePlus } from "lucide-react";
import { savePost } from "@/app/admin/actions";
import { slugify, type Post } from "@/lib/content";
import { browserClient } from "@/lib/supabase/client";

const field = "mt-1.5 w-full border border-navy-300 bg-white px-3 py-2.5 text-navy-950 focus:border-navy-900 focus:outline-none";
const MAX_BYTES = 5 * 1024 * 1024;
const TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" };

async function uploadImage(file: File): Promise<string> {
  const ext = TYPES[file.type];
  if (!ext) throw new Error("Use a JPG, PNG, WebP or GIF image.");
  if (file.size > MAX_BYTES) throw new Error("Image is larger than 5 MB.");
  const supabase = browserClient();
  const path = `${new Date().getFullYear()}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("blog-images").upload(path, file, { contentType: file.type, cacheControl: "31536000" });
  if (error) throw new Error("Upload failed. Check that you are signed in and the storage policies are installed.");
  return supabase.storage.from("blog-images").getPublicUrl(path).data.publicUrl;
}

export default function PostEditor({ post }: { post?: Post }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [id, setId] = useState(post?.id);
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(post));
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [category, setCategory] = useState(post?.category ?? "General");
  const [cover, setCover] = useState<string | null>(post?.cover_url ?? null);
  const [status, setStatus] = useState<"draft" | "published">(post?.status ?? "draft");
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const coverInput = useRef<HTMLInputElement>(null);
  const bodyInput = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] }, link: { openOnClick: false } }),
      TipImage,
      Placeholder.configure({ placeholder: "Start writing. Use the toolbar for headings, quotes, links and images." }),
    ],
    content: post?.content_html ?? "",
    editorProps: { attributes: { class: "prose-log max-w-none" } },
  });

  async function pickCover(file?: File) {
    if (!file) return;
    setBusy(true); setMsg(null);
    try { setCover(await uploadImage(file)); } catch (e) { setMsg({ type: "err", text: (e as Error).message }); }
    setBusy(false);
  }
  async function pickBodyImage(file?: File) {
    if (!file || !editor) return;
    setBusy(true); setMsg(null);
    try { editor.chain().focus().setImage({ src: await uploadImage(file), alt: file.name.replace(/\.[^.]+$/, "") }).run(); }
    catch (e) { setMsg({ type: "err", text: (e as Error).message }); }
    setBusy(false);
  }
  function setLink() {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link address (https://…). Leave empty to remove the link.", prev ?? "https://");
    if (url === null) return;
    if (url === "") { editor.chain().focus().unsetLink().run(); return; }
    if (!/^(https:\/\/|mailto:)/.test(url)) { setMsg({ type: "err", text: "Links must start with https:// or mailto:" }); return; }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  function save(nextStatus: "draft" | "published") {
    if (!editor) return;
    setMsg(null);
    start(async () => {
      const res = await savePost({ id, title, slug: slug || slugify(title), excerpt, category, cover_url: cover, content_html: editor.getHTML(), status: nextStatus });
      if (!res.ok) { setMsg({ type: "err", text: res.error }); return; }
      setStatus(nextStatus);
      setMsg({ type: "ok", text: nextStatus === "published" ? "Published. The post is live." : "Draft saved." });
      if (!id) { setId(res.id); router.replace(`/admin/posts/${res.id}`); } else router.refresh();
    });
  }

  const tb = (on: boolean) => `grid h-9 w-9 place-items-center ${on ? "bg-navy-900 text-fog-50" : "text-navy-800 hover:bg-fog-200"}`;
  const e = editor;

  return (
    <div className="max-w-4xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/admin" className="text-sm font-semibold text-sea-700 hover:underline">Back to posts</Link>
          <h1 className="mt-1 text-3xl font-bold text-navy-950">{id ? "Edit post" : "New post"}</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          {status === "published" && post && <Link href={`/blog/${slug}`} target="_blank" className="border border-navy-900 px-5 py-3 font-semibold text-navy-900 hover:bg-fog-200">View live</Link>}
          <button type="button" disabled={pending || busy} onClick={() => save("draft")} className="border border-navy-900 px-5 py-3 font-semibold text-navy-900 hover:bg-fog-200 disabled:opacity-50">
            {status === "published" ? "Unpublish and save draft" : "Save draft"}
          </button>
          <button type="button" disabled={pending || busy} onClick={() => save("published")} className="bg-sea-700 px-5 py-3 font-semibold text-white hover:bg-sea-900 disabled:opacity-50">
            {pending ? "Saving…" : status === "published" ? "Update post" : "Publish"}
          </button>
        </div>
      </div>

      {msg && <p role={msg.type === "err" ? "alert" : "status"} className={`mt-5 border-l-4 bg-white p-3 text-sm font-semibold ${msg.type === "ok" ? "border-sea-700 text-sea-700" : "border-signal text-signal"}`}>{msg.text}</p>}

      <div className="mt-8 space-y-6">
        <label className="block text-sm font-semibold text-navy-900">Title
          <input value={title} maxLength={200} onChange={(ev) => { setTitle(ev.target.value); if (!slugTouched) setSlug(slugify(ev.target.value)); }} className={`${field} text-xl font-bold`} />
        </label>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-navy-900">URL slug
            <input value={slug} onChange={(ev) => { setSlug(slugify(ev.target.value)); setSlugTouched(true); }} className={field} />
            <span className="mt-1 block text-xs font-normal text-navy-600">/blog/{slug || "your-title"}</span>
          </label>
          <label className="block text-sm font-semibold text-navy-900">Category
            <input value={category} maxLength={60} onChange={(ev) => setCategory(ev.target.value)} className={field} />
          </label>
        </div>

        <label className="block text-sm font-semibold text-navy-900">Summary
          <textarea value={excerpt} maxLength={400} rows={2} onChange={(ev) => setExcerpt(ev.target.value)} className={field} />
          <span className="mt-1 block text-xs font-normal text-navy-600">Shown on the blog list and in link previews. {excerpt.length}/400</span>
        </label>

        <div>
          <p className="text-sm font-semibold text-navy-900">Cover image</p>
          {cover ? (
            <div className="mt-2 flex items-start gap-4">
              <div className="relative h-28 w-48 overflow-hidden bg-navy-900"><Image src={cover} alt="Cover preview" fill sizes="192px" className="object-cover" /></div>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                <button type="button" onClick={() => coverInput.current?.click()} className="text-navy-900 hover:underline">Replace</button>
                <button type="button" onClick={() => setCover(null)} className="text-signal hover:underline">Remove</button>
              </div>
            </div>
          ) : (
            <button type="button" disabled={busy} onClick={() => coverInput.current?.click()} className="mt-2 border border-dashed border-navy-300 bg-white px-6 py-8 text-sm font-semibold text-navy-800 hover:border-navy-900">
              {busy ? "Uploading…" : "Upload a cover image"}
            </button>
          )}
          <input ref={coverInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden onChange={(ev) => { pickCover(ev.target.files?.[0]); ev.target.value = ""; }} />
        </div>

        <div>
          <p className="text-sm font-semibold text-navy-900">Body</p>
          <div className="mt-1.5 border border-navy-300 bg-white">
            <div className="flex flex-wrap gap-0.5 border-b border-fog-200 p-1.5" role="toolbar" aria-label="Formatting">
              <button type="button" className={tb(!!e?.isActive("bold"))} aria-label="Bold" onClick={() => e?.chain().focus().toggleBold().run()}><Bold size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("italic"))} aria-label="Italic" onClick={() => e?.chain().focus().toggleItalic().run()}><Italic size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("heading", { level: 2 }))} aria-label="Heading" onClick={() => e?.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("heading", { level: 3 }))} aria-label="Subheading" onClick={() => e?.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("bulletList"))} aria-label="Bulleted list" onClick={() => e?.chain().focus().toggleBulletList().run()}><List size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("orderedList"))} aria-label="Numbered list" onClick={() => e?.chain().focus().toggleOrderedList().run()}><ListOrdered size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("blockquote"))} aria-label="Quote" onClick={() => e?.chain().focus().toggleBlockquote().run()}><Quote size={17} /></button>
              <button type="button" className={tb(!!e?.isActive("link"))} aria-label="Link" onClick={setLink}><Link2 size={17} /></button>
              <button type="button" className={tb(false)} aria-label="Insert image" disabled={busy} onClick={() => bodyInput.current?.click()}><ImagePlus size={17} /></button>
              <button type="button" className={tb(false)} aria-label="Divider" onClick={() => e?.chain().focus().setHorizontalRule().run()}><Minus size={17} /></button>
              <span className="mx-1 w-px bg-fog-200" />
              <button type="button" className={tb(false)} aria-label="Undo" onClick={() => e?.chain().focus().undo().run()}><Undo2 size={17} /></button>
              <button type="button" className={tb(false)} aria-label="Redo" onClick={() => e?.chain().focus().redo().run()}><Redo2 size={17} /></button>
            </div>
            <div className="p-5"><EditorContent editor={editor} /></div>
          </div>
          <input ref={bodyInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden onChange={(ev) => { pickBodyImage(ev.target.files?.[0]); ev.target.value = ""; }} />
        </div>
      </div>
    </div>
  );
}
