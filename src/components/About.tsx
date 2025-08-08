import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const About = () => {
  const achievements = [
    "Designed innovative kitchens and interior spaces",
    "Successfully persuaded clients and provided tailored solutions", 
    "Worked effectively under pressure, meeting deadlines",
    "Built strong client relationships, delivering exceptional service"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I am a kitchen designer with extensive experience in project management and innovative design solutions. 
              The ability to persuade clients and work under pressure while managing projects from conception to completion.
            </p>
          </div>
          
          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <p className="text-foreground leading-relaxed font-medium">
                    {achievement}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Education Section */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Education</h3>
            <Card className="p-8 bg-gradient-card shadow-elegant text-center border-0">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">Bachelor of Applied Arts</h4>
                <p className="text-muted-foreground">Higher Institute of Applied Arts</p>
                <p className="text-sm text-muted-foreground font-medium">2019 - 2024</p>
              </div>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};