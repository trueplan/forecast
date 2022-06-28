import * as React from "react";
import { Box } from "../../../primitives/box";

export interface PaginationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  label: string;
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ children, label, ...props }, ref) => (
    <Box
      aria-label={label}
      css={{ display: "flex", alignItems: "center" }}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  )
);

Pagination.displayName = "Pagination";

export { Pagination };
