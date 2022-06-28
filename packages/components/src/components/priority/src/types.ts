export type PriorityVariants = "one" | "two" | "three" | "four";

export interface PriorityProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant: PriorityVariants;
}
