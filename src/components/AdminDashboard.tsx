import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Music,
  Calendar,
  FileText,
  Settings,
  PlusCircle,
  BarChart3,
  LogOut,
  Bell,
  Search,
  Filter,
  Edit,
  Trash2,
  Upload,
  Download
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isAddSongOpen, setIsAddSongOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  const stats = [
    { title: "Total Members", value: "45", icon: Users, change: "+3 this month" },
    { title: "Active Songs", value: "128", icon: Music, change: "+12 new" },
    { title: "Upcoming Events", value: "8", icon: Calendar, change: "Next: Sunday Mass" },
    { title: "Practice Sessions", value: "24", icon: FileText, change: "This month" },
  ];

  const members = [
    { id: 1, name: "Maria Santos", email: "maria@email.com", voicePart: "Soprano", joinDate: "2023-01-15", status: "Active" },
    { id: 2, name: "John Smith", email: "john@email.com", voicePart: "Tenor", joinDate: "2023-02-20", status: "Active" },
    { id: 3, name: "Grace Johnson", email: "grace@email.com", voicePart: "Alto", joinDate: "2023-03-10", status: "Active" },
    { id: 4, name: "David Brown", email: "david@email.com", voicePart: "Bass", joinDate: "2023-04-05", status: "Inactive" },
    { id: 5, name: "Sarah Wilson", email: "sarah@email.com", voicePart: "Soprano", joinDate: "2023-05-12", status: "Active" },
  ];

  const songs = [
    { id: 1, title: "Ave Maria", composer: "Schubert", genre: "Classical", dateAdded: "2023-12-01", status: "Active" },
    { id: 2, title: "Amazing Grace", composer: "John Newton", genre: "Hymn", dateAdded: "2023-12-05", status: "Active" },
    { id: 3, title: "Hallelujah", composer: "Leonard Cohen", genre: "Contemporary", dateAdded: "2023-12-08", status: "Draft" },
    { id: 4, title: "Silent Night", composer: "Franz Gruber", genre: "Christmas", dateAdded: "2023-12-10", status: "Active" },
    { id: 5, title: "How Great Thou Art", composer: "Stuart Hine", genre: "Hymn", dateAdded: "2023-12-12", status: "Active" },
  ];

  const events = [
    { id: 1, title: "Christmas Concert", date: "2024-12-22", time: "19:00", location: "Main Church", attendees: 200, status: "Scheduled" },
    { id: 2, title: "Sunday Mass", date: "2024-12-15", time: "10:00", location: "Main Church", attendees: 150, status: "Recurring" },
    { id: 3, title: "Easter Service", date: "2025-03-30", time: "09:00", location: "Cathedral", attendees: 300, status: "Planned" },
    { id: 4, title: "Wedding Ceremony", date: "2024-12-28", time: "14:00", location: "Chapel", attendees: 80, status: "Confirmed" },
  ];

  const recentActivities = [
    { action: "New member joined", user: "Maria Santos", time: "2 hours ago", type: "member" },
    { action: "Song uploaded", user: "Fr. Michael", time: "5 hours ago", type: "music" },
    { action: "Event created", user: "Admin", time: "1 day ago", type: "event" },
    { action: "Practice scheduled", user: "Choir Master", time: "2 days ago", type: "practice" },
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.voicePart.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || member.voicePart.toLowerCase() === filterBy.toLowerCase() || member.status.toLowerCase() === filterBy.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.composer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || song.genre.toLowerCase() === filterBy.toLowerCase() || song.status.toLowerCase() === filterBy.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || event.status.toLowerCase() === filterBy.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggleButton />
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="music">Music Library</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                          <div>
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">by {activity.user}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-xs">
                              {activity.type}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start">
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Add New Member
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Music className="w-4 h-4 mr-2" />
                      Upload New Song
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Event
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      System Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="members">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Member Management</CardTitle>
                      <CardDescription>Manage choir members and their roles</CardDescription>
                    </div>
                    <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <PlusCircle className="w-4 h-4 mr-2" />
                          Add Member
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Member</DialogTitle>
                          <DialogDescription>Add a new member to the choir</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Name</Label>
                            <Input placeholder="Enter full name" />
                          </div>
                          <div>
                            <Label>Email</Label>
                            <Input type="email" placeholder="Enter email address" />
                          </div>
                          <div>
                            <Label>Voice Part</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select voice part" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="soprano">Soprano</SelectItem>
                                <SelectItem value="alto">Alto</SelectItem>
                                <SelectItem value="tenor">Tenor</SelectItem>
                                <SelectItem value="bass">Bass</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsAddMemberOpen(false)}>Cancel</Button>
                          <Button onClick={() => setIsAddMemberOpen(false)}>Add Member</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search members by name, email, or voice part..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="w-48">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Members</SelectItem>
                        <SelectItem value="soprano">Soprano</SelectItem>
                        <SelectItem value="alto">Alto</SelectItem>
                        <SelectItem value="tenor">Tenor</SelectItem>
                        <SelectItem value="bass">Bass</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredMembers.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="secondary">{member.voicePart}</Badge>
                              <Badge variant={member.status === "Active" ? "default" : "outline"}>
                                {member.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
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
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Music Library</CardTitle>
                      <CardDescription>Manage songs, sheet music, and practice materials</CardDescription>
                    </div>
                    <Dialog open={isAddSongOpen} onOpenChange={setIsAddSongOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Upload className="w-4 h-4 mr-2" />
                          Add Song
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Song</DialogTitle>
                          <DialogDescription>Add a new song to the music library</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Title</Label>
                            <Input placeholder="Enter song title" />
                          </div>
                          <div>
                            <Label>Composer</Label>
                            <Input placeholder="Enter composer name" />
                          </div>
                          <div>
                            <Label>Genre</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select genre" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="classical">Classical</SelectItem>
                                <SelectItem value="hymn">Hymn</SelectItem>
                                <SelectItem value="contemporary">Contemporary</SelectItem>
                                <SelectItem value="christmas">Christmas</SelectItem>
                                <SelectItem value="traditional">Traditional</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Notes</Label>
                            <Textarea placeholder="Additional notes about the song..." />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsAddSongOpen(false)}>Cancel</Button>
                          <Button onClick={() => setIsAddSongOpen(false)}>Add Song</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search songs by title, composer, or genre..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="w-48">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Songs</SelectItem>
                        <SelectItem value="classical">Classical</SelectItem>
                        <SelectItem value="hymn">Hymn</SelectItem>
                        <SelectItem value="contemporary">Contemporary</SelectItem>
                        <SelectItem value="christmas">Christmas</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredSongs.map((song) => (
                      <div key={song.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <Music className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{song.title}</h3>
                            <p className="text-sm text-muted-foreground">by {song.composer}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="secondary">{song.genre}</Badge>
                              <Badge variant={song.status === "Active" ? "default" : "outline"}>
                                {song.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">Added {song.dateAdded}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Event Management</CardTitle>
                      <CardDescription>Schedule and manage choir events and performances</CardDescription>
                    </div>
                    <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Event
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Schedule New Event</DialogTitle>
                          <DialogDescription>Create a new choir event or performance</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Event Title</Label>
                            <Input placeholder="Enter event title" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Date</Label>
                              <Input type="date" />
                            </div>
                            <div>
                              <Label>Time</Label>
                              <Input type="time" />
                            </div>
                          </div>
                          <div>
                            <Label>Location</Label>
                            <Input placeholder="Enter location" />
                          </div>
                          <div>
                            <Label>Expected Attendees</Label>
                            <Input type="number" placeholder="Number of attendees" />
                          </div>
                          <div>
                            <Label>Description</Label>
                            <Textarea placeholder="Event description..." />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>Cancel</Button>
                          <Button onClick={() => setIsAddEventOpen(false)}>Schedule Event</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search events by title or location..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="w-48">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Events</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="planned">Planned</SelectItem>
                        <SelectItem value="recurring">Recurring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredEvents.map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.location}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="secondary">{event.date} at {event.time}</Badge>
                              <Badge variant={event.status === "Confirmed" ? "default" : "outline"}>
                                {event.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{event.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure system preferences and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Settings interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;