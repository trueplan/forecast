export type PriorityVariants = "one" | "two" | "three" | "four";

export interface PriorityProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "css"> {
  children: React.ReactNode;
  variant: PriorityVariants;
}
