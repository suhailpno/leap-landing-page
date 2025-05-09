
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Learning and Educational Academy of Porto Novo (LEAP), we believe in nurturing young minds through quality education and personalized attention. 
            Our mission is to provide a supportive and stimulating learning environment where students can realize their full potential. 
            We focus not only on academic excellence but also on developing essential life skills that prepare our students for future challenges.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Since our establishment, we have been committed to making quality education accessible to students in Porto Novo and surrounding areas.
            Our dedicated team of educators brings passion and expertise to create an engaging learning experience for all our students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
