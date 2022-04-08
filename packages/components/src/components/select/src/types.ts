import type {
  SelectProps as SelectPrimitiveProps,
  SelectItemProps as SelectItemPrimitiveProps,
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
  size?: "small" | "medium";
}

export interface OptionProps extends Omit<SelectItemPrimitiveProps, "css"> {
  children: React.ReactNode;
  value: string;
}
