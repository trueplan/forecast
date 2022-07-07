import * as React from "react";
import { Box } from "../../../primitives/box";

export interface TruncateProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  /** The text contents of Truncate. */
  children: React.ReactNode;
  /** The accessible full text being truncated. This also displays on hover. */
  title: string;
  /** Enables multiline truncation. Sets the number lines to truncate. */
  lines?: number;
}

/** Truncate is a wrapper that shortens a string of text that overflows a defined area. */
const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(
  ({ children, lines, ...props }, ref) => {
    return (
      <Box
        {...props}
        as="span"
        css={{
          display: lines ? "-webkit-box" : "inline-block",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: !lines ? "nowrap" : undefined,
          WebkitBoxOrient: lines ? "vertical" : undefined,
          WebkitLineClamp: lines ? lines : undefined,
        }}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

Truncate.displayName = "Truncate";

export { Truncate };
