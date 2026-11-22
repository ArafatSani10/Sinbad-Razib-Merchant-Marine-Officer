import type { Metadata } from "next";
import Image from "next/image";
import { Anchor, Newspaper, Waves } from "lucide-react";
import Reveal from "@/components/reveal";
import { Button, SectionTitle } from "@/components/ui";
import { site } from "@/lib/site";
import Journey from "./journey";

export const metadata: Metadata = {
  title: "About",
  description: "Sinbad Razib (Mia Mohammad Razibul Islam): merchant marine officer, Chief Reporter at Daily Vorer Khobor, and founder of Marine Animal Care.",
};

const story = [
  { Icon: Anchor, title: "At sea", text: "I graduated from Bangladesh Marine Academy in Nautical Science and have served in several navigation ranks on crude oil tankers, chemical tankers and VLCCs across international shipping routes." },
  { Icon: Newspaper, title: "In the press and public life", text: "I am Chief Reporter at Daily Vorer Khobor, Joint Secretary General of Zia Cyber Force, and Joint Convener of Bangladesh Jatiyotabadi Krishak Dal, Dhaka Mahanagar Dakshin." },
  { Icon: Waves, title: "For the ocean", text: "I founded Marine Animal Care to protect marine wildlife and raise awareness about ocean conservation. I am also President of the Association of Maritime Professionals, Bangladesh." },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO: arch portrait */}
      <section className="graticule relative overflow-hidden bg-navy-950 text-fog-50">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brass-400/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 pt-14 md:grid-cols-[1fr_auto] md:pt-20">
          <div className="hero-rise pb-12 md:pb-20">
            <p className="inline-block rounded-full border border-brass-400/50 px-4 py-1.5 text-sm font-medium text-brass-300">About</p>
            <h1 className="display mt-6 text-[clamp(2.8rem,9vw,6.4rem)]">Mia Mohammad<br /><span className="text-brass-400">Razibul Islam</span></h1>
            <p className="mt-5 text-xl text-fog-100">Known as Sinbad Razib. Captain, Merchant Marine Officer.</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy-300">Based in {site.location}. Chief Reporter at Daily Vorer Khobor, President of the Association of Maritime Professionals, Bangladesh, and Founder and Director of Marine Animal Care.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href={site.cv} download>Download CV</Button><Button href="/contact" variant="line">Contact me</Button></div>
          </div>
          <div className="hero-rise mx-auto w-full max-w-[20rem] md:mx-0 md:w-[22rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border-4 border-b-0 border-brass-400 bg-fog-50">
              <Image src="/assests/pic.jpg" alt="Portrait of Sinbad Razib" fill priority sizes="352px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-b border-fog-200 bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
          {[
            ["Rank", "Captain"],
            ["Training", "Bangladesh Marine Academy"],
            ["Languages", "Bengali, English"],
            ["Based in", site.location],
          ].map(([k, v]) => (
            <div key={k} className="py-6 pr-4"><dt className="text-sm text-navy-600">{k}</dt><dd className="mt-1 font-bold text-navy-950">{v}</dd></div>
          ))}
        </dl>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal><SectionTitle title="Three parts of one life" /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {story.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="h-full rounded-xl border border-fog-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brass-400 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-900 text-brass-400"><Icon size={22} /></span>
                <h3 className="mt-5 text-xl font-bold text-navy-950">{title}</h3>
                <p className="mt-3 leading-relaxed text-navy-800">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal><SectionTitle title="Background and career" sub="Choose a tab to explore." /></Reveal>
          <div className="mt-10"><Journey /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="graticule bg-navy-950 text-fog-50">
        <Reveal>
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="display text-[clamp(2.4rem,7vw,4.5rem)]">Work with me</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-navy-300">Shipping, press, conservation or community enquiries are welcome.</p>
            <div className="mt-8"><Button href="/contact">Send a message</Button></div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}