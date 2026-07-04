import { Navbar } from "@/components/layout/Navbar";
import { Background3D } from "@/components/3d/Background";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

import { DataEngineering } from "@/components/sections/DataEngineering";
import { DevOps } from "@/components/sections/DevOps";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import GitHubStats from "@/components/sections/GitHubStats";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/layout/CommandPalette";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background3D />
      <Navbar />
      <CommandPalette />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubStats />
      <DataEngineering />
      <DevOps />

      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
