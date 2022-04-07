import * as React from "react";
import { SelectList, useSelectState } from "ariakit/select";
import { Combobox, ComboboxPopover, useComboboxState } from ".";

export type ComboboxMultipleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "autoComplete"
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
    // VoiceOver has issues with multi-selectable comboboxes where the DOM focus
    // is on the combobox input, so we set `virtualFocus` to `false` to disable
    // this behavior and put DOM focus on the items.
    virtualFocus: false,
    sameWidth: true,
    gutter: 8,
    defaultValue,
    value,
    setValue: onChange,
    defaultList,
    list,
  });

  const select = useSelectState({
    ...combobox,
    defaultValue: defaultValues,
    value: values,
    setValue: onValuesChange,
  });

  React.useEffect(() => {
    onFilter?.(combobox.matches);
  }, [combobox.matches]);

  // Reset the combobox value whenever an item is checked or unchecked.
  React.useEffect(() => {
    combobox.setValue("");
  }, [select.value, combobox.setValue]);

  // const element = ;

  return (
    <>
      <Combobox ref={ref} state={combobox} {...comboboxProps} />
      <ComboboxPopover state={combobox}>
        {(popoverProps) => (
          <SelectList
            state={select}
            // Disable the composite behavior on the select list since combobox
            // will handle it.
            composite={false}
            // Disable typeahead so it doesn't conflict with typing on the
            // combobox input.
            typeahead={false}
            {...popoverProps}
          >
            {children}
          </SelectList>
        )}
      </ComboboxPopover>
    </>
  );
});

export { ComboboxMultiple };
