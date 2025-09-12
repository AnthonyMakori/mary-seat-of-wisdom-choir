import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Music, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const mockCredentials = [
    { email: "admin@msow.choir", password: "admin123", role: "Admin" },
    { email: "soprano@msow.choir", password: "member123", role: "Soprano Member" },
    { email: "alto@msow.choir", password: "member123", role: "Alto Member" },
    { email: "tenor@msow.choir", password: "member123", role: "Tenor Member" },
    { email: "bass@msow.choir", password: "member123", role: "Bass Member" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant">
              <Music className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-playfair text-3xl font-bold text-foreground">MSOW Choir</h1>
          <p className="text-muted-foreground font-inter">Member Portal</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-playfair">Sign in</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@msow.choir"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Mock Credentials */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-playfair">Demo Credentials</CardTitle>
            <CardDescription>
              Use these credentials to test the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockCredentials.map((cred, index) => (
                <div
                  key={index}
                  className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
                  onClick={() => {
                    setEmail(cred.email);
                    setPassword(cred.password);
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{cred.role}</p>
                      <p className="text-xs text-muted-foreground">{cred.email}</p>
                    </div>
                    <p className="text-xs font-mono bg-background px-2 py-1 rounded">
                      {cred.password}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Click any credential above to auto-fill the form
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;