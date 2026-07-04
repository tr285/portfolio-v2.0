"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import { 
  SiGit, SiGithub, SiDocker, SiKubernetes, SiLinux, SiMysql, 
  SiPrometheus, SiGrafana, SiPostman, 
  SiTerraform, SiPython, SiJenkins 
} from "react-icons/si";
import { FaInfinity, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  { name: "Git", icon: SiGit, color: "#F05032", orbit: 3, speed: 0.8, size: 0.35 },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", orbit: 4, speed: 0.7, size: 0.35 },
  { name: "Docker", icon: SiDocker, color: "#2496ED", orbit: 5, speed: 0.6, size: 0.35 },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", orbit: 6, speed: 0.5, size: 0.35 },
  { name: "Linux", icon: SiLinux, color: "#FCC624", orbit: 7, speed: 0.45, size: 0.35 },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", orbit: 8, speed: 0.4, size: 0.35 },
  { name: "VS Code", icon: VscVscode, color: "#007ACC", orbit: 9, speed: 0.35, size: 0.35 },
  { name: "CI/CD", icon: FaInfinity, color: "#ffffff", orbit: 10, speed: 0.3, size: 0.35 },
  { name: "Prometheus", icon: SiPrometheus, color: "#E6522C", orbit: 11, speed: 0.28, size: 0.35 },
  { name: "Grafana", icon: SiGrafana, color: "#F46800", orbit: 12, speed: 0.25, size: 0.35 },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", orbit: 13, speed: 0.2, size: 0.35 },
  { name: "Terraform", icon: SiTerraform, color: "#7B42BC", orbit: 14, speed: 0.18, size: 0.35 },
  { name: "AWS", icon: FaAws, color: "#FF9900", orbit: 15, speed: 0.15, size: 0.35 },
  { name: "Python", icon: SiPython, color: "#3776AB", orbit: 16, speed: 0.12, size: 0.35 },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939", orbit: 17, speed: 0.1, size: 0.35 },
];

function Planet({ data, index }: { data: typeof skillsData[0], index: number }) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const Icon = data.icon;
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * data.speed + index * 10;
      ref.current.position.x = Math.cos(t) * data.orbit;
      ref.current.position.z = Math.sin(t) * data.orbit;
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.01;
    }
  });

  return (
    <group ref={ref}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <dodecahedronGeometry args={[data.size, 0]} />
        <meshStandardMaterial 
          color={data.color} 
          emissive={data.color} 
          emissiveIntensity={hovered ? 0.8 : 0.2} 
          wireframe={!hovered}
        />
        
        {/* The Icon */}
        <Html center distanceFactor={15} zIndexRange={[100, 0]}>
          <div className={`transition-transform duration-300 ${hovered ? 'scale-125' : 'scale-100'}`}>
             <Icon size={30} color={data.color} style={{ filter: `drop-shadow(0 0 8px ${data.color})` }} />
          </div>
        </Html>
      </mesh>
      
      {/* Interaction info */}
      {hovered && (
        <Html distanceFactor={15} zIndexRange={[100, 0]}>
          <div className="glass-panel p-2 rounded-lg border border-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.3)] w-max pointer-events-none transform -translate-x-1/2 -translate-y-[150%]">
            <h4 className="font-bold text-cyan-400">{data.name}</h4>
          </div>
        </Html>
      )}
    </group>
  );
}

function OrbitRings() {
  return (
    <>
      {skillsData.map((data, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[data.orbit - 0.02, data.orbit + 0.02, 64]} />
          <meshBasicMaterial color={data.color} transparent opacity={0.15} />
        </mesh>
      ))}
    </>
  );
}

function CentralObject() {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh 
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#0ff" emissive="#0ff" emissiveIntensity={0.2} wireframe />
      
      <Html center>
        <div className={`pointer-events-none transition-all duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}>
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.5)] bg-slate-900 flex items-center justify-center relative">
            <Image 
              src="/hero-image.png" 
              alt="Profile" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Html>
    </mesh>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative min-h-[120vh] w-full flex flex-col items-center justify-center pt-20">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tech <span className="neon-text-cyan text-cyan-400">Ecosystem</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto bg-[#020617]/50 backdrop-blur-sm p-2 rounded-xl border border-white/5">
          A constellation of my technical expertise. Hover to explore the interconnected skills.
        </p>
      </div>

      <div className="w-full h-[800px] cursor-move">
        <Canvas camera={{ position: [0, 8, 20], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#0ff" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <CentralObject />
          <OrbitRings />
          {skillsData.map((data, index) => (
            <Planet key={data.name} data={data} index={index} />
          ))}

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </section>
  );
}
