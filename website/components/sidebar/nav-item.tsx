import Link from "next/link";
import { styled, theme } from "@trueplan/forecast-theme";
import { Box } from "@trueplan/forecast-components";

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

interface NavItemProps {
  post: {
    module: { meta };
  };
}

const NavItem: React.FC<NavItemProps> = ({ post }) => {
  const {
    module: { meta },
  } = post;

  return (
    <Box as="li">
      <Link href={meta.slug} passHref>
        <StyledNavLink>{meta.title}</StyledNavLink>
      </Link>
    </Box>
  );
};

export { NavItem };
