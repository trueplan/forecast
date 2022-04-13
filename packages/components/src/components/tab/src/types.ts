import type * as TabsPrimitive from "@radix-ui/react-tabs";

export interface TabsProps
  extends Omit<TabsPrimitive.TabsProps, "css" | "dir"> {
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  value?: string;
}

export interface TabsListProps
  extends Omit<TabsPrimitive.TabsListProps, "css"> {
  children: React.ReactNode;
  centered?: boolean;
  loop?: boolean;
}

export interface TabTriggerProps
  extends Omit<TabsPrimitive.TabsTriggerProps, "css"> {
  children: React.ReactNode;
  disabled?: boolean;
  value: string;
}

export interface TabContentProps
  extends Omit<TabsPrimitive.TabsContentProps, "css" | "dir"> {
  children: React.ReactNode;
  value: string;
}
