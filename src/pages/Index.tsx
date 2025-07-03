
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Sports from "@/components/Sports";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Sports />
      <Contact />
    </div>
  );
};

export default Index;
