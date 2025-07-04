
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleContactClick = () => {
    setShowForm(true);
    toast({
      title: "Contact Form",
      description: "Please fill out the form below to get in touch.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: `Thank you ${formData.name}! I'll get back to you soon.`,
      });
      console.log("Message from:", formData.name);
      console.log("Message content:", formData.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
              
              {!showForm ? (
                <div className="space-y-4 mb-8">
                  <Button 
                    onClick={handleContactClick}
                    size="lg" 
                    className="w-full hover:scale-105 transition-all duration-300"
                  >
                    Contact Me
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 mb-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, ideas, or just say hello!"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full hover:scale-105 transition-all duration-300"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Thank you, {formData.name}!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Your message has been received. I'll get back to you soon!
                      </p>
                      <div className="text-left bg-background/50 p-4 rounded border">
                        <p className="text-sm text-muted-foreground mb-2">Message Preview:</p>
                        <p className="font-medium">{formData.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
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
