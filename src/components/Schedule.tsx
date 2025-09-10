import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Bell, Download, Plus } from "lucide-react";

const Schedule = () => {
  const weeklySchedule = [
    {
      day: "Sunday",
      sessions: [
        {
          time: "8:30 AM - 9:15 AM",
          title: "Pre-Mass Rehearsal",
          location: "Church Sanctuary",
          type: "preparation",
          participants: "All Members",
          description: "Final rehearsal for Sunday Mass music"
        },
        {
          time: "9:30 AM - 10:45 AM",
          title: "Sunday Mass Performance",
          location: "Church Sanctuary",
          type: "performance",
          participants: "All Members",
          description: "Lead congregation in worship through sacred music"
        }
      ]
    },
    {
      day: "Wednesday",
      sessions: [
        {
          time: "7:00 PM - 8:30 PM",
          title: "Choir Practice",
          location: "Parish Hall",
          type: "practice",
          participants: "All Members",
          description: "Weekly rehearsal for upcoming liturgical celebrations"
        }
      ]
    },
    {
      day: "Friday",
      sessions: [
        {
          time: "6:30 PM - 7:30 PM",
          title: "Voice Training",
          location: "Music Room",
          type: "training",
          participants: "New Members",
          description: "Individual and small group voice development"
        }
      ]
    },
    {
      day: "Saturday",
      sessions: [
        {
          time: "4:00 PM - 5:00 PM",
          title: "Section Practice",
          location: "Parish Hall",
          type: "sectional",
          participants: "By Voice Parts",
          description: "Separate practice for SATB sections"
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-12-24",
      time: "11:00 PM",
      title: "Christmas Midnight Mass",
      type: "Special Liturgy",
      location: "Church Sanctuary",
      preparation: "Extra rehearsal Dec 22 at 7:00 PM",
      status: "confirmed"
    },
    {
      date: "2024-12-31",
      time: "6:00 PM",
      title: "New Year's Eve Mass",
      type: "Special Liturgy",
      location: "Church Sanctuary",
      preparation: "Regular Wednesday practice",
      status: "confirmed"
    },
    {
      date: "2025-01-15",
      time: "7:00 PM",
      title: "Winter Concert",
      type: "Concert",
      location: "Parish Hall",
      preparation: "Daily practices starting Jan 8",
      status: "planning"
    },
    {
      date: "2025-02-14",
      time: "6:30 PM",
      title: "St. Valentine's Day Mass",
      type: "Special Mass",
      location: "Church Sanctuary",
      preparation: "TBD",
      status: "tentative"
    }
  ];

  const monthlyActivities = [
    {
      title: "First Friday Adoration",
      frequency: "Monthly",
      nextDate: "Jan 3, 2025",
      time: "7:00 PM - 8:00 PM",
      description: "Special chants for Eucharistic Adoration"
    },
    {
      title: "Youth Choir Workshop",
      frequency: "Monthly",
      nextDate: "Jan 10, 2025", 
      time: "10:00 AM - 12:00 PM",
      description: "Teaching music to parish youth"
    },
    {
      title: "Choir Social Fellowship",
      frequency: "Monthly",
      nextDate: "Jan 17, 2025",
      time: "6:00 PM - 9:00 PM",
      description: "Community building and shared meals"
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'preparation': return 'bg-secondary text-secondary-foreground';
      case 'performance': return 'bg-primary text-primary-foreground';
      case 'practice': return 'bg-accent text-accent-foreground';
      case 'training': return 'bg-muted text-muted-foreground';
      case 'sectional': return 'bg-card text-card-foreground border';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'planning': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tentative': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Schedule & Practices
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Stay connected with our rehearsal schedule, upcoming performances, and special events.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="outline" className="gap-2">
            <Bell className="w-4 h-4" />
            Subscribe to Reminders
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Calendar
          </Button>
          <Button variant="outline" className="gap-2">
            <Plus className="w-4 h-4" />
            Request Time Off
          </Button>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8 text-center">
            Weekly Schedule
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklySchedule.map((day) => (
              <Card key={day.day} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-playfair text-lg text-center text-foreground">
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {day.sessions.map((session, index) => (
                    <div key={index} className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getTypeColor(session.type)}>
                          {session.title}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-3 h-3 mr-2" />
                          {session.time}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-2" />
                          {session.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="w-3 h-3 mr-2" />
                          {session.participants}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Special Events */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8 text-center">
            Upcoming Special Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  
                  <div className="border-t pt-3">
                    <Badge variant="outline" className="mb-2">
                      {event.type}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      <strong>Preparation:</strong> {event.preparation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Activities */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8 text-center">
            Monthly Activities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {monthlyActivities.map((activity, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-playfair text-lg font-semibold text-foreground mb-3">
                    {activity.title}
                  </h4>
                  <Badge variant="secondary" className="mb-3">
                    {activity.frequency}
                  </Badge>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Next: {activity.nextDate}
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {activity.time}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Member Resources */}
        <div className="bg-card rounded-lg p-8 shadow-soft text-center">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
            Member Resources
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access practice materials, request schedule changes, and stay updated with choir announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2">
              <Calendar className="w-4 h-4" />
              Member Portal
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Practice Materials
            </Button>
            <Button variant="outline" className="gap-2">
              <Bell className="w-4 h-4" />
              Notification Settings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;