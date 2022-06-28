export interface RadioProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  id: string;
  required?: boolean;
  value: string;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultValue?: string;
  dir?: "ltr" | "rtl";
  label: string;
  name?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  value?: string;
}
