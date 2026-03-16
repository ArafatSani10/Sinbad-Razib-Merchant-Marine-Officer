"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "py-2 bg-[#000C1D]/90 backdrop-blur-xl border-b border-white/5"
                    : "py-4 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">

                {/* Left: Logo Section */}
                <Link href="/" className="flex items-center gap-2 group flex-1">
                    <div className="w-9 h-9 relative rounded-sm border border-white/10 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500 bg-white/5">
                        <Image
                            src="/assests/logo.png"
                            alt="S Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-base  text-white">
                            SINBAD <span className="text-cyan-400 not-italic">RAZIB</span>
                        </span>
                        <span className="text-[9px] mt-1 text-slate-500 uppercase font-semibold">
                            Merchant Marine
                        </span>
                    </div>
                </Link>

                {/* Center: Nav Items */}
                <div className="hidden md:flex items-center gap-1 justify-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-5 py-1.5 text-xs uppercase transition-all duration-300 rounded-sm border ${isActive
                                        ? "bg-cyan-500/10 backdrop-blur-md border-cyan-500/30 text-cyan-400"
                                        : "bg-transparent border-transparent text-slate-400 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right: Button Section */}
                <div className="hidden md:flex flex-1 justify-end">
                    <Link
                        href="https://marineanimalcare.org"
                        target="_blank"
                        className="px-5 py-2 border border-cyan-500/20 text-cyan-400 text-xs uppercase  rounded-sm transition-all hover:bg-cyan-500 hover:text-[#000C1D]"
                    >
                        Marine Care
                    </Link>
                </div>

                {/* Mobile: Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 focus:outline-none"
                >
                    <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                    <span className={`h-0.5 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : "w-4"}`} />
                    <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-5"}`} />
                </button>

                {/* Mobile: Pop-up Menu */}
                <div
                    className={`absolute top-[120%] right-4 w-64 bg-[#001529]/95 border border-white/10 rounded-sm p-1 transition-all duration-500 origin-top-right backdrop-blur-3xl ${isOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-3 rounded-sm text-sm uppercase font-semibold transition-all ${isActive
                                            ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="h-1 bg-white/5 my-1" />
                        <Link
                            href="https://marineanimalcare.org"
                            target="_blank"
                            className="px-5 py-2 border border-cyan-500/20 text-cyan-400 text-xs uppercase font-semibold rounded-sm transition-all hover:bg-cyan-500 hover:text-[#000C1D]"
                        >
                            Marine Care
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;