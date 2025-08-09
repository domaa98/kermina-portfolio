import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "01228041542",
      link: "tel:01228041542"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "kerminaraouf1@gmail.com",
      link: "mailto:kerminaraouf1@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "262 / D Hadayek Al Ahram",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Ready to transform your space? Let's discuss your next interior design project
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in border-0 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{contact.label}</h3>
                <a 
                  href={contact.link}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contact.value}
                </a>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <Card className="p-12 bg-gradient-primary shadow-glow text-center animate-fade-in border-0" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">
                  Let's Create Something Amazing Together
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  Whether you're looking for kitchen design, interior solutions, or project management, 
                  I'm here to bring your vision to life with innovative and tailored solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
               <a href="mailto:kerminaraouf1@gmail.com">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </Button>
                </a>

                <a href="tel:+201228041542">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                </a>
              </div>
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
};
