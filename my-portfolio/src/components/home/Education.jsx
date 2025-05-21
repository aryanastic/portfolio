 import React, { useState, useEffect, useRef } from 'react';

// Sample education data - replace with your own
const educationData = [
  {
    id: 1,
    degree: "Masters's of Computer Application",
    major: 'Computer Science and Engineering',
    institution: 'Central University GGV',
    location: 'Bilaspur, Chhattisgarh',
    duration: '2023 - 2025',
    gpa: '7.9/10.0',
    description: 'Focused on software development with a specialization in web technologies. Active member of the university coding club and participated in multiple hackathons.',
    courses: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Machine Learning'],
    achievements: [
      'Create multiple major projects',
      'participated in all the technical events (2023)',
      'Showcased leadership and teamwork in multiple group projects'
    ],
    logoSrc: '/public/images/GGV-logo.png' // Replace with your actual logo path
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Application',
    major: 'Data structures and OOPs',
    institution: 'Bilaspur University',
    location: 'Bilaspur, Chhattisgarh',
    duration: '2020 - 2023',
    gpa: '7.8',
    description: ' Built a strong foundaton for my journey in the field of computer science fueling my intence curiosity in topics like computer networks and software Engineering',
    courses: ['Software Engineering', 'operating Systems', 'Descrete Mathematics', 'RDBMS'],
    achievements: [
      'Participated in desciplinary activities like NCC',
      'Gaining a NCC B certificate',
      'Developed a Parking management system as final project'
    ],
    logoSrc: '/public/images/Newlogofooter.jpg' // Replace with your actual logo path
  }
];

const TimelinePoint = ({ active }) => {
  return (
    <div className="absolute left-0 -translate-x-1/2 flex flex-col items-center">
      <div className={`w-5 h-5 rounded-full border-2 ${active ? 'bg-cyan-400 border-cyan-400' : 'bg-transparent border-cyan-400'}`}></div>
      <div className="w-px h-full bg-gray-700"></div>
    </div>
  );
};

const EducationItem = ({ education, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  // Handle logo image loading errors
  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <div 
      ref={educationRef} 
      className={`relative pl-12 pb-12 ${!isLast ? 'mb-8' : ''} transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <TimelinePoint active={isVisible} />
      
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 shadow-lg hover:shadow-cyan-900/10 transition duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div className="flex items-center gap-4">
            {/* Logo: Use image if available and valid, fallback to text-based logo */}
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-cyan-500/40 overflow-hidden">
              {education.logoSrc && !logoError ? (
                <img 
                  src={education.logoSrc} 
                  alt={`${education.institution} logo`}
                  className="w-full h-full object-contain"
                  onError={handleLogoError}
                />
              ) : (
                <div className="text-cyan-400 font-bold text-sm">
                  {education.institution.split(' ').map(word => word[0]).join('')}
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 font-orbitron tracking-tight">{education.degree}</h3>
          </div>
          <div className="mt-2 md:mt-0 px-4 py-1 bg-black text-cyan-400 rounded-full border border-cyan-400/30 text-sm font-medium">
            {education.duration}
          </div>
        </div>
        
        <h4 className="text-white text-xl mb-2">{education.major}</h4>
        
        <div className="flex items-center mb-6">
          <span className="text-gray-300">{education.institution}</span>
          <span className="mx-2 text-gray-600">•</span>
          <span className="text-gray-400">{education.location}</span>
          {education.gpa && (
            <>
              <span className="mx-2 text-gray-600">•</span>
              <span className="text-cyan-300">GPA: {education.gpa}</span>
            </>
          )}
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{education.description}</p>
        
        <div className="mb-6">
          <h5 className="text-lg font-medium text-cyan-400 mb-3">Key Courses</h5>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((course, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800 text-cyan-300 text-sm rounded-md border border-cyan-500/20">
                {course}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-lg font-medium text-cyan-400 mb-3">Achievements</h5>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {education.achievements.map((achievement, i) => (
              <li key={i} className="pl-2">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <section className="bg-black text-white py-24" id="education">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-6xl font-bold text-white mb-2 font-orbitron tracking-tight">My <span className="text-cyan-400">Education</span></h2>
          <div className="w-24 h-1 bg-cyan-400"></div>
          <p className="text-xl text-gray-300 italic mt-4">
            Building a <span className="text-cyan-400 font-semibold">foundation</span> of knowledge and skills.
          </p>
        </div>

        <div className="relative ml-6">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-700"></div>
          
          {/* Education items */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <EducationItem 
                key={edu.id} 
                education={edu} 
                index={index}
                isLast={index === educationData.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}