export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: "green" | "blue" | "lilac" | "grey" | "red";
  fontFamily?: "roboto";
  size?: "small" | "large";
}
