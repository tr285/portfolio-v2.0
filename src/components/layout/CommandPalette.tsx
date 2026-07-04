'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Search,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Mail,
  Award,
  Download,
  ExternalLink,
  Command,
} from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigate' | 'Social' | 'Actions';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ICON_CLASS = 'w-4 h-4';

const buildItems = (): CommandItem[] => [
  // ── Navigate ─────────────────────────────────────────────────────
  {
    id: 'about',
    label: 'About',
    category: 'Navigate',
    icon: <User className={ICON_CLASS} />,
    action: () =>
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'skills',
    label: 'Skills',
    category: 'Navigate',
    icon: <Code2 className={ICON_CLASS} />,
    action: () =>
      document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'projects',
    label: 'Projects',
    category: 'Navigate',
    icon: <FolderOpen className={ICON_CLASS} />,
    action: () =>
      document
        .querySelector('#projects')
        ?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'experience',
    label: 'Experience',
    category: 'Navigate',
    icon: <Briefcase className={ICON_CLASS} />,
    action: () =>
      document
        .querySelector('#experience')
        ?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'contact',
    label: 'Contact',
    category: 'Navigate',
    icon: <Mail className={ICON_CLASS} />,
    action: () =>
      document
        .querySelector('#contact')
        ?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'achievements',
    label: 'Achievements',
    category: 'Navigate',
    icon: <Award className={ICON_CLASS} />,
    action: () =>
      document
        .querySelector('#achievements')
        ?.scrollIntoView({ behavior: 'smooth' }),
  },

  // ── Social ───────────────────────────────────────────────────────
  {
    id: 'github',
    label: 'GitHub',
    category: 'Social',
    icon: <FiGithub className={ICON_CLASS} />,
    shortcut: '⌥ G',
    action: () => window.open('https://github.com/tr285', '_blank'),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    category: 'Social',
    icon: <FiLinkedin className={ICON_CLASS} />,
    shortcut: '⌥ L',
    action: () =>
      window.open(
        'https://linkedin.com/in/tukaram-gore-99ab61322',
        '_blank',
      ),
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    category: 'Social',
    icon: <ExternalLink className={ICON_CLASS} />,
    action: () => window.open('https://leetcode.com/u/tr285/', '_blank'),
  },

  // ── Actions ──────────────────────────────────────────────────────
  {
    id: 'resume',
    label: 'Download Resume',
    category: 'Actions',
    icon: <Download className={ICON_CLASS} />,
    shortcut: '⌥ R',
    action: () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Tukaram_Gore_Resume.pdf';
      link.click();
    },
  },
  {
    id: 'email',
    label: 'Send Email',
    category: 'Actions',
    icon: <Mail className={ICON_CLASS} />,
    shortcut: '⌥ E',
    action: () => {
      window.location.href = 'mailto:goretukaram62@gmail.com';
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Category order & styling                                           */
/* ------------------------------------------------------------------ */

const CATEGORY_ORDER: CommandItem['category'][] = [
  'Navigate',
  'Social',
  'Actions',
];

const categoryTagColor: Record<CommandItem['category'], string> = {
  Navigate: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  Social: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  Actions: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = buildItems();

  /* ── filtered + grouped items ──────────────────────────────────── */
  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: filtered.filter((i) => i.category === cat),
  })).filter((g) => g.items.length > 0);

  const flatFiltered = grouped.flatMap((g) => g.items);

  /* ── open / close helpers ──────────────────────────────────────── */
  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  /* ── global keyboard shortcut (Ctrl+K / Cmd+K) ────────────────── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => {
          if (prev) {
            closePalette();
            return false;
          }
          openPalette();
          return true;
        });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [openPalette, closePalette]);

  /* ── focus input on open ───────────────────────────────────────── */
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  /* ── clamp activeIndex when list shrinks ────────────────────────── */
  useEffect(() => {
    if (activeIndex >= flatFiltered.length) {
      setActiveIndex(Math.max(0, flatFiltered.length - 1));
    }
  }, [flatFiltered.length, activeIndex]);

  /* ── scroll active item into view ──────────────────────────────── */
  useEffect(() => {
    const active = listRef.current?.querySelector('[data-active="true"]');
    active?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  /* ── inner keyboard navigation ─────────────────────────────────── */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % flatFiltered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + flatFiltered.length) % flatFiltered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      flatFiltered[activeIndex]?.action();
      closePalette();
    } else if (e.key === 'Escape') {
      closePalette();
    }
  };

  /* ── helpers ───────────────────────────────────────────────────── */
  const execute = (item: CommandItem) => {
    item.action();
    closePalette();
  };

  /* ── render ────────────────────────────────────────────────────── */
  let flatIndex = -1; // track flat position while iterating groups

  return (
    <AnimatePresence>
      {open && (
        /* ── backdrop ──────────────────────────────────────────────── */
        <motion.div
          key="cmd-backdrop"
          className="fixed inset-0 z-[999] flex items-start justify-center pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={closePalette}
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
          {/* backdrop tint */}
          <div className="absolute inset-0 bg-[#0a0e1a]/70" />

          {/* ── panel ────────────────────────────────────────────────── */}
          <motion.div
            key="cmd-panel"
            className="relative w-full max-w-[560px] mx-4 rounded-2xl overflow-hidden
                       border border-white/[0.08] shadow-2xl shadow-cyan-500/5"
            style={{
              background:
                'linear-gradient(145deg, rgba(15,23,42,0.92), rgba(10,14,26,0.96))',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            initial={{ opacity: 0, y: -24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* ── search bar ───────────────────────────────────────── */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500
                           outline-none caret-cyan-400"
              />
              <kbd
                className="hidden sm:inline-flex items-center gap-1 rounded-md border
                           border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px]
                           font-medium text-slate-400 select-none"
              >
                ESC
              </kbd>
            </div>

            {/* ── results list ─────────────────────────────────────── */}
            <div
              ref={listRef}
              className="max-h-[340px] overflow-y-auto overscroll-contain
                         scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
            >
              {flatFiltered.length === 0 && (
                <div className="px-5 py-10 text-center text-sm text-slate-500">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}

              {grouped.map((group) => (
                <div key={group.category}>
                  {/* category heading */}
                  <div className="px-5 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    {group.category}
                  </div>

                  {group.items.map((item) => {
                    flatIndex++;
                    const isActive = flatIndex === activeIndex;
                    const idx = flatIndex; // capture for click handler

                    return (
                      <button
                        key={item.id}
                        data-active={isActive}
                        onClick={() => execute(item)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`
                          group flex w-full items-center gap-3 px-5 py-2.5
                          text-left transition-colors duration-100
                          ${
                            isActive
                              ? 'bg-cyan-500/[0.08] text-white'
                              : 'text-slate-300 hover:bg-white/[0.03]'
                          }
                        `}
                      >
                        {/* icon */}
                        <span
                          className={`flex items-center justify-center w-8 h-8 rounded-lg
                            border transition-colors duration-100
                            ${
                              isActive
                                ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                                : 'border-white/[0.06] bg-white/[0.03] text-slate-400'
                            }`}
                        >
                          {item.icon}
                        </span>

                        {/* label */}
                        <span className="flex-1 text-sm font-medium">
                          {item.label}
                        </span>

                        {/* category tag */}
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold
                            uppercase tracking-wide ${categoryTagColor[item.category]}`}
                        >
                          {item.category}
                        </span>

                        {/* shortcut hint */}
                        {item.shortcut && (
                          <kbd
                            className="ml-1 hidden sm:inline-flex items-center rounded-md
                              border border-white/10 bg-white/[0.04] px-1.5 py-0.5
                              text-[11px] font-medium text-slate-500 select-none"
                          >
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* ── bottom hint bar ──────────────────────────────────── */}
            <div
              className="flex items-center justify-between gap-4 border-t border-white/[0.06]
                         px-5 py-2.5 text-[11px] text-slate-500 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-medium">
                    ↑
                  </kbd>
                  <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-medium">
                    ↓
                  </kbd>
                  <span className="ml-1">navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-medium">
                    ↵
                  </kbd>
                  <span className="ml-1">select</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-medium">
                    esc
                  </kbd>
                  <span className="ml-1">close</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600">
                <Command className="w-3.5 h-3.5" />
                <span>Command Palette</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
