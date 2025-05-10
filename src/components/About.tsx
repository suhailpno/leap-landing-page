
import { useEffect, useRef } from "react";

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const { top } = contentRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight * 0.8;
      
      if (top < scrollPosition) {
        contentRef.current.classList.add('animate-fade-in');
        contentRef.current.classList.remove('opacity-0');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.12),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={contentRef}>
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 opacity-0 transition-all duration-700">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl opacity-70"></div>
                <img 
                  src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
                  alt="LEAP Logo" 
                  className="relative h-24 w-24 hover-3d"
                />
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Learning and Educational Academy of Porto Novo (LEAP), we believe in nurturing young minds through quality education and personalized attention. 
              Our mission is to provide a supportive and stimulating learning environment where students can realize their full potential. 
              We focus not only on academic excellence but also on developing essential life skills that prepare our students for future challenges.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since our establishment, we have been committed to making quality education accessible to students in Porto Novo and surrounding areas.
              Our dedicated team of educators brings passion and expertise to create an engaging learning experience for all our students.
            </p>
            <div className="mt-8 text-center">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-xl italic">"Empowering through Education & Ethics"</p>
              <div className="w-48 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
