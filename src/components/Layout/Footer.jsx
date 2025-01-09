"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaCodeBranch, FaStar } from "react-icons/fa6";

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
        setRepoDetails({ stars: 0, forks: 0 });
      }
    };
    fetchRepoDetails();
  }, []);

  return (
    <footer className="flex items-center flex-col mb-6 gap-y-2 w-full">
      <p className="text-center font-cera text-xs">
        Developed using{" "}
        <a
          href="https://code.visualstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFAB00] font-bold"
        >
          Visual Studio Code
        </a>{" "}
        and designed using{" "}
        <a
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFAB00] font-bold"
        >
          Figma
        </a>
        .<br />
        &copy; {year} Ralph Ortiz
      </p>
      <div className="flex items-center mt-2 gap-x-4">
        <div className="flex items-center justify-center space-x-1">
          <FaStar size="13px" />
          <p className="text-xs leading-none">{repoDetails.stars}</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <FaCodeBranch size="13px" />
          <p className="text-xs leading-none">{repoDetails.forks}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
