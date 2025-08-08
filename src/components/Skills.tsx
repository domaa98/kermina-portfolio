import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Palette, 
  Box, 
  Zap, 
  PenTool, 
  Camera, 
  FileText,
  Globe,
  MessageCircle
} from "lucide-react";

export const Skills = () => {
  const technicalSkills = [
    { name: "Space Design", level: 95, icon: Palette },
    { name: "3D Modeling", level: 90, icon: Box },
    { name: "V-ray", level: 85, icon: Zap },
    { name: "SketchUp", level: 88, icon: PenTool },
    { name: "Photoshop", level: 92, icon: Camera },
    { name: "AutoCAD", level: 94, icon: FileText }
  ];

  const languages = [
    { name: "Arabic", level: "Native", icon: MessageCircle },
    { name: "English", level: "Very Good", icon: Globe }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Comprehensive design and technical skills honed through education and hands-on experience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Technical Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 animate-slide-in-left">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <Card 
                    key={skill.name}
                    className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 animate-scale-in border-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Languages & Additional Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Languages
              </h3>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <Card 
                    key={language.name}
                    className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 animate-scale-in border-0"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <language.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-semibold text-foreground">{language.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{language.level}</span>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Office Skills */}
              <Card className="p-6 bg-gradient-primary shadow-glow animate-scale-in border-0" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Microsoft Office Suite</h4>
                    <p className="text-white/80 text-sm">Word, Excel, PowerPoint, Project</p>
                  </div>
                </div>
              </Card>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};