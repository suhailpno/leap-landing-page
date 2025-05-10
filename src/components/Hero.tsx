
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 10;
      const yPos = (clientY / window.innerHeight - 0.5) * 10;
      
      imageRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotate(${xPos * 0.5}deg)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 mix-blend-overlay blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-500/10 mix-blend-overlay blur-[80px] animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                Learning and Educational Academy of Porto Novo
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-pulse">
                Empowering through Education & Ethics
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://wa.me/917339636022" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 py-6 h-auto rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 group-hover:scale-105">
                    <Phone size={18} className="mr-2" />
                    Join Us on WhatsApp
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 hover:text-white px-6 py-6 h-auto rounded-full backdrop-blur-sm">
                    Discover More
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative z-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <img 
                ref={imageRef}
                src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
                alt="LEAP Academy Logo" 
                className="relative z-10 max-w-full h-auto rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
