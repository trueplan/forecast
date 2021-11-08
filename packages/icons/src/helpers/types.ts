export type IconColors =
  | "current"
  | "white"
  | "red"
  | "lilac"
  | "blue"
  | "gray70"
  | "gray80"
  | "green"
  | "green120"
  | "sky120"
  | "royal120"
  | "yellow110"
  | "yellow120"
  | "red120";
export type IconDisplayOptions =
  | "inlineBlock"
  | "block"
  | "flex"
  | "inlineFlex";
export type IconSizes = "xsmall" | "small" | "medium";

export interface IconWrapperProps {
  as?: keyof JSX.IntrinsicElements;
  color?: IconColors;
  display?: IconDisplayOptions;
  size?: IconSizes;
}

export interface GenericIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}
