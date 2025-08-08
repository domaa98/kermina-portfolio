import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Appliance Furniture and Wooden Industries Company",
      position: "Trainee",
      period: "Summer 2021",
      description: "Gained extensive experience in furniture design and wooden manufacturing processes",
      highlights: ["Furniture Design", "Manufacturing Processes", "Quality Control"]
    },
    {
      company: "Knauf Stitched Ceilings Company", 
      position: "Trainee",
      period: "Summer 2022",
      description: "Developed skills in ceiling design and installation techniques",
      highlights: ["Ceiling Design", "Installation Techniques", "Project Management"]
    },
    {
      company: "Le Marche",
      position: "Design Consultant",
      period: "2024",
      description: "Deal with many clients, developing skills in client relations and gaining their trust. Achievements in Operations Management.",
      highlights: ["Client Relations", "Trust Building", "Operations Management"]
    }
  ];

  const previousCompanies = ["Zahra Furniture", "Bluewater", "Coil Group"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              4+ months in kitchen design and interior solutions
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 animate-scale-in border-0 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary"></div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  
                  {/* Company Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground flex items-center">
                        <Building2 className="w-5 h-5 mr-2 text-primary" />
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-primary">{exp.position}</p>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Skills/Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </Card>
            ))}
          </div>
          
          {/* Previous Companies */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Previous Companies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {previousCompanies.map((company, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="font-medium text-foreground">{company}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};