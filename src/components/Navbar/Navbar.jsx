"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "../ui/button";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { navLinks } from "@/constant";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="container flex justify-between gap-5 py-8 z-10">
        <ThemeToggle />
        <nav className="flex justify-end items-center max-container">
          <div className="hidden md:block">
            <ul className="flex-1 flex items-center gap-14 max-lg:hidden">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index}>
                    <Link href={navLink.path}>
                      <p className="font-cera text-md transition duration-150 ease-in-out hover:-translate-y-1 hover:font-bold">
                        {navLink.name}
                      </p>
                    </Link>
                  </li>
                );
              })}
              <Button>
                <a href="/RalphOrtizResumeV3.pdf" download>
                  <span>Resume</span>
                </a>
              </Button>
            </ul>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer transition-all"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Button variant="ghost" size="icon">
                <Cross1Icon className="h-6 w-6" />
              </Button>
            ) : (
              <Button variant="ghost" size="icon">
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            )}
          </div>
        </nav>
      </header>
      <div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              ref={navMenuRef}
              initial={{ translateX: "100%" }}
              animate={{ translateX: "0%" }}
              exit={{ translateX: "100%" }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "easeInOut",
              }}
              style={{ overflow: "hidden" }}
              className="flex fixed w-[70%] h-screen right-0 lg:bottom-auto bg-background z-10 border-primary"
            >
              <ul className="lg:hidden flex flex-col mx-auto gap-10 items-center justify-center h-full">
                {navLinks.map((navLink, index) => {
                  return (
                    <li key={index}>
                      <Link href={navLink.path}>
                        <p
                          className="font-cera text-md transition duration-150 ease-in-out hover:scale-125 hover:font-bold"
                          onClick={() => {
                            setIsMenuOpen(false);
                          }}
                        >
                          {navLink.name}
                        </p>
                      </Link>
                    </li>
                  );
                })}
                <Button>
                  <a href="/RalphOrtizResumeV3.pdf" download>
                    <span>Resume</span>
                  </a>
                </Button>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
