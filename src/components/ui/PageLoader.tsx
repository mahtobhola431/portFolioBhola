"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[hsl(var(--background))]"
        >
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[var(--neon-cyan)]/5 blur-3xl animate-blob" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[var(--neon-purple)]/5 blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center border border-[var(--neon-cyan)]/30">
                <span className="font-display font-bold text-3xl neon-text-cyan">
                  BM
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl blur-xl bg-[var(--neon-cyan)]/20 -z-10" />
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-lg font-medium text-white/60"
            >
              Bhola Mahto
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
                  boxShadow: "0 0 8px var(--neon-cyan)",
                }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.p
              className="font-mono text-xs text-white/30"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.floor(Math.min(progress, 100))}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
