import * as React from "react";
import { VisuallyHidden } from "../../visually-hidden";
import { StyledSpinner } from "./styles";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The accessible label for the spinner. */
  label: string;
  /** Sets the size of the spinner. */
  size?: "small" | "medium" | "large";
  /** If `true`, the spinner can be used on darker background colors. */
  inverse?: boolean;
}

/** A Spinner is an animation that communicates a loading state to users. */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ inverse, label, size = "medium", ...props }, ref) => {
    return (
      <StyledSpinner inverse={inverse} size={size} ref={ref} {...props}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </StyledSpinner>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };
