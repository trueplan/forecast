// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";
import { theme } from "@forecast/theme";
import { Box } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Layout/Box",
  component: Box,
};

export const Default: React.FC = () => (
  <>
    <Box
      css={{
        backgroundColor: "$backgroundInverse",
        color: "$textDark",
        p: "$20",
        borderStyle: "solid",
        borderWidth: "$20",
        borderRadius: "$30",
        borderColor: "$blue150",
      }}
    >
      I'm a box and can take any styles as well as any of our theme styles.
    </Box>
  </>
);

export const Card: React.FC = () => (
  <Box css={{ maxWidth: "280px" }}>
    <Box
      css={{
        backgroundColor: "$white",
        color: "$textLight",
        textAlign: "center",
        p: "$20",
        borderStyle: "solid",
        borderWidth: "$10",
        btlr: "$30",
        btrr: "$30",
        borderColor: "$borderLight",
        textTransform: "uppercase",
        fontSize: "$10",
      }}
    >
      Requests
    </Box>
    <Box
      css={{
        backgroundColor: "$white",
        textAlign: "center",
        p: "$40",
        borderLeftStyle: "solid",
        borderLeftWidth: "$10",
        borderLeftColor: "$borderLight",
        borderRightStyle: "solid",
        borderRightWidth: "$10",
        borderRightColor: "$borderLight",
        borderBottomStyle: "solid",
        borderBottomWidth: "$10",
        borderBottomColor: "$borderLight",
        bblr: "$30",
        bbrr: "$30",
      }}
    >
      <Box as="p" css={{ color: "$textLight" }}>
        You do not have any drafts created.
      </Box>
      <Box
        css={{
          color: "$textLight",
          fontSize: "$80",
          lineHeight: "$80",
          fw: "$medium",
          mt: "$40",
        }}
      >
        0
      </Box>
      <Box
        as="button"
        css={{
          backgroundColor: "$white",
          py: "$20",
          px: "$60",
          mt: "$60",
          fw: "$medium",
          borderColor: "$borderLight",
          borderWidth: "$10",
          br: "$30",
          borderStyle: "solid",
          cursor: "pointer",
          color: "$textMedium",
          fontFamily: "inherit",
          fontSize: "$30",
          "&:hover": {
            borderColor: "$borderDark",
          },
        }}
      >
        Add Requests
      </Box>
    </Box>
  </Box>
);

export const Grid: React.FC = () => (
  <>
    <Box
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr);",
        gap: "$20",
      }}
    >
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column one
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column two
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column three
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column four
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column one
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column two
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column three
      </Box>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$backgroundDark",
          color: "$textInverse",
          p: "$20",
        }}
      >
        Column four
      </Box>
    </Box>
  </>
);
