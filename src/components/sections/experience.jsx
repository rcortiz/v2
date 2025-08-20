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

            <div className="flex justify-between text-sm text-primary/90 md:justify-end md:gap-4 md:text-base">
              <code>{role}</code>
              <span className="hidden md:inline">|</span>
              <code>{year}</code>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            {responsibility.map((item, index) => (
              <p key={index} className="text-sm text-primary/75 md:text-base">
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
