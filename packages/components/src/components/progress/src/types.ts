export interface ProgressBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'css'> {
  value: number;
  color?: 'blue' | 'green' | 'red' | 'yellow';
}
