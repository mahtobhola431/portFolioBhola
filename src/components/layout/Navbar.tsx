"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, navItems } from "@/data";
import { useScrollProgress, useActiveSection } from "@/hooks";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const sectionIds = navItems.map((i) => i.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sticky Navbar - Premium Design */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500",
          scrolled
            ? "py-3 glass-strong border-b border-white/10 shadow-2xl shadow-black/20"
            : "py-5 bg-transparent"
        )}
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        {/* Premium gradient border line on scroll */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent"
          />
        )}

        <div className="container-custom flex items-center justify-between">
          {/* Logo with premium hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            <span className="font-display font-bold text-xl tracking-tighter neon-text-cyan relative z-10">
              BM
            </span>
            <span className="absolute inset-0 blur-xl bg-[var(--neon-cyan)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          </motion.div>

          {/* Desktop Navigation Links - Centered with premium styling */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                    isActive
                      ? "text-[var(--neon-cyan)]"
                      : "text-white/50 hover:text-white/90"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)]/10 to-[var(--neon-purple)]/10 border border-[var(--neon-cyan)]/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xs opacity-60">{item.icon}</span>
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Resume Button with premium animation */}
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--neon-cyan)]/10 to-[var(--neon-purple)]/10 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)]/60 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Resume ↓
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 hidden md:block"
        style={{
          background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-cyan))",
          transformOrigin: "0%",
        }}
        animate={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
      />

      {/* Mobile Navbar - Premium Design */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div
          className={cn(
            "flex items-center justify-between px-5 py-4",
            "transition-all duration-500",
            scrolled ? "glass-strong border-b border-white/5 shadow-xl" : ""
          )}
        >
          <motion.span
            whileTap={{ scale: 0.95 }}
            className="font-display font-bold text-lg neon-text-cyan cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            BM
          </motion.span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 relative group"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 7 }
                      : i === 1
                      ? { opacity: 0, x: -10 }
                      : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, x: 0 }
                }
                className={cn(
                  "block h-0.5 rounded-full bg-white transition-all duration-300",
                  i === 1 ? "w-5" : "w-6"
                )}
              />
            ))}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong border-b border-white/5 overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300",
                      activeSection === item.href.replace("#", "")
                        ? "text-[var(--neon-cyan)] bg-gradient-to-r from-[var(--neon-cyan)]/10 to-transparent"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 py-3 px-4 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-[var(--neon-cyan)]/10 to-[var(--neon-purple)]/10 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/20"
                >
                  Download Resume ↓
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}