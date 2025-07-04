
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
      
      <div className="container mx-auto px-4 text-center z-10 max-w-4xl">
        <div className="smooth-enter opacity-0">
          <div className="mb-8 stagger-1">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-gradient leading-tight">
              Hello, I'm Anish
            </h1>
          </div>
          
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
