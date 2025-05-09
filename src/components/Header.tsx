
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <GraduationCap className="h-6 w-6 text-leap-blue mr-2" />
          <span className="font-quicksand font-bold text-leap-dark">LEAP</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <div className="flex items-center text-leap-dark/80">
            <MapPin className="h-4 w-4 mr-1 text-leap-teal" />
            <span>Porto Novo, TN</span>
          </div>
          
          <div className="flex items-center text-leap-dark/80">
            <Mail className="h-4 w-4 mr-1 text-leap-teal" />
            <a href="mailto:leappno@gmail.com" className="hover:text-leap-teal transition-colors">
              leappno@gmail.com
            </a>
          </div>
          
          <div className="flex items-center text-leap-dark/80">
            <Phone className="h-4 w-4 mr-1 text-leap-teal" />
            <span>+91 733 963 6022</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="bg-leap-teal hover:bg-leap-teal/90 border-none text-white"
            onClick={() => window.open("https://wa.me/917339636022", "_blank")}
          >
            Join Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
