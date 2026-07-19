import type {
  Project,
  SkillCategory,
  Experience,
  Achievement,
  Service,
  Stat,
  NavItem,
} from "@/types";
import seoDashboardImage from "@/images/seo-dashboard.png";
import glamguiderImage from "@/images/glamguider.com.png";
import codecraniumImage from "@/images/codecranium.png";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Bhola Mahto",
  titles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend & API Engineer",
    "Freelance Web Developer",
  ],
  location: "Mumbai, Maharashtra",
  email: "bholamahto255@gmail.com",
  phone: "+91 9326272432",
  linkedin: "https://linkedin.com/in/bhola-mahto-39172a192",
  github: "https://github.com/mahtobhola431",
  bio: "Full stack developer with 2 years of experience shipping complete web products end-to-end — from database schemas and REST APIs to pixel-perfect, high-performance frontends. I help businesses and founders turn ideas into production-grade applications.",
  extendedBio:
    "I own the whole stack: Node.js, Express & NestJS backends, MongoDB & SQL data layers, Redis, Kafka and microservices on the server, and React, Next.js, Redux & TypeScript on the client — all deployed with Docker and AWS. Whether it's an MVP, an API, or a dashboard, I build systems that scale and interfaces that convert.",
  resumeUrl: "/resume.pdf",
};

export const stats: Stat[] = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "LeetCode Solved", value: 50, suffix: "+" },


];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Admobs",
    period: "2024- – Present",
    location: "Mumbai, Maharashtra ",
    type: "full-time",
    description: [
      "Architected and improved SEO systems achieving significant organic traffic growth through structured data and dynamic sitemap generation",
      "Built dynamic SEO pipeline with schema generation, Open Graph, and JSON-LD structured data for 10K+ pages",
      "Coordinated S3 integrations for media storage with signed URL generation and CDN delivery optimization",
      "Built GlamGuider frontend — a full-featured beauty discovery platform with Next.js App Router and server components",
      "Designed and built moderation dashboards for content review with real-time updates and batch operations",
      "Engineered gamification dashboard with leaderboards, streaks, and reward systems using Redis for caching",
      "Created scalable REST APIs with rate limiting, pagination, and comprehensive error handling",
      "Integrated Meta Pixel, Microsoft Clarity, Google Analytics for conversion tracking and user behavior analysis",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS S3",
      "TypeScript",
      "Tailwind",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "#00f5ff",
    skills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "Next.js", level: 92, color: "#ffffff" },
      { name: "Redux", level: 88, color: "#764ABC" },
      { name: "Tailwind CSS", level: 93, color: "#06B6D4" },
      { name: "Framer Motion", level: 82, color: "#FF0055" },
      { name: "TypeScript", level: 87, color: "#3178C6" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#bf5af2",
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Express", level: 88, color: "#ffffff" },
      { name: "NestJS", level: 78, color: "#E0234E" },
      { name: "MongoDB", level: 86, color: "#47A248" },
      { name: "Redis", level: 80, color: "#DC382D" },
      { name: "Kafka", level: 72, color: "#231F20" },
    ],
  },
  {
    title: "DevOps",
    icon: "🚀",
    color: "#30d158",
    skills: [
      { name: "AWS", level: 78, color: "#FF9900" },
      { name: "Docker", level: 82, color: "#2496ED" },
      { name: "Microservices", level: 80, color: "#00f5ff" },
      { name: "CI/CD", level: 72, color: "#bf5af2" },
    ],
  },
  {
    title: "Languages",
    icon: "💻",
    color: "#0a84ff",
    skills: [
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "TypeScript", level: 87, color: "#3178C6" },
      { name: "Python", level: 72, color: "#3776AB" },
      { name: "C++", level: 70, color: "#00599C" },
      { name: "SQL", level: 82, color: "#4479A1" },
    ],
  },
];

