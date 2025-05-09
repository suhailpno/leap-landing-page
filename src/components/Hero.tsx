
import { Button } from "@/components/ui/button";
import { WhatsApp } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-pattern min-h-[60vh] flex items-center section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-leap-dark leading-tight">
              Learning and Educational Academy of Porto Novo
            </h1>
            <p className="text-lg text-leap-dark/80 max-w-xl">
              Empowering students to achieve academic excellence and develop essential life skills for a successful future.
            </p>
            <Button
              size="lg"
              className="bg-leap-teal hover:bg-leap-teal/90 text-white flex items-center gap-2 rounded-full px-6 shadow-lg"
              onClick={() => window.open("https://wa.me/917339636022", "_blank")}
            >
              <WhatsApp className="h-5 w-5" />
              Join Us on WhatsApp
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-float">
            <img 
              src="https://postimg.cc/PPD8sgSp" 
              alt="LEAP Academy Logo" 
              className="w-96 h-auto max-w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
