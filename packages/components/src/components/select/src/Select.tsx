import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";
import { ChevronDownIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { InputBox } from "../../input-box";

export const StyledSelect = styled("select", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: theme.radii[30],
  boxShadow: "none",
  color: "inherit",
  cursor: "auto",
  display: "block",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  margin: theme.space[0],
  outline: "none",
  padding: theme.space[20],
  paddingRight: "35px",
  textAlign: "inherit",
  width: "100%",
  "&:disabled": {
    color: theme.colors.gray70,
    cursor: "not-allowed",
    "-webkit-text-fill-color": theme.colors.gray70,
    "-webkit-opacity": "1",
  },
});

const SelectIconWrapper: React.FC = () => (
  <Box
    css={{
      position: "absolute",
      top: "50%",
      right: 12,
      marginTop: "-0.313rem",
    }}
  >
    <ChevronDownIcon decorative size="xxsmall" />
  </Box>
);

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "css"> {
  children: React.ReactNode;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  name?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, disabled, hasError, id, name, required, ...props }, ref) => {
    return (
      <InputBox data-disabled={disabled} data-has-error={hasError} hasHover>
        <StyledSelect
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          ref={ref}
          {...props}
        >
          {children}
        </StyledSelect>
        <SelectIconWrapper />
      </InputBox>
    );
  }
);

Select.displayName = "Select";

export { Select };
