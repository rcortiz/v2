"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [repoDetails, setRepoDetails] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    setYear(new Date().getFullYear());

    const fetchRepoDetails = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/repos/rcortiz/my-portfolio-v2"
        );
        setRepoDetails({
          stars: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch (error) {
        console.error("Error fetching repository details:", error);
      }
    };

    fetchRepoDetails();
  }, []);
  return (
    <footer className="flex items-center flex-col mb-6">
      <p className="text-center font-cera font-bold text-sm">
        &copy; {year} Designed and Built by Ralph Ortiz
      </p>
      <div className="flex items-center flex-row mt-2 space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mx-auto dark:text-white text-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <p className="text-sm font-bold">{repoDetails.stars}</p>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mx-auto dark:text-white text-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
          <p className="text-sm font-bold">{repoDetails.forks}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
