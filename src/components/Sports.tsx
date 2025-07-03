
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sports = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Sports Leadership
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                From Extra Player to Team Captain
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                <p>
                  My sports journey is a testament to perseverance and leadership growth. What started as being selected as an extra player has evolved into captaining the Ball Badminton team — a transformation that taught me invaluable lessons about determination and teamwork.
                </p>
                
                <p>
                  Beyond playing, I've taken on diverse roles that showcase my versatility and commitment to sports. As a referee, I've learned to make quick, fair decisions under pressure — a skill that translates perfectly to problem-solving in technology projects.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Leadership Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Ball Badminton Team Captain
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Tournament Referee
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Shuttle Badminton Player
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Chess Competitor
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Skills Developed</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Team Leadership & Strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Quick Decision Making
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Pressure Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
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
