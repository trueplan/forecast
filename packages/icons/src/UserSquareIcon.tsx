/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface UserSquareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UserSquareIcon: React.FC<UserSquareIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `UserSquareIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[UserSquareIcon]: Missing a title for non-decorative icon."
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
          d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1h-2v-2a4.995 4.995 0 00-2.2-4.143 4 4 0 10-5.6 0A4.995 4.995 0 005 16v2H3a1 1 0 01-1-1V3zm5 15h6v-2a3 3 0 10-6 0v2zM3 0a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V3a3 3 0 00-3-3H3zm5 9a2 2 0 104 0 2 2 0 00-4 0z"
        />
      </svg>
    </IconWrapper>
  );
};

UserSquareIcon.displayName = "UserSquareIcon";
export { UserSquareIcon };
