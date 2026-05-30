import { personalInfo } from "@/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 mt-0">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xl neon-text-cyan">BM</span>
          <span className="text-white/30 text-sm">—</span>
          <span className="text-white/40 text-sm">Full Stack Developer</span>
        </div>

        <p className="text-white/30 text-xs text-center">
          Crafted with ⚡ by Bhola Mahto · Mumbai, Maharashtra
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
