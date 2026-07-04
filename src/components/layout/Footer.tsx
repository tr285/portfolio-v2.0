'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Code } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/tr285',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tukaram-gore-99ab61322',
    icon: FiLinkedin,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/tr285/',
    icon: Code,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-purple-500" />

      <div className="glass-panel rounded-none border-x-0 border-b-0">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Branding */}
            <div className="space-y-4">
              <Link href="/" className="group inline-flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold tracking-wider text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                  T.G
                </span>
                <span className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  Tukaram Gore
                </span>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                Crafting digital experiences with modern technologies and a passion for clean, performant code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="neon-text-cyan text-sm font-semibold uppercase tracking-widest">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                  >
                    <span className="inline-block h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="neon-text-cyan text-sm font-semibold uppercase tracking-widest">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
                    >
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/5 pt-8 sm:flex-row sm:justify-between">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} Tukaram Gore. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              Built with
              <span className="inline-flex items-center gap-1 font-medium text-cyan-400/80">
                Next.js
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
