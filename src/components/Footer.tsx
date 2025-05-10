
import { useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin, GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (footerRef.current) {
      setTimeout(() => {
        footerRef.current?.classList.add("animate-fade-in");
        footerRef.current?.classList.remove("opacity-0");
      }, 500);
    }
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className="relative pt-20 pb-10 opacity-0 transition-all duration-700"
    >
      {/* 3D Effect Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[200px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo and Name */}
          <div className="flex flex-col items-center text-center hover-3d cursor-pointer">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-full mb-4">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">LEAP</h3>
              <p className="text-gray-400 text-sm mt-1">Learning and Educational Academy of Porto Novo</p>
              <p className="text-gray-500 text-xs mt-1">Empowering through Education & Ethics</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-4 sm:gap-x-16 w-full max-w-xl text-center">
            <a href="#" className="text-gray-400 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">About</a>
            <a href="#activities" className="text-gray-400 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">Activities</a>
            <a href="#contact" className="text-gray-400 hover:text-white hover:underline transform hover:translate-y-[-2px] transition-transform">Contact</a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4">
            <a href="#" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 p-3 rounded-full transition-all transform hover:scale-110 hover:rotate-6 border border-white/10 hover:border-white/20">
              <Facebook size={20} className="text-white/80 hover:text-white" />
            </a>
            <a href="#" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 p-3 rounded-full transition-all transform hover:scale-110 hover:-rotate-6 border border-white/10 hover:border-white/20">
              <Instagram size={20} className="text-white/80 hover:text-white" />
            </a>
            <a href="#" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 p-3 rounded-full transition-all transform hover:scale-110 hover:rotate-6 border border-white/10 hover:border-white/20">
              <Twitter size={20} className="text-white/80 hover:text-white" />
            </a>
            <a href="#" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 p-3 rounded-full transition-all transform hover:scale-110 hover:-rotate-6 border border-white/10 hover:border-white/20">
              <Linkedin size={20} className="text-white/80 hover:text-white" />
            </a>
          </div>
        </div>
        
        {/* Copyright and Address */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} <span className="text-gray-300">LEAP Academy.</span> All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-3 max-w-md mx-auto">
            Madina Palli Street, Porto Novo - Parangipettai, Tamil Nadu - 608502 | leappno@gmail.com | +91 733 963 6022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
