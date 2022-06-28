import type React from "react";

type LabelMarginBottom = "space0" | "space10";
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  htmlFor: string;
  marginBottom?: LabelMarginBottom;
  radiocheckbox?: boolean;
  required?: boolean;
}
