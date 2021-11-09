export interface RadioProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "css"> {
  children: React.ReactNode;
  disabled?: boolean;
  id: string;
  required?: boolean;
  value: string;
}

export interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  defaultValue?: string;
  dir?: "ltr" | "rtl";
  label: string;
  name?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  value?: string;
}
