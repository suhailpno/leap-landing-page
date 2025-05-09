
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsApp, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-leap-dark">Get In Touch</h2>
          <div className="w-24 h-1 bg-leap-teal mx-auto mb-6"></div>
          <p className="text-leap-dark/80 max-w-2xl mx-auto">
            Have questions? Reach out to us today to learn more about our programs and how we can help your educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.661215392415!2d79.7936012!3d11.4966881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5350543a0c0ad1%3A0x11367281d193b4eb!2sParangipettai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716905231622!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="LEAP Academy location"
              ></iframe>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-leap-light p-3">
                  <MapPin className="h-6 w-6 text-leap-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-leap-dark text-lg mb-1">Address</h3>
                  <p className="text-leap-dark/80">
                    Madina Palli Street, Porto Novo - Parangipettai,<br />
                    Tamil Nadu - 608502
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-leap-light p-3">
                  <Mail className="h-6 w-6 text-leap-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-leap-dark text-lg mb-1">Email</h3>
                  <a href="mailto:leappno@gmail.com" className="text-leap-dark/80 hover:text-leap-teal transition-colors">
                    leappno@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-leap-light p-3">
                  <Phone className="h-6 w-6 text-leap-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-leap-dark text-lg mb-1">Phone</h3>
                  <a href="tel:+917339636022" className="text-leap-dark/80 hover:text-leap-teal transition-colors">
                    +91 733 963 6022
                  </a>
                </div>
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2 rounded-full px-6 shadow-lg"
              onClick={() => window.open("https://wa.me/917339636022", "_blank")}
            >
              <WhatsApp className="h-5 w-5" />
              Chat with us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
