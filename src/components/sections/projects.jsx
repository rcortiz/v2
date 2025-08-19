import { FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = ({ category, title, description, techstacks, link }) => {
  return (
    <Card className="flex grow flex-col">
      <CardHeader>
        <code className="text-xs">{category}</code>
        <h1 className="text-xl">{title}</h1>
      </CardHeader>
      <CardContent className="flex-1 pb-10">
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
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button>
            Learn More <FaArrowRight className="ml-2" size="14px" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Projects;
