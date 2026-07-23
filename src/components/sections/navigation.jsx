"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { TooltipAnchor, TooltipLink } from "@/components/ui/link-tooltip";
import Toggle from "@/components/toggle";
import LiveViewerIndicator from "@/components/live-viewer-indicator";

import {
  FaBars,
  FaFileLines,
  FaGithub,
  FaLinkedinIn,
  FaXmark,
} from "@/components/icons";
import { navLinks } from "@/constants";

const IconTooltip = ({ label, className = "", children }) => {
  return (
    <div className={`group relative flex items-center ${className}`}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] z-20 w-max -translate-x-1/2 -translate-y-1 border-2 border-primary bg-background px-3 py-2 font-space text-xs font-bold text-primary opacity-0 shadow-[3px_3px_0_hsl(var(--primary))] transition-[opacity,transform] duration-150 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {label}
      </span>
    </div>
  );
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200 ${
        isScrolled
          ? "border-primary/10 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
        <LiveViewerIndicator />

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.path}>
                  <TooltipLink
                    href={navLink.path}
                    tooltip={`Go to ${navLink.name} page`}
                    aria-current={
                      pathname === navLink.path ? "page" : undefined
                    }
                    className={`font-space text-base font-medium transition-colors ${
                      pathname === navLink.path
                        ? "text-primary"
                        : "text-primary/50 hover:text-primary"
                    }`}
                  >
                    {navLink.name}
                  </TooltipLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <IconTooltip label="View resume" className="hidden sm:block">
            <Button size="icon" className="h-9 w-9" asChild>
              <a
                href="/Ralph Ortiz - Full Stack Engineer (Latest).pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
              >
                <FaFileLines size="16px" aria-hidden="true" />
              </a>
            </Button>
          </IconTooltip>
          <IconTooltip label="GitHub profile" className="hidden sm:block">
            <Button size="icon" className="h-9 w-9" asChild>
              <a
                href="https://github.com/rcortiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub size="18px" aria-hidden="true" />
              </a>
            </Button>
          </IconTooltip>
          <IconTooltip label="LinkedIn profile" className="hidden sm:block">
            <Button size="icon" className="h-9 w-9" asChild>
              <a
                href="https://www.linkedin.com/in/ralphortiz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn size="17px" aria-hidden="true" />
              </a>
            </Button>
          </IconTooltip>
          <IconTooltip label="Switch theme">
            <Toggle />
          </IconTooltip>
          <Button
            size="icon"
            className="h-9 w-9 p-0 hover:translate-x-0 hover:translate-y-0 hover:shadow-dark active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none dark:hover:translate-x-0 dark:hover:translate-y-0 dark:hover:shadow-light dark:active:translate-x-boxShadowX dark:active:translate-y-boxShadowY dark:active:shadow-none lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <FaXmark size="18px" aria-hidden="true" />
            ) : (
              <FaBars size="18px" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.18,
              type: "tween",
              ease: "easeInOut",
            }}
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full border-b-2 border-primary bg-background shadow-dark dark:shadow-light lg:hidden"
          >
            <ul className="container flex max-w-7xl flex-col py-3">
              {navLinks.map((navLink) => {
                return (
                  <li
                    key={navLink.path}
                    className="border-b border-primary/15 last:border-0"
                  >
                    <TooltipLink
                      href={navLink.path}
                      tooltip={`Go to ${navLink.name} page`}
                      tooltipSide="top"
                      aria-current={
                        pathname === navLink.path ? "page" : undefined
                      }
                      className={`block py-3 font-space font-medium transition-colors ${
                        pathname === navLink.path
                          ? "text-primary"
                          : "text-primary/50 hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {navLink.name}
                    </TooltipLink>
                  </li>
                );
              })}
              <li className="flex items-center gap-2 py-3 sm:hidden">
                <Button size="icon" className="h-9 w-9" asChild>
                  <TooltipAnchor
                    href="/Ralph Ortiz - Full Stack Engineer (Latest).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume"
                    tooltip="View resume"
                    tooltipSide="top"
                  >
                    <FaFileLines size="16px" aria-hidden="true" />
                  </TooltipAnchor>
                </Button>
                <Button size="icon" className="h-9 w-9" asChild>
                  <TooltipAnchor
                    href="https://github.com/rcortiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    tooltip="GitHub profile"
                    tooltipSide="top"
                  >
                    <FaGithub size="18px" aria-hidden="true" />
                  </TooltipAnchor>
                </Button>
                <Button size="icon" className="h-9 w-9" asChild>
                  <TooltipAnchor
                    href="https://www.linkedin.com/in/ralphortiz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    tooltip="LinkedIn profile"
                    tooltipSide="top"
                  >
                    <FaLinkedinIn size="17px" aria-hidden="true" />
                  </TooltipAnchor>
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationBar;
