
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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-gradient">
          Let's Connect
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl">
            <CardHeader className="p-10">
              <CardTitle className="text-3xl text-center accent-gradient">
                Ready to Collaborate?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0 text-center">
              <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                Whether you're interested in discussing technology, sports, or potential collaborations, I'd love to hear from you!
              </p>
              
              {!showForm ? (
                <div className="space-y-6 mb-12">
                  <Button 
                    onClick={handleContactClick}
                    size="lg" 
                    className="w-full max-w-md mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl glow-button px-10 py-6 text-lg"
                  >
                    Contact Me
                  </Button>
                </div>
              ) : (
                <div className="space-y-8 mb-12">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-lg mx-auto">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-lg font-medium">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-input/50 border-white/20 rounded-xl py-4 px-6 text-lg focus:border-primary/50 focus:ring-primary/50 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-lg font-medium">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, ideas, or just say hello!"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                          className="bg-input/50 border-white/20 rounded-xl py-4 px-6 text-lg focus:border-primary/50 focus:ring-primary/50 backdrop-blur-sm resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl glow-button px-10 py-6 text-lg"
                      >
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <div className="p-8 bg-primary/10 rounded-2xl border border-primary/30 backdrop-blur-sm max-w-lg mx-auto">
                      <h3 className="text-2xl font-semibold accent-gradient mb-4">
                        Thank you, {formData.name}!
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg">
                        Your message has been received. I'll get back to you soon!
                      </p>
                      <div className="text-left bg-background/30 p-6 rounded-xl border border-white/10">
                        <p className="text-sm text-muted-foreground mb-3">Message Preview:</p>
                        <p className="font-medium text-lg">{formData.message}</p>
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
                  className="border-white/20 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 rounded-2xl font-semibold glow-button"
                >
                  <Github className="mr-3 h-5 w-5" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('#', '_blank')}
                  className="border-white/20 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 rounded-2xl font-semibold glow-button"
                >
                  <Linkedin className="mr-3 h-5 w-5" />
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
