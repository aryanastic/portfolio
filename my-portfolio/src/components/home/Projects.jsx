 import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Sample project data - replace with your own
const projectsData = [
  {
    id: 1,
    title: 'HealthAdvisor.AI',
    description: 'HealthAdvisor.AI is a responsive web application built with the MERN stack (MongoDB, Express.js, React, Node.js) designed to provide personalized health advice based on user symptoms. It features secure user authentication for a personalized experience and integrates Gemini AI to deliver intelligent, real-time health recommendations. The app is fully responsive, ensuring smooth usability across all devices.',
    image: '/public/images/Untitled design.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Tinder clone',
    description: "🐶 Throwback to Tindog – the dog version of Tinder I built using Bootstrap! Back when I was just playing around with CSS frameworks, I ended up creating this lighthearted project where pups could swipe right for love. 💘🐾 It started as a simple Bootstrap experiment and turned into a paws-itively fun UI project that still makes me smile. Not every project needs to be groundbreaking — some are just meant to flex creativity and have fun!",
    image: '/public/images/Tinder.png',
    tags: ['Bootstrap', 'HTML', 'CSS'],
    liveUrl: 'https://aryanastic.github.io/Tin-Dog/',
    githubUrl: 'https://github.com/aryanastic',
  },
  {
    id: 3,
    title: 'Weather Info',
    description: 'Spent the day playing around with weather APIs, and it was a super fun challenge. From handling API responses to updating the UI dynamically — I learned a lot in a short time. The app shows real-time weather info for any city you search. It fetches live data like temperature, humidity, and wind speed using API integration — all wrapped in a clean and minimal design.',
    image: '/public/images/Weather.png',
    tags: ['Jquery', 'Tailwind', 'APIs'],
    liveUrl: 'https://aryanastic.github.io/weather/',
    githubUrl: 'https://github.com/aryanastic',
  },
];

// Component for each project with fade-in animation
const ProjectItem = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When project comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  // Alternate layout: even-indexed projects have image on right
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={projectRef}
      className={`flex flex-col lg:flex-row gap-12 py-20 border-b border-gray-800 last:border-0 opacity-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      {/* Project content with conditional ordering */}
      <div className={`flex flex-col lg:flex-row gap-12 items-center w-full ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Project Image */}
        <div className="w-full lg:w-1/2 relative aspect-video">
          <div className="absolute inset-2 bg-cyan-900/30 rounded-lg transform -translate-x-2 -translate-y-2"></div>
          <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-cyan-500/20">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3 border-l-4 border-cyan-400 pl-4 font-orbitron tracking-tight">{project.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-cyan-400 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-900 text-cyan-300 rounded-md border border-cyan-500/30 hover:border-cyan-400 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-md transition duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-md transition duration-300"
            >
              <Github size={18} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="bg-black text-white py-24" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-6xl font-bold text-white mb-2 font-orbitron tracking-tight">My <span className="text-cyan-400">Projects</span></h2>
          <div className="w-24 h-1 bg-cyan-400"></div>
          <p className="text-xl text-gray-300 italic mt-4">
            Merging <span className="text-cyan-400 font-semibold">creativity</span> and code to create memorable experiences.
          </p>
        </div>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}