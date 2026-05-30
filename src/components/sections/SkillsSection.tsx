"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/70 font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span
          className="font-mono text-xs font-bold"
          style={{ color }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].title);
  const active = skillCategories.find((c) => c.title === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[var(--neon-blue)]/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Tech Stack"
          title="The tools I "
          highlight="master"
          description="Years of production use across the full stack."
          className="mb-14"
        />

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  "relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                  activeCategory === cat.title
                    ? "text-white"
                    : "glass text-white/40 border border-white/5 hover:text-white/70"
                )}
              >
                {activeCategory === cat.title && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}10)`,
                      border: `1px solid ${cat.color}40`,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{cat.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 border border-white/5"
                style={{ borderColor: `${active.color}15` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${active.color}15` }}
                  >
                    {active.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      {active.title}
                    </h3>
                    <p className="text-white/30 text-xs mt-0.5">
                      {active.skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                  {active.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating tech cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {skillCategories
              .flatMap((c) => c.skills)
              .map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg glass border border-white/5 text-white/40 cursor-default transition-all duration-200"
                  style={{ "--hover-color": skill.color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = skill.color;
                    el.style.borderColor = `${skill.color}30`;
                    el.style.backgroundColor = `${skill.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "";
                    el.style.borderColor = "";
                    el.style.backgroundColor = "";
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
