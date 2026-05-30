"use client";

import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personalInfo, techIcons } from "@/data";
import { heroTextVariants, floatVariants } from "@/lib/animations";

// Lazy load 3D background
const ParticleBackground = dynamic(
  () =>
    import("@/components/three/ParticleBackground").then(
      (m) => m.ParticleBackground
    ),
  { ssr: false }
);

// Typing animation
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => ({ default: m.TypeAnimation })),
  { ssr: false }
);

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden lg:mt-32"
    >
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--neon-cyan)]/8 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[var(--neon-purple)]/8 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--neon-blue)]/4 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            variants={floatVariants}
            animate="float"
            transition={{ delay: i * 0.4, duration: 5 + i }}
            className="absolute glass rounded-xl px-2.5 py-1.5 text-xs font-mono border border-white/10"
            style={{
              left: `${10 + ((i * 37) % 70)}%`,
              top: `${15 + ((i * 23) % 65)}%`,
              color: tech.color,
              borderColor: `${tech.color}20`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <span className="mr-1.5">{tech.emoji}</span>
            {tech.name}
          </motion.div>
        ))}
      </div>

      {/* Main hero content */}
      <div className="container-custom relative z-10 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[var(--neon-cyan)] uppercase glass px-4 py-2 rounded-full border border-[var(--neon-cyan)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-4"
        >
          <span className="gradient-text">Bhola</span>
          <br />
          <span className="text-white">Mahto</span>
        </motion.h1>

        {/* Rotating title */}
        <motion.div
          custom={2}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-xl md:text-2xl font-medium text-white/60 mb-8 h-8"
        >
          <Suspense fallback={<span>Full Stack Developer</span>}>
            <TypeAnimation
              sequence={personalInfo.titles.flatMap((t) => [t, 2200])}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ color: "rgba(0,245,255,0.8)" }}
            />
          </Suspense>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={3}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="text-white/45 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Building{" "}
          <span className="text-white/70">scalable systems</span>,{" "}
          <span className="text-white/70">performant frontends</span>, and{" "}
          <span className="text-white/70">elegant APIs</span> — 2 years of
          production experience from Mumbai.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-neon-cyan"
            style={{
              background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))",
              color: "hsl(var(--background))",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm glass border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            Get in Touch
          </button>

          <a
            href={personalInfo.resumeUrl}
            download
            className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={5}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="glass w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-[var(--neon-cyan)] border border-white/8 hover:border-[var(--neon-cyan)]/30 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}

          <div className="w-px h-8 bg-white/10 mx-1" />

          <span className="font-mono text-xs text-white/30">
            {personalInfo.location}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/25 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[var(--neon-cyan)]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
