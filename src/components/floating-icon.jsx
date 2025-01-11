import { motion } from "framer-motion";

const FloatingIcon = ({
  IconComponent,
  className,
  animateProps,
  transitionProps,
}) => {
  return (
    <motion.figure
      className={`absolute flex items-center justify-center rounded-full bg-primary shadow-lg ${className}`}
      animate={animateProps}
      transition={transitionProps}
    >
      <IconComponent className="h-12 w-12 p-2 text-white dark:text-black" />
    </motion.figure>
  );
};

export default FloatingIcon;
