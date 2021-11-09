/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface RecruitingIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RecruitingIcon: React.FC<RecruitingIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `RecruitingIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[RecruitingIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17h1a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3-3H3a3 3 0 00-3 3v11a3 3 0 003 3zm2-2h7a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v11a1 1 0 001 1h2zm11-9a1 1 0 00-1-1v9a3 3 0 01-3 3H6a1 1 0 001 1h8a1 1 0 001-1V6zm-6-2a1 1 0 110 2H5a1 1 0 110-2h5zm1 4.5a1 1 0 00-1-1H5a1 1 0 000 2h5a1 1 0 001-1zM10 11a1 1 0 110 2H5a1 1 0 110-2h5z"
        />
      </svg>
    </IconWrapper>
  );
};

RecruitingIcon.displayName = "RecruitingIcon";
export { RecruitingIcon };
