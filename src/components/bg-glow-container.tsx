"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * BgGlowContainer
 * A reusable wrapper that adds a soft, animated glow background
 * to highlight or visually lift any section of your portfolio.
 *
 * Props:
 * - className (optional): Additional Tailwind classes
 * - children: Content placed inside the glowing container
 */
export function BgGlowContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative isolate", className)} {...props}>
      {/* Animated background glow layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 
                   bg-gradient-to-tr from-primary/30 via-purple-500/20 to-blue-400/30 
                   blur-3xl opacity-40 animate-pulse"
      />
      {children}
    </div>
  );
}

export default BgGlowContainer;
