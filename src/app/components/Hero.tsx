"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Animated glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1f2937 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          {...fadeUp(0.1)}
          className="text-cyan-400 font-semibold text-sm mb-4 tracking-[0.3em] uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-bold text-6xl md:text-7xl lg:text-8xl mb-4 leading-none"
        >
          <span className="bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Dustin Do
          </span>
        </motion.h1>

        <motion.h2
          {...fadeUp(0.3)}
          className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Senior Software Engineer
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.4)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          4+ years building full-stack products at scale. I architect
          microservices, ship features fast, and lead teams that care about
          quality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#experience"
            className="bg-cyan-400 text-[#0a0f1e] px-7 py-3.5 rounded-xl font-bold hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-400/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-600 text-gray-300 px-7 py-3.5 rounded-xl font-bold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-center gap-6"
        >
          {[
            {
              href: "https://github.com/dustindo129-dot",
              Icon: FiGithub,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/dustin-do-331509204",
              Icon: FiLinkedin,
              label: "LinkedIn",
            },
            {
              href: "#contact",
              Icon: FiMail,
              label: "Contact",
            },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors"
        style={{ animation: "bounce 2s infinite" }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
