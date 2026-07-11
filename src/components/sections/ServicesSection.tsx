"use client";

import { motion } from "framer-motion";
import { services } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[var(--neon-purple)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[var(--neon-cyan)]/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="What I Do"
          title="Services I "
          highlight="offer"
          description="End-to-end web development for founders, startups, and businesses — one developer who owns the entire stack."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 border border-white/5 relative overflow-hidden group transition-all duration-300"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-40"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                }}
              />
              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `${service.color}20` }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${service.color}15` }}
                >
                  {service.icon}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-white/55"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: service.color,
                          boxShadow: `0 0 6px ${service.color}80`,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-5">
            Have a project in mind? Let&apos;s build it together.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-neon-cyan"
            style={{
              background:
                "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))",
              color: "hsl(var(--background))",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
