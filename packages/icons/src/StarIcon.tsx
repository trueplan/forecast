/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface StarIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `StarIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[StarIcon]: Missing a title for non-decorative icon.");
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
          d="M10 0a2 2 0 011.741 1.016l2.436 4.31 4.207.823a2 2 0 011 3.407l-3.2 3.064.74 5.092a2 2 0 01-2.882 2.073L10 17.74l-4.042 2.044a2 2 0 01-2.881-2.073l.74-5.092-3.2-3.064a2 2 0 011-3.407l4.207-.823 2.435-4.31A2 2 0 0110 0zM7.112 7.111L2 8.111l3.944 3.777L5.056 18 10 15.5l4.944 2.5-.888-6.111L18 8.11l-5.111-1L10 2 7.112 7.111z"
        />
      </svg>
    </IconWrapper>
  );
};

StarIcon.displayName = "StarIcon";
export { StarIcon };
