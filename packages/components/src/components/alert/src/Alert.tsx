import * as React from "react";
import {
  CloseCircleIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  InfoCircleIcon,
  CloseIcon,
} from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertBody,
  StyledAlertClose,
} from "./styles";
import type { AlertProps, AlertVariants } from "./types";

const printIcon = (variant: AlertVariants): React.ReactElement | undefined => {
  switch (variant) {
    case "success":
      return <CheckCircleIcon decorative color="green" />;
    case "warning":
      return <WarningCircleIcon decorative color="yellow110" />;
    case "error":
      return <CloseCircleIcon decorative color="red" />;
    case "info":
      return <InfoCircleIcon decorative color="gray70" />;
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, title, onDismiss, variant = "warning", ...props }, ref) => (
    <StyledAlert role="alert" ref={ref} variant={variant} {...props}>
      <Box>{printIcon(variant)}</Box>
      <StyledAlertTitle>
        {title}
        {typeof onDismiss === "function" && (
          <StyledAlertClose onClick={onDismiss}>
            <CloseIcon
              decorative={false}
              title="Close"
              color="current"
              size="xxsmall"
            />
          </StyledAlertClose>
        )}
      </StyledAlertTitle>
      {children && <StyledAlertBody>{children}</StyledAlertBody>}
    </StyledAlert>
  )
);

Alert.displayName = "Alert";

export { Alert };
