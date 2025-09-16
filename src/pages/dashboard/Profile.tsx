import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Music, Calendar, Save, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MyProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    voicePart: user?.voicePart || "Soprano",
    joinDate: "2023-01-15",
    bio: "Passionate about worship music and serving God through song. Been singing in choirs for over 10 years.",
    emergencyContact: "Jane Doe - (555) 987-6543",
    medicalNotes: "No known allergies or medical conditions",
    availability: {
      sunday: true,
      wednesday: true,
      saturday: false,
      special_events: true
    },
    skills: ["Vocal Performance", "Sight Reading", "Piano"],
    experience: "10+ years",
    achievements: [
      "Solo performance at Easter 2023",
      "Perfect attendance award 2023",
      "Choir member of the month - June 2023"
    ]
  });

  const handleSaveProfile = () => {
    // Here you would typically save to a backend
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully.",
    });
  };

  const handleInputChange = (key: string, value: any) => {
    setProfile(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (!user) {
    return <div>Access denied</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground">My Profile</h1>
              <p className="text-muted-foreground mt-2">Manage your personal information and choir details</p>
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button onClick={handleSaveProfile} className="bg-gradient-primary text-primary-foreground shadow-elegant">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Profile Summary */}
            <div className="lg:col-span-1">
              <Card className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="relative mx-auto">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                        {getInitials(profile.name)}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <CardTitle className="mt-4">{profile.name}</CardTitle>
                  <Badge variant="default" className="mt-2">
                    {profile.voicePart}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                    {profile.email}
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    {profile.phone}
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    Joined {new Date(profile.joinDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm">
                    <Music className="w-4 h-4 mr-2 text-muted-foreground" />
                    {profile.experience} experience
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="mt-6 hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {profile.achievements.map((achievement, index) => (
                      <Badge key={index} variant="outline" className="block text-center py-2">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="voicePart">Voice Part</Label>
                      <select
                        id="voicePart"
                        value={profile.voicePart}
                        onChange={(e) => handleInputChange('voicePart', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="Soprano">Soprano</option>
                        <option value="Alto">Alto</option>
                        <option value="Tenor">Tenor</option>
                        <option value="Bass">Bass</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profile.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      disabled={!isEditing}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact & Medical */}
              <Card className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Emergency Contact & Medical Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      value={profile.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medicalNotes">Medical Notes</Label>
                    <Textarea
                      id="medicalNotes"
                      value={profile.medicalNotes}
                      onChange={(e) => handleInputChange('medicalNotes', e.target.value)}
                      disabled={!isEditing}
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Experience */}
              <Card className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="w-5 h-5 mr-2 text-primary" />
                    Skills & Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level</Label>
                      <select
                        id="experience"
                        value={profile.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;