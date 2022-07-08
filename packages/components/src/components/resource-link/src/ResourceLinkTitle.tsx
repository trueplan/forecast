import * as React from "react";
import { Text } from "../../../primitives/text";
import { Truncate } from "../../truncate";

export interface ResourceLinkTitleProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  children: string;
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
      {...props}
      ref={ref}
    >
      <Truncate title={children} lines={2}>
        {children}
      </Truncate>
    </Text>
  );
});

ResourceLinkTitle.displayName = "ResourceLinkTitle";

export { ResourceLinkTitle };
