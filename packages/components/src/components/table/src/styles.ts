import { styled, theme } from "@trueplan/forecast-theme";

const border = `1px solid ${theme.colors.gray40}`;
const cellPadding = `$30 $35`;

export const StyledTable = styled("table", {
  border,
  backgroundColor: theme.colors.white,
  borderCollapse: "collapse",
  width: "100%",
  variants: {
    tableLayout: {
      auto: {
        tableLayout: "auto",
      },
      fixed: {
        tableLayout: "fixed",
      },
    },
  },
});

export const StyledTHead = styled("thead", {
  borderBottom: border,
});

export const StyledTR = styled("tr", { borderBottom: border });

export const StyledTD = styled("td", {
  padding: cellPadding,
});

export const StyledTH = styled("th", {
  padding: cellPadding,
  textAlign: "left",
});
