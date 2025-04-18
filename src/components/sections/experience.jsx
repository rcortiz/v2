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
          <div className="w-full md:w-4/5">
            <div className="flex justify-between md:justify-start">
              <div>
                <Skeleton className="h-6 w-48" />
              </div>
              <div className="md:hidden">
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            <div className="pb-2 pt-1">
              <Skeleton className="mt-2 h-5 w-40" />
            </div>
            <div className="pb-4">
              <Skeleton className="mt-3 h-5 w-full max-w-md" />
              <Skeleton className="mt-3 h-5 w-full max-w-md" />
              <Skeleton className="mt-3 h-5 w-full max-w-md" />
              <Skeleton className="mt-3 h-5 w-full max-w-md" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((index) => (
                <Skeleton key={index} className="mb-1 h-6 w-16" />
              ))}
            </div>
          </div>
          <div className="hidden w-full text-right md:block md:w-1/5">
            <Skeleton className="ml-auto h-6 w-28" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-4/5">
          <div className="flex justify-between md:justify-start">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="flex items-center">
                {company}
                <span className="ml-1">
                  <ArrowUpRightIcon />
                </span>
              </h3>
            </a>
            <p className="text-sm md:hidden">{year}</p>
          </div>
          <p className="pb-2 pt-1">{role}</p>
          <div className="pb-2">
            {responsibility.map((item, index) => (
              <p key={index} className="pb-4 text-primary/75">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
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
        <p className="hidden w-full text-right md:block md:w-1/5">{year}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
