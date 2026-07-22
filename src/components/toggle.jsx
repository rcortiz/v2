import React, { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import MoonIcon from "./icons/moon";
import SunIcon from "./icons/sun";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const toggleMode = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
  };

  return (
    <Button
      size="icon"
      onClick={toggleMode}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerCancel={() => setIsPressed(false)}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      className="relative h-9 w-9 overflow-hidden p-0"
    >
      <motion.div
        key={darkMode ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: isPressed ? 0.82 : isHovered ? 1.12 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute"
      >
        {darkMode ? (
          <MoonIcon className="h-5 w-5 text-primary" />
        ) : (
          <SunIcon className="h-5 w-5 text-primary" />
        )}
      </motion.div>
    </Button>
  );
};

export default Toggle;
