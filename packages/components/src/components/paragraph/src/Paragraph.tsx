import React from "react";
import { StyledParagraph } from "./styles";
import type { ParagraphProps } from "./types";

/** A Paragraph is a block of text. */
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { size = "medium", color = "default", marginBottom, children, ...rest },
    ref
  ): React.ReactElement => {
    return (
      <StyledParagraph
        size={size}
        color={color}
        marginBottom={marginBottom}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledParagraph>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
