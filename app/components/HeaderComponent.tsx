"use client";

import { useState, useEffect, type FC } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export interface HeaderComponentProps {}

const HeaderComponent: FC<HeaderComponentProps> = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-auto max-w-fit flex items-center p-2 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl z-50 transition-all duration-300 pointer-events-auto hover:bg-white/80 dark:hover:bg-black/50">
      <motion.button
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="p-3 rounded-full bg-transparent hover:bg-pink-100 dark:hover:bg-pink-900/30 cursor-pointer text-pink-600 dark:text-pink-400 transition-colors"
        type="button"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>
    </header>
  );
};

export default HeaderComponent;
