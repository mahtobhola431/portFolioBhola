"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id ?? null);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[var(--neon-purple)]/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Work Experience"
          title="Where I've "
          highlight="shipped"
          description="Real systems, real users, real impact."
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[var(--neon-cyan)]/50 via-[var(--neon-purple)]/30 to-transparent hidden md:block" />

            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={staggerItem}>
                <div className="md:pl-20 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-[var(--neon-cyan)] bg-[var(--neon-cyan)]/20 hidden md:block"
                    style={{ boxShadow: "0 0 12px var(--neon-cyan)" }}
                  />

                  <motion.div
                    layout
                    onClick={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                    className="glass rounded-2xl border border-white/5 hover:border-[var(--neon-cyan)]/20 transition-all duration-300 overflow-hidden cursor-pointer group"
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 px-2.5 py-1 rounded-full">
                              {exp.type}
                            </span>
                            <span className="text-xs text-white/30 font-mono">
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-xl text-white group-hover:neon-text-cyan transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-white/50 text-sm mt-0.5">
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/30 mt-1 flex-shrink-0"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-white/40 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-6 pb-6 pt-0 border-t border-white/5">
                            <p className="font-mono text-xs text-[var(--neon-purple)] mt-5 mb-4 tracking-widest uppercase">
                              Key Contributions
                            </p>
                            <ul className="space-y-3">
                              {exp.description.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -15 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.06 }}
                                  className="flex gap-3 text-sm text-white/55 leading-relaxed"
                                >
                                  <span className="text-[var(--neon-cyan)] mt-1 flex-shrink-0 text-xs">▸</span>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
