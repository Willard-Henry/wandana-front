import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
