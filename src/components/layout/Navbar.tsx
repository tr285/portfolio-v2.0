"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass-panel border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter neon-text-cyan">T.G</span>
      </div>

      <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
        <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
        <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
        <Link href="#experience" className="hover:text-cyan-400 transition-colors">Experience</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4" aria-label="Social Links">
        <Link href="https://github.com/tr285" target="_blank" aria-label="GitHub Profile" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <FiGithub className="w-5 h-5" aria-hidden="true" />
        </Link>
        <Link href="https://linkedin.com/in/tukaram-gore-99ab61322" target="_blank" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <FiLinkedin className="w-5 h-5" aria-hidden="true" />
        </Link>
        <Link href="https://leetcode.com/u/tr285/" target="_blank" aria-label="LeetCode Profile" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Code className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </motion.header>
  );
}
