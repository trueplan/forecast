/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PuzzleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PuzzleIcon: React.FC<PuzzleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `PuzzleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[PuzzleIcon]: Missing a title for non-decorative icon.");
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
          d="M4 3.5a3.5 3.5 0 117 0V4h3a2 2 0 012 2v2a4 4 0 010 8v2a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.958C0 14.466.466 14 1.042 14h1.68a1.5 1.5 0 000-3h-1.68A1.042 1.042 0 010 9.958V6a2 2 0 012-2h2v-.5zM7.5 2A1.5 1.5 0 006 3.5v1.46A1.04 1.04 0 014.96 6H2v3h.722a3.5 3.5 0 110 7H2v2h12v-2.96c0-.575.465-1.04 1.04-1.04H16a2 2 0 100-4h-.96A1.04 1.04 0 0114 8.96V6h-3.96A1.04 1.04 0 019 4.96V3.5A1.5 1.5 0 007.5 2z"
        />
      </svg>
    </IconWrapper>
  );
};

PuzzleIcon.displayName = "PuzzleIcon";
export { PuzzleIcon };
