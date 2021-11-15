export interface PillProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "css"> {
  children: React.ReactNode;
  color?: "green" | "blue" | "lilac" | "grey" | "red";
  fontFamily?: "roboto";
  size?: "small" | "large";
}
