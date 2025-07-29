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
    //this to make the dark theme as the default one, so if no theme was saved in the local storage
    //(means this is the first visit) the default theme will be set to dark
    return true;
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
      className="absolute md:relative left-1/2 md:left-auto  md:-translate-x-1/2 flex items-center justify-center 0 rounded-full  transition-all duration-300 ease-in-out  hover:scale-110 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-target"
    >
      <SunIcon
        className={`absolute transition-all duration-500 ease-in-out text-yellow-500 w-full  ${
          isDarkMode
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-90"
        }`}
      />
      <MoonIcon
        className={`absolute transition-all duration-500 ease-in-out text-yellow-500 w-full ${
          isDarkMode
            ? "opacity-0 scale-50 rotate-90"
            : "opacity-100 scale-100 rotate-0"
        }`}
      />
    </button>
  );
};
export default DarkModeToggle;
