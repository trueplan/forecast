import * as React from "react";
import type { AnchorProps } from "../../anchor";
import { ResourceAnchor } from "./ResourceAnchor";
import { ResourceCard } from "./ResourceCard";

export interface ResourceLinkProps extends AnchorProps {
  variant?: "article " | "video";
}

const ResourceLink = React.forwardRef<HTMLAnchorElement, ResourceLinkProps>(
  ({ children, href, variant = "article ", ...props }, ref) => {
    return (
      <ResourceAnchor href={href} {...props} ref={ref}>
        <ResourceCard variant={variant}>{children}</ResourceCard>
      </ResourceAnchor>
    );
  }
);

ResourceLink.displayName = "ResourceLink";

export { ResourceLink };
