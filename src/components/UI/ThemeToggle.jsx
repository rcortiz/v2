import React, { useState } from "react";

import { Button } from "../UI/ui/button";
import { motion } from "framer-motion";

import { CgDarkMode } from "react-icons/cg";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button variant="ghost" onClick={toggleMode}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <CgDarkMode size="20px" />
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;
