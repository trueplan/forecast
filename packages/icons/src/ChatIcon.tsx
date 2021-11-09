/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ChatIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChatIcon: React.FC<ChatIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ChatIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ChatIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.368v.335c0 3.544 2.608 6.475 6 6.963v1.24c0 1.772 2.056 2.74 3.41 1.606l3.314-2.775C16.748 14.706 20 11.419 20 7.368 20 3.3 16.717 0 12.667 0H7.333C3.283 0 0 3.299 0 7.368zm11.689 5.62l-3.56 2.98A.08.08 0 018 15.907v-2.175a1.001 1.001 0 00-1-1.005c-2.761 0-5-2.249-5-5.024v-.335C2 4.408 4.388 2.01 7.333 2.01h5.334C15.612 2.01 18 4.409 18 7.368c0 2.96-2.388 5.36-5.333 5.36h-.262c-.262 0-.515.092-.716.26zM5.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        />
      </svg>
    </IconWrapper>
  );
};

ChatIcon.displayName = "ChatIcon";
export { ChatIcon };
