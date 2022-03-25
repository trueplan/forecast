import * as React from "react";
import { useCheckboxState } from "ariakit/checkbox";
import { ComboboxCheckboxContext } from "./ComboboxCheckboxContext";
import { useComboboxState, ComboboxPopover, Combobox } from ".";
import type { ComboboxProps } from ".";

export type ComboboxMultipleProps = Omit<
  ComboboxProps,
  "state" | "onChange"
> & {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValues?: string[];
  values?: string[];
  onValuesChange?: (values: string[]) => void;
  defaultList?: string[];
  list?: string[];
  onFilter?: (matches: string[]) => void;
};

const ComboboxMultiple = React.forwardRef<
  HTMLInputElement,
  ComboboxMultipleProps
>((props, ref) => {
  const {
    defaultValue,
    value,
    onChange,
    defaultValues,
    values,
    onValuesChange,
    defaultList,
    list,
    onFilter,
    children,
    ...comboboxProps
  } = props;

  const combobox = useComboboxState({
    gutter: 8,
    // VoiceOver has issues with multi-selectable comboboxes where the DOM focus
    // is on the combobox input, so we set `virtualFocus` to `false` to disable
    // this behavior and put DOM focus on the items.
    virtualFocus: false,
    defaultValue,
    value,
    setValue: onChange,
    defaultList,
    list,
  });

  const checkbox = useCheckboxState({
    defaultValue: defaultValues,
    value: values,
    setValue: onValuesChange,
  });

  React.useEffect(() => {
    onFilter?.(combobox.matches);
  }, [combobox.matches, onFilter]);

  // Reset the combobox value whenever an item is checked or unchecked.
  React.useEffect(() => {
    combobox.setValue("");
  }, [checkbox.value, combobox, combobox.setValue]);

  return (
    <>
      <Combobox ref={ref} state={combobox} {...comboboxProps} />
      <ComboboxPopover state={combobox} aria-multiselectable>
        <ComboboxCheckboxContext.Provider value={checkbox}>
          {children}
        </ComboboxCheckboxContext.Provider>
      </ComboboxPopover>
    </>
  );
});

export { ComboboxMultiple };
