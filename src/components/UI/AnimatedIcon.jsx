import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedIcon = ({
  src,
  alt,
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
      <Image src={src} alt={alt} fill className="object-contain p-2" />
    </motion.figure>
  );
};

export default AnimatedIcon;
