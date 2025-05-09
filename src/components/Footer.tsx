
import { GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-leap-dark text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <GraduationCap className="h-8 w-8 text-leap-teal mr-2" />
            <div className="flex flex-col">
              <span className="font-quicksand font-bold text-xl">LEAP</span>
              <span className="text-xs text-white/60">Learning and Educational Academy of Porto Novo</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Learning and Educational Academy of Porto Novo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
