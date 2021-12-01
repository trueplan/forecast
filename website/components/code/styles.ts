import { styled, theme } from "@trueplan/forecast-theme";

export const StyledPreview = styled("div", {
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.borderLight,
  borderStyle: "solid",
  borderRadius: theme.radii[30],
  borderWidth: theme.borderWidths[10],
  marginTop: theme.space[20],
  marginBottom: theme.space[90],
});

export const StyledComponentPreview = styled("div", {
  backgroundColor: theme.colors.white,
  borderBottomColor: theme.colors.borderLight,
  borderBottomStyle: "solid",
  borderBottomWidth: theme.borderWidths[10],
  width: "100%",
  padding: theme.space[40],
  paddingTop: theme.space[60],
  paddingBottom: theme.space[60],
  display: "flex",
  justifyContent: "center",
});

export const StyledSnippet = styled("div", {
  backgroundColor: theme.colors.gray20,
  borderBottomLeftRadius: theme.radii[30],
  borderBottomRightRadius: theme.radii[30],
  overflow: "auto",
  fontSize: theme.fontSizes[20],
  fontFamily: theme.fonts.roboto,
  lineHeight: theme.lineHeights[20],
  direction: "ltr",
  whiteSpace: "pre",
  textAlign: "left",
  wordBreak: "normal",
  wordSpacing: "normal",
  hyphens: "none",
});

export const StyledStaticSnippet = styled("div", {
  backgroundColor: theme.colors.gray20,
  borderColor: theme.colors.borderLight,
  borderStyle: "solid",
  borderRadius: theme.radii[30],
  borderWidth: theme.borderWidths[10],
  marginTop: theme.space[20],
  marginBottom: theme.space[90],
  padding: theme.space[40],
  overflow: "auto",
  fontSize: theme.fontSizes[20],
  fontFamily: theme.fonts.roboto,
  lineHeight: theme.lineHeights[20],
  direction: "ltr",
  whiteSpace: "pre",
  textAlign: "left",
  wordBreak: "normal",
  wordSpacing: "normal",
  hyphens: "none",
});
