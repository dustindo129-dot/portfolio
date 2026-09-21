"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: "Text & Image Translation",
    desc: "Intelligent workflows for both plain text and multimodal image content",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Google Gemini AI",
    desc: "Advanced multimodal AI for context-aware, accurate translations",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cross-Platform Desktop",
    desc: "Ships natively on Windows, macOS, and Linux via Electron",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "React + Node + Electron",
    desc: "Full-stack TypeScript — shared code across main, renderer, and backend",
  },
];

export default function MonkeyShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-[#0d1526] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,146,60,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12"
        >
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Personal Project · 2025
            </p>

            {/* Logo image + title */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/monkey-logo.png"
                alt="MonkeyTranslate logo"
                width={260}
                height={173}
                className="rounded-xl bg-white p-3"
              />
            </div>

            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              A cross-platform desktop application for intelligent text and image
              translation workflows. Paste text or drop in an image and let Google
              Gemini AI handle the rest — ships natively on{" "}
              <span className="text-white font-medium">Windows, macOS, and Linux</span>.
            </p>

            <a
              href="https://github.com/dustindo129-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-orange-400 hover:text-orange-300 border border-orange-400/30 hover:border-orange-400/60 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <FiGithub size={15} />
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {[
              { value: "3", label: "Platforms Supported" },
              { value: "AI", label: "Gemini-Powered" },
              { value: "TS", label: "Full TypeScript" },
              { value: "2025", label: "Released" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-orange-400/5 border border-orange-400/20 rounded-xl px-5 py-4 text-center"
              >
                <p className="font-display font-bold text-2xl text-orange-300">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Demo screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl shadow-orange-500/10 mb-12 mx-auto max-w-[800px]"
        >
          {/* Plain <img> so animated GIF frames are preserved */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/monkey-demo.gif"
            alt="MonkeyTranslate app demo"
            className="w-full h-auto block"
          />

          {/* Caption badge */}
          <div className="absolute bottom-4 left-5 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-white text-xs font-medium">Live app demo — image translation workflow</span>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-orange-400/5 border border-orange-400/15 rounded-xl p-5 hover:border-orange-400/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-orange-400/15 flex items-center justify-center text-orange-400 mb-3">
                {f.icon}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 border-t border-orange-400/15 flex flex-wrap gap-2"
        >
          {["React", "Electron", "Node.js", "TypeScript", "Google Gemini AI", "Windows", "macOS", "Linux"].map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-gray-500 bg-orange-400/5 border border-orange-400/15 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
