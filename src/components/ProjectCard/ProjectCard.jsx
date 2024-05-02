import React from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ category, title, description, techstacks, link }) => {
  return (
    <Card className="grow flex flex-col">
      <CardHeader>
        <p className="text-xs font-medium ">{category}</p>
        <h1 className="text-xl">{title}</h1>
      </CardHeader>
      <CardContent className="flex-1 pb-10">
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
      </CardContent>
      <CardFooter className="flex justify-end items-end">
        <a href={link} target="_blank">
          <Button>
            Learn More <ArrowRightIcon className="ml-3 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
