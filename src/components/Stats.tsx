
import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      value: "3+",
      label: "Years in Tech & Innovation",
      description: "Building innovative solutions"
    },
    {
      value: "5+",
      label: "Projects Completed",
      description: "AI Virtual Mouse, Village Bus Feedback System, Packet Sniffer & more"
    },
    {
      value: "4",
      label: "Sports Leadership Roles",
      description: "Captain, Referee, Shuttle & Chess Player"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-all duration-500 card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl group">
              <CardContent className="p-10">
                <div className="text-5xl md:text-6xl font-bold accent-gradient mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
