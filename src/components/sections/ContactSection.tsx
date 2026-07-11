"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = "Valid email required";
  if (!values.subject.trim()) errors.subject = "Subject is required";
  if (values.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "✉️",
    color: "var(--neon-cyan)",
  },
  {
    label: "Phone",
    value: "+91 9326272432",
    href: `tel:+919326272432`,
    icon: "📞",
    color: "var(--neon-green)",
  },
  {
    label: "LinkedIn",
    value: "bhola-mahto-39172a192",
    href: personalInfo.linkedin,
    icon: "💼",
    color: "var(--neon-blue)",
  },
  {
    label: "GitHub",
    value: "mahtobhola431",
    href: personalInfo.github,
    icon: "🐱",
    color: "var(--neon-purple)",
  },
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      setStatus("sending");

      await emailjs.send(
        "service_f5ay1zb", // Service ID
        "template_ft2qg0t", // Template ID
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "3s_IYNKEPR2GfL8Ig" // ✅ Your Public Key
      );

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full glass rounded-xl px-4 py-3 text-sm text-white/80 placeholder-white/20 border outline-none transition-all duration-300 focus:border-[var(--neon-cyan)]/40 focus:shadow-[0_0_0_3px_rgba(0,245,255,0.05)] font-body ${
      errors[field]
        ? "border-[var(--neon-pink)]/50"
        : "border-white/5 hover:border-white/10"
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[var(--neon-cyan)]/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build "
          highlight="together"
          description="Available for freelance projects, contracts, and full-time roles. Let's talk about what you need built."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {/* Left — Contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-[var(--neon-cyan)]/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/30 to-transparent" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--neon-green)] animate-pulse" />
                <span className="font-mono text-xs text-[var(--neon-green)] font-medium tracking-widest uppercase">
                  Available for work
                </span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                Taking on freelance and contract projects — full stack web apps,
                APIs, and MVPs — and open to full-time full stack roles. Tell me
                what you&apos;re building and I&apos;ll help you ship it.
              </p>
            </div>

            {/* Links */}
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: `${link.color}15` }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white/35 text-xs font-mono mb-0.5">
                    {link.label}
                  </p>
                  <p
                    className="text-sm font-medium truncate transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-white/50 ml-auto transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="glass rounded-2xl border border-white/5 p-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="text-[var(--neon-pink)] text-xs mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-[var(--neon-pink)] text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={inputClass("subject")}
                  />
                  {errors.subject && (
                    <p className="text-[var(--neon-pink)] text-xs mt-1.5">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[var(--neon-pink)] text-xs mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-[var(--neon-pink)] text-sm text-center">
                    Failed to send message. Please try again.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm relative overflow-hidden transition-all duration-300 disabled:opacity-70"
                  style={{
                    background: status === "sent"
                      ? "linear-gradient(135deg, var(--neon-green), #10b981)"
                      : "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))",
                    color: "hsl(var(--background))",
                  }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full inline-block"
                      />
                      Sending...
                    </span>
                  ) : status === "sent" ? (
                    <span className="flex items-center justify-center gap-2">
                      ✓ Message sent! I'll be in touch.
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}