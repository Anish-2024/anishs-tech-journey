
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Send, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.fullName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Form submission started with data:", formData);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'anishanchan567@gmail.com'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_xlnq2up', // Service ID
        'template_w0c30yn', // Template ID
        templateParams,
        'G2HvIHC1HQB5t4Rhi' // Public Key
      );

      console.log('EmailJS response:', response);
      
      // Show success message
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: ""
      });

      console.log("Form submission completed successfully");
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 text-gradient">
          Let's Connect
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-20 font-light max-w-3xl mx-auto">
          Ready to collaborate? Whether you're interested in discussing technology, sports, or potential projects, I'd love to hear from you!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl">
            <CardHeader className="p-10">
              <CardTitle className="text-3xl text-center accent-gradient">
                Contact Me
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="text-lg font-medium flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="bg-input/50 border-white/20 rounded-xl py-4 px-6 text-lg focus:border-primary/50 focus:ring-primary/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-lg font-medium flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-input/50 border-white/20 rounded-xl py-4 px-6 text-lg focus:border-primary/50 focus:ring-primary/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-lg font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-white/20 rounded-xl py-4 px-6 text-lg focus:border-primary/50 focus:ring-primary/50 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-lg font-medium">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="bg-input/50 border-white/20 rounded-xl py-4 px-6 text-lg focus:border-primary/50 focus:ring-primary/50 backdrop-blur-sm resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl glow-button px-10 py-6 text-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="p-12 bg-primary/10 rounded-3xl border border-primary/30 backdrop-blur-sm">
                    <div className="text-6xl mb-6">✨</div>
                    <h3 className="text-3xl font-semibold accent-gradient mb-6">
                      Thank You!
                    </h3>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      Your message has been sent successfully to <strong>anishanchan567@gmail.com</strong>. 
                      I'll get back to you soon!
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 rounded-2xl font-semibold"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mt-12 flex justify-center space-x-6">
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
