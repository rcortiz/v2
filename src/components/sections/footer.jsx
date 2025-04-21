"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";

import { FaCodeBranch, FaRegStar } from "react-icons/fa6";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [repoDetails, setRepoDetails] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    setYear(new Date().getFullYear());

    const fetchRepoDetails = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/repos/rcortiz/my-portfolio-v2",
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
    <footer className="container mb-6 flex w-full flex-col-reverse items-center justify-center gap-y-4 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-y-1 text-center md:text-start">
        <span className="font-cera text-xs">
          Coded using{" "}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-tx-accent"
          >
            Visual Studio Code
          </a>{" "}
          and designed using{" "}
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-tx-accent"
          >
            Figma
          </a>
        </span>
        <span className="font-cera text-xs">&copy; {year} Ralph Ortiz</span>
      </div>
      <div className="mt-2 flex items-center gap-x-4 gap-y-2">
        <div
          data-tooltip-id="stars"
          data-tooltip-content="GitHub stars count"
          className="flex items-center justify-center space-x-2"
        >
          <FaRegStar size="15px" />
          <p className="text-xs leading-none">{repoDetails.stars}</p>
        </div>
        <Tooltip id="stars" />
        <div
          data-tooltip-id="forks"
          data-tooltip-content="GitHub forks count"
          className="flex items-center justify-center space-x-2"
        >
          <FaCodeBranch size="13px" />
          <p className="text-xs leading-none">{repoDetails.forks}</p>
        </div>
        <Tooltip id="forks" />
      </div>
    </footer>
  );
};

export default Footer;
