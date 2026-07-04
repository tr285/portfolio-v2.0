"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database, BarChart3, Cloud, Settings, BrainCircuit } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  { title: "Built Web Applications", icon: Code2, desc: "Mastered frontend and full-stack development." },
  { title: "Learned Databases", icon: Database, desc: "Architected relational and NoSQL models." },
  { title: "Data Analytics", icon: BarChart3, desc: "Turned raw data into actionable business insights." },
  { title: "Cloud Computing", icon: Cloud, desc: "Scaled systems securely on AWS and Azure." },
  { title: "DevOps", icon: Settings, desc: "Automated CI/CD and containerized with Docker/K8s." },
  { title: "Data Engineering & AI", icon: BrainCircuit, desc: "Orchestrated ETL pipelines and intelligent models." },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw SVG line on scroll
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: "1000", strokeDashoffset: "1000" },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Animate items
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The <span className="neon-text-purple text-purple-400">Journey</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">From writing my first line of code to designing intelligent cloud architectures, every step has been about building better, faster, and smarter systems.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* SVG Path connecting timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 hidden md:block">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 4 1000">
            <path
              ref={pathRef}
              d="M 2 0 L 2 1000"
              stroke="#0ff"
              strokeWidth="4"
              strokeDasharray="4 8"
              fill="none"
              className="opacity-50"
            />
          </svg>
        </div>

        <div className="space-y-24 relative">
          <div className="text-center md:hidden pb-10">
            <h3 className="text-xl font-bold text-cyan-400">Started Learning Programming</h3>
            <div className="h-16 w-0.5 bg-cyan-500/30 mx-auto mt-4"></div>
          </div>
          
          <div className="hidden md:flex justify-center mb-16 relative z-10 timeline-item">
            <div className="glass-panel px-6 py-3 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              <span className="font-bold text-cyan-400">Started Learning Programming</span>
            </div>
          </div>

          {timelineSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`timeline-item flex flex-col md:flex-row items-center justify-between w-full relative z-10 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12" />
                
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-panel border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.3)] bg-[#020617] hidden md:flex">
                  <step.icon className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="w-full md:w-5/12 mt-8 md:mt-0 glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors group">
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 rounded-full glass-panel border border-cyan-500/50 flex items-center justify-center bg-[#020617]">
                      <step.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
