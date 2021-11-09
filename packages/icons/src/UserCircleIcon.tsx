/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface UserCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UserCircleIcon: React.FC<UserCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `UserCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[UserCircleIcon]: Missing a title for non-decorative icon."
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
          d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 00-5 14.245v-.388c0-1.684.858-3.169 2.16-4.04a4 4 0 115.68 0 4.852 4.852 0 012.16 4.04v.388A8 8 0 0010 2zm3 15.419v-1.562A2.857 2.857 0 0010.143 13h-.286A2.857 2.857 0 007 15.857v1.562c.926.375 1.94.581 3 .581s2.074-.206 3-.581zM10 11a2 2 0 100-4 2 2 0 000 4z"
        />
      </svg>
    </IconWrapper>
  );
};

UserCircleIcon.displayName = "UserCircleIcon";
export { UserCircleIcon };
