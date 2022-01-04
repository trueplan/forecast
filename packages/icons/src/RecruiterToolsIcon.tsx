/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface RecruiterToolsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RecruiterToolsIcon: React.FC<RecruiterToolsIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `RecruiterToolsIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[RecruiterToolsIcon]: Missing a title for non-decorative icon."
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
          d="M12.787 11.618a6 6 0 10-9.574 0c.043-.17.094-.344.155-.518.246-.707.673-1.482 1.427-2.087.216-.173.455-.329.716-.463a3.333 3.333 0 114.979 0c.26.134.499.29.715.463.754.605 1.18 1.38 1.427 2.087.061.174.112.348.155.518zm-1.784 1.577a5.542 5.542 0 00-.285-1.629c-.189-.543-.479-1.017-.893-1.35-.39-.313-.947-.548-1.818-.55h-.014c-.871.002-1.428.237-1.818.55-.414.333-.704.807-.894 1.35a5.54 5.54 0 00-.284 1.63C5.88 13.706 6.906 14 8 14s2.12-.293 3.003-.805zM8 16a7.978 7.978 0 002.983-.575 2 2 0 00.471.69l3.5 3.333a2 2 0 002.793-.034l1.667-1.667a2 2 0 00-.035-2.862l-3.5-3.333a1.999 1.999 0 00-.538-.367A8 8 0 108 16zm8.333 2l-3.5-3.333L14.5 13l3.5 3.333L16.333 18zM8 8a1.667 1.667 0 100-3.333A1.667 1.667 0 008 8z"
        />
      </svg>
    </IconWrapper>
  );
};

RecruiterToolsIcon.displayName = "RecruiterToolsIcon";
export { RecruiterToolsIcon };
