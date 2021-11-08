/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DollarCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DollarCircleIcon: React.FC<DollarCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `DollarCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[DollarCircleIcon]: Missing a title for non-decorative icon."
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
          d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10zm2 0a8 8 0 1116 0 8 8 0 01-16 0zm9-6a1 1 0 10-2 0v1a3 3 0 000 6h2a1 1 0 110 2H7.5a1 1 0 100 2H9v1a1 1 0 102 0v-1a3 3 0 100-6H9a1 1 0 010-2h3.5a1 1 0 100-2H11V4z"
        />
      </svg>
    </IconWrapper>
  );
};

DollarCircleIcon.displayName = "DollarCircleIcon";
export { DollarCircleIcon };
