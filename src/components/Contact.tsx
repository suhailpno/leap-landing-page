
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contactRef.current || !mapRef.current) return;
      
      const contactRect = contactRef.current.getBoundingClientRect();
      const mapRect = mapRef.current.getBoundingClientRect();
      
      if (contactRect.top < window.innerHeight * 0.8) {
        contactRef.current.classList.add('animate-fade-in');
        contactRef.current.classList.remove('opacity-0');
      }
      
      if (mapRect.top < window.innerHeight * 0.8) {
        mapRef.current.classList.add('animate-fade-in');
        mapRef.current.classList.remove('opacity-0');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); // Initial check with slight delay
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.12),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300">Get in touch with us for more information</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={contactRef} className="space-y-8 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl opacity-0 transition-all duration-700">
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Reach Out to Us</h3>
            
            <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Our Location</h4>
                <p className="text-gray-300">
                  Madina Palli Street, Porto Novo - Parangipettai, Tamil Nadu - 608502
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email Address</h4>
                <a href="mailto:leappno@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  leappno@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone Number</h4>
                <a href="tel:+917339636022" className="text-gray-300 hover:text-white transition-colors">
                  +91 733 963 6022
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://wa.me/917339636022" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 py-6 h-auto w-full rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02]">
                  <Phone size={18} className="mr-2" />
                  Connect via WhatsApp
                </Button>
              </a>
            </div>
          </div>
          
          <div className="h-[450px] md:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            <iframe 
              ref={mapRef}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.0340052322056!2d79.7667!3d11.4867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a549622066e087d%3A0x9ce756aed5702e25!2sParangipettai%2C%20Tamil%20Nadu%20608502!5e0!3m2!1sen!2sin!4v1658894522152!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="LEAP Academy Location"
              className="opacity-0 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
