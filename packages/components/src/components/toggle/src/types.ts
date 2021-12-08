export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  id: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
  value?: "On" | "Off";
}
