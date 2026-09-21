"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiShield, FiZap } from "react-icons/fi";

const stats = [
  { value: "7K+", label: "Live Users (Vamp)", color: "text-cyan-400" },
  { value: "50K+", label: "Users (Valvrare)", color: "text-violet-400" },
  { value: "4.9★", label: "App Store Rating", color: "text-cyan-400" },
  { value: "4+", label: "Years Experience", color: "text-violet-400" },
];

const badges = [
  { Icon: FiMapPin, title: "Based in", desc: "Garland, TX · Open to remote" },
  { Icon: FiShield, title: "US Citizen", desc: "No sponsorship required" },
  { Icon: FiZap, title: "Full-Stack", desc: "Node.js · React · TypeScript · Cloud" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.3em] uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
            Who I Am
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-3 rounded-full" />
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-white font-medium">
                  Senior Software Engineer
                </span>{" "}
                with 4+ years of experience building full-stack products that
                scale. I architect systems end-to-end — from API design and
                database modeling to cloud infrastructure and DevOps.
              </p>
              <p>
                Currently, I lead engineering at{" "}
                <span className="text-cyan-400 font-medium">Vamp</span>, an
                all-electric rideshare platform I built from the ground up. In
                under six months, we grew to{" "}
                <span className="text-white font-medium">~7,000 live customers</span>{" "}
                with 4.9-star ratings on both app stores.
              </p>
              <p>
                Before that, I independently scaled{" "}
                <span className="text-cyan-400 font-medium">Valvrare</span>, a
                content platform, from WordPress to a modern full-stack app
                serving{" "}
                <span className="text-white font-medium">50,000+ users</span> —
                re-architected with React, Node.js, Redis, and MongoDB.
              </p>
              <p>
                I care deeply about code quality, performance, and building
                things that real people actually love to use.
              </p>
            </div>

            {/* Badges + Stats */}
            <div className="space-y-4">
              {badges.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-[#111827] border border-gray-800 rounded-xl p-5 flex items-start gap-4 hover:border-gray-700 transition-colors"
                >
                  <div className="p-2 bg-cyan-400/10 rounded-lg mt-0.5 shrink-0">
                    <Icon className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#111827] border border-gray-800 rounded-xl p-5 text-center hover:border-gray-700 transition-colors"
                  >
                    <p
                      className={`font-display font-bold text-3xl ${s.color}`}
                    >
                      {s.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
