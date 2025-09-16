import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Settings as SettingsIcon, Bell, Mail, Users, Music, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    // General Settings
    choirName: "Mount Sinai Outreach Worship Choir",
    description: "A vibrant worship choir dedicated to spreading God's love through music",
    contactEmail: "info@msowchoir.org",
    contactPhone: "+1 (555) 123-4567",
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    eventReminders: true,
    practiceReminders: true,
    
    // Member Settings
    allowSelfRegistration: false,
    requireApproval: true,
    publicDirectory: false,
    
    // Music Settings
    allowMemberUploads: false,
    requireMusicApproval: true,
    enableSheetMusicSharing: true,
    
    // System Settings
    maintenanceMode: false,
    backupFrequency: "weekly",
    dataRetention: "2_years"
  });

  const handleSaveSettings = () => {
    // Here you would typically save to a backend
    toast({
      title: "Settings saved successfully",
      description: "Your changes have been applied.",
    });
  };

  const handleInputChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
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
              <h1 className="text-3xl font-playfair font-bold text-foreground">System Settings</h1>
              <p className="text-muted-foreground mt-2">Configure choir management system preferences</p>
            </div>
            <Button onClick={handleSaveSettings} className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>

          <div className="space-y-6">
            {/* General Settings */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="w-5 h-5 mr-2 text-primary" />
                  General Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="choirName">Choir Name</Label>
                    <Input
                      id="choirName"
                      value={settings.choirName}
                      onChange={(e) => handleInputChange('choirName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={settings.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    value={settings.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-primary" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send email notifications to members</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="smsNotifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send text message notifications</p>
                  </div>
                  <Switch
                    id="smsNotifications"
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleInputChange('smsNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="eventReminders">Event Reminders</Label>
                    <p className="text-sm text-muted-foreground">Automatic reminders for upcoming events</p>
                  </div>
                  <Switch
                    id="eventReminders"
                    checked={settings.eventReminders}
                    onCheckedChange={(checked) => handleInputChange('eventReminders', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="practiceReminders">Practice Reminders</Label>
                    <p className="text-sm text-muted-foreground">Reminders for practice sessions</p>
                  </div>
                  <Switch
                    id="practiceReminders"
                    checked={settings.practiceReminders}
                    onCheckedChange={(checked) => handleInputChange('practiceReminders', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Member Management Settings */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Member Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="allowSelfRegistration">Allow Self Registration</Label>
                    <p className="text-sm text-muted-foreground">Let users register themselves</p>
                  </div>
                  <Switch
                    id="allowSelfRegistration"
                    checked={settings.allowSelfRegistration}
                    onCheckedChange={(checked) => handleInputChange('allowSelfRegistration', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="requireApproval">Require Admin Approval</Label>
                    <p className="text-sm text-muted-foreground">New members need approval</p>
                  </div>
                  <Switch
                    id="requireApproval"
                    checked={settings.requireApproval}
                    onCheckedChange={(checked) => handleInputChange('requireApproval', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="publicDirectory">Public Member Directory</Label>
                    <p className="text-sm text-muted-foreground">Make member directory publicly visible</p>
                  </div>
                  <Switch
                    id="publicDirectory"
                    checked={settings.publicDirectory}
                    onCheckedChange={(checked) => handleInputChange('publicDirectory', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Music Settings */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Music className="w-5 h-5 mr-2 text-primary" />
                  Music Library Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="allowMemberUploads">Allow Member Uploads</Label>
                    <p className="text-sm text-muted-foreground">Let members upload sheet music</p>
                  </div>
                  <Switch
                    id="allowMemberUploads"
                    checked={settings.allowMemberUploads}
                    onCheckedChange={(checked) => handleInputChange('allowMemberUploads', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="requireMusicApproval">Require Music Approval</Label>
                    <p className="text-sm text-muted-foreground">New music needs admin approval</p>
                  </div>
                  <Switch
                    id="requireMusicApproval"
                    checked={settings.requireMusicApproval}
                    onCheckedChange={(checked) => handleInputChange('requireMusicApproval', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableSheetMusicSharing">Enable Sheet Music Sharing</Label>
                    <p className="text-sm text-muted-foreground">Allow downloading of sheet music</p>
                  </div>
                  <Switch
                    id="enableSheetMusicSharing"
                    checked={settings.enableSheetMusicSharing}
                    onCheckedChange={(checked) => handleInputChange('enableSheetMusicSharing', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* System Maintenance */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="w-5 h-5 mr-2 text-primary" />
                  System Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Temporarily disable public access</p>
                  </div>
                  <Switch
                    id="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleInputChange('maintenanceMode', checked)}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <select
                      id="backupFrequency"
                      value={settings.backupFrequency}
                      onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dataRetention">Data Retention</Label>
                    <select
                      id="dataRetention"
                      value={settings.dataRetention}
                      onChange={(e) => handleInputChange('dataRetention', e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="1_year">1 Year</option>
                      <option value="2_years">2 Years</option>
                      <option value="5_years">5 Years</option>
                      <option value="indefinite">Indefinite</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;