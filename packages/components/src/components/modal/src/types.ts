import type DialogPrimitive from "@radix-ui/react-dialog";
import type { HeadingProps } from "../../heading";

export interface ModalProps extends DialogPrimitive.DialogProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export interface ModalContentProps extends DialogPrimitive.DialogContentProps {
  "aria-describedby": string;
  children: React.ReactNode;
  size?: "default" | "medium" | "wide";
  onOpenAutoFocus?: (event: Event) => void;
}

export interface ModalHeaderActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  customCloseButton?: boolean;
}

export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export interface ModalHeadingProps
  extends Omit<HeadingProps, "marginBottom" | "size"> {
  children: React.ReactNode;
  subTitle?: string;
}

export interface ModalBodyProps extends DialogPrimitive.DialogDescriptionProps {
  children: React.ReactNode;
  padding?: "space0" | "space35";
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  helpText?: string;
}
