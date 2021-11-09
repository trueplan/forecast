import * as React from "react";
import { StyledIconContainer } from "./styles";

export interface IconContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "lilac" | "sky" | "yellow" | "red" | "royal";
}

const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
  ({ children, color = "green", size = "medium", ...props }, ref) => (
    <StyledIconContainer color={color} size={size} ref={ref} {...props}>
      {children}
    </StyledIconContainer>
  )
);

IconContainer.displayName = "IconContainer";

export { IconContainer };
