"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--neon-cyan)] uppercase">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-white">
        {titleParts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {titleParts[1]}
      </h2>

      {description && (
        <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed mt-2">
          {description}
        </p>
      )}
    </motion.div>
  );
}
