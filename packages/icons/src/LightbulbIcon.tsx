/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface LightbulbIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LightbulbIcon: React.FC<LightbulbIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `LightbulbIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[LightbulbIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.176 18v-1.569c0-.144.003-.288.008-.431h-4.59c.002.096.003.191.003.287V18h4.579zm1.306-6.642c-.46.832-.803 1.72-1.022 2.642H8.104v-3.272l1.073-2.295a1.012 1.012 0 00-.457-1.335.963.963 0 00-1.3.47l-.458.98-.795-1.132a.958.958 0 00-1.36-.228 1.017 1.017 0 00-.221 1.396l1.57 2.239V14H4.353a10.748 10.748 0 00-.862-2.477L2.5 9.51C.805 6.067 3.242 2 7 2c3.866 0 6.293 4.283 4.382 7.733l-.9 1.625zM7 0C1.79 0-1.589 5.64.761 10.412l.99 2.013c.59 1.197.897 2.52.897 3.862v1.786c0 1.064.84 1.927 1.878 1.927h4.848c.967 0 1.75-.804 1.75-1.796V16.43c0-1.432.363-2.84 1.052-4.084l.9-1.625C15.726 5.939 12.36 0 7 0z"
        />
      </svg>
    </IconWrapper>
  );
};

LightbulbIcon.displayName = "LightbulbIcon";
export { LightbulbIcon };
