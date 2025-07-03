
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <Card className="border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                <p>
                  My journey began as a curious BCA student at Mangalore University, where I discovered my passion for technology and innovation. Today, as an MCA student at NMAMIT, I've evolved into a well-rounded tech enthusiast who thrives at the intersection of academics, family values, and competitive sports.
                </p>
                
                <p>
                  What sets me apart is my unique blend of technical expertise and leadership experience. I've dived deep into AI technologies, cybersecurity protocols, and Flutter development, creating projects that solve real-world problems. From developing an AI Virtual Mouse that revolutionizes computer interaction to building feedback systems that connect communities, I believe technology should make life better for everyone.
                </p>
                
                <p>
                  Beyond coding, I'm a natural leader who has captained teams and refereed competitive matches. My sports journey taught me discipline, teamwork, and resilience — qualities that make me a better developer and collaborator. Whether I'm debugging code late at night or strategizing on the badminton court, I bring the same dedication and analytical thinking to everything I do.
                </p>
                
                <p className="text-primary font-medium">
                  I'm constantly learning, always curious, and ready to take on challenges that push the boundaries of what's possible in tech and beyond.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
