import type TabsPrimitive from "@radix-ui/react-tabs";

export interface TabsProps extends Omit<TabsPrimitive.TabsProps, "dir"> {
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  value?: string;
}

export interface TabsListProps extends TabsPrimitive.TabsListProps {
  children: React.ReactNode;
  centered?: boolean;
  loop?: boolean;
}

export interface TabTriggerProps extends TabsPrimitive.TabsTriggerProps {
  children: React.ReactNode;
  disabled?: boolean;
  value: string;
}

export interface TabContentProps
  extends Omit<TabsPrimitive.TabsContentProps, "dir"> {
  children: React.ReactNode;
  value: string;
}
