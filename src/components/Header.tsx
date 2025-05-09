
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
            alt="LEAP Logo" 
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <span className="text-xl font-bold text-primary hidden md:inline">LEAP</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu}
            className="text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-primary hover:text-primary/80 font-medium">Home</a>
          <a href="#about" className="text-gray-600 hover:text-primary font-medium">About</a>
          <a href="#activities" className="text-gray-600 hover:text-primary font-medium">Activities</a>
          <a href="#contact" className="text-gray-600 hover:text-primary font-medium">Contact</a>
          <a 
            href="https://wa.me/917339636022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Join Us
          </a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <a href="#home" className="py-2 text-primary hover:text-primary/80 font-medium">Home</a>
            <a href="#about" className="py-2 text-gray-600 hover:text-primary font-medium">About</a>
            <a href="#activities" className="py-2 text-gray-600 hover:text-primary font-medium">Activities</a>
            <a href="#contact" className="py-2 text-gray-600 hover:text-primary font-medium">Contact</a>
            <a 
              href="https://wa.me/917339636022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2 bg-green-500 text-white px-4 rounded-md hover:bg-green-600 transition-colors text-center"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
