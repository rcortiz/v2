import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-full bg-primary p-2">
        <Image
          src="/hero-img-transparent.png"
          alt="Portrait of Ralph Ortiz"
          height={220}
          width={220}
          priority
          sizes="220px"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Avatar;
