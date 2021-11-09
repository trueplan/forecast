import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Jest complains about types here, but everything seems to render properly.
// Could be something in our jest config or tsconfig.
export const { styled, css, theme } = createStitches({
  prefix: "tp",
  theme: {
    colors: {
      green10: "#E7F9F2",
      green20: "#CFF2E5",
      green30: "#B7ECD7",
      green40: "#9FE5CA",
      green50: "#87DFBD",
      green60: "#6FD8B0",
      green70: "#57D2A3",
      green80: "#3FCB95",
      green90: "#27C588",
      green: "#0fbe7b",
      green110: "#0EAB6F",
      green120: "#0C9862",
      green130: "#0B8556",
      green140: "#09724A",
      green150: "#085F3E",
      green160: "#064C31",
      green170: "#043925",
      green180: "#032619",
      green190: "#01130C",
      blue10: "#E7F0FF",
      blue20: "#D0E1FF",
      blue30: "#B8D2FF",
      blue40: "#A0C3FF",
      blue50: "#89B5FF",
      blue60: "#71A6FF",
      blue70: "#5997FF",
      blue80: "#4188FF",
      blue90: "#2A79FF",
      blue: "#126aff",
      blue110: "#105FE6",
      blue120: "#0E55CC",
      blue130: "#0D4AB3",
      blue140: "#0B4099",
      blue150: "#093580",
      blue160: "#072A66",
      blue170: "#05204C",
      blue180: "#041533",
      blue190: "#020B19",
      royal10: "#E6EBF6",
      royal20: "#CDD8EE",
      royal30: "#B4C4E5",
      royal40: "#9BB0DC",
      royal50: "#839DD4",
      royal60: "#6A89CB",
      royal70: "#5175C2",
      royal80: "#3861B9",
      royal90: "#1F4EB1",
      royal: "#063aa8",
      royal110: "#053497",
      royal120: "#052E86",
      royal130: "#042976",
      royal140: "#042365",
      royal150: "#031D54",
      royal160: "#021743",
      royal170: "#021132",
      royal180: "#010C22",
      royal190: "#010611",
      sky10: "#F3FCFE",
      sky20: "#E7F9FC",
      sky30: "#DBF6FB",
      sky40: "#CFF3F9",
      sky50: "#C3F1F8",
      sky60: "#B6EEF7",
      sky70: "#AAEBF5",
      sky80: "#9EE8F4",
      sky90: "#92E5F2",
      sky: "#86e2f1",
      sky110: "#79CBD9",
      sky120: "#6BB5C1",
      sky130: "#5E9EA9",
      sky140: "#508891",
      sky150: "#437179",
      sky160: "#365A60",
      sky170: "#284448",
      sky180: "#1B2D30",
      sky190: "#0D1718",
      lilac10: "#F7F0FD",
      lilac20: "#F0E0FB",
      lilac30: "#E8D1F8",
      lilac40: "#E0C1F6",
      lilac50: "#D9B2F4",
      lilac60: "#D1A3F2",
      lilac70: "#C993F0",
      lilac80: "#C184ED",
      lilac90: "#BA74EB",
      lilac: "#b265e9",
      lilac110: "#A05BD2",
      lilac120: "#8E51BA",
      lilac130: "#7D47A3",
      lilac140: "#6B3D8C",
      lilac150: "#593375",
      lilac160: "#47285D",
      lilac170: "#351E46",
      lilac180: "#24142F",
      lilac190: "#120A17",
      yellow10: "#FEFBEF",
      yellow20: "#FCF6DE",
      yellow30: "#FBF2CE",
      yellow40: "#F9EEBE",
      yellow50: "#F8EAAE",
      yellow60: "#F7E59D",
      yellow70: "#F5E18D",
      yellow80: "#F4DD7D",
      yellow90: "#F2D86C",
      yellow: "#f1d45c",
      yellow110: "#D9BF53",
      yellow120: "#C1AA4A",
      yellow130: "#A99440",
      yellow140: "#917F37",
      yellow150: "#796A2E",
      yellow160: "#605525",
      yellow170: "#48401C",
      yellow180: "#302A12",
      yellow190: "#181509",
      red10: "#FDEFEF",
      red20: "#FAE0E0",
      red30: "#F8D0D0",
      red40: "#F5C1C1",
      red50: "#F3B1B1",
      red60: "#F1A1A1",
      red70: "#EE9292",
      red80: "#EC8282",
      red90: "#E97373",
      red: "#e76363",
      red110: "#D05959",
      red120: "#B94F4F",
      red130: "#A24545",
      red140: "#8B3B3B",
      red150: "#743232",
      red160: "#5C2828",
      red170: "#451E1E",
      red180: "#2E1414",
      red190: "#170A0A",
      gray10: "#f9fafc",
      gray20: "#eff2f7",
      gray30: "#e5e9f2",
      gray40: "#e0e6ed",
      gray50: "#d3dce6",
      gray60: "#c0ccda",
      gray70: "#8492a6",
      gray80: "#3c4858",
      gray90: "#273444",
      gray100: "#1f2d3d",
      white: "#ffffff",
      textDark: "$gray100",
      textMedium: "$gray80",
      textLight: "$gray70",
      textInverse: "$white",
      textGreen: "$green150",
      textRed: "$red",
      textBlue: "$royal150",
      backgroundInverse: "$white",
      backgroundLight: "$gray10",
      backgroundDark: "$gray100",
      borderInverse: "$white",
      borderLight: "$gray40",
      borderMedium: "$gray70",
      borderDark: "$gray80",
      borderRed: "$red",
      borderGreen: "$green150",
      overlay: "rgba(31, 45, 61, 0.2)",
    },
    fontSizes: {
      10: "0.75rem", // 12px
      20: "0.875rem", //14px
      30: "1rem", // 16px
      40: "1.25rem", // 20px
      50: "1.5rem", // 24px
      60: "2rem", // 32px
      70: "2.5rem", // 40px
      80: "5rem", // 80px
    },
    fonts: {
      inter:
        '"Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      roboto: '"Roboto Mono", monospace',
    },
    fontWeights: {
      normal: "400",
      medium: "500",
      semiBold: "600",
    },
    lineHeights: {
      0: "0", // 0px for icon lineHeight
      10: "1.375rem", // 22px
      20: "1.5rem", // 24px
      30: "1.625rem", // 26px
      40: "1.875rem", // 30px
      50: "2.125rem", // 34px
      60: "2.625rem", // 42px
      70: "3.125rem", // 50px
      80: "5.625rem", // 90px
    },
    borderWidths: {
      10: "1px",
      20: "2px",
    },
    radii: {
      30: "3px",
      100: "100px",
      circle: "50%",
    },
    space: {
      0: "0rem", // 0px
      5: "0.125rem", // 2px
      10: "0.25rem", // 4px
      15: "0.375rem", // 6px
      20: "0.5rem", // 8px
      25: "0.75rem", // 12px
      30: "1rem", // 16px
      35: "1.25rem", // 20px
      40: "1.5rem", // 24px
      50: "2rem", // 32px
      60: "2.5rem", // 40px
      70: "4rem", // 48px
      80: "4rem", // 64px
      90: "5rem", // 80px
    },
  },
  utils: {
    br: (value: Stitches.ScaleValue<"radii">) => ({
      borderRadius: value,
    }),
    btlr: (value: Stitches.ScaleValue<"radii">) => ({
      borderTopLeftRadius: value,
    }),
    btrr: (value: Stitches.ScaleValue<"radii">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.ScaleValue<"radii">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.ScaleValue<"radii">) => ({
      borderBottomLeftRadius: value,
    }),
    bw: (value: Stitches.ScaleValue<"borderWidths">) => ({
      borderWidth: value,
    }),
    btw: (value: Stitches.ScaleValue<"borderWidths">) => ({
      borderTopWidth: value,
    }),
    brw: (value: Stitches.ScaleValue<"borderWidths">) => ({
      borderRightWidth: value,
    }),
    bbw: (value: Stitches.ScaleValue<"borderWidths">) => ({
      borderBottomWidth: value,
    }),
    blw: (value: Stitches.ScaleValue<"borderWidths">) => ({
      borderLeftWidth: value,
    }),
    fs: (value: Stitches.ScaleValue<"fontSizes">) => ({
      fontSize: value,
    }),
    fw: (value: Stitches.ScaleValue<"fontWeights">) => ({
      fontWeight: value,
    }),
    lh: (value: Stitches.ScaleValue<"lineHeights">) => ({
      lineHeight: value,
    }),
    m: (value: Stitches.ScaleValue<"space">) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<"space">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<"space">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.ScaleValue<"space">) => ({
      padding: value,
    }),
    pt: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<"space">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<"space">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
