import { useAuth } from "@/contexts/AuthContext";
import AdminDashboard from "@/components/AdminDashboard";
import MemberDashboard from "@/components/MemberDashboard";

const Dashboard = () => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair text-foreground">Access Denied</h2>
          <p className="text-muted-foreground">Please log in to access the dashboard.</p>
        </div>
      </div>
    );
  }

  return isAdmin ? <AdminDashboard /> : <MemberDashboard />;
};

export default Dashboard;