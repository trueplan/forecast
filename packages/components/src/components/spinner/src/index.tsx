import * as React from "react";
import { VisuallyHidden } from "../../visually-hidden";
import { StyledSpinner } from "./styles";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  size?: "small" | "medium" | "large";
  inverse?: boolean;
}

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
