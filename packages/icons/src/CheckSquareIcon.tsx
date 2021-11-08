/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CheckSquareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckSquareIcon: React.FC<CheckSquareIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `CheckSquareIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[CheckSquareIcon]: Missing a title for non-decorative icon."
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
          d="M17 0H3a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V3a3 3 0 00-3-3zM2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm12.737 4.676a1 1 0 00-1.474-1.352l-4.727 5.157L6.768 9.36a1 1 0 10-1.536 1.28l2.5 3a1 1 0 001.505.036l5.5-6z"
        />
      </svg>
    </IconWrapper>
  );
};

CheckSquareIcon.displayName = "CheckSquareIcon";
export { CheckSquareIcon };
