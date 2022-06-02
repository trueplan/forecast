import * as React from "react";
import { Text } from "../../../primitives/text";

export interface ResourceLinkCategoryProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "css" | "color"> {
  children: React.ReactNode;
}

const ResourceLinkCategory = React.forwardRef<
  HTMLSpanElement,
  ResourceLinkCategoryProps
>(({ children, ...props }, ref) => {
  return (
    <Text
      color="textLight"
      fontSize="fontSize10"
      fontWeight="medium"
      lineHeight="lineHeight5"
      {...props}
      ref={ref}
    >
      {children}
    </Text>
  );
});

ResourceLinkCategory.displayName = "ResourceLinkCategory";

export { ResourceLinkCategory };
