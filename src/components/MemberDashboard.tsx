import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Music,
  Calendar,
  FileText,
  User,
  LogOut,
  Play,
  Download,
  Clock,
  MapPin,
  Search,
  Filter,
  Volume2,
  Eye,
  Bookmark,
  Star
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const MemberDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");

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
    { id: 1, title: "Ave Maria", composer: "Schubert", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 10", genre: "Classical", difficulty: "Intermediate", isFavorite: true },
    { id: 2, title: "Silent Night", composer: "Franz Gruber", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 8", genre: "Christmas", difficulty: "Easy", isFavorite: false },
    { id: 3, title: "O Come All Ye Faithful", composer: "Traditional", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 5", genre: "Christmas", difficulty: "Easy", isFavorite: true },
    { id: 4, title: "Hallelujah Chorus", composer: "Handel", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 3", genre: "Classical", difficulty: "Advanced", isFavorite: false },
    { id: 5, title: "Amazing Grace", composer: "John Newton", parts: ["S", "A", "T", "B"], lastPracticed: "Dec 1", genre: "Hymn", difficulty: "Easy", isFavorite: true },
    { id: 6, title: "How Great Thou Art", composer: "Stuart Hine", parts: ["S", "A", "T", "B"], lastPracticed: "Nov 28", genre: "Hymn", difficulty: "Intermediate", isFavorite: false },
  ];

  const practiceNotes = [
    { id: 1, song: "Ave Maria", section: "Soprano", note: "Work on breath control in measures 45-52", date: "Dec 10", priority: "High" },
    { id: 2, song: "Silent Night", section: "All", note: "Remember to observe the ritardando in the final verse", date: "Dec 8", priority: "Medium" },
    { id: 3, song: "Hallelujah Chorus", section: "Bass", note: "Entry at measure 33 needs more confidence", date: "Dec 3", priority: "High" },
    { id: 4, song: "O Come All Ye Faithful", section: user?.voicePart || "All", note: "Beautiful harmonies in verse 2, keep up the good work!", date: "Dec 5", priority: "Low" },
  ];

  const filteredSongs = songLibrary.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.composer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || 
                         song.genre.toLowerCase() === filterBy.toLowerCase() ||
                         song.difficulty.toLowerCase() === filterBy.toLowerCase() ||
                         (filterBy === "favorites" && song.isFavorite) ||
                         song.parts.some(part => part === user?.voicePart?.charAt(0));
    return matchesSearch && matchesFilter;
  });

  const filteredNotes = practiceNotes.filter(note => {
    const matchesSearch = note.song.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.note.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || 
                         note.priority.toLowerCase() === filterBy.toLowerCase() ||
                         note.section === user?.voicePart ||
                         note.section === "All";
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
              <ThemeToggleButton />
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
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="music">Music Library</TabsTrigger>
              <TabsTrigger value="notes">Practice Notes</TabsTrigger>
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
                  <div className="flex items-center space-x-4 mt-4">
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
                        <SelectItem value="favorites">My Favorites</SelectItem>
                        <SelectItem value="classical">Classical</SelectItem>
                        <SelectItem value="hymn">Hymn</SelectItem>
                        <SelectItem value="christmas">Christmas</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredSongs.map((song) => (
                      <div key={song.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <Music className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-foreground">{song.title}</h3>
                                {song.isFavorite && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                              </div>
                              <p className="text-muted-foreground">by {song.composer}</p>
                              <div className="flex space-x-2 mt-2">
                                {song.parts.map((part) => (
                                  <Badge 
                                    key={part} 
                                    variant={part === user?.voicePart?.charAt(0) ? "default" : "secondary"} 
                                    className="text-xs"
                                  >
                                    {part}
                                  </Badge>
                                ))}
                                <Badge variant="outline" className="text-xs">{song.genre}</Badge>
                                <Badge variant="outline" className="text-xs">{song.difficulty}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="flex space-x-2">
                              <Button size="sm">
                                <Play className="w-4 h-4 mr-2" />
                                Practice Audio
                              </Button>
                              <Button size="sm" variant="outline">
                                <Volume2 className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <FileText className="w-4 h-4 mr-2" />
                                Sheet Music
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                              Last practiced: {song.lastPracticed}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Practice Notes
                  </CardTitle>
                  <CardDescription>Personal notes and feedback from rehearsals</CardDescription>
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search notes by song or content..."
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
                        <SelectItem value="all">All Notes</SelectItem>
                        <SelectItem value="high">High Priority</SelectItem>
                        <SelectItem value="medium">Medium Priority</SelectItem>
                        <SelectItem value="low">Low Priority</SelectItem>
                        <SelectItem value={user?.voicePart || "all"}>My Voice Part</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredNotes.map((note) => (
                      <div key={note.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-foreground">{note.song}</h3>
                              <Badge variant="secondary" className="text-xs">{note.section}</Badge>
                              <Badge 
                                variant={
                                  note.priority === "High" ? "destructive" : 
                                  note.priority === "Medium" ? "default" : "outline"
                                } 
                                className="text-xs"
                              >
                                {note.priority} Priority
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-2">{note.note}</p>
                            <p className="text-xs text-muted-foreground">Added on {note.date}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Bookmark className="w-4 h-4" />
                            </Button>
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