"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import VampLogo from "./VampLogo";

const slides = [
  { src: "/images/vampwebsite1.png", alt: "Vamp — Vetted Drivers" },
  { src: "/images/vampwebsite2.png", alt: "Vamp — Fully Self Driving (Supervised)" },
  { src: "/images/vampwebsite3.png", alt: "Vamp — All Electric Vehicles" },
  { src: "/images/vampwebsite4.png", alt: "Vamp — Video Live Streaming" },
  { src: "/images/vampwebsite5.png", alt: "Vamp — Cost 20% Less" },
];

const stats = [
  { value: "7K+", label: "Live Customers" },
  { value: "4.9★", label: "App Store Rating" },
  { value: "100%", label: "Electric Fleet" },
  { value: "~6mo", label: "To Launch" },
];

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "AI Self-Driving",
    desc: "Autonomous vehicles with real-time safety monitoring",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "100% EV Fleet",
    desc: "Zero emissions — all Tesla, zero carbon footprint",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Up to 30% Cheaper",
    desc: "No surge pricing — upfront, transparent fares",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Live Video Streaming",
    desc: "Riders can stream their trip in real-time for safety",
  },
];

export default function VampShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, [isInView]);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-gray-500 font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Featured Work
            </p>
            <VampLogo className="text-white mb-4" />
            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              Architected and lead engineering on a production all-electric rideshare
              platform — microservices backend, React/Next.js dashboard, and a
              4.9★-rated mobile app scaled to{" "}
              <span className="text-white font-medium">7,000+ customers</span> in under
              6 months.
            </p>

            {/* App store links */}
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-5">
              <a
                href="https://apps.apple.com/us/app/vamp-rideshare-revamped/id6758463258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white border border-gray-300 text-black rounded-md hover:bg-gray-100 transition-all"
              >
                <svg className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 self-center" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[12px] sm:text-[14px] font-normal text-gray-900 leading-tight">Download on</div>
                  <div className="text-[14px] sm:text-[16px] font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.vampmobility.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white border border-gray-300 text-black rounded-md hover:bg-gray-100 transition-all"
              >
                <svg className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 self-center" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#4285F4" d="M3 2l10 10-10 10z" />
                  <path fill="#34A853" d="M3 2l13 7-3 3z" />
                  <path fill="#FBBC04" d="M16 9l4 2.3c.5.3.5 1.1 0 1.4L16 15l-3-3z" />
                  <path fill="#EA4335" d="M3 22l10-10 3 3z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[12px] sm:text-[14px] font-normal text-gray-900 leading-tight">Get it on</div>
                  <div className="text-[14px] sm:text-[16px] font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center"
              >
                <p className="font-display font-bold text-2xl text-white">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshot Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl mb-10"
        >
          {/* Main image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Gradient overlay bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-4 left-5">
              <p className="text-white text-sm font-medium drop-shadow-lg">
                {slides[current].alt}
              </p>
            </div>

            {/* Nav buttons */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.79 15.71a1 1 0 0 1-1.42 0l-5-5a1 1 0 0 1 0-1.42l5-5a1 1 0 1 1 1.42 1.42L8.5 10l4.29 4.29a1 1 0 0 1 0 1.42Z" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.21 4.29a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42l-5 5a1 1 0 0 1-1.42-1.42L11.5 10 7.21 5.71a1 1 0 0 1 0-1.42Z" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 py-3 bg-black/80">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-5 gap-3 mb-14"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => goTo(i)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-white shadow-lg shadow-white/10"
                  : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
              }`}
            >
              <div className="relative aspect-video">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </button>
          ))}
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                {f.icon}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech stack footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2"
        >
          {[
            "Node.js", "TypeScript", "React", "Next.js", "MongoDB", "Redis",
            "Apache Kafka", "Docker", "AWS", "Nginx", "Stripe", "WebSockets",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
