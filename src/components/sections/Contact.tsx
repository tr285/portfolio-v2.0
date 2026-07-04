"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen relative flex flex-col justify-center">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Initiate <span className="neon-text-purple text-purple-400">Connection</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Looking for a Data Engineer, DevOps specialist, or Full-Stack developer? Let's build something extraordinary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Identifier</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Comm-Link (Email)</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Payload (Message)</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Initialize project parameters..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Transmitting...</span>
              ) : (
                <>Transmit <Send className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </motion.div>

        {/* Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/30 text-cyan-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Base of Operations</h4>
                <p className="text-slate-400">Pune, Maharashtra, India</p>
                <p className="text-xs text-slate-500 mt-1">Available for Remote Work</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/30 text-purple-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Direct Comms</h4>
                <a href="mailto:goretukaram62@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">
                  goretukaram62@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 mt-auto">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Digital Footprint</h4>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/tr285" target="_blank" className="p-4 bg-[#020617]/50 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:-translate-y-2">
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/tukaram-gore-99ab61322" target="_blank" className="p-4 bg-[#020617]/50 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:text-blue-400 transition-all hover:-translate-y-2">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/tr285/" target="_blank" className="p-4 bg-[#020617]/50 border border-white/10 rounded-2xl hover:border-yellow-500/50 hover:text-yellow-400 transition-all hover:-translate-y-2 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.833-1.452l2.697-2.607c.515-.515.497-1.366-.038-1.901-.535-.536-1.387-.554-1.902-.039z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
