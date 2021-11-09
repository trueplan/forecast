export type AlertVariants = "success" | "warning" | "error" | "info";

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  title: string;
  variant?: AlertVariants;
  onDismiss?: () => void;
}