export const services: Service[] = [
  {
    id: "s1",
    title: "Full Stack Web Apps",
    description:
      "Complete web applications built end-to-end — from data modelling and APIs to a fast, responsive UI. One developer, the whole stack, zero handoff gaps.",
    icon: "🧩",
    color: "#00f5ff",
    features: [
      "Next.js / React frontends",
      "Node.js & Express APIs",
      "MongoDB / SQL data layer",
      "Auth, roles & payments",
    ],
  },
  {
    id: "s2",
    title: "APIs & Backend Systems",
    description:
      "Robust, well-documented REST APIs and backend services with authentication, rate limiting, caching and clean architecture — ready to power web or mobile clients.",
    icon: "⚙️",
    color: "#bf5af2",
    features: [
      "REST API design",
      "JWT auth & RBAC",
      "Redis caching & queues",
      "Microservices & Docker",
    ],
  },
  {
    id: "s3",
    title: "MVP & Product Development",
    description:
      "Have an idea? I take founders from concept to a shippable MVP fast — a polished, production-ready product you can put in front of real users and investors.",
    icon: "🚀",
    color: "#30d158",
    features: [
      "Idea to launch, end-to-end",
      "Scalable architecture from day 1",
      "Cloud deployment (AWS / Vercel)",
      "Iterative, fast delivery",
    ],
  },
  {
    id: "s4",
    title: "Performance, SEO & Dashboards",
    description:
      "Speed, search visibility and data. I optimise Core Web Vitals, build SEO systems that rank, and craft admin dashboards that make data actionable.",
    icon: "📈",
    color: "#0a84ff",
    features: [
      "90+ Lighthouse performance",
      "SEO & structured data",
      "Admin & analytics dashboards",
      "Real-time data & charts",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "SEO Intelligence Dashboard",
    description:
      "Enterprise-grade SEO monitoring system with real-time crawling, schema validation, and SERP tracking.",
    longDescription:
      "Built a comprehensive SEO dashboard featuring automated schema generation, sitemap management, Core Web Vitals monitoring, and competitor analysis. Handles 10K+ pages with server-side rendering for SEO optimization.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Redis", "Chart.js", "AWS"],
    liveUrl: "https://seo-dashboard-phi-lemon.vercel.app/",
    githubUrl: "https://github.com/mahtobhola431/seo-dashboard",
    imageGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    image: seoDashboardImage,
    category: "Full Stack",
    featured: true,
    metrics: "10K+ pages tracked",
  },
  // {
  //   id: "p2",
  //   title: "Content Moderation Platform",
  //   description:
  //     "Real-time content moderation system with ML flagging, batch review workflows, and analytics.",
  //   longDescription:
  //     "Developed a high-throughput content moderation platform supporting 1000+ daily reviews. Features real-time WebSocket updates, role-based access control, audit logging, and advanced filtering.",
  //   techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
  //   liveUrl: "#",
  //   githubUrl: "https://github.com/mahtobhola431",
  //   imageGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  //   category: "Full Stack",
  //   featured: true,
  //   metrics: "1K+ daily reviews",
  // },
  // {
  //   id: "p3",
  //   title: "Gamification Engine",
  //   description:
  //     "Scalable gamification system with leaderboards, achievements, streaks, and reward mechanics.",
  //   longDescription:
  //     "Architected a modular gamification engine powering engagement loops. Built with event-driven architecture, Redis-backed leaderboards, and a flexible rules engine for configuring reward triggers.",
  //   techStack: ["Next.js", "NestJS", "Redis", "Kafka", "PostgreSQL", "Docker"],
  //   liveUrl: "#",
  //   githubUrl: "https://github.com/mahtobhola431",
  //   imageGradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  //   category: "Backend",
  //   featured: true,
  //   metrics: "50K+ events/day",
  // },
  {
    id: "p2",
    title: "GlamGuider Platform",
    description:
      "Full-featured beauty discovery platform with personalized recommendations and editorial content.",
    longDescription:
      "Built GlamGuider end-to-end — a beauty platform with product discovery, user reviews, expert guides, and personalized recommendations. Node.js APIs over MongoDB power the backend, with AWS S3 media storage and a Next.js frontend hitting 90+ Lighthouse scores.",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "AWS S3", "Tailwind"],
    liveUrl: "https://glamguider.com/",
    githubUrl: "https://github.com/mahtobhola431",
    imageGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    image: glamguiderImage,
    category: "Full Stack",
    featured: false,
    metrics: "90+ Lighthouse",
  },
  {
    id: "p4",
    title: "CodeCranium",
    description:
      "Interactive full-stack learning platform for coding education with role-based access for learners, instructors, and admins.",
    longDescription:
      "Built CodeCranium end-to-end — a Next.js 16 + React 19 frontend delivering a fast, typed UI with server state managed by TanStack Query and client state by Zustand. The Express 5 backend exposes a REST API over MongoDB Atlas with JWT-based authentication and role-based access control for learners, instructors, and admins.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "TanStack Query", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/mahtobhola431",
    imageGradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
    image: codecraniumImage,
    category: "Full Stack",
    featured: true,
    metrics: "3 user roles",
  },
  {
    id: "p3",
    title: "Microservices zomato clone",
    description:
      "Production-grade zomato clone with rate limiting, auth, load balancing, and service discovery.",
    longDescription:
      "Designed and implemented a scalable API gateway handling authentication, rate limiting, request routing, and circuit breaking. Integrates with multiple microservices and provides a unified API surface.",
    techStack: ["Node.js", "Express", "Redis", "RabbitMQ", "Docker", "JWT"],
    // liveUrl: "#",
    githubUrl: "https://github.com/mahtobhola431/zomato_microservice",
    imageGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    category: "Backend",
    featured: false,
    // metrics: "10K+ req/min",
  },
  // {
  //   id: "p6",
  //   title: "Real-time Analytics Platform",
  //   description:
  //     "Live event tracking dashboard with Kafka ingestion, streaming aggregations, and visual analytics.",
  //   longDescription:
  //     "Built a real-time analytics platform consuming events from Kafka, performing streaming aggregations, and displaying live metrics on an interactive dashboard with D3.js visualizations.",
  //   techStack: ["React", "Node.js", "Kafka", "MongoDB", "D3.js", "Socket.io"],
  //   liveUrl: "#",
  //   githubUrl: "https://github.com/mahtobhola431",
  //   imageGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  //   category: "Real-time",
  //   featured: false,
  //   metrics: "< 200ms latency",
  // },
];

