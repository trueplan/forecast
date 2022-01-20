import * as React from "react";
import { StyledBadge } from "./styles";
import type { BadgeProps } from "./types";

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { size = "medium", color = "lilac", fontFamily = "inter", ...props },
    ref
  ) => (
    <StyledBadge
      size={size}
      color={color}
      fontFamily={fontFamily}
      ref={ref}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
