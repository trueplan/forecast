/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface UploadIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UploadIcon: React.FC<UploadIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `UploadIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[UploadIcon]: Missing a title for non-decorative icon.");
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
          d="M14.659 3.747a1 1 0 11-1.318 1.506L11 3.203V13a1 1 0 11-2 0V3.204L6.659 5.253a1 1 0 01-1.317-1.506l4-3.5a1 1 0 011.316 0l4 3.5zM2 13a1 1 0 10-2 0v3a2 2 0 002 2h16a2 2 0 002-2v-3a1 1 0 10-2 0v3H2v-3z"
        />
      </svg>
    </IconWrapper>
  );
};

UploadIcon.displayName = "UploadIcon";
export { UploadIcon };
