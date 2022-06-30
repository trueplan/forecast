export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The progress value. */
  value: number;
  /** The color of the progress bar. */
  color?: "blue" | "green" | "red" | "yellow";
}
