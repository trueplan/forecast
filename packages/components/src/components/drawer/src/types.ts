import type { HeadingProps } from "../../heading";

export interface DrawerProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export interface DrawerContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  onOpenAutoFocus?: (event: Event) => void;
}

export interface DrawerHeaderActionsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children?: React.ReactNode;
}

export interface DrawerHeaderProps
  extends Omit<React.HTMLAttributes<HTMLHeadElement>, "css"> {
  children: React.ReactNode;
}

export interface DrawerHeadingProps
  extends Omit<HeadingProps, "marginBottom" | "size" | "css"> {
  children: React.ReactNode;
}

export interface DrawerBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  padding?: "space0" | "space35";
}

export interface DrawerFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  helpText?: string;
}
