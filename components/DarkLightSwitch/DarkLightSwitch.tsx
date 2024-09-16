"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <FaSun className="text-yellow-500 " onClick={() => setTheme("light")} />
      ) : (
        <FaMoon className="text-black" onClick={() => setTheme("dark")} />
      )}
    </>
  );
}
