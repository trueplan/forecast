export interface CheckboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'css'> {
  checked?: boolean | 'indeterminate';
  children: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  id: string;
  name?: string;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  required?: boolean;
  value?: string;
}
