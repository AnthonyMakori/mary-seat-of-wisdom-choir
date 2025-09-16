import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Music, Download, Play, FileText, Plus } from "lucide-react";

const MusicLibrary = () => {
  const { user, isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");

  const mockSongs = [
    {
      id: 1,
      title: "Amazing Grace",
      composer: "John Newton",
      arranger: "Traditional",
      genre: "hymn",
      difficulty: "easy",
      duration: "4:30",
      voiceParts: ["Soprano", "Alto", "Tenor", "Bass"],
      tags: ["classic", "worship"],
      dateAdded: "2023-01-15",
      sheetMusic: "/music/amazing-grace.pdf",
      audio: "/music/amazing-grace.mp3"
    },
    {
      id: 2,
      title: "How Great Thou Art",
      composer: "Carl Gustav Boberg",
      arranger: "Stuart K. Hine",
      genre: "hymn",
      difficulty: "medium",
      duration: "5:15",
      voiceParts: ["Soprano", "Alto", "Tenor", "Bass"],
      tags: ["worship", "traditional"],
      dateAdded: "2023-02-10",
      sheetMusic: "/music/how-great-thou-art.pdf",
      audio: "/music/how-great-thou-art.mp3"
    },
    {
      id: 3,
      title: "Hallelujah Chorus",
      composer: "George Frideric Handel",
      arranger: "Original",
      genre: "classical",
      difficulty: "hard",
      duration: "3:45",
      voiceParts: ["Soprano", "Alto", "Tenor", "Bass"],
      tags: ["messiah", "christmas"],
      dateAdded: "2023-03-05",
      sheetMusic: "/music/hallelujah-chorus.pdf",
      audio: "/music/hallelujah-chorus.mp3"
    },
    {
      id: 4,
      title: "Bridge Over Troubled Water",
      composer: "Paul Simon",
      arranger: "Moses Hogan",
      genre: "contemporary",
      difficulty: "medium",
      duration: "4:52",
      voiceParts: ["Soprano", "Alto", "Tenor", "Bass"],
      tags: ["modern", "gospel"],
      dateAdded: "2023-04-12",
      sheetMusic: "/music/bridge-over-troubled-water.pdf",
      audio: "/music/bridge-over-troubled-water.mp3"
    }
  ];

  const filteredSongs = mockSongs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         song.composer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         song.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGenre = filterGenre === "all" || song.genre === filterGenre;
    const matchesDifficulty = filterDifficulty === "all" || song.difficulty === filterDifficulty;
    return matchesSearch && matchesGenre && matchesDifficulty;
  });

  const getDifficultyBadgeVariant = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "secondary";
      case "medium": return "default";
      case "hard": return "destructive";
      default: return "secondary";
    }
  };

  const getGenreBadgeVariant = (genre: string) => {
    switch (genre) {
      case "hymn": return "outline";
      case "classical": return "default";
      case "contemporary": return "secondary";
      default: return "outline";
    }
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
              <h1 className="text-3xl font-playfair font-bold text-foreground">Music Library</h1>
              <p className="text-muted-foreground mt-2">Browse and manage the choir's sheet music collection</p>
            </div>
            {isAdmin && (
              <Button className="bg-gradient-primary text-primary-foreground shadow-elegant">
                <Plus className="w-4 h-4 mr-2" />
                Add Music
              </Button>
            )}
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, composer, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Genres</option>
              <option value="hymn">Hymns</option>
              <option value="classical">Classical</option>
              <option value="contemporary">Contemporary</option>
            </select>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Music Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSongs.map((song) => (
              <Card key={song.id} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{song.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">by {song.composer}</p>
                      {song.arranger !== "Original" && (
                        <p className="text-xs text-muted-foreground">arr. {song.arranger}</p>
                      )}
                    </div>
                    <Music className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Badge variant={getGenreBadgeVariant(song.genre)}>
                      {song.genre}
                    </Badge>
                    <Badge variant={getDifficultyBadgeVariant(song.difficulty)}>
                      {song.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Duration:</span>
                      <span className="text-muted-foreground">{song.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Voice Parts:</span>
                      <span className="text-muted-foreground">{song.voiceParts.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Added:</span>
                      <span className="text-muted-foreground">{new Date(song.dateAdded).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {song.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 border-t">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Play className="w-3 h-3 mr-1" />
                      Listen
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <FileText className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSongs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No music found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicLibrary;