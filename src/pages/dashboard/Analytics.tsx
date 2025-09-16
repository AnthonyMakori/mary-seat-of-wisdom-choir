import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, Music, Calendar, TrendingUp, TrendingDown } from "lucide-react";

const Analytics = () => {
  const { user } = useAuth();

  const analyticsData = {
    totalMembers: 45,
    activeMembers: 38,
    membershipGrowth: 12,
    totalSongs: 156,
    songsThisMonth: 8,
    upcomingEvents: 6,
    completedEvents: 23,
    attendanceRate: 84,
    voicePartDistribution: [
      { part: "Soprano", count: 12, percentage: 27 },
      { part: "Alto", count: 11, percentage: 24 },
      { part: "Tenor", count: 10, percentage: 22 },
      { part: "Bass", count: 12, percentage: 27 }
    ],
    monthlyAttendance: [
      { month: "Jan", attendance: 85 },
      { month: "Feb", attendance: 78 },
      { month: "Mar", attendance: 92 },
      { month: "Apr", attendance: 88 },
      { month: "May", attendance: 84 },
      { month: "Jun", attendance: 90 }
    ],
    recentActivities: [
      { action: "New member joined", member: "Sarah Johnson", date: "2024-01-10" },
      { action: "Song added to library", song: "Amazing Grace", date: "2024-01-08" },
      { action: "Event completed", event: "Sunday Service", date: "2024-01-07" },
      { action: "Rehearsal scheduled", event: "Easter Preparation", date: "2024-01-05" }
    ]
  };

  if (!user) {
    return <div>Access denied</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-playfair font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">Insights and statistics for choir management</p>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.totalMembers}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +{analyticsData.membershipGrowth}% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.activeMembers}</div>
                <div className="text-xs text-muted-foreground">
                  {Math.round((analyticsData.activeMembers / analyticsData.totalMembers) * 100)}% activity rate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Music Library</CardTitle>
                <Music className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.totalSongs}</div>
                <div className="text-xs text-muted-foreground">
                  +{analyticsData.songsThisMonth} songs this month
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.attendanceRate}%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +2% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            {/* Voice Part Distribution */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Voice Part Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {analyticsData.voicePartDistribution.map((part) => (
                  <div key={part.part} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{part.part}</span>
                      <Badge variant="outline">{part.count} members</Badge>
                    </div>
                    <Progress value={part.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground text-right">
                      {part.percentage}%
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Attendance Trend */}
            <Card className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Monthly Attendance Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.monthlyAttendance.map((month) => (
                    <div key={month.month} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{month.month}</span>
                        <span className="text-sm text-muted-foreground">{month.attendance}%</span>
                      </div>
                      <Progress value={month.attendance} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card className="hover:shadow-elegant transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.member && `Member: ${activity.member}`}
                        {activity.song && `Song: ${activity.song}`}
                        {activity.event && `Event: ${activity.event}`}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;