
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Animation on scroll effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
          element.classList.add('opacity-100');
        }
      });
    };

    // Apply initial animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('scroll-animate', 'opacity-0', 'transition-all', 'duration-700');
    });
    
    // Run once on load
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen perspective-1000">
      <div className="transform-style-3d">
        <Navigation />
        <main className="flex-grow">
          <Hero />
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
