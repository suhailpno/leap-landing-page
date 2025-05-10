
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, GraduationCap, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo with animation */}
          <div className="flex items-center group">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full transition-transform group-hover:scale-110 duration-300">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <span className="ml-3 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">LEAP</span>
          </div>

          {/* Navigation items centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact button and social icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social media icons */}
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-200">
                <Linkedin size={18} />
              </a>
            </div>
            
            <a 
              href="https://wa.me/917339636022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-md shadow-xl animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
              >
                {item.name}
              </a>
            ))}
            
            {/* Social media icons in mobile menu */}
            <div className="flex items-center space-x-5 py-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
            
            <a 
              href="https://wa.me/917339636022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
