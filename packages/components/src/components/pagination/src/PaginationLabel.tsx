import * as React from "react";
import { Box } from "../../../primitives/box";
import { Text } from "../../../primitives/text";

export interface PaginationLabelProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  /** The pagination label contents. Must be valid HTML. */
  children: React.ReactNode;
}

/** The pagination label is used to show the user which section or page is selected. */
const PaginationLabel = React.forwardRef<HTMLSpanElement, PaginationLabelProps>(
  ({ children, ...props }, ref) => (
    <Box as="span" css={{ marginRight: "$40" }} ref={ref} {...props}>
      <Text fontSize="fontSize10" lineHeight="lineHeight10" fontWeight="normal">
        {children}
      </Text>
    </Box>
  )
);

PaginationLabel.displayName = "PaginationLabel";

export { PaginationLabel };
