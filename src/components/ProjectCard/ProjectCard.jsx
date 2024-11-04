import React, { useEffect, useState } from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ category, title, description, techstacks, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="grow flex flex-col">
      <CardHeader>
        {isLoading ? (
          <>
            <Skeleton className="h-4 w-1/4 mb-2 rounded-lg" />
            <Skeleton className="h-6 w-1/2" />
          </>
        ) : (
          <>
            <p className="text-xs font-medium ">{category}</p>
            <h1 className="text-xl">{title}</h1>
          </>
        )}
      </CardHeader>
      <CardContent className="flex-1 pb-10">
        {isLoading ? (
          <>
            <Skeleton className="h-4 w-full mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-6 w-full" />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-sm mb-4">{description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {techstacks.map((tech, index) => (
                <Badge
                  key={index}
                  className="flex justify-center text-center whitespace-nowrap"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-end items-end">
        {isLoading ? (
          <Skeleton className="h-10 w-24" />
        ) : (
          <a href={link} target="_blank">
            <Button>
              Learn More <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
