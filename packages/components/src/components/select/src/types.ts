import type {
  SelectProps as SelectPrimitiveProps,
  SelectItemProps as SelectItemPrimitiveProps,
  SelectGroupProps as SelectGroupPrimitiveProps,
  SelectGroupLabelProps as SelectGroupLabelPrimitiveProps,
} from "ariakit/select";

export interface SelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "css">,
    Omit<SelectPrimitiveProps, "css"> {
  children: React.ReactNode;
  defaultValue?: string;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
  size?: "small" | "medium";
}

export interface OptionProps extends Omit<SelectItemPrimitiveProps, "css"> {
  children: React.ReactNode;
  value: string;
}

export interface OptionGroupProps
  extends Omit<SelectGroupPrimitiveProps, "css"> {
  children: React.ReactNode;
}

export interface OptionGroupLabelProps
  extends Omit<SelectGroupLabelPrimitiveProps, "css"> {
  children: React.ReactNode;
}
