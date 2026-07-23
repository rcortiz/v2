import { FaLocationDot } from "@/components/icons";
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
}) => {
  return (
    <li className="relative grid gap-4 pb-10 pl-8 last:pb-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 sm:pl-0">
      <span
        className={`absolute left-[7px] top-2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-primary sm:left-[10rem] ${
          current ? "bg-primary" : "bg-background"
        }`}
        aria-hidden="true"
      />

      <aside className="grid grid-rows-[1.75rem_1.25rem] gap-1">
        <p className="flex items-center whitespace-nowrap font-inter text-xs font-semibold text-primary">
          {year}
        </p>
        <p className="flex items-center gap-2 whitespace-nowrap font-inter text-[13px] leading-5 text-primary/60">
          <FaLocationDot className="h-3 w-3 shrink-0" aria-hidden="true" />
          {location}
        </p>
      </aside>

      <article className="min-w-0 border-b-2 border-primary/15 pb-10 sm:pl-1">
        <header className="mb-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
            aria-label={`${company} website (opens in a new tab)`}
          >
            <h2 className="text-[22px] leading-7 text-primary">{company}</h2>
            <span
              role="tooltip"
              className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 w-max -translate-x-1/2 -translate-y-1 border-2 border-primary bg-background px-2.5 py-1.5 font-inter text-xs font-medium text-primary opacity-0 shadow-[3px_3px_0_hsl(var(--primary))] transition-[opacity,transform] duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
            >
              Visit {company} website
            </span>
          </a>
          <div className="mt-1 flex min-h-5 items-center">
            <p className="font-inter text-sm leading-5 text-primary/75">
              {role}
            </p>
          </div>
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
          <h3 className="mb-2 text-xs uppercase text-primary/55">
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
