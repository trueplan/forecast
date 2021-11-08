/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface HomeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `HomeIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[HomeIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.941 5.782L10.968.712a3 3 0 00-3.972.08L.97 6.332A3 3 0 000 8.541v8.462a3 3 0 003 3h12a3 3 0 003-3V8.07a3 3 0 00-1.059-2.288zM8.35 2.264a1 1 0 011.324-.026l5.973 5.07A1 1 0 0116 8.07v8.933a1 1 0 01-1 1h-2V13.03a2 2 0 00-2-2H7a2 2 0 00-2 2v4.973H3a1 1 0 01-1-1V8.54a1 1 0 01.323-.736L8.35 2.264zM7 13.03h4v4.965H7V13.03z"
        />
      </svg>
    </IconWrapper>
  );
};

HomeIcon.displayName = "HomeIcon";
export { HomeIcon };
