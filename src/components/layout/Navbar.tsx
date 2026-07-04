"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Code, Menu, X, Command } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-panel border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-sm font-bold text-cyan-400 transition-all group-hover:border-cyan-400/70 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.25)]">
              T.G
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
              Tukaram Gore
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={openCommandPalette}
              aria-label="Open Command Palette"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all text-xs"
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>

            <Link
              href="https://github.com/tr285"
              target="_blank"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <FiGithub className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://linkedin.com/in/tukaram-gore-99ab61322"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <FiLinkedin className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://leetcode.com/u/tr285/"
              target="_blank"
              aria-label="LeetCode Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <Code className="w-4 h-4" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[73px] left-0 right-0 z-40 glass-panel border-b border-white/10 overflow-hidden md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
