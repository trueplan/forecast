import * as React from "react";
import { Checkbox, CheckboxCheck } from "ariakit/checkbox";
import type { CheckboxProps } from "ariakit/checkbox";
import { CheckboxIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { ComboboxCheckboxContext } from "./ComboboxCheckboxContext";
import type { ComboboxItemProps } from ".";
import { ComboboxItem } from ".";

export type ComboboxMultipleItemProps = ComboboxItemProps &
  Omit<CheckboxProps<"div">, "css">;

const ComboboxMultipleItem = React.forwardRef<
  HTMLDivElement,
  ComboboxMultipleItemProps
>(({ value, ...props }, ref) => {
  const checkbox = React.useContext(ComboboxCheckboxContext);

  if (!checkbox) return null;

  return (
    <ComboboxItem
      ref={ref}
      // All selectable items must have the `aria-selected` attribute set to
      // `true` or `false`.
      aria-selected={!!value && checkbox?.value.includes(value)}
      {...props}
    >
      {(itemProps) => (
        <Checkbox
          {...itemProps}
          // Disable `checked` and `aria-checked` attributes so they don't
          // conflict with the `aria-selected` attribute.
          aria-checked={undefined}
          checked={undefined}
          as="div"
          state={checkbox}
          value={value}
        >
          <CheckboxCheck>
            <Box css={{ marginTop: "$5" }}>
              <CheckboxIcon decorative size="xxsmall" />
            </Box>
          </CheckboxCheck>
          <Box as="span" css={{ marginLeft: "$10" }}>
            {value}
          </Box>
        </Checkbox>
      )}
    </ComboboxItem>
  );
});

ComboboxMultipleItem.displayName = "ComboboxMultipleItem";

export { ComboboxMultipleItem };
