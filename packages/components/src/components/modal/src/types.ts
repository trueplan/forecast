import type { HeadingProps } from "../../heading";

export interface ModalProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export interface ModalContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  size?: "default" | "wide";
  onOpenAutoFocus?: (event: Event) => void;
}

export interface ModalHeaderActionsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children?: React.ReactNode;
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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  padding?: "space0" | "space35";
}

export interface ModalFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  helpText?: string;
}
