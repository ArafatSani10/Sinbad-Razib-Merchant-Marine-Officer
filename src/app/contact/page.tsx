"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="bg-[#000C1D] min-h-screen text-white overflow-hidden">

      {/* HERO */}
      <section className="py-28 border-b border-white/10 relative">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_60%)]" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-6 text-center relative"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Contact <span className="text-cyan-400">Us</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-slate-300 mt-6 max-w-xl mx-auto text-lg"
          >
            Feel free to contact for collaborations, maritime inquiries,
            or marine conservation initiatives.
          </motion.p>
        </motion.div>

      </section>

      {/* CONTACT CARDS */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* PHONE */}
          <a
            href="tel:+8801727835974"
            className="group bg-white/5 border border-white/10 backdrop-blur-xl p-7 rounded-xl text-center hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition"
          >
            <FaPhoneAlt className="text-cyan-400 text-2xl mx-auto mb-4 group-hover:scale-110 transition"/>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-slate-300 text-sm">
              +880 1727-835974
            </p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/8801727835974"
            target="_blank"
            className="group bg-white/5 border border-white/10 backdrop-blur-xl p-7 rounded-xl text-center hover:border-green-400/60 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition"
          >
            <FaWhatsapp className="text-green-400 text-3xl mx-auto mb-4 group-hover:scale-110 transition"/>
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <p className="text-slate-300 text-sm">
              Chat on WhatsApp
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:director@marineanimalcare.org"
            className="group bg-white/5 border border-white/10 backdrop-blur-xl p-7 rounded-xl text-center hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition"
          >
            <FaEnvelope className="text-cyan-400 text-2xl mx-auto mb-4 group-hover:scale-110 transition"/>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-slate-300 text-sm break-all">
              director@marineanimalcare.org
            </p>
          </a>

          {/* LOCATION */}
          <div
            className="group bg-white/5 border border-white/10 backdrop-blur-xl p-7 rounded-xl text-center hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition"
          >
            <FaMapMarkerAlt className="text-cyan-400 text-2xl mx-auto mb-4 group-hover:scale-110 transition"/>
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-slate-300 text-sm">
              Dhaka, Bangladesh
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="pb-28">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-12">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 rounded-lg px-5 py-3 focus:outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 rounded-lg px-5 py-3 focus:outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-transparent border border-white/20 rounded-lg px-5 py-3 focus:outline-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}