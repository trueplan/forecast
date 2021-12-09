import * as React from "react";
import {
  PriorityOneIcon,
  PriorityTwoIcon,
  PriorityThreeIcon,
  PriorityFourIcon,
} from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { StyledPriority } from "./styles";
import type { PriorityProps, PriorityVariants } from "./types";

const priorityIcon = (
  variant: PriorityVariants
): React.ReactElement | undefined => {
  switch (variant) {
    case "one":
      return <PriorityOneIcon decorative color="red" size="small" />;
    case "two":
      return <PriorityTwoIcon decorative color="lilac" size="small" />;
    case "three":
      return <PriorityThreeIcon decorative color="blue" size="small" />;
    case "four":
      return <PriorityFourIcon decorative color="gray70" size="small" />;
  }
};

const Priority = React.forwardRef<HTMLSpanElement, PriorityProps>(
  ({ children, variant, ...props }, ref) => {
    return (
      <Box css={{ display: "inline-flex", alignItems: "center", gap: "$20" }}>
        {priorityIcon(variant)}
        <StyledPriority ref={ref} {...props}>
          {children}
        </StyledPriority>
      </Box>
    );
  }
);

Priority.displayName = "Priority";

export { Priority };
export * from "./types";
