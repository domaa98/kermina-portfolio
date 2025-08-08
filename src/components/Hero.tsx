import { Button } from "@/components/ui/button";
import profileImage from "@/assets/kermina.png";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                KERMINA
                <br />
                <span className="text-accent">RAOUF</span>
              </h1>
              <div className="flex items-center space-x-3">
                <div className="w-16 h-1 bg-accent"></div>
                <p className="text-xl text-white/90 font-medium">INTERIOR DESIGNER</p>
              </div>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              Kitchen designer with extensive experience in project management and innovative design solutions. 
              Specializing in persuading clients and delivering exceptional results under pressure.
            </p>
            
            <div className="flex flex-wrap gap-4">
            <a href="mailto:kerminaraouf1@gmail.com">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all duration-300 hover:scale-105">             
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch               
              </Button>
              </a>
              <a href="/kermina.pdf" download>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center text-white/70">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">01228041542</span>
              </div>
              <div className="flex items-center text-white/70">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">kerminaraouf1@gmail.com</span>
              </div>
              <div className="flex items-center text-white/70">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Hadayek Al Ahram</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Kermina Raouf" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full -z-10 opacity-20 blur-2xl"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};