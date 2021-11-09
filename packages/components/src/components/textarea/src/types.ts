export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "css"> {
  disabled?: boolean;
  hasError?: boolean;
  height?: never;
  id?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: never;
}
