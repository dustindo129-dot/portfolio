"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBook } from "react-icons/fi";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.3em] uppercase mb-3">
            Education
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
            Background
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-3 rounded-full" />
          </h2>

          <div className="bg-[#111827] border border-gray-800 rounded-xl p-8 flex items-start gap-6 max-w-2xl hover:border-gray-700 transition-colors">
            <div className="p-3 bg-cyan-400/10 rounded-xl shrink-0 mt-0.5">
              <FiBook className="text-cyan-400" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white leading-snug">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-cyan-400 font-medium mt-1.5">
                University of Texas at Arlington
              </p>
              <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                <span>Arlington, TX</span>
                <span className="text-gray-700">·</span>
                <span>Class of 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
