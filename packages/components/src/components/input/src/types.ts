export type InputTypes =
  | 'text'
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'time';

export interface InputTypeProps {
  type: InputTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'css'> {
  borderless?: boolean;
  centeredText?: boolean;
  disabled?: boolean;
  fontFamily?: 'roboto';
  hasError?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type: InputTypes;
  value?: string;
}
