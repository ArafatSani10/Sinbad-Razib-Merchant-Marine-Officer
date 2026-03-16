"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const words = ["Chief Officer", "VLCC Specialist", "Tanker Expert", "Nautical Science Graduate"];
    const typingSpeed = isDeleting ? 50 : 100;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, typingSpeed, wordIndex, words]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000C1D] pt-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
                </div>
                <div className="absolute top-1/4 -left-20 w-125 h-125 bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-blue-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 py-1 px-3 border border-cyan-500/20 bg-cyan-500/5 rounded-sm mb-6">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                    <span className="text-sm uppercase  text-cyan-400 min-w-37.5">
                        {displayText}<span className="animate-ping">|</span>
                    </span>
                </div>

                <h1 className="text-6xl md:text-7xl  text-white mb-4 leading-none  uppercase">
                    SINBAD <span className="text-cyan-500 not-italic font-light opacity-90">RAZIB</span>
                </h1>

                <p className="text-xl md:text-xl text-slate-400 max-w-3xl mx-auto mb-5 ">
                    Navigating Global Waters with <span className="text-white">Professional Maritime Expertise</span>.
                </p>

                <p className="text-xs md:text-base text-slate-500 max-w-xl mx-auto mb-10 ">
                    Experienced Merchant Marine Officer with extensive sea service on crude oil, chemical, and VLCC tankers. Graduate of Bangladesh Marine Academy with over a decade of international maritime operations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/cv.pdf"
                        className="w-full sm:w-auto px-10 py-3.5 bg-cyan-500 text-[#000C1D] text-sm  uppercase rounded-sm transition-all hover:bg-cyan-400 active:scale-95"
                    >
                        Download CV
                    </Link>
                    <Link
                        href="/about"
                        className="w-full sm:w-auto px-10 py-3.5 border border-white/10 text-white text-sm  uppercase rounded-sm transition-all hover:bg-white/5 active:scale-95"
                    >
                        More About Me
                    </Link>
                </div>
            </div>


        </section>
    );
};

export default Hero;