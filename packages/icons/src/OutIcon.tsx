/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface OutIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const OutIcon: React.FC<OutIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `OutIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[OutIcon]: Missing a title for non-decorative icon.");
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
          d="M10.253 14.659a1 1 0 01-1.506-1.318L10.797 11H1a1 1 0 110-2h9.796L8.747 6.659a1 1 0 011.506-1.317l3.5 4a1 1 0 010 1.316l-3.5 4zM13 2a1 1 0 110-2h3a2 2 0 012 2v16a2 2 0 01-2 2h-3a1 1 0 110-2h3V2h-3z"
        />
      </svg>
    </IconWrapper>
  );
};

OutIcon.displayName = "OutIcon";
export { OutIcon };
