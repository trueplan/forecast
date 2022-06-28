import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type { HeadingProps } from "../../heading";

export interface ModalProps extends Omit<DialogPrimitive.DialogProps, "css"> {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export interface ModalContentProps
  extends Omit<DialogPrimitive.DialogContentProps, "css"> {
  "aria-describedby": string;
  children: React.ReactNode;
  size?: "default" | "medium" | "wide";
  onOpenAutoFocus?: (event: Event) => void;
}

export interface ModalHeaderActionsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children?: React.ReactNode;
  customCloseButton?: boolean;
}

export interface ModalHeaderProps
  extends Omit<React.HTMLAttributes<HTMLHeadElement>, "css"> {
  children: React.ReactNode;
}

export interface ModalHeadingProps
  extends Omit<HeadingProps, "marginBottom" | "size" | "css"> {
  children: React.ReactNode;
  subTitle?: string;
}

export interface ModalBodyProps
  extends Omit<DialogPrimitive.DialogDescriptionProps, "css"> {
  children: React.ReactNode;
  padding?: "space0" | "space35";
}

export interface ModalFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  helpText?: string;
}
