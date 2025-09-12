import { useState } from "react";
import { Menu, X, Music, Users, Calendar, Phone, Play, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/", icon: Music },
    { name: "About", href: "/about", icon: Users },
    { name: "Media", href: "/media", icon: Play },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Music className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-foreground">MSOW</h1>
              <p className="text-xs text-muted-foreground font-inter">Choir</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            {user ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="font-inter"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="font-inter"
                onClick={() => navigate('/login')}
              >
                Member Login
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium py-2 text-lg"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                  {user ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="font-inter w-fit"
                      onClick={() => navigate('/dashboard')}
                    >
                      Dashboard
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="font-inter w-fit"
                      onClick={() => navigate('/login')}
                    >
                      Member Login
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;