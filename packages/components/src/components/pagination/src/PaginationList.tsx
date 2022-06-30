import * as React from "react";
import { useUIDSeed } from "react-uid";
import { Box } from "../../../primitives/box";

export interface PaginationListProps
  extends React.HtmlHTMLAttributes<HTMLUListElement> {
  /** The pagination list contents. Must be valid HTML. */
  children: React.ReactNode;
}

/** The pagination list is the container for all pagination buttons. */
const PaginationList = React.forwardRef<HTMLUListElement, PaginationListProps>(
  ({ children, ...props }, ref) => {
    const [childrenCount, validChildren] = React.useMemo(() => {
      const filteredChildren = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) || typeof child === "string"
      );
      return [filteredChildren.length, filteredChildren];
    }, [children]);

    const childMargins = "$10";

    const keySeed = useUIDSeed();

    return (
      <Box
        as="ul"
        css={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          margin: "0",
          padding: "0",
        }}
        ref={ref}
        {...props}
      >
        {validChildren.map((child, index) => {
          return (
            <Box
              as="li"
              css={{
                marginRight:
                  childrenCount !== index + 1 ? childMargins : undefined,
                padding: "0",
              }}
              key={keySeed(`pagination-${index}`)}
            >
              {child}
            </Box>
          );
        })}
      </Box>
    );
  }
);

PaginationList.displayName = "PaginationList";

export { PaginationList };
