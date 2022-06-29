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
  /** Sets the render element of the component. Prefer 'a' or 'button'.*/
  as?: ButtonAsOptions;
  /** Expands the button to fill the full width of its parent element. */
  fullWidth?: boolean;
  /** If used as an 'a', the href is url that the link point to. */
  href?: string;
  /** Sets the button to be disabled. */
  isDisabled?: boolean;
  /** Sets the button state to loading. */
  loading?: boolean;
  /** Sets the size of the button. */
  size?: ButtonSizes;
  /** Used with React Router or NextJS to set the route the anchor links to. */
  to?: string;
  /** Sets the variant of the button. */
  variant: ButtonVariants;
}
