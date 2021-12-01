import * as React from "react";
import Link from "next/link";
import { styled, theme } from "@trueplan/forecast-theme";
import { Box } from "@trueplan/forecast-components";
import { posts } from "../../utils/getAllPosts";
import { NavItem } from "./nav-item";

const StyledNavCategory = styled("span", {
  color: theme.colors.textLight,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
});

const StyledNavLink = styled("a", {
  textDecoration: "none",
  color: theme.colors.textMedium,
  fontSize: theme.fontSizes[20],
  lineHeight: theme.lineHeights[20],
  "&:hover": {
    color: theme.colors.textBlue,
  },
  "&:focus": {
    color: theme.colors.textBlue,
  },
});

const Navigation: React.FC = () => {
  return (
    <>
      <Box as="ul" css={{ margin: "0", padding: "0", listStyle: "none" }}>
        <Box as="li">
          <Link href="/" passHref>
            <StyledNavLink>Overview</StyledNavLink>
          </Link>
        </Box>
      </Box>

      <Box
        as="ul"
        css={{
          margin: "0",
          marginTop: "$25",
          marginBottom: "$25",
          padding: "0",
          listStyle: "none",
        }}
      >
        <Box as="li">
          <Link href="/" passHref>
            <StyledNavCategory>Tokens</StyledNavCategory>
          </Link>
        </Box>
        <Box as="li">
          <Link href="/" passHref>
            <StyledNavLink>Tokens</StyledNavLink>
          </Link>
        </Box>
        <Box as="li">
          <Link href="/" passHref>
            <StyledNavLink>Icons</StyledNavLink>
          </Link>
        </Box>
      </Box>

      <Box
        as="ul"
        css={{
          margin: "0",
          marginTop: "$25",
          marginBottom: "$25",
          padding: "0",
          listStyle: "none",
        }}
      >
        <Box as="li">
          <Link href="/" passHref>
            <StyledNavCategory>Components</StyledNavCategory>
          </Link>
        </Box>
        {posts.map((post, index) => (
          <NavItem key={index} post={post} />
        ))}
      </Box>
    </>
  );
};

export { Navigation };
