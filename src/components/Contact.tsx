
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Get in touch with us for more information</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Reach Out to Us</h3>
            
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
              <p className="text-gray-700">
                Madina Palli Street, Porto Novo - Parangipettai, Tamil Nadu - 608502
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <a href="mailto:leappno@gmail.com" className="text-gray-700 hover:text-primary">
                leappno@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <a href="tel:+917339636022" className="text-gray-700 hover:text-primary">
                +91 733 963 6022
              </a>
            </div>
            
            <div className="pt-4">
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
            </div>
          </div>
          
          <div className="h-64 md:h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.0340052322056!2d79.7667!3d11.4867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a549622066e087d%3A0x9ce756aed5702e25!2sParangipettai%2C%20Tamil%20Nadu%20608502!5e0!3m2!1sen!2sin!4v1658894522152!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="LEAP Academy Location"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
