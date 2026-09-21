"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    emoji: "⚡",
    skills: [
      "JavaScript", "TypeScript", "Node.js", "Express",
      "React", "Next.js", "React Native", "NestJS",
      "HTML/CSS", "Python", "Bash", "SQL",
    ],
  },
  {
    category: "Databases & Messaging",
    emoji: "🗄️",
    skills: [
      "MongoDB", "Mongoose", "PostgreSQL", "Prisma",
      "Redis", "BullMQ", "Apache Kafka",
    ],
  },
  {
    category: "Cloud & DevOps",
    emoji: "☁️",
    skills: [
      "AWS (S3 / SES)", "GCP", "Docker", "Kubernetes",
      "Nginx", "CI/CD", "DigitalOcean", "Cloudflare R2",
    ],
  },
  {
    category: "Architecture & APIs",
    emoji: "🏗️",
    skills: [
      "Microservices", "RESTful APIs", "WebSockets",
      "Server-Side Rendering", "Swagger / OpenAPI",
    ],
  },
  {
    category: "Practices & Quality",
    emoji: "✅",
    skills: [
      "Agile / Scrum", "JWT / RBAC", "Unit Testing",
      "End-to-End Testing", "Code Reviews", "Logging & Telemetry",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.3em] uppercase mb-3">
            Skills
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
            Tech Stack
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-3 rounded-full" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{group.emoji}</span>
                  <h3 className="font-display font-semibold text-white text-sm leading-tight">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-gray-300 bg-gray-800 border border-gray-700/60 px-2.5 py-1 rounded-full hover:border-cyan-400/40 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Bonus card — currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-gradient-to-br from-cyan-400/5 to-violet-400/5 border border-cyan-400/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">🚀</span>
                <h3 className="font-display font-semibold text-white text-sm">
                  Always Learning
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Currently exploring advanced distributed systems patterns,
                real-time architectures, and AI/LLM integrations in production
                systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
