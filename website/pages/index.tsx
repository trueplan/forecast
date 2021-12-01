import type { NextPage } from "next";
import Link from "next/link";
import { Anchor, Box, Heading, Paragraph } from "@trueplan/forecast-components";
import { styled, theme } from "@trueplan/forecast-theme";
import { HomeTile } from "../components/home-tile";
import { posts } from "../utils/getAllPosts";

const StyledCardLink = styled("a", {
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.borderLight,
  borderRadius: theme.radii[30],
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  paddingTop: theme.space[30],
  paddingBottom: theme.space[30],
  paddingRight: theme.space[40],
  paddingLeft: theme.space[40],
  textDecoration: "none",
  display: "flex",
  gap: theme.space[20],
  color: theme.colors.textMedium,
  transition: "border-color 100ms ease-in",
  "&:hover": {
    borderColor: theme.colors.borderDark,
  },
  "&:focus": {
    borderColor: theme.colors.borderDark,
    outline: "$borderWidths$20 solid $colors$gray40 !important",
    outlineOffset: "1px",
  },
});

const Home: NextPage = () => {
  return (
    <>
      <Box as="header">
        <Heading as="h1" size="heading10" marginBottom="space0">
          Forecast Design System
        </Heading>
        <Paragraph marginBottom="space0">
          By{" "}
          <Anchor href="https://trueplan.io" isExternal>
            TruePlan
          </Anchor>
        </Paragraph>
      </Box>
      <Box as="section" css={{ marginTop: "$80" }}>
        <Heading as="h5" size="heading50">
          Foundation
        </Heading>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "$35",
          }}
        >
          <Link href="/tokens" passHref>
            <StyledCardLink>
              Tokens
              <Box as="span" css={{ marginLeft: "auto" }}>
                &#8594;
              </Box>
            </StyledCardLink>
          </Link>
          <Link href="/icons" passHref>
            <StyledCardLink>
              Icons
              <Box as="span" css={{ marginLeft: "auto" }}>
                &#8594;
              </Box>
            </StyledCardLink>
          </Link>
        </Box>
      </Box>
      <Box as="section" css={{ marginTop: "$80" }}>
        <Heading as="h5" size="heading50">
          Components
        </Heading>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "$35",
          }}
        >
          {posts.map((post, index) => (
            <HomeTile key={index} post={post} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
