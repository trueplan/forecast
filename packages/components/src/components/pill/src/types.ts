export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The valid HTML content of the pill. */
  children: React.ReactNode;
  /** Specifies the color used for the pill. */
  color?: "green" | "blue" | "lilac" | "grey" | "red";
  /** Specifies the font family used for the pill. */
  fontFamily?: "roboto";
  /** Specifies the size used for the pill. */
  size?: "small" | "large";
}
