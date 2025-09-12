import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Play, Calendar, Users, Heart, Award, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const recentMusic = [
    {
      title: "Ave Maria",
      composer: "Franz Schubert",
      duration: "4:32",
      type: "Classical",
      featured: true
    },
    {
      title: "How Great Thou Art",
      composer: "Traditional Hymn",
      duration: "3:45",
      type: "Hymn",
      featured: false
    },
    {
      title: "Panis Angelicus",
      composer: "César Franck",
      duration: "5:18",
      type: "Sacred",
      featured: true
    }
  ];

  const achievements = [
    { title: "Best Sacred Music Group", year: "2024", organization: "Regional Catholic Arts Festival" },
    { title: "Community Choice Award", year: "2023", organization: "City Arts Council" },
    { title: "Excellence in Choral Performance", year: "2023", organization: "Diocesan Music Ministry" }
  ];

  const upcomingEvents = [
    {
      title: "Christmas Concert",
      date: "Dec 22, 2024",
      time: "7:00 PM",
      venue: "Parish Hall",
      description: "Join us for a magical evening of Christmas carols and sacred music"
    },
    {
      title: "Midnight Mass",
      date: "Dec 24, 2024",
      time: "11:30 PM",
      venue: "Main Church",
      description: "Traditional Christmas Eve service with special musical arrangements"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Featured Content
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Musical Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest performances, achievements, and upcoming events that showcase 
            the beauty of sacred music and community worship.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Music */}
          <Card className="shadow-elegant hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="w-6 h-6 mr-3 text-primary" />
                Recent Performances
              </CardTitle>
              <CardDescription>
                Listen to our latest recordings and performances
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMusic.map((song, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground flex items-center">
                        {song.title}
                        {song.featured && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Featured
                          </Badge>
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground">{song.composer}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {song.type}
                    </Badge>
                    <span>{song.duration}</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/media">
                  <Music className="w-4 h-4 mr-2" />
                  View All Music
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-elegant hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-6 h-6 mr-3 text-accent" />
                Recent Awards
              </CardTitle>
              <CardDescription>
                Recognition for our musical excellence and community service
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover-lift"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.organization}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-accent-foreground bg-accent">
                      {achievement.year}
                    </Badge>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <p className="text-sm text-muted-foreground text-center">
                  <Heart className="w-4 h-4 inline mr-1" />
                  Celebrating excellence in sacred music since 1985
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="shadow-elegant hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-secondary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Join us for our next performances and celebrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover-lift"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground">
                        {event.title}
                      </h4>
                      <Badge variant="outline">
                        {event.date}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{event.time} • {event.venue}</p>
                      <p className="mt-2 text-xs">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full" asChild>
                <Link to="/schedule">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Full Schedule
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="bg-gradient-hero text-primary-foreground shadow-elegant max-w-4xl mx-auto hover-lift">
            <CardContent className="py-12 px-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    Join Our Community
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold">
                    Become Part of Our Musical Family
                  </h3>
                  <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                    Whether you're an experienced singer or just beginning your musical journey, 
                    there's a place for you in our choir family.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant"
                    asChild
                  >
                    <Link to="/about">
                      <Users className="w-5 h-5 mr-2" />
                      Learn More About Us
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link to="/contact">
                      <Heart className="w-5 h-5 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;