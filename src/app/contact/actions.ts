"use server";

import { publicClient } from "@/lib/supabase/public";

export type ContactState = { ok?: boolean; error?: string };

export async function sendMessage(_prev: ContactState | undefined, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(form.get("website") ?? "")) return { ok: true };

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const body = String(form.get("body") ?? "").trim();

  if (!name || !email || !body) return { error: "Name, email and message are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "That email address does not look right." };
  if (body.length > 5000) return { error: "Message is too long. Keep it under 5,000 characters." };
  if ((body.match(/https?:\/\//g) ?? []).length > 3) return { error: "Please remove some links from your message." };

  const db = publicClient();
  if (!db) return { error: "Messaging is not set up yet. Please email directly." };
  const { error } = await db.from("messages").insert({
    name: name.slice(0, 120), email: email.slice(0, 200), subject: subject.slice(0, 200), body,
  });
  if (error) return { error: "Could not send your message. Please try again or email directly." };
  return { ok: true };
}
