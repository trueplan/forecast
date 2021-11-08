export type AlertVariants = "success" | "warning" | "error" | "info";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  variant?: AlertVariants;
  onDismiss?: () => void;
}
