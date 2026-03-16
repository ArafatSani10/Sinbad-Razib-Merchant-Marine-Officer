"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000C1D] border-t border-white/5 relative">
      {/* Decorative wave line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-medium text-white">Sinbad Razib</h3>
                <p className="text-cyan-400/80 text-sm mt-1">Merchant Marine Officer</p>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Navigating Global Waters with Professional Maritime Excellence since 2010.
              </p>
              
              {/* Email */}
              <div className="flex items-center gap-3 text-slate-400 text-sm group">
                <Mail className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                <Link 
                  href="mailto:director@marineanimalcare.org"
                  className="hover:text-cyan-400 transition-colors"
                >
                  director@marineanimalcare.org
                </Link>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-4">
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-[#000C1D] hover:border-cyan-400 transition-all duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-[#000C1D] hover:border-cyan-400 transition-all duration-300"
                >
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.521 5.854L.529 23.22c-.094.364.232.69.596.596l5.366-1.005C8.12 23.497 10.016 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.906 0-3.73-.513-5.3-1.418l-.384-.229-3.979.746.752-3.977-.218-.391A9.944 9.944 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-medium uppercase mb-6">Pages</h4>
            <ul className="space-y-4">
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-400/0 group-hover:bg-cyan-400 rounded-full transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-medium uppercase mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-400/60 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm">WhatsApp</p>
                  <Link 
                    href="https://wa.me/yournumber" 
                    className="text-white text-sm hover:text-cyan-400 transition-colors"
                  >
                    +880 1XXX-XXXXXX
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400/60 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <Link 
                    href="mailto:director@marineanimalcare.org" 
                    className="text-white text-sm hover:text-cyan-400 transition-colors"
                  >
                    director@marineanimalcare.org
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400/60 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white text-sm">Dhaka, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Marine Animal Care Preview */}
          <div className="lg:col-span-3">
            <div className="bg-cyan-400/[0.02] border border-cyan-400/10 p-6 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <h5 className="text-white text-sm font-medium">Marine Animal Care</h5>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Protecting marine wildlife and promoting ocean conservation awareness.
              </p>
              <Link 
                href="https://marineanimalcare.org" 
                target="_blank"
                className="inline-flex items-center gap-2 text-cyan-400 text-xs hover:text-white transition-colors group"
              >
                Visit Initiative
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </footer>
  );
};

export default Footer;