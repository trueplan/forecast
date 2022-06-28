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
  borderless?: boolean;
  centeredText?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  fontFamily?: "roboto";
  hasError?: boolean;
  hasHover?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
}
