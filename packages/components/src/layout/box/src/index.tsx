import * as React from "react";
import { styled } from "@trueplan/forecast-theme";

const StyledBox = styled("div", {
  boxSizing: "border-box",
});

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  as?: React.ReactNode;
  children?: React.ReactNode;
  decorative?: boolean;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export { Box };
