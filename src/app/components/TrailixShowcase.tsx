"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const slides = [
  { src: "/images/trailix3.jpg", alt: "TrailLix — Login Screen" },
  { src: "/images/trailix2.jpg", alt: "TrailLix — Trail Detail" },
  { src: "/images/trailix1.jpg", alt: "TrailLix — Lesson Trails" },
];

const stats = [
  { value: "AI", label: "Gemini-Powered Lessons" },
  { value: "JWT", label: "RBAC Security" },
  { value: "XP", label: "Gamification System" },
  { value: "📜", label: "Certificate Generation" },
];

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Adaptive AI Lessons",
    desc: "Google Gemini generates personalised lesson content per user",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile-First React Native",
    desc: "Expo app for iOS & Android with smooth gamified UX",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Verifiable Certificates",
    desc: "On-chain verifiable certificates issued on trail completion",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "NestJS + PostgreSQL",
    desc: "Relational data modelling with Prisma ORM and Redis caching",
  },
];

export default function TrailixShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-[#0d1526] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14"
        >
          <div className="flex-1">
            <p className="text-violet-400 font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Featured Work
            </p>

            {/* App icon + name */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/trailix-icon.png"
                alt="TrailLix icon"
                width={56}
                height={56}
                className="rounded-2xl shadow-lg shadow-violet-500/20"
              />
              <div>
                <h3 className="font-display font-bold text-3xl text-white leading-tight">
                  TrailLix
                </h3>
                <p className="text-violet-400 text-sm font-medium">AI Education Platform</p>
              </div>
            </div>

            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              Built a mobile-first AI education platform powered by Google Gemini.
              Features adaptive lessons, gamified XP trails, progress tracking, and
              verifiable certificate generation secured with JWT/RBAC.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-violet-400/5 border border-violet-400/20 rounded-xl px-5 py-4 text-center"
              >
                <p className="font-display font-bold text-2xl text-violet-300">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* All 3 screenshots side by side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="relative rounded-2xl overflow-hidden border border-violet-400/20 shadow-xl shadow-violet-500/10"
              style={{ aspectRatio: "9/16" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 380px"
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-violet-400/5 border border-violet-400/15 rounded-xl p-5 hover:border-violet-400/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-violet-400/15 flex items-center justify-center text-violet-400 mb-3">
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6 border-t border-violet-400/15 flex flex-wrap gap-2"
        >
          {[
            "NestJS", "PostgreSQL", "Prisma", "React Native", "Expo",
            "Redis", "Google Gemini AI", "JWT/RBAC", "TypeScript",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-gray-500 bg-violet-400/5 border border-violet-400/15 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
