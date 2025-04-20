"use client";

import { useEffect } from "react";
import { useCommandPaletteStore } from "../store/store"; // Make sure this path is correct

export function useCommandPalette() {
  const { toggle } = useCommandPaletteStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        ((e.metaKey || e.ctrlKey) && e.key === "k") ||
        ((e.metaKey || e.ctrlKey) && e.key === "K")
      ) {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);
}
