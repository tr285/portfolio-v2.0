"use client";

import { motion } from "framer-motion";
import {
  GitCommit, Settings, CheckCircle, Package, CloudUpload,
  Activity, Shield, RefreshCw, Zap, Server, Container
} from "lucide-react";
import {
  SiDocker, SiKubernetes, SiJenkins, SiTerraform,
  SiGithub, SiPrometheus, SiGrafana, SiLinux, SiAnsible
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const pipelineStages = [
  {
    name: "Source",
    icon: GitCommit,
    color: "#f97316",
    desc: "GitHub / GitLab",
    tools: ["Feature branches", "PRs & Code Review", "Git Hooks"],
  },
  {
    name: "Build",
    icon: Settings,
    color: "#3b82f6",
    desc: "Jenkins / GitHub Actions",
    tools: ["Compile & Lint", "Unit Tests", "Coverage Reports"],
  },
  {
    name: "Test",
    icon: CheckCircle,
    color: "#10b981",
    desc: "PyTest / Jest",
    tools: ["Integration Tests", "Security Scans", "Quality Gates"],
  },
  {
    name: "Package",
    icon: Package,
    color: "#8b5cf6",
    desc: "Docker Hub / ECR",
    tools: ["Docker Images", "Helm Charts", "Artifact Registry"],
  },
  {
    name: "Deploy",
    icon: CloudUpload,
    color: "#06b6d4",
    desc: "Kubernetes / ECS",
    tools: ["Rolling Updates", "Blue-Green", "Canary Releases"],
  },
  {
    name: "Monitor",
    icon: Activity,
    color: "#ec4899",
    desc: "Prometheus / Grafana",
    tools: ["Real-time Metrics", "Alerting", "Log Aggregation"],
  },
];

const toolStack = [
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
  { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
  { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
];

const metrics = [
  { label: "Deployment Frequency", value: "Daily", icon: RefreshCw, color: "#0ff" },
  { label: "Mean Time to Recovery", value: "< 5min", icon: Zap, color: "#a855f7" },
  { label: "Pipeline Success Rate", value: "99.2%", icon: Shield, color: "#10b981" },
  { label: "Infrastructure as Code", value: "100%", icon: Server, color: "#f97316" },
];

const containerInsights = [
  { label: "Docker Containers Managed", value: "50+", color: "#2496ED" },
  { label: "K8s Pods Orchestrated", value: "120+", color: "#326CE5" },
  { label: "Automated Pipelines", value: "12", color: "#D24939" },
  { label: "Cloud Cost Reduction", value: "35%", color: "#10b981" },
];

export function DevOps() {
  return (
    <section id="devops" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-sm text-purple-400 mb-6">
          <Container className="w-4 h-4" />
          DevOps Engineering
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="neon-text-purple text-purple-400">CI/CD</span> Pipeline & DevOps
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Automating the entire software lifecycle — from commit to production — with
          zero-downtime deployments and full observability.
        </p>
      </motion.div>

      {/* Pipeline Stages */}
      <div className="relative z-10 mb-20">
        {/* Animated connector line */}
        <div className="absolute top-[52px] left-0 right-0 h-0.5 bg-white/5 hidden lg:block" />
        <div className="absolute top-[52px] left-0 right-0 h-0.5 overflow-hidden hidden lg:block">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#0ff]"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {pipelineStages.map((stage, idx) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Node */}
              <div
                className="w-24 h-24 rounded-2xl glass-panel border border-white/10 flex flex-col items-center justify-center mb-4 relative transition-all duration-300 group-hover:border-opacity-80"
                style={{
                  boxShadow: `0 0 20px ${stage.color}15`,
                  borderColor: `${stage.color}30`,
                }}
              >
                <stage.icon
                  className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: stage.color }}
                />
                {/* Pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  className="absolute inset-0 rounded-2xl border"
                  style={{ borderColor: stage.color }}
                />
              </div>

              <h3 className="font-bold text-white text-sm mb-1">{stage.name}</h3>
              <p className="text-[10px] text-slate-500 mb-2">{stage.desc}</p>
              <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stage.tools.map((t) => (
                  <div
                    key={t}
                    className="text-[9px] px-2 py-0.5 rounded-full border text-center"
                    style={{ color: stage.color, borderColor: `${stage.color}40`, backgroundColor: `${stage.color}10` }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Two columns: Tool Stack + Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative z-10">
        {/* Tool Stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-cyan-400">
            <Settings className="w-5 h-5" /> Tool Stack
          </h3>
          <div className="grid grid-cols-5 gap-4">
            {toolStack.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.15, y: -3 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-opacity-60"
                  style={{ backgroundColor: `${tool.color}10`, borderColor: `${tool.color}20` }}
                >
                  <tool.icon size={22} style={{ color: tool.color }} />
                </div>
                <span className="text-[10px] text-slate-500 text-center group-hover:text-slate-300 transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DORA Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-purple-400">
            <Activity className="w-5 h-5" /> DORA Metrics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-4 rounded-xl border border-white/10 group hover:border-opacity-50 transition-all"
                style={{ "--hover-color": m.color } as React.CSSProperties}
              >
                <m.icon className="w-5 h-5 mb-3" style={{ color: m.color }} />
                <div className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</div>
                <div className="text-xs text-slate-500 mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Container & Infrastructure Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
      >
        {containerInsights.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 rounded-2xl border border-white/10 text-center hover:border-opacity-50 transition-all"
            style={{ boxShadow: `0 0 20px ${c.color}10` }}
          >
            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: c.color }}>
              {c.value}
            </div>
            <div className="text-xs text-slate-500">{c.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
