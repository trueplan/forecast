/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CheckCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `CheckCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[CheckCircleIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        fill="none"
        height="100%"
        viewBox="0 0 20 20"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          clipRule="evenodd"
          d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10zm2 0a8 8 0 1116 0 8 8 0 01-16 0zm12.737-2.324a1 1 0 00-1.474-1.352l-4.727 5.157L6.768 9.36a1 1 0 10-1.536 1.28l2.5 3a1 1 0 001.505.036z"
          fillRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

CheckCircleIcon.displayName = "CheckCircleIcon";
export { CheckCircleIcon };
