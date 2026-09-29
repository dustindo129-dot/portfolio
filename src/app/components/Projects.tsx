"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "Vamp — All-Electric Rideshare Platform",
    description:
      "A production microservices rideshare platform built from the ground up. Features live driver dispatch, real-time tracking, Stripe payments, and a React/Next.js admin dashboard with live analytics. Scaled to 7,000+ customers with 4.9★ ratings in under 6 months.",
    tech: [
      "Node.js", "TypeScript", "React", "Next.js",
      "MongoDB", "Redis", "Kafka", "Docker", "AWS", "Nginx",
    ],
    github: null,
    live: null,
    ios: "https://apps.apple.com/us/app/vamp-rideshare-revamped/id6758463258",
    android: "https://play.google.com/store/apps/details?id=com.vampmobility.customer",
    badge: "Production · 7K+ Users",
    accent: "cyan",
    featured: true,
    image: "/images/vampwebsite1.png",
  },
  {
    name: "Valvrare — Content Platform",
    description:
      "Re-architected a content platform from WordPress into a modern full-stack app. Serves 50,000+ users with Redis/BullMQ queues, CDN optimization, SSR, real-time notifications, text-to-speech, and secure payments.",
    tech: [
      "React", "Node.js", "MongoDB", "Redis",
      "BullMQ", "Docker", "SSR", "CDN",
    ],
    github: null,
    live: "https://valvrareteam.net",
    ios: null,
    android: null,
    badge: "Production · 50K+ Users",
    accent: "violet",
    featured: true,
    image: "/images/valvrare.jpg",
  },
  {
    name: "MonkeyTranslate",
    description:
      "A cross-platform desktop app (Windows, macOS, Linux) for intelligent text and image translation. Built with React + Electron + Node.js and integrates Google Gemini AI for advanced multimodal processing.",
    tech: ["React", "Electron", "Node.js", "TypeScript", "Google Gemini AI"],
    github: "https://github.com/dustindo129-dot/MonkeyTranslate",
    live: null,
    ios: null,
    android: null,
    badge: "Personal Project · 2025",
    accent: "cyan",
    featured: false,
    image: "/images/monkey-logo.png",
    imageFit: "contain",
    imagePad: "p-3",
  },
  {
    name: "TrailLix — AI Education Platform",
    description:
      "A mobile-first AI education platform with personalized adaptive lessons powered by Google Gemini AI. Features gamification, progress tracking, verifiable certificate generation, and full JWT/RBAC security.",
    tech: [
      "NestJS", "PostgreSQL", "Prisma",
      "React Native", "Expo", "Redis", "Gemini AI",
    ],
    github: null,
    live: "https://apps.apple.com/ci/app/trailix-h%E1%BB%8Dc-prompt-ai/id6756608252",
    ios: null,
    android: null,
    badge: "Client Project · 2024–2025",
    accent: "violet",
    featured: false,
    image: "/images/trailix-icon.png",
    imageFit: "contain",
    imagePad: "p-10",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.3em] uppercase mb-3">
            Projects
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
            What I&apos;ve Built
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-3 rounded-full" />
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`bg-[#111827] border rounded-xl overflow-hidden flex flex-col hover:border-gray-600 transition-colors group ${
                  project.featured ? "border-gray-700" : "border-gray-800"
                }`}
              >
                {/* Image preview */}
                {project.image && (
                  <div
                    className={`relative w-full aspect-video overflow-hidden ${
                      project.imageFit === "contain" ? "bg-white" : ""
                    }`}
                  >
                    {project.imageFit === "contain" ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className={`object-contain ${"imagePad" in project ? project.imagePad : "p-8"}`}
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    ) : (
                      <>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                      </>
                    )}
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                      project.accent === "cyan"
                        ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/5"
                        : "text-violet-400 border-violet-400/30 bg-violet-400/5"
                    }`}
                  >
                    {project.badge}
                  </span>
                  <div className="flex gap-3 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.ios && (
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors"
                        aria-label="App Store"
                      >
                        <FaApple size={18} />
                      </a>
                    )}
                    {project.android && (
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors"
                        aria-label="Google Play"
                      >
                        <FaGooglePlay size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-display font-bold text-lg text-white mb-3 group-hover:${
                    project.accent === "cyan" ? "text-cyan-300" : "text-violet-300"
                  } transition-colors`}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-gray-500 bg-gray-800/60 border border-gray-700/40 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>{/* close p-7 wrapper */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
