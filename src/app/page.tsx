import { Navbar } from "@/components/layout/Navbar";
import { Background3D } from "@/components/3d/Background";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { DataEngineering } from "@/components/sections/DataEngineering";
import { DevOps } from "@/components/sections/DevOps";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DataEngineering />
      <DevOps />
      <Achievements />
      <Contact />
      {/* Other sections will be added here */}
      <div className="h-screen" /> {/* Spacer for testing scrolling */}
    </main>
  );
}
