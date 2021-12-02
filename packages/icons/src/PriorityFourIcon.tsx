/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PriorityFourIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PriorityFourIcon: React.FC<PriorityFourIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `PriorityFourIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PriorityFourIcon]: Missing a title for non-decorative icon."
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
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
        />
      </svg>
    </IconWrapper>
  );
};

PriorityFourIcon.displayName = "PriorityFourIcon";
export { PriorityFourIcon };
