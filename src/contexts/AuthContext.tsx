import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member";
  voicePart?: "Soprano" | "Alto" | "Tenor" | "Bass";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
  isMember: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const mockUsers: Record<string, { password: string; user: User }> = {
  "admin@mwow.choir": {
    password: "admin123",
    user: {
      id: "1",
      name: "Fr. Michael Director",
      email: "admin@mwow.choir",
      role: "admin"
    }
  },
  "soprano@mwow.choir": {
    password: "member123",
    user: {
      id: "2",
      name: "Maria Soprano",
      email: "soprano@mwow.choir",
      role: "member",
      voicePart: "Soprano"
    }
  },
  "alto@mwow.choir": {
    password: "member123",
    user: {
      id: "3",
      name: "Grace Alto",
      email: "alto@mwow.choir",
      role: "member",
      voicePart: "Alto"
    }
  },
  "tenor@mwow.choir": {
    password: "member123",
    user: {
      id: "4",
      name: "John Tenor",
      email: "tenor@mwow.choir",
      role: "member",
      voicePart: "Tenor"
    }
  },
  "bass@mwow.choir": {
    password: "member123",
    user: {
      id: "5",
      name: "David Bass",
      email: "bass@mwow.choir",
      role: "member",
      voicePart: "Bass"
    }
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const userData = mockUsers[email];
    if (userData && userData.password === password) {
      setUser(userData.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.role === "admin";
  const isMember = user?.role === "member";

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isMember }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};