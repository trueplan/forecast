import * as React from "react";
import { StyledCard } from "./styles";
import type { CardProps } from "./types";

/** A Card is a styled container that groups related content and actions. */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      borderless,
      children,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      ...props
    },
    ref
  ) => (
    <StyledCard
      borderless={borderless}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      ref={ref}
      {...props}
    >
      {children}
    </StyledCard>
  )
);

Card.displayName = "Card";

export { Card };
