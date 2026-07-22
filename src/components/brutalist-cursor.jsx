"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const BrutalistCursor = () => {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches);
      document.body.classList.toggle(
        "has-brutalist-cursor",
        mediaQuery.matches,
      );
    };

    const updateCursor = (event) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      });
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    window.addEventListener("pointermove", updateCursor);

    return () => {
      document.body.classList.remove("has-brutalist-cursor");
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      mediaQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", updateCursor);
    };
  }, []);

  if (!enabled) return null;

  return (
    <span aria-hidden="true" ref={cursorRef} className="brutalist-cursor">
      <span className="brutalist-cursor-art">
        <Image
          className="brutalist-cursor-black"
          src="/neobrutal_cursor_mainly_black.svg"
          alt=""
          width={24}
          height={28}
          unoptimized
        />
        <Image
          className="brutalist-cursor-white"
          src="/neobrutal_cursor_mainly_white.svg"
          alt=""
          width={24}
          height={28}
          unoptimized
        />
      </span>
    </span>
  );
};

export default BrutalistCursor;
