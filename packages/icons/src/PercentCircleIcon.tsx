/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PercentCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PercentCircleIcon: React.FC<PercentCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `PercentCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PercentCircleIcon]: Missing a title for non-decorative icon."
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
          d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 2a8 8 0 110 16 8 8 0 010-16zM7 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.707 2.207l-6 6a1 1 0 01-1.414-1.414l6-6a1 1 0 111.414 1.414zM11.5 13a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        />
      </svg>
    </IconWrapper>
  );
};

PercentCircleIcon.displayName = "PercentCircleIcon";
export { PercentCircleIcon };
