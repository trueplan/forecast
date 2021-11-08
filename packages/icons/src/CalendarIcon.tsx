/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CalendarIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `CalendarIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[CalendarIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0a1 1 0 00-1 1v1H3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3h-1V1a1 1 0 10-2 0v1H6V1a1 1 0 00-1-1zm8 4H3a1 1 0 00-1 1v1h14V5a1 1 0 00-1-1h-2zM2 17V8h14v9a1 1 0 01-1 1H3a1 1 0 01-1-1z"
        />
      </svg>
    </IconWrapper>
  );
};

CalendarIcon.displayName = "CalendarIcon";
export { CalendarIcon };
