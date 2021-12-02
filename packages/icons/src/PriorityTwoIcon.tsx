/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PriorityTwoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PriorityTwoIcon: React.FC<PriorityTwoIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `PriorityTwoIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PriorityTwoIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.614 10.21L10 2.734.386 10.211a1 1 0 101.228 1.578L10 5.267l8.386 6.522a1 1 0 001.228-1.578zm0 5.5L10 8.234.386 15.711a1 1 0 101.228 1.578L10 10.767l8.386 6.522a1 1 0 001.228-1.578z"
        />
      </svg>
    </IconWrapper>
  );
};

PriorityTwoIcon.displayName = "PriorityTwoIcon";
export { PriorityTwoIcon };
