import React, { useState } from "react";

import { Button } from "../ui/button";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <Button variant="ghost" onClick={toggleMode}>
      {darkMode ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
