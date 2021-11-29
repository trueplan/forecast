export interface CodeProps {
  children: string;
  lang: "jsx" | "tsx" | "bash";
  live?: boolean;
  bg?: "white" | "blue" | "darkest";
  fullWidth?: boolean;
}

export interface PreviewProps {
  bg: "white" | "blue" | "darkest";
}
