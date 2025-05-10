
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center space-x-4">
            <img 
              src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
              alt="LEAP Logo" 
              className="h-16 w-16"
            />
            <div>
              <h3 className="text-xl font-bold">LEAP</h3>
              <p className="text-gray-300 text-sm">Learning and Educational Academy of Porto Novo</p>
              <p className="text-gray-400 text-xs mt-1">Empowering through Education & Ethics</p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 items-center mb-6 md:mb-0">
            <a href="#home" className="text-gray-300 hover:text-white hover:underline my-1 md:my-0">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white hover:underline my-1 md:my-0">About</a>
            <a href="#activities" className="text-gray-300 hover:text-white hover:underline my-1 md:my-0">Activities</a>
            <a href="#contact" className="text-gray-300 hover:text-white hover:underline my-1 md:my-0">Contact</a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LEAP Academy. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Madina Palli Street, Porto Novo - Parangipettai, Tamil Nadu - 608502 | leappno@gmail.com | +91 733 963 6022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
