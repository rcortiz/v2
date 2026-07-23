import { FaCodeBranch, FaRegStar } from "@/components/icons";
import { TooltipAnchor } from "@/components/ui/link-tooltip";

const repositoryUrl = "https://github.com/rcortiz/my-portfolio-v2";

const RepositoryMetric = ({ href, label, tooltip, value, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-2 font-inter text-[0.65rem] font-semibold text-primary"
      aria-label={label}
    >
      {children}
      <span>{value}</span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+10px)] right-0 z-10 w-max max-w-52 translate-y-1 border-2 border-primary bg-background px-3 py-2 text-center font-inter text-[0.65rem] font-bold text-primary opacity-0 shadow-[3px_3px_0_hsl(var(--primary))] transition-[opacity,transform] duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        {tooltip}
      </span>
    </a>
  );
};

const getRepositoryDetails = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/rcortiz/my-portfolio-v2",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return { stars: 0, forks: 0 };

    const repository = await response.json();

    return {
      stars: repository.stargazers_count ?? 0,
      forks: repository.forks_count ?? 0,
    };
  } catch {
    return { stars: 0, forks: 0 };
  }
};

const Footer = async () => {
  const year = new Date().getFullYear();
  const repository = await getRepositoryDetails();

  return (
    <footer className="container mb-6 flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-y-4 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-y-1 text-center md:text-start">
        <span className="font-inter text-[0.65rem]">
          Coded using{" "}
          <TooltipAnchor
            href="https://www.cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary"
            tooltip="Visit Cursor website"
            tooltipSide="top"
          >
            Cursor
          </TooltipAnchor>{" "}
          and designed using{" "}
          <TooltipAnchor
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary"
            tooltip="Visit Figma website"
            tooltipSide="top"
          >
            Figma
          </TooltipAnchor>
        </span>
        <span className="font-inter text-[0.65rem]">
          &copy; {year} Ralph Dev
        </span>
      </div>
      <div className="mt-2 flex items-center gap-5">
        <RepositoryMetric
          href={repositoryUrl}
          label={`${repository.stars} GitHub stars`}
          tooltip={`${repository.stars} ${repository.stars === 1 ? "dev backs" : "devs back"} this build`}
          value={repository.stars}
        >
          <FaRegStar size="15px" aria-hidden="true" />
        </RepositoryMetric>
        <RepositoryMetric
          href={`${repositoryUrl}/fork`}
          label={`${repository.forks} GitHub forks`}
          tooltip={`${repository.forks} ${repository.forks === 1 ? "dev forked" : "devs forked"} this repo`}
          value={repository.forks}
        >
          <FaCodeBranch size="15px" aria-hidden="true" />
        </RepositoryMetric>
      </div>
    </footer>
  );
};

export default Footer;
