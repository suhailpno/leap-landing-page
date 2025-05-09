
import { Book, BookOpen, Lightbulb, School } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: <School className="h-10 w-10 text-leap-blue" />,
      title: "School Tuition",
      description: "Expert tutoring for Secondary & Senior Secondary students across all subjects with personalized attention."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-leap-teal" />,
      title: "Career Guidance and Counseling",
      description: "Professional counseling to help students identify their strengths and make informed career choices."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-leap-green" />,
      title: "Skill Development Sessions",
      description: "Interactive workshops to develop essential life skills, communication, and personality development."
    },
    {
      icon: <Book className="h-10 w-10 text-leap-orange" />,
      title: "Competitive Exam Coaching",
      description: "Specialized coaching for TNPSC, UPSC, and other competitive examinations with comprehensive study materials."
    }
  ];

  return (
    <section id="activities" className="section-padding bg-leap-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-leap-dark">Our Activities</h2>
          <div className="w-24 h-1 bg-leap-teal mx-auto mb-6"></div>
          <p className="text-leap-dark/80 max-w-2xl mx-auto">
            Explore our diverse range of educational services designed to support students at every stage of their academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-white shadow-md">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-leap-dark">{activity.title}</h3>
              <p className="text-leap-dark/70">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
