export type CardPaddingOptions =
  | "space0"
  | "space10"
  | "space20"
  | "space25"
  | "space30"
  | "space35"
  | "space40"
  | "space50"
  | "space60"
  | "space70"
  | "space80"
  | "space90";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The contents of the card. Can be any valid HTML or React components.*/
  children: React.ReactNode;
  /** Removes the border from the card. */
  borderless?: boolean;
  /** Sets the padding for the card. */
  padding?: CardPaddingOptions;
  /** Sets the bottom padding for the card. */
  paddingBottom?: CardPaddingOptions;
  /** Sets the left padding for the card. */
  paddingLeft?: CardPaddingOptions;
  /** Sets the right padding for the card. */
  paddingRight?: CardPaddingOptions;
  /** Sets the top padding for the card. */
  paddingTop?: CardPaddingOptions;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The contents of the card header. Can be any valid HTML or React components.*/
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The contents of the card footer. Can be any valid HTML or React components.*/
  children: React.ReactNode;
}
