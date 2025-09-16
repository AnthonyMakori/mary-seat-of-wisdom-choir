import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeDrawer from "@/components/ThemeDrawer";
import Index from "./pages/Index";
import About from "./pages/About";
import Media from "./pages/Media";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/dashboard/Members";
import MusicLibrary from "./pages/dashboard/Music";
import Events from "./pages/dashboard/Events";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import MySchedule from "./pages/dashboard/Schedule";
import PracticeNotes from "./pages/dashboard/Notes";
import MyProfile from "./pages/dashboard/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/media" element={<Media />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/members" element={<Members />} />
              <Route path="/dashboard/music" element={<MusicLibrary />} />
              <Route path="/dashboard/events" element={<Events />} />
              <Route path="/dashboard/analytics" element={<Analytics />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/schedule" element={<MySchedule />} />
              <Route path="/dashboard/notes" element={<PracticeNotes />} />
              <Route path="/dashboard/profile" element={<MyProfile />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <ThemeDrawer />
        </AuthProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
