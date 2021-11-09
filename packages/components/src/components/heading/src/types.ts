export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSizes =
  | "heading10"
  | "heading20"
  | "heading30"
  | "heading40"
  | "heading50"
  | "heading60";
type ParagraphMarginBottom = "space0" | "space40";
export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "css"> {
  as?: HeadingLevels;
  marginBottom?: ParagraphMarginBottom;
  size?: HeadingSizes;
}
