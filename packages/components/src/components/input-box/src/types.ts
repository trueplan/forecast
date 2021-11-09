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

export interface InputBoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  borderless?: boolean;
  centeredText?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  fontFamily?: "roboto";
  hasError?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
}
