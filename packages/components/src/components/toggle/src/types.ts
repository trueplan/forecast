import type React from "react";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "css"> {
  checked?: boolean;
  defaultChecked?: boolean;
  id: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
  value?: "On" | "Off";
}
