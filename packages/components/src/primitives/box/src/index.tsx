import * as React from "react";
import { styled } from "@trueplan/forecast-theme";
import type { CSSProp } from "../../../types";

const StyledBox = styled("div", {
  boxSizing: "border-box",
});

export interface BoxProps extends React.HTMLAttributes<HTMLElement>, CSSProp {
  as?: React.ReactNode;
  children?: React.ReactNode;
  decorative?: boolean;
}

const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - StyledBox is a div, but can be any HTMLElement.
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export { Box };
