import * as React from "react";
import { Box } from "../../../primitives/box";
import { Text } from "../../../primitives/text";

export interface ResourceLinkTimeStampProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "css" | "color"> {
  children: React.ReactNode;
}

const ResourceLinkTimeStamp = React.forwardRef<
  HTMLSpanElement,
  ResourceLinkTimeStampProps
>(({ children, ...props }, ref) => {
  return (
    <Box css={{ display: "flex", alignItems: "center" }}>
      <Box
        css={{
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderTopWidth: "$space$10",
          borderBottomWidth: "$space$10",
          borderLeftWidth: "$space$20",
          borderColor: "transparent transparent transparent $gray60",
        }}
      />
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
    </Box>
  );
});

ResourceLinkTimeStamp.displayName = "ResourceLinkTimeStamp";

export { ResourceLinkTimeStamp };
