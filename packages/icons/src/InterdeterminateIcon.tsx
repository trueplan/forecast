/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface InterdeterminateIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const InterdeterminateIcon: React.FC<InterdeterminateIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `InterdeterminateIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[InterdeterminateIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 10 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1a1 1 0 011-1h8a1 1 0 110 2H1a1 1 0 01-1-1z"
        />
      </svg>
    </IconWrapper>
  );
};

InterdeterminateIcon.displayName = "InterdeterminateIcon";
export { InterdeterminateIcon };
