import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      date: "2024-03-15",
      title: "Easter Vigil Mass",
      time: "8:00 PM",
      location: "St. Mary's Cathedral",
      description: "Join us for the most solemn celebration of the liturgical year with special choral arrangements.",
      type: "Liturgy",
      featured: true
    },
    {
      date: "2024-03-22",
      title: "Palm Sunday Performance",
      time: "10:30 AM",
      location: "St. Mary's Church",
      description: "Special presentation of Passion hymns during the Palm Sunday celebration.",
      type: "Performance"
    },
    {
      date: "2024-04-05",
      title: "Choir Rehearsal",
      time: "7:00 PM",
      location: "Parish Hall",
      description: "Weekly practice session. New members welcome to observe and participate.",
      type: "Rehearsal"
    },
    {
      date: "2024-04-12",
      title: "Divine Mercy Sunday",
      time: "11:00 AM",
      location: "St. Mary's Church",
      description: "Beautiful rendition of Divine Mercy chaplet and traditional hymns.",
      type: "Liturgy"
    },
    {
      date: "2024-04-20",
      title: "Community Concert",
      time: "7:30 PM",
      location: "St. Mary's Cathedral",
      description: "Annual spring concert featuring sacred music from various periods and traditions.",
      type: "Concert",
      featured: true
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Liturgy':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Concert':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Performance':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Join us for our liturgical celebrations, concerts, and community gatherings. 
            Experience the beauty of sacred music in worship and performance.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              className={`shadow-soft hover:shadow-elegant transition-all duration-300 ${
                event.featured ? 'ring-2 ring-accent/20 bg-accent/5' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="outline" 
                    className={getEventTypeColor(event.type)}
                  >
                    {event.type}
                  </Badge>
                  {event.featured && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-playfair text-xl text-foreground">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-inter">{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-inter">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-inter">{event.location}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 font-inter"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-elegant bg-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Stay Updated with Our Events
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                Want to be notified about upcoming performances, rehearsals, and special celebrations? 
                Join our mailing list or become a choir member to receive exclusive updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="font-inter font-semibold shadow-soft">
                  Join Mailing List
                </Button>
                <Button variant="outline" className="font-inter">
                  Become a Member
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;