
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section">
      <div className="absolute inset-0 modern-gradient-bg" />
      <div className="absolute inset-0 floating-particles" />
      
      <div className="container mx-auto px-4 text-center z-10 max-w-7xl">
        <div className="hero-content-enter opacity-0">
          <div className="mb-12 hero-stagger-1 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            <div className="flex-shrink-0 profile-container">
              <div className="relative profile-image-wrapper">
                <img 
                  src="/lovable-uploads/ad1be813-fc7f-43ab-a995-c0fd74151bee.png" 
                  alt="Anish - Tech Innovator and Sports Leader"
                  className="profile-image w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full object-cover"
                />
                <div className="profile-glow-ring"></div>
                <div className="profile-pulse-ring"></div>
              </div>
            </div>
            
            <div className="flex-1 text-left lg:text-left hero-text-content">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
                Hello, I'm <span className="name-highlight">Anish</span>
              </h1>
              
              <div className="mb-8 hero-stagger-2">
                <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-6">
                  <span className="role-highlight">Tech Innovator</span> | <span className="role-highlight">Sports Leader</span> | <span className="role-highlight">Cybersecurity Explorer</span>
                </p>
              </div>
              
              <div className="mb-10 hero-stagger-3">
                <p className="hero-description text-base md:text-lg lg:text-xl text-muted-foreground font-light tracking-wide leading-relaxed">
                  MCA Student at NMAMIT • BCA Graduate from Mangalore University
                </p>
              </div>
              
              <div className="mb-14 hero-stagger-4">
                <p className="hero-quote text-lg md:text-xl lg:text-2xl italic font-medium tracking-wide">
                  "Curious mind, coding fingers, and a sportsman's heart — that's me."
                </p>
              </div>
            </div>
          </div>
          
          <div className="hero-stagger-5">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="modern-cta-button text-lg md:text-xl px-12 py-6 md:px-16 md:py-8 font-semibold rounded-2xl"
              title="Explore Projects & Story"
            >
              Discover My Journey
              <ArrowDown className="ml-4 h-6 w-6 cta-arrow" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 hero-fade-bottom pointer-events-none" />
    </section>
  );
};

export default Hero;
