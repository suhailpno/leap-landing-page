
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Update scrollY position for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Animation on scroll effect with improved readability
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      const windowHeight = window.innerHeight;
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const triggerPoint = windowHeight * 0.85;
        
        if (elementPosition < triggerPoint) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
          element.classList.add('opacity-100');
        }
      });
    };

    // Apply initial animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add(
        'scroll-animate', 
        'opacity-0', 
        'transition-all', 
        'duration-700'
      );
    });
    
    // Run animations on initial load after a slight delay for better user experience
    setTimeout(animateOnScroll, 100);
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  // Apply smooth parallax effect based on scroll position
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div className="flex flex-col min-h-screen perspective-1000 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Background blur effects with improved readability */}
      <div className="fixed top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 mix-blend-overlay blur-[100px] animate-pulse"></div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-500/20 mix-blend-overlay blur-[100px] animate-pulse" 
          style={{animationDelay: "2s"}}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-600/20 mix-blend-overlay blur-[100px] animate-pulse" 
          style={{animationDelay: "4s"}}
        ></div>
      </div>
      
      {/* Main content container with proper z-index */}
      <div className="relative z-10">
        <Navigation />
        <main className="flex-grow">
          {/* Hero section with parallax effect */}
          <div style={parallaxStyle}>
            <Hero />
          </div>
          <About />
          <Activities />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
