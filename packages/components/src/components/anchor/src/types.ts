// We may want to move this to a shared location
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>;

export type AnchorTabIndexes = 0 | -1;
export type AnchorTargets = "_self" | "_blank" | "_parent" | "_top";
export type AnchorSizes = "small" | "medium" | "large";

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Sets the render element of the component. Prefer 'a' or 'button'.
   */
  as?: As;
  /**
   * Sets target to "_blank" and rel to "noreferrer noopener".
   */
  isExternal?: boolean;
  /**
   * Removes the underline style on the anchor.
   */
  noUnderline?: boolean;
  /**
   * Provides a way to the anchor element created in the render method.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  /**
   * Defines the relationship between a linked resource and the current document.
   */
  rel?: string;
  /**
   * Sets the font size of the anchor.
   */
  size?: AnchorSizes;
  /**
   * Where the anchor participates in sequential keyboard navigation.
   */
  tabIndex?: AnchorTabIndexes;
  /**
   * Where to display the linked URL, as the name for a browsing context, i.e. A blank window.
   */
  target?: AnchorTargets;
  /**
   * Used with React Router or NextJS to set the route the anchor links to.
   */
  to?: string;
}
