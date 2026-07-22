import {
  FaArrowUpRightFromSquare,
  FaGripVertical,
  FaReact,
  FaShopify,
} from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = ({
  category,
  title,
  description,
  techstacks,
  link,
  dragHandleProps,
  isDragging,
}) => {
  const CategoryIcon = category === "Shopify Custom App" ? FaShopify : FaReact;

  return (
    <Card asChild className="flex h-full flex-col">
      <article>
        <CardHeader className="p-5 pb-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <CategoryIcon className="h-4 w-4" aria-hidden="true" />
              <code className="text-xs">{category}</code>
            </div>
            <button
              type="button"
              title="Drag to reorder"
              aria-label={`Reorder ${title}. Use arrow keys or drag.`}
              aria-pressed={isDragging}
              className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 touch-none place-items-center border-2 border-transparent text-primary/50 transition-colors hover:border-primary hover:bg-main hover:text-main-foreground focus-visible:border-primary focus-visible:bg-main focus-visible:text-main-foreground focus-visible:outline-none"
              {...dragHandleProps}
            >
              <FaGripVertical aria-hidden="true" />
            </button>
          </div>
          <h2 className="text-lg">{title}</h2>
        </CardHeader>
        <CardContent className="flex-1 px-5 pb-5">
          <p className="mb-3 font-inter text-[14px]">{description}</p>
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
        <CardFooter className="flex items-end justify-end px-5 pb-5">
          <Button size="sm" asChild>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${title} (opens in a new tab)`}
            >
              Learn More
              <FaArrowUpRightFromSquare
                className="ml-2"
                size="13px"
                aria-hidden="true"
              />
            </a>
          </Button>
        </CardFooter>
      </article>
    </Card>
  );
};

export default Projects;
