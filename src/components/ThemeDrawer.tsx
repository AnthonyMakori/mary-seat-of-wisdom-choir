import { useTheme, themes } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Palette, Check, X } from "lucide-react";

const ThemeDrawer = () => {
  const { currentTheme, setTheme, isThemeDrawerOpen, setThemeDrawerOpen } = useTheme();

  return (
    <Drawer open={isThemeDrawerOpen} onOpenChange={setThemeDrawerOpen}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="flex items-center">
            <Palette className="w-6 h-6 mr-2" />
            Choose Your Theme
          </DrawerTitle>
          <DrawerDescription>
            Select a color combination that reflects your style. Changes apply instantly.
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="p-4 pb-0 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <Card 
                key={theme.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg relative ${
                  currentTheme.id === theme.id 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setTheme(theme.id)}
              >
                {currentTheme.id === theme.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{theme.displayName}</CardTitle>
                  <div 
                    className="h-16 rounded-lg shadow-inner"
                    style={{
                      background: theme.gradient
                    }}
                  />
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center">
                      <div 
                        className="w-full h-8 rounded mb-1"
                        style={{ backgroundColor: `hsl(${theme.primary})` }}
                      />
                      <Badge variant="outline" className="text-xs">Primary</Badge>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-full h-8 rounded mb-1"
                        style={{ backgroundColor: `hsl(${theme.secondary})` }}
                      />
                      <Badge variant="outline" className="text-xs">Secondary</Badge>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-full h-8 rounded mb-1"
                        style={{ backgroundColor: `hsl(${theme.accent})` }}
                      />
                      <Badge variant="outline" className="text-xs">Accent</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Click to apply this theme
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <DrawerFooter>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                Current: {currentTheme.displayName}
              </Badge>
            </div>
            <DrawerClose asChild>
              <Button variant="outline">
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ThemeDrawer;