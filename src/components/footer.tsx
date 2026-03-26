"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#000C1D] border-t border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Brand Column with Logo */}
                    <div className="lg:col-span-4">
                        <div className="space-y-5">
                            {/* Logo Component */}
                            <Link href="/" className="flex items-center gap-2 group flex-1">
                                <div className="w-9 h-9 relative rounded-sm border border-white/10 overflow-hidden group-hover:border-cyan-400/40 transition-all duration-500 bg-white/5">
                                    <Image
                                        src="/assests/logo.png"
                                        alt="S Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-base text-white">
                                        SINBAD <span className="text-cyan-400 not-italic">RAZIB</span>
                                    </span>
                                    <span className="text-[9px] mt-1 text-slate-500 uppercase font-semibold">
                                        Merchant Marine
                                    </span>
                                </div>
                            </Link>

                            <p className="text-slate-400/90 text-sm leading-relaxed max-w-xs font-light pt-2">
                                Navigating Global Waters with Professional Maritime Excellence since 2010.
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/sinbad.razib"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-[#000C1D] hover:border-cyan-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-cyan-500/20"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/8801727835974"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-green-500/20"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 2.13.66 4.105 1.79 5.73L2.53 21.47a.5.5 0 00.61.61l3.74-1.26A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.97 7.97 0 01-4.22-1.21.5.5 0 00-.47-.04l-2.6.87.87-2.6a.5.5 0 00-.04-.47A7.965 7.965 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                                    </svg>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:razib2910@gmail.com"
                                    className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-orange-500/20"
                                    aria-label="Email"
                                >
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white text-sm font-medium uppercase tracking-wide mb-6">Pages</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-slate-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-3 group"
                                    >
                                        <span className="w-1 h-1 bg-cyan-400/0 group-hover:bg-cyan-400 rounded-full transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-white text-sm font-medium uppercase tracking-wide mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cyan-400/70 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <Link
                                    href="mailto:director@marineanimalcare.org"
                                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                                >
                                    director@marineanimalcare.org
                                </Link>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cyan-400/70 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <Link
                                    href="https://wa.me/8801727835974"
                                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                                >
                                    +880 1727-835974
                                </Link>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-cyan-400/70 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-white/2 border border-white/10 p-6 rounded-sm h-full flex flex-col">
                            <h4 className="text-white text-sm font-medium uppercase tracking-wide mb-3">Get in Touch</h4>
                            <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                                For maritime inquiries or collaboration opportunities.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-between w-full py-2.5 px-4 border border-cyan-400/20 text-cyan-400 text-xs font-medium hover:bg-cyan-400 hover:text-[#000C1D] transition-colors duration-300 rounded-sm group"
                            >
                                <span>Contact Me</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © 2026 Sinbad Razib — Merchant Marine Officer
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-slate-500 text-xs hover:text-cyan-400 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-slate-500 text-xs hover:text-cyan-400 transition-colors"
                        >
                            Terms
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-[#000C1D] hover:border-cyan-400 transition-all duration-300"
                            aria-label="Scroll to top"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" />
        </footer>
    );
};

export default Footer;