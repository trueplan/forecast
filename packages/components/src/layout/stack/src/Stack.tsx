import * as React from "react";
import { useUIDSeed } from "react-uid";
import { Box } from "../../../primitives/box";
import { StyledStack } from "./styles";
import type { StackProps } from "./types";

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      align,
      as,
      children,
      direction = "horizontal",
      inline,
      justify,
      spacing,
      ...props
    },
    ref
  ) => {
    const [childrenCount, validChildren] = React.useMemo(() => {
      const filteredChildren = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) || typeof child === "string"
      );
      return [filteredChildren.length, filteredChildren];
    }, [children]);

    const childMargins = direction === "vertical" ? spacing : undefined;

    const keySeed = useUIDSeed();

    return (
      <StyledStack
        as={as}
        css={{ alignItems: align, gap: spacing, justifyContent: justify }}
        direction={direction}
        inline={inline}
        ref={ref}
        {...props}
      >
        {validChildren.map((child, index) => {
          return (
            <Box
              css={{
                marginBottom:
                  childrenCount !== index + 1 ? childMargins : undefined,
              }}
              key={keySeed(`stack-${index}`)}
            >
              {child}
            </Box>
          );
        })}
      </StyledStack>
    );
  }
);

Stack.displayName = "Stack";

export { Stack };
