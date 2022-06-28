export type AlertVariants = "success" | "warning" | "error" | "info";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title/heading text for the alert.
   */
  title: string;
  /**
   * The type of alert.
   */
  variant?: AlertVariants;
  /**
   * Function to be called with the alert close button.
   */
  onDismiss?: () => void;
}
