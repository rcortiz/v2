import { Badge } from "../ui/badge";
import ArrowUpRightIcon from "../icons/arrow-up-right";

const ExperienceCard = ({
  role,
  link,
  company,
  year,
  location,
  responsibility,
  techstacks,
}) => {
  return (
    <article className="border-b border-primary/20 py-6 last:border-0">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full">
          <div className="flex flex-col gap-3 pb-2 md:flex-row md:items-start md:justify-between">
            <div className="space-y-1">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <h2 className="flex items-center text-lg font-semibold">
                  {company}
                  <span className="ml-1">
                    <ArrowUpRightIcon />
                  </span>
                </h2>
              </a>
              <code className="block text-sm text-primary/80">{role}</code>
            </div>

            <div className="flex shrink-0 justify-between gap-4 md:flex-col md:items-end md:gap-1">
              <code className="text-sm font-semibold">{year}</code>
              <span className="text-sm text-primary/65">{location}</span>
            </div>
          </div>

          <ul className="list-disc space-y-2 pl-5 pt-3">
            {responsibility.map((item, index) => (
              <li key={index} className="font-inter text-[14px] text-primary/75">
                {item}
              </li>
            ))}
          </ul>

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
    </article>
  );
};

export default ExperienceCard;
