"use client";

import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
    disableTransitionOnChange
  >
    {children}
  </NextThemeProvider>;
}

export default ThemeProvider;

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 z-50 rounded-full border border-primary skin-bg-gradient p-0 text-foreground transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:hover:bg-slate-950/80"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

export { ModeToggle };
   