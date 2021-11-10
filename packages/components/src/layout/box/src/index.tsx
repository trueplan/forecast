import * as React from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "@trueplan/forecast-theme";

const StyledBox = styled("div", {
  boxSizing: "border-box",
});

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  as?: React.ReactNode;
  children?: React.ReactNode;
  css?: Stitches.CSS;
  decorative?: boolean;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - we're using a custom `css` prop.
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export { Box };
