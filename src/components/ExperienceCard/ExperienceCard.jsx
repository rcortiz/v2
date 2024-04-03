"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ role, company, year, responsibilities }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={false}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className="w-full border-2 cursor-pointer select-none border-primary rounded-md mb-2 p-4 hover:bg-primary hover:text-secondary">
          <h1>{role}</h1>
          <p className="text-sm">{year}</p>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="p-4">
                <div className="border-l-2 border-primary px-8 py-4">
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
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default ExperienceCard;
