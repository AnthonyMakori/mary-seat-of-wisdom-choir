import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Palette } from "lucide-react";

const ThemeToggleButton = ({ className = "" }: { className?: string }) => {
  const { setThemeDrawerOpen } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      className={`font-inter ${className}`}
      onClick={() => setThemeDrawerOpen(true)}
    >
      <Palette className="w-4 h-4 mr-2" />
      Themes
    </Button>
  );
};

export default ThemeToggleButton;