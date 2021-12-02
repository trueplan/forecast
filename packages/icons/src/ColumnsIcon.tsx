/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ColumnsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ColumnsIcon: React.FC<ColumnsIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ColumnsIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ColumnsIcon]: Missing a title for non-decorative icon.");
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
          d="M0 15.5v-13A2.5 2.5 0 012.5 0h1A2.5 2.5 0 016 2.5v13A2.5 2.5 0 013.5 18h-1A2.5 2.5 0 010 15.5zm2 0a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v13zm5 0v-13A2.5 2.5 0 019.5 0h1A2.5 2.5 0 0113 2.5v13a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 017 15.5zm2 0a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v13zm5-13v13a2.5 2.5 0 002.5 2.5h1a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0017.5 0h-1A2.5 2.5 0 0014 2.5zM16.5 16a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-1z"
        />
      </svg>
    </IconWrapper>
  );
};

ColumnsIcon.displayName = "ColumnsIcon";
export { ColumnsIcon };
