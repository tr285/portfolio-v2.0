"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, FolderOpen, Mail, ChevronDown, X } from "lucide-react";
import { 
  SiGit, SiGithub, SiDocker, SiKubernetes, SiJenkins, 
  SiPython, SiTerraform, SiPostman, SiGrafana, 
  SiPrometheus, SiMysql 
} from "react-icons/si";
import { FaLinux, FaInfinity, FaAws } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { id: "git", name: "Git", x: 225.0, y: 0.0, color: "#F05032", icon: SiGit, description: "Version control system. Tracks changes in code, allowing developers to collaborate, revert to previous states, and manage different feature branches simultaneously." },
  { id: "github", name: "GitHub", x: 274.1, y: 122.0, color: "#ffffff", icon: SiGithub, description: "Cloud-based hosting for Git repositories. Provides collaboration features like pull requests, issue tracking, and code reviews for teams." },
  { id: "jenkins", name: "Jenkins", x: 150.6, y: 167.2, color: "#D24939", icon: SiJenkins, description: "Open-source CI/CD automation server. It automatically builds, tests, and deploys code every time a developer commits changes." },
  { id: "python", name: "Python", x: 92.7, y: 285.3, color: "#3776AB", icon: SiPython, description: "Versatile programming language. Widely used for data engineering, AI, and backend services due to its readability and massive ecosystem of libraries." },
  
  { id: "docker", name: "Docker", x: -23.5, y: 223.8, color: "#2496ED", icon: SiDocker, description: "Containerization platform. Packages applications and their dependencies into standard units called containers, ensuring they run seamlessly in any environment." },
  { id: "terraform", name: "Terraform", x: -150.0, y: 259.8, color: "#7B42BC", icon: SiTerraform, description: "Infrastructure as Code (IaC) tool. Allows you to define, provision, and manage cloud infrastructure using human-readable configuration files." },
  
  { id: "kubernetes", name: "Kubernetes", x: -182.0, y: 132.2, color: "#326CE5", icon: SiKubernetes, description: "Container orchestration platform. Automates the deployment, scaling, and management of thousands of containerized applications across clusters of servers." },
  { id: "aws", name: "AWS", x: -293.7, y: 62.3, color: "#FF9900", icon: FaAws, description: "Amazon Web Services. The world's most comprehensive cloud platform, offering computing power, database storage, and content delivery services." },
  
  { id: "linux", name: "Linux", x: -221.7, y: -38.6, color: "#FCC624", icon: FaLinux, description: "Open-source operating system. The foundational OS for most servers and cloud infrastructure, providing unparalleled stability, security, and performance." },
  { id: "postman", name: "Postman", x: -242.7, y: -176.3, color: "#FF6C37", icon: SiPostman, description: "API development platform. Allows developers to easily create, test, share, and document APIs through a user-friendly graphical interface." },
  
  { id: "mysql", name: "MySQL", x: -112.5, y: -194.9, color: "#4479A1", icon: SiMysql, description: "Relational database management system. Stores data in structured tables using SQL, providing high performance and reliability for web applications." },
  { id: "grafana", name: "Grafana", x: -31.4, y: -298.4, color: "#F46800", icon: SiGrafana, description: "Open-source analytics and visualization web app. Connects to various data sources to create comprehensive, real-time dashboards for system monitoring." },
  
  { id: "vscode", name: "VS Code", x: 69.5, y: -214.0, color: "#007ACC", icon: VscVscode, description: "Source-code editor. Highly customizable IDE with powerful debugging tools, syntax highlighting, and extensions for virtually every programming language." },
  { id: "cicd", name: "CI/CD", x: 201.2, y: -222.9, color: "#45B8D8", icon: FaInfinity, description: "Continuous Integration & Deployment. The practice of automating the integration of code changes and the delivery of applications to production environments." },
  
  { id: "prometheus", name: "Prometheus", x: 205.8, y: -91.5, color: "#E6522C", icon: SiPrometheus, description: "Systems monitoring and alerting toolkit. Collects metrics from configured targets at given intervals, evaluates rule expressions, and triggers alerts." },
];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [selectedTech, setSelectedTech] = useState<typeof techStack[0] | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Central Artwork */}
      <motion.div 
        style={{ y, opacity: selectedTech ? 0.3 : opacity }}
        className="relative z-10 flex flex-col items-center justify-center transition-opacity duration-500"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyan-500/30 p-2 glass-panel shadow-[0_0_50px_rgba(0,255,255,0.2)]">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image 
              src="/hero-image.png" 
              alt="Profile Picture"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Glowing Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] rounded-full border border-cyan-500/20 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] rounded-full border border-purple-500/20 border-dotted"
          />
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-8 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Tukaram <span className="neon-text-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Gore</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-300">
            Data Engineer <span className="text-cyan-500">•</span> DevOps <span className="text-purple-500">•</span> Cloud
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mt-4">
            &quot;I don&apos;t just write code. I design scalable systems, automate workflows, build intelligent data pipelines, and transform ideas into real-world solutions.&quot;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 rounded-full hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all">
              <Download className="w-4 h-4" /> Download Resume
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-500/10 text-purple-400 border border-purple-500/50 rounded-full hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
              <FolderOpen className="w-4 h-4" /> View Projects
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-all">
              <Mail className="w-4 h-4" /> Hire Me
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Orbiting Solar System of Technologies */}
      <div className={`absolute inset-0 pointer-events-none hidden md:flex items-center justify-center transition-opacity duration-500 ${selectedTech ? 'opacity-30' : 'opacity-100'}`}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative flex items-center justify-center w-full h-full"
        >
          {/* Orbital Paths */}
          <div className="absolute w-[450px] h-[450px] rounded-full border border-white/5" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-white/5" />

          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="absolute flex items-center justify-center pointer-events-auto cursor-pointer group"
                style={{ left: `calc(50% + ${tech.x}px)`, top: `calc(50% + ${tech.y}px)` }}
                onClick={() => setSelectedTech(tech)}
              >
                {/* Counter-rotate to keep icons upright while the parent container orbits */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="relative -translate-x-1/2 -translate-y-1/2"
                >
                  <div 
                    className="w-14 h-14 rounded-full glass-panel flex flex-col items-center justify-center border border-white/10 text-white transition-all duration-300 hover:scale-125 hover:border-white/40 hover:z-50"
                    style={{ boxShadow: `0 0 15px ${tech.color}40`, background: 'rgba(2, 6, 23, 0.7)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: tech.color }} />
                  </div>
                  
                  {/* Hover Label */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-semibold glass-panel px-3 py-1.5 rounded-full z-50">
                    {tech.name}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="relative w-full max-w-md glass-panel border border-white/10 rounded-2xl overflow-hidden p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: `0 0 40px ${selectedTech.color}30` }}
            >
              <button 
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg bg-white/5 border border-white/10"
                  style={{ boxShadow: `0 0 30px ${selectedTech.color}40` }}
                >
                  <selectedTech.icon className="w-12 h-12" style={{ color: selectedTech.color }} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2" style={{ textShadow: `0 0 10px ${selectedTech.color}80` }}>
                  {selectedTech.name}
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-6 rounded-full" style={{ backgroundImage: `linear-gradient(to right, transparent, ${selectedTech.color}, transparent)` }} />
                
                <p className="text-slate-300 leading-relaxed text-lg">
                  {selectedTech.description}
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 w-full flex justify-center">
                  <span className="text-sm text-slate-500 font-mono tracking-wider">
                    TECH ECOSYSTEM NODE
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 pointer-events-none"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
