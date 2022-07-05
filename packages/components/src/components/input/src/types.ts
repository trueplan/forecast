export type InputTypes =
  | "text"
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "date"
  | "time";

export interface InputTypeProps {
  type: InputTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Removes the border around the input. */
  borderless?: boolean;
  /** Centers the input text. */
  centeredText?: boolean;
  /** Sets the state of the input to disabled so a user can not interact with it. */
  disabled?: boolean;
  /** Changes the font family of the input. */
  fontFamily?: "roboto";
  /** Sets the state of the input to an error state. */
  hasError?: boolean;
  /** The `id` of the input. */
  id?: string;
  /** The `name` of the input. */
  name?: string;
  /** The text to be used for the input placeholder. */
  placeholder?: string;
  /** Sets the input state to ready only, so the value isn't editable. */
  readOnly?: boolean;
  /** Sets the input state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
  /** Changes the input type. */
  type: InputTypes;
  /** The value of the input. */
  value?: string;
}
