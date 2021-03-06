// Note on a11y: https://css-tricks.com/can-make-icon-system-accessible/
const reactIconTemplate = ({ componentName, svg }) => `
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from 'react-uid';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/types';

export interface ${componentName}Props extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ${componentName}: React.FC<${componentName}Props> = ({display = "block", size = "medium", color = "current", title, decorative}) => {
  const titleId = \`${componentName}-\${useUID()}\`;

  if (!decorative && title == null) {
    throw new Error('[${componentName}]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      ${svg}
    </IconWrapper>
  );
}


${componentName}.displayName = '${componentName}';
export {${componentName}};
`;

export { reactIconTemplate };
