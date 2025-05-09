
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/401f675b-8256-4417-b4b9-e519021c1bc3.png" 
                alt="LEAP Logo" 
                className="h-24 w-24"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Learning and Educational Academy of Porto Novo (LEAP), we believe in nurturing young minds through quality education and personalized attention. 
              Our mission is to provide a supportive and stimulating learning environment where students can realize their full potential. 
              We focus not only on academic excellence but also on developing essential life skills that prepare our students for future challenges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our establishment, we have been committed to making quality education accessible to students in Porto Novo and surrounding areas.
              Our dedicated team of educators brings passion and expertise to create an engaging learning experience for all our students.
            </p>
            <div className="mt-8 text-center">
              <p className="text-primary font-bold text-xl italic">"Empowering through Education & Ethics"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
