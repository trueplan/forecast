/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface WarningCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const WarningCircleIcon: React.FC<WarningCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `WarningCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[WarningCircleIcon]: Missing a title for non-decorative icon."
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
          d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10zm2 0a8 8 0 1116 0 8 8 0 01-16 0zm8-6.25c-.682 0-1.227.567-1.2 1.249l.225 5.627a.976.976 0 001.95 0l.225-5.627A1.201 1.201 0 0010 3.75zM8.562 14.531a1.406 1.406 0 112.813 0 1.406 1.406 0 01-2.813 0z"
        />
      </svg>
    </IconWrapper>
  );
};

WarningCircleIcon.displayName = "WarningCircleIcon";
export { WarningCircleIcon };
