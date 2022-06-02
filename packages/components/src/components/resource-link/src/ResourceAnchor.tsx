import * as React from "react";
import type { AnchorProps } from "../../anchor";
import { Anchor } from "../../anchor";

export type ResourceAnchorProps = AnchorProps;

const ResourceAnchor = React.forwardRef<HTMLAnchorElement, ResourceAnchorProps>(
  ({ children, href, ...props }, ref) => {
    return (
      <Anchor
        css={{
          position: "relative",
          width: "100%",
          height: "100%",
          "&:hover": {
            border: "none",
          },
          "&:focus": {
            border: "none",
          },
          "&:after": {
            content: "",
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
            opacity: 0,
            top: 0,
            left: 0,
            borderRadius: "$30",
            boxShadow: "0 5px 15px rgba(60, 72, 88,0.3)",
            transition: "opacity 0.3s ease-in-out",
          },
          "&:hover:after": {
            opacity: "1",
          },
        }}
        href={href}
        noUnderline
        {...props}
        ref={ref}
      >
        {children}
      </Anchor>
    );
  }
);

ResourceAnchor.displayName = "ResourceAnchor";

export { ResourceAnchor };
