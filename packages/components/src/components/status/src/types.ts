export interface StatusProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'css'> {
  children: string;
  color?: 'default' | 'gray' | 'blue' | 'lilac' | 'green' | 'yellow' | 'red';
  filled?: boolean;
}
