"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Vamp",
    role: "Senior Software Engineer",
    type: "Full-time · Plano, TX",
    period: "2025 – Present",
    accent: "cyan",
    highlights: [
      "Lead the design and development of a full-stack, microservices-based rideshare platform using Node.js, TypeScript, React, and JavaScript.",
      "Designed and built RESTful APIs across 5+ Node.js/Express microservices (user, order, location, payment, notification) behind an Nginx API gateway.",
      "Built the React/Next.js admin dashboard with live dispatch, map-based driver tracking, and real-time analytics.",
      "Integrated Stripe payments, third-party mapping/dispatch, and messaging; containerized all services with Docker on AWS.",
      "Scaled to ~7,000 live customers in under 6 months — 4.9-star rated on both app stores as an all-electric rideshare.",
      "Lead code reviews, mentor engineers, and champion testing, code quality, and documentation best practices.",
    ],
    tech: [
      "Node.js", "TypeScript", "React", "Next.js", "MongoDB", "Redis",
      "Kafka", "Docker", "AWS", "Nginx", "Stripe",
    ],
  },
  {
    company: "TrailLix",
    role: "Full-Stack Developer",
    type: "Remote",
    period: "2024 – 2025",
    accent: "violet",
    highlights: [
      "Built a mobile-first AI education platform with a NestJS backend, PostgreSQL/Prisma data modeling, and Redis caching.",
      "Developed the React Native (Expo) mobile app and integrated Google Gemini AI for personalized, adaptive lessons.",
      "Secured all endpoints with JWT/RBAC; implemented gamification, progress tracking, and verifiable certificate generation.",
    ],
    tech: [
      "NestJS", "PostgreSQL", "Prisma", "React Native", "Expo", "Redis",
      "Google Gemini AI", "JWT/RBAC",
    ],
  },
  {
    company: "Valvrareteam",
    role: "Full-Stack Software Engineer",
    type: "Remote",
    period: "2022 – 2025",
    accent: "cyan",
    highlights: [
      "Independently built and scaled Valvrare, a content platform, re-architecting it from WordPress into a modern full-stack app.",
      "Grew the platform to 50,000+ users with React, Node.js, and MongoDB.",
      "Designed RESTful APIs with Redis/BullMQ caching and background job queues to handle peak traffic.",
      "Implemented SSR, CDN optimization, text-to-speech, real-time notifications, secure payments, and community tools.",
      "Containerized the full stack with Docker for reliable, repeatable deployments.",
    ],
    tech: [
      "React", "Node.js", "MongoDB", "Redis", "BullMQ", "Docker", "SSR", "CDN",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.3em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-14">
            Where I&apos;ve Worked
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-3 rounded-full" />
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent hidden md:block" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                  className="md:pl-14 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[6px] top-7 w-[26px] h-[26px] rounded-full border-2 hidden md:flex items-center justify-center ${
                      exp.accent === "cyan"
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-violet-400 bg-violet-400/10"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        exp.accent === "cyan"
                          ? "bg-cyan-400"
                          : "bg-violet-400"
                      }`}
                    />
                  </div>

                  <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-gray-700 transition-colors group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white">
                          {exp.role}
                        </h3>
                        <p
                          className={`font-medium text-sm mt-1 ${
                            exp.accent === "cyan"
                              ? "text-cyan-400"
                              : "text-violet-400"
                          }`}
                        >
                          {exp.company} &nbsp;·&nbsp; {exp.type}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-gray-500 bg-gray-800/60 border border-gray-700/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                        >
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                              exp.accent === "cyan"
                                ? "bg-cyan-400"
                                : "bg-violet-400"
                            }`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono text-gray-400 bg-gray-800/80 border border-gray-700/50 px-2.5 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
