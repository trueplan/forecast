/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface InsightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const InsightIcon: React.FC<InsightIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `InsightIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[InsightIcon]: Missing a title for non-decorative icon.");
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
          d="M16 0H4a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4zM2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm13.454 2.804a1 1 0 00-1.177-.785l-2.631.528a1 1 0 00.388 1.962l-1.688 2.17-2.107-1.612a1 1 0 00-1.374.152l-2.631 3.139a1 1 0 101.532 1.284l2.017-2.405L9.92 12.87a1 1 0 001.397-.18l2.605-3.35.098.492a1 1 0 001.962-.391l-.527-2.638z"
        />
      </svg>
    </IconWrapper>
  );
};

InsightIcon.displayName = "InsightIcon";
export { InsightIcon };
