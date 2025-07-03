
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleContactClick = () => {
    setShowForm(true);
    toast({
      title: "Contact Me",
      description: "Please leave a message and I will get back to you.",
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Let's Connect
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Ready to Collaborate?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're interested in discussing technology, sports, or potential collaborations, I'd love to hear from you!
              </p>
              
              <div className="space-y-4 mb-8">
                <Button 
                  onClick={handleContactClick}
                  size="lg" 
                  className="w-full hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </Button>
                
                {showForm && (
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-primary font-medium">
                      Thanks for your interest! Please leave a message and I will get back to you soon.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center space-x-6">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://github.com/Anish-2024', '_blank')}
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('#', '_blank')}
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
