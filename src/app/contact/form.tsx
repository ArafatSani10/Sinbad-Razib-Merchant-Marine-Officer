"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "./actions";

const field = "mt-1.5 w-full border border-navy-300 bg-fog-50 px-4 py-3 text-navy-950 placeholder:text-navy-600/60 focus:border-navy-900 focus:outline-none";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, {});

  if (state.ok) {
    return (
      <div role="status" className="mt-6 border-l-4 border-sea-700 bg-fog-50 p-6">
        <p className="text-lg font-bold text-navy-950">Message sent</p>
        <p className="mt-1 text-navy-800">Thank you. I will reply to the email address you gave.</p>
      </div>
    );
  }

  return (
    <form action={action} className="mt-6 space-y-5">
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy-900">Your name<input name="name" required maxLength={120} autoComplete="name" className={field} /></label>
        <label className="block text-sm font-semibold text-navy-900">Your email<input name="email" type="email" required maxLength={200} autoComplete="email" className={field} /></label>
      </div>
      <label className="block text-sm font-semibold text-navy-900">Subject<input name="subject" maxLength={200} className={field} /></label>
      <label className="block text-sm font-semibold text-navy-900">Message<textarea name="body" required rows={7} maxLength={5000} className={field} /></label>
      {state.error && <p role="alert" className="border-l-4 border-signal bg-fog-50 p-3 text-sm font-medium text-signal">{state.error}</p>}
      <button disabled={pending} className="bg-navy-900 px-8 py-3.5 font-semibold text-fog-50 transition-colors hover:bg-navy-800 disabled:opacity-60">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
