import type React from "react";

type LabelMarginBottom = "space0" | "space10";
export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "css"> {
  disabled?: boolean;
  htmlFor: string;
  marginBottom?: LabelMarginBottom;
  radiocheckbox?: boolean;
  required?: boolean;
}
