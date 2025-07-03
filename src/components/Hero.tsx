
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_theme(colors.primary/10),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.secondary/20),_transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Hello, I'm Anish
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            Tech Innovator | Sports Leader | Cybersecurity Explorer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            MCA Student at NMAMIT • BCA Graduate from Mangalore University
          </p>
          
          <div className="mb-12">
            <p className="text-lg italic text-primary/80 font-medium">
              "Curious mind, coding fingers, and a sportsman's heart — that's me."
            </p>
          </div>
          
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            title="Explore Projects & Story"
          >
            Discover My Journey
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
