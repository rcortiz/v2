const WEEKS = 53;
const DAYS = 7;
const CELL_SIZE = 16;

const getActivityLevel = (week, day) => {
  const score =
    (week * 37 + day * 53 + week * day * 11 + (week % 9) * 17) % 100;

  if (score < 18) return 0;
  if (score < 38) return 1;
  if (score < 59) return 2;
  if (score < 80) return 3;
  return 4;
};

const activity = Array.from({ length: WEEKS * DAYS }, (_, index) => {
  const week = Math.floor(index / DAYS);
  const day = index % DAYS;
  const level = getActivityLevel(week, day);
  const radius = [1.5, 2.1, 2.8, 3.6, 4.5][level];
  const count = level === 0 ? 0 : level * 3 + ((week + day * 3) % 5);

  return {
    id: week + "-" + day,
    cx: week * CELL_SIZE + CELL_SIZE / 2,
    cy: day * CELL_SIZE + CELL_SIZE / 2,
    level,
    radius,
    count,
  };
});

const totalContributions = activity.reduce(
  (total, item) => total + item.count,
  0,
);
const formattedContributionTotal = String(totalContributions).replace(
  /\B(?=(\d{3})+(?!\d))/g,
  ",",
);

const GitHubContributions = () => {
  return (
    <section
      aria-labelledby="github-contributions-heading"
      className="w-full pt-2"
    >
      <div className="mb-5">
        <h2
          id="github-contributions-heading"
          className="font-cera text-xl font-bold"
        >
          GitHub Contributions
        </h2>
        <p className="mt-1 text-sm text-primary/65">
          A year of commits, pull requests, and open-source work.
        </p>
      </div>

      <div className="github-activity-calendar">
        <div className="github-activity-calendar-inner">
          <div
            role="img"
            aria-label="Stylized dot contribution calendar showing a highly active year"
            className="github-activity-matrix"
          >
            <svg
              viewBox={"0 0 " + WEEKS * CELL_SIZE + " " + DAYS * CELL_SIZE}
              aria-hidden="true"
              focusable="false"
            >
              {activity.map((item) => (
                <circle
                  key={item.id}
                  cx={item.cx}
                  cy={item.cy}
                  r={item.radius}
                  className={
                    "github-activity-dot github-activity-dot-" + item.level
                  }
                >
                  <title>
                    {item.count +
                      " contribution" +
                      (item.count === 1 ? "" : "s")}
                  </title>
                </circle>
              ))}
            </svg>
          </div>

          <div className="github-activity-footer">
            <span>
              {formattedContributionTotal} contributions in the last year
            </span>
            <span className="github-activity-legend">
              Less
              {[0, 1, 2, 3, 4].map((level) => (
                <i
                  key={level}
                  className={"github-activity-dot-" + level}
                  aria-hidden="true"
                />
              ))}
              More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
