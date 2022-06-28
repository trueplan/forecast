export interface CheckboxProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean | "indeterminate";
  children: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  id: string;
  name?: string;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  required?: boolean;
  value?: string;
}
