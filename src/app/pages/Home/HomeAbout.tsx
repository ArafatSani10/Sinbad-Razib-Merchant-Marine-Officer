"use client";

import React, { useState } from "react";
import Link from "next/link";


const HomeAbout = () => {
  const [] = useState(null);


  return (
    <section className="bg-transparent py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mb-32">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                I am a <span className="text-white font-medium">Merchant Marine Officer</span>{" "}
                with extensive sea-going experience on crude oil and chemical tankers. Over
                the years, I have served on several international vessels in different
                navigation ranks, gaining strong expertise in tanker operations, navigation,
                and maritime safety.
              </p>
              <p>
                I graduated from{" "}
                <span className="text-white font-medium">Bangladesh Marine Academy</span>{" "}
                with a specialization in Nautical Science, which laid the foundation for my
                professional maritime career.
              </p>
              <p>
                Beyond my work at sea, I am also passionate about ocean conservation and
                marine wildlife protection.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block py-3 px-8 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-[#000C1D] transition-colors duration-300 rounded-sm"
              >
                More About Me
              </Link>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white/2 border border-white/10 p-3 rounded-sm h-full flex flex-col">
              <h3 className="text-white text-xl font-medium mb-6 pb-3 border-b border-cyan-400/20">
                Core Competencies
              </h3>
              <div className="flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">⚓</span>
                    <span className="text-slate-200 text-sm uppercase">Tanker Operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">🧭</span>
                    <span className="text-slate-200 text-sm uppercase">Strategic Navigation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">🛟</span>
                    <span className="text-slate-200 text-sm uppercase">Maritime Safety</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">🚢</span>
                    <span className="text-slate-200 text-sm uppercase">VLCC Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">🎮</span>
                    <span className="text-slate-200 text-sm uppercase">Bridge Resource</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">📦</span>
                    <span className="text-slate-200 text-sm uppercase">Cargo Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left - Card with Lottie */}
          <div className="h-full order-2 lg:order-1">
            <div className="bg-cyan-400/2 border border-cyan-400/20 p-3 rounded-sm h-full flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6 pb-3 border-b border-cyan-400/20">
                 
                  <h4 className="text-white text-xl font-medium">Marine Animal Care</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Protecting the ocean's vital ecosystem through active conservation and global awareness.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Founded to inspire people to care about marine life and support ocean conservation efforts.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The ocean is not only my workplace but also a vital ecosystem that needs protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Marine <span className="text-cyan-400">Care</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Alongside my maritime career, I founded{" "}
                <span className="text-white font-medium">Marine Animal Care</span>, an
                initiative dedicated to protecting marine wildlife and raising awareness
                about ocean conservation.
              </p>
              <p>
                Through this initiative, we aim to inspire people to care about marine life 
                and support ocean conservation efforts worldwide.
              </p>
            </div>
            <div>
              <Link
                href="https://marineanimalcare.org"
                target="_blank"
                className="inline-block py-3 px-8 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium hover:bg-cyan-400 hover:text-[#000C1D] transition-colors duration-300 rounded-sm"
              >
                Visit Marine Animal Care
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;