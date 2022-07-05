import type React from "react";

type ParagraphSize = "small" | "medium";
type ParagraphColor = "default" | "dark" | "inverse";
type ParagraphMarginBottom = "space0" | "space40";
export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The font size of the paragraph text. */
  size?: ParagraphSize;
  /** The color used for the paragraph text. */
  color?: ParagraphColor;
  /** The bottom margin of the paragraph text. */
  marginBottom?: ParagraphMarginBottom;
}
