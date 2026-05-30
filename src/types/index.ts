export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imageGradient: string;
  category: "Frontend" | "Backend" | "Full Stack" | "Real-time";
  featured: boolean;
  metrics?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
  type: "full-time" | "contract" | "freelance";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  metric?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
