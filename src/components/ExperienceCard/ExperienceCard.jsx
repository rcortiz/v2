"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ role, company, year, responsibilities }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="w-full border-2 cursor-pointer select-none border-primary rounded-md p-4 mb-5 hover:bg-primary hover:text-secondary"
      >
        <h1>{role}</h1>
        <p className="text-sm">{year}</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            layout
            transition={{ type: "spring", ease: "easeInOut" }}
            className="border-l-4 border-primary px-8 py-5 mb-5"
          >
            <div className="mb-6 space-y-1">
              <p className="font-cera font-bold text-xl">{role}</p>
              <p className="text-sm">{company}</p>
              <p className="text-sm">{year}</p>
            </div>
            <div className="space-y-2">
              <p className="font-cera font-medium text-lg">
                Key Responsibilities
              </p>
              <ul className="list-disc list-inside">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceCard;
