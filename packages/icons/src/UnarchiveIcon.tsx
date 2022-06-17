/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface UnarchiveIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnarchiveIcon: React.FC<UnarchiveIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `UnarchiveIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[UnarchiveIcon]: Missing a title for non-decorative icon."
    );
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
          d="M20 18a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h6.5a2 2 0 011.789 1.106L11.236 3H18a2 2 0 012 2v13zM9 3l-.5-1H2v1h7zM2 5v13h16V5H2zm10.707 5.793l-2.5-2.5a1 1 0 00-1.414 0l-2.5 2.5a1 1 0 101.414 1.414l.793-.793V14a1 1 0 102 0v-2.586l.793.793a1 1 0 001.414-1.414z"
        />
      </svg>
    </IconWrapper>
  );
};

UnarchiveIcon.displayName = "UnarchiveIcon";
export { UnarchiveIcon };
