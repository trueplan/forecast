// Typing this as any react component so it works with react router.
// Should only be Link, button, or an anchor tag.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ButtonAsOptions<Props = any> = React.ElementType<Props>;
export type ButtonSizes =
  | "small"
  | "medium"
  | "large"
  | "iconSmall"
  | "iconMedium"
  | "iconLarge";
export type ButtonVariants =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "iconOnly"
  | "inverse";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ButtonAsOptions;
  fullWidth?: boolean;
  href?: string;
  isDisabled?: boolean;
  loading?: boolean;
  size?: ButtonSizes;
  to?: string;
  variant: ButtonVariants;
}
