export type PriorityVariants = "one" | "two" | "three" | "four";

export interface PriorityProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The valid HTML text of the priority. */
  children: React.ReactNode;
  /** The level of the importance. */
  variant: PriorityVariants;
}
