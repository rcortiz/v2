import React from "react";
import Image from "next/image";

import FloatingIcon from "@/components/floating-icon";
import ExpressIcon from "@/components/icons/express";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwind";
import {
  ExpressTile,
  ReactStar,
  TailwindStar,
} from "@/components/icons/technology-stars";

const Avatar = () => {
  return (
    <div className="relative isolate select-none" aria-label="Ralph Ortiz portrait">
      <figure className="grid h-[200px] w-[200px] place-items-center overflow-hidden rounded-full border-2 border-primary/80 bg-background sm:h-[220px] sm:w-[220px]">
        <Image
          src="/hero-img-transparent.png"
          alt="Portrait of Ralph Ortiz"
          height={200}
          width={200}
          priority
          draggable={false}
          sizes="(min-width: 640px) 200px, 180px"
          className="pointer-events-none h-[180px] w-[180px] object-contain dark:invert sm:h-[200px] sm:w-[200px]"
        />
      </figure>

      <FloatingIcon
        IconComponent={ReactIcon}
        BackgroundComponent={ReactStar}
        className="-left-5 top-11 h-11 w-11"
        animateProps={{ y: [-3, 4, -3], rotate: [-3, 3, -3] }}
        transitionProps={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingIcon
        IconComponent={ExpressIcon}
        BackgroundComponent={ExpressTile}
        className="-right-5 top-1 h-14 w-14"
        animateProps={{ y: [3, -4, 3], rotate: [2, -2, 2] }}
        transitionProps={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingIcon
        IconComponent={TailwindIcon}
        BackgroundComponent={TailwindStar}
        className="-bottom-1 -right-6 h-12 w-12"
        animateProps={{ y: [-4, 3, -4], rotate: [-2, 3, -2] }}
        transitionProps={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Avatar;
