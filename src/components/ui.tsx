import Link from "next/link";
import type { ReactNode } from "react";

export function Button({ href, children, variant = "solid", external, download }:
  { href: string; children: ReactNode; variant?: "solid" | "line" | "line-dark"; external?: boolean; download?: boolean }) {
  const styles = {
    solid: "bg-brass-400 text-navy-950 hover:bg-brass-300 hover:shadow-lg hover:shadow-brass-400/20",
    line: "border border-navy-300/40 text-fog-50 hover:border-brass-300 hover:text-brass-300",
    "line-dark": "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-fog-50",
  }[variant];
  const cls = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-[0.95rem] font-semibold transition-all hover:-translate-y-0.5 ${styles}`;
  if (external || download) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...(download ? { download: true } : {})}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="graticule bg-navy-950 text-fog-50">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pb-20 md:pt-20">
        <h1 className="display text-[clamp(3rem,10vw,6.5rem)]">{title}<span className="text-brass-400">.</span></h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-300">{children}</div>}
      </div>
    </section>
  );
}

export function SectionTitle({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${light ? "text-fog-50" : "text-navy-950"}`}>{title}</h2>
      <span className="mt-4 block h-1 w-12 rounded-full bg-brass-400" />
      {sub && <p className={`mt-4 text-lg ${light ? "text-navy-300" : "text-navy-800"}`}>{sub}</p>}
    </div>
  );
}