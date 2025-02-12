import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "blue" | "purple";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = (localStorage.getItem("theme") as Theme) || "light";
  const [theme, setThemeState] = useState<Theme>(storedTheme);

  const setTheme = (newTheme: Theme) => {
    console.log("Setting theme to:", newTheme); // Debugging log
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme); // Update state
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    console.log("Theme applied:", theme); // Debugging log
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
