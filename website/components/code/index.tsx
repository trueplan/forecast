import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/nightOwlLight";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as components from "@trueplan/forecast-components";
import {
  StyledPreview,
  StyledComponentPreview,
  StyledSnippet,
  StyledStaticSnippet,
} from "./styles";
import type { CodeProps } from "./types";

export const Code: React.FC<CodeProps> = ({ children, lang, live = false }) => {
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        scope={{
          React,
          ...components,
        }}
        language={lang}
        theme={prismTheme}
      >
        <StyledPreview>
          <StyledComponentPreview>
            <LivePreview />
          </StyledComponentPreview>
          <StyledSnippet>
            <LiveEditor
              style={{ backgroundColor: "transparent", fontFamily: "inherit" }}
            />
          </StyledSnippet>
          <LiveError />
        </StyledPreview>
      </LiveProvider>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={lang}
      theme={prismTheme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <StyledStaticSnippet>
          <pre
            style={{
              ...style,
              backgroundColor: "transparent",
              fontFamily: "inherit",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </StyledStaticSnippet>
      )}
    </Highlight>
  );
};
