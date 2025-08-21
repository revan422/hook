import React, { createContext, useState, useContext } from "react";

// 1. Buat Context
const ThemeContext = createContext();

// 2. Provider untuk Theme
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Komponen tombol
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} style={{ marginTop: "20px", padding: "10px 20px" }}>
      Ganti ke {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

// 4. Aplikasi utama
function ThemedApp() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    transition: "all 0.3s ease-in-out"
  };

  return (
    <div style={styles}>
      <h1>Theme Switcher</h1>
      <ThemeButton />
    </div>
  );
}

// 5. Bungkus dengan Provider
export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}