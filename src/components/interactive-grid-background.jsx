"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 32;
const SAMPLE_SIZE = 8;
const BULGE_RADIUS = 160;
const BULGE_STRENGTH = 32;

const InteractiveGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return undefined;

    const finePointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let width = 0;
    let height = 0;
    let frameId = null;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let influence = 0;
    let targetInfluence = 0;
    let gridColor = "";

    const updateGridColor = () => {
      const gridLine = getComputedStyle(document.documentElement)
        .getPropertyValue("--grid-line")
        .trim();

      gridColor = `hsl(${gridLine} / 0.08)`;
    };

    const warpPoint = (x, y) => {
      if (influence < 0.001) return [x, y];

      const deltaX = x - currentX;
      const deltaY = y - currentY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance === 0 || distance >= BULGE_RADIUS) return [x, y];

      const displacement =
        Math.sin((distance / BULGE_RADIUS) * Math.PI) *
        BULGE_STRENGTH *
        influence;

      return [
        x + (deltaX / distance) * displacement,
        y + (deltaY / distance) * displacement,
      ];
    };

    const drawGrid = () => {
      context.clearRect(0, 0, width, height);
      context.beginPath();

      for (let x = 0; x <= width; x += GRID_SIZE) {
        for (let y = 0; y <= height; y += SAMPLE_SIZE) {
          const [warpedX, warpedY] = warpPoint(x, y);

          if (y === 0) {
            context.moveTo(warpedX, warpedY);
          } else {
            context.lineTo(warpedX, warpedY);
          }
        }
      }

      for (let y = 0; y <= height; y += GRID_SIZE) {
        for (let x = 0; x <= width; x += SAMPLE_SIZE) {
          const [warpedX, warpedY] = warpPoint(x, y);

          if (x === 0) {
            context.moveTo(warpedX, warpedY);
          } else {
            context.lineTo(warpedX, warpedY);
          }
        }
      }

      context.strokeStyle = gridColor;
      context.lineWidth = 1;
      context.stroke();
    };

    const animate = () => {
      const easing = reducedMotionQuery.matches ? 1 : 0.16;

      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;
      influence += (targetInfluence - influence) * easing;
      drawGrid();

      const isSettled =
        Math.abs(targetX - currentX) < 0.1 &&
        Math.abs(targetY - currentY) < 0.1 &&
        Math.abs(targetInfluence - influence) < 0.002;

      if (isSettled) {
        currentX = targetX;
        currentY = targetY;
        influence = targetInfluence;
        drawGrid();
        frameId = null;
        return;
      }

      frameId = requestAnimationFrame(animate);
    };

    const requestDraw = () => {
      if (frameId === null) frameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawGrid();
    };

    const handlePointerMove = (event) => {
      if (!finePointerQuery.matches || reducedMotionQuery.matches) return;

      targetX = event.clientX;
      targetY = event.clientY;
      targetInfluence = 1;
      requestDraw();
    };

    const handlePointerLeave = (event) => {
      if (event.relatedTarget) return;
      targetInfluence = 0;
      requestDraw();
    };

    const handleMediaChange = () => {
      targetInfluence = 0;
      requestDraw();
    };

    const handleThemeChange = () => {
      updateGridColor();
      drawGrid();
    };

    document.body.classList.add("has-interactive-grid");
    updateGridColor();
    resizeCanvas();

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerout", handlePointerLeave);
    finePointerQuery.addEventListener("change", handleMediaChange);
    reducedMotionQuery.addEventListener("change", handleMediaChange);

    return () => {
      document.body.classList.remove("has-interactive-grid");
      themeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerLeave);
      finePointerQuery.removeEventListener("change", handleMediaChange);
      reducedMotionQuery.removeEventListener("change", handleMediaChange);

      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default InteractiveGridBackground;
