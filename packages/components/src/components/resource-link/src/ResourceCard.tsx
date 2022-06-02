import * as React from "react";
import { ResourceIcon, VideoIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import type { CardProps } from "../../card";
import { Card } from "../../card";

export interface ResourceCardProps extends CardProps {
  variant?: "article " | "video";
}

const ResourceCard = React.forwardRef<HTMLDivElement, ResourceCardProps>(
  ({ children, variant = "article ", ...props }, ref) => {
    return (
      <Card css={{ height: "100%" }} padding="space25" {...props} ref={ref}>
        <Box
          css={{
            display: "flex",
            gap: "$25",
          }}
        >
          <Box
            css={{
              backgroundColor: "$gray20",
              borderRadius: "$30",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {variant === "article " ? (
              <ResourceIcon color="royal120" size="medium" decorative />
            ) : (
              <VideoIcon color="royal120" size="medium" decorative />
            )}
          </Box>
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </Box>
        </Box>
      </Card>
    );
  }
);

ResourceCard.displayName = "ResourceCard";

export { ResourceCard };
