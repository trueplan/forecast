/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface MinusCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MinusCircleIcon: React.FC<MinusCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `MinusCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[MinusCircleIcon]: Missing a title for non-decorative icon."
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
          d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10zm2 0a8 8 0 1116 0 8 8 0 01-16 0zm3.757 1a1 1 0 110-2h8.486a1 1 0 110 2H5.757z"
        />
      </svg>
    </IconWrapper>
  );
};

MinusCircleIcon.displayName = "MinusCircleIcon";
export { MinusCircleIcon };
