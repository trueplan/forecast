export type AvatarColors =
  | "blue"
  | "green"
  | "lilac"
  | "sky"
  | "yellow"
  | "red"
  | "royal";
export type AvatarSizes = "small" | "medium" | "large";

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  color?: AvatarColors;
  name: string;
  showName?: boolean;
  size?: AvatarSizes;
  src?: string;
  title?: string;
}

export interface AvatarContentProps {
  src?: string;
  name: string;
}
