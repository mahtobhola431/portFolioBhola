# Bhola Mahto — Premium Developer Portfolio

A cinematic, production-grade full-stack developer portfolio built with **Next.js 14 App Router**, **Framer Motion**, **Three.js**, and **Tailwind CSS**.

---

## 📁 Complete Folder Structure

```
bhola-portfolio/
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png                    # 1200x630 Open Graph image
│   └── resume.pdf                      # Downloadable resume
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout — metadata, fonts, schema.org
│   │   ├── page.tsx                    # Home page — server component, lazy loads sections
│   │   ├── sitemap.ts                  # Dynamic sitemap generation
│   │   ├── robots.ts                   # SEO robots configuration
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts            # POST /api/contact — form submission API
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Floating glass navbar, active section tracking, mobile menu
│   │   │   └── Footer.tsx              # Footer with links and credits
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Full-screen hero, type animation, particle bg, CTAs
│   │   │   ├── AboutSection.tsx        # Bio, animated counters, journey timeline
│   │   │   ├── ExperienceSection.tsx   # Vertical timeline, expandable cards
│   │   │   ├── SkillsSection.tsx       # Category switcher, animated progress bars, tag cloud
│   │   │   ├── ProjectsSection.tsx     # Filterable grid, hover overlays, GitHub/demo links
│   │   │   ├── AchievementsSection.tsx # Achievement cards, LeetCode highlight
│   │   │   └── ContactSection.tsx      # Form with validation, contact links, success state
│   │   │
│   │   ├── three/
│   │   │   └── ParticleBackground.tsx  # Three.js/R3F animated particle field
│   │   │
│   │   ├── animations/
│   │   │   └── TextReveal.tsx          # (optional) GSAP-powered text reveal
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.tsx        # Dual-layer custom cursor with hover morphing
│   │       ├── ScrollProgress.tsx      # Gradient scroll progress bar
│   │       ├── PageLoader.tsx          # Cinematic loading screen with progress
│   │       └── SectionHeader.tsx       # Reusable section heading with eyebrow + gradient
│   │
│   ├── data/
│   │   └── index.ts                    # All portfolio content — projects, skills, experience, etc.
│   │
│   ├── hooks/
│   │   └── index.ts                    # useScrollProgress, useActiveSection, useMagneticEffect,
│   │                                   # useCountAnimation, useInView, useMousePosition
│   │
│   ├── lib/
│   │   ├── utils.ts                    # cn(), lerp(), clamp(), mapRange()
│   │   └── animations.ts              # Framer Motion variants — fadeInUp, stagger, hero, float
│   │
│   ├── styles/
│   │   └── globals.css                 # Tokens, glass, neon, cursor, scroll, animations
│   │
│   └── types/
│       └── index.ts                    # TypeScript interfaces — Project, Skill, Experience, etc.
│
├── tailwind.config.ts                  # Tailwind — custom colors, fonts, shadows, animations
├── tsconfig.json                       # TypeScript strict config with path aliases
├── next.config.ts                      # Next.js — image optimization, CSS opt
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
# or
yarn install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
npm start
```

---

## ⚙️ Environment Variables

Create `.env.local`:

```env
# Optional — for contact form email delivery
RESEND_API_KEY=your_resend_api_key

# Site URL (for OG/sitemap)
NEXT_PUBLIC_SITE_URL=https://bholamahto.dev
```

---

## 🌐 Vercel Deployment

### One-click deploy:
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select repository → Framework: **Next.js** (auto-detected)
4. Add environment variables (`RESEND_API_KEY`)
5. Click **Deploy**

### Manual via CLI:
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Custom domain:
1. Vercel Dashboard → Project → Settings → Domains
2. Add `bholamahto.dev`
3. Update DNS: CNAME `@` → `cname.vercel-dns.com`

---

## 📦 Key Libraries

| Library | Purpose |
|---|---|
| `next@14` | App Router, SSR, RSC, Image optimization |
| `framer-motion` | Page transitions, scroll animations, layout animations |
| `@react-three/fiber` | Three.js particle background |
| `@react-three/drei` | Three.js helpers |
| `react-type-animation` | Rotating title typewriter |
| `lenis` | Smooth scroll (add via `ReactLenis` provider) |
| `tailwindcss` | Utility-first styling |
| `react-hook-form` + `zod` | Form validation (upgrade from current simple state) |
| `react-hot-toast` | Toast notifications |

---

## 🎨 Design System

### Color Tokens
```css
--neon-cyan:   #00f5ff   /* Primary accent */
--neon-purple: #bf5af2   /* Secondary accent */
--neon-blue:   #0a84ff   /* Tertiary */
--neon-green:  #30d158   /* Success/available */
--neon-pink:   #ff375f   /* Error/danger */
```

### Fonts
- **Display**: `Syne` (headings, nav logo, bold UI text)
- **Body**: `DM Sans` (paragraphs, descriptions)
- **Mono**: `JetBrains Mono` (code, labels, eyebrows)

---

## ✅ Performance Checklist

- [x] Server Components for all static sections
- [x] `dynamic()` with `ssr: false` for Three.js canvas
- [x] Lazy loading for below-fold sections
- [x] `next/image` for all images
- [x] Font preloading via `<link rel="preconnect">`
- [x] CSS-only animations where possible
- [x] Particle count capped at 1200
- [x] `passive: true` on scroll listeners

---

## 🔮 Optional Enhancements

- [ ] Add Lenis `ReactLenis` provider wrapper in layout
- [ ] Command palette (⌘K) with `cmdk` library
- [ ] Blog section with MDX / Contentlayer
- [ ] Case studies with `/projects/[slug]` dynamic routes
- [ ] Light/dark theme toggle with `next-themes`
- [ ] GSAP ScrollTrigger for hero text parallax
- [ ] Vercel Analytics + Speed Insights

---

Built with ⚡ precision for premium developer experience.
