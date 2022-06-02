/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface VideoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VideoIcon: React.FC<VideoIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `VideoIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[VideoIcon]: Missing a title for non-decorative icon.");
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
          d="M2.5 1.667h15c.46 0 .833.373.833.833v15c0 .46-.373.833-.833.833h-15a.833.833 0 01-.833-.833v-15c0-.46.373-.833.833-.833zM0 2.5A2.5 2.5 0 012.5 0h15A2.5 2.5 0 0120 2.5v15a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 010 17.5v-15zm7.071 2.605l-1.238-.688v11.166l1.238-.688 7.5-4.166L15.883 10l-1.312-.728-7.5-4.167zM12.451 10L7.5 12.75v-5.5L12.45 10z"
        />
      </svg>
    </IconWrapper>
  );
};

VideoIcon.displayName = "VideoIcon";
export { VideoIcon };
