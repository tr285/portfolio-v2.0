"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, CheckCircle2, Phone, Clock } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tr285",
    icon: FiGithub,
    color: "#ffffff",
    hoverColor: "#0ff",
    bg: "hover:border-cyan-500/50 hover:text-cyan-400",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tukaram-gore-99ab61322",
    icon: FiLinkedin,
    color: "#0a66c2",
    hoverColor: "#60a5fa",
    bg: "hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/tr285/",
    icon: null,
    color: "#eab308",
    hoverColor: "#fbbf24",
    bg: "hover:border-yellow-500/50 hover:text-yellow-400",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Base of Operations",
    value: "Pune, Maharashtra, India",
    sub: "Open to Remote & Hybrid",
    color: "cyan",
  },
  {
    icon: Mail,
    title: "Direct Comms",
    value: "goretukaram62@gmail.com",
    href: "mailto:goretukaram62@gmail.com",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    sub: "Mon – Sat, 9AM – 8PM IST",
    color: "green",
  },
];

export function Contact() {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState(initialForm);
      setTimeout(() => setSuccess(false), 5000);
    }, 1800);
  };

  const colorMap: Record<string, string> = {
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    green: "text-green-400 bg-green-500/10 border-green-500/30",
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Success Toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-6 left-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel border border-green-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
            <div>
              <p className="text-white font-semibold">Message Sent!</p>
              <p className="text-xs text-slate-400">I'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-sm text-purple-400 mb-6">
          <Mail className="w-4 h-4" />
          Let's Work Together
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Initiate <span className="neon-text-purple text-purple-400">Connection</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Looking for a Data Engineer, DevOps specialist, or Full-Stack developer?
          Let's build something extraordinary together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
        {/* Contact Form — 3/5 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-panel p-8 rounded-3xl border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="contact-subject"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                placeholder="Let's collaborate on..."
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all resize-none"
                placeholder="Describe your project or opportunity..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right panel — 2/5 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          {/* Contact info cards */}
          {contactInfo.map((info, idx) => (
            <div
              key={info.title}
              className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4 group hover:border-opacity-50 transition-all"
            >
              <div className={`p-3 rounded-xl border shrink-0 ${colorMap[info.color]}`}>
                <info.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-0.5">{info.title}</h4>
                {info.href ? (
                  <a
                    href={info.href}
                    className={`text-sm font-medium ${
                      info.color === "purple" ? "text-purple-400 hover:text-purple-300" : "text-white"
                    } transition-colors`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-white">{info.value}</p>
                )}
                {info.sub && <p className="text-xs text-slate-500 mt-0.5">{info.sub}</p>}
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 mt-auto">
            <h4 className="text-sm font-semibold text-slate-400 mb-5">Connect Online</h4>
            <div className="flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/tr285"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:-translate-y-1 text-slate-400 text-sm font-medium"
              >
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/tukaram-gore-99ab61322"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 hover:text-blue-400 transition-all hover:-translate-y-1 text-slate-400 text-sm font-medium"
              >
                <FiLinkedin className="w-4 h-4" /> LinkedIn
              </a>
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/tr285/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-500/50 hover:text-yellow-400 transition-all hover:-translate-y-1 text-slate-400 text-sm font-medium"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.833-1.452l2.697-2.607c.515-.515.497-1.366-.038-1.901-.535-.536-1.387-.554-1.902-.039z" />
                </svg>
                LeetCode
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
