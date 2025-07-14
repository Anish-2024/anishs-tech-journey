
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Virtual Mouse",
      description: "An innovative AI-based system that allows users to control their computer cursor through intuitive hand gestures, eliminating the need for traditional mouse hardware.",
      tags: ["AI", "Computer Vision", "Python", "OpenCV"],
      githubUrl: null
    },
    {
      title: "Village Bus Feedback System",
      description: "A full-stack web application built with Python Flask and MongoDB Atlas that improves rural public transportation by collecting real-time passenger feedback via QR code scanning. Features an admin dashboard for viewing feedback and complaints, deployed on Render.",
      tags: ["Python", "Flask", "MongoDB", "Web Development", "Render", "QR Code"],
      githubUrl: "https://github.com/Anish-2024/bus-feedback-using-QRcode"
    },
    {
      title: "Packet Sniffer",
      description: "A sophisticated cybersecurity tool designed to monitor, capture, and analyze network traffic, helping identify potential security threats and network anomalies.",
      tags: ["Cybersecurity", "Network Security", "Python", "Wireshark"],
      githubUrl: null
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-gradient">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:scale-105 transition-all duration-500 card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl group ${project.githubUrl ? 'cursor-pointer' : ''}`}
              onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
            >
              <CardHeader className="p-8">
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-white/20 bg-transparent text-foreground px-8 py-4 rounded-2xl font-semibold glow-button"
            onClick={() => window.open('https://github.com/Anish-2024', '_blank')}
          >
            <Github className="mr-3 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
