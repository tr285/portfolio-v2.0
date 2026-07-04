"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity, Star, GitFork, GitCommit } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import githubData from "@/data/github.json";

const projects = [
  {
    title: "Student Mentor & Team Collaboration Platform",
    problem: "Students struggle to find compatible mentors and team members for projects.",
    solution: "A centralized platform matching students with mentors and providing collaboration tools.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    metrics: "Reduced mentor search time by 60%",
    github: "https://github.com/tr285",
  },
  {
    title: "Career Prediction Web Application",
    problem: "Students lack data-driven guidance for choosing career paths.",
    solution: "Machine Learning model predicting optimal career paths based on academic and extra-curricular inputs.",
    tech: ["Python", "Flask", "Scikit-Learn", "React"],
    metrics: "85% prediction accuracy on test dataset",
    github: "https://github.com/tr285",
  },
  {
    title: "Movie Review Application",
    problem: "Existing review platforms are cluttered and lack personalized recommendations.",
    solution: "A sleek, responsive movie review app with sentiment analysis on user reviews.",
    tech: ["React", "Firebase", "Tailwind CSS", "Python (NLTK)"],
    metrics: "Handled 10k+ concurrent simulated users",
    github: "https://github.com/tr285",
  },
];

export function Projects() {
  const user = githubData.user;
  const repos = githubData.repos;

  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen relative">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="neon-text-cyan text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Architecting robust solutions for real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            
            <div className="space-y-4 flex-grow">
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-1">Problem</h4>
                <p className="text-slate-400 text-sm">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-1">Solution</h4>
                <p className="text-slate-400 text-sm">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400">{project.metrics}</span>
              <a href={project.github} target="_blank" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 relative z-10">
        <h3 className="text-3xl font-bold text-center mb-12">GitHub <span className="text-purple-400">Activity</span></h3>
        
        <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <img src={user.avatar_url} alt="GitHub Avatar" className="w-24 h-24 rounded-full border-2 border-purple-500/50 p-1" />
            <div>
              <h4 className="text-2xl font-bold">{user.name || user.login}</h4>
              <p className="text-slate-400">{user.bio}</p>
              <div className="flex gap-4 mt-4 text-sm font-mono text-cyan-400">
                <span className="flex items-center gap-1"><Activity className="w-4 h-4"/> {user.public_repos} Repos</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4"/> {githubData.total_repos} Total</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            {repos.slice(0,4).map((repo: any) => (
              <a key={repo.id} href={repo.html_url} target="_blank" className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors">
                <h5 className="font-semibold text-sm truncate w-48">{repo.name}</h5>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                  {repo.language && <span className="text-cyan-500">{repo.language}</span>}
                  <span className="flex items-center gap-1"><Star className="w-3 h-3"/> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3"/> {repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
