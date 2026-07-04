"use client";

import { motion } from "framer-motion";
import {
  Briefcase, Code2, Calendar, MapPin, ExternalLink,
  Database, BarChart3, Terminal, Trophy
} from "lucide-react";

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Data Mining & Data Analysis Intern",
    organization: "UpToSkills",
    location: "Remote Internship",
    period: "2026",
    icon: BarChart3,
    accentColor: "#06b6d4",
    badge: "Internship",
    description: [
      "Collected, cleaned, and preprocessed large datasets for analysis and reporting.",
      "Performed exploratory data analysis (EDA) to identify trends, patterns, and actionable insights.",
      "Wrote SQL queries to extract, transform, and analyze structured datasets efficiently.",
      "Built interactive dashboards and visualizations to communicate findings to stakeholders.",
      "Automated repetitive data-processing workflows using Python, saving hours of manual effort.",
      "Created comprehensive reports summarizing analytical findings and business recommendations.",
      "Collaborated with mentors on real-world data analysis projects and industry best practices.",
    ],
    tech: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Excel", "Data Mining", "Data Visualization"],
    link: null,
  },
  {
    id: 2,
    type: "work",
    title: "Python Programming Intern",
    organization: "YBI Foundation",
    location: "Remote Internship",
    period: "2025",
    icon: Terminal,
    accentColor: "#a855f7",
    badge: "Internship",
    description: [
      "Built Python applications solving real-world programming problems across multiple domains.",
      "Applied object-oriented programming concepts and design patterns in practical projects.",
      "Implemented file handling, exception handling, and automation scripts for efficiency.",
      "Improved debugging, optimization, and code organization skills through hands-on development.",
      "Strengthened analytical thinking and logical problem-solving through structured coursework.",
    ],
    tech: ["Python", "OOP", "File Handling", "Exception Handling", "Automation", "Debugging"],
    link: null,
  },
  {
    id: 3,
    type: "project",
    title: "Personal Software Development Projects",
    organization: "Self-Directed",
    location: "Remote",
    period: "2025 – Present",
    icon: Code2,
    accentColor: "#10b981",
    badge: "Projects",
    description: [
      "Built responsive full-stack web applications using React, JavaScript, HTML, CSS, and Tailwind CSS.",
      "Developed Python automation scripts and data processing applications for real-world use cases.",
      "Designed relational database schemas and optimized SQL queries for production-grade applications.",
      "Created interactive dashboards for data visualization and actionable business intelligence.",
      "Managed version control and collaborative workflows using Git and GitHub.",
    ],
    tech: ["React", "JavaScript", "Python", "SQL", "HTML/CSS", "Tailwind CSS", "Git", "GitHub"],
    link: "https://github.com/tr285",
  },
  {
    id: 4,
    type: "achievement",
    title: "Competitive Programming",
    organization: "LeetCode & Coding Platforms",
    location: "Online",
    period: "2025 – Present",
    icon: Trophy,
    accentColor: "#eab308",
    badge: "DSA",
    description: [
      "Actively solved Data Structures, Algorithms, and SQL problems to strengthen technical foundations.",
      "Practiced optimized solutions for algorithmic challenges including arrays, graphs, and dynamic programming.",
      "Improved problem-solving, debugging, and analytical thinking through consistent daily practice.",
      "Regularly practiced database query optimization and advanced SQL techniques.",
    ],
    tech: ["Data Structures", "Algorithms", "SQL", "Dynamic Programming", "Problem Solving"],
    link: "https://leetcode.com/u/tr285/",
  },
];

const badgeColors: Record<string, string> = {
  Internship: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  Projects:   "text-green-400 bg-green-500/10 border-green-500/30",
  DSA:        "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
};

export function Experience() {
  return (
    <section id="experience" className="py-32 px-4 md:px-8 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400 mb-6">
          <Briefcase className="w-4 h-4" />
          Professional Journey
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Experience &amp;{" "}
          <span className="neon-text-cyan text-cyan-400">Growth</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Real-world internships, self-directed projects, and competitive programming
          — building expertise from the ground up.
        </p>
      </motion.div>

      <div className="relative z-10">
        {/* Vertical timeline line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/30 to-transparent md:-translate-x-px" />

        <div className="space-y-16">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer for alternating layout */}
                <div className="w-full md:w-1/2 hidden md:block" />

                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", bounce: 0.4 }}
                  className="absolute left-5 md:left-1/2 top-6 w-10 h-10 rounded-full bg-[#020617] border-2 flex items-center justify-center z-20 -translate-x-1/2 shadow-lg"
                  style={{ borderColor: item.accentColor, boxShadow: `0 0 20px ${item.accentColor}40` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.accentColor }} />
                </motion.div>

                {/* Content Card */}
                <div
                  className="w-full md:w-1/2 ml-12 md:ml-0 glass-panel rounded-2xl border border-white/10 overflow-hidden group hover:border-opacity-50 transition-all duration-300"
                  style={{ "--card-glow": item.accentColor } as React.CSSProperties}
                >
                  {/* Card top accent strip */}
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(to right, ${item.accentColor}, transparent)` }}
                  />

                  <div className="p-6">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColors[item.badge]}`}
                          >
                            {item.badge}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </span>
                        </div>
                        <h3
                          className="text-xl font-bold text-white transition-colors duration-300"
                          style={{ ["--tw-gradient-from" as string]: item.accentColor }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Org + Location */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 shrink-0" style={{ color: item.accentColor }} />
                        <span className="font-semibold text-slate-200 text-sm">{item.organization}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin className="w-3 h-3 shrink-0" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description bullets */}
                    <ul className="space-y-2 mb-5">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accentColor }} />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full border transition-colors duration-200"
                          style={{
                            color: item.accentColor,
                            borderColor: `${item.accentColor}30`,
                            backgroundColor: `${item.accentColor}10`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                        style={{ color: item.accentColor }}
                      >
                        View Work <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
