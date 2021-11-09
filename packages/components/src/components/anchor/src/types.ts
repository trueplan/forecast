// We may want to move this to a shared location
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>;

export type AnchorTabIndexes = 0 | -1;
export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorSizes = 'small' | 'medium' | 'large';

export interface AnchorProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'css'> {
  as?: As;
  isExternal?: boolean;
  noUnderline?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  rel?: string;
  size?: AnchorSizes;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
  to?: string;
}
