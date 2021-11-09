/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CheckboxIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `CheckboxIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[CheckboxIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.693.28a1 1 0 01.027 1.413l-5.5 5.715a1 1 0 01-1.44 0L.28 4.81a1 1 0 111.44-1.387l1.78 1.85L8.28.306A1 1 0 019.693.28z"
        />
      </svg>
    </IconWrapper>
  );
};

CheckboxIcon.displayName = "CheckboxIcon";
export { CheckboxIcon };
