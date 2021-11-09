export interface StackProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  as?: keyof JSX.IntrinsicElements;
  direction?: "horizontal" | "vertical";
  divider?: boolean;
  inline?: boolean;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  spacing?: string;
}
