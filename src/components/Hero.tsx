
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      
      <div className="container mx-auto px-4 text-center z-10 max-w-6xl">
        <div className="smooth-enter opacity-0">
          <div className="mb-8 stagger-1 flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6c5b8cd9-5fad-4d2b-b3db-c5a32e779d1b.png" 
                  alt="Anish - Tech Innovator and Sports Leader"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            <div className="flex-1 text-left lg:text-left">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
                Hello, I'm Anish
              </h1>
              
              <div className="mb-6 stagger-2">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 accent-gradient">
                  Tech Innovator | Sports Leader | Cybersecurity Explorer
                </p>
              </div>
              
              <div className="mb-8 stagger-3">
                <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                  MCA Student at NMAMIT • BCA Graduate from Mangalore University
                </p>
              </div>
              
              <div className="mb-12 stagger-4">
                <p className="text-xl italic text-primary/90 font-medium tracking-wide">
                  "Curious mind, coding fingers, and a sportsman's heart — that's me."
                </p>
              </div>
            </div>
          </div>
          
          <div className="stagger-4">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl glow-button border-0 shadow-2xl"
              title="Explore Projects & Story"
            >
              Discover My Journey
              <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
