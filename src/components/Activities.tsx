
import { useRef, useEffect } from "react";
import { Book, GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Activities = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.activity-card');
    cards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="activities" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.12),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(67,56,202,0.12),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Our Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300">Discover the range of educational services we offer</p>
        </div>
        
        <div ref={cardsRef} className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activityItems.map((item, index) => (
              <Card key={index} className="activity-card border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5">
                <CardHeader className="flex flex-col items-center pb-2 pt-8">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-300 text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {activityItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="activity-card border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-xl h-full">
                    <CardHeader className="flex flex-col items-center pb-2 pt-8">
                      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-full mb-4">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-center text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-300 text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mx-2" />
              <CarouselNext className="static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Activities;
