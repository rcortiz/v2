"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.24, ease: "easeOut" },
              y: {
                type: "spring",
                stiffness: 220,
                damping: 28,
                mass: 0.75,
              },
            }
      }
      className="transform-gpu will-change-[opacity,transform]"
    >
      {children}
    </motion.div>
  );
}
