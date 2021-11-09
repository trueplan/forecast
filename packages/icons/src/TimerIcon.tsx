/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface TimerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TimerIcon: React.FC<TimerIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `TimerIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[TimerIcon]: Missing a title for non-decorative icon.");
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
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm2 0c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-9-5a1 1 0 10-2 0v5a1 1 0 00.4.8l4 3a1 1 0 001.2-1.6L11 9.5V5z"
        />
      </svg>
    </IconWrapper>
  );
};

TimerIcon.displayName = "TimerIcon";
export { TimerIcon };
