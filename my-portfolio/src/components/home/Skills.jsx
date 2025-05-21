 import React from 'react';
import { motion } from 'framer-motion';

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { AiOutlineRobot } from 'react-icons/ai';

const skills = [
  {
    icon: <FaReact />,
    name: 'React',
    color: '#61DBFB',
    description: 'Building dynamic and performant UI with React and hooks.',
  },
  {
    icon: <FaHtml5 />,
    name: 'HTML5',
    color: '#E44D26',
    description: 'Semantic markup for accessible and SEO-friendly pages.',
  },
  {
    icon: <FaCss3Alt />,
    name: 'CSS3',
    color: '#264DE4',
    description: 'Responsive designs with modern CSS and animations.',
  },
  {
    icon: <FaJs />,
    name: 'JavaScript',
    color: '#F0DB4F',
    description: 'Clean, modular JS code with ES6+ features and async flows.',
  },
  {
    icon: <FaNodeJs />,
    name: 'Node.js',
    color: '#68A063',
    description: 'Server-side programming and REST API development.',
  },
  {
    icon: <SiTailwindcss />,
    name: 'Tailwind CSS',
    color: '#38BDF8',
    description: 'Rapid styling with utility-first CSS framework.',
  },
  {
    icon: <SiMongodb />,
    name: 'MongoDB',
    color: '#4DB33D',
    description: 'Designing NoSQL schemas and managing databases.',
  },
  {
    icon: <SiExpress />,
    name: 'Express.js',
    color: '#000000',
    description: 'Building fast, scalable backend servers with Express.',
  },
  {
    icon: <FaGitAlt />,
    name: 'Git',
    color: '#F1502F',
    description: 'Version control and collaborative workflows.',
  },
  {
    icon: <FaDatabase />,
    name: 'SQL',
    color: '#4479A1',
    description: 'Database design and complex query writing.',
  },
  {
    icon: <FaBootstrap />,
    name: 'Bootstrap',
    color: '#7952B3',
    description: 'Responsive design with Bootstrap’s powerful grid and components.',
  },
  {
    icon: <AiOutlineRobot />,
    name: 'AI',
    color: '#FF6F61',
    description: 'Integrating AI tools and models to enhance app intelligence.',
  },
];

const tileVariants = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' },
  hover: {
    scale: 1.15,
    rotateX: 15,
    rotateY: 15,
    boxShadow: '0 15px 30px rgba(0,255,255,0.6)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const descriptionVariants = {
  rest: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.15 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-24 px-8"
    >
      <h2 className="text-5xl font-orbitron font-bold text-cyan-400 mb-2 relative inline-block">
        Tech Arsenal
      </h2>
      <p className="text-cyan-300 text-sm mb-16 font-light tracking-widest uppercase">
        Tools I wield to build magic
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full">
        {skills.map(({ icon, name, color, description }, i) => (
          <motion.div
            key={i}
            className="relative rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer p-6 flex flex-col items-center justify-center shadow-lg outline-none"
            style={{ perspective: 600 }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={tileVariants}
          >
            <motion.div
              style={{ color }}
              className="text-6xl mb-3 pointer-events-none"
              aria-label={name}
            >
              {icon}
            </motion.div>
            <motion.h3 className="text-xl font-semibold mb-1 pointer-events-none" style={{ color }}>
              {name}
            </motion.h3>
            <motion.p
              className="text-center text-sm text-white bg-black bg-opacity-80 p-2 rounded-md absolute bottom-4 left-4 right-4 pointer-events-none"
              variants={descriptionVariants}
              aria-hidden="true"
            >
              {description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
