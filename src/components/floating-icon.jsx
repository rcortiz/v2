import { motion, useReducedMotion } from "framer-motion";

const FloatingIcon = ({
  IconComponent,
  BackgroundComponent,
  className,
  animateProps,
  transitionProps,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={`absolute flex items-center justify-center ${className}`}
      animate={shouldReduceMotion ? undefined : animateProps}
      transition={transitionProps}
      aria-hidden="true"
    >
      <BackgroundComponent
        className="absolute inset-0 h-full w-full text-primary"
        aria-hidden="true"
      />
      <IconComponent className="relative z-10 h-[52%] w-[52%] text-primary invert" />
    </motion.figure>
  );
};

export default FloatingIcon;
