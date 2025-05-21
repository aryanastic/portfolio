 import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 border-t border-cyan-900 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-cyan-400 font-semibold text-xl mb-4">About This Portfolio</h2>
          <p className="text-sm text-gray-400">
            Designed and developed by <span className="text-cyan-400 font-semibold">Aryan Sharma</span>, this portfolio showcases my projects, skills, and journey as a developer. Built using React and styled with Tailwind CSS, it reflects my passion for clean UI and creative interactions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-cyan-400 font-semibold text-xl mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {['home', 'projects', 'about', 'testimonials', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  className="hover:text-cyan-300 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-cyan-400 font-semibold text-xl mb-4">Connect</h2>
          <p className="text-sm text-gray-400 mb-2">
            Have a project or idea? Let’s connect!
          </p>
          <p className="text-sm text-gray-400">Email: <span className="text-cyan-300">aryan917.work@gmail.com</span></p>
          <p className="text-sm text-gray-400">LinkedIn: <a href=" https://www.linkedin.com/in/aryanastic" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">/aryansharma</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Aryan Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
