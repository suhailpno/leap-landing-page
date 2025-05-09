
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">LEAP</h3>
            <p className="text-gray-300 text-sm">Learning and Educational Academy of Porto Novo</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-white my-1 md:my-0">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white my-1 md:my-0">About</a>
            <a href="#activities" className="text-gray-300 hover:text-white my-1 md:my-0">Activities</a>
            <a href="#contact" className="text-gray-300 hover:text-white my-1 md:my-0">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LEAP Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
