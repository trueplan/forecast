export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  color?: "blue" | "green" | "red" | "yellow";
}
