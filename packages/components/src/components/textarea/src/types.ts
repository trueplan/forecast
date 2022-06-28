export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
