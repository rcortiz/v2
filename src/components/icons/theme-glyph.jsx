import React, { useId } from "react";
import { motion } from "framer-motion";

const shapeTransition = {
  type: "spring",
  stiffness: 190,
  damping: 16,
  mass: 0.8,
};

const ThemeGlyph = ({ darkMode, className = "" }) => {
  const maskId = `theme-glyph-${useId().replaceAll(":", "")}`;
  const state = darkMode ? "dark" : "light";

  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={false}
      animate={state}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <motion.circle
            fill="black"
            initial={false}
            animate={
              darkMode
                ? { cx: 16.25, cy: 8.25, r: 6.35 }
                : { cx: 21, cy: 3, r: 0 }
            }
            transition={shapeTransition}
          />
        </mask>
      </defs>

      <motion.circle
        cx="12"
        cy="12"
        r="7.6"
        fill="currentColor"
        mask={`url(#${maskId})`}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        variants={{
          light: {
            rotate: 0,
            scaleX: 1,
            scaleY: 1,
          },
          dark: {
            rotate: -8,
            scaleX: 0.96,
            scaleY: 1.03,
          },
        }}
        transition={shapeTransition}
      />
    </motion.svg>
  );
};

export default ThemeGlyph;
