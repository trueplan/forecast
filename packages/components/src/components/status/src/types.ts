export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  color?: "default" | "gray" | "blue" | "lilac" | "green" | "yellow" | "red";
  filled?: boolean;
}
