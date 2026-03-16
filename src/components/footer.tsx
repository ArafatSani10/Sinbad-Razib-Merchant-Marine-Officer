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

                            <div className="flex items-center gap-3 pt-3">
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-[#000C1D] hover:border-cyan-400 transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-[#000C1D] hover:border-cyan-400 transition-all duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.521 5.854L.529 23.22c-.094.364.232.69.596.596l5.366-1.005C8.12 23.497 10.016 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.906 0-3.73-.513-5.3-1.418l-.384-.229-3.979.746.752-3.977-.218-.391A9.944 9.944 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-[#000C1D] hover:border-cyan-400 transition-all duration-300"
                                    aria-label="Email"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </Link>
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
                                    href="https://wa.me/yournumber"
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