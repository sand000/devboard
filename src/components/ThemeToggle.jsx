import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"} mode</button>
    </div>
  );
}

export default ThemeToggle;
