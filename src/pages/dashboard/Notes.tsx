import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Search, FileText, Plus, Edit, Trash2, Music, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PracticeNotes = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    category: "practice",
    song: ""
  });

  const mockNotes = [
    {
      id: 1,
      title: "Amazing Grace - Practice Notes",
      content: "Remember to breathe properly during the long phrases. Focus on the harmony in measures 16-20. Director wants more emotion in the final chorus.",
      category: "practice",
      song: "Amazing Grace",
      date: "2024-01-10",
      lastEdited: "2024-01-10"
    },
    {
      id: 2,
      title: "Easter Service Preparation",
      content: "Special rehearsal scheduled for March 28th. Need to memorize all four songs by March 25th. Dress code: formal church attire.",
      category: "performance",
      song: null,
      date: "2024-01-08",
      lastEdited: "2024-01-12"
    },
    {
      id: 3,
      title: "Sectional Practice - Alto Part",
      content: "Worked on the alto harmony for 'How Great Thou Art'. Need to practice the low notes in verse 2. Meeting again next Tuesday.",
      category: "sectional",
      song: "How Great Thou Art",
      date: "2024-01-05",
      lastEdited: "2024-01-05"
    },
    {
      id: 4,
      title: "Voice Warm-up Exercises",
      content: "New warm-up routine from director: 1. Lip trills (5 min), 2. Humming scales (3 min), 3. Vowel exercises (7 min). Practice daily.",
      category: "technique",
      song: null,
      date: "2024-01-03",
      lastEdited: "2024-01-08"
    }
  ];

  const [notes, setNotes] = useState(mockNotes);

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (note.song && note.song.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "all" || note.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryBadgeVariant = (category: string) => {
    switch (category) {
      case "practice": return "default";
      case "performance": return "destructive";
      case "sectional": return "secondary";
      case "technique": return "outline";
      default: return "secondary";
    }
  };

  const handleAddNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both title and content.",
        variant: "destructive"
      });
      return;
    }

    const note = {
      id: Date.now(),
      ...newNote,
      date: new Date().toISOString().split('T')[0],
      lastEdited: new Date().toISOString().split('T')[0]
    };

    setNotes([note, ...notes]);
    setNewNote({ title: "", content: "", category: "practice", song: "" });
    setIsAddingNote(false);
    
    toast({
      title: "Note added",
      description: "Your practice note has been saved successfully."
    });
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
    toast({
      title: "Note deleted",
      description: "The practice note has been removed."
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
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground">Practice Notes</h1>
              <p className="text-muted-foreground mt-2">Keep track of your choir practice observations and reminders</p>
            </div>
            <Button 
              onClick={() => setIsAddingNote(true)}
              className="bg-gradient-primary text-primary-foreground shadow-elegant"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Note
            </Button>
          </div>

          {/* Add Note Form */}
          {isAddingNote && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add New Practice Note</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input
                      placeholder="Enter note title"
                      value={newNote.title}
                      onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Song (Optional)</label>
                    <Input
                      placeholder="Related song name"
                      value={newNote.song}
                      onChange={(e) => setNewNote({...newNote, song: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select
                    value={newNote.category}
                    onChange={(e) => setNewNote({...newNote, category: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="practice">Practice</option>
                    <option value="performance">Performance</option>
                    <option value="sectional">Sectional</option>
                    <option value="technique">Technique</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content</label>
                  <Textarea
                    placeholder="Write your practice notes here..."
                    value={newNote.content}
                    onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddNote}>Save Note</Button>
                  <Button variant="outline" onClick={() => setIsAddingNote(false)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notes by title, content, or song..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Categories</option>
              <option value="practice">Practice</option>
              <option value="performance">Performance</option>
              <option value="sectional">Sectional</option>
              <option value="technique">Technique</option>
            </select>
          </div>

          {/* Notes Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{note.title}</CardTitle>
                      <div className="flex gap-2 items-center">
                        <Badge variant={getCategoryBadgeVariant(note.category)}>
                          {note.category}
                        </Badge>
                        {note.song && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Music className="w-3 h-3" />
                            {note.song}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {note.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Created: {new Date(note.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-3 h-3 mr-1" />
                      Updated: {new Date(note.lastEdited).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || filterCategory !== "all" 
                  ? "No notes found matching your criteria." 
                  : "No practice notes yet. Start by adding your first note!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeNotes;