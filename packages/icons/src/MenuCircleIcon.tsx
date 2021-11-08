/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface MenuCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MenuCircleIcon: React.FC<MenuCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `MenuCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[MenuCircleIcon]: Missing a title for non-decorative icon."
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
          d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10zm2 0a8 8 0 1116 0 8 8 0 01-16 0zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        />
      </svg>
    </IconWrapper>
  );
};

MenuCircleIcon.displayName = "MenuCircleIcon";
export { MenuCircleIcon };
