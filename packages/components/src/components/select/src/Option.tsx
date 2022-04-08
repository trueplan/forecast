import * as React from "react";
import { SelectItem } from "ariakit/select";
import { styled, theme } from "@trueplan/forecast-theme";
import type { OptionProps } from "./types";

export const StyledItem = styled(SelectItem, {
  borderRadius: theme.radii[30],
  color: "inherit",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  padding: theme.space[20],
  "&:hover": {
    backgroundColor: theme.colors.gray20,
  },
  "&:focus": {
    backgroundColor: theme.colors.gray20,
    outline: "none",
  },
});

const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ children, value, ...props }, ref) => {
    return (
      // <SelectItem>{children}</SelectItem>
      <StyledItem value={value} ref={ref} {...props}>
        {children}
      </StyledItem>
    );
  }
);

Option.displayName = "Option";

export { Option };
