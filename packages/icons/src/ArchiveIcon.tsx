/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ArchiveIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArchiveIcon: React.FC<ArchiveIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ArchiveIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ArchiveIcon]: Missing a title for non-decorative icon.");
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
          d="M20 18a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h6.5a2 2 0 011.789 1.106L11.236 3H18a2 2 0 012 2v13zM8.5 2L9 3H2V2h6.5zM2 10.5V5h16v13H2v-7.5zm11.207 1.707a1 1 0 00-1.414-1.414l-.793.793V9a1 1 0 10-2 0v2.586l-.793-.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l2.5-2.5z"
        />
      </svg>
    </IconWrapper>
  );
};

ArchiveIcon.displayName = "ArchiveIcon";
export { ArchiveIcon };
