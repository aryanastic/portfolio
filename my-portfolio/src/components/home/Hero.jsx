 import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const icons = [
  { icon: <FaReact />, color: '#61DBFB' },
  { icon: <FaHtml5 />, color: '#E44D26' },
  { icon: <FaCss3Alt />, color: '#264DE4' },
  { icon: <FaJs />, color: '#F0DB4F' },
  { icon: <FaNodeJs />, color: '#68A063' },
  { icon: <FaGithub />, color: '#fff' },
  { icon: <SiTailwindcss />, color: '#38bdf8' },
  { icon: <SiMongodb />, color: '#4DB33D' },
  { icon: <SiExpress />, color: '#ffffff' },
];

const OrbitingIcons = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map(({ icon, color }, i) => {
        const angle = (2 * Math.PI * i) / icons.length;
        const radius = 3;

        return (
          <Html
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            center
            className="select-none"
          >
            <div
              style={{
                color,
                fontSize: '2rem',
                filter: `drop-shadow(0 0 4px ${color})`,
                transition: 'transform 0.2s',
                pointerEvents: 'none',
              }}
              className="hover:scale-125"
            >
              {icon}
            </div>
          </Html>
        );
      })}
    </group>
  );
};

const GlowingSphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between p-10 gap-10">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-6xl md:text-7xl font-extrabold font-orbitron leading-tight tracking-tight">
          Hi, I'm <br />
          <span className="text-cyan-400">Aryan Sharma</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
          Full Stack Developer. <br />
          Merging <span className="text-cyan-400 font-semibold">creativity</span> and code to tell your <span className="text-cyan-400 font-semibold">story</span> online.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="assets/Aryan.Resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-md transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black rounded-md transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-[400px] relative">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
          <GlowingSphere />
          <OrbitingIcons />
        </Canvas>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
        <a href="#projects" className="text-cyan-400 text-sm flex flex-col items-center animate-bounce">
          Scroll down to see my work
          <span className="text-2xl mt-1">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;