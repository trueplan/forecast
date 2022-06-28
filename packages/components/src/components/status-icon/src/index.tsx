import * as React from "react";
import { Box } from "../../../primitives/box";

export interface StatusIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  mediumIcon?: boolean;
  status?: "green" | "lilac";
}

const StatusIcon = React.forwardRef<HTMLDivElement, StatusIconProps>(
  ({ children, mediumIcon, status = "green", ...props }, ref) => (
    <Box
      css={{
        position: "relative",
      }}
      ref={ref}
      {...props}
    >
      <Box
        css={{
          position: "absolute",
          width: "0.5rem",
          height: "0.5rem",
          backgroundColor: `$${status}`,
          borderRadius: "$circle",
          top: mediumIcon ? "0.125rem" : "-0.125rem",
          left: "-0.125rem",
        }}
      />
      {children}
    </Box>
  )
);

StatusIcon.displayName = "StatusIcon";

export { StatusIcon };
