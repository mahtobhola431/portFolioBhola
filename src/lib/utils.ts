import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{4})(\d{3})(\d{4})/, "+91 $1 $2 $3");
}

export const SECTION_IDS = {
  HERO: "hero",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  PROJECTS: "projects",
  ACHIEVEMENTS: "achievements",
  CONTACT: "contact",
} as const;
