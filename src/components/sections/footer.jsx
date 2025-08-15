"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center justify-center space-x-2">
              <FaRegStar size="15px" />
              <p className="text-xs leading-none">{repoDetails?.stars ?? 0}</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {repoDetails?.stars ?? 0}{" "}
            {repoDetails?.stars === 1 ? "person starred" : "people starred"}{" "}
            this project
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center justify-center space-x-2">
              <FaCodeBranch size="13px" />
              <p className="text-xs leading-none">{repoDetails?.forks ?? 0}</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {repoDetails?.forks ?? 0}{" "}
            {repoDetails?.forks === 1 ? "person forked" : "people forked"} this
            project
          </TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
