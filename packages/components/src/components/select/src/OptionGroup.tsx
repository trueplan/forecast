import * as React from "react";
import { OptionGroupUnstyled } from "@mui/base";
import type { OptionGroupProps } from "./types";
import {
  StyledOptionGroupRoot,
  StyledOptionGroupLabel,
  StyledOptionGroup,
} from ".";

const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
  props: OptionGroupProps,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  const components: OptionGroupProps["components"] = {
    Root: StyledOptionGroupRoot,
    Label: StyledOptionGroupLabel,
    List: StyledOptionGroup,
    ...props.components,
  };

  return <OptionGroupUnstyled {...props} ref={ref} components={components} />;
});

const OptionGroup = React.forwardRef<HTMLLIElement, OptionGroupProps>(
  (props, ref) => {
    return (
      <CustomOptionGroup ref={ref} {...props}>
        {props.children}
      </CustomOptionGroup>
    );
  }
);

OptionGroup.displayName = "OptionGroup";

export { OptionGroup };
