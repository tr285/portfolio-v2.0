"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Database, Server, Cloud, BarChart, ChevronRight, X
} from "lucide-react";

const pipelineSteps = [
  {
    id: "csv",
    label: "CSV / APIs",
    icon: FileText,
    color: "#10b981",
    detail: "Ingest millions of rows from flat files, REST APIs, and streaming sources using Python pandas and requests.",
    phase: "Ingestion",
  },
  {
    id: "python",
    label: "Python",
    icon: FileText,
    color: "#3b82f6",
    detail: "Data cleaning, validation, and transformation scripts written in Python with Pydantic for schema enforcement.",
    phase: "Transform",
  },
  {
    id: "sql",
    label: "SQL / dbt",
    icon: Database,
    color: "#8b5cf6",
    detail: "Complex analytical queries and data modeling via dbt (data build tool) for version-controlled SQL transformations.",
    phase: "Model",
  },
  {
    id: "spark",
    label: "Apache Spark",
    icon: Server,
    color: "#f97316",
    detail: "Distributed processing of terabyte-scale datasets using PySpark RDDs and DataFrames across multi-node clusters.",
    phase: "Process",
  },
  {
    id: "airflow",
    label: "Airflow",
    icon: Server,
    color: "#ec4899",
    detail: "DAG-based orchestration scheduling pipeline runs, managing dependencies, retries, and SLA monitoring.",
    phase: "Orchestrate",
  },
  {
    id: "aws",
    label: "AWS S3 / RDS",
    icon: Cloud,
    color: "#eab308",
    detail: "Store processed data in S3 data lakes and Aurora RDS for transactional queries and analytical workloads.",
    phase: "Store",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    icon: Database,
    color: "#22c55e",
    detail: "Document store for semi-structured data, enabling flexible schemas for product catalogs and event logs.",
    phase: "Store",
  },
  {
    id: "powerbi",
    label: "Power BI",
    icon: BarChart,
    color: "#eab308",
    detail: "Real-time interactive dashboards for business stakeholders, enabling self-service analytics and KPI tracking.",
    phase: "Visualize",
  },
];

const highlights = [
  { label: "Daily Records Processed", value: "500K+", color: "#0ff" },
  { label: "Pipeline Uptime", value: "99.9%", color: "#a855f7" },
  { label: "Query Time Reduction", value: "40%", color: "#10b981" },
  { label: "Data Sources Integrated", value: "8+", color: "#f97316" },
];

export function DataEngineering() {
  const [selected, setSelected] = useState<typeof pipelineSteps[0] | null>(null);

  return (
    <section
      id="data-engineering"
      className="py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interactive{" "}
          <span className="neon-text-cyan text-cyan-400">ETL Pipeline</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Transforming raw, unstructured data into actionable business intelligence.
          Click any node to explore the stack.
        </p>
      </div>

      {/* Pipeline Flow */}
      <div className="relative w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {pipelineSteps.map((step, idx) => (
            <div key={step.id} className="relative flex items-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelected(step)}
                className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl glass-panel border border-white/10 z-10 cursor-pointer hover:border-white/30 transition-all"
                style={{
                  boxShadow: `0 0 20px ${step.color}25`,
                  borderColor: selected?.id === step.id ? `${step.color}60` : undefined,
                }}
                aria-label={`Learn about ${step.label}`}
              >
                <step.icon
                  className="w-8 h-8 md:w-10 md:h-10 mb-2"
                  style={{ color: step.color }}
                />
                <span className="text-xs md:text-sm font-semibold text-center leading-tight px-1">
                  {step.label}
                </span>
                <span
                  className="text-[9px] mt-1 px-1.5 py-0.5 rounded-full opacity-60"
                  style={{ color: step.color, backgroundColor: `${step.color}15` }}
                >
                  {step.phase}
                </span>
              </motion.button>

              {/* Connecting arrow */}
              {idx < pipelineSteps.length - 1 && (
                <div className="hidden lg:flex items-center mx-1">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 relative overflow-hidden">
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: idx * 0.15,
                      }}
                      className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  </div>
                  <ChevronRight className="w-3 h-3 text-slate-600 -ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md glass-panel border border-white/10 rounded-2xl p-8"
              style={{ boxShadow: `0 0 60px ${selected.color}20` }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${selected.color}20`, border: `1px solid ${selected.color}40` }}
                >
                  <selected.icon className="w-8 h-8" style={{ color: selected.color }} />
                </div>
                <div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ color: selected.color, backgroundColor: `${selected.color}15` }}
                  >
                    {selected.phase}
                  </span>
                  <h3 className="text-2xl font-bold mt-1">{selected.label}</h3>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{selected.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto z-10 mt-16">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-5 rounded-2xl border border-white/10 text-center"
            style={{ boxShadow: `0 0 15px ${h.color}10` }}
          >
            <div className="text-2xl md:text-3xl font-bold" style={{ color: h.color }}>
              {h.value}
            </div>
            <div className="text-xs text-slate-500 mt-1">{h.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Pipeline Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 glass-panel p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto z-10"
      >
        <h3 className="text-xl font-bold mb-5 text-cyan-400">How the Pipeline Works</h3>
        <ul className="space-y-3 text-slate-300 text-sm md:text-base">
          {[
            { title: "Ingestion", body: "Reading millions of rows from CSVs, REST APIs, and streaming sources using Python." },
            { title: "Processing", body: "Distributed data cleaning and transformation with Apache Spark across multi-node clusters." },
            { title: "Orchestration", body: "Apache Airflow DAGs schedule, monitor, and retry the entire pipeline lifecycle." },
            { title: "Storage & Analytics", body: "Normalized data loaded into AWS RDS & MongoDB, feeding real-time Power BI dashboards." },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="text-purple-400 mt-0.5">▹</span>
              <p>
                <strong className="text-white">{item.title}:</strong> {item.body}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
