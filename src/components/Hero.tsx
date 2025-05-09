
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            Learning and Educational Academy of Porto Novo
          </h1>
          <p className="text-xl mb-6 text-gray-600">
            Empowering through Education & Ethics
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/917339636022" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600">
                <Phone size={18} className="mr-2" />
                Join Us on WhatsApp
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Contact Us</Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
            alt="LEAP Academy Logo" 
            className="max-w-full h-auto rounded-lg shadow-lg animate-fade-in"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
