import Link from "next/link";
import { styled, theme } from "@trueplan/forecast-theme";
import { Box } from "@trueplan/forecast-components";

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

interface HomeTileProps {
  post: {
    module: { meta };
  };
}

const HomeTile: React.FC<HomeTileProps> = ({ post }) => {
  const {
    module: { meta },
  } = post;

  return (
    <Link href={meta.slug} passHref>
      <StyledCardLink>
        {meta.title}
        <Box as="span" css={{ marginLeft: "auto" }}>
          &#8594;
        </Box>
      </StyledCardLink>
    </Link>
  );
};

export { HomeTile };
