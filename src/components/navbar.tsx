"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;
  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-navy-800 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${site.name}, home`}>
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-navy-600">
            <Image src="/assests/logo.png" alt="" fill sizes="36px" className="object-cover" />
          </span>
          <span className="display truncate text-xl text-fog-50">Sinbad <span className="text-brass-400">Razib</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={active(l.href) ? "page" : undefined}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${active(l.href) ? "bg-navy-800 text-brass-300" : "text-navy-300 hover:text-fog-50"}`}>
              {l.name}
            </Link>
          ))}
          <a href={site.businessSite} target="_blank" rel="noopener noreferrer"
            className="ml-3 rounded-md border border-brass-400 px-4 py-2 text-sm font-semibold text-brass-300 transition-colors hover:bg-brass-400 hover:text-navy-950">
            Marine Animal Care
          </a>
        </nav>

        <button type="button"
          className="flex shrink-0 items-center gap-2 rounded-md border border-navy-600 px-3 py-2 text-sm font-semibold text-fog-50 md:hidden"
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" onClick={() => setOpen(false)} className="border-t border-navy-800 bg-navy-950 px-4 pb-5 sm:px-5 md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-navy-800">
                <Link href={l.href} className={`block py-4 text-lg font-medium ${active(l.href) ? "text-brass-300" : "text-fog-50"}`}>{l.name}</Link>
              </li>
            ))}
          </ul>
          <a href={site.businessSite} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-md border border-brass-400 py-3 text-center font-semibold text-brass-300">
            Marine Animal Care
          </a>
        </nav>
      )}
    </header>
  );
}