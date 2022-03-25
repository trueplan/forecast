import type {
  ComboboxProps as ComboboxPrimitiveProps,
  ComboboxItemProps as ComboboxItemPrimitiveProps,
  ComboboxPopoverProps as ComboboxPopoverPrimitiveProps,
} from "ariakit/combobox";

export interface ComboboxProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "css" | "autoComplete" | "children"
    >,
    Omit<ComboboxPrimitiveProps, "css"> {
  borderless?: boolean;
  centeredText?: boolean;
  disabled?: boolean;
  fontFamily?: "roboto";
  hasError?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
}

export type ComboboxItemProps = Omit<ComboboxItemPrimitiveProps, "css">;
export type ComboboxPopoverProps = Omit<ComboboxPopoverPrimitiveProps, "css">;
