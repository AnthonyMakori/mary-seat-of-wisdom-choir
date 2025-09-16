import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, MapPin, Clock, Users, Plus } from "lucide-react";

const Events = () => {
  const { user, isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const mockEvents = [
    {
      id: 1,
      title: "Easter Sunday Service",
      type: "performance",
      date: "2024-03-31",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Special Easter celebration with choir performance",
      attendees: 45,
      status: "confirmed",
      rehearsals: ["2024-03-28", "2024-03-30"]
    },
    {
      id: 2,
      title: "Weekly Choir Practice",
      type: "rehearsal",
      date: "2024-01-15",
      time: "7:00 PM",
      location: "Choir Room",
      description: "Regular weekly practice session",
      attendees: 32,
      status: "completed",
      rehearsals: []
    },
    {
      id: 3,
      title: "Christmas Concert",
      type: "concert",
      date: "2024-12-20",
      time: "6:00 PM",
      location: "Community Center",
      description: "Annual Christmas concert open to the public",
      attendees: 150,
      status: "planned",
      rehearsals: ["2024-12-15", "2024-12-18"]
    },
    {
      id: 4,
      title: "Spring Recital",
      type: "recital",
      date: "2024-05-15",
      time: "3:00 PM",
      location: "Parish Hall",
      description: "Showcasing individual and small group performances",
      attendees: 80,
      status: "confirmed",
      rehearsals: ["2024-05-10", "2024-05-13"]
    }
  ];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || event.type === filterType;
    const matchesStatus = filterStatus === "all" || event.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "performance": return "default";
      case "rehearsal": return "secondary";
      case "concert": return "destructive";
      case "recital": return "outline";
      default: return "secondary";
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "confirmed": return "default";
      case "planned": return "secondary";
      case "completed": return "outline";
      default: return "secondary";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!user) {
    return <div>Access denied</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground">Event Management</h1>
              <p className="text-muted-foreground mt-2">Schedule and manage choir events and performances</p>
            </div>
            {isAdmin && (
              <Button className="bg-gradient-primary text-primary-foreground shadow-elegant">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            )}
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events by title, description, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Types</option>
              <option value="performance">Performances</option>
              <option value="rehearsal">Rehearsals</option>
              <option value="concert">Concerts</option>
              <option value="recital">Recitals</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Status</option>
              <option value="planned">Planned</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </div>
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Badge variant={getTypeBadgeVariant(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge variant={getStatusBadgeVariant(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-3 text-muted-foreground" />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-3 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-3 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-3 text-muted-foreground" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  {event.rehearsals.length > 0 && (
                    <div className="pt-3 border-t">
                      <h4 className="text-sm font-medium mb-2">Rehearsal Schedule:</h4>
                      <div className="space-y-1">
                        {event.rehearsals.map((rehearsal, index) => (
                          <div key={index} className="text-xs text-muted-foreground">
                            • {formatDate(rehearsal)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-3 border-t">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {isAdmin && (
                      <Button size="sm" variant="outline" className="flex-1">
                        Edit Event
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;