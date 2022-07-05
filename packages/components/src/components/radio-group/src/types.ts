export interface RadioProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  id: string;
  required?: boolean;
  value: string;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The individual Radio components within the group. */
  children: React.ReactNode;
  /** The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items. */
  defaultValue?: string;
  /** The reading direction of the radio group. If omitted, assumes LTR (left-to-right) reading mode. */
  dir?: "ltr" | "rtl";
  /** The label for the radio group. */
  label: string;
  /** The name of the group. Submitted with its owning form as part of a name/value pair. */
  name?: string;
  /** Event handler called when the value changes. */
  onValueChange?: (value: string) => void;
  /** When `true`, indicates that the user must check a radio item before the owning form can be submitted. */
  required?: boolean;
  /** The controlled value of the radio item to check. Should be used in conjunction with `onValueChange`. */
  value?: string;
}
