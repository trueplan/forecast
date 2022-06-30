export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Sets the state of the textarea to disabled so a user can not interact with it. */
  disabled?: boolean;
  /** Sets the state of the textarea to an error state. */
  hasError?: boolean;
  /** Sets the height of the textarea. */
  height?: never;
  /** The `id` of the textarea. */
  id?: string;
  /** The `name` of the textarea. */
  name?: string;
  /** The text to be used for the textarea placeholder. */
  placeholder?: string;
  /** Sets the textarea state to ready only, so the value isn't editable. */
  readOnly?: boolean;
  /** Sets the textarea state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
  size?: never;
}
