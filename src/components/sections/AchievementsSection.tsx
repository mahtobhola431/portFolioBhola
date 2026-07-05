"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 rounded-full bg-[var(--neon-purple)]/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Achievements"
          title="Earned "
          highlight="milestones"
          description="Recognition through consistent learning and building."
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border transition-all duration-400 relative overflow-hidden cursor-default"
              style={{ "--hover-border": `${achievement.color}25` } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${achievement.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `${achievement.color}15` }}
              />

              <div className="relative z-10">
                {/* Icon + metric */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${achievement.color}15` }}
                  >
                    {achievement.icon}
                  </div>
                  {achievement.metric && (
                    <span
                      className="font-mono text-sm font-black"
                      style={{ color: achievement.color }}
                    >
                      {achievement.metric}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-white text-base mb-2 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LeetCode highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 border border-[#f7df1e]/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7df1e]/30 to-transparent" />
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#f7df1e]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <p className="font-mono text-xs text-[#f7df1e] tracking-widest uppercase mb-1">
                  LeetCode
                </p>
                <p className="font-display font-bold text-white text-lg">
                  50+ Problems Solved
                </p>
                <p className="text-white/40 text-sm mt-0.5">
                  Arrays, Strings, System Design
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
