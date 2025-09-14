import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Theme {
  id: string;
  name: string;
  displayName: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  card: string;
  muted: string;
  gradient: string;
}

export const themes: Theme[] = [
  {
    id: "royal-purple",
    name: "Royal Purple",
    displayName: "Royal Purple & Gold",
    primary: "271 91% 25%", // Deep purple
    secondary: "45 93% 47%", // Gold
    accent: "271 91% 35%", // Lighter purple
    background: "0 0% 100%", // White
    card: "0 0% 98%", // Off white
    muted: "240 5% 96%", // Light gray
    gradient: "linear-gradient(135deg, hsl(271 91% 25%), hsl(45 93% 47%))"
  },
  {
    id: "ocean-teal",
    name: "Ocean Teal",
    displayName: "Ocean Teal & Coral",
    primary: "173 58% 39%", // Teal
    secondary: "14 91% 60%", // Coral
    accent: "173 58% 50%", // Light teal
    background: "0 0% 100%",
    card: "0 0% 98%",
    muted: "240 5% 96%",
    gradient: "linear-gradient(135deg, hsl(173 58% 39%), hsl(14 91% 60%))"
  },
  {
    id: "forest-emerald",
    name: "Forest Emerald",
    displayName: "Forest Green & Emerald",
    primary: "158 64% 22%", // Forest green
    secondary: "160 84% 39%", // Emerald
    accent: "158 64% 30%", // Lighter forest
    background: "0 0% 100%",
    card: "0 0% 98%",
    muted: "240 5% 96%",
    gradient: "linear-gradient(135deg, hsl(158 64% 22%), hsl(160 84% 39%))"
  },
  {
    id: "sunset-crimson",
    name: "Sunset Crimson",
    displayName: "Sunset Crimson & Rose",
    primary: "348 83% 47%", // Crimson
    secondary: "330 100% 71%", // Rose
    accent: "348 83% 60%", // Light crimson
    background: "0 0% 100%",
    card: "0 0% 98%",
    muted: "240 5% 96%",
    gradient: "linear-gradient(135deg, hsl(348 83% 47%), hsl(330 100% 71%))"
  },
  {
    id: "midnight-blue",
    name: "Midnight Blue",
    displayName: "Midnight Blue & Silver",
    primary: "220 39% 11%", // Midnight blue
    secondary: "210 14% 83%", // Silver
    accent: "220 39% 20%", // Lighter midnight
    background: "0 0% 100%",
    card: "0 0% 98%",
    muted: "240 5% 96%",
    gradient: "linear-gradient(135deg, hsl(220 39% 11%), hsl(210 14% 83%))"
  },
  {
    id: "warm-amber",
    name: "Warm Amber",
    displayName: "Warm Amber & Bronze",
    primary: "35 91% 40%", // Amber
    secondary: "30 67% 34%", // Bronze
    accent: "35 91% 50%", // Light amber
    background: "0 0% 100%",
    card: "0 0% 98%",
    muted: "240 5% 96%",
    gradient: "linear-gradient(135deg, hsl(35 91% 40%), hsl(30 67% 34%))"
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  isThemeDrawerOpen: boolean;
  setThemeDrawerOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [isThemeDrawerOpen, setThemeDrawerOpen] = useState(false);

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('selected-theme', themeId);
      applyThemeToRoot(theme);
    }
  };

  const applyThemeToRoot = (theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--gradient-hero', theme.gradient);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.id === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
        applyThemeToRoot(theme);
      }
    } else {
      applyThemeToRoot(currentTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      isThemeDrawerOpen,
      setThemeDrawerOpen
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};