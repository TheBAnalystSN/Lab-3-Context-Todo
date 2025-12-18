import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? " Switch to Dark" : " Switch to Light"}
    </button>
  );
};

export default ThemeToggle;
