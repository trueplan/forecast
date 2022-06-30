import * as React from "react";
import { StyledIconContainer } from "./styles";

export interface IconContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** The Forecast icon that displays inside the icon container. */
  children: React.ReactNode;
  /** The size of the icon container. */
  size?: "small" | "medium" | "large";
  /** The color to be used for the icon containers background color. */
  color?: "blue" | "green" | "lilac" | "sky" | "yellow" | "red" | "royal";
}

/** A circular container to be used with Forecast icons. */
const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
  ({ children, color = "green", size = "medium", ...props }, ref) => (
    <StyledIconContainer color={color} size={size} ref={ref} {...props}>
      {children}
    </StyledIconContainer>
  )
);

IconContainer.displayName = "IconContainer";

export { IconContainer };
