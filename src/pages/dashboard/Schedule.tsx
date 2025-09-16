import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, MapPin, CheckCircle, XCircle } from "lucide-react";

const MySchedule = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const mockSchedule = [
    {
      id: 1,
      title: "Weekly Choir Practice",
      type: "rehearsal",
      date: "2024-01-15",
      time: "7:00 PM - 9:00 PM",
      location: "Choir Room",
      description: "Regular weekly practice session",
      status: "confirmed",
      attendance: "attending"
    },
    {
      id: 2,
      title: "Easter Sunday Service",
      type: "performance",
      date: "2024-03-31",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Special Easter celebration performance",
      status: "confirmed",
      attendance: "attending"
    },
    {
      id: 3,
      title: "Section Practice - Soprano/Alto",
      type: "sectional",
      date: "2024-01-20",
      time: "6:00 PM - 7:30 PM",
      location: "Parish Hall",
      description: "Sectional practice for women's voices",
      status: "confirmed",
      attendance: "maybe"
    },
    {
      id: 4,
      title: "Christmas Concert Rehearsal",
      type: "rehearsal",
      date: "2024-12-18",
      time: "7:00 PM - 10:00 PM",
      location: "Community Center",
      description: "Final rehearsal before Christmas concert",
      status: "planned",
      attendance: "not_responded"
    },
    {
      id: 5,
      title: "Outreach Performance",
      type: "outreach",
      date: "2024-02-14",
      time: "2:00 PM - 4:00 PM",
      location: "Senior Center",
      description: "Community outreach performance",
      status: "confirmed",
      attendance: "not_attending"
    }
  ];

  const filteredSchedule = mockSchedule.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || event.attendance === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "performance": return "default";
      case "rehearsal": return "secondary";
      case "sectional": return "outline";
      case "outreach": return "destructive";
      default: return "secondary";
    }
  };

  const getAttendanceBadgeVariant = (attendance: string) => {
    switch (attendance) {
      case "attending": return "default";
      case "maybe": return "secondary";
      case "not_attending": return "destructive";
      case "not_responded": return "outline";
      default: return "outline";
    }
  };

  const getAttendanceIcon = (attendance: string) => {
    switch (attendance) {
      case "attending": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "not_attending": return <XCircle className="w-4 h-4 text-red-500" />;
      default: return null;
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-playfair font-bold text-foreground">My Schedule</h1>
            <p className="text-muted-foreground mt-2">View your upcoming choir events and manage attendance</p>
          </div>

          {/* Search and Filter */}
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
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Events</option>
              <option value="attending">Attending</option>
              <option value="maybe">Maybe</option>
              <option value="not_attending">Not Attending</option>
              <option value="not_responded">Not Responded</option>
            </select>
          </div>

          {/* Schedule List */}
          <div className="space-y-4">
            {filteredSchedule.map((event) => (
              <Card key={event.id} className="hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <Badge variant={getTypeBadgeVariant(event.type)}>
                          {event.type}
                        </Badge>
                        <Badge variant={getAttendanceBadgeVariant(event.attendance)}>
                          {event.attendance.replace('_', ' ')}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="grid gap-3 md:grid-cols-3">
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {getAttendanceIcon(event.attendance)}
                      <div className="flex gap-2">
                        {event.attendance === "not_responded" && (
                          <>
                            <Button size="sm" variant="outline" className="text-green-600 hover:bg-green-50">
                              Attend
                            </Button>
                            <Button size="sm" variant="outline" className="text-yellow-600 hover:bg-yellow-50">
                              Maybe
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                              Decline
                            </Button>
                          </>
                        )}
                        {event.attendance !== "not_responded" && (
                          <Button size="sm" variant="outline">
                            Change Response
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSchedule.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySchedule;