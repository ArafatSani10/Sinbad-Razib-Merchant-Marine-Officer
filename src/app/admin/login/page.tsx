import { hasSupabase } from "@/lib/supabase/env";
import LoginForm from "./form";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <main className="graticule grid min-h-screen place-items-center bg-navy-950 px-5">
      <div className="w-full max-w-sm bg-fog-50 p-8">
        <h1 className="text-2xl font-bold text-navy-950">Admin sign in</h1>
        <p className="mt-1 text-sm text-navy-600">Blog and messages for Sinbad Razib.</p>
        {!hasSupabase && <p className="mt-4 border-l-4 border-signal p-3 text-sm text-signal">Supabase keys are missing. Add them to .env.local.</p>}
        {error === "not-admin" && <p role="alert" className="mt-4 border-l-4 border-signal p-3 text-sm text-signal">This account is not an admin.</p>}
        <LoginForm />
      </div>
    </main>
  );
}