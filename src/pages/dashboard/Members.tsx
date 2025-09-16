import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, UserPlus, Mail, Phone, MapPin } from "lucide-react";

const Members = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const mockMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      voicePart: "Soprano",
      role: "member",
      joinDate: "2023-01-15",
      status: "active",
      address: "123 Main St, City, State"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 987-6543",
      voicePart: "Tenor",
      role: "section_leader",
      joinDate: "2022-09-20",
      status: "active",
      address: "456 Oak Ave, City, State"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 456-7890",
      voicePart: "Alto",
      role: "member",
      joinDate: "2023-03-10",
      status: "inactive",
      address: "789 Pine St, City, State"
    },
    {
      id: 4,
      name: "David Thompson",
      email: "d.thompson@email.com",
      phone: "+1 (555) 321-9876",
      voicePart: "Bass",
      role: "admin",
      joinDate: "2021-05-05",
      status: "active",
      address: "321 Elm St, City, State"
    }
  ];

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.voicePart.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "admin": return "destructive";
      case "section_leader": return "default";
      default: return "secondary";
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    return status === "active" ? "default" : "secondary";
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
              <h1 className="text-3xl font-playfair font-bold text-foreground">Member Management</h1>
              <p className="text-muted-foreground mt-2">Manage choir members and their information</p>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members by name, email, or voice part..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Roles</option>
              <option value="member">Members</option>
              <option value="section_leader">Section Leaders</option>
              <option value="admin">Administrators</option>
            </select>
          </div>

          {/* Members Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant={getRoleBadgeVariant(member.role)}>
                          {member.role.replace('_', ' ')}
                        </Badge>
                        <Badge variant={getStatusBadgeVariant(member.status)}>
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {member.address}
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Voice Part:</span>
                      <span className="text-muted-foreground">{member.voicePart}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="font-medium">Joined:</span>
                      <span className="text-muted-foreground">{new Date(member.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No members found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;