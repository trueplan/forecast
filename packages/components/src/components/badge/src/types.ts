export type BadgeSizes = "small" | "medium" | "large";
export type BadgeColors = "lilac" | "green" | "red" | "gray";
export type BadgeFontFamilies = "inter" | "roboto";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The content of the badge. */
  children: string | number;
  /** The size of the badge. */
  size?: BadgeSizes;
  /** The color of the badge background. */
  color?: BadgeColors;
  /** The font family used for the badge text. */
  fontFamily?: BadgeFontFamilies;
}
