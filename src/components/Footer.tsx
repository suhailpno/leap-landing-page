
import { useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.classList.add("animate-fade-in");
    }
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 mt-auto relative overflow-hidden"
    >
      {/* 3D Effect Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Name */}
          <div className="flex flex-col items-center text-center hover-scale">
            <img 
              src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
              alt="LEAP Logo" 
              className="h-20 w-20 mb-3 hover:rotate-3 transition-transform"
            />
            <div>
              <h3 className="text-2xl font-bold">LEAP</h3>
              <p className="text-gray-300 text-sm">Learning and Educational Academy of Porto Novo</p>
              <p className="text-gray-400 text-xs mt-1">Empowering through Education & Ethics</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8 w-full max-w-md text-center">
            <a href="#home" className="text-gray-300 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">About</a>
            <a href="#activities" className="text-gray-300 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">Activities</a>
            <a href="#contact" className="text-gray-300 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">Contact</a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4">
            <a href="#" className="bg-gray-700 hover:bg-primary p-3 rounded-full transition-all transform hover:scale-110 hover:rotate-6">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-all transform hover:scale-110 hover:-rotate-6">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-blue-400 p-3 rounded-full transition-all transform hover:scale-110 hover:rotate-6">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all transform hover:scale-110 hover:-rotate-6">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Copyright and Address */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm animate-pulse">
            &copy; {currentYear} LEAP Academy. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-3 max-w-md mx-auto">
            Madina Palli Street, Porto Novo - Parangipettai, Tamil Nadu - 608502 | leappno@gmail.com | +91 733 963 6022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
