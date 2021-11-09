import * as React from "react";
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
    return (
      <StyledStack
        as={as}
        css={{ alignItems: align, gap: spacing, justifyContent: justify }}
        direction={direction}
        inline={inline}
        ref={ref}
        {...props}
      >
        {children}
      </StyledStack>
    );
  }
);

Stack.displayName = "Stack";

export { Stack };
