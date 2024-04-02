import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ category, title, description, techstacks }) => {
  return (
    <Card className="min-w-[300px]">
      <CardHeader>
        <p className="text-xs font-medium ">{category}</p>
        <h1 className="text-xl">{title}</h1>
      </CardHeader>
      <CardContent className="h-[180px]">
        <p className="text-sm mb-4">{description}</p>
        <div className="grid grid-cols-3 gap-2">
          {techstacks.map((tech, index) => (
            <Badge key={index} className="flex justify-center">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-end">
        <Link href="/">
          <Button variant="outline">
            Learn More <ArrowRightIcon className="ml-3 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
