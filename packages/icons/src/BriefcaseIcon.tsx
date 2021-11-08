/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface BriefcaseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BriefcaseIcon: React.FC<BriefcaseIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `BriefcaseIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[BriefcaseIcon]: Missing a title for non-decorative icon."
    );
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
          d="M4 6h14v2H2V6h2zm9 4v1a1 1 0 102 0v-1h3v6H2v-6h3v1a1 1 0 102 0v-1h6zm5-6h-4V3a3 3 0 00-3-3H9a3 3 0 00-3 3v1H2a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-7 0h1V3a1 1 0 00-1-1H9a1 1 0 00-1 1v1h3z"
        />
      </svg>
    </IconWrapper>
  );
};

BriefcaseIcon.displayName = "BriefcaseIcon";
export { BriefcaseIcon };
