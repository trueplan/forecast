import * as React from "react";
import { CloseIcon } from "@trueplan/forecast-icons";
import { StyledTag, StyledTagClose } from "./styles";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  onDismiss?: () => void;
  size?: "default" | "medium";
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ children, onDismiss, size = "default", ...props }, ref) => (
    <StyledTag size={size} ref={ref} {...props}>
      {children}
      {typeof onDismiss === "function" && (
        <StyledTagClose onClick={onDismiss}>
          <CloseIcon
            decorative={false}
            title="Close"
            color="current"
            size="xxsmall"
          />
        </StyledTagClose>
      )}
    </StyledTag>
  )
);

Tag.displayName = "Tag";

export { Tag };
