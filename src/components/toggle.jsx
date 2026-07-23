import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import ThemeGlyph from "@/components/icons/theme-glyph";

const TRANSITION_DURATION = 700;

const wait = (duration) =>
  new Promise((resolve) => window.setTimeout(resolve, duration));

const ThemeTransitionOverlay = ({ fromDark, toDark, anchor }) => {
  const [glyphDarkMode, setGlyphDarkMode] = useState(fromDark);
  const enterClip = toDark
    ? "inset(100% 0px 0px 0px)"
    : "inset(0px 0px 100% 0px)";

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setGlyphDarkMode(toDark);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [toDark]);

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] overflow-hidden"
      style={{ backgroundColor: fromDark ? "#0a0a0a" : "#ffffff" }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: toDark ? "#0a0a0a" : "#ffffff" }}
        initial={{ clipPath: enterClip }}
        animate={{ clipPath: "inset(0px)" }}
        transition={{
          duration: TRANSITION_DURATION / 1000,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <div
        className="absolute z-10 text-white mix-blend-difference"
        style={{
          left: anchor.left + anchor.width / 2,
          top: anchor.top + anchor.height / 2,
          transform: "translate(-50%, -50%)",
        }}
      >
        <ThemeGlyph darkMode={glyphDarkMode} className="h-6 w-6" />
      </div>
    </div>,
    document.body,
  );
};

const Toggle = () => {
  const buttonRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const [darkMode, setDarkMode] = useState(true);
  const [glyphDarkMode, setGlyphDarkMode] = useState(true);
  const [transitionState, setTransitionState] = useState(null);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const toggleMode = async () => {
    if (isTransitioningRef.current) return;

    setIsButtonPressed(true);

    const nextDarkMode = !darkMode;
    const root = document.documentElement;

    const applyTheme = () => {
      root.classList.toggle("dark", nextDarkMode);
      flushSync(() => setDarkMode(nextDarkMode));
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setGlyphDarkMode(nextDarkMode);
      applyTheme();
      return;
    }

    isTransitioningRef.current = true;
    root.classList.add("theme-transitioning");
    const buttonBounds = buttonRef.current.getBoundingClientRect();
    flushSync(() => {
      setGlyphDarkMode(nextDarkMode);
      setTransitionState({
        fromDark: darkMode,
        toDark: nextDarkMode,
        anchor: {
          left: buttonBounds.left,
          top: buttonBounds.top,
          width: buttonBounds.width,
          height: buttonBounds.height,
        },
      });
    });

    let themeApplied = false;

    try {
      await wait(TRANSITION_DURATION / 2);
      applyTheme();
      themeApplied = true;
      await wait(TRANSITION_DURATION / 2);
    } finally {
      if (!themeApplied) applyTheme();
      setTransitionState(null);
      root.classList.remove("theme-transitioning");
      isTransitioningRef.current = false;
    }
  };

  const releaseButton = () => {
    if (!isTransitioningRef.current) setIsButtonPressed(false);
  };

  return (
    <Button
      ref={buttonRef}
      size="icon"
      onClick={toggleMode}
      onPointerLeave={releaseButton}
      onPointerCancel={releaseButton}
      onBlur={releaseButton}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative h-9 w-9 overflow-hidden p-0 ${
        isButtonPressed
          ? "translate-x-boxShadowX translate-y-boxShadowY shadow-none dark:shadow-none"
          : ""
      }`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <ThemeGlyph darkMode={glyphDarkMode} className="h-6 w-6 text-primary" />
      </div>
      {transitionState && <ThemeTransitionOverlay {...transitionState} />}
    </Button>
  );
};

export default Toggle;
