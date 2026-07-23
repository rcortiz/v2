import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const sideClasses = {
  bottom:
    "left-1/2 top-[calc(100%+8px)] -translate-x-1/2 -translate-y-1 group-hover/link-tooltip:translate-y-0 group-focus-visible/link-tooltip:translate-y-0",
  top: "bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 translate-y-1 group-hover/link-tooltip:translate-y-0 group-focus-visible/link-tooltip:translate-y-0",
};

const TooltipContent = ({ children, side = "bottom" }) => (
  <span
    role="tooltip"
    className={cn(
      "pointer-events-none absolute z-[80] w-max max-w-56 border-2 border-primary bg-background px-2.5 py-1.5 text-center font-inter text-xs font-medium text-primary opacity-0 shadow-[3px_3px_0_hsl(var(--primary))] transition-[opacity,transform] duration-150 group-hover/link-tooltip:opacity-100 group-focus-visible/link-tooltip:opacity-100",
      sideClasses[side],
    )}
  >
    {children}
  </span>
);

const TooltipAnchor = React.forwardRef(
  ({ tooltip, tooltipSide = "bottom", className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("group/link-tooltip relative", className)}
      {...props}
    >
      {children}
      <TooltipContent side={tooltipSide}>{tooltip}</TooltipContent>
    </a>
  ),
);
TooltipAnchor.displayName = "TooltipAnchor";

const TooltipLink = React.forwardRef(
  ({ tooltip, tooltipSide = "bottom", className, children, ...props }, ref) => (
    <Link
      ref={ref}
      className={cn("group/link-tooltip relative", className)}
      {...props}
    >
      {children}
      <TooltipContent side={tooltipSide}>{tooltip}</TooltipContent>
    </Link>
  ),
);
TooltipLink.displayName = "TooltipLink";

export { TooltipAnchor, TooltipLink };
