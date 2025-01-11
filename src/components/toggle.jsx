import React, { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { CgDarkMode } from "react-icons/cg";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button variant="ghost" onClick={toggleMode}>
      <div onClick={toggleMode}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <CgDarkMode size="20px" onClick={toggleMode} />
        </motion.div>
      </div>
    </Button>
  );
};

export default Toggle;
