"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "../UI/ui/button";
import ThemeToggle from "../UI/ThemeToggle";

import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "@/constants";

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
      <header className="container flex justify-between gap-5 py-8 z-20">
        <ThemeToggle />
        <nav className="flex justify-end items-center max-container">
          <div className="hidden md:block">
            <ul className="flex-1 flex items-center gap-14 max-lg:hidden">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index}>
                    <Link href={navLink.path}>
                      <p className="font-cera text-md">{navLink.name}</p>
                    </Link>
                  </li>
                );
              })}
              <Button>
                <a href="/ORTIZ_Resume.pdf" download>
                  <span>Resume</span>
                </a>
              </Button>
            </ul>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer transition-all z-30"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaXmark size="20px" /> : <FaBars size="20px" />}
          </div>
        </nav>
      </header>
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
            className="flex fixed w-[70%] h-screen right-0 bg-background z-20 border-primary"
          >
            <ul className="lg:hidden flex flex-col mx-auto gap-10 items-center justify-center h-full">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index}>
                    <Link href={navLink.path}>
                      <p
                        className="font-cera text-md"
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
                <a href="/ORTIZ_Resume.pdf" download>
                  <span>Resume</span>
                </a>
              </Button>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
