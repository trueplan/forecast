import type React from "react";

type LabelMarginBottom = "space0" | "space10";
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Changes the style of the label to signify it is disabled. */
  disabled?: boolean;
  /** Use and `id` to tie a label directly to a specific form element. */
  htmlFor: string;
  /** Sets the bottom margin of the label. */
  marginBottom?: LabelMarginBottom;
  /** Set when used with a radio or checkbox to adjust the label style. */
  radiocheckbox?: boolean;
  /** Adds the red dot to the right of the label. */
  required?: boolean;
}
