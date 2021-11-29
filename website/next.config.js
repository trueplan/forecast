/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@trueplan/forecast-components",
  "@trueplan/forecast-theme",
  "@trueplan/forecast-icons",
]);

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withTM(
  withMDX({
    reactStrictMode: true,
    // Pick up MDX files in the /pages/ directory
    pageExtensions: ["ts", "tsx", "md", "mdx"],
  })
);
