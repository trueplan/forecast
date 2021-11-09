/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CloseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `CloseIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[CloseIcon]: Missing a title for non-decorative icon.");
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
          d="M.293 1.707A1 1 0 011.707.293L10 8.586 18.293.293a1 1 0 111.414 1.414L11.414 10l8.293 8.293a1 1 0 01-1.414 1.414L10 11.414l-8.293 8.293a1 1 0 01-1.414-1.414L8.586 10 .293 1.707z"
        />
      </svg>
    </IconWrapper>
  );
};

CloseIcon.displayName = "CloseIcon";
export { CloseIcon };
