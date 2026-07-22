import { FaArrowUpRightFromSquare, FaLocationDot } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";

const ExperienceCard = ({
  role,
  link,
  company,
  year,
  location,
  responsibility,
  techstacks,
  projects,
  current,
  index,
}) => {
  return (
    <li className="relative grid gap-4 pb-10 pl-8 last:pb-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 sm:pl-0">
      <span
        className={`absolute left-0 top-2 z-10 h-3 w-3 rounded-full border-2 border-primary sm:left-[calc(10rem-5px)] ${
          current ? "bg-primary" : "bg-background"
        }`}
        aria-hidden="true"
      />

      <aside className="space-y-2 sm:pt-0.5">
        <p className="whitespace-nowrap font-roboto text-xs font-semibold text-primary">
          {year}
        </p>
        <p className="flex items-center gap-2 font-inter text-[13px] text-primary/60">
          <FaLocationDot className="h-3 w-3 shrink-0" aria-hidden="true" />
          {location}
        </p>
      </aside>

      <article className="min-w-0 border-b-2 border-primary/15 pb-10 sm:pl-1">
        <header className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
                aria-label={`${company} website (opens in a new tab)`}
              >
                <h2 className="text-xl transition-colors group-hover:text-tx-accent">
                  {company}
                </h2>
                <FaArrowUpRightFromSquare
                  className="h-3.5 w-3.5 text-primary/45 transition-colors group-hover:text-tx-accent"
                  aria-hidden="true"
                />
              </a>
              {current && (
                <Badge className="border-primary bg-primary text-primary-foreground">
                  Current role
                </Badge>
              )}
            </div>
            <p className="font-roboto text-sm text-primary/75">{role}</p>
          </div>
          <code className="shrink-0 text-xs text-primary/35">
            {String(index + 1).padStart(2, "0")}
          </code>
        </header>

        <h3 className="mb-2 text-sm">Achievements</h3>
        <ul className="space-y-2.5">
          {responsibility.map((item) => (
            <li
              key={item}
              className="relative pl-5 font-inter text-[14px] leading-relaxed text-primary/75 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 border-l-4 border-primary bg-primary/[0.04] px-4 py-3">
          <h3 className="mb-2 font-roboto text-xs uppercase text-primary/55">
            Projects Handled
          </h3>
          <p className="font-inter text-[14px] text-primary/80">
            {projects.join(" · ")}
          </p>
        </div>

        <div
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {techstacks.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="flex justify-center whitespace-nowrap text-center"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </article>
    </li>
  );
};

export default ExperienceCard;
