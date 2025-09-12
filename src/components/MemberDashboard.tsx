import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Calendar,
  FileText,
  User,
  LogOut,
  Play,
  Download,
  Clock,
  MapPin
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

const MemberDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const upcomingEvents = [
    { title: "Sunday Mass", date: "Dec 15, 2024", time: "10:00 AM", location: "Main Church" },
    { title: "Christmas Concert", date: "Dec 22, 2024", time: "7:00 PM", location: "Parish Hall" },
    { title: "New Year Service", date: "Jan 1, 2025", time: "12:00 PM", location: "Main Church" },
  ];

  const practiceSchedule = [
    { day: "Wednesday", time: "7:00 PM - 9:00 PM", focus: "Christmas Carols" },
    { day: "Saturday", time: "4:00 PM - 6:00 PM", focus: "Sunday Mass Songs" },
    { day: "Sunday", time: "8:30 AM - 9:30 AM", focus: "Pre-service Rehearsal" },
  ];

  const songLibrary = [
    { title: "Ave Maria", composer: "Schubert", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 10" },
    { title: "Silent Night", composer: "Franz Gruber", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 8" },
    { title: "O Come All Ye Faithful", composer: "Traditional", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 5" },
    { title: "Hallelujah Chorus", composer: "Handel", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 3" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground">
                Member Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}
              </p>
              <Badge variant="secondary" className="mt-2">
                {user?.voicePart} Section
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="music">Music Library</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Events */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-3 bg-muted rounded-lg">
                          <h4 className="font-medium text-foreground">{event.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Practice */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Music className="w-5 h-5 mr-2" />
                      Recent Practice Materials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {songLibrary.slice(0, 3).map((song, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <h4 className="font-medium text-foreground">{song.title}</h4>
                            <p className="text-sm text-muted-foreground">{song.composer}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Play className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="schedule">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Practice Schedule</CardTitle>
                  <CardDescription>Weekly choir practice times and focus areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {practiceSchedule.map((practice, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{practice.day}</h3>
                            <p className="text-muted-foreground">{practice.time}</p>
                          </div>
                          <Badge variant="outline">{practice.focus}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="music">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Music Library</CardTitle>
                  <CardDescription>Access sheet music and practice recordings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {songLibrary.map((song, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{song.title}</h3>
                            <p className="text-muted-foreground">{song.composer}</p>
                            <div className="flex space-x-1 mt-2">
                              {song.parts.map((part) => (
                                <Badge key={part} variant="secondary" className="text-xs">
                                  {part}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button size="sm">
                              <Play className="w-4 h-4 mr-2" />
                              Practice Audio
                            </Button>
                            <Button size="sm" variant="outline">
                              <FileText className="w-4 h-4 mr-2" />
                              Sheet Music
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">
                              Last: {song.lastPracticed}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Member Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <p className="text-foreground">{user?.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="text-foreground">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Voice Part</label>
                      <p className="text-foreground">{user?.voicePart}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Role</label>
                      <Badge variant="secondary">{user?.role}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default MemberDashboard;