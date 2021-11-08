/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DownloadIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `DownloadIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[DownloadIcon]: Missing a title for non-decorative icon.");
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
          d="M14.659 10.253a1 1 0 00-1.318-1.506L11 10.797V1a1 1 0 10-2 0v9.796L6.659 8.747a1 1 0 10-1.317 1.506l4 3.5a1 1 0 001.316 0l4-3.5zM2 13a1 1 0 10-2 0v3a2 2 0 002 2h16a2 2 0 002-2v-3a1 1 0 10-2 0v3H2v-3z"
        />
      </svg>
    </IconWrapper>
  );
};

DownloadIcon.displayName = "DownloadIcon";
export { DownloadIcon };
