import type React from "react";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "css"> {
  /** The controlled state of the toggle. Must be used in conjunction with onCheckedChange. */
  checked?: boolean;
  /** The state of the toggle when it is initially rendered. Use when you do not need to control its state. */
  defaultChecked?: boolean;
  /** The id for the toggle. */
  id: string;
  /** The name for the toggle. */
  name?: string;
  /** Event handler called when the state of the toggle changes. */
  onCheckedChange?: (checked: boolean) => void;
  /** When true, indicates that the user must check the toggle before the owning form can be submitted. */
  required?: boolean;
  /** The value given as data when submitted with a name. Either On or Off. */
  value?: "On" | "Off";
  /** Show the label On/Off text to the right of the toggle. Defaults to true. */
  showLabelText?: boolean;
}
