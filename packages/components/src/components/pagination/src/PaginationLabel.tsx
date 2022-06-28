import * as React from "react";
import { Box } from "../../../primitives/box";
import { Text } from "../../../primitives/text";

export interface PaginationLabelProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

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
