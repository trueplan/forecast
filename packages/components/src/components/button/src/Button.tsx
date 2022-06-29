import * as React from "react";
import { Box } from "../../../primitives/box";
import { Spinner } from "../../spinner";
import { StyledButton, StyledButtonContents } from "./styles";
import type { ButtonProps } from "./types";

/** A Button is a clickable element which communicates that users can trigger an action. */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      children,
      fullWidth,
      isDisabled,
      loading,
      size = "medium",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        aria-busy={loading ? "true" : "false"}
        as={as}
        disabled={isDisabled}
        fullWidth={fullWidth}
        loading={loading}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        <StyledButtonContents
          aria-hidden={loading ? "true" : "false"}
          loading={loading}
        >
          {children}
        </StyledButtonContents>
        {loading && (
          <Box
            as="span"
            css={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner label="Loading. Please wait." />
          </Box>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
