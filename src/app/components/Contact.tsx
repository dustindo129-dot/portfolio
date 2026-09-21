"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <p className="text-cyan-400 font-semibold text-xs tracking-[0.3em] uppercase mb-3">
                Contact
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
                Get In Touch
                <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-3 rounded-full" />
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                I&apos;m currently open to new opportunities. Whether you have a
                project in mind, a role to fill, or just want to connect —
                shoot me a message and I&apos;ll get back to you.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center shrink-0">
                    <FiMail className="text-cyan-400" size={17} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium">
                      khongbuoncuoi69@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-cyan-400" size={17} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">Garland, TX · Open to remote</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center shrink-0">
                    <FiGithub className="text-cyan-400" size={17} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">GitHub</p>
                    <a
                      href="https://github.com/dustindo129-dot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-cyan-400 transition-colors"
                    >
                      github.com/dustindo129-dot
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center shrink-0">
                    <FiLinkedin className="text-cyan-400" size={17} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/dustin-do-331509204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-cyan-400 transition-colors"
                    >
                      linkedin.com/in/dustin-do
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="title" className="block text-gray-400 text-sm mb-2">
                      Subject
                    </label>
                    <input
                      id="title"
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Freelance opportunity, Job offer..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me what you have in mind..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm bg-red-500/10 px-4 py-3 rounded-lg">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-cyan-400 text-[#0a0f1e] rounded-xl font-bold hover:bg-cyan-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-400/20"
                  >
                    <FiSend size={16} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-800/50 text-center">
        <p className="text-gray-600 text-sm font-mono">
          Designed &amp; built by <span className="text-gray-400">Dustin Do</span>
        </p>
      </div>
    </section>
  );
}
