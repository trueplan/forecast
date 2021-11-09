/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface LinkOutIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LinkOutIcon: React.FC<LinkOutIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `LinkOutIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[LinkOutIcon]: Missing a title for non-decorative icon.");
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
          d="M11.864.066c-.552.005-.995.47-.99 1.037.005.567.456 1.023 1.008 1.018l4.685-.043L9.818 9.02a1.048 1.048 0 000 1.453.98.98 0 001.413 0l6.75-6.942-.043 4.819c-.005.567.438 1.032.99 1.037.552.005 1.003-.451 1.008-1.019L20 1.037A1.043 1.043 0 0019.707.3.985.985 0 0018.992 0l-7.128.066zM1 .477C.447.477 0 .937 0 1.505v17.467C0 19.54.447 20 .999 20H18.98c.552 0 1-.46 1-1.027v-5.138c0-.568-.448-1.028-1-1.028s-.999.46-.999 1.028v4.11H1.998V2.532h4.495c.552 0 1-.46 1-1.027 0-.568-.448-1.028-1-1.028H1z"
        />
      </svg>
    </IconWrapper>
  );
};

LinkOutIcon.displayName = "LinkOutIcon";
export { LinkOutIcon };
