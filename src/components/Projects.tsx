
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Virtual Mouse",
      description: "An innovative AI-based system that allows users to control their computer cursor through intuitive hand gestures, eliminating the need for traditional mouse hardware.",
      tags: ["AI", "Computer Vision", "Python", "OpenCV"]
    },
    {
      title: "Village Bus Feedback System",
      description: "A comprehensive web application that enables passengers to send feedback and complaints about bus services, improving public transportation through community input.",
      tags: ["Web Development", "PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "Packet Sniffer",
      description: "A sophisticated cybersecurity tool designed to monitor, capture, and analyze network traffic, helping identify potential security threats and network anomalies.",
      tags: ["Cybersecurity", "Network Security", "Python", "Wireshark"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/10 group">
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.open('https://github.com/Anish-2024', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
