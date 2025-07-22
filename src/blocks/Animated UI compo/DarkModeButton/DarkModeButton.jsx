import { useState, useEffect } from "react";

import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const DarkModeToggle = () => {
  // State to track the current theme, initialized from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return false;
  });

  // Effect to apply the theme class to the <html> element and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 right-0 md:right-4 lg:right-8 md:left-auto flex items-center justify-center w-fit bg-white dark:bg-slate-800 rounded-full  transition-all duration-300 ease-in-out  hover:scale-110  "
    >
      <SunIcon
        className={`absolute transition-all duration-500 ease-in-out text-yellow-500 w-6 md:w-8 ${
          isDarkMode
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-90"
        }`}
      />
      <MoonIcon
        className={`absolute transition-all duration-500 ease-in-out text-yellow-500 w-6 md:w-8 ${
          isDarkMode
            ? "opacity-0 scale-50 rotate-90"
            : "opacity-100 scale-100 rotate-0"
        }`}
      />
    </button>
  );
};
export default DarkModeToggle;
