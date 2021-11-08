/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CalendarDaysIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CalendarDaysIcon: React.FC<CalendarDaysIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `CalendarDaysIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[CalendarDaysIcon]: Missing a title for non-decorative icon."
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
          d="M8 1a1 1 0 00-2 0H3a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3V4a3 3 0 00-3-3h-3a1 1 0 10-2 0H8zm4 2H8a1 1 0 01-2 0H3a1 1 0 00-1 1v2h16V4a1 1 0 00-1-1h-3a1 1 0 11-2 0zM2 8v9a1 1 0 001 1h14a1 1 0 001-1V8H2zm3.5 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13 15a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-7.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        />
      </svg>
    </IconWrapper>
  );
};

CalendarDaysIcon.displayName = "CalendarDaysIcon";
export { CalendarDaysIcon };
