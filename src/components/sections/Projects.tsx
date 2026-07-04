"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, GitFork, Search, Rocket } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import githubData from "@/data/github.json";

const CATEGORIES = ["All", "Web Dev", "Machine Learning", "Data Engineering"];

const projects = [
  {
    title: "Student Mentor & Team Collaboration Platform",
    problem: "Students struggle to find compatible mentors and team members for projects.",
    solution: "A centralized platform matching students with mentors and providing real-time collaboration tools via WebSockets.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "Web Dev",
    metrics: "Reduced mentor search time by 60%",
    github: "https://github.com/tr285",
    demo: null,
    featured: true,
  },
  {
    title: "Career Prediction Web Application",
    problem: "Students lack data-driven guidance for choosing career paths.",
    solution: "ML model predicting optimal career paths based on academic and extra-curricular inputs using a Random Forest classifier.",
    tech: ["Python", "Flask", "Scikit-Learn", "React", "Pandas"],
    category: "Machine Learning",
    metrics: "85% prediction accuracy on test dataset",
    github: "https://github.com/tr285",
    demo: null,
    featured: true,
  },
  {
    title: "Movie Review Application",
    problem: "Existing review platforms are cluttered and lack personalized recommendations.",
    solution: "A sleek, responsive movie review app with sentiment analysis on user reviews using NLTK.",
    tech: ["React", "Firebase", "Tailwind CSS", "Python (NLTK)"],
    category: "Web Dev",
    metrics: "Handled 10k+ concurrent simulated users",
    github: "https://github.com/tr285",
    demo: null,
    featured: false,
  },
  {
    title: "ETL Pipeline for E-commerce Data",
    problem: "Manual data extraction from multiple sources caused delays in business reporting.",
    solution: "Automated ETL pipeline using Apache Spark and Airflow for distributed data processing and orchestration.",
    tech: ["Python", "Apache Spark", "Airflow", "AWS S3", "PostgreSQL"],
    category: "Data Engineering",
    metrics: "Processed 1TB+ data daily with 99.9% uptime",
    github: "https://github.com/tr285",
    demo: null,
    featured: true,
  },
];

export function Projects() {
  const user = githubData.user;
  const repos = githubData.repos;

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const totalStars = repos.reduce(
    (sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count,
    0
  );

  return (
    <section
      id="projects"
      className="py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen relative"
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="neon-text-cyan text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Architecting robust solutions for real-world problems. Each project is
          built with a problem-first mindset.
        </p>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto glass-panel p-4 rounded-2xl border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                    : "bg-transparent text-slate-400 border border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col bg-gradient-to-b from-white/[0.03] to-transparent hover:shadow-[0_0_40px_rgba(0,255,255,0.07)] relative overflow-hidden"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Glow orb on hover */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start mb-5 pr-16">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>

              <span className="inline-flex w-fit text-xs bg-white/10 text-slate-400 px-2.5 py-1 rounded-md mb-5">
                {project.category}
              </span>

              <div className="space-y-4 flex-grow">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                    Problem
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                    Solution
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 flex items-center gap-1.5">
                  <Rocket className="w-3 h-3" />
                  {project.metrics}
                </span>
                <div className="flex items-center gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-cyan-400"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-16 text-center text-slate-500">
            <Search className="w-10 h-10 mx-auto mb-4 opacity-30" />
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </motion.div>

      {/* GitHub Activity */}
      <div className="mt-24 relative z-10">
        <h3 className="text-3xl font-bold text-center mb-12">
          GitHub <span className="text-purple-400">Activity</span>
        </h3>

        <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-purple-500/20 transition-colors">
          <div className="flex items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={user.avatar_url}
              alt={`${user.name || user.login} GitHub avatar`}
              className="w-20 h-20 rounded-full border-2 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            />
            <div>
              <h4 className="text-xl font-bold">{user.name || user.login}</h4>
              <p className="text-slate-400 text-sm">{user.bio}</p>
              <div className="flex gap-4 mt-3 text-sm font-mono">
                <span className="text-cyan-400 flex items-center gap-1">
                  <FiGithub className="w-4 h-4" /> {user.public_repos} Repos
                </span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Star className="w-4 h-4" /> {totalStars} Stars
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
            {repos.slice(0, 4).map(
              (repo: {
                id: number;
                html_url: string;
                name: string;
                language: string | null;
                stargazers_count: number;
                forks_count: number;
              }) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.05)] group"
                >
                  <h5 className="font-semibold text-sm truncate w-44 group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h5>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                    {repo.language && (
                      <span className="text-cyan-500">{repo.language}</span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
