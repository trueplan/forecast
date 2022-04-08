import * as React from "react";
import * as SelectPrimitive from "ariakit/select";
import { styled, theme } from "@trueplan/forecast-theme";
import { ChevronDownIcon, ChevronUpIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { InputBox } from "../../input-box";
import type { SelectProps } from "./types";

export const StyledSelect = styled(SelectPrimitive.Select, {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: theme.radii[30],
  boxShadow: "none",
  color: "inherit",
  cursor: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  margin: theme.space[0],
  outline: "none",
  padding: "0.6875rem",
  textAlign: "inherit",
  width: "100%",
  "&:disabled": {
    color: theme.colors.gray70,
    cursor: "not-allowed",
    "-webkit-text-fill-color": theme.colors.gray70,
    "-webkit-opacity": "1",
  },
  variants: {
    size: {
      small: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights[5],
        padding: "0.6875rem",
      },
      medium: {
        fontSize: theme.fontSizes[20],
        lineHeight: theme.lineHeights[20],
        padding: "0.8125rem",
      },
    },
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

export const StyledPopover = styled(SelectPrimitive.SelectPopover, {
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.gray50,
  borderRadius: theme.radii[30],
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  fontSize: theme.fontSizes[20],
  fontWeight: theme.fontWeights.normal,
  lineHeight: theme.lineHeights[20],
  padding: theme.space[20],
});

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      children,
      defaultValue,
      disabled,
      hasError,
      id,
      name,
      required,
      size = "small",
      ...props
    },
    ref
  ) => {
    const selectState = SelectPrimitive.useSelectState({
      defaultValue,
      gutter: 8,
    });
    return (
      <InputBox data-disabled={disabled} data-has-error={hasError} hasHover>
        <StyledSelect
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          ref={ref}
          size={size}
          state={selectState}
          {...props}
        />
        <SelectIconWrapper />
        <StyledPopover state={selectState}>{children}</StyledPopover>
      </InputBox>
    );
  }
);

Select.displayName = "Select";

export { Select };
