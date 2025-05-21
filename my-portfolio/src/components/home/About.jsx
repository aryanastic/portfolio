 import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, url: ' https://www.linkedin.com/in/aryanastic', label: 'LinkedIn' },
  { icon: <FaGithub />, url: ' https://github.com/aryanastic', label: 'GitHub' },
  { icon: <FaEnvelope />, url: 'mailto:aryanssharma85@gmail.com', label: 'Email' },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white px-8 py-24 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16"
      >
        {/* Left Side - Avatar with glowing border */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-72 h-72 rounded-full relative cursor-pointer"
          style={{
            boxShadow:
              '0 0 30px 5px rgba(6, 182, 212, 0.8), inset 0 0 20px 3px rgba(6, 182, 212, 0.6)',
            border: '4px solid rgba(6, 182, 212, 0.9)',
          }}
        >
          <img
            src="/images/Screenshot 2025-05-21 222020.png"
            alt="Aryan Sharma"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-8 max-w-xl">
          <h2 className="text-5xl font-orbitron font-bold text-cyan-400 relative inline-block">
            About Me
            <motion.div
              layoutId="underline"
              className="absolute left-0 -bottom-1 h-1 w-24 bg-cyan-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </h2>

          <p className="text-3xl font-[Great_Vibes] text-gray-300 leading-snug">
            Not just a developer — a <span className="text-cyan-400">storyteller</span> of the digital world.<br />
            Every pixel, every line of code — part of a bigger narrative.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm <strong>Aryan Sharma</strong>, a Full Stack Developer blending logic and imagination to craft smooth, engaging web experiences. From React wizardry to Node.js backend sorcery, I bring beauty and function together to create websites that don't just work — they <em>speak</em>.
          </p>

          {/* Social Icons */}
          <div className="flex gap-8 mt-6">
            {socialLinks.map(({ icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-cyan-400 text-4xl hover:text-white transition-transform transform hover:scale-125 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
