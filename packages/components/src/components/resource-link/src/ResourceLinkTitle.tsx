import * as React from "react";
import { Text } from "../../../primitives/text";

export interface ResourceLinkTitleProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  children: React.ReactNode;
}

const ResourceLinkTitle = React.forwardRef<
  HTMLSpanElement,
  ResourceLinkTitleProps
>(({ children, ...props }, ref) => {
  return (
    <Text
      color="textMedium"
      fontSize="fontSize10"
      fontWeight="semiBold"
      lineHeight="lineHeight5"
      style={{
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
      }}
      {...props}
      ref={ref}
    >
      {children}
    </Text>
  );
});

ResourceLinkTitle.displayName = "ResourceLinkTitle";

export { ResourceLinkTitle };
