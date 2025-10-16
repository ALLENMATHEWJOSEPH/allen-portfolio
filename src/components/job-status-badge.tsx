import * as React from "react";
import { Badge } from "@/components/ui/badge";

/**
 * Shows your current professional status (e.g. Open to Work, Available for Freelance).
 * You can update the text or add logic to pull it dynamically from somewhere later.
 */
export function JobStatusBadge() {
  return (
    <Badge variant="secondary" className="flex items-center gap-1">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span>Open to Work</span>
    </Badge>
  );
}
