import { Button } from "@/components/ui/button";
import { Play, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-choir.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="MWOW Choir singing in cathedral" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
              Mary Seat of
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                Wisdom Choir
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-inter font-light max-w-2xl">
              Praising God through sacred music and liturgical excellence
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-10">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <p className="text-lg text-primary-foreground font-inter italic leading-relaxed">
                "Under the patronage of Mary, Seat of Wisdom, we dedicate our voices to the greater glory of God, 
                enriching the liturgy and inspiring hearts through the beauty of sacred music."
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-inter font-semibold shadow-elegant"
            >
              <Play className="w-5 h-5 mr-2" />
              Listen to Our Music
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-inter font-semibold"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Choir
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-inter font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Events
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-secondary mb-2">25+</div>
              <div className="text-primary-foreground/80 font-inter">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-secondary mb-2">15+</div>
              <div className="text-primary-foreground/80 font-inter">Years of Ministry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-secondary mb-2">100+</div>
              <div className="text-primary-foreground/80 font-inter">Liturgies Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;