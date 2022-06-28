import * as React from "react";
import {
  CloseCircleIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  InfoCircleIcon,
  CloseIcon,
} from "@trueplan/forecast-icons";
import type ToastPrimitive from "@radix-ui/react-toast";
import { Box } from "../../../primitives/box";
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

export interface ToastProps
  extends React.ComponentProps<typeof ToastPrimitive.Root> {
  actionAltText?: string;
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
