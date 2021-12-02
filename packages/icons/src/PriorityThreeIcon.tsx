/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PriorityThreeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PriorityThreeIcon: React.FC<PriorityThreeIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `PriorityThreeIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PriorityThreeIcon]: Missing a title for non-decorative icon."
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
          d="M10 5.733l9.614 7.478a1 1 0 11-1.228 1.578L10 8.267l-8.386 6.522a1 1 0 01-1.228-1.578L10 5.733z"
        />
      </svg>
    </IconWrapper>
  );
};

PriorityThreeIcon.displayName = "PriorityThreeIcon";
export { PriorityThreeIcon };
