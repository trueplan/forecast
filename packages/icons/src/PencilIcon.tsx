/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PencilIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PencilIcon: React.FC<PencilIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `PencilIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[PencilIcon]: Missing a title for non-decorative icon.");
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
          d="M13.61.589a2.01 2.01 0 012.843 0l2.958 2.958a2.01 2.01 0 010 2.843L7.141 18.66c-.279.28-.634.47-1.022.548l-3.71.752A2.01 2.01 0 01.04 17.59l.752-3.71a2.01 2.01 0 01.548-1.022L13.61.588zM2.443 15.85l.13-.638 2.214 2.214-.638.13-2.139.433.433-2.139zm4.138.527l-2.959-2.959 8.63-8.63 2.958 2.96-8.63 8.629zM16.63 6.327l1.359-1.358-1.422-1.422-.115-.115L15.03 2.01l-1.358 1.358 2.958 2.959z"
        />
      </svg>
    </IconWrapper>
  );
};

PencilIcon.displayName = "PencilIcon";
export { PencilIcon };
