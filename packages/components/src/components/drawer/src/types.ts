import type { HeadingProps } from "../../heading";

export interface DrawerProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export interface DrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onOpenAutoFocus?: (event: Event) => void;
}

export interface DrawerHeaderActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface DrawerHeaderProps
  extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export interface DrawerHeadingProps
  extends Omit<HeadingProps, "marginBottom" | "size"> {
  children: React.ReactNode;
}

export interface DrawerBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: "space0" | "space35";
}

export interface DrawerFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  helpText?: string;
}
