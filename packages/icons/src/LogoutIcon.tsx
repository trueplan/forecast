/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface LogoutIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `LogoutIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[LogoutIcon]: Missing a title for non-decorative icon.");
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
          d="M13.196 4.3a1 1 0 011.414-.013l5.09 5a1 1 0 010 1.426l-5.09 5a1 1 0 01-1.402-1.426L16.555 11H8a1 1 0 110-2h8.555l-3.347-3.287a1 1 0 01-.012-1.414z"
        />
        <path
          fill="currentColor"
          d="M11 2a1 1 0 100-2v2zM1 1V0a1 1 0 00-1 1h1zm0 18H0a1 1 0 001 1v-1zm10 1a1 1 0 100-2v2zm0-20H1v2h10V0zM0 1v18h2V1H0zm1 19h10v-2H1v2z"
        />
      </svg>
    </IconWrapper>
  );
};

LogoutIcon.displayName = "LogoutIcon";
export { LogoutIcon };
