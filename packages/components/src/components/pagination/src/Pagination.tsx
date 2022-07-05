import * as React from "react";
import { Box } from "../../../primitives/box";

export interface PaginationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /** The valid elements within the pagination. */
  children: React.ReactNode;
  /** The accessible label assigned to the pagination. */
  label: string;
}

/** Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages. */
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
