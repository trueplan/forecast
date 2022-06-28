import type React from "react";

type ParagraphSize = "small" | "medium";
type ParagraphColor = "default" | "dark" | "inverse";
type ParagraphMarginBottom = "space0" | "space40";
export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  color?: ParagraphColor;
  marginBottom?: ParagraphMarginBottom;
}
