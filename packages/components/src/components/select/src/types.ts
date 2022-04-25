import type React from "react";
import type {
  OptionUnstyledProps,
  OptionGroupUnstyledProps,
  PopperUnstyledProps,
} from "@mui/base";

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "css"> {
  children: React.ReactNode;
  defaultValue?: string;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  name?: string;
  onChange?: () => void;
  required?: boolean;
  size?: "small" | "medium";
  value?: string;
}

export type OptionProps = OptionUnstyledProps<string>;
export type OptionGroupProps = OptionGroupUnstyledProps;
export type PopperProps = PopperUnstyledProps;
