import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Users,
  Music,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  User,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";

const DashboardSidebar = () => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const adminMenuItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Members", url: "/dashboard/members", icon: Users },
    { title: "Music Library", url: "/dashboard/music", icon: Music },
    { title: "Events", url: "/dashboard/events", icon: Calendar },
    { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ];

  const memberMenuItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "My Schedule", url: "/dashboard/schedule", icon: Calendar },
    { title: "Music Library", url: "/dashboard/music", icon: Music },
    { title: "Practice Notes", url: "/dashboard/notes", icon: FileText },
    { title: "My Profile", url: "/dashboard/profile", icon: User },
  ];

  const menuItems = isAdmin ? adminMenuItems : memberMenuItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-gradient-hero text-primary-foreground transition-all duration-300 shadow-elegant`}>
      {/* Header */}
      <div className="p-4 border-b border-primary-foreground/20">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-playfair font-bold text-lg">MWOW</h2>
                <p className="text-xs opacity-80">{isAdmin ? 'Admin Panel' : 'Member Portal'}</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-primary-foreground/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{user?.name}</p>
              <p className="text-xs opacity-80">
                {isAdmin ? 'Administrator' : user?.voicePart}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.url)
                  ? 'bg-primary-foreground/20 text-primary-foreground font-medium'
                  : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && <span className="font-inter">{item.title}</span>}
            </Link>
          ))}
        </div>
      </nav>

      {/* Public Site Link */}
      {!collapsed && (
        <div className="p-4 border-t border-primary-foreground/20">
          <Link
            to="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-inter">Public Site</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;