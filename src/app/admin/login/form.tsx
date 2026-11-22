"use client";
import { useActionState } from "react";
import { login } from "../actions";

const field = "mt-1.5 w-full border border-navy-300 bg-white px-3 py-2.5 focus:border-navy-900 focus:outline-none";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="mt-6 space-y-4">
      <label className="block text-sm font-semibold text-navy-900">Email<input name="email" type="email" required autoComplete="username" className={field} /></label>
      <label className="block text-sm font-semibold text-navy-900">Password<input name="password" type="password" required autoComplete="current-password" className={field} /></label>
      {state?.error && <p role="alert" className="text-sm font-medium text-signal">{state.error}</p>}
      <button disabled={pending} className="w-full bg-navy-900 py-3 font-semibold text-fog-50 hover:bg-navy-800 disabled:opacity-60">{pending ? "Signing in…" : "Sign in"}</button>
    </form>
  );
}
