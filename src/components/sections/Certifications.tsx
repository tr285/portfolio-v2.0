"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com/certification/",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    organization: "Google",
    date: "2022",
    link: "https://grow.google/certificates/data-analytics/",
    skills: ["Data Cleaning", "SQL", "Tableau", "R Programming"]
  },
  {
    id: 3,
    title: "Meta Front-End Developer Professional Certificate",
    organization: "Meta",
    date: "2023",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    skills: ["React", "UI/UX", "JavaScript", "HTML/CSS"]
  }
];

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Senior Engineering Manager",
    company: "Tech Solutions",
    content: "Tukaram is an exceptional engineer. His ability to design scalable architectures while keeping the codebase clean is outstanding."
  },
  {
    id: 2,
    name: "John Smith",
    role: "Product Owner",
    company: "Data Innovations Inc.",
    content: "Working with Tukaram was a breeze. He delivered our complex ETL pipelines ahead of schedule and with zero bugs."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Credentials & <span className="neon-text-cyan text-cyan-400">Testimonials</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Industry recognized certifications and words from people I've worked with.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="text-purple-400" /> Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group relative"
              >
                <ShieldCheck className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-purple-500/10 transition-colors" />
                <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2 pr-12">
                  {cert.title}
                </h4>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <span>{cert.organization}</span>
                  <span className="font-mono text-cyan-400">{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map(s => (
                    <span key={s} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-cyan-400 transition-colors">
                  Verify Credential <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-cyan-400">"</span> Testimonials
          </h3>
          <div className="space-y-6">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/10 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-xl">
                  "
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10">
                  {test.content}
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{test.name}</h5>
                    <p className="text-xs text-slate-400">{test.role} at <span className="text-cyan-400">{test.company}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
