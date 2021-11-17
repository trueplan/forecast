export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css" | "dir"> {
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  value?: string;
}

export interface TabsListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  centered?: boolean;
  loop?: boolean;
}

export interface TabTriggerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: React.ReactNode;
  disabled?: boolean;
  value: string;
}

export interface TabContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css" | "dir"> {
  children: React.ReactNode;
  value: string;
}
