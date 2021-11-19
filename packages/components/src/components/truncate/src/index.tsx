import * as React from "react";
import { Box } from "../../../primitives/box";

export interface TruncateProps
  extends Omit<React.HtmlHTMLAttributes<HTMLSpanElement>, "css"> {
  children: React.ReactNode;
  title: string;
}

const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        {...props}
        as="span"
        css={{
          display: "inline-block",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
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
