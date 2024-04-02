"use client";

import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="p-4">
      <p className="text-center font-cera font-bold text-sm">
        &copy; {year} Ralph Ortiz
      </p>
    </footer>
  );
};

export default Footer;
