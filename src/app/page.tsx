import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Ship, Waves } from "lucide-react";
import Reveal from "@/components/reveal";
import { RoleGlyph } from "@/components/role-icons";
import { EmptyPosts, PostCard } from "@/components/post-list";
import { Button, SectionTitle } from "@/components/ui";
import { getPublishedPosts } from "@/lib/posts";
import { career, education, roles, site, skills } from "@/lib/site";

export const revalidate = 60;

export default async function Home() {
  const posts = await getPublishedPosts(3);

  return (
    <main>
      {/* HERO */}
      <section className="graticule relative overflow-hidden bg-navy-950 text-fog-50">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brass-400/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div className="hero-rise">
            <p className="inline-block rounded-full border border-brass-400/50 px-4 py-1.5 text-sm font-medium text-brass-300">Captain, Merchant Marine Officer</p>
            <h1 className="display mt-6 text-[clamp(3.6rem,13vw,8.5rem)]">Sinbad <span className="text-brass-400">Razib</span></h1>
            <p className="mt-4 text-lg text-navy-300">{site.legalName}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog-100 md:text-xl">
              Experienced merchant marine officer with sea service on crude oil, chemical and VLCC tankers. Graduate of Bangladesh Marine Academy. Founder of Marine Animal Care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">About me</Button>
              <Button href="/blog" variant="line">Read the blog</Button>
              <Button href={site.cv} download variant="line">Download CV</Button>
            </div>
          </div>

          <div className="hero-rise mx-auto w-full max-w-[22rem] md:max-w-none">
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-brass-400/60" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl bg-fog-50 p-2 shadow-2xl shadow-black/40">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src="/assests/pic.jpg" alt="Portrait of Sinbad Razib" fill priority sizes="(min-width: 768px) 420px, 90vw" className="object-cover object-top" />
                </div>
              </div>
              <div className="absolute -bottom-5 left-4 right-4 rounded-xl bg-navy-900 px-5 py-3 shadow-xl ring-1 ring-brass-400/40 sm:left-auto sm:right-[-0.5rem] sm:w-64">
                <p className="text-sm text-navy-300">Founder and Director</p>
                <p className="font-bold text-fog-50">Marine Animal Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal><SectionTitle title="Roles and positions" sub="Across the sea, the press, public life and conservation." /></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.title + r.org} delay={(i % 3) * 80}>
              <div className="group h-full rounded-xl border border-fog-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brass-400 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-900 text-brass-400 transition-colors group-hover:bg-brass-400 group-hover:text-navy-950"><RoleGlyph icon={r.icon} /></span>
                <p className="mt-5 text-sm font-medium text-navy-600">{r.group}</p>
                <h3 className="mt-1 text-xl font-bold text-navy-950">{r.title}</h3>
                {r.titleBn && <p className="text-navy-800">{r.titleBn}</p>}
                <p className="mt-3 text-navy-900">{r.org}</p>
                {r.orgBn && <p className="mt-1 text-sm text-navy-600">{r.orgBn}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT + EDUCATION */}
      <section className="bg-fog-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
          <Reveal>
            <SectionTitle title="About" />
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-navy-900">
              <p>My maritime career began after graduating from Bangladesh Marine Academy, where I specialised in Nautical Science.</p>
              <p>Since then I have worked on crude oil tankers, chemical tankers and VLCCs on international routes, serving in several navigation ranks.</p>
              <p>Alongside my sea career I report for Daily Vorer Khobor, serve in public life, and run Marine Animal Care.</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => <li key={s} className="rounded-full border border-fog-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-800 transition-colors hover:border-brass-400">{s}</li>)}
            </ul>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-sea-700">Full profile <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link>
          </Reveal>

          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.year} delay={i * 90}>
                <div className="flex items-center gap-5 rounded-xl border border-fog-200 bg-white p-5 transition-all hover:translate-x-1 hover:border-brass-400">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-navy-900 text-brass-400"><GraduationCap /></span>
                  <div>
                    <p className="text-sm font-semibold text-sea-700">{e.year}</p>
                    <p className="font-bold text-navy-950">{e.title}</p>
                    <p className="text-navy-800">{e.place}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEA SERVICE */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal><SectionTitle title="Sea service" sub="Vessels and ranks, from my CV." /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {career.map((c, i) => (
            <Reveal key={c.rank} delay={i * 90}>
              <div className="h-full rounded-xl bg-navy-900 p-7 text-fog-50 transition-transform hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-800 text-brass-400"><Ship size={22} /></span>
                <h3 className="mt-5 text-2xl font-bold">{c.rank}</h3>
                <ul className="mt-5 space-y-4">
                  {c.entries.map((e) => (
                    <li key={e.vessel} className="border-l-2 border-brass-400/60 pl-4">
                      <p className="font-semibold">{e.vessel}</p>
                      {e.period && <p className="text-sm text-navy-300">{e.period}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARINE ANIMAL CARE */}
      <section className="px-5 pb-20 md:pb-28">
        <Reveal>
          <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl bg-sea-900 p-8 text-fog-50 md:grid-cols-[auto_1fr_auto] md:p-12">
            <span className="grid h-20 w-20 place-items-center rounded-2xl bg-sea-700 text-brass-300"><Waves size={40} /></span>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Marine Animal Care</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fog-100">Protecting the ocean’s vital ecosystem through active conservation and global awareness. Founded to inspire people to care about marine life and support ocean conservation.</p>
            </div>
            <Button href={site.businessSite} external>Visit website</Button>
          </div>
        </Reveal>
      </section>

      {/* BLOG */}
      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionTitle title="From the blog" />
              <Link href="/blog" className="group inline-flex items-center gap-2 font-semibold text-sea-700">All posts <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </Reveal>
          <div className="mt-10">
            {posts.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <div key={p.id} className="relative"><PostCard post={p} /></div>)}</div> : <EmptyPosts />}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="graticule bg-navy-950 text-fog-50">
        <Reveal>
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="display text-[clamp(2.6rem,8vw,5rem)]">Get in touch</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-navy-300">For shipping, press, conservation or community enquiries, send me a message.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Button href="/contact">Contact me</Button><Button href={`mailto:${site.emailPersonal}`} variant="line" external>{site.emailPersonal}</Button></div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}