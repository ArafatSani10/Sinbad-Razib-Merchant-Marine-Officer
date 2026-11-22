"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { SocialRow } from "./socials";

export default function Footer() {
  if (usePathname().startsWith("/admin")) return null;
  return (
    <footer className="graticule bg-navy-950 text-navy-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <p className="display text-4xl text-fog-50">Sinbad <span className="text-brass-400">Razib</span></p>
          <p className="mt-1 text-sm text-navy-300">{site.legalName}</p>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">{site.tagline}</p>
          <div className="mt-6"><SocialRow /></div>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-fog-50">Pages</p>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            {[["Home", "/"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([n, h]) => (
              <li key={h}><Link href={h} className="hover:text-brass-300">{n}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-fog-50">Reach me</p>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li><span className="block text-xs text-navy-600">Personal</span><a className="hover:text-brass-300" href={`mailto:${site.emailPersonal}`}>{site.emailPersonal}</a></li>
            <li><span className="block text-xs text-navy-600">Marine Animal Care</span><a className="hover:text-brass-300" href={`mailto:${site.emailBusiness}`}>{site.emailBusiness}</a></li>
            <li><span className="block text-xs text-navy-600">Phone and WhatsApp</span><a className="hover:text-brass-300" href={`tel:${site.phoneHref}`}>{site.phone}</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-navy-600">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <Link href="/admin" className="hover:text-navy-300">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
