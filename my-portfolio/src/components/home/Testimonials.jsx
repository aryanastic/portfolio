 import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      content: "Working with Aryan was an absolute pleasure. His attention to detail and creative problem-solving definately transforms the enviroment.",
      author: "Mr Sarveshwar Dahre",
      position: "Phd Scholar, National Institude of Technology, Raipur",
      avatar: "/images/jd.jpeg",
      rating: 5
    },
    {
      id: 2,
      content: "Exceptional technical skills paired with an incredible design sense. Delivered our complex application ahead of schedule with features that exceeded our expectations.",
      author: "Mr Altaf Raza",
      position: "Full Stack developer, freelancer",
      avatar: "/images/altaf.jpeg",
      rating: 5
    },
    {
      id: 3,
      content: " Doing projects with Aryan has always been a delight, he's design language has always been exceptional.",
      author: "Mr Adarsh Jha",
      position: "AI | ML, People Strong- Gurugram",
      avatar: "/images/Adarsh.jpeg",
      rating: 5
    }, 
     {
      id: 4,
      content: " While pursuing MCA along with Aryan it was great to see he's dedication and leadership qualities during group projects ",
      author: "Vinita Soni",
      position: "MERN stack developer, App developer",
      avatar: "/images/Vinita.jpeg",
      rating: 5
    },
     {
      id: 5,
      content: " Aryan's creativity is always a plus point, he's descipline and dedication speak for themselves ",
      author: " Mr. Deepesh Verma",
      position: "Java full stack devloper",
      avatar: "/images/Deepesh.jpeg",
      rating: 5
    },
    {
      id: 6,
      content: " Having Aryan in the team has always been huge advantage. ",
      author: " Mr. Saurabh Jha",
      position: "Data Science | TCS",
      avatar: "/images/WhatsApp Image 2025-05-23 at 1.02.02 PM.jpeg",
      rating: 5
    }
    
  ];

  // Intersection observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-cyan-400' : 'text-gray-600'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Dots for manual navigation
  const renderDots = () => {
    return testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300 mx-1 
          ${activeIndex === index ? 'bg-cyan-400 w-6' : 'bg-gray-600 hover:bg-gray-400'}`}
        aria-label={`View testimonial ${index + 1}`}
      />
    ));
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white p-10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cyan-400/5 blur-3xl"></div>
      </div>
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold font-orbitron tracking-tight mb-6">
            Client <span className="text-cyan-400">Testimonials</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed max-w-2xl mx-auto">
            What people say about my <span className="text-cyan-400 font-semibold">work</span> and <span className="text-cyan-400 font-semibold">collaboration</span>.
          </p>
        </div>
        
        <div className="relative mt-16">
          {/* Main testimonial card */}
          <div 
            className="relative bg-black/40 border border-cyan-400/20 backdrop-blur-lg p-10 rounded-md shadow-lg shadow-cyan-400/5 mb-16"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.05))' }}
          >
            <div className="absolute -top-3 -left-3 text-cyan-400 opacity-50">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1 27.7h-7.8c-.6 0-1.2-.5-1.2-1.2V18c0-7.1 5.7-12.8 12.8-12.8.7 0 1.2.5 1.2 1.2v7.9c0 .7-.5 1.2-1.2 1.2h-2.6c-1.3 0-2.4 1.1-2.4 2.4v8.7c0 .6-.5 1.1-1.2 1.1zM33.1 27.7h-7.8c-.6 0-1.2-.5-1.2-1.2V18c0-7.1 5.7-12.8 12.8-12.8.7 0 1.2.5 1.2 1.2v7.9c0 .7-.5 1.2-1.2 1.2h-2.6c-1.3 0-2.4 1.1-2.4 2.4v8.7c0 .6-.5 1.1-1.2 1.1z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="min-h-32 text-gray-300 text-xl md:text-2xl italic leading-relaxed font-light">
                "{testimonials[activeIndex].content}"
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-md overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-cyan-400 rounded-full p-1">
                    <div className="bg-black rounded-full p-0.5">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="ml-6">
                  <h4 className="text-white font-bold font-orbitron text-xl">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-400 text-sm mt-1">{testimonials[activeIndex].position}</p>
                  <div className="flex mt-2">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -right-3 transform rotate-180 text-cyan-400 opacity-50">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1 27.7h-7.8c-.6 0-1.2-.5-1.2-1.2V18c0-7.1 5.7-12.8 12.8-12.8.7 0 1.2.5 1.2 1.2v7.9c0 .7-.5 1.2-1.2 1.2h-2.6c-1.3 0-2.4 1.1-2.4 2.4v8.7c0 .6-.5 1.1-1.2 1.1zM33.1 27.7h-7.8c-.6 0-1.2-.5-1.2-1.2V18c0-7.1 5.7-12.8 12.8-12.8.7 0 1.2.5 1.2 1.2v7.9c0 .7-.5 1.2-1.2 1.2h-2.6c-1.3 0-2.4 1.1-2.4 2.4v8.7c0 .6-.5 1.1-1.2 1.1z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6">
            {renderDots()}
          </div>
        </div>
        
        {/* Creative particle animation at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <div className="relative w-full h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bottom-0 rounded-full bg-cyan-400"
                style={{
                  left: `${10 + i * 12}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  opacity: 0.6,
                  animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          <style jsx global>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); opacity: 0.2; }
              50% { transform: translateY(-20px); opacity: 0.8; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;