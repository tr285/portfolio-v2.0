"use client";

import { motion } from "framer-motion";
import { Award, Code2, BarChart2, Cloud, Server, Trophy, Star, ExternalLink, ShieldCheck } from "lucide-react";
import leetcodeData from "@/data/leetcode.json";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    org: "Amazon Web Services",
    date: "May 2023",
    icon: Cloud,
    color: "#FF9900",
    link: "https://aws.amazon.com/certification/",
    skills: ["Cloud Architecture", "EC2/S3/RDS", "Security", "Scalability"],
  },
  {
    name: "Google Data Analytics Professional Certificate",
    org: "Google",
    date: "Jan 2023",
    icon: BarChart2,
    color: "#4285F4",
    link: "https://grow.google/certificates/data-analytics/",
    skills: ["Data Cleaning", "SQL", "Tableau", "R Programming"],
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    org: "Microsoft",
    date: "Aug 2023",
    icon: Server,
    color: "#0089D6",
    link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    skills: ["Azure Services", "Cloud Concepts", "Pricing", "SLA"],
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    org: "Meta",
    date: "Nov 2023",
    icon: Code2,
    color: "#0668E1",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    skills: ["React", "UI/UX Design", "JavaScript", "HTML/CSS"],
  },
];

const achievements = [
  {
    title: "Top 10% Globally on LeetCode",
    desc: "Ranked in the top 10% of competitive programmers worldwide on LeetCode platform.",
    icon: Trophy,
    color: "#eab308",
  },
  {
    title: "500K+ Daily Records Processed",
    desc: "Engineered ETL pipelines handling over 500,000 records daily with 99.9% uptime.",
    icon: Star,
    color: "#0ff",
  },
  {
    title: "40% Query Time Reduction",
    desc: "Optimized SQL query performance achieving a 40% reduction in execution time.",
    icon: Award,
    color: "#a855f7",
  },
];

function AnimatedBar({ value, total, color }: { value: number; total: number; color: string }) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function Achievements() {
  const stats = leetcodeData.data?.matchedUser?.submitStats?.acSubmissionNum || [];
  const getCount = (diff: string) => stats.find((s) => s.difficulty === diff)?.count || 0;

  const easySolved = getCount("Easy");
  const mediumSolved = getCount("Medium");
  const hardSolved = getCount("Hard");
  const totalSolved = getCount("All");
  const circumference = 2 * Math.PI * 60;
  const progress = totalSolved / 800;

  return (
    <section id="achievements" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-1.5 text-sm text-yellow-400 mb-6">
          <Trophy className="w-4 h-4" />
          Recognition & Skills
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="neon-text-cyan text-cyan-400">Achievements</span> & Certifications
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Industry-recognized credentials, algorithmic achievements, and key milestones.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative z-10 mb-16">
        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-yellow-500/15 rounded-xl border border-yellow-500/30">
              <Code2 className="w-7 h-7 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">LeetCode Stats</h3>
              <a
                href="https://leetcode.com/u/tr285/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center gap-1 transition-colors"
              >
                @tr285 <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Circular Progress */}
            <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="60" fill="transparent" stroke="#1e293b" strokeWidth="8" />
                <motion.circle
                  cx="70"
                  cy="70"
                  r="60"
                  fill="transparent"
                  stroke="#eab308"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: circumference - circumference * Math.min(progress, 1) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-bold text-white">{totalSolved}</span>
                <span className="text-xs text-slate-400">/ 800</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Problems Solved</span>
              </div>
            </div>

            {/* Bars */}
            <div className="flex-1 space-y-5 w-full">
              {[
                { label: "Easy", value: easySolved, color: "#4ade80" },
                { label: "Medium", value: mediumSolved, color: "#facc15" },
                { label: "Hard", value: hardSolved, color: "#f87171" },
              ].map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium" style={{ color: d.color }}>{d.label}</span>
                    <span className="text-slate-300 font-mono">{d.value}</span>
                  </div>
                  <AnimatedBar value={d.value} total={totalSolved} color={d.color} />
                </div>
              ))}

              <div className="pt-2 border-t border-white/5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Global Ranking</span>
                  <span className="text-yellow-400 font-semibold">Top 10%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <div className="flex flex-col gap-4">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-5 group hover:border-opacity-50 transition-all"
              style={{ boxShadow: `0 0 20px ${ach.color}08` }}
            >
              <div
                className="p-3 rounded-xl border shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${ach.color}15`, borderColor: `${ach.color}40` }}
              >
                <ach.icon className="w-6 h-6" style={{ color: ach.color }} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 group-hover:text-opacity-90 transition-colors">{ach.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{ach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Award className="text-purple-400 w-6 h-6" />
          Industry Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-opacity-60 transition-all"
              style={{ boxShadow: `0 0 20px ${cert.color}08` }}
            >
              <div>
                <ShieldCheck className="absolute top-5 right-5 w-10 h-10 text-white/3 group-hover:text-white/8 transition-colors opacity-0 group-hover:opacity-100" style={{ color: cert.color, opacity: 0.08 }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${cert.color}15`, borderColor: `${cert.color}40` }}
                >
                  <cert.icon className="w-6 h-6" style={{ color: cert.color }} />
                </div>
                <h4 className="font-bold text-sm text-white leading-snug mb-2">{cert.name}</h4>
                <div className="flex justify-between text-xs text-slate-500 mb-4">
                  <span className="font-medium" style={{ color: cert.color }}>{cert.org}</span>
                  <span className="font-mono">{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{ color: cert.color, borderColor: `${cert.color}30`, backgroundColor: `${cert.color}10` }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                style={{ color: cert.color }}
              >
                Verify Credential <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
