/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface GearIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const GearIcon: React.FC<GearIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `GearIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[GearIcon]: Missing a title for non-decorative icon.");
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
          d="M7.5 0a1 1 0 00-.961.725l-.76 2.662L3.14 3.01a1 1 0 00-1.06.596l-1.5 3.5a1 1 0 00.212 1.101L2.586 10 .793 11.793a1 1 0 00-.161 1.203l2 3.5a1 1 0 001.032.49l2.12-.353.755 2.642A1 1 0 007.5 20h5a1 1 0 00.962-.725l.754-2.642 2.12.353a1 1 0 001.032-.49l2-3.5a1 1 0 00-.16-1.203L17.413 10l1.793-1.793a1 1 0 00.212-1.1l-1.5-3.5a1 1 0 00-1.06-.597l-2.637.377-.76-2.662A1 1 0 0012.5 0h-5zm-.038 4.775L8.254 2h3.492l.793 2.775a1 1 0 001.103.715l2.74-.392.932 2.174-2.021 2.02a1 1 0 000 1.415l1.96 1.96-1.276 2.232-2.313-.385a1 1 0 00-1.125.711L11.746 18H8.254l-.792-2.775a1 1 0 00-1.126-.711l-2.313.385-1.276-2.232 1.96-1.96a1 1 0 000-1.414L2.686 7.272l.931-2.174 2.742.392a1 1 0 001.103-.715zM10 12a2 2 0 110-4 2 2 0 010 4zm-4-2a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </IconWrapper>
  );
};

GearIcon.displayName = "GearIcon";
export { GearIcon };
