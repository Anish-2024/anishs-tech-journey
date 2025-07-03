
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
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
