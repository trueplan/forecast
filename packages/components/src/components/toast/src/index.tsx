import * as React from "react";
import {
  CloseCircleIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  InfoCircleIcon,
  CloseIcon,
} from "@trueplan/forecast-icons";
import { Box } from "@trueplan/forecast-components";
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "./styles";

type ToastVariants = "success" | "warning" | "error" | "info";

const printToastIcon = (
  variant: ToastVariants
): React.ReactElement | undefined => {
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

// Hack for now. Radix toast isn't export the props yet.
export interface ToastProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "css"> {
  actionAltText?: string;
  duration?: number;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  forceMount?: true;
  title: string;
  content?: string;
  variant?: ToastVariants;
}

const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  (
    {
      actionAltText,
      children,
      content,
      defaultOpen,
      duration = 5000,
      forceMount,
      onOpenChange,
      open,
      title,
      variant = "success",
      ...props
    },
    ref
  ) => {
    return (
      <ToastRoot
        defaultOpen={defaultOpen}
        duration={duration}
        forceMount={forceMount}
        onOpenChange={onOpenChange}
        open={open}
        variant={variant}
        {...props}
        ref={ref}
      >
        <Box>{printToastIcon(variant)}</Box>
        <ToastTitle>
          {title}
          <ToastClose aria-label="Close toast">
            <CloseIcon
              decorative={false}
              title="Close"
              color="current"
              size="xxsmall"
            />
          </ToastClose>
        </ToastTitle>
        <Box css={{ gridColumn: 2 }}>
          {content && <ToastDescription>{content}</ToastDescription>}
          {children && actionAltText && (
            <ToastAction altText={actionAltText} asChild>
              {children}
            </ToastAction>
          )}
        </Box>
      </ToastRoot>
    );
  }
);

Toast.displayName = "Toast";

export { Toast };
