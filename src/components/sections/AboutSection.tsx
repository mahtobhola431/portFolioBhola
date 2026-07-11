"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, stats } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useCountAnimation } from "@/hooks";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from "@/lib/animations";

function StatCard({
  label,
  value,
  suffix = "",
  prefix = "",
  inView,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) {
  const count = useCountAnimation(value, 2000, inView);
  return (
    <motion.div
      variants={staggerItem}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-[var(--neon-cyan)]/20 transition-all duration-300 group"
    >
      <div className="font-display font-black text-4xl md:text-5xl text-white group-hover:neon-text-cyan transition-all duration-300">
        {prefix}
        <span className="gradient-text">{count}</span>
        {suffix}
      </div>
      <p className="text-white/40 text-sm mt-1.5 font-medium">{label}</p>
    </motion.div>
  );
}

const timeline = [
  {
    year: "Aug 2024",
    title: "Started Full Stack Journey",
    description:
      "Began building complete web applications professionally — designing MongoDB schemas and Node.js/Express APIs on the server, and React/Next.js interfaces on the client.",
    color: "var(--neon-cyan)",
  },

  {
    year: "Dec 2024",
    title: "APIs, Dashboards & SEO Systems",
    description:
      "Shipped REST APIs with auth and caching, admin dashboards, dynamic SEO pipelines, and AWS S3 media integrations for production applications serving real users.",
    color: "var(--neon-purple)",
  },

  {
    year: "2025",
    title: "Scalable Architecture & Microservices",
    description:
      "Worked across the stack on production systems — Redis caching, microservices, JWT authentication, RBAC, Docker deployments, SSR and performance optimization.",
    color: "var(--neon-blue)",
  },

  {
    year: "2026",
    title: "Full Stack Freelance & Contract Work",
    description:
      "Delivering end-to-end products for clients — from database and API design to polished, high-performance frontends, deployed and ready for real-world scale.",
    color: "var(--neon-green)",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 -translate-y-1/2 rounded-full bg-[var(--neon-cyan)]/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="About Me"
          title="Building the web, "
          highlight="end to end"
          description="A full stack developer who takes products from database to deployment — and freelances for clients who need it all done well."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-cyan)]/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[var(--neon-cyan)]/10 flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-[var(--neon-cyan)] text-sm font-mono">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed text-sm mb-4">
                  {personalInfo.bio}
                </p>
                <p className="text-white/50 leading-relaxed text-sm">
                  {personalInfo.extendedBio}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                  {["📍 Mumbai, MH", "💼 2 yrs exp", "🎯 Freelance & full-time"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-white/40 glass px-3 py-1.5 rounded-lg border border-white/5"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Tech philosophy */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <p className="font-mono text-xs text-[var(--neon-purple)] mb-3 tracking-widest uppercase">
                Philosophy
              </p>
              <blockquote className="text-white/60 text-sm leading-relaxed italic">
                "Code is craft. Every system should be built to last — readable
                by humans, scalable by design, and delightful to use."
              </blockquote>
            </div>
          </motion.div>

          {/* Right — Stats + Timeline */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              ref={ref}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  {...stat}
                  inView={!!inView}
                />
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <p className="font-mono text-xs text-white/40 mb-6 tracking-widest uppercase">
                Journey
              </p>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-cyan)]/40 via-[var(--neon-purple)]/40 to-transparent" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-5 pl-10 relative"
                    >
                      <div
                        className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 -translate-x-1/2"
                        style={{
                          borderColor: item.color,
                          backgroundColor: `${item.color}30`,
                          boxShadow: `0 0 8px ${item.color}40`,
                        }}
                      />
                      <div>
                        <span
                          className="font-mono text-xs font-bold"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </span>
                        <h4 className="text-white/80 text-sm font-semibold mt-0.5">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-xs mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
