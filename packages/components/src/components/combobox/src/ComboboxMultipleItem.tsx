import * as React from "react";
import { SelectItem, SelectItemCheck } from "ariakit/select";
import { ComboboxItem } from "./ComboboxItem";

export type ComboboxMultipleItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string;
};

const ComboboxMultipleItem = React.forwardRef<
  HTMLDivElement,
  ComboboxMultipleItemProps
>(({ value, ...props }, ref) => {
  return (
    // Here we're combining both SelectItem and ComboboxItem into the same
    // element. SelectItem adds the multi-selectable attributes to the element
    // (for example, aria-selected).
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Should be fixed in a future Ariakit update
    <SelectItem
      ref={ref}
      value={value}
      //We're not registering the select item because the combobox item (the
      // same element) already handles it.
      shouldRegisterItem={false}
      className="combobox-item"
      {...props}
    >
      {(itemProps) => (
        <ComboboxItem {...itemProps}>
          <SelectItemCheck />
          {value}
        </ComboboxItem>
      )}
    </SelectItem>
  );
});

ComboboxMultipleItem.displayName = "ComboboxMultipleItem";

export { ComboboxMultipleItem };
