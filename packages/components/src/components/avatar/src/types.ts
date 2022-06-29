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
  /**
   * The color used for the avatar background.
   */
  color?: AvatarColors;
  /**
   * The name of the entity being represented.
   */
  name: string;
  /**
   * Set `true` to show the name of the entity to the right of the avatar.
   */
  showName?: boolean;
  /**
   * The size of the avatar.
   */
  size?: AvatarSizes;
  /**
   * The image source to be used for the avatar.
   */
  src?: string;
  /**
   * The subtitle of the name.
   */
  title?: string;
}

export interface AvatarContentProps {
  src?: string;
  name: string;
}
