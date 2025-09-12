import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Play, Calendar, Users, Heart, Star, ChevronRight, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-choir.jpg";

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const highlights = [
    { icon: Users, text: "45+ Active Members", color: "bg-accent" },
    { icon: Music, text: "128 Songs in Library", color: "bg-secondary" },
    { icon: Calendar, text: "Weekly Practices", color: "bg-primary" },
    { icon: Star, text: "Award Winning", color: "bg-accent" }
  ];

  const featuredEvents = [
    {
      title: "Christmas Concert 2024",
      date: "December 22",
      location: "Parish Hall",
      status: "Featured"
    },
    {
      title: "New Year Service",
      date: "January 1",
      location: "Main Church",
      status: "Upcoming"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="MSOW Choir singing in cathedral" 
          className="w-full h-full object-cover transform scale-110 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70 animate-gradient" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium animate-bounce-in">
                Mary Seat of Wisdom Choir
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-primary-foreground leading-tight">
                Voices of
                <span className="block bg-gradient-gold bg-clip-text text-transparent animate-gradient">
                  Faith & Harmony
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-inter leading-relaxed max-w-2xl">
                Join our sacred musical journey as we lift hearts and souls through divine melodies, 
                celebrating faith through the universal language of music.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold shadow-elegant hover-lift"
                asChild
              >
                <Link to="/about">
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Choir
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm hover-lift"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Volume2 className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isPlaying ? "Now Playing" : "Listen to Us"}
              </Button>
            </div>

            {/* Rotating Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    index === currentSlide 
                      ? 'bg-primary-foreground/20 scale-110 shadow-lg' 
                      : 'bg-primary-foreground/10'
                  } transition-all duration-500 hover-lift`}
                >
                  <highlight.icon className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Events Card */}
          <div className="animate-slide-in-right">
            <Card className="bg-primary-foreground/10 backdrop-blur-lg border-primary-foreground/20 shadow-elegant hover-lift">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-playfair font-bold text-primary-foreground">
                    Upcoming Events
                  </h3>
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  {featuredEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors hover-lift"
                    >
                      <div>
                        <h4 className="font-semibold text-primary-foreground">
                          {event.title}
                        </h4>
                        <p className="text-sm text-primary-foreground/80">
                          {event.date} • {event.location}
                        </p>
                      </div>
                      <Badge 
                        variant={event.status === "Featured" ? "secondary" : "outline"}
                        className={event.status === "Featured" ? "bg-accent text-accent-foreground" : "border-primary-foreground/30 text-primary-foreground"}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/schedule">
                    View All Events
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Audio Visualization (Mock) */}
      {isPlaying && (
        <div className="absolute bottom-20 right-8 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary-foreground/60 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EnhancedHero;