export const achievements: Achievement[] = [
  {
    id: "a1",
    title: "50+ LeetCode Problems",
    description:
      "Solved 50+ algorithmic challenges covering arrays, strings ,system design problems.",
    icon: "⚡",
    color: "#f7df1e",
    metric: "50+",
  },
  {
    id: "a2",
    title: "MERN Stack Certified",
    description:
      "Completed comprehensive MERN Stack certification covering MongoDB, Express, React, and Node.js.",
    icon: "🏆",
    color: "#00f5ff",
    metric: "Certified",
  },

  {
    id: "a3",
    title: "System Design",
    description:
      "Completed advanced system design coursework covering distributed systems, scalability, and architecture patterns.",
    icon: "🏗️",
    color: "#bf5af2",
    metric: "Certified",
  },
    {
    id: "a4",
    title: "Ultimate AWS Certified Cloud Practitioner CLF-CO2",
    description:
      "Completed advanced AWS certification coursework covering cloud architecture, security, and compliance.",
    icon: "🏗️",
    color: "#bf5af2",
    metric: "Certified",
  },
];

export const techIcons = [
  { name: "React", emoji: "⚛️", color: "#61DAFB" },
  { name: "Next.js", emoji: "▲", color: "#ffffff" },
  { name: "Node.js", emoji: "🟢", color: "#339933" },
  { name: "MongoDB", emoji: "🍃", color: "#47A248" },
  { name: "TypeScript", emoji: "🔷", color: "#3178C6" },
  { name: "Docker", emoji: "🐳", color: "#2496ED" },
  { name: "AWS", emoji: "☁️", color: "#FF9900" },
  { name: "Redis", emoji: "🔴", color: "#DC382D" },
];
