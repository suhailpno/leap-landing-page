
import { Book, GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Activities = () => {
  const activityItems = [
    {
      title: "School Tuition",
      description: "Comprehensive tuition for Secondary & Senior Secondary students with personalized attention.",
      icon: School
    },
    {
      title: "Career Guidance and Counseling",
      description: "Professional guidance to help students make informed decisions about their educational and career paths.",
      icon: GraduationCap
    },
    {
      title: "Skill Development Sessions",
      description: "Interactive sessions focused on developing essential life and professional skills.",
      icon: BookOpen
    },
    {
      title: "Competitive Exam Coaching",
      description: "Specialized coaching for TNPSC, UPSC and other competitive examinations.",
      icon: Book
    }
  ];

  return (
    <section id="activities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Activities</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Discover the range of educational services we offer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activityItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
