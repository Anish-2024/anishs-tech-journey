
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sports = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-gradient">
          Sports Leadership
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Card className="card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl mb-12">
            <CardHeader className="p-12">
              <CardTitle className="text-3xl text-center accent-gradient">
                From Extra Player to Team Captain
              </CardTitle>
            </CardHeader>
            <CardContent className="px-12 pb-12">
              <div className="text-lg md:text-xl leading-relaxed space-y-6 text-muted-foreground font-light">
                <p>
                  My sports journey is a testament to perseverance and leadership growth. What started as being selected as an extra player has evolved into captaining the Ball Badminton team — a transformation that taught me invaluable lessons about determination and teamwork.
                </p>
                
                <p>
                  Beyond playing, I've taken on diverse roles that showcase my versatility and commitment to sports. As a referee, I've learned to make quick, fair decisions under pressure — a skill that translates perfectly to problem-solving in technology projects.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:scale-105 transition-all duration-500 card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl accent-gradient">Leadership Roles</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                    Ball Badminton Team Captain
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                    Tournament Referee
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                    Shuttle Badminton Player
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                    Chess Competitor
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:scale-105 transition-all duration-500 card-shadow bg-card/50 backdrop-blur-sm border-white/10 rounded-3xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl accent-gradient">Skills Developed</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-4 flex-shrink-0"></span>
                    Team Leadership & Strategy
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-4 flex-shrink-0"></span>
                    Quick Decision Making
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-4 flex-shrink-0"></span>
                    Pressure Management
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-4 flex-shrink-0"></span>
                    Fair Play & Ethics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
