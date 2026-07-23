const WEEKS = 53;
const DAYS = 7;
const CELL_SIZE = 16;
const LABEL_WIDTH = 32;
const MONTH_LABEL_HEIGHT = 20;
const CELL_INSET = 2;
const CELL_WIDTH = CELL_SIZE - CELL_INSET * 2;

const months = [
  ["Aug", 0],
  ["Sep", 4],
  ["Oct", 9],
  ["Nov", 13],
  ["Dec", 17],
  ["Jan", 22],
  ["Feb", 26],
  ["Mar", 30],
  ["Apr", 35],
  ["May", 39],
  ["Jun", 44],
  ["Jul", 48],
];

const weekdays = [
  ["Mon", 1],
  ["Wed", 3],
  ["Fri", 5],
];

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
  const count =
    level === 0
      ? 0
      : level + ((week + day * 3) % 2) + (week % 4 === 0 && day === 5 ? 1 : 0);

  return {
    id: week + "-" + day,
    x: LABEL_WIDTH + week * CELL_SIZE + CELL_INSET,
    y: MONTH_LABEL_HEIGHT + day * CELL_SIZE + CELL_INSET,
    level,
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
          className="font-space text-xl font-bold"
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
            aria-label="GitHub-style contribution calendar showing a highly active year"
            className="github-activity-matrix"
          >
            <svg
              viewBox={`0 0 ${LABEL_WIDTH + WEEKS * CELL_SIZE} ${MONTH_LABEL_HEIGHT + DAYS * CELL_SIZE}`}
              aria-hidden="true"
              focusable="false"
            >
              {months.map(([month, week]) => (
                <text
                  key={month}
                  x={LABEL_WIDTH + week * CELL_SIZE + CELL_INSET}
                  y="12"
                  className="github-activity-label"
                >
                  {month}
                </text>
              ))}

              {weekdays.map(([weekday, day]) => (
                <text
                  key={weekday}
                  x="0"
                  y={MONTH_LABEL_HEIGHT + day * CELL_SIZE + 11}
                  className="github-activity-label"
                >
                  {weekday}
                </text>
              ))}

              {activity.map((item) => (
                <rect
                  key={item.id}
                  x={item.x}
                  y={item.y}
                  width={CELL_WIDTH}
                  height={CELL_WIDTH}
                  rx="2"
                  className={`github-activity-cell github-activity-level-${item.level}`}
                >
                  <title>
                    {item.count +
                      " contribution" +
                      (item.count === 1 ? "" : "s")}
                  </title>
                </rect>
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
                  className={`github-activity-level-${level}`}
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
