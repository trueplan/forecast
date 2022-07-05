export interface CheckboxProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sets the checkbox state to checked or not checked. */
  checked?: boolean | "indeterminate";
  /** The controlled checked state of the checkbox. Must be used in conjunction with `onCheckedChange`. */
  children: React.ReactNode;
  /** The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state. */
  defaultChecked?: boolean;
  /** When true, prevents the user from interacting with the checkbox. */
  disabled?: boolean;
  /** The `id` of the checkbox. */
  id: string;
  /** The name of the checkbox. Submitted with its owning form as part of a name/value pair. */
  name?: string;
  /** Event handler called when the checked state of the checkbox changes. */
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  /** When `true`, indicates that the user must check the checkbox before the owning form can be submitted. */
  required?: boolean;
  /** The value given as data when submitted with a `name`. */
  value?: string;
}
