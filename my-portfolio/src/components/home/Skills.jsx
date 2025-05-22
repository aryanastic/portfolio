 import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

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
    description: 'Responsive design with Bootstrap\'s powerful grid and components.',
  },
  {
    icon: <AiOutlineRobot />,
    name: 'AI',
    color: '#FF6F61',
    description: 'Integrating AI tools and models to enhance app intelligence.',
  },
];

const tileVariants = {
  rest: { 
    scale: 1, 
    rotateX: 0, 
    rotateY: 0, 
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    z: 1
  },
  hover: {
    scale: 1.15,
    rotateX: 15,
    rotateY: 15,
    boxShadow: '0 15px 30px rgba(0,255,255,0.6)',
    z: 10,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  tap: {
    scale: 1.1,
    rotateX: 10,
    rotateY: 10,
    boxShadow: '0 10px 25px rgba(0,255,255,0.4)',
    z: 10,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  }
};

const descriptionVariants = {
  rest: { opacity: 0, y: 20, scale: 0.8 },
  hover: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.3, delay: 0.15 } 
  },
  tap: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2 } 
  }
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: [0, -10, 10, 0],
    transition: { 
      scale: { duration: 0.2 },
      rotate: { duration: 0.6, repeat: Infinity, repeatType: 'reverse' }
    }
  },
  tap: { 
    scale: 1.2, 
    rotate: 360,
    transition: { 
      scale: { duration: 0.1 },
      rotate: { duration: 0.5 }
    }
  }
};

// Section entrance animations
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    }
  }
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

const gridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-24 px-8"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="text-center mb-16"
        variants={headerVariants}
      >
        <motion.h2 
          className="text-5xl font-bold text-cyan-400 mb-2 relative inline-block"
          whileInView={{
            textShadow: [
              "0 0 0px #00ffff",
              "0 0 10px #00ffff",
              "0 0 20px #00ffff",
              "0 0 10px #00ffff",
              "0 0 0px #00ffff"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          Tech Arsenal
        </motion.h2>
        <motion.p 
          className="text-cyan-300 text-sm font-light tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Tools I wield to build magic
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full"
        variants={gridVariants}
      >
        {skills.map(({ icon, name, color, description }, i) => (
          <motion.div
            key={i}
            className="relative rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer p-6 flex flex-col items-center justify-center shadow-lg outline-none overflow-visible"
            style={{ perspective: 600 }}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate={activeCard === i ? "tap" : "rest"}
            variants={{
              ...tileVariants,
              ...cardVariants
            }}
            onTouchStart={() => setActiveCard(i)}
            onTouchEnd={() => setTimeout(() => setActiveCard(null), 1000)}
            onClick={() => {
              setActiveCard(i);
              setTimeout(() => setActiveCard(null), 1500);
            }}
          >
            <motion.div
              style={{ color }}
              className="text-6xl mb-3 pointer-events-none"
              aria-label={name}
              variants={iconVariants}
            >
              {icon}
            </motion.div>
            <motion.h3 className="text-xl font-semibold mb-1 pointer-events-none" style={{ color }}>
              {name}
            </motion.h3>
            
            <AnimatePresence>
              <motion.p
                className="text-center text-sm text-white bg-black bg-opacity-90 p-2 rounded-md absolute bottom-4 left-4 right-4 pointer-events-none backdrop-blur-sm border border-cyan-400/20"
                variants={descriptionVariants}
                aria-hidden="true"
                style={{
                  boxShadow: `0 0 10px ${color}20`
                }}
              >
                {description}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile instructions */}
      <motion.div 
        className="mt-12 text-center md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <p className="text-cyan-300/60 text-sm">
          Tap cards to see details
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Skills;