"use client";

import { motion } from "framer-motion";
import { FileText, Database, Server, Cloud, BarChart } from "lucide-react";

const pipelineSteps = [
  { id: "csv", label: "CSV Files", icon: FileText, color: "#10b981" },
  { id: "python", label: "Python", icon: FileText, color: "#3b82f6" },
  { id: "sql", label: "SQL", icon: Database, color: "#8b5cf6" },
  { id: "spark", label: "Apache Spark", icon: Server, color: "#f97316" },
  { id: "airflow", label: "Airflow", icon: Server, color: "#ec4899" },
  { id: "aws", label: "AWS", icon: Cloud, color: "#eab308" },
  { id: "mongodb", label: "MongoDB", icon: Database, color: "#22c55e" },
  { id: "powerbi", label: "Power BI", icon: BarChart, color: "#eab308" },
];

export function DataEngineering() {
  return (
    <section id="data-engineering" className="py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interactive <span className="neon-text-cyan text-cyan-400">ETL Pipeline</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Transforming raw, unstructured data into actionable business intelligence through scalable cloud architectures.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8 z-10">
        {pipelineSteps.map((step, idx) => (
          <div key={step.id} className="relative flex items-center group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl glass-panel border border-white/10 z-10"
              style={{ boxShadow: `0 0 15px ${step.color}20` }}
            >
              <step.icon className="w-8 h-8 md:w-10 md:h-10 mb-2" style={{ color: step.color }} />
              <span className="text-xs md:text-sm font-semibold text-center leading-tight">{step.label}</span>
            </motion.div>

            {/* Connecting lines for desktop (hidden on small screens) */}
            {idx < pipelineSteps.length - 1 && (
              <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: idx * 0.15 }}
                  className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#0ff]"
                />
              </div>
            )}
            
            {/* Connecting lines for mobile (hidden on large screens) */}
            {idx < pipelineSteps.length - 1 && (
              <div className="lg:hidden w-4 h-0.5 bg-cyan-500/20" />
            )}
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 glass-panel p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto z-10"
      >
        <h3 className="text-xl font-bold mb-4 text-cyan-400">Pipeline Details</h3>
        <ul className="space-y-3 text-slate-300 text-sm md:text-base">
          <li className="flex items-start gap-3">
            <span className="text-purple-400">▹</span>
            <p><strong>Ingestion:</strong> Reading millions of rows from CSVs and streaming APIs using Python.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400">▹</span>
            <p><strong>Processing:</strong> Utilizing Apache Spark for distributed data cleaning and transformation.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400">▹</span>
            <p><strong>Orchestration:</strong> Airflow DAGs schedule and monitor the entire pipeline lifecycle.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400">▹</span>
            <p><strong>Storage & Analytics:</strong> Loading normalized data into AWS RDS & MongoDB, feeding real-time Power BI dashboards.</p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
