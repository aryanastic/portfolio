 import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';

const contactMethods = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
    color: '#61DBFB',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    link: 'https://linkedin.com/in/yourprofile',
    color: '#0A66C2',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/yourusername',
    link: 'https://github.com/yourusername',
    color: '#F0DB4F',
  },
  
  
  
];

const tileVariants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  hover: {
    scale: 1.15,
    rotateX: 15,
    rotateY: 15,
    boxShadow: '0 15px 30px rgba(0,255,255,0.6)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-24 px-8"
    >
      <h2 className="text-5xl font-orbitron font-bold text-cyan-400 mb-2 relative inline-block">
        Get In Touch
      </h2>
      <p className="text-cyan-300 text-sm mb-16 font-light tracking-widest uppercase">
        Let's build something amazing together
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer p-6 shadow-lg"
            style={{ perspective: 600 }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={tileVariants}
          >
            {method.link ? (
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-center"
              >
                <motion.div
                  className="text-5xl"
                  style={{ color: method.color }}
                >
                  {method.icon}
                </motion.div>
                <motion.h3 className="text-xl font-semibold text-cyan-400">
                  {method.label}
                </motion.h3>
                <motion.p className="text-sm text-gray-300 break-all">
                  {method.value}
                </motion.p>
              </a>
            ) : (
              <div className="flex flex-col items-center space-y-2 text-center">
                <motion.div
                  className="text-5xl"
                  style={{ color: method.color }}
                >
                  {method.icon}
                </motion.div>
                <motion.h3 className="text-xl font-semibold text-cyan-400">
                  {method.label}
                </motion.h3>
                <motion.p className="text-sm text-gray-300">
                  {method.value}
                </motion.p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
