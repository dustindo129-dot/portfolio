"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Re-Architected from WordPress",
    desc: "Rebuilt the entire platform into a modern full-stack React + Node.js app",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Redis / BullMQ Queues",
    desc: "Background job queues and caching to sustain 50K+ user peak traffic",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "SSR + CDN Optimised",
    desc: "Server-side rendering and global CDN for fast load times worldwide",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community + Payments",
    desc: "Real-time notifications, text-to-speech, secure payments, and community tools",
  },
];

export default function ValvrareShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-[#0a0f1e] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px)",
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
            <p className="text-indigo-400 font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Featured Work
            </p>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="font-display font-bold text-3xl text-white">
                Valvrare
              </h3>
              <a
                href="https://valvrareteam.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium border border-indigo-400/30 px-3 py-1 rounded-full hover:border-indigo-400/60"
              >
                <FiExternalLink size={13} />
                valvrareteam.net
              </a>
            </div>
            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              Independently scaled a content platform from WordPress to a modern
              full-stack application. Re-architected with React, Node.js, MongoDB,
              and Redis — growing to{" "}
              <span className="text-white font-medium">50,000+ users</span> with
              fast global access and zero downtime during peak traffic.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "SSR", label: "Server-Side Rendered" },
              { value: "CDN", label: "Global Distribution" },
              { value: "0↓", label: "Downtime on Peak Traffic" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-indigo-400/5 border border-indigo-400/20 rounded-xl px-5 py-4 text-center"
              >
                <p className="font-display font-bold text-2xl text-indigo-300">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-indigo-400/20 shadow-2xl shadow-indigo-500/10 mb-12 group"
        >
          <div className="relative w-full aspect-video">
            <Image
              src="/images/valvrare.jpg"
              alt="Valvrare content platform"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-transparent" />
          </div>

          {/* Live site CTA overlay */}
          <a
            href="https://valvrareteam.net"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
          >
            <FiExternalLink size={15} />
            Visit Live Site
          </a>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-indigo-400/5 border border-indigo-400/15 rounded-xl p-5 hover:border-indigo-400/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-400/15 flex items-center justify-center text-indigo-400 mb-3">
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
          className="pt-6 border-t border-indigo-400/15 flex flex-wrap gap-2"
        >
          {[
            "React", "Node.js", "MongoDB", "Mongoose",
            "Redis", "BullMQ", "Docker", "SSR", "CDN",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-gray-500 bg-indigo-400/5 border border-indigo-400/15 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
