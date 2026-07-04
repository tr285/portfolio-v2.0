"use client";

import { motion } from "framer-motion";
import { GitCommit, Settings, CheckCircle, Package, CloudUpload, Activity } from "lucide-react";

const steps = [
  { name: "Code", icon: GitCommit, desc: "Git & Version Control" },
  { name: "Build", icon: Settings, desc: "Compile & Test" },
  { name: "Package", icon: Package, desc: "Docker Images" },
  { name: "Deploy", icon: CloudUpload, desc: "Kubernetes/AWS" },
  { name: "Monitor", icon: Activity, desc: "Logs & Alerts" },
];

export function DevOps() {
  return (
    <section id="devops" className="py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen relative">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="neon-text-purple text-purple-400">DevOps</span> Lifecycle
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Automating the path from code to production with zero downtime.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto z-10 mt-32">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full hidden md:block" />
        
        {/* Animated flow line */}
        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 rounded-full overflow-hidden hidden md:block">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#0ff]"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
          {steps.map((step, idx) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center relative group"
            >
              {/* Node */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass-panel border border-cyan-500/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(0,255,255,0.1)] group-hover:border-purple-500/80 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all bg-[#020617]">
                <step.icon className="w-8 h-8 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                
                {/* Success Checkmark Animation */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.5, type: "spring" }}
                  className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-[#020617]"
                >
                  <CheckCircle className="w-3 h-3 text-[#020617]" />
                </motion.div>
              </div>

              {/* Text */}
              <h3 className="font-bold text-lg text-white mb-1">{step.name}</h3>
              <p className="text-xs text-slate-400 text-center max-w-[100px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
