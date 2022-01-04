/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface MoreIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MoreIcon: React.FC<MoreIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `MoreIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[MoreIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        />
      </svg>
    </IconWrapper>
  );
};

MoreIcon.displayName = "MoreIcon";
export { MoreIcon };
