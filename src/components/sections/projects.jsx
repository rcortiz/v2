import React, { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = ({ category, title, description, techstacks, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="flex grow flex-col">
      <CardHeader>
        {isLoading ? (
          <>
            <Skeleton className="mb-2 h-4 w-1/4 rounded-lg" />
            <Skeleton className="h-6 w-1/2" />
          </>
        ) : (
          <>
            <p className="text-xs font-medium">{category}</p>
            <h1 className="text-xl">{title}</h1>
          </>
        )}
      </CardHeader>
      <CardContent className="flex-1 pb-10">
        {isLoading ? (
          <>
            <Skeleton className="mb-4 h-4 w-full" />
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-6 w-full" />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 text-sm">{description}</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {techstacks.map((tech, index) => (
                <Badge
                  key={index}
                  className="flex justify-center whitespace-nowrap text-center"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        {isLoading ? (
          <Skeleton className="h-10 w-24" />
        ) : (
          <a href={link} target="_blank">
            <Button>
              Learn More <FaArrowRight className="ml-2" size="14px" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
