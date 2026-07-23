const CONFETTI_COLORS = [
  "#80cbc4",
  "#ffab91",
  "#81d4fa",
  "#ce93d8",
  "#aed581",
  "#ffcc80",
];

const CONFETTI_PARTICLES = Array.from({ length: 42 }, (_, index) => {
  const isCircle = index % 3 === 0;
  const isStrip = index % 3 === 1;

  return {
    id: index,
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
    left: `${(index * 29 + 7) % 100}%`,
    width: isCircle ? 7 : isStrip ? 4 : 6,
    height: isCircle ? 7 : isStrip ? 10 : 6,
    radius: isCircle ? "999px" : "1px",
    delay: `${-((index * 0.31) % 5.2)}s`,
    duration: `${3.4 + (index % 6) * 0.32}s`,
    drift: `${((index * 17) % 54) - 27}px`,
    driftEnd: `${((index * 11) % 40) - 20}px`,
    rotationMid: `${90 + (index % 5) * 45}deg`,
    rotation: `${180 + (index % 5) * 90}deg`,
  };
});

const BirthdayConfetti = () => (
  <div
    className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    aria-hidden="true"
  >
    {CONFETTI_PARTICLES.map((particle) => (
      <span
        key={particle.id}
        className="hero-birthday-confetti absolute"
        style={{
          left: particle.left,
          width: particle.width,
          height: particle.height,
          borderRadius: particle.radius,
          backgroundColor: particle.color,
          animationDelay: particle.delay,
          animationDuration: particle.duration,
          "--confetti-drift": particle.drift,
          "--confetti-drift-end": particle.driftEnd,
          "--confetti-rotation-mid": particle.rotationMid,
          "--confetti-rotation": particle.rotation,
        }}
      />
    ))}
  </div>
);

export default BirthdayConfetti;
