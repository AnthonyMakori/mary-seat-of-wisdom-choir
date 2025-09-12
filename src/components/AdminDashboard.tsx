import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Music,
  Calendar,
  FileText,
  Settings,
  PlusCircle,
  BarChart3,
  LogOut,
  Bell
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Members", value: "45", icon: Users, change: "+3 this month" },
    { title: "Active Songs", value: "128", icon: Music, change: "+12 new" },
    { title: "Upcoming Events", value: "8", icon: Calendar, change: "Next: Sunday Mass" },
    { title: "Practice Sessions", value: "24", icon: FileText, change: "This month" },
  ];

  const recentActivities = [
    { action: "New member joined", user: "Maria Santos", time: "2 hours ago", type: "member" },
    { action: "Song uploaded", user: "Fr. Michael", time: "5 hours ago", type: "music" },
    { action: "Event created", user: "Admin", time: "1 day ago", type: "event" },
    { action: "Practice scheduled", user: "Choir Master", time: "2 days ago", type: "practice" },
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
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}
              </p>
            </div>
            <div className="flex items-center space-x-4">
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
                  <CardTitle>Member Management</CardTitle>
                  <CardDescription>Manage choir members and their roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Member management interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="music">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Music Library</CardTitle>
                  <CardDescription>Manage songs, sheet music, and practice materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Music library interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Event Management</CardTitle>
                  <CardDescription>Schedule and manage choir events and performances</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Event management interface would go here...</p>
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