export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSizes =
  | "heading10"
  | "heading20"
  | "heading30"
  | "heading40"
  | "heading50"
  | "heading60";
type ParagraphMarginBottom = "space0" | "space40";
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Sets the HTML element on render. */
  as?: HeadingLevels;
  /** Changes the bottom margin of the heading.  */
  marginBottom?: ParagraphMarginBottom;
  /** Changes the size of the heading. */
  size?: HeadingSizes;
}
