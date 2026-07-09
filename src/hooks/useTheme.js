import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
}
