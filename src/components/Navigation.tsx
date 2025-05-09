
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo aligned to the left */}
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-leap-teal" />
            <span className="ml-2 font-quicksand font-bold text-xl text-leap-dark">LEAP</span>
          </div>

          {/* Navigation items centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8 mx-auto">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-leap-dark/70 hover:text-leap-teal transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact button aligned to the right */}
          <Button
            className="hidden md:flex bg-leap-teal hover:bg-leap-teal/90 text-white"
            onClick={() => window.open("https://wa.me/917339636022", "_blank")}
          >
            Contact Us
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-leap-teal"
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
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-medium text-leap-dark/70 hover:text-leap-teal transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full bg-leap-teal hover:bg-leap-teal/90 text-white mt-4"
              onClick={() => window.open("https://wa.me/917339636022", "_blank")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
