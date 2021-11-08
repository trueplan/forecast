/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface TargetIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TargetIcon: React.FC<TargetIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `TargetIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[TargetIcon]: Missing a title for non-decorative icon.");
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
          d="M10 18a8 8 0 110-16 8 8 0 010 16zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm10 3a3 3 0 110-6 3 3 0 010 6zm-5-3a5 5 0 1110 0 5 5 0 01-10 0z"
        />
      </svg>
    </IconWrapper>
  );
};

TargetIcon.displayName = "TargetIcon";
export { TargetIcon };
