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
  children: React.ReactNode;
  borderless?: boolean;
  padding?: CardPaddingOptions;
  paddingBottom?: CardPaddingOptions;
  paddingLeft?: CardPaddingOptions;
  paddingRight?: CardPaddingOptions;
  paddingTop?: CardPaddingOptions;
}

export interface CardHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
}

export interface CardFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
}
