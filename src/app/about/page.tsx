"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  "Navigation",
  "Tanker Cargo Operations",
  "Bridge Resource Management",
  "ECDIS Navigation",
  "Maritime Safety",
  "Emergency Response",
  "Ship Security",
];

const certifications = [
  "Certificate of Competency (COC II)",
  "GMDSS",
  "Radar Navigation",
  "Bridge Resource Management",
  "Advanced Fire Fighting",
  "Tanker Fire Fighting",
  "Medical First Aid",
  "Ship Security Officer",
  "ECDIS",
  "Proficiency in Survival Craft & Rescue Boats",
];

export default function AboutPage() {
  return (
    <main className="bg-[#000C1D] text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-semibold mb-4">
            Mia Mohammad <span className="text-cyan-400">Razibul Islam</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl">
            Professionally known as <span className="text-white">Sinbad Razib</span>,
            a Merchant Marine Officer currently serving as a Chief Officer.
          </p>
        </div>
      </section>


      {/* PROFILE + BIO */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* PROFILE */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border border-cyan-400/30">
              <Image
                src="/assests/pic.jpg"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-center text-lg font-semibold">
              Sinbad Razib
            </h3>

            <p className="text-center text-cyan-400 mb-4">
              Chief Officer
            </p>

            <div className="text-sm text-slate-300 space-y-2">
              <p>📍 Dhaka, Bangladesh</p>
              <p>🌊 Merchant Marine Officer</p>
              <p>⚓ 10+ Years Sea Experience</p>
            </div>
          </div>

          {/* BIO */}
          <div className="lg:col-span-2 space-y-5 text-slate-300 leading-relaxed">

            <p>
              I am Mia Mohammad Razibul Islam, professionally known as
              <span className="text-white font-medium"> Sinbad Razib</span>,
              a Merchant Marine Officer currently serving as a Chief Officer.
            </p>

            <p>
              My maritime career began after graduating from
              <span className="text-white"> Bangladesh Marine Academy</span>,
              where I specialized in Nautical Science.
            </p>

            <p>
              Since then, I have gained extensive sea-going experience working
              on crude oil tankers, chemical tankers, and VLCC vessels across
              international shipping routes.
            </p>

            <p>
              Throughout my career, I have served in multiple navigation ranks,
              developing strong expertise in navigation, tanker cargo
              operations, bridge management, and maritime safety.
            </p>

            <div className="bg-cyan-400/10 border border-cyan-400/20 p-6 rounded-lg">
              Beyond my professional maritime journey, I am also the founder of
              Marine Animal Care, an initiative focused on protecting marine
              wildlife and promoting ocean conservation awareness.
            </div>

          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-4 rounded-lg"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* EXPERIENCE */}
      <section className="py-20 border-t border-white/5">

        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Professional Experience
          </h2>


          {/* CHIEF OFFICER */}
          <div className="mb-10 bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Chief Officer</h3>
            <p className="text-cyan-400">MT Tiger 6 – Panama</p>

            <p className="text-sm text-slate-300">
              Company: Canday Ship Management
            </p>

            <p className="text-sm text-slate-300">
              Type: Crude Oil Tanker
            </p>

            <p className="text-sm text-slate-400">
              Duration: Apr 2025 – Oct 2025
            </p>
          </div>


          {/* SECOND OFFICER */}
          <div className="mb-10 bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Second Officer
            </h3>

            <ul className="space-y-2 text-sm text-slate-300">
              <li>MT Shun Tai – Liberia | Chemul Ship Management | Nov 2022 – Jul 2023</li>
              <li>MT Beks Swan – Marshall Islands | Bernhard Schulte Ship Management | Jun 2022 – Jul 2022</li>
              <li>MT Ocean Autumn – Singapore | Dec 2021 – May 2022</li>
              <li>MT Phoenix Star – Thailand (VLCC) | Feb 2021 – Sept 2021</li>
            </ul>
          </div>


          {/* THIRD OFFICER */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Third Officer
            </h3>

            <div className="flex flex-wrap gap-3">
              {["MT Omera Legacy","MT Omera Queen","MT Navarz","MT Queen 1"].map(v=>(
                <span key={v} className="bg-white/10 px-4 py-2 rounded-md text-sm">
                  {v}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* EDUCATION */}
      <section className="py-20 border-t border-white/5">

        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Education
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h3>Bachelor of Maritime Science – Nautical</h3>
              <p className="text-cyan-400 text-sm">
                Bangladesh Marine Academy, Chittagong
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h3>HSC – Science</h3>
              <p className="text-cyan-400 text-sm">
                Shailkupa Govt Degree College
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h3>SSC – Science</h3>
              <p className="text-cyan-400 text-sm">
                Shailkupa Pilot High School
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CERTIFICATIONS */}
      <section className="py-20 border-t border-white/5">

        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8">
            Certifications & Licenses
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {certifications.map((c,i)=>(
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-md text-sm">
                {c}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* SPECIAL EXPERIENCE */}
      <section className="py-20 border-t border-white/5">

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Dry Docking Experience
            </h3>

            <p className="text-slate-300">
              Aframax Tanker – 2 Times
            </p>

            <p className="text-slate-300">
              VLCC – 1 Time
            </p>
          </div>


          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Locations
            </h3>

            <div className="flex gap-4">
              <span className="bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 rounded-md text-cyan-400">
                Dubai
              </span>

              <span className="bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 rounded-md text-cyan-400">
                China
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 text-center border-t border-white/5">

        <div className="max-w-4xl mx-auto px-6 bg-white/5 border border-white/10 rounded-xl p-12">

          <h2 className="text-3xl font-semibold mb-4">
            Marine <span className="text-cyan-400">Animal Care</span>
          </h2>

          <p className="text-slate-300 mb-6">
            Promoting marine wildlife protection and ocean conservation awareness.
          </p>

          <Link
            href="https://marineanimalcare.org"
            className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition"
          >
            Visit Initiative
          </Link>

        </div>

      </section>

    </main>
  );
}