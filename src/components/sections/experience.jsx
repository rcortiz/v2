"use client";

import React, { useState, useEffect } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "../ui/badge";
import ArrowUpRightIcon from "../icons/arrow-up-right";

const ExperienceCard = ({
  role,
  link,
  company,
  year,
  responsibility,
  techstacks,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="py-5">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full">
            <div className="flex flex-col gap-1 pb-2 md:flex-row md:items-center md:justify-between">
              <div className="pb-2">
                <Skeleton className="h-6 w-48" />
              </div>

              <div className="flex justify-between pb-4 md:justify-start md:gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>

            <div className="space-y-2 pb-2 pt-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>

            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((index) => (
                <Skeleton key={index} className="h-6 w-16" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full">
          <div className="flex flex-col gap-1 pb-2 md:flex-row md:items-center md:justify-between">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="flex items-center text-base font-semibold">
                {company}
                <span className="ml-1">
                  <ArrowUpRightIcon />
                </span>
              </h3>
            </a>

            <div className="flex justify-between text-primary/90 md:justify-end md:gap-4">
              <code>{role}</code>
              <span className="hidden md:inline">|</span>
              <code>{year}</code>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            {responsibility.map((item, index) => (
              <p key={index} className="text-primary/75">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {techstacks.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="mb-1 flex justify-center whitespace-nowrap text-center"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
