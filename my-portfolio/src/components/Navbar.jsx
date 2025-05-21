 import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down -> hide navbar
      } else {
        setShowNavbar(true); // Scroll up -> show navbar
      }
      setLastScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = ['home', 'projects', 'about', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Smooth scroll behavior
  const handleScrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md shadow-cyan-900/20 transition-all duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleScrollTo('home')} className="font-orbitron text-xl font-bold tracking-tight">
              <span className="text-cyan-400">Aryan</span> Sharma
            </button>
          </div>
          
          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="focus:outline-none text-cyan-400 hover:text-cyan-300 transition duration-300"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-10 font-medium text-lg mx-auto">
            <li>
              <button 
                onClick={() => handleScrollTo('home')} 
                className={`hover:text-cyan-400 transition duration-300 py-1 ${
                  activeSection === 'home' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollTo('projects')} 
                className={`hover:text-cyan-400 transition duration-300 py-1 ${
                  activeSection === 'projects' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollTo('about')} 
                className={`hover:text-cyan-400 transition duration-300 py-1 ${
                  activeSection === 'about' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollTo('testimonials')} 
                className={`hover:text-cyan-400 transition duration-300 py-1 ${
                  activeSection === 'testimonials' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                }`}
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className={`hover:text-cyan-400 transition duration-300 py-1 ${
                  activeSection === 'contact' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
          
          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
              className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-md transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col space-y-4 bg-black text-white border-t border-gray-800">
            <button 
              onClick={() => handleScrollTo('home')}
              className={`py-2 text-left hover:text-cyan-400 transition duration-300 ${
                activeSection === 'home' ? 'text-cyan-400' : ''
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleScrollTo('projects')}
              className={`py-2 text-left hover:text-cyan-400 transition duration-300 ${
                activeSection === 'projects' ? 'text-cyan-400' : ''
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleScrollTo('about')}
              className={`py-2 text-left hover:text-cyan-400 transition duration-300 ${
                activeSection === 'about' ? 'text-cyan-400' : ''
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleScrollTo('testimonials')}
              className={`py-2 text-left hover:text-cyan-400 transition duration-300 ${
                activeSection === 'testimonials' ? 'text-cyan-400' : ''
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleScrollTo('contact')}
              className={`py-2 text-left hover:text-cyan-400 transition duration-300 ${
                activeSection === 'contact' ? 'text-cyan-400' : ''
              }`}
            >
              Contact
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
              className="mt-4 px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-md transition duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>
      
      {/* Empty space to prevent content from hiding behind navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;