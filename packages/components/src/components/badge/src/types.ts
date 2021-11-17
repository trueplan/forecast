export type BadgeSizes = "small" | "large";
export type BadgeColors = "lilac" | "green" | "red" | "gray";
export type BadgeFontFamilies = "inter" | "roboto";

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "css"> {
  children: string | number;
  size?: BadgeSizes;
  color?: BadgeColors;
  fontFamily?: BadgeFontFamilies;
}
