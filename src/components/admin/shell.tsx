import Link from "next/link";
import { logout } from "@/app/admin/actions";

export default function AdminShell({ active, children, unread = 0 }: { active: "posts" | "messages"; children: React.ReactNode; unread?: number }) {
  const item = (on: boolean) => `block px-4 py-2.5 text-sm font-semibold ${on ? "bg-navy-800 text-brass-300" : "text-navy-300 hover:text-fog-50"}`;
  return (
    <div className="md:grid md:min-h-screen md:grid-cols-[230px_1fr]">
      <aside className="bg-navy-950 p-4 md:p-5">
        <p className="display text-2xl text-fog-50">Sinbad <span className="text-brass-400">Razib</span></p>
        <p className="mb-5 mt-1 text-xs text-navy-300">Admin</p>
        <nav className="flex gap-1 md:flex-col" aria-label="Admin">
          <Link href="/admin" className={item(active === "posts")}>Blog posts</Link>
          <Link href="/admin/messages" className={item(active === "messages")}>Messages{unread > 0 && <span className="ml-2 bg-brass-400 px-1.5 py-0.5 text-xs text-navy-950">{unread}</span>}</Link>
          <Link href="/" target="_blank" className={item(false)}>View site</Link>
        </nav>
        <form action={logout} className="mt-4 md:mt-8"><button className="px-4 py-2.5 text-sm font-semibold text-navy-300 hover:text-fog-50">Sign out</button></form>
      </aside>
      <div className="p-5 md:p-10">{children}</div>
    </div>
  );
}
