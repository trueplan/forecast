import * as React from "react";
import { StyledText } from "./styles";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "css"> {
  as?: React.ReactNode;
  children: React.ReactNode;
  color?:
    | "textDark"
    | "textMedium"
    | "textLight"
    | "textInverse"
    | "textGreen"
    | "textRed"
    | "textBlue";
  lineHeight?:
    | "lineHeight2"
    | "lineHeight5"
    | "lineHeight10"
    | "lineHeight20"
    | "lineHeight30"
    | "lineHeight40"
    | "lineHeight50"
    | "lineHeight60"
    | "lineHeight70"
    | "lineHeight80"
    | "normal";
  fontFamily?: "inter" | "roboto";
  fontSize?:
    | "fontSize10"
    | "fontSize20"
    | "fontSize30"
    | "fontSize40"
    | "fontSize50"
    | "fontSize60"
    | "fontSize70"
    | "fontSize80";
  display?: "inline" | "block" | "inlineBlock";
  fontWeight?: "normal" | "medium" | "semiBold";
  cursor?: "notAllowed" | "pointer" | "wait";
  textDecoration?: "underline" | "none";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledText ref={ref} {...props}>
        {children}
      </StyledText>
    );
  }
);

Text.displayName = "Text";

export { Text };
