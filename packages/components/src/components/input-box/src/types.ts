export type InputBoxTypes =
  | "text"
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "date"
  | "time";

export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Removes the border around the input box. This gets passed to the child element. */
  borderless?: boolean;
  /** Centers the input box text. This gets passed to the child element. */
  centeredText?: boolean;
  /** The valid elements within the input box. */
  children: React.ReactNode;
  /** Sets the state of the input box to disabled so a user can not interact with it. This gets passed to the child element. */
  disabled?: boolean;
  /** Changes the font family of the input box. This gets passed to the child element. */
  fontFamily?: "roboto";
  /** Sets the state of the input box to an error state. This gets passed to the child element. */
  hasError?: boolean;
  /** Enables or disables hover effects that are added to the input box. */
  hasHover?: boolean;
  /** Sets the input box state to ready only. This gets passed to the child element. */
  readOnly?: boolean;
  /** Sets the type of the input box. This gets passed to the child element. */
  type?: InputBoxTypes;
}
