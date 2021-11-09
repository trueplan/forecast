import * as React from "react";
import { StyledBadge } from "./styles";
import type { BadgeProps } from "./types";

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ size = "small", color = "lilac", ...props }, ref) => (
    <StyledBadge size={size} color={color} ref={ref} {...props} />
  )
);

Badge.displayName = "Badge";
