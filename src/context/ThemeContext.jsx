import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialTheme = () => {
    return localStorage.getItem("theme") || "light";
  };
  const [theme, setTheme] = useState(initialTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    console.log("theme canger", theme);

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
