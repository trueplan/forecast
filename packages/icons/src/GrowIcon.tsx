/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface GrowIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const GrowIcon: React.FC<GrowIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `GrowIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[GrowIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        fill="none"
        height="100%"
        viewBox="0 0 20 20"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          clipRule="evenodd"
          d="M14.001.998a.999.999 0 011-.998h4a1 1 0 011 .998L20 5.032a.999.999 0 01-2 0V3.418l-4.29 4.311c-.39.391-1.023.393-1.415.004s-.394-1.02-.004-1.41l4.306-4.327h-1.596c-.552 0-1-.447-1-.998zM7.706 12.267a.996.996 0 01.004 1.41l-4.306 4.327H5A.999.999 0 115 20H1a1.001 1.001 0 01-1-.998l.001-4.034a.999.999 0 012 0v1.614l4.291-4.311a1.001 1.001 0 011.414-.004z"
          fillRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

GrowIcon.displayName = "GrowIcon";
export { GrowIcon };